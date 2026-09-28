# frozen_string_literal: true

# Typed models for the CloudflareApplicationDelivery SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# ArgoConfigApiResponseSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [String]
ArgoConfigApiResponseSingle = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for ArgoConfigApiResponseSingle#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ArgoConfigApiResponseSingleListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ArgoConfigApiResponseSingle#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
ArgoConfigApiResponseSingleUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# CachePurgeApiResponseSingleId entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
CachePurgeApiResponseSingleId = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for CachePurgeApiResponseSingleId#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
CachePurgeApiResponseSingleIdCreateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# CacheReserveClear entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
CacheReserveClear = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for CacheReserveClear#list.
#
# @!attribute [rw] zone_id
#   @return [String]
CacheReserveClearListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for CacheReserveClear#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
CacheReserveClearCreateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# CustomAssetsForAZone entity data model.
class CustomAssetsForAZone
end

# Request payload for CustomAssetsForAZone#remove.
#
# @!attribute [rw] asset_name
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
CustomAssetsForAZoneRemoveMatch = Struct.new(
  :asset_name,
  :zone_id,
  keyword_init: true
)

# CustomAssetsForAnAccount entity data model.
class CustomAssetsForAnAccount
end

# Request payload for CustomAssetsForAnAccount#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] asset_name
#   @return [String]
CustomAssetsForAnAccountRemoveMatch = Struct.new(
  :account_id,
  :asset_name,
  keyword_init: true
)

# CustomPage entity data model.
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] modified_on
#   @return [String, nil]
#
# @!attribute [rw] preview_target
#   @return [String, nil]
#
# @!attribute [rw] required_tokens
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomPage = Struct.new(
  :created_on,
  :description,
  :id,
  :modified_on,
  :preview_target,
  :required_tokens,
  :result,
  :state,
  :url,
  keyword_init: true
)

# Request payload for CustomPage#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
CustomPageLoadMatch = Struct.new(
  :account_id,
  :id,
  :zone_id,
  keyword_init: true
)

# Request payload for CustomPage#list.
#
# @!attribute [rw] account_id
#   @return [String]
CustomPageListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# Request payload for CustomPage#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
#
# @!attribute [rw] created_on
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] modified_on
#   @return [String, nil]
#
# @!attribute [rw] preview_target
#   @return [String, nil]
#
# @!attribute [rw] required_tokens
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomPageUpdateData = Struct.new(
  :account_id,
  :id,
  :zone_id,
  :created_on,
  :description,
  :modified_on,
  :preview_target,
  :required_tokens,
  :result,
  :state,
  :url,
  keyword_init: true
)

# CustomPagesCustomAssetResult entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String]
CustomPagesCustomAssetResult = Struct.new(
  :description,
  :name,
  :result,
  :url,
  keyword_init: true
)

# Request payload for CustomPagesCustomAssetResult#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] asset_name
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
CustomPagesCustomAssetResultLoadMatch = Struct.new(
  :account_id,
  :asset_name,
  :zone_id,
  keyword_init: true
)

# Request payload for CustomPagesCustomAssetResult#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String]
CustomPagesCustomAssetResultCreateData = Struct.new(
  :account_id,
  :description,
  :name,
  :result,
  :url,
  keyword_init: true
)

# Request payload for CustomPagesCustomAssetResult#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] asset_name
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
CustomPagesCustomAssetResultUpdateData = Struct.new(
  :account_id,
  :asset_name,
  :zone_id,
  :description,
  :name,
  :result,
  :url,
  keyword_init: true
)

# CustomPagesCustomAssetResultList entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
CustomPagesCustomAssetResultList = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for CustomPagesCustomAssetResultList#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
CustomPagesCustomAssetResultListListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# CustomPagesPreviewTokenResult entity data model.
#
# @!attribute [rw] act
#   @return [String]
#
# @!attribute [rw] target
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
CustomPagesPreviewTokenResult = Struct.new(
  :act,
  :target,
  :url,
  keyword_init: true
)

