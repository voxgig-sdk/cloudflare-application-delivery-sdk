// Typed models for the CloudflareApplicationDelivery SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/core"
)

// ArgoConfigApiResponseSingle is the typed data model for the argo_config_api_response_single entity.
type ArgoConfigApiResponseSingle struct {
}

// ArgoConfigApiResponseSingleListMatch is the typed request payload for ArgoConfigApiResponseSingle.ListTyped.
type ArgoConfigApiResponseSingleListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ArgoConfigApiResponseSingleUpdateData is the typed request payload for ArgoConfigApiResponseSingle.UpdateTyped.
type ArgoConfigApiResponseSingleUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CachePurgeApiResponseSingleId is the typed data model for the cache_purge_api_response_single_id entity.
type CachePurgeApiResponseSingleId struct {
}

// CachePurgeApiResponseSingleIdCreateData is the typed request payload for CachePurgeApiResponseSingleId.CreateTyped.
type CachePurgeApiResponseSingleIdCreateData struct {
	ZoneId string `json:"zone_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// CacheReserveClear is the typed data model for the cache_reserve_clear entity.
type CacheReserveClear struct {
}

// CacheReserveClearListMatch is the typed request payload for CacheReserveClear.ListTyped.
type CacheReserveClearListMatch struct {
	ZoneId string `json:"zone_id"`
}

// CacheReserveClearCreateData is the typed request payload for CacheReserveClear.CreateTyped.
type CacheReserveClearCreateData struct {
	ZoneId string `json:"zone_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	Success bool `json:"success"`
}

// CustomAssetsForAZone is the typed data model for the custom_assets_for_a_zone entity.
type CustomAssetsForAZone struct {
}

// CustomAssetsForAZoneRemoveMatch is the typed request payload for CustomAssetsForAZone.RemoveTyped.
type CustomAssetsForAZoneRemoveMatch struct {
	AssetName string `json:"asset_name"`
	ZoneId string `json:"zone_id"`
}

// CustomAssetsForAnAccount is the typed data model for the custom_assets_for_an_account entity.
type CustomAssetsForAnAccount struct {
}

// CustomAssetsForAnAccountRemoveMatch is the typed request payload for CustomAssetsForAnAccount.RemoveTyped.
type CustomAssetsForAnAccountRemoveMatch struct {
	AccountId string `json:"account_id"`
	AssetName string `json:"asset_name"`
}

// CustomPage is the typed data model for the custom_page entity.
type CustomPage struct {
}

// CustomPageLoadMatch is the typed request payload for CustomPage.LoadTyped.
type CustomPageLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// CustomPageListMatch is the typed request payload for CustomPage.ListTyped.
type CustomPageListMatch struct {
	AccountId string `json:"account_id"`
}

// CustomPageUpdateData is the typed request payload for CustomPage.UpdateTyped.
type CustomPageUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
	ZoneId *string `json:"zone_id,omitempty"`
	CreatedOn *string `json:"created_on,omitempty"`
	Description *string `json:"description,omitempty"`
	ModifiedOn *string `json:"modified_on,omitempty"`
	PreviewTarget *string `json:"preview_target,omitempty"`
	RequiredTokens *[]any `json:"required_tokens,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	State *string `json:"state,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomPagesCustomAssetResult is the typed data model for the custom_pages_custom_asset_result entity.
type CustomPagesCustomAssetResult struct {
}

// CustomPagesCustomAssetResultLoadMatch is the typed request payload for CustomPagesCustomAssetResult.LoadTyped.
type CustomPagesCustomAssetResultLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	AssetName string `json:"asset_name"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// CustomPagesCustomAssetResultCreateData is the typed request payload for CustomPagesCustomAssetResult.CreateTyped.
type CustomPagesCustomAssetResultCreateData struct {
	AccountId string `json:"account_id"`
	Description string `json:"description"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Url string `json:"url"`
}

// CustomPagesCustomAssetResultUpdateData is the typed request payload for CustomPagesCustomAssetResult.UpdateTyped.
type CustomPagesCustomAssetResultUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	AssetName string `json:"asset_name"`
	ZoneId *string `json:"zone_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomPagesCustomAssetResultList is the typed data model for the custom_pages_custom_asset_result_list entity.
type CustomPagesCustomAssetResultList struct {
}

// CustomPagesCustomAssetResultListListMatch is the typed request payload for CustomPagesCustomAssetResultList.ListTyped.
type CustomPagesCustomAssetResultListListMatch struct {
	AccountId string `json:"account_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// CustomPagesPreviewTokenResult is the typed data model for the custom_pages_preview_token_result entity.
