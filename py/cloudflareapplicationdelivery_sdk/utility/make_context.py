# CloudflareApplicationDelivery SDK utility: make_context

from cloudflareapplicationdelivery_sdk.core.context import CloudflareApplicationDeliveryContext


def make_context_util(ctxmap, basectx):
    return CloudflareApplicationDeliveryContext(ctxmap, basectx)
