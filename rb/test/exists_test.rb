# CloudflareApplicationDelivery SDK exists test

require "minitest/autorun"
require_relative "../CloudflareApplicationDelivery_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareApplicationDeliverySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
