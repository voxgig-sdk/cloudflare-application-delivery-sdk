package voxgigcloudflareapplicationdeliverysdk

import (
	"github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareApplicationDeliverySDK = core.CloudflareApplicationDeliverySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareApplicationDeliveryEntity = core.CloudflareApplicationDeliveryEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareApplicationDeliveryError = core.CloudflareApplicationDeliveryError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewArgoConfigApiResponseSingleEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewArgoConfigApiResponseSingleEntity(client, entopts)
	}
	core.NewCachePurgeApiResponseSingleIdEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCachePurgeApiResponseSingleIdEntity(client, entopts)
	}
	core.NewCacheReserveClearEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCacheReserveClearEntity(client, entopts)
	}
	core.NewCustomAssetsForAZoneEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomAssetsForAZoneEntity(client, entopts)
	}
	core.NewCustomAssetsForAnAccountEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomAssetsForAnAccountEntity(client, entopts)
	}
	core.NewCustomPageEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomPageEntity(client, entopts)
	}
	core.NewCustomPagesCustomAssetResultEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomPagesCustomAssetResultEntity(client, entopts)
	}
	core.NewCustomPagesCustomAssetResultListEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomPagesCustomAssetResultListEntity(client, entopts)
	}
	core.NewCustomPagesPreviewTokenResultEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewCustomPagesPreviewTokenResultEntity(client, entopts)
	}
	core.NewManagedTransformEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewManagedTransformEntity(client, entopts)
	}
	core.NewObservatoryAvailabilityEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryAvailabilityEntity(client, entopts)
	}
	core.NewObservatoryCreateScheduleEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryCreateScheduleEntity(client, entopts)
	}
	core.NewObservatoryPageTestResponseCollectionEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryPageTestResponseCollectionEntity(client, entopts)
	}
	core.NewObservatoryPageTestResponseSingleEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryPageTestResponseSingleEntity(client, entopts)
	}
	core.NewObservatoryPagesResponseCollectionEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryPagesResponseCollectionEntity(client, entopts)
	}
	core.NewObservatoryScheduleResponseSingleEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryScheduleResponseSingleEntity(client, entopts)
	}
	core.NewObservatoryTrendEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewObservatoryTrendEntity(client, entopts)
	}
	core.NewOriginCloudRegionEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewOriginCloudRegionEntity(client, entopts)
	}
	core.NewOriginPostQuantumEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewOriginPostQuantumEntity(client, entopts)
	}
	core.NewScheduleEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewScheduleEntity(client, entopts)
	}
	core.NewSmartShieldEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewSmartShieldEntity(client, entopts)
	}
	core.NewSmartTieredCacheEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewSmartTieredCacheEntity(client, entopts)
	}
	core.NewSmartshieldResponseCollectionEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewSmartshieldResponseCollectionEntity(client, entopts)
	}
	core.NewSmartshieldSingleHcEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewSmartshieldSingleHcEntity(client, entopts)
	}
	core.NewSmartshieldSingleHcIdEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewSmartshieldSingleHcIdEntity(client, entopts)
	}
	core.NewTestEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewTestEntity(client, entopts)
	}
	core.NewTieredCachingEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewTieredCachingEntity(client, entopts)
	}
	core.NewUrlNormalizationEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewUrlNormalizationEntity(client, entopts)
	}
	core.NewZoneCacheSettingEntityFunc = func(client *core.CloudflareApplicationDeliverySDK, entopts map[string]any) core.CloudflareApplicationDeliveryEntity {
		return entity.NewZoneCacheSettingEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareApplicationDeliverySDK = core.NewCloudflareApplicationDeliverySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareApplicationDeliverySDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareApplicationDeliverySDK  { return NewCloudflareApplicationDeliverySDK(nil) }
func Test() *CloudflareApplicationDeliverySDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
