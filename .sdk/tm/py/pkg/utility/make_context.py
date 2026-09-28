# CloudflareApplicationDelivery SDK utility: make_context

from projectname_sdk.core.context import CloudflareApplicationDeliveryContext


def make_context_util(ctxmap, basectx):
    return CloudflareApplicationDeliveryContext(ctxmap, basectx)
