-- CloudflareApplicationDelivery SDK error

local CloudflareApplicationDeliveryError = {}
CloudflareApplicationDeliveryError.__index = CloudflareApplicationDeliveryError


function CloudflareApplicationDeliveryError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareApplicationDeliveryError)
  self.is_sdk_error = true
  self.sdk = "CloudflareApplicationDelivery"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareApplicationDeliveryError:error()
  return self.msg
end


function CloudflareApplicationDeliveryError:__tostring()
  return self.msg
end


return CloudflareApplicationDeliveryError
