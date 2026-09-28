# ObservatoryTrend direct test

require "minitest/autorun"
require "json"
require_relative "../CloudflareApplicationDelivery_sdk"
require_relative "runner"

class ObservatoryTrendDirectTest < Minitest::Test
  def test_direct_load_observatory_trend
    setup = observatory_trend_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-observatory_trend", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    if setup[:live]
      query["device_type"] = "DESKTOP"
      query["metric"] = "performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls"
      query["region"] = "us-central1"
      query["start"] = "2014-01-01T05:20:00.12345Z"
      query["tz"] = "America/Chicago"
      params["url"] = "example.com"
      params["zone_id"] = "023e105f4ecef8ad9ca31a8372d0c353"
    else
      params["url"] = "direct01"
      params["zone_id"] = "direct02"
    end

    result = client.direct({
      "path" => "zones/{zone_id}/speed_api/pages/{url}/trend",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !result["err"].nil?
        skip("load call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def observatory_trend_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_TREND_ENTID" => {},
    "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
  })

  live = env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE"

  if live
    # Merged so the generated fields win: sdk-test-control.json's
    # test.client.options adds to the live client, it does not redirect it.
    merged_opts = Runner.live_client_options.merge({
      "apikey" => env["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
    })
    client = CloudflareApplicationDeliverySDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = CloudflareApplicationDeliverySDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
