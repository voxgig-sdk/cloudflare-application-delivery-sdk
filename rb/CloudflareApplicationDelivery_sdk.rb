# CloudflareApplicationDelivery SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareApplicationDelivery_types'


class CloudflareApplicationDeliverySDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareApplicationDeliveryUtility.new
    @_utility = utility

    config = CloudflareApplicationDeliveryConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareApplicationDeliveryHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareApplicationDeliveryHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareApplicationDeliveryFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareApplicationDeliveryUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareApplicationDeliveryHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareApplicationDeliveryHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareApplicationDeliveryHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareApplicationDeliverySpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareApplicationDeliveryError.new(
        "#{op}_allow",
        "CloudflareApplicationDeliverySDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareApplicationDeliveryError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareApplicationDeliveryHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareApplicationDeliveryHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareApplicationDeliveryError.new(
        "graphql_error", "CloudflareApplicationDeliverySDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.ArgoConfigApiResponseSingle.list / client.ArgoConfigApiResponseSingle.load({ "id" => ... })
  def ArgoConfigApiResponseSingle(data = nil)
    require_relative 'entity/argo_config_api_response_single_entity'
    ArgoConfigApiResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.CachePurgeApiResponseSingleId.list / client.CachePurgeApiResponseSingleId.load({ "id" => ... })
  def CachePurgeApiResponseSingleId(data = nil)
    require_relative 'entity/cache_purge_api_response_single_id_entity'
    CachePurgeApiResponseSingleIdEntity.new(self, data)
  end


  # Canonical facade: client.CacheReserveClear.list / client.CacheReserveClear.load({ "id" => ... })
  def CacheReserveClear(data = nil)
    require_relative 'entity/cache_reserve_clear_entity'
    CacheReserveClearEntity.new(self, data)
  end


  # Canonical facade: client.CustomAssetsForAZone.list / client.CustomAssetsForAZone.load({ "id" => ... })
  def CustomAssetsForAZone(data = nil)
    require_relative 'entity/custom_assets_for_a_zone_entity'
    CustomAssetsForAZoneEntity.new(self, data)
  end


  # Canonical facade: client.CustomAssetsForAnAccount.list / client.CustomAssetsForAnAccount.load({ "id" => ... })
  def CustomAssetsForAnAccount(data = nil)
    require_relative 'entity/custom_assets_for_an_account_entity'
    CustomAssetsForAnAccountEntity.new(self, data)
  end


  # Canonical facade: client.CustomPage.list / client.CustomPage.load({ "id" => ... })
  def CustomPage(data = nil)
    require_relative 'entity/custom_page_entity'
    CustomPageEntity.new(self, data)
  end


  # Canonical facade: client.CustomPagesCustomAssetResult.list / client.CustomPagesCustomAssetResult.load({ "id" => ... })
  def CustomPagesCustomAssetResult(data = nil)
    require_relative 'entity/custom_pages_custom_asset_result_entity'
    CustomPagesCustomAssetResultEntity.new(self, data)
  end


  # Canonical facade: client.CustomPagesCustomAssetResultList.list / client.CustomPagesCustomAssetResultList.load({ "id" => ... })
  def CustomPagesCustomAssetResultList(data = nil)
    require_relative 'entity/custom_pages_custom_asset_result_list_entity'
    CustomPagesCustomAssetResultListEntity.new(self, data)
  end


  # Canonical facade: client.CustomPagesPreviewTokenResult.list / client.CustomPagesPreviewTokenResult.load({ "id" => ... })
  def CustomPagesPreviewTokenResult(data = nil)
    require_relative 'entity/custom_pages_preview_token_result_entity'
    CustomPagesPreviewTokenResultEntity.new(self, data)
  end


  # Canonical facade: client.ManagedTransform.list / client.ManagedTransform.load({ "id" => ... })
  def ManagedTransform(data = nil)
    require_relative 'entity/managed_transform_entity'
    ManagedTransformEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryAvailability.list / client.ObservatoryAvailability.load({ "id" => ... })
  def ObservatoryAvailability(data = nil)
    require_relative 'entity/observatory_availability_entity'
    ObservatoryAvailabilityEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryCreateSchedule.list / client.ObservatoryCreateSchedule.load({ "id" => ... })
  def ObservatoryCreateSchedule(data = nil)
    require_relative 'entity/observatory_create_schedule_entity'
    ObservatoryCreateScheduleEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryPageTestResponseCollection.list / client.ObservatoryPageTestResponseCollection.load({ "id" => ... })
  def ObservatoryPageTestResponseCollection(data = nil)
    require_relative 'entity/observatory_page_test_response_collection_entity'
    ObservatoryPageTestResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryPageTestResponseSingle.list / client.ObservatoryPageTestResponseSingle.load({ "id" => ... })
  def ObservatoryPageTestResponseSingle(data = nil)
    require_relative 'entity/observatory_page_test_response_single_entity'
    ObservatoryPageTestResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryPagesResponseCollection.list / client.ObservatoryPagesResponseCollection.load({ "id" => ... })
  def ObservatoryPagesResponseCollection(data = nil)
    require_relative 'entity/observatory_pages_response_collection_entity'
    ObservatoryPagesResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryScheduleResponseSingle.list / client.ObservatoryScheduleResponseSingle.load({ "id" => ... })
  def ObservatoryScheduleResponseSingle(data = nil)
    require_relative 'entity/observatory_schedule_response_single_entity'
    ObservatoryScheduleResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.ObservatoryTrend.list / client.ObservatoryTrend.load({ "id" => ... })
  def ObservatoryTrend(data = nil)
    require_relative 'entity/observatory_trend_entity'
    ObservatoryTrendEntity.new(self, data)
  end


  # Canonical facade: client.OriginCloudRegion.list / client.OriginCloudRegion.load({ "id" => ... })
  def OriginCloudRegion(data = nil)
    require_relative 'entity/origin_cloud_region_entity'
    OriginCloudRegionEntity.new(self, data)
  end


  # Canonical facade: client.OriginPostQuantum.list / client.OriginPostQuantum.load({ "id" => ... })
  def OriginPostQuantum(data = nil)
    require_relative 'entity/origin_post_quantum_entity'
    OriginPostQuantumEntity.new(self, data)
  end


  # Canonical facade: client.Schedule.list / client.Schedule.load({ "id" => ... })
  def Schedule(data = nil)
    require_relative 'entity/schedule_entity'
    ScheduleEntity.new(self, data)
  end


  # Canonical facade: client.SmartShield.list / client.SmartShield.load({ "id" => ... })
  def SmartShield(data = nil)
    require_relative 'entity/smart_shield_entity'
    SmartShieldEntity.new(self, data)
  end


  # Canonical facade: client.SmartTieredCache.list / client.SmartTieredCache.load({ "id" => ... })
  def SmartTieredCache(data = nil)
    require_relative 'entity/smart_tiered_cache_entity'
    SmartTieredCacheEntity.new(self, data)
  end


  # Canonical facade: client.SmartshieldResponseCollection.list / client.SmartshieldResponseCollection.load({ "id" => ... })
  def SmartshieldResponseCollection(data = nil)
    require_relative 'entity/smartshield_response_collection_entity'
    SmartshieldResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.SmartshieldSingleHc.list / client.SmartshieldSingleHc.load({ "id" => ... })
  def SmartshieldSingleHc(data = nil)
    require_relative 'entity/smartshield_single_hc_entity'
    SmartshieldSingleHcEntity.new(self, data)
  end


  # Canonical facade: client.SmartshieldSingleHcId.list / client.SmartshieldSingleHcId.load({ "id" => ... })
  def SmartshieldSingleHcId(data = nil)
    require_relative 'entity/smartshield_single_hc_id_entity'
    SmartshieldSingleHcIdEntity.new(self, data)
  end


  # Canonical facade: client.Test.list / client.Test.load({ "id" => ... })
  def Test(data = nil)
    require_relative 'entity/test_entity'
    TestEntity.new(self, data)
  end


  # Canonical facade: client.TieredCaching.list / client.TieredCaching.load({ "id" => ... })
  def TieredCaching(data = nil)
    require_relative 'entity/tiered_caching_entity'
    TieredCachingEntity.new(self, data)
  end


  # Canonical facade: client.UrlNormalization.list / client.UrlNormalization.load({ "id" => ... })
  def UrlNormalization(data = nil)
    require_relative 'entity/url_normalization_entity'
    UrlNormalizationEntity.new(self, data)
  end


  # Canonical facade: client.ZoneCacheSetting.list / client.ZoneCacheSetting.load({ "id" => ... })
  def ZoneCacheSetting(data = nil)
    require_relative 'entity/zone_cache_setting_entity'
    ZoneCacheSettingEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareApplicationDeliverySDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
