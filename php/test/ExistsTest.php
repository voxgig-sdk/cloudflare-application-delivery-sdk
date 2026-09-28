<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK exists test

require_once __DIR__ . '/../cloudflareapplicationdelivery_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareApplicationDeliverySDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
