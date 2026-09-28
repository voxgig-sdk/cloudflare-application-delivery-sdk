<?php
declare(strict_types=1);

// ObservatoryTrend direct test

require_once __DIR__ . '/../cloudflareapplicationdelivery_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class ObservatoryTrendDirectTest extends TestCase
{
    public function test_direct_load_observatory_trend(): void
    {
        $setup = observatory_trend_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-observatory_trend", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if ($setup["live"]) {
            $query["device_type"] = "DESKTOP";
            $query["metric"] = "performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls";
            $query["region"] = "us-central1";
            $query["start"] = "2014-01-01T05:20:00.12345Z";
            $query["tz"] = "America/Chicago";
            $params["url"] = "example.com";
            $params["zone_id"] = "023e105f4ecef8ad9ca31a8372d0c353";
        } else {
            $params["url"] = "direct01";
            $params["zone_id"] = "direct02";
        }

        $result = $client->direct([
            "path" => "zones/{zone_id}/speed_api/pages/{url}/trend",
            "method" => "GET",
            "params" => $params,
            "query" => $query,
        ]);
        if ($setup["live"]) {
            // Live mode is lenient: synthetic IDs frequently 4xx. Skip
            // rather than fail when the load endpoint isn't reachable
            // with the IDs we can construct from setup.idmap.
            if (!empty($result["err"])) {
                $this->markTestSkipped("load call failed (likely synthetic IDs against live API): " . (string)$result["err"]);
                return;
            }
            if (empty($result["ok"])) {
                $this->markTestSkipped("load call not ok (likely synthetic IDs against live API)");
                return;
            }
            $status = Helpers::to_int($result["status"]);
            if ($status < 200 || $status >= 300) {
                $this->markTestSkipped("expected 2xx status, got " . $status);
                return;
            }
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertNotNull($result["data"]);
            if (is_array($result["data"]) && isset($result["data"]["id"])) {
                $this->assertEquals("direct01", $result["data"]["id"]);
            }
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function observatory_trend_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_TREND_ENTID" => [],
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY" => "",
    ]);

    $live = $env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
        ]);
        $client = new CloudflareApplicationDeliverySDK($merged_opts);
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new CloudflareApplicationDeliverySDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
