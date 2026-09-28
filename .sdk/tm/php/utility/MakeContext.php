<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareApplicationDeliveryMakeContext
{
    public static function call(array $ctxmap, ?CloudflareApplicationDeliveryContext $basectx): CloudflareApplicationDeliveryContext
    {
        return new CloudflareApplicationDeliveryContext($ctxmap, $basectx);
    }
}
