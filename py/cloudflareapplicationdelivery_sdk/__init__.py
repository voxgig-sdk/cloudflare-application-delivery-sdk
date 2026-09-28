# CloudflareApplicationDelivery SDK

from cloudflareapplicationdelivery_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareapplicationdelivery_sdk.core.utility_type import CloudflareApplicationDeliveryUtility
from cloudflareapplicationdelivery_sdk.core.spec import CloudflareApplicationDeliverySpec
from cloudflareapplicationdelivery_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflareapplicationdelivery_sdk.utility import register

# Load features
from cloudflareapplicationdelivery_sdk.feature.base_feature import CloudflareApplicationDeliveryBaseFeature
from cloudflareapplicationdelivery_sdk.features import _has_feature, _make_feature


class CloudflareApplicationDeliverySDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareApplicationDeliveryUtility()
        self._utility = utility

        from cloudflareapplicationdelivery_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareApplicationDeliveryUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareApplicationDeliverySpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareApplicationDeliverySDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareApplicationDeliverySDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ArgoConfigApiResponseSingle(self, data=None) -> "ArgoConfigApiResponseSingleEntity":
        """Entity factory: client.ArgoConfigApiResponseSingle().list() / client.ArgoConfigApiResponseSingle().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.argo_config_api_response_single_entity import ArgoConfigApiResponseSingleEntity
        return ArgoConfigApiResponseSingleEntity(self, data)


    def CachePurgeApiResponseSingleId(self, data=None) -> "CachePurgeApiResponseSingleIdEntity":
        """Entity factory: client.CachePurgeApiResponseSingleId().list() / client.CachePurgeApiResponseSingleId().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.cache_purge_api_response_single_id_entity import CachePurgeApiResponseSingleIdEntity
        return CachePurgeApiResponseSingleIdEntity(self, data)


    def CacheReserveClear(self, data=None) -> "CacheReserveClearEntity":
        """Entity factory: client.CacheReserveClear().list() / client.CacheReserveClear().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.cache_reserve_clear_entity import CacheReserveClearEntity
        return CacheReserveClearEntity(self, data)


    def CustomAssetsForAZone(self, data=None) -> "CustomAssetsForAZoneEntity":
        """Entity factory: client.CustomAssetsForAZone().list() / client.CustomAssetsForAZone().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_assets_for_a_zone_entity import CustomAssetsForAZoneEntity
        return CustomAssetsForAZoneEntity(self, data)


    def CustomAssetsForAnAccount(self, data=None) -> "CustomAssetsForAnAccountEntity":
        """Entity factory: client.CustomAssetsForAnAccount().list() / client.CustomAssetsForAnAccount().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_assets_for_an_account_entity import CustomAssetsForAnAccountEntity
        return CustomAssetsForAnAccountEntity(self, data)


    def CustomPage(self, data=None) -> "CustomPageEntity":
        """Entity factory: client.CustomPage().list() / client.CustomPage().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_page_entity import CustomPageEntity
        return CustomPageEntity(self, data)


    def CustomPagesCustomAssetResult(self, data=None) -> "CustomPagesCustomAssetResultEntity":
        """Entity factory: client.CustomPagesCustomAssetResult().list() / client.CustomPagesCustomAssetResult().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_pages_custom_asset_result_entity import CustomPagesCustomAssetResultEntity
        return CustomPagesCustomAssetResultEntity(self, data)


    def CustomPagesCustomAssetResultList(self, data=None) -> "CustomPagesCustomAssetResultListEntity":
        """Entity factory: client.CustomPagesCustomAssetResultList().list() / client.CustomPagesCustomAssetResultList().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_pages_custom_asset_result_list_entity import CustomPagesCustomAssetResultListEntity
        return CustomPagesCustomAssetResultListEntity(self, data)


    def CustomPagesPreviewTokenResult(self, data=None) -> "CustomPagesPreviewTokenResultEntity":
        """Entity factory: client.CustomPagesPreviewTokenResult().list() / client.CustomPagesPreviewTokenResult().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.custom_pages_preview_token_result_entity import CustomPagesPreviewTokenResultEntity
        return CustomPagesPreviewTokenResultEntity(self, data)


    def ManagedTransform(self, data=None) -> "ManagedTransformEntity":
        """Entity factory: client.ManagedTransform().list() / client.ManagedTransform().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.managed_transform_entity import ManagedTransformEntity
        return ManagedTransformEntity(self, data)


    def ObservatoryAvailability(self, data=None) -> "ObservatoryAvailabilityEntity":
        """Entity factory: client.ObservatoryAvailability().list() / client.ObservatoryAvailability().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_availability_entity import ObservatoryAvailabilityEntity
        return ObservatoryAvailabilityEntity(self, data)


    def ObservatoryCreateSchedule(self, data=None) -> "ObservatoryCreateScheduleEntity":
        """Entity factory: client.ObservatoryCreateSchedule().list() / client.ObservatoryCreateSchedule().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_create_schedule_entity import ObservatoryCreateScheduleEntity
        return ObservatoryCreateScheduleEntity(self, data)


    def ObservatoryPageTestResponseCollection(self, data=None) -> "ObservatoryPageTestResponseCollectionEntity":
        """Entity factory: client.ObservatoryPageTestResponseCollection().list() / client.ObservatoryPageTestResponseCollection().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_page_test_response_collection_entity import ObservatoryPageTestResponseCollectionEntity
        return ObservatoryPageTestResponseCollectionEntity(self, data)


    def ObservatoryPageTestResponseSingle(self, data=None) -> "ObservatoryPageTestResponseSingleEntity":
        """Entity factory: client.ObservatoryPageTestResponseSingle().list() / client.ObservatoryPageTestResponseSingle().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_page_test_response_single_entity import ObservatoryPageTestResponseSingleEntity
        return ObservatoryPageTestResponseSingleEntity(self, data)


    def ObservatoryPagesResponseCollection(self, data=None) -> "ObservatoryPagesResponseCollectionEntity":
        """Entity factory: client.ObservatoryPagesResponseCollection().list() / client.ObservatoryPagesResponseCollection().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_pages_response_collection_entity import ObservatoryPagesResponseCollectionEntity
        return ObservatoryPagesResponseCollectionEntity(self, data)


    def ObservatoryScheduleResponseSingle(self, data=None) -> "ObservatoryScheduleResponseSingleEntity":
        """Entity factory: client.ObservatoryScheduleResponseSingle().list() / client.ObservatoryScheduleResponseSingle().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_schedule_response_single_entity import ObservatoryScheduleResponseSingleEntity
        return ObservatoryScheduleResponseSingleEntity(self, data)


    def ObservatoryTrend(self, data=None) -> "ObservatoryTrendEntity":
        """Entity factory: client.ObservatoryTrend().list() / client.ObservatoryTrend().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.observatory_trend_entity import ObservatoryTrendEntity
        return ObservatoryTrendEntity(self, data)


    def OriginCloudRegion(self, data=None) -> "OriginCloudRegionEntity":
        """Entity factory: client.OriginCloudRegion().list() / client.OriginCloudRegion().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.origin_cloud_region_entity import OriginCloudRegionEntity
        return OriginCloudRegionEntity(self, data)


    def OriginPostQuantum(self, data=None) -> "OriginPostQuantumEntity":
        """Entity factory: client.OriginPostQuantum().list() / client.OriginPostQuantum().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.origin_post_quantum_entity import OriginPostQuantumEntity
        return OriginPostQuantumEntity(self, data)


    def Schedule(self, data=None) -> "ScheduleEntity":
        """Entity factory: client.Schedule().list() / client.Schedule().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.schedule_entity import ScheduleEntity
        return ScheduleEntity(self, data)


    def SmartShield(self, data=None) -> "SmartShieldEntity":
        """Entity factory: client.SmartShield().list() / client.SmartShield().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.smart_shield_entity import SmartShieldEntity
        return SmartShieldEntity(self, data)


    def SmartTieredCache(self, data=None) -> "SmartTieredCacheEntity":
        """Entity factory: client.SmartTieredCache().list() / client.SmartTieredCache().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.smart_tiered_cache_entity import SmartTieredCacheEntity
        return SmartTieredCacheEntity(self, data)


    def SmartshieldResponseCollection(self, data=None) -> "SmartshieldResponseCollectionEntity":
        """Entity factory: client.SmartshieldResponseCollection().list() / client.SmartshieldResponseCollection().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.smartshield_response_collection_entity import SmartshieldResponseCollectionEntity
        return SmartshieldResponseCollectionEntity(self, data)


    def SmartshieldSingleHc(self, data=None) -> "SmartshieldSingleHcEntity":
        """Entity factory: client.SmartshieldSingleHc().list() / client.SmartshieldSingleHc().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.smartshield_single_hc_entity import SmartshieldSingleHcEntity
        return SmartshieldSingleHcEntity(self, data)


    def SmartshieldSingleHcId(self, data=None) -> "SmartshieldSingleHcIdEntity":
        """Entity factory: client.SmartshieldSingleHcId().list() / client.SmartshieldSingleHcId().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.smartshield_single_hc_id_entity import SmartshieldSingleHcIdEntity
        return SmartshieldSingleHcIdEntity(self, data)


    def Test(self, data=None) -> "TestEntity":
        """Entity factory: client.Test().list() / client.Test().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.test_entity import TestEntity
        return TestEntity(self, data)


    def TieredCaching(self, data=None) -> "TieredCachingEntity":
        """Entity factory: client.TieredCaching().list() / client.TieredCaching().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.tiered_caching_entity import TieredCachingEntity
        return TieredCachingEntity(self, data)


    def UrlNormalization(self, data=None) -> "UrlNormalizationEntity":
        """Entity factory: client.UrlNormalization().list() / client.UrlNormalization().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.url_normalization_entity import UrlNormalizationEntity
        return UrlNormalizationEntity(self, data)


    def ZoneCacheSetting(self, data=None) -> "ZoneCacheSettingEntity":
        """Entity factory: client.ZoneCacheSetting().list() / client.ZoneCacheSetting().load({"id": ...})."""
        from cloudflareapplicationdelivery_sdk.entity.zone_cache_setting_entity import ZoneCacheSettingEntity
        return ZoneCacheSettingEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareApplicationDeliverySDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflareapplicationdelivery_sdk.entity.argo_config_api_response_single_entity import ArgoConfigApiResponseSingleEntity
    from cloudflareapplicationdelivery_sdk.entity.cache_purge_api_response_single_id_entity import CachePurgeApiResponseSingleIdEntity
    from cloudflareapplicationdelivery_sdk.entity.cache_reserve_clear_entity import CacheReserveClearEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_assets_for_a_zone_entity import CustomAssetsForAZoneEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_assets_for_an_account_entity import CustomAssetsForAnAccountEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_page_entity import CustomPageEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_pages_custom_asset_result_entity import CustomPagesCustomAssetResultEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_pages_custom_asset_result_list_entity import CustomPagesCustomAssetResultListEntity
    from cloudflareapplicationdelivery_sdk.entity.custom_pages_preview_token_result_entity import CustomPagesPreviewTokenResultEntity
    from cloudflareapplicationdelivery_sdk.entity.managed_transform_entity import ManagedTransformEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_availability_entity import ObservatoryAvailabilityEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_create_schedule_entity import ObservatoryCreateScheduleEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_page_test_response_collection_entity import ObservatoryPageTestResponseCollectionEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_page_test_response_single_entity import ObservatoryPageTestResponseSingleEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_pages_response_collection_entity import ObservatoryPagesResponseCollectionEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_schedule_response_single_entity import ObservatoryScheduleResponseSingleEntity
    from cloudflareapplicationdelivery_sdk.entity.observatory_trend_entity import ObservatoryTrendEntity
    from cloudflareapplicationdelivery_sdk.entity.origin_cloud_region_entity import OriginCloudRegionEntity
    from cloudflareapplicationdelivery_sdk.entity.origin_post_quantum_entity import OriginPostQuantumEntity
    from cloudflareapplicationdelivery_sdk.entity.schedule_entity import ScheduleEntity
    from cloudflareapplicationdelivery_sdk.entity.smart_shield_entity import SmartShieldEntity
    from cloudflareapplicationdelivery_sdk.entity.smart_tiered_cache_entity import SmartTieredCacheEntity
    from cloudflareapplicationdelivery_sdk.entity.smartshield_response_collection_entity import SmartshieldResponseCollectionEntity
    from cloudflareapplicationdelivery_sdk.entity.smartshield_single_hc_entity import SmartshieldSingleHcEntity
    from cloudflareapplicationdelivery_sdk.entity.smartshield_single_hc_id_entity import SmartshieldSingleHcIdEntity
    from cloudflareapplicationdelivery_sdk.entity.test_entity import TestEntity
    from cloudflareapplicationdelivery_sdk.entity.tiered_caching_entity import TieredCachingEntity
    from cloudflareapplicationdelivery_sdk.entity.url_normalization_entity import UrlNormalizationEntity
    from cloudflareapplicationdelivery_sdk.entity.zone_cache_setting_entity import ZoneCacheSettingEntity