# Request payload for CustomPagesPreviewTokenResult#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] act
#   @return [String]
#
# @!attribute [rw] target
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
CustomPagesPreviewTokenResultCreateData = Struct.new(
  :account_id,
  :act,
  :target,
  :url,
  keyword_init: true
)

# ManagedTransform entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] managed_request_headers
#   @return [Array, nil]
#
# @!attribute [rw] managed_response_headers
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
ManagedTransform = Struct.new(
  :errors,
  :managed_request_headers,
  :managed_response_headers,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ManagedTransform#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ManagedTransformListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ManagedTransform#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] managed_request_headers
#   @return [Array, nil]
#
# @!attribute [rw] managed_response_headers
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ManagedTransformUpdateData = Struct.new(
  :zone_id,
  :errors,
  :managed_request_headers,
  :managed_response_headers,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ManagedTransform#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
ManagedTransformRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# ObservatoryAvailability entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryAvailability = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ObservatoryAvailability#load.
#
# @!attribute [rw] zone_id
#   @return [String]
ObservatoryAvailabilityLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# ObservatoryCreateSchedule entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryCreateSchedule = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for ObservatoryCreateSchedule#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] frequency
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryCreateScheduleCreateData = Struct.new(
  :id,
  :zone_id,
  :frequency,
  :region,
  :result,
  keyword_init: true
)

# ObservatoryPageTestResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
ObservatoryPageTestResponseCollection = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for ObservatoryPageTestResponseCollection#list.
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [Object, nil]
ObservatoryPageTestResponseCollectionListMatch = Struct.new(
  :url,
  :zone_id,
  :page,
  :per_page,
  :region,
  keyword_init: true
)

# ObservatoryPageTestResponseSingle entity data model.
#
# @!attribute [rw] region
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryPageTestResponseSingle = Struct.new(
  :region,
  :result,
  keyword_init: true
)

# Request payload for ObservatoryPageTestResponseSingle#load.
#
# @!attribute [rw] page_id
#   @return [String]
#
# @!attribute [rw] test_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
ObservatoryPageTestResponseSingleLoadMatch = Struct.new(
  :page_id,
  :test_id,
  :zone_id,
  keyword_init: true
)

# Request payload for ObservatoryPageTestResponseSingle#create.
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] region
#   @return [Object, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryPageTestResponseSingleCreateData = Struct.new(
  :url,
  :zone_id,
  :region,
  :result,
  keyword_init: true
)

# ObservatoryPagesResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ObservatoryPagesResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ObservatoryPagesResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ObservatoryPagesResponseCollectionListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# ObservatoryScheduleResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryScheduleResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ObservatoryScheduleResponseSingle#load.
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] region
#   @return [Object, nil]
ObservatoryScheduleResponseSingleLoadMatch = Struct.new(
  :url,
  :zone_id,
  :region,
  keyword_init: true
)

# ObservatoryTrend entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
ObservatoryTrend = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ObservatoryTrend#load.
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] device_type
#   @return [String]
#
# @!attribute [rw] end
#   @return [String, nil]
#
# @!attribute [rw] metric
#   @return [String]
#
# @!attribute [rw] region
#   @return [String]
#
# @!attribute [rw] start
#   @return [String]
#
# @!attribute [rw] tz
#   @return [String]
ObservatoryTrendLoadMatch = Struct.new(
  :url,
  :zone_id,
  :device_type,
  :end,
  :metric,
  :region,
  :start,
  :tz,
  keyword_init: true
)

# OriginCloudRegion entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] origin_ip
#   @return [String]
#
# @!attribute [rw] region
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] vendor
#   @return [String]
OriginCloudRegion = Struct.new(
  :errors,
  :id,
  :ip,
  :messages,
  :origin_ip,
  :region,
  :result,
  :result_info,
  :success,
  :vendor,
  keyword_init: true
)

