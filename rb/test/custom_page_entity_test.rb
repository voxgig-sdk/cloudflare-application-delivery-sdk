# CustomPage entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class CustomPageEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.CustomPage(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "custom_page" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareApplicationDeliverySDK.test(seed, nil)
    seen = base.CustomPage(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareApplicationDeliveryConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareApplicationDeliverySDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CustomPage(nil).stream("list", nil, nil).each do |item|
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
    setup = custom_page_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_page." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    custom_page_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.custom_page")))
    custom_page_ref01_data = nil
    if custom_page_ref01_data_raw.length > 0
      custom_page_ref01_data = Helpers.to_map(custom_page_ref01_data_raw[0][1])
    end

    # LIST
    custom_page_ref01_ent = client.CustomPage(nil)
    custom_page_ref01_match = {
      "zone_id" => setup[:idmap]["zone01"],
    }

    custom_page_ref01_list_result = custom_page_ref01_ent.list(custom_page_ref01_match, nil)
    assert custom_page_ref01_list_result.is_a?(Array)

    # UPDATE
    custom_page_ref01_data_up0_up = {
      "id" => custom_page_ref01_data["id"],
      "zone_id" => setup[:idmap]["zone_id"],
    }

    custom_page_ref01_markdef_up0_name = "created_on"
    custom_page_ref01_markdef_up0_value = "Mark01-custom_page_ref01_#{setup[:now]}"
    custom_page_ref01_data_up0_up[custom_page_ref01_markdef_up0_name] = custom_page_ref01_markdef_up0_value

    custom_page_ref01_resdata_up0_result = custom_page_ref01_ent.update(custom_page_ref01_data_up0_up, nil)
    custom_page_ref01_resdata_up0 = Helpers.to_map(custom_page_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_page_ref01_resdata_up0_result.data_get : custom_page_ref01_resdata_up0_result)
    assert !custom_page_ref01_resdata_up0.nil?
    assert_equal custom_page_ref01_resdata_up0["id"], custom_page_ref01_data_up0_up["id"]
    assert_equal custom_page_ref01_resdata_up0[custom_page_ref01_markdef_up0_name], custom_page_ref01_markdef_up0_value

    # LOAD
    custom_page_ref01_match_dt0 = {
      "id" => custom_page_ref01_data["id"],
    }
    custom_page_ref01_data_dt0_loaded = custom_page_ref01_ent.load(custom_page_ref01_match_dt0, nil)
    custom_page_ref01_data_dt0_load_result = Helpers.to_map(custom_page_ref01_data_dt0_loaded.respond_to?(:data_get) ? custom_page_ref01_data_dt0_loaded.data_get : custom_page_ref01_data_dt0_loaded)
    assert !custom_page_ref01_data_dt0_load_result.nil?
    assert_equal custom_page_ref01_data_dt0_load_result["id"], custom_page_ref01_data["id"]

  end
end

def custom_page_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_page", "CustomPageTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_page01", "custom_page02", "custom_page03", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID"])
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
