-- CloudflareApplicationDelivery SDK exists test

local sdk = require("cloudflare-application-delivery_sdk")

describe("CloudflareApplicationDeliverySDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
