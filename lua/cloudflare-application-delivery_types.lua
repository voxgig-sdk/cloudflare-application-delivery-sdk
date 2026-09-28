-- Typed models for the CloudflareApplicationDelivery SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ArgoConfigApiResponseSingle
---@field errors table
---@field messages table
---@field result table
---@field success boolean
---@field value string

---@class ArgoConfigApiResponseSingleListMatch
---@field zone_id string

---@class ArgoConfigApiResponseSingleUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? string

---@class CachePurgeApiResponseSingleId
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CachePurgeApiResponseSingleIdCreateData
---@field zone_id string
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CacheReserveClear
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CacheReserveClearListMatch
---@field zone_id string

---@class CacheReserveClearCreateData
---@field zone_id string
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CustomAssetsForAZone

---@class CustomAssetsForAZoneRemoveMatch
---@field asset_name string
---@field zone_id string

---@class CustomAssetsForAnAccount

---@class CustomAssetsForAnAccountRemoveMatch
---@field account_id string
---@field asset_name string

---@class CustomPage
---@field created_on? string
---@field description? string
---@field id? string
---@field modified_on? string
---@field preview_target? string
---@field required_tokens? table
---@field result? table
---@field state? string
---@field url? string

---@class CustomPageLoadMatch
---@field account_id? string
---@field id string
---@field zone_id? string

---@class CustomPageListMatch
---@field account_id string

---@class CustomPageUpdateData
---@field account_id? string
---@field id string
---@field zone_id? string
---@field created_on? string
---@field description? string
---@field modified_on? string
---@field preview_target? string
---@field required_tokens? table
---@field result? table
---@field state? string
---@field url? string

---@class CustomPagesCustomAssetResult
---@field description string
---@field name string
---@field result? table
---@field url string

---@class CustomPagesCustomAssetResultLoadMatch
---@field account_id? string
---@field asset_name string
---@field zone_id? string

---@class CustomPagesCustomAssetResultCreateData
---@field account_id string
---@field description string
---@field name string
---@field result? table
---@field url string

---@class CustomPagesCustomAssetResultUpdateData
---@field account_id? string
---@field asset_name string
---@field zone_id? string
---@field description? string
---@field name? string
---@field result? table
---@field url? string

---@class CustomPagesCustomAssetResultList
---@field result? table

---@class CustomPagesCustomAssetResultListListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class CustomPagesPreviewTokenResult
---@field act string
---@field target string
---@field url string

---@class CustomPagesPreviewTokenResultCreateData
---@field account_id string
---@field act string
---@field target string
---@field url string

---@class ManagedTransform
---@field errors table
---@field managed_request_headers? table
---@field managed_response_headers? table
---@field messages table
---@field result table
---@field success boolean

---@class ManagedTransformListMatch
---@field zone_id string

---@class ManagedTransformUpdateData
---@field zone_id string
---@field errors? table
---@field managed_request_headers? table
---@field managed_response_headers? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class ManagedTransformRemoveMatch
---@field zone_id string

---@class ObservatoryAvailability
---@field result? table

---@class ObservatoryAvailabilityLoadMatch
---@field zone_id string

---@class ObservatoryCreateSchedule
---@field id? string
---@field result? table

---@class ObservatoryCreateScheduleCreateData
---@field id string
---@field zone_id string
---@field frequency? string
---@field region? any
---@field result? table

---@class ObservatoryPageTestResponseCollection
---@field result? table
---@field result_info? table

---@class ObservatoryPageTestResponseCollectionListMatch
---@field url string
---@field zone_id string
---@field page? number
---@field per_page? number
---@field region? any

---@class ObservatoryPageTestResponseSingle
---@field region? any
---@field result? table

---@class ObservatoryPageTestResponseSingleLoadMatch
---@field page_id string
---@field test_id string
---@field zone_id string

---@class ObservatoryPageTestResponseSingleCreateData
---@field url string
---@field zone_id string
---@field region? any
---@field result? table

---@class ObservatoryPagesResponseCollection
---@field result? table

---@class ObservatoryPagesResponseCollectionListMatch
---@field zone_id string

---@class ObservatoryScheduleResponseSingle
---@field result? table

---@class ObservatoryScheduleResponseSingleLoadMatch
---@field url string
---@field zone_id string
---@field region? any

---@class ObservatoryTrend
---@field result? table

---@class ObservatoryTrendLoadMatch
---@field url string
---@field zone_id string
---@field device_type string
---@field end? string
---@field metric string
---@field region string
---@field start string
---@field tz string

---@class OriginCloudRegion
---@field errors table
---@field id? string
---@field ip string
---@field messages table
---@field origin_ip string
---@field region string
---@field result table
---@field result_info table
---@field success boolean
---@field vendor string

---@class OriginCloudRegionLoadMatch
---@field id string
---@field zone_id string

