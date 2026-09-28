"use strict";
// CloudflareApplicationDelivery Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareApplicationDeliverySDK = exports.CloudflareApplicationDeliveryEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ArgoConfigApiResponseSingleEntity_1 = require("./entity/ArgoConfigApiResponseSingleEntity");
const CachePurgeApiResponseSingleIdEntity_1 = require("./entity/CachePurgeApiResponseSingleIdEntity");
const CacheReserveClearEntity_1 = require("./entity/CacheReserveClearEntity");
const CustomAssetsForAZoneEntity_1 = require("./entity/CustomAssetsForAZoneEntity");
const CustomAssetsForAnAccountEntity_1 = require("./entity/CustomAssetsForAnAccountEntity");
const CustomPageEntity_1 = require("./entity/CustomPageEntity");
const CustomPagesCustomAssetResultEntity_1 = require("./entity/CustomPagesCustomAssetResultEntity");
const CustomPagesCustomAssetResultListEntity_1 = require("./entity/CustomPagesCustomAssetResultListEntity");
const CustomPagesPreviewTokenResultEntity_1 = require("./entity/CustomPagesPreviewTokenResultEntity");
const ManagedTransformEntity_1 = require("./entity/ManagedTransformEntity");
const ObservatoryAvailabilityEntity_1 = require("./entity/ObservatoryAvailabilityEntity");
const ObservatoryCreateScheduleEntity_1 = require("./entity/ObservatoryCreateScheduleEntity");
const ObservatoryPageTestResponseCollectionEntity_1 = require("./entity/ObservatoryPageTestResponseCollectionEntity");
const ObservatoryPageTestResponseSingleEntity_1 = require("./entity/ObservatoryPageTestResponseSingleEntity");
const ObservatoryPagesResponseCollectionEntity_1 = require("./entity/ObservatoryPagesResponseCollectionEntity");
const ObservatoryScheduleResponseSingleEntity_1 = require("./entity/ObservatoryScheduleResponseSingleEntity");
const ObservatoryTrendEntity_1 = require("./entity/ObservatoryTrendEntity");
const OriginCloudRegionEntity_1 = require("./entity/OriginCloudRegionEntity");
const OriginPostQuantumEntity_1 = require("./entity/OriginPostQuantumEntity");
const ScheduleEntity_1 = require("./entity/ScheduleEntity");
const SmartShieldEntity_1 = require("./entity/SmartShieldEntity");
const SmartTieredCacheEntity_1 = require("./entity/SmartTieredCacheEntity");
const SmartshieldResponseCollectionEntity_1 = require("./entity/SmartshieldResponseCollectionEntity");
const SmartshieldSingleHcEntity_1 = require("./entity/SmartshieldSingleHcEntity");
const SmartshieldSingleHcIdEntity_1 = require("./entity/SmartshieldSingleHcIdEntity");
const TestEntity_1 = require("./entity/TestEntity");
const TieredCachingEntity_1 = require("./entity/TieredCachingEntity");
const UrlNormalizationEntity_1 = require("./entity/UrlNormalizationEntity");
const ZoneCacheSettingEntity_1 = require("./entity/ZoneCacheSettingEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareApplicationDeliveryEntityBase_1 = require("./CloudflareApplicationDeliveryEntityBase");
Object.defineProperty(exports, "CloudflareApplicationDeliveryEntityBase", { enumerable: true, get: function () { return CloudflareApplicationDeliveryEntityBase_1.CloudflareApplicationDeliveryEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareApplicationDeliverySDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareApplicationDeliverySDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareApplicationDeliverySDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareApplicationDeliverySDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.ArgoConfigApiResponseSingle().list()` / `client.ArgoConfigApiResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ArgoConfigApiResponseSingle(entopts) {
        const self = this;
        return new ArgoConfigApiResponseSingleEntity_1.ArgoConfigApiResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.CachePurgeApiResponseSingleId().list()` / `client.CachePurgeApiResponseSingleId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CachePurgeApiResponseSingleId(entopts) {
        const self = this;
        return new CachePurgeApiResponseSingleIdEntity_1.CachePurgeApiResponseSingleIdEntity(self, entopts);
    }
    // Entity access: `client.CacheReserveClear().list()` / `client.CacheReserveClear().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CacheReserveClear(entopts) {
        const self = this;
        return new CacheReserveClearEntity_1.CacheReserveClearEntity(self, entopts);
    }
    // Entity access: `client.CustomAssetsForAZone().list()` / `client.CustomAssetsForAZone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomAssetsForAZone(entopts) {
        const self = this;
        return new CustomAssetsForAZoneEntity_1.CustomAssetsForAZoneEntity(self, entopts);
    }
    // Entity access: `client.CustomAssetsForAnAccount().list()` / `client.CustomAssetsForAnAccount().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomAssetsForAnAccount(entopts) {
        const self = this;
        return new CustomAssetsForAnAccountEntity_1.CustomAssetsForAnAccountEntity(self, entopts);
    }
    // Entity access: `client.CustomPage().list()` / `client.CustomPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomPage(entopts) {
        const self = this;
        return new CustomPageEntity_1.CustomPageEntity(self, entopts);
    }
    // Entity access: `client.CustomPagesCustomAssetResult().list()` / `client.CustomPagesCustomAssetResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomPagesCustomAssetResult(entopts) {
        const self = this;
        return new CustomPagesCustomAssetResultEntity_1.CustomPagesCustomAssetResultEntity(self, entopts);
    }
    // Entity access: `client.CustomPagesCustomAssetResultList().list()` / `client.CustomPagesCustomAssetResultList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomPagesCustomAssetResultList(entopts) {
        const self = this;
        return new CustomPagesCustomAssetResultListEntity_1.CustomPagesCustomAssetResultListEntity(self, entopts);
    }
    // Entity access: `client.CustomPagesPreviewTokenResult().list()` / `client.CustomPagesPreviewTokenResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomPagesPreviewTokenResult(entopts) {
        const self = this;
        return new CustomPagesPreviewTokenResultEntity_1.CustomPagesPreviewTokenResultEntity(self, entopts);
    }
    // Entity access: `client.ManagedTransform().list()` / `client.ManagedTransform().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ManagedTransform(entopts) {
        const self = this;
        return new ManagedTransformEntity_1.ManagedTransformEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryAvailability().list()` / `client.ObservatoryAvailability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryAvailability(entopts) {
        const self = this;
        return new ObservatoryAvailabilityEntity_1.ObservatoryAvailabilityEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryCreateSchedule().list()` / `client.ObservatoryCreateSchedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryCreateSchedule(entopts) {
        const self = this;
        return new ObservatoryCreateScheduleEntity_1.ObservatoryCreateScheduleEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryPageTestResponseCollection().list()` / `client.ObservatoryPageTestResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryPageTestResponseCollection(entopts) {
        const self = this;
        return new ObservatoryPageTestResponseCollectionEntity_1.ObservatoryPageTestResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryPageTestResponseSingle().list()` / `client.ObservatoryPageTestResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryPageTestResponseSingle(entopts) {
        const self = this;
        return new ObservatoryPageTestResponseSingleEntity_1.ObservatoryPageTestResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryPagesResponseCollection().list()` / `client.ObservatoryPagesResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryPagesResponseCollection(entopts) {
        const self = this;
        return new ObservatoryPagesResponseCollectionEntity_1.ObservatoryPagesResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryScheduleResponseSingle().list()` / `client.ObservatoryScheduleResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryScheduleResponseSingle(entopts) {
        const self = this;
        return new ObservatoryScheduleResponseSingleEntity_1.ObservatoryScheduleResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.ObservatoryTrend().list()` / `client.ObservatoryTrend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObservatoryTrend(entopts) {
        const self = this;
        return new ObservatoryTrendEntity_1.ObservatoryTrendEntity(self, entopts);
    }
    // Entity access: `client.OriginCloudRegion().list()` / `client.OriginCloudRegion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OriginCloudRegion(entopts) {
        const self = this;
        return new OriginCloudRegionEntity_1.OriginCloudRegionEntity(self, entopts);
    }
    // Entity access: `client.OriginPostQuantum().list()` / `client.OriginPostQuantum().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OriginPostQuantum(entopts) {
        const self = this;
        return new OriginPostQuantumEntity_1.OriginPostQuantumEntity(self, entopts);
    }
    // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Schedule(entopts) {
        const self = this;
        return new ScheduleEntity_1.ScheduleEntity(self, entopts);
    }
    // Entity access: `client.SmartShield().list()` / `client.SmartShield().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SmartShield(entopts) {
        const self = this;
        return new SmartShieldEntity_1.SmartShieldEntity(self, entopts);
    }
    // Entity access: `client.SmartTieredCache().list()` / `client.SmartTieredCache().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SmartTieredCache(entopts) {
        const self = this;
        return new SmartTieredCacheEntity_1.SmartTieredCacheEntity(self, entopts);
    }
    // Entity access: `client.SmartshieldResponseCollection().list()` / `client.SmartshieldResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SmartshieldResponseCollection(entopts) {
        const self = this;
        return new SmartshieldResponseCollectionEntity_1.SmartshieldResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.SmartshieldSingleHc().list()` / `client.SmartshieldSingleHc().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SmartshieldSingleHc(entopts) {
        const self = this;
        return new SmartshieldSingleHcEntity_1.SmartshieldSingleHcEntity(self, entopts);
    }
    // Entity access: `client.SmartshieldSingleHcId().list()` / `client.SmartshieldSingleHcId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SmartshieldSingleHcId(entopts) {
        const self = this;
        return new SmartshieldSingleHcIdEntity_1.SmartshieldSingleHcIdEntity(self, entopts);
    }
    // Entity access: `client.Test().list()` / `client.Test().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Test(entopts) {
        const self = this;
        return new TestEntity_1.TestEntity(self, entopts);
    }
    // Entity access: `client.TieredCaching().list()` / `client.TieredCaching().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TieredCaching(entopts) {
        const self = this;
        return new TieredCachingEntity_1.TieredCachingEntity(self, entopts);
    }
    // Entity access: `client.UrlNormalization().list()` / `client.UrlNormalization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UrlNormalization(entopts) {
        const self = this;
        return new UrlNormalizationEntity_1.UrlNormalizationEntity(self, entopts);
    }
    // Entity access: `client.ZoneCacheSetting().list()` / `client.ZoneCacheSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZoneCacheSetting(entopts) {
        const self = this;
        return new ZoneCacheSettingEntity_1.ZoneCacheSettingEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareApplicationDeliverySDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareApplicationDeliverySDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareApplicationDelivery' };
    }
    toString() {
        return 'CloudflareApplicationDelivery ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareApplicationDeliverySDK = CloudflareApplicationDeliverySDK;
const SDK = CloudflareApplicationDeliverySDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareApplicationDeliverySDK.js.map