# Request payload for OriginCloudRegion#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
OriginCloudRegionLoadMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# Request payload for OriginCloudRegion#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
OriginCloudRegionListMatch = Struct.new(
  :zone_id,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for OriginCloudRegion#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] origin_ip
#   @return [String]
#
# @!attribute [rw] region
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] vendor
#   @return [String]
OriginCloudRegionCreateData = Struct.new(
  :zone_id,
  :errors,
  :id,
  :ip,
  :messages,
  :origin_ip,
  :region,
  :result,
  :result_info,
  :success,
  :vendor,
  keyword_init: true
)

# Request payload for OriginCloudRegion#update.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] origin_ip
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] vendor
#   @return [String, nil]
OriginCloudRegionUpdateData = Struct.new(
  :id,
  :zone_id,
  :errors,
  :ip,
  :messages,
  :origin_ip,
  :region,
  :result,
  :result_info,
  :success,
  :vendor,
  keyword_init: true
)

# Request payload for OriginCloudRegion#remove.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
OriginCloudRegionRemoveMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# OriginPostQuantum entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String]
OriginPostQuantum = Struct.new(
  :result,
  :value,
  keyword_init: true
)

# Request payload for OriginPostQuantum#load.
#
# @!attribute [rw] zone_id
#   @return [String]
OriginPostQuantumLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for OriginPostQuantum#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
OriginPostQuantumUpdateData = Struct.new(
  :zone_id,
  :result,
  :value,
  keyword_init: true
)

# Schedule entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Schedule = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Schedule#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] region
#   @return [Object, nil]
ScheduleRemoveMatch = Struct.new(
  :id,
  :zone_id,
  :region,
  keyword_init: true
)

# SmartShield entity data model.
#
# @!attribute [rw] cache_reserve
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] regional_tiered_cache
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] smart_routing
#   @return [Hash, nil]
#
# @!attribute [rw] smart_tiered_cache
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
SmartShield = Struct.new(
  :cache_reserve,
  :errors,
  :messages,
  :regional_tiered_cache,
  :result,
  :smart_routing,
  :smart_tiered_cache,
  :success,
  keyword_init: true
)

# Request payload for SmartShield#list.
#
# @!attribute [rw] zone_id
#   @return [String]
SmartShieldListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for SmartShield#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] cache_reserve
#   @return [Hash, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] regional_tiered_cache
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] smart_routing
#   @return [Hash, nil]
#
# @!attribute [rw] smart_tiered_cache
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
SmartShieldUpdateData = Struct.new(
  :zone_id,
  :cache_reserve,
  :errors,
  :messages,
  :regional_tiered_cache,
  :result,
  :smart_routing,
  :smart_tiered_cache,
  :success,
  keyword_init: true
)

# SmartTieredCache entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String]
SmartTieredCache = Struct.new(
  :result,
  :value,
  keyword_init: true
)

# Request payload for SmartTieredCache#load.
#
# @!attribute [rw] zone_id
#   @return [String]
SmartTieredCacheLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for SmartTieredCache#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String]
SmartTieredCacheCreateData = Struct.new(
  :zone_id,
  :result,
  :value,
  keyword_init: true
)

# Request payload for SmartTieredCache#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
SmartTieredCacheUpdateData = Struct.new(
  :zone_id,
  :result,
  :value,
  keyword_init: true
)

# Request payload for SmartTieredCache#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
SmartTieredCacheRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# SmartshieldResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
SmartshieldResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for SmartshieldResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
SmartshieldResponseCollectionListMatch = Struct.new(
  :zone_id,
  :page,
  :per_page,
  keyword_init: true
)

# SmartshieldSingleHc entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] check_regions
#   @return [Array, nil]
#
# @!attribute [rw] consecutive_fails
#   @return [Integer, nil]
#
# @!attribute [rw] consecutive_successes
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] http_config
#   @return [Hash, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] retries
#   @return [Integer, nil]
#
# @!attribute [rw] suspended
#   @return [Boolean, nil]
#
# @!attribute [rw] tcp_config
#   @return [Hash, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SmartshieldSingleHc = Struct.new(
  :address,
  :check_regions,
  :consecutive_fails,
  :consecutive_successes,
  :description,
  :http_config,
  :interval,
  :name,
  :result,
  :retries,
  :suspended,
  :tcp_config,
  :timeout,
  :type,
  keyword_init: true
)