---@class OriginCloudRegionListMatch
---@field zone_id string
---@field page? number
---@field per_page? number

---@class OriginCloudRegionCreateData
---@field zone_id string
---@field errors table
---@field id? string
---@field ip string
---@field messages table
---@field origin_ip string
---@field region string
---@field result table
---@field result_info table
---@field success boolean
---@field vendor string

---@class OriginCloudRegionUpdateData
---@field id? string
---@field zone_id string
---@field errors? table
---@field ip? string
---@field messages? table
---@field origin_ip? string
---@field region? string
---@field result? table
---@field result_info? table
---@field success? boolean
---@field vendor? string

---@class OriginCloudRegionRemoveMatch
---@field id? string
---@field zone_id string

---@class OriginPostQuantum
---@field result? table
---@field value string

---@class OriginPostQuantumLoadMatch
---@field zone_id string

---@class OriginPostQuantumUpdateData
---@field zone_id string
---@field result? table
---@field value? string

---@class Schedule
---@field id? string

---@class ScheduleRemoveMatch
---@field id string
---@field zone_id string
---@field region? any

---@class SmartShield
---@field cache_reserve? table
---@field errors table
---@field messages table
---@field regional_tiered_cache? table
---@field result table
---@field smart_routing? table
---@field smart_tiered_cache? table
---@field success boolean

---@class SmartShieldListMatch
---@field zone_id string

---@class SmartShieldUpdateData
---@field zone_id string
---@field cache_reserve? table
---@field errors? table
---@field messages? table
---@field regional_tiered_cache? table
---@field result? table
---@field smart_routing? table
---@field smart_tiered_cache? table
---@field success? boolean

---@class SmartTieredCache
---@field result? table
---@field value string

---@class SmartTieredCacheLoadMatch
---@field zone_id string

---@class SmartTieredCacheCreateData
---@field zone_id string
---@field result? table
---@field value string

---@class SmartTieredCacheUpdateData
---@field zone_id string
---@field result? table
---@field value? string

---@class SmartTieredCacheRemoveMatch
---@field zone_id string

---@class SmartshieldResponseCollection
---@field result? table

---@class SmartshieldResponseCollectionListMatch
---@field zone_id string
---@field page? number
---@field per_page? number

---@class SmartshieldSingleHc
---@field address string
---@field check_regions? table
---@field consecutive_fails? number
---@field consecutive_successes? number
---@field description? string
---@field http_config? table
---@field interval? number
---@field name string
---@field result? table
---@field retries? number
---@field suspended? boolean
---@field tcp_config? table
---@field timeout? number
---@field type? string

---@class SmartshieldSingleHcLoadMatch
---@field healthcheck_id string
---@field zone_id string

---@class SmartshieldSingleHcCreateData
---@field zone_id string
---@field address string
---@field check_regions? table
---@field consecutive_fails? number
---@field consecutive_successes? number
---@field description? string
---@field http_config? table
---@field interval? number
---@field name string
---@field result? table
---@field retries? number
---@field suspended? boolean
---@field tcp_config? table
---@field timeout? number
---@field type? string

---@class SmartshieldSingleHcUpdateData
---@field healthcheck_id string
---@field zone_id string
---@field address? string
---@field check_regions? table
---@field consecutive_fails? number
---@field consecutive_successes? number
---@field description? string
---@field http_config? table
---@field interval? number
---@field name? string
---@field result? table
---@field retries? number
---@field suspended? boolean
---@field tcp_config? table
---@field timeout? number
---@field type? string

---@class SmartshieldSingleHcId

---@class SmartshieldSingleHcIdRemoveMatch
---@field healthcheck_id string
---@field zone_id string

---@class Test

---@class TestRemoveMatch
---@field url string
---@field zone_id string
---@field region? any

---@class TieredCaching
---@field result? table
---@field value string

---@class TieredCachingLoadMatch
---@field zone_id string

---@class TieredCachingUpdateData
---@field zone_id string
---@field result? table
---@field value? string

---@class UrlNormalization
---@field errors table
---@field messages table
---@field result table
---@field scope string
---@field success boolean
---@field type string

---@class UrlNormalizationListMatch
---@field zone_id string

---@class UrlNormalizationUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field scope? string
---@field success? boolean
---@field type? string

---@class UrlNormalizationRemoveMatch
---@field zone_id string

---@class ZoneCacheSetting
---@field errors table
---@field messages table
---@field result? table
---@field success boolean
---@field value string

---@class ZoneCacheSettingLoadMatch
---@field zone_id string

---@class ZoneCacheSettingListMatch
---@field zone_id string

---@class ZoneCacheSettingCreateData
---@field zone_id string
---@field errors table
---@field messages table
---@field result? table
---@field success boolean
---@field value string

---@class ZoneCacheSettingUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? string

---@class ZoneCacheSettingRemoveMatch
---@field zone_id string

local M = {}

return M
