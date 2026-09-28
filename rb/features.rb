# CloudflareApplicationDelivery SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareApplicationDeliveryFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareApplicationDeliveryBaseFeature.new
    when "test"
      CloudflareApplicationDeliveryTestFeature.new
    else
      CloudflareApplicationDeliveryBaseFeature.new
    end
  end
end
