# SmartshieldSingleHc entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class SmartshieldSingleHcEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.SmartshieldSingleHc(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = smartshield_single_hc_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "smartshield_single_hc." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    smartshield_single_hc_ref01_ent = client.SmartshieldSingleHc(nil)
    smartshield_single_hc_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.smartshield_single_hc"), "smartshield_single_hc_ref01"))
    smartshield_single_hc_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    smartshield_single_hc_ref01_data_result = smartshield_single_hc_ref01_ent.create(smartshield_single_hc_ref01_data, nil)
    smartshield_single_hc_ref01_data = Helpers.to_map(smartshield_single_hc_ref01_data_result.respond_to?(:data_get) ? smartshield_single_hc_ref01_data_result.data_get : smartshield_single_hc_ref01_data_result)
    assert !smartshield_single_hc_ref01_data.nil?

    # UPDATE
    smartshield_single_hc_ref01_data_up0_up = {
      "zone_id" => setup[:idmap]["zone_id"],
    }

    smartshield_single_hc_ref01_markdef_up0_name = "address"
    smartshield_single_hc_ref01_markdef_up0_value = "Mark01-smartshield_single_hc_ref01_#{setup[:now]}"
    smartshield_single_hc_ref01_data_up0_up[smartshield_single_hc_ref01_markdef_up0_name] = smartshield_single_hc_ref01_markdef_up0_value

    smartshield_single_hc_ref01_resdata_up0_result = smartshield_single_hc_ref01_ent.update(smartshield_single_hc_ref01_data_up0_up, nil)
    smartshield_single_hc_ref01_resdata_up0 = Helpers.to_map(smartshield_single_hc_ref01_resdata_up0_result.respond_to?(:data_get) ? smartshield_single_hc_ref01_resdata_up0_result.data_get : smartshield_single_hc_ref01_resdata_up0_result)
    assert !smartshield_single_hc_ref01_resdata_up0.nil?
    assert_equal smartshield_single_hc_ref01_resdata_up0[smartshield_single_hc_ref01_markdef_up0_name], smartshield_single_hc_ref01_markdef_up0_value

    # LOAD
    smartshield_single_hc_ref01_match_dt0 = {}
    smartshield_single_hc_ref01_data_dt0_loaded = smartshield_single_hc_ref01_ent.load(smartshield_single_hc_ref01_match_dt0, nil)
    assert !smartshield_single_hc_ref01_data_dt0_loaded.nil?

  end
end

def smartshield_single_hc_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "smartshield_single_hc", "SmartshieldSingleHcTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["smartshield_single_hc01", "smartshield_single_hc02", "smartshield_single_hc03", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"])
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
