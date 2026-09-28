# CloudflareApplicationDelivery SDK utility: make_context
require_relative '../core/context'
module CloudflareApplicationDeliveryUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareApplicationDeliveryContext.new(ctxmap, basectx)
  }
end
