# ObservatoryPageTestResponseSingle entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class ObservatoryPageTestResponseSingleEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.ObservatoryPageTestResponseSingle(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = observatory_page_test_response_single_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "observatory_page_test_response_single." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    observatory_page_test_response_single_ref01_ent = client.ObservatoryPageTestResponseSingle(nil)
    observatory_page_test_response_single_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.observatory_page_test_response_single"), "observatory_page_test_response_single_ref01"))
    observatory_page_test_response_single_ref01_data["page_id"] = setup[:idmap]["page01"]
    observatory_page_test_response_single_ref01_data["url"] = setup[:idmap]["url01"]
    observatory_page_test_response_single_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    observatory_page_test_response_single_ref01_data_result = observatory_page_test_response_single_ref01_ent.create(observatory_page_test_response_single_ref01_data, nil)
    observatory_page_test_response_single_ref01_data = Helpers.to_map(observatory_page_test_response_single_ref01_data_result.respond_to?(:data_get) ? observatory_page_test_response_single_ref01_data_result.data_get : observatory_page_test_response_single_ref01_data_result)
    assert !observatory_page_test_response_single_ref01_data.nil?

    # LOAD
    observatory_page_test_response_single_ref01_match_dt0 = {}
    observatory_page_test_response_single_ref01_data_dt0_loaded = observatory_page_test_response_single_ref01_ent.load(observatory_page_test_response_single_ref01_match_dt0, nil)
    assert !observatory_page_test_response_single_ref01_data_dt0_loaded.nil?

  end
end

def observatory_page_test_response_single_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "observatory_page_test_response_single", "ObservatoryPageTestResponseSingleTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["observatory_page_test_response_single01", "observatory_page_test_response_single02", "observatory_page_test_response_single03", "test01", "test02", "test03", "page01", "url01", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID"])
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