# Request payload for SmartshieldSingleHc#load.
#
# @!attribute [rw] healthcheck_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
SmartshieldSingleHcLoadMatch = Struct.new(
  :healthcheck_id,
  :zone_id,
  keyword_init: true
)

# Request payload for SmartshieldSingleHc#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] check_regions
#   @return [Array, nil]
#
# @!attribute [rw] consecutive_fails
#   @return [Integer, nil]
#
# @!attribute [rw] consecutive_successes
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] http_config
#   @return [Hash, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] retries
#   @return [Integer, nil]
#
# @!attribute [rw] suspended
#   @return [Boolean, nil]
#
# @!attribute [rw] tcp_config
#   @return [Hash, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SmartshieldSingleHcCreateData = Struct.new(
  :zone_id,
  :address,
  :check_regions,
  :consecutive_fails,
  :consecutive_successes,
  :description,
  :http_config,
  :interval,
  :name,
  :result,
  :retries,
  :suspended,
  :tcp_config,
  :timeout,
  :type,
  keyword_init: true
)

# Request payload for SmartshieldSingleHc#update.
#
# @!attribute [rw] healthcheck_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] address
#   @return [String, nil]
#
# @!attribute [rw] check_regions
#   @return [Array, nil]
#
# @!attribute [rw] consecutive_fails
#   @return [Integer, nil]
#
# @!attribute [rw] consecutive_successes
#   @return [Integer, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] http_config
#   @return [Hash, nil]
#
# @!attribute [rw] interval
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] retries
#   @return [Integer, nil]
#
# @!attribute [rw] suspended
#   @return [Boolean, nil]
#
# @!attribute [rw] tcp_config
#   @return [Hash, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
SmartshieldSingleHcUpdateData = Struct.new(
  :healthcheck_id,
  :zone_id,
  :address,
  :check_regions,
  :consecutive_fails,
  :consecutive_successes,
  :description,
  :http_config,
  :interval,
  :name,
  :result,
  :retries,
  :suspended,
  :tcp_config,
  :timeout,
  :type,
  keyword_init: true
)

# SmartshieldSingleHcId entity data model.
class SmartshieldSingleHcId
end

# Request payload for SmartshieldSingleHcId#remove.
#
# @!attribute [rw] healthcheck_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
SmartshieldSingleHcIdRemoveMatch = Struct.new(
  :healthcheck_id,
  :zone_id,
  keyword_init: true
)

# Test entity data model.
class Test
end

# Request payload for Test#remove.
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] region
#   @return [Object, nil]
TestRemoveMatch = Struct.new(
  :url,
  :zone_id,
  :region,
  keyword_init: true
)

# TieredCaching entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String]
TieredCaching = Struct.new(
  :result,
  :value,
  keyword_init: true
)

# Request payload for TieredCaching#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TieredCachingLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for TieredCaching#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
TieredCachingUpdateData = Struct.new(
  :zone_id,
  :result,
  :value,
  keyword_init: true
)

# UrlNormalization entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scope
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String]
UrlNormalization = Struct.new(
  :errors,
  :messages,
  :result,
  :scope,
  :success,
  :type,
  keyword_init: true
)

# Request payload for UrlNormalization#list.
#
# @!attribute [rw] zone_id
#   @return [String]
UrlNormalizationListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for UrlNormalization#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
UrlNormalizationUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :scope,
  :success,
  :type,
  keyword_init: true
)

# Request payload for UrlNormalization#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
UrlNormalizationRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# ZoneCacheSetting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [String]
ZoneCacheSetting = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for ZoneCacheSetting#load.
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneCacheSettingLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ZoneCacheSetting#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneCacheSettingListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ZoneCacheSetting#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [String]
ZoneCacheSettingCreateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for ZoneCacheSetting#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
ZoneCacheSettingUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for ZoneCacheSetting#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneCacheSettingRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

