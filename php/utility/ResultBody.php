<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK utility: result_body

class CloudflareApplicationDeliveryResultBody
{
    public static function call(CloudflareApplicationDeliveryContext $ctx): ?CloudflareApplicationDeliveryResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
