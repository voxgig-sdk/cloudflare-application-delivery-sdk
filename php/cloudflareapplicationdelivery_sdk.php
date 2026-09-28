<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareApplicationDeliverySDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareApplicationDeliveryUtility();
        $this->_utility = $utility;

        $config = CloudflareApplicationDeliveryConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareApplicationDeliveryHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareApplicationDeliveryHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareApplicationDeliveryFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareApplicationDeliveryFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareApplicationDeliveryUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareApplicationDeliveryHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareApplicationDeliveryHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareApplicationDeliveryHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareApplicationDeliverySpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareApplicationDeliveryError($op . "_allow",
                "CloudflareApplicationDeliverySDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareApplicationDeliveryHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareApplicationDeliveryHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareApplicationDeliveryError("graphql_error",
                "CloudflareApplicationDeliverySDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_argo_config_api_response_single = null;

    // Canonical facade: $client->ArgoConfigApiResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->argo_config_api_response_single()
    // resolves here too.
    public function ArgoConfigApiResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/argo_config_api_response_single_entity.php';
        if ($data === null) {
            if ($this->_argo_config_api_response_single === null) {
                $this->_argo_config_api_response_single = new ArgoConfigApiResponseSingleEntity($this, null);
            }
            return $this->_argo_config_api_response_single;
        }
        return new ArgoConfigApiResponseSingleEntity($this, $data);
    }


    private $_cache_purge_api_response_single_id = null;

    // Canonical facade: $client->CachePurgeApiResponseSingleId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_purge_api_response_single_id()
    // resolves here too.
    public function CachePurgeApiResponseSingleId($data = null)
    {
        require_once __DIR__ . '/entity/cache_purge_api_response_single_id_entity.php';
        if ($data === null) {
            if ($this->_cache_purge_api_response_single_id === null) {
                $this->_cache_purge_api_response_single_id = new CachePurgeApiResponseSingleIdEntity($this, null);
            }
            return $this->_cache_purge_api_response_single_id;
        }
        return new CachePurgeApiResponseSingleIdEntity($this, $data);
    }


    private $_cache_reserve_clear = null;

    // Canonical facade: $client->CacheReserveClear()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_reserve_clear()
    // resolves here too.
    public function CacheReserveClear($data = null)
    {
        require_once __DIR__ . '/entity/cache_reserve_clear_entity.php';
        if ($data === null) {
            if ($this->_cache_reserve_clear === null) {
                $this->_cache_reserve_clear = new CacheReserveClearEntity($this, null);
            }
            return $this->_cache_reserve_clear;
        }
        return new CacheReserveClearEntity($this, $data);
    }


    private $_custom_assets_for_a_zone = null;

    // Canonical facade: $client->CustomAssetsForAZone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_assets_for_a_zone()
    // resolves here too.
    public function CustomAssetsForAZone($data = null)
    {
        require_once __DIR__ . '/entity/custom_assets_for_a_zone_entity.php';
        if ($data === null) {
            if ($this->_custom_assets_for_a_zone === null) {
                $this->_custom_assets_for_a_zone = new CustomAssetsForAZoneEntity($this, null);
            }
            return $this->_custom_assets_for_a_zone;
        }
        return new CustomAssetsForAZoneEntity($this, $data);
    }


    private $_custom_assets_for_an_account = null;

    // Canonical facade: $client->CustomAssetsForAnAccount()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_assets_for_an_account()
    // resolves here too.
    public function CustomAssetsForAnAccount($data = null)
    {
        require_once __DIR__ . '/entity/custom_assets_for_an_account_entity.php';
        if ($data === null) {
            if ($this->_custom_assets_for_an_account === null) {
                $this->_custom_assets_for_an_account = new CustomAssetsForAnAccountEntity($this, null);
            }
            return $this->_custom_assets_for_an_account;
        }
        return new CustomAssetsForAnAccountEntity($this, $data);
    }


    private $_custom_page = null;

    // Canonical facade: $client->CustomPage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_page()
    // resolves here too.
    public function CustomPage($data = null)
    {
        require_once __DIR__ . '/entity/custom_page_entity.php';
        if ($data === null) {
            if ($this->_custom_page === null) {
                $this->_custom_page = new CustomPageEntity($this, null);
            }
            return $this->_custom_page;
        }
        return new CustomPageEntity($this, $data);
    }


    private $_custom_pages_custom_asset_result = null;

    // Canonical facade: $client->CustomPagesCustomAssetResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_pages_custom_asset_result()
    // resolves here too.
    public function CustomPagesCustomAssetResult($data = null)
    {
        require_once __DIR__ . '/entity/custom_pages_custom_asset_result_entity.php';
        if ($data === null) {
            if ($this->_custom_pages_custom_asset_result === null) {
                $this->_custom_pages_custom_asset_result = new CustomPagesCustomAssetResultEntity($this, null);
            }
            return $this->_custom_pages_custom_asset_result;
        }
        return new CustomPagesCustomAssetResultEntity($this, $data);
    }


    private $_custom_pages_custom_asset_result_list = null;

    // Canonical facade: $client->CustomPagesCustomAssetResultList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_pages_custom_asset_result_list()
    // resolves here too.
    public function CustomPagesCustomAssetResultList($data = null)
    {
        require_once __DIR__ . '/entity/custom_pages_custom_asset_result_list_entity.php';
        if ($data === null) {
            if ($this->_custom_pages_custom_asset_result_list === null) {
                $this->_custom_pages_custom_asset_result_list = new CustomPagesCustomAssetResultListEntity($this, null);
            }
            return $this->_custom_pages_custom_asset_result_list;
        }
        return new CustomPagesCustomAssetResultListEntity($this, $data);
    }


    private $_custom_pages_preview_token_result = null;

    // Canonical facade: $client->CustomPagesPreviewTokenResult()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_pages_preview_token_result()
    // resolves here too.
    public function CustomPagesPreviewTokenResult($data = null)
    {
        require_once __DIR__ . '/entity/custom_pages_preview_token_result_entity.php';
        if ($data === null) {
            if ($this->_custom_pages_preview_token_result === null) {
                $this->_custom_pages_preview_token_result = new CustomPagesPreviewTokenResultEntity($this, null);
            }
            return $this->_custom_pages_preview_token_result;
        }
        return new CustomPagesPreviewTokenResultEntity($this, $data);
    }


    private $_managed_transform = null;

    // Canonical facade: $client->ManagedTransform()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->managed_transform()
    // resolves here too.
    public function ManagedTransform($data = null)
    {
        require_once __DIR__ . '/entity/managed_transform_entity.php';
        if ($data === null) {
            if ($this->_managed_transform === null) {
                $this->_managed_transform = new ManagedTransformEntity($this, null);
            }
            return $this->_managed_transform;
        }
        return new ManagedTransformEntity($this, $data);
    }


    private $_observatory_availability = null;

    // Canonical facade: $client->ObservatoryAvailability()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_availability()
    // resolves here too.
    public function ObservatoryAvailability($data = null)
    {
        require_once __DIR__ . '/entity/observatory_availability_entity.php';
        if ($data === null) {
            if ($this->_observatory_availability === null) {
                $this->_observatory_availability = new ObservatoryAvailabilityEntity($this, null);
            }
            return $this->_observatory_availability;
        }
        return new ObservatoryAvailabilityEntity($this, $data);
    }


    private $_observatory_create_schedule = null;

    // Canonical facade: $client->ObservatoryCreateSchedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_create_schedule()
    // resolves here too.
    public function ObservatoryCreateSchedule($data = null)
    {
        require_once __DIR__ . '/entity/observatory_create_schedule_entity.php';
        if ($data === null) {
            if ($this->_observatory_create_schedule === null) {
                $this->_observatory_create_schedule = new ObservatoryCreateScheduleEntity($this, null);
            }
            return $this->_observatory_create_schedule;
        }
        return new ObservatoryCreateScheduleEntity($this, $data);
    }


    private $_observatory_page_test_response_collection = null;

    // Canonical facade: $client->ObservatoryPageTestResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_page_test_response_collection()
    // resolves here too.
    public function ObservatoryPageTestResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/observatory_page_test_response_collection_entity.php';
        if ($data === null) {
            if ($this->_observatory_page_test_response_collection === null) {
                $this->_observatory_page_test_response_collection = new ObservatoryPageTestResponseCollectionEntity($this, null);
            }
            return $this->_observatory_page_test_response_collection;
        }
        return new ObservatoryPageTestResponseCollectionEntity($this, $data);
    }


    private $_observatory_page_test_response_single = null;

    // Canonical facade: $client->ObservatoryPageTestResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_page_test_response_single()
    // resolves here too.
    public function ObservatoryPageTestResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/observatory_page_test_response_single_entity.php';
        if ($data === null) {
            if ($this->_observatory_page_test_response_single === null) {
                $this->_observatory_page_test_response_single = new ObservatoryPageTestResponseSingleEntity($this, null);
            }
            return $this->_observatory_page_test_response_single;
        }
        return new ObservatoryPageTestResponseSingleEntity($this, $data);
    }


    private $_observatory_pages_response_collection = null;

    // Canonical facade: $client->ObservatoryPagesResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_pages_response_collection()
    // resolves here too.
    public function ObservatoryPagesResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/observatory_pages_response_collection_entity.php';
        if ($data === null) {
            if ($this->_observatory_pages_response_collection === null) {
                $this->_observatory_pages_response_collection = new ObservatoryPagesResponseCollectionEntity($this, null);
            }
            return $this->_observatory_pages_response_collection;
        }
        return new ObservatoryPagesResponseCollectionEntity($this, $data);
    }


    private $_observatory_schedule_response_single = null;

    // Canonical facade: $client->ObservatoryScheduleResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_schedule_response_single()
    // resolves here too.
    public function ObservatoryScheduleResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/observatory_schedule_response_single_entity.php';
        if ($data === null) {
            if ($this->_observatory_schedule_response_single === null) {
                $this->_observatory_schedule_response_single = new ObservatoryScheduleResponseSingleEntity($this, null);
            }
            return $this->_observatory_schedule_response_single;
        }
        return new ObservatoryScheduleResponseSingleEntity($this, $data);
    }


    private $_observatory_trend = null;

    // Canonical facade: $client->ObservatoryTrend()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->observatory_trend()
    // resolves here too.
    public function ObservatoryTrend($data = null)
    {
        require_once __DIR__ . '/entity/observatory_trend_entity.php';
        if ($data === null) {
            if ($this->_observatory_trend === null) {
                $this->_observatory_trend = new ObservatoryTrendEntity($this, null);
            }
            return $this->_observatory_trend;
        }
        return new ObservatoryTrendEntity($this, $data);
    }


    private $_origin_cloud_region = null;

    // Canonical facade: $client->OriginCloudRegion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->origin_cloud_region()
    // resolves here too.
    public function OriginCloudRegion($data = null)
    {
        require_once __DIR__ . '/entity/origin_cloud_region_entity.php';
        if ($data === null) {
            if ($this->_origin_cloud_region === null) {
                $this->_origin_cloud_region = new OriginCloudRegionEntity($this, null);
            }
            return $this->_origin_cloud_region;
        }
        return new OriginCloudRegionEntity($this, $data);
    }


    private $_origin_post_quantum = null;

    // Canonical facade: $client->OriginPostQuantum()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->origin_post_quantum()
    // resolves here too.
    public function OriginPostQuantum($data = null)
    {
        require_once __DIR__ . '/entity/origin_post_quantum_entity.php';
        if ($data === null) {
            if ($this->_origin_post_quantum === null) {
                $this->_origin_post_quantum = new OriginPostQuantumEntity($this, null);
            }
            return $this->_origin_post_quantum;
        }
        return new OriginPostQuantumEntity($this, $data);
    }


    private $_schedule = null;

    // Canonical facade: $client->Schedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule()
    // resolves here too.
    public function Schedule($data = null)
    {
        require_once __DIR__ . '/entity/schedule_entity.php';
        if ($data === null) {
            if ($this->_schedule === null) {
                $this->_schedule = new ScheduleEntity($this, null);
            }
            return $this->_schedule;
        }
        return new ScheduleEntity($this, $data);
    }


    private $_smart_shield = null;

    // Canonical facade: $client->SmartShield()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->smart_shield()
    // resolves here too.
    public function SmartShield($data = null)
    {
        require_once __DIR__ . '/entity/smart_shield_entity.php';
        if ($data === null) {
            if ($this->_smart_shield === null) {
                $this->_smart_shield = new SmartShieldEntity($this, null);
            }
            return $this->_smart_shield;
        }
        return new SmartShieldEntity($this, $data);
    }


    private $_smart_tiered_cache = null;

    // Canonical facade: $client->SmartTieredCache()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->smart_tiered_cache()
    // resolves here too.
    public function SmartTieredCache($data = null)
    {
        require_once __DIR__ . '/entity/smart_tiered_cache_entity.php';
        if ($data === null) {
            if ($this->_smart_tiered_cache === null) {
                $this->_smart_tiered_cache = new SmartTieredCacheEntity($this, null);
            }
            return $this->_smart_tiered_cache;
        }
        return new SmartTieredCacheEntity($this, $data);
    }


    private $_smartshield_response_collection = null;

    // Canonical facade: $client->SmartshieldResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->smartshield_response_collection()
    // resolves here too.
    public function SmartshieldResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/smartshield_response_collection_entity.php';
        if ($data === null) {
            if ($this->_smartshield_response_collection === null) {
                $this->_smartshield_response_collection = new SmartshieldResponseCollectionEntity($this, null);
            }
            return $this->_smartshield_response_collection;
        }
        return new SmartshieldResponseCollectionEntity($this, $data);
    }


    private $_smartshield_single_hc = null;

    // Canonical facade: $client->SmartshieldSingleHc()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->smartshield_single_hc()
    // resolves here too.
    public function SmartshieldSingleHc($data = null)
    {
        require_once __DIR__ . '/entity/smartshield_single_hc_entity.php';
        if ($data === null) {
            if ($this->_smartshield_single_hc === null) {
                $this->_smartshield_single_hc = new SmartshieldSingleHcEntity($this, null);
            }
            return $this->_smartshield_single_hc;
        }
        return new SmartshieldSingleHcEntity($this, $data);
    }


    private $_smartshield_single_hc_id = null;

    // Canonical facade: $client->SmartshieldSingleHcId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->smartshield_single_hc_id()
    // resolves here too.
    public function SmartshieldSingleHcId($data = null)
    {
        require_once __DIR__ . '/entity/smartshield_single_hc_id_entity.php';
        if ($data === null) {
            if ($this->_smartshield_single_hc_id === null) {
                $this->_smartshield_single_hc_id = new SmartshieldSingleHcIdEntity($this, null);
            }
            return $this->_smartshield_single_hc_id;
        }
        return new SmartshieldSingleHcIdEntity($this, $data);
    }


    private $_test = null;

    // Canonical facade: $client->Test_()->list() / ->load(["id" => ...]).
    // Renamed from Test: that name is already taken by an SDK class
    // member, and a duplicate declaration is a fatal PHP parse error.
    public function Test_($data = null)
    {
        require_once __DIR__ . '/entity/test_entity.php';
        if ($data === null) {
            if ($this->_test === null) {
                $this->_test = new TestEntity($this, null);
            }
            return $this->_test;
        }
        return new TestEntity($this, $data);
    }


    private $_tiered_caching = null;

    // Canonical facade: $client->TieredCaching()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tiered_caching()
    // resolves here too.
    public function TieredCaching($data = null)
    {
        require_once __DIR__ . '/entity/tiered_caching_entity.php';
        if ($data === null) {
            if ($this->_tiered_caching === null) {
                $this->_tiered_caching = new TieredCachingEntity($this, null);
            }
            return $this->_tiered_caching;
        }
        return new TieredCachingEntity($this, $data);
    }


    private $_url_normalization = null;

    // Canonical facade: $client->UrlNormalization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->url_normalization()
    // resolves here too.
    public function UrlNormalization($data = null)
    {
        require_once __DIR__ . '/entity/url_normalization_entity.php';
        if ($data === null) {
            if ($this->_url_normalization === null) {
                $this->_url_normalization = new UrlNormalizationEntity($this, null);
            }
            return $this->_url_normalization;
        }
        return new UrlNormalizationEntity($this, $data);
    }


    private $_zone_cache_setting = null;

    // Canonical facade: $client->ZoneCacheSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zone_cache_setting()
    // resolves here too.
    public function ZoneCacheSetting($data = null)
    {
        require_once __DIR__ . '/entity/zone_cache_setting_entity.php';
        if ($data === null) {
            if ($this->_zone_cache_setting === null) {
                $this->_zone_cache_setting = new ZoneCacheSettingEntity($this, null);
            }
            return $this->_zone_cache_setting;
        }
        return new ZoneCacheSettingEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareApplicationDeliverySDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
