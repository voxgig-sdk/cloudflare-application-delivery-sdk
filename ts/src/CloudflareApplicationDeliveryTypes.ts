// Typed models for the CloudflareApplicationDelivery SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface ArgoConfigApiResponseSingle {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
  value: string
}

export interface ArgoConfigApiResponseSingleListMatch {
  zone_id: string
}

export interface ArgoConfigApiResponseSingleUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: string
}

export interface CachePurgeApiResponseSingleId {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface CachePurgeApiResponseSingleIdCreateData {
  zone_id: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface CacheReserveClear {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface CacheReserveClearListMatch {
  zone_id: string
}

export interface CacheReserveClearCreateData {
  zone_id: string
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface CustomAssetsForAZone {
}

export interface CustomAssetsForAZoneRemoveMatch {
  asset_name: string
  zone_id: string
}

export interface CustomAssetsForAnAccount {
}

export interface CustomAssetsForAnAccountRemoveMatch {
  account_id: string
  asset_name: string
}

export interface CustomPage {
  created_on?: string
  description?: string
  id?: string
  modified_on?: string
  preview_target?: string
  required_tokens?: any[]
  result?: Record<string, any>
  state?: string
  url?: string
}

export interface CustomPageLoadMatch {
  account_id?: string
  id: string
  zone_id?: string
}

export interface CustomPageListMatch {
  account_id: string
}

export interface CustomPageUpdateData {
  account_id?: string
  id: string
  zone_id?: string
  created_on?: string
  description?: string
  modified_on?: string
  preview_target?: string
  required_tokens?: any[]
  result?: Record<string, any>
  state?: string
  url?: string
}

export interface CustomPagesCustomAssetResult {
  description: string
  name: string
  result?: Record<string, any>
  url: string
}

export interface CustomPagesCustomAssetResultLoadMatch {
  account_id?: string
  asset_name: string
  zone_id?: string
}

export interface CustomPagesCustomAssetResultCreateData {
  account_id: string
  description: string
  name: string
  result?: Record<string, any>
  url: string
}

export interface CustomPagesCustomAssetResultUpdateData {
  account_id?: string
  asset_name: string
  zone_id?: string
  description?: string
  name?: string
  result?: Record<string, any>
  url?: string
}

export interface CustomPagesCustomAssetResultList {
  result?: any[]
}

export interface CustomPagesCustomAssetResultListListMatch {
  account_id: string
  page?: number
  per_page?: number
}

export interface CustomPagesPreviewTokenResult {
  act: string
  target: string
  url: string
}

export interface CustomPagesPreviewTokenResultCreateData {
  account_id: string
  act: string
  target: string
  url: string
}

export interface ManagedTransform {
  errors: any[]
  managed_request_headers?: any[]
  managed_response_headers?: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface ManagedTransformListMatch {
  zone_id: string
}

export interface ManagedTransformUpdateData {
  zone_id: string
  errors?: any[]
  managed_request_headers?: any[]
  managed_response_headers?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface ManagedTransformRemoveMatch {
  zone_id: string
}

export interface ObservatoryAvailability {
  result?: Record<string, any>
}

export interface ObservatoryAvailabilityLoadMatch {
  zone_id: string
}

export interface ObservatoryCreateSchedule {
  id?: string
  result?: Record<string, any>
}

export interface ObservatoryCreateScheduleCreateData {
  id: string
  zone_id: string
  frequency?: string
  region?: any
  result?: Record<string, any>
}

export interface ObservatoryPageTestResponseCollection {
  result?: any[]
  result_info?: Record<string, any>
}

export interface ObservatoryPageTestResponseCollectionListMatch {
  url: string
  zone_id: string
  page?: number
  per_page?: number
  region?: any
}

export interface ObservatoryPageTestResponseSingle {
  region?: any
  result?: Record<string, any>
}

export interface ObservatoryPageTestResponseSingleLoadMatch {
  page_id: string
  test_id: string
  zone_id: string
}

export interface ObservatoryPageTestResponseSingleCreateData {
  url: string
  zone_id: string
  region?: any
  result?: Record<string, any>
}

export interface ObservatoryPagesResponseCollection {
  result?: any[]
}

export interface ObservatoryPagesResponseCollectionListMatch {
  zone_id: string
}

export interface ObservatoryScheduleResponseSingle {
  result?: Record<string, any>
}

export interface ObservatoryScheduleResponseSingleLoadMatch {
  url: string
  zone_id: string
  region?: any
}

export interface ObservatoryTrend {
  result?: Record<string, any>
}

export interface ObservatoryTrendLoadMatch {
  url: string
  zone_id: string
  device_type: string
  end?: string
  metric: string
  region: string
  start: string
  tz: string
}

export interface OriginCloudRegion {
  errors: any[]
  id?: string
  ip: string
  messages: any[]
  origin_ip: string
  region: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
  vendor: string
}

export interface OriginCloudRegionLoadMatch {
  id: string
  zone_id: string
}

export interface OriginCloudRegionListMatch {
  zone_id: string
  page?: number
  per_page?: number

  // Selects a custom action instead of the plain list:
  //   'supported_region'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OriginCloudRegionCreateData {
  zone_id: string
  errors: any[]
  id?: string
  ip: string
  messages: any[]
  origin_ip: string
  region: string
  result: Record<string, any>
  result_info: Record<string, any>
  success: boolean
  vendor: string
}

export interface OriginCloudRegionUpdateData {
  id?: string
  zone_id: string
  errors?: any[]
  ip?: string
  messages?: any[]
  origin_ip?: string
  region?: string
  result?: Record<string, any>
  result_info?: Record<string, any>
  success?: boolean
  vendor?: string
}

export interface OriginCloudRegionRemoveMatch {
  id?: string
  zone_id: string

  // Selects a custom action instead of the plain remove:
  //   'batch'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OriginPostQuantum {
  result?: Record<string, any>
  value: string
}

export interface OriginPostQuantumLoadMatch {
  zone_id: string
}

export interface OriginPostQuantumUpdateData {
  zone_id: string
  result?: Record<string, any>
  value?: string
}

export interface Schedule {
  id?: string
}

export interface ScheduleRemoveMatch {
  id: string
  zone_id: string
  region?: any
}

export interface SmartShield {
  cache_reserve?: Record<string, any>
  errors: any[]
  messages: any[]
  regional_tiered_cache?: Record<string, any>
  result: Record<string, any>
  smart_routing?: Record<string, any>
  smart_tiered_cache?: Record<string, any>
  success: boolean
}

export interface SmartShieldListMatch {
  zone_id: string
}

export interface SmartShieldUpdateData {
  zone_id: string
  cache_reserve?: Record<string, any>
  errors?: any[]
  messages?: any[]
  regional_tiered_cache?: Record<string, any>
  result?: Record<string, any>
  smart_routing?: Record<string, any>
  smart_tiered_cache?: Record<string, any>
  success?: boolean
}

export interface SmartTieredCache {
  result?: Record<string, any>
  value: string
}

export interface SmartTieredCacheLoadMatch {
  zone_id: string
}

export interface SmartTieredCacheCreateData {
  zone_id: string
  result?: Record<string, any>
  value: string
}

export interface SmartTieredCacheUpdateData {
  zone_id: string
  result?: Record<string, any>
  value?: string
}

export interface SmartTieredCacheRemoveMatch {
  zone_id: string
}

export interface SmartshieldResponseCollection {
  result?: any[]
}

export interface SmartshieldResponseCollectionListMatch {
  zone_id: string
  page?: number
  per_page?: number
}

export interface SmartshieldSingleHc {
  address: string
  check_regions?: any[]
  consecutive_fails?: number
  consecutive_successes?: number
  description?: string
  http_config?: Record<string, any>
  interval?: number
  name: string
  result?: Record<string, any>
  retries?: number
  suspended?: boolean
  tcp_config?: Record<string, any>
  timeout?: number
  type?: string
}

export interface SmartshieldSingleHcLoadMatch {
  healthcheck_id: string
  zone_id: string
}

export interface SmartshieldSingleHcCreateData {
  zone_id: string
  address: string
  check_regions?: any[]
  consecutive_fails?: number
  consecutive_successes?: number
  description?: string
  http_config?: Record<string, any>
  interval?: number
  name: string
  result?: Record<string, any>
  retries?: number
  suspended?: boolean
  tcp_config?: Record<string, any>
  timeout?: number
  type?: string
}

export interface SmartshieldSingleHcUpdateData {
  healthcheck_id: string
  zone_id: string
  address?: string
  check_regions?: any[]
  consecutive_fails?: number
  consecutive_successes?: number
  description?: string
  http_config?: Record<string, any>
  interval?: number
  name?: string
  result?: Record<string, any>
  retries?: number
  suspended?: boolean
  tcp_config?: Record<string, any>
  timeout?: number
  type?: string
}

export interface SmartshieldSingleHcId {
}

export interface SmartshieldSingleHcIdRemoveMatch {
  healthcheck_id: string
  zone_id: string
}

export interface Test {
}

export interface TestRemoveMatch {
  url: string
  zone_id: string
  region?: any
}

export interface TieredCaching {
  result?: Record<string, any>
  value: string
}

export interface TieredCachingLoadMatch {
  zone_id: string
}

export interface TieredCachingUpdateData {
  zone_id: string
  result?: Record<string, any>
  value?: string
}

export interface UrlNormalization {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  scope: string
  success: boolean
  type: string
}

export interface UrlNormalizationListMatch {
  zone_id: string
}

export interface UrlNormalizationUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  scope?: string
  success?: boolean
  type?: string
}

export interface UrlNormalizationRemoveMatch {
  zone_id: string
}

export interface ZoneCacheSetting {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value: string
}

export interface ZoneCacheSettingLoadMatch {
  zone_id: string
}

export interface ZoneCacheSettingListMatch {
  zone_id: string
}

export interface ZoneCacheSettingCreateData {
  zone_id: string
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value: string
}

export interface ZoneCacheSettingUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: string
}

export interface ZoneCacheSettingRemoveMatch {
  zone_id: string
}

