# CustomPagesCustomAssetResult entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class CustomPagesCustomAssetResultEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.CustomPagesCustomAssetResult(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = custom_pages_custom_asset_result_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_pages_custom_asset_result." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    custom_pages_custom_asset_result_ref01_ent = client.CustomPagesCustomAssetResult(nil)
    custom_pages_custom_asset_result_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.custom_pages_custom_asset_result"), "custom_pages_custom_asset_result_ref01"))
    custom_pages_custom_asset_result_ref01_data["account_id"] = setup[:idmap]["account01"]
    custom_pages_custom_asset_result_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    custom_pages_custom_asset_result_ref01_data_result = custom_pages_custom_asset_result_ref01_ent.create(custom_pages_custom_asset_result_ref01_data, nil)
    custom_pages_custom_asset_result_ref01_data = Helpers.to_map(custom_pages_custom_asset_result_ref01_data_result.respond_to?(:data_get) ? custom_pages_custom_asset_result_ref01_data_result.data_get : custom_pages_custom_asset_result_ref01_data_result)
    assert !custom_pages_custom_asset_result_ref01_data.nil?

    # UPDATE
    custom_pages_custom_asset_result_ref01_data_up0_up = {
      "zone_id" => setup[:idmap]["zone_id"],
    }

    custom_pages_custom_asset_result_ref01_markdef_up0_name = "description"
    custom_pages_custom_asset_result_ref01_markdef_up0_value = "Mark01-custom_pages_custom_asset_result_ref01_#{setup[:now]}"
    custom_pages_custom_asset_result_ref01_data_up0_up[custom_pages_custom_asset_result_ref01_markdef_up0_name] = custom_pages_custom_asset_result_ref01_markdef_up0_value

    custom_pages_custom_asset_result_ref01_resdata_up0_result = custom_pages_custom_asset_result_ref01_ent.update(custom_pages_custom_asset_result_ref01_data_up0_up, nil)
    custom_pages_custom_asset_result_ref01_resdata_up0 = Helpers.to_map(custom_pages_custom_asset_result_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_pages_custom_asset_result_ref01_resdata_up0_result.data_get : custom_pages_custom_asset_result_ref01_resdata_up0_result)
    assert !custom_pages_custom_asset_result_ref01_resdata_up0.nil?
    assert_equal custom_pages_custom_asset_result_ref01_resdata_up0[custom_pages_custom_asset_result_ref01_markdef_up0_name], custom_pages_custom_asset_result_ref01_markdef_up0_value

    # LOAD
    custom_pages_custom_asset_result_ref01_match_dt0 = {}
    custom_pages_custom_asset_result_ref01_data_dt0_loaded = custom_pages_custom_asset_result_ref01_ent.load(custom_pages_custom_asset_result_ref01_match_dt0, nil)
    assert !custom_pages_custom_asset_result_ref01_data_dt0_loaded.nil?

  end
end

def custom_pages_custom_asset_result_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_pages_custom_asset_result", "CustomPagesCustomAssetResultTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_pages_custom_asset_result01", "custom_pages_custom_asset_result02", "custom_pages_custom_asset_result03", "account01", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["zone_id"].nil?
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
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