type CustomPagesPreviewTokenResult struct {
}

// CustomPagesPreviewTokenResultCreateData is the typed request payload for CustomPagesPreviewTokenResult.CreateTyped.
type CustomPagesPreviewTokenResultCreateData struct {
	AccountId string `json:"account_id"`
	Act string `json:"act"`
	Target string `json:"target"`
	Url string `json:"url"`
}

// ManagedTransform is the typed data model for the managed_transform entity.
type ManagedTransform struct {
}

// ManagedTransformListMatch is the typed request payload for ManagedTransform.ListTyped.
type ManagedTransformListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ManagedTransformUpdateData is the typed request payload for ManagedTransform.UpdateTyped.
type ManagedTransformUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	ManagedRequestHeaders *[]any `json:"managed_request_headers,omitempty"`
	ManagedResponseHeaders *[]any `json:"managed_response_headers,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ManagedTransformRemoveMatch is the typed request payload for ManagedTransform.RemoveTyped.
type ManagedTransformRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// ObservatoryAvailability is the typed data model for the observatory_availability entity.
type ObservatoryAvailability struct {
}

// ObservatoryAvailabilityLoadMatch is the typed request payload for ObservatoryAvailability.LoadTyped.
type ObservatoryAvailabilityLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// ObservatoryCreateSchedule is the typed data model for the observatory_create_schedule entity.
type ObservatoryCreateSchedule struct {
}

// ObservatoryCreateScheduleCreateData is the typed request payload for ObservatoryCreateSchedule.CreateTyped.
type ObservatoryCreateScheduleCreateData struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
	Frequency *string `json:"frequency,omitempty"`
	Region *any `json:"region,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ObservatoryPageTestResponseCollection is the typed data model for the observatory_page_test_response_collection entity.
type ObservatoryPageTestResponseCollection struct {
}

// ObservatoryPageTestResponseCollectionListMatch is the typed request payload for ObservatoryPageTestResponseCollection.ListTyped.
type ObservatoryPageTestResponseCollectionListMatch struct {
	Url string `json:"url"`
	ZoneId string `json:"zone_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	Region *any `json:"region,omitempty"`
}

// ObservatoryPageTestResponseSingle is the typed data model for the observatory_page_test_response_single entity.
type ObservatoryPageTestResponseSingle struct {
}

// ObservatoryPageTestResponseSingleLoadMatch is the typed request payload for ObservatoryPageTestResponseSingle.LoadTyped.
type ObservatoryPageTestResponseSingleLoadMatch struct {
	PageId string `json:"page_id"`
	TestId string `json:"test_id"`
	ZoneId string `json:"zone_id"`
}

// ObservatoryPageTestResponseSingleCreateData is the typed request payload for ObservatoryPageTestResponseSingle.CreateTyped.
type ObservatoryPageTestResponseSingleCreateData struct {
	Url string `json:"url"`
	ZoneId string `json:"zone_id"`
	Region *any `json:"region,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// ObservatoryPagesResponseCollection is the typed data model for the observatory_pages_response_collection entity.
type ObservatoryPagesResponseCollection struct {
}

// ObservatoryPagesResponseCollectionListMatch is the typed request payload for ObservatoryPagesResponseCollection.ListTyped.
type ObservatoryPagesResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ObservatoryScheduleResponseSingle is the typed data model for the observatory_schedule_response_single entity.
type ObservatoryScheduleResponseSingle struct {
}

// ObservatoryScheduleResponseSingleLoadMatch is the typed request payload for ObservatoryScheduleResponseSingle.LoadTyped.
type ObservatoryScheduleResponseSingleLoadMatch struct {
	Url string `json:"url"`
	ZoneId string `json:"zone_id"`
	Region *any `json:"region,omitempty"`
}

// ObservatoryTrend is the typed data model for the observatory_trend entity.
type ObservatoryTrend struct {
}

// ObservatoryTrendLoadMatch is the typed request payload for ObservatoryTrend.LoadTyped.
type ObservatoryTrendLoadMatch struct {
	Url string `json:"url"`
	ZoneId string `json:"zone_id"`
	DeviceType string `json:"device_type"`
	End *string `json:"end,omitempty"`
	Metric string `json:"metric"`
	Region string `json:"region"`
	Start string `json:"start"`
	Tz string `json:"tz"`
}

// OriginCloudRegion is the typed data model for the origin_cloud_region entity.
type OriginCloudRegion struct {
}

// OriginCloudRegionLoadMatch is the typed request payload for OriginCloudRegion.LoadTyped.
type OriginCloudRegionLoadMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
}

