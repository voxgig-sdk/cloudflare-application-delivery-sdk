# CacheReserveClear entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class CacheReserveClearEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    ent = testsdk.CacheReserveClear(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "cache_reserve_clear" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareApplicationDeliverySDK.test(seed, nil)
    seen = base.CacheReserveClear(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareApplicationDeliveryConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareApplicationDeliverySDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CacheReserveClear(nil).stream("list", nil, nil).each do |item|
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
    setup = cache_reserve_clear_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "cache_reserve_clear." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    cache_reserve_clear_ref01_ent = client.CacheReserveClear(nil)
    cache_reserve_clear_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.cache_reserve_clear"), "cache_reserve_clear_ref01"))
    cache_reserve_clear_ref01_data["zone_id"] = setup[:idmap]["zone01"]

    cache_reserve_clear_ref01_data_result = cache_reserve_clear_ref01_ent.create(cache_reserve_clear_ref01_data, nil)
    cache_reserve_clear_ref01_data = Helpers.to_map(cache_reserve_clear_ref01_data_result.respond_to?(:data_get) ? cache_reserve_clear_ref01_data_result.data_get : cache_reserve_clear_ref01_data_result)
    assert !cache_reserve_clear_ref01_data.nil?

    # LIST
    cache_reserve_clear_ref01_match = {
      "zone_id" => setup[:idmap]["zone01"],
    }

    cache_reserve_clear_ref01_list_result = cache_reserve_clear_ref01_ent.list(cache_reserve_clear_ref01_match, nil)
    assert cache_reserve_clear_ref01_list_result.is_a?(Array)

  end
end

def cache_reserve_clear_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "cache_reserve_clear", "CacheReserveClearTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareApplicationDeliverySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["cache_reserve_clear01", "cache_reserve_clear02", "cache_reserve_clear03", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID" => idmap,
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID"])
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
