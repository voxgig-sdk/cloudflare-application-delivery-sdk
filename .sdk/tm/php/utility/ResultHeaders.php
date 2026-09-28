<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK utility: result_headers

class CloudflareApplicationDeliveryResultHeaders
{
    public static function call(CloudflareApplicationDeliveryContext $ctx): ?CloudflareApplicationDeliveryResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