// OriginCloudRegionListMatch is the typed request payload for OriginCloudRegion.ListTyped.
type OriginCloudRegionListMatch struct {
	ZoneId string `json:"zone_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// OriginCloudRegionCreateData is the typed request payload for OriginCloudRegion.CreateTyped.
type OriginCloudRegionCreateData struct {
	ZoneId string `json:"zone_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Ip string `json:"ip"`
	Messages []any `json:"messages"`
	OriginIp string `json:"origin_ip"`
	Region string `json:"region"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
	Vendor string `json:"vendor"`
}

// OriginCloudRegionUpdateData is the typed request payload for OriginCloudRegion.UpdateTyped.
type OriginCloudRegionUpdateData struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Ip *string `json:"ip,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	OriginIp *string `json:"origin_ip,omitempty"`
	Region *string `json:"region,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Success *bool `json:"success,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}

// OriginCloudRegionRemoveMatch is the typed request payload for OriginCloudRegion.RemoveTyped.
type OriginCloudRegionRemoveMatch struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
}

// OriginPostQuantum is the typed data model for the origin_post_quantum entity.
type OriginPostQuantum struct {
}

// OriginPostQuantumLoadMatch is the typed request payload for OriginPostQuantum.LoadTyped.
type OriginPostQuantumLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// OriginPostQuantumUpdateData is the typed request payload for OriginPostQuantum.UpdateTyped.
type OriginPostQuantumUpdateData struct {
	ZoneId string `json:"zone_id"`
	Result *map[string]any `json:"result,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Schedule is the typed data model for the schedule entity.
type Schedule struct {
}

// ScheduleRemoveMatch is the typed request payload for Schedule.RemoveTyped.
type ScheduleRemoveMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
	Region *any `json:"region,omitempty"`
}

// SmartShield is the typed data model for the smart_shield entity.
type SmartShield struct {
}

// SmartShieldListMatch is the typed request payload for SmartShield.ListTyped.
type SmartShieldListMatch struct {
	ZoneId string `json:"zone_id"`
}

// SmartShieldUpdateData is the typed request payload for SmartShield.UpdateTyped.
type SmartShieldUpdateData struct {
	ZoneId string `json:"zone_id"`
	CacheReserve *map[string]any `json:"cache_reserve,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	RegionalTieredCache *map[string]any `json:"regional_tiered_cache,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	SmartRouting *map[string]any `json:"smart_routing,omitempty"`
	SmartTieredCache *map[string]any `json:"smart_tiered_cache,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// SmartTieredCache is the typed data model for the smart_tiered_cache entity.
type SmartTieredCache struct {
}

// SmartTieredCacheLoadMatch is the typed request payload for SmartTieredCache.LoadTyped.
type SmartTieredCacheLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// SmartTieredCacheCreateData is the typed request payload for SmartTieredCache.CreateTyped.
type SmartTieredCacheCreateData struct {
	ZoneId string `json:"zone_id"`
	Result *map[string]any `json:"result,omitempty"`
	Value string `json:"value"`
}

// SmartTieredCacheUpdateData is the typed request payload for SmartTieredCache.UpdateTyped.
type SmartTieredCacheUpdateData struct {
	ZoneId string `json:"zone_id"`
	Result *map[string]any `json:"result,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SmartTieredCacheRemoveMatch is the typed request payload for SmartTieredCache.RemoveTyped.
type SmartTieredCacheRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// SmartshieldResponseCollection is the typed data model for the smartshield_response_collection entity.
type SmartshieldResponseCollection struct {
}

// SmartshieldResponseCollectionListMatch is the typed request payload for SmartshieldResponseCollection.ListTyped.
type SmartshieldResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// SmartshieldSingleHc is the typed data model for the smartshield_single_hc entity.
type SmartshieldSingleHc struct {
}

// SmartshieldSingleHcLoadMatch is the typed request payload for SmartshieldSingleHc.LoadTyped.
type SmartshieldSingleHcLoadMatch struct {
	HealthcheckId string `json:"healthcheck_id"`
	ZoneId string `json:"zone_id"`
}

// SmartshieldSingleHcCreateData is the typed request payload for SmartshieldSingleHc.CreateTyped.
type SmartshieldSingleHcCreateData struct {
	ZoneId string `json:"zone_id"`
	Address string `json:"address"`
	CheckRegions *[]any `json:"check_regions,omitempty"`
	ConsecutiveFails *int `json:"consecutive_fails,omitempty"`
	ConsecutiveSuccesses *int `json:"consecutive_successes,omitempty"`
	Description *string `json:"description,omitempty"`
	HttpConfig *map[string]any `json:"http_config,omitempty"`
	Interval *int `json:"interval,omitempty"`
	Name string `json:"name"`
	Result *map[string]any `json:"result,omitempty"`
	Retries *int `json:"retries,omitempty"`
	Suspended *bool `json:"suspended,omitempty"`
	TcpConfig *map[string]any `json:"tcp_config,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SmartshieldSingleHcUpdateData is the typed request payload for SmartshieldSingleHc.UpdateTyped.
type SmartshieldSingleHcUpdateData struct {
	HealthcheckId string `json:"healthcheck_id"`
	ZoneId string `json:"zone_id"`
	Address *string `json:"address,omitempty"`
	CheckRegions *[]any `json:"check_regions,omitempty"`
	ConsecutiveFails *int `json:"consecutive_fails,omitempty"`
	ConsecutiveSuccesses *int `json:"consecutive_successes,omitempty"`
	Description *string `json:"description,omitempty"`
	HttpConfig *map[string]any `json:"http_config,omitempty"`
	Interval *int `json:"interval,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Retries *int `json:"retries,omitempty"`
	Suspended *bool `json:"suspended,omitempty"`
	TcpConfig *map[string]any `json:"tcp_config,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SmartshieldSingleHcId is the typed data model for the smartshield_single_hc_id entity.
type SmartshieldSingleHcId struct {
}

// SmartshieldSingleHcIdRemoveMatch is the typed request payload for SmartshieldSingleHcId.RemoveTyped.
type SmartshieldSingleHcIdRemoveMatch struct {
	HealthcheckId string `json:"healthcheck_id"`
	ZoneId string `json:"zone_id"`
}

// Test is the typed data model for the test entity.
type Test struct {
}

// TestRemoveMatch is the typed request payload for Test.RemoveTyped.
type TestRemoveMatch struct {
	Url string `json:"url"`
	ZoneId string `json:"zone_id"`
	Region *any `json:"region,omitempty"`
}

// TieredCaching is the typed data model for the tiered_caching entity.
type TieredCaching struct {
}

// TieredCachingLoadMatch is the typed request payload for TieredCaching.LoadTyped.
type TieredCachingLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TieredCachingUpdateData is the typed request payload for TieredCaching.UpdateTyped.
type TieredCachingUpdateData struct {
	ZoneId string `json:"zone_id"`
	Result *map[string]any `json:"result,omitempty"`
	Value *string `json:"value,omitempty"`
}

// UrlNormalization is the typed data model for the url_normalization entity.
type UrlNormalization struct {
}

// UrlNormalizationListMatch is the typed request payload for UrlNormalization.ListTyped.
type UrlNormalizationListMatch struct {
	ZoneId string `json:"zone_id"`
}

// UrlNormalizationUpdateData is the typed request payload for UrlNormalization.UpdateTyped.
type UrlNormalizationUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Scope *string `json:"scope,omitempty"`
	Success *bool `json:"success,omitempty"`
	Type *string `json:"type,omitempty"`
}

// UrlNormalizationRemoveMatch is the typed request payload for UrlNormalization.RemoveTyped.
type UrlNormalizationRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZoneCacheSetting is the typed data model for the zone_cache_setting entity.
type ZoneCacheSetting struct {
}

// ZoneCacheSettingLoadMatch is the typed request payload for ZoneCacheSetting.LoadTyped.
type ZoneCacheSettingLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZoneCacheSettingListMatch is the typed request payload for ZoneCacheSetting.ListTyped.
type ZoneCacheSettingListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZoneCacheSettingCreateData is the typed request payload for ZoneCacheSetting.CreateTyped.
type ZoneCacheSettingCreateData struct {
	ZoneId string `json:"zone_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Result *map[string]any `json:"result,omitempty"`
	Success bool `json:"success"`
	Value string `json:"value"`
}

// ZoneCacheSettingUpdateData is the typed request payload for ZoneCacheSetting.UpdateTyped.
type ZoneCacheSettingUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *string `json:"value,omitempty"`
}

// ZoneCacheSettingRemoveMatch is the typed request payload for ZoneCacheSetting.RemoveTyped.
type ZoneCacheSettingRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
