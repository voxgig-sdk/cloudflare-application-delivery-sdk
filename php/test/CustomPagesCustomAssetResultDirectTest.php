<?php
declare(strict_types=1);

// CustomPagesCustomAssetResult direct test

require_once __DIR__ . '/../cloudflareapplicationdelivery_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class CustomPagesCustomAssetResultDirectTest extends TestCase
{
    public function test_direct_load_custom_pages_custom_asset_result(): void
    {
        $setup = custom_pages_custom_asset_result_direct_setup(["id" => "direct01"]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-load-custom_pages_custom_asset_result", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        $client = $setup["client"];

        $params = [];
        $query = [];
        if ($setup["live"]) {
            $params["account_id"] = "023e105f4ecef8ad9ca31a8372d0c353";
            $params["asset_name"] = "my_custom_error_page";
        } else {
            $params["account_id"] = "direct01";
            $params["asset_name"] = "direct02";
        }

        $result = $client->direct([
            "path" => "accounts/{account_id}/custom_pages/assets/{asset_name}",
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


function custom_pages_custom_asset_result_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID" => [],
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
