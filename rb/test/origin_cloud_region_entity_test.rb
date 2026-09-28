# OriginCloudRegion entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class OriginCloudRegionEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.OriginCloudRegion(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "origin_cloud_region" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareApplicationDeliverySDK.test(seed, nil)
    seen = base.OriginCloudRegion(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareApplicationDeliveryConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareApplicationDeliverySDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.OriginCloudRegion(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = origin_cloud_region_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "origin_cloud_region." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    origin_cloud_region_ref01_ent = client.OriginCloudRegion(nil)
    origin_cloud_region_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.origin_cloud_region"), "origin_cloud_region_ref01"))
    origin_cloud_region_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    origin_cloud_region_ref01_data_result = origin_cloud_region_ref01_ent.create(origin_cloud_region_ref01_data, nil)
    origin_cloud_region_ref01_data = Helpers.to_map(origin_cloud_region_ref01_data_result.respond_to?(:data_get) ? origin_cloud_region_ref01_data_result.data_get : origin_cloud_region_ref01_data_result)
    assert !origin_cloud_region_ref01_data.nil?
    assert !origin_cloud_region_ref01_data["id"].nil?

    # LIST
    origin_cloud_region_ref01_match = {
      "zone_id" => setup[:idmap]["zone01"],
    }

    origin_cloud_region_ref01_list_result = origin_cloud_region_ref01_ent.list(origin_cloud_region_ref01_match, nil)
    assert origin_cloud_region_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(origin_cloud_region_ref01_list_result),
      { "id" => origin_cloud_region_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    origin_cloud_region_ref01_data_up0_up = {
      "id" => origin_cloud_region_ref01_data["id"],
    }

    origin_cloud_region_ref01_markdef_up0_name = "ip"
    origin_cloud_region_ref01_markdef_up0_value = "Mark01-origin_cloud_region_ref01_#{setup[:now]}"
    origin_cloud_region_ref01_data_up0_up[origin_cloud_region_ref01_markdef_up0_name] = origin_cloud_region_ref01_markdef_up0_value

    origin_cloud_region_ref01_resdata_up0_result = origin_cloud_region_ref01_ent.update(origin_cloud_region_ref01_data_up0_up, nil)
    origin_cloud_region_ref01_resdata_up0 = Helpers.to_map(origin_cloud_region_ref01_resdata_up0_result.respond_to?(:data_get) ? origin_cloud_region_ref01_resdata_up0_result.data_get : origin_cloud_region_ref01_resdata_up0_result)
    assert !origin_cloud_region_ref01_resdata_up0.nil?
    assert_equal origin_cloud_region_ref01_resdata_up0["id"], origin_cloud_region_ref01_data_up0_up["id"]
    assert_equal origin_cloud_region_ref01_resdata_up0[origin_cloud_region_ref01_markdef_up0_name], origin_cloud_region_ref01_markdef_up0_value

    # LOAD
    origin_cloud_region_ref01_match_dt0 = {
      "id" => origin_cloud_region_ref01_data["id"],
    }
    origin_cloud_region_ref01_data_dt0_loaded = origin_cloud_region_ref01_ent.load(origin_cloud_region_ref01_match_dt0, nil)
    origin_cloud_region_ref01_data_dt0_load_result = Helpers.to_map(origin_cloud_region_ref01_data_dt0_loaded.respond_to?(:data_get) ? origin_cloud_region_ref01_data_dt0_loaded.data_get : origin_cloud_region_ref01_data_dt0_loaded)
    assert !origin_cloud_region_ref01_data_dt0_load_result.nil?
    assert_equal origin_cloud_region_ref01_data_dt0_load_result["id"], origin_cloud_region_ref01_data["id"]

    # REMOVE
    origin_cloud_region_ref01_match_rm0 = {
      "id" => origin_cloud_region_ref01_data["id"],
    }
    origin_cloud_region_ref01_ent.remove(origin_cloud_region_ref01_match_rm0, nil)

    # LIST
    origin_cloud_region_ref01_match_rt0 = {
      "zone_id" => setup[:idmap]["zone01"],
    }

    origin_cloud_region_ref01_list_rt0_result = origin_cloud_region_ref01_ent.list(origin_cloud_region_ref01_match_rt0, nil)
    assert origin_cloud_region_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(origin_cloud_region_ref01_list_rt0_result),
      { "id" => origin_cloud_region_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def origin_cloud_region_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "origin_cloud_region", "OriginCloudRegionTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["origin_cloud_region01", "origin_cloud_region02", "origin_cloud_region03", "zone01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareApplicationDeliverySDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
