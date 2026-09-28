# CloudflareApplicationDelivery SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareApplicationDeliveryUtility.registrar = ->(u) {
  u.clean = CloudflareApplicationDeliveryUtilities::Clean
  u.done = CloudflareApplicationDeliveryUtilities::Done
  u.make_error = CloudflareApplicationDeliveryUtilities::MakeError
  u.feature_add = CloudflareApplicationDeliveryUtilities::FeatureAdd
  u.feature_hook = CloudflareApplicationDeliveryUtilities::FeatureHook
  u.feature_init = CloudflareApplicationDeliveryUtilities::FeatureInit
  u.fetcher = CloudflareApplicationDeliveryUtilities::Fetcher
  u.make_fetch_def = CloudflareApplicationDeliveryUtilities::MakeFetchDef
  u.make_context = CloudflareApplicationDeliveryUtilities::MakeContext
  u.make_options = CloudflareApplicationDeliveryUtilities::MakeOptions
  u.make_request = CloudflareApplicationDeliveryUtilities::MakeRequest
  u.make_response = CloudflareApplicationDeliveryUtilities::MakeResponse
  u.make_result = CloudflareApplicationDeliveryUtilities::MakeResult
  u.make_point = CloudflareApplicationDeliveryUtilities::MakePoint
  u.make_spec = CloudflareApplicationDeliveryUtilities::MakeSpec
  u.make_url = CloudflareApplicationDeliveryUtilities::MakeUrl
  u.param = CloudflareApplicationDeliveryUtilities::Param
  u.prepare_auth = CloudflareApplicationDeliveryUtilities::PrepareAuth
  u.prepare_body = CloudflareApplicationDeliveryUtilities::PrepareBody
  u.prepare_headers = CloudflareApplicationDeliveryUtilities::PrepareHeaders
  u.prepare_method = CloudflareApplicationDeliveryUtilities::PrepareMethod
  u.prepare_params = CloudflareApplicationDeliveryUtilities::PrepareParams
  u.prepare_path = CloudflareApplicationDeliveryUtilities::PreparePath
  u.prepare_query = CloudflareApplicationDeliveryUtilities::PrepareQuery
  u.graphql_body = CloudflareApplicationDeliveryUtilities::GraphqlBody
  u.graphql_errors = CloudflareApplicationDeliveryUtilities::GraphqlErrors
  u.result_basic = CloudflareApplicationDeliveryUtilities::ResultBasic
  u.result_body = CloudflareApplicationDeliveryUtilities::ResultBody
  u.result_headers = CloudflareApplicationDeliveryUtilities::ResultHeaders
  u.transform_request = CloudflareApplicationDeliveryUtilities::TransformRequest
  u.transform_response = CloudflareApplicationDeliveryUtilities::TransformResponse
}
