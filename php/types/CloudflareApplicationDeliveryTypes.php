<?php
declare(strict_types=1);

// Typed models for the CloudflareApplicationDelivery SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ArgoConfigApiResponseSingle entity data model. */
class ArgoConfigApiResponseSingle
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
    public string $value;
}

/** Request payload for ArgoConfigApiResponseSingle#list. */
class ArgoConfigApiResponseSingleListMatch
{
    public string $zone_id;
}

/** Request payload for ArgoConfigApiResponseSingle#update. */
class ArgoConfigApiResponseSingleUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?string $value = null;
}

/** CachePurgeApiResponseSingleId entity data model. */
class CachePurgeApiResponseSingleId
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for CachePurgeApiResponseSingleId#create. */
class CachePurgeApiResponseSingleIdCreateData
{
    public string $zone_id;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** CacheReserveClear entity data model. */
class CacheReserveClear
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for CacheReserveClear#list. */
class CacheReserveClearListMatch
{
    public string $zone_id;
}

/** Request payload for CacheReserveClear#create. */
class CacheReserveClearCreateData
{
    public string $zone_id;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** CustomAssetsForAZone entity data model. */
class CustomAssetsForAZone
{
}

/** Request payload for CustomAssetsForAZone#remove. */
class CustomAssetsForAZoneRemoveMatch
{
    public string $asset_name;
    public string $zone_id;
}

/** CustomAssetsForAnAccount entity data model. */
class CustomAssetsForAnAccount
{
}

/** Request payload for CustomAssetsForAnAccount#remove. */
class CustomAssetsForAnAccountRemoveMatch
{
    public string $account_id;
    public string $asset_name;
}

/** CustomPage entity data model. */
class CustomPage
{
    public ?string $created_on = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $modified_on = null;
    public ?string $preview_target = null;
    public ?array $required_tokens = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?string $url = null;
}

/** Request payload for CustomPage#load. */
class CustomPageLoadMatch
{
    public ?string $account_id = null;
    public string $id;
    public ?string $zone_id = null;
}

/** Request payload for CustomPage#list. */
class CustomPageListMatch
{
    public string $account_id;
}

/** Request payload for CustomPage#update. */
class CustomPageUpdateData
{
    public ?string $account_id = null;
    public string $id;
    public ?string $zone_id = null;
    public ?string $created_on = null;
    public ?string $description = null;
    public ?string $modified_on = null;
    public ?string $preview_target = null;
    public ?array $required_tokens = null;
    public ?array $result = null;
    public ?string $state = null;
    public ?string $url = null;
}

/** CustomPagesCustomAssetResult entity data model. */
class CustomPagesCustomAssetResult
{
    public string $description;
    public string $name;
    public ?array $result = null;
    public string $url;
}

/** Request payload for CustomPagesCustomAssetResult#load. */
class CustomPagesCustomAssetResultLoadMatch
{
    public ?string $account_id = null;
    public string $asset_name;
    public ?string $zone_id = null;
}

/** Request payload for CustomPagesCustomAssetResult#create. */
class CustomPagesCustomAssetResultCreateData
{
    public string $account_id;
    public string $description;
    public string $name;
    public ?array $result = null;
    public string $url;
}

/** Request payload for CustomPagesCustomAssetResult#update. */
class CustomPagesCustomAssetResultUpdateData
{
    public ?string $account_id = null;
    public string $asset_name;
    public ?string $zone_id = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?string $url = null;
}

/** CustomPagesCustomAssetResultList entity data model. */
class CustomPagesCustomAssetResultList
{
    public ?array $result = null;
}

/** Request payload for CustomPagesCustomAssetResultList#list. */
class CustomPagesCustomAssetResultListListMatch
{
    public string $account_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** CustomPagesPreviewTokenResult entity data model. */
class CustomPagesPreviewTokenResult
{
    public string $act;
    public string $target;
    public string $url;
}

/** Request payload for CustomPagesPreviewTokenResult#create. */
class CustomPagesPreviewTokenResultCreateData
{
    public string $account_id;
    public string $act;
    public string $target;
    public string $url;
}

/** ManagedTransform entity data model. */
class ManagedTransform
{
    public array $errors;
    public ?array $managed_request_headers = null;
    public ?array $managed_response_headers = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for ManagedTransform#list. */
class ManagedTransformListMatch
{
    public string $zone_id;
}

/** Request payload for ManagedTransform#update. */
class ManagedTransformUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $managed_request_headers = null;
    public ?array $managed_response_headers = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** Request payload for ManagedTransform#remove. */
class ManagedTransformRemoveMatch
{
    public string $zone_id;
}

/** ObservatoryAvailability entity data model. */
class ObservatoryAvailability
{
    public ?array $result = null;
}

/** Request payload for ObservatoryAvailability#load. */
class ObservatoryAvailabilityLoadMatch
{
    public string $zone_id;
}

/** ObservatoryCreateSchedule entity data model. */
class ObservatoryCreateSchedule
{
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for ObservatoryCreateSchedule#create. */
class ObservatoryCreateScheduleCreateData
{
    public string $id;
    public string $zone_id;
    public ?string $frequency = null;
    public mixed $region = null;
    public ?array $result = null;
}

/** ObservatoryPageTestResponseCollection entity data model. */
class ObservatoryPageTestResponseCollection
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for ObservatoryPageTestResponseCollection#list. */
class ObservatoryPageTestResponseCollectionListMatch
{
    public string $url;
    public string $zone_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public mixed $region = null;
}

/** ObservatoryPageTestResponseSingle entity data model. */
class ObservatoryPageTestResponseSingle
{
    public mixed $region = null;
    public ?array $result = null;
}

/** Request payload for ObservatoryPageTestResponseSingle#load. */
class ObservatoryPageTestResponseSingleLoadMatch
{
    public string $page_id;
    public string $test_id;
    public string $zone_id;
}

/** Request payload for ObservatoryPageTestResponseSingle#create. */
class ObservatoryPageTestResponseSingleCreateData
{
    public string $url;
    public string $zone_id;
    public mixed $region = null;
    public ?array $result = null;
}

/** ObservatoryPagesResponseCollection entity data model. */
class ObservatoryPagesResponseCollection
{
    public ?array $result = null;
}

/** Request payload for ObservatoryPagesResponseCollection#list. */
class ObservatoryPagesResponseCollectionListMatch
{
    public string $zone_id;
}

/** ObservatoryScheduleResponseSingle entity data model. */
class ObservatoryScheduleResponseSingle
{
    public ?array $result = null;
}

/** Request payload for ObservatoryScheduleResponseSingle#load. */
class ObservatoryScheduleResponseSingleLoadMatch
{
    public string $url;
    public string $zone_id;
    public mixed $region = null;
}

/** ObservatoryTrend entity data model. */
class ObservatoryTrend
{
    public ?array $result = null;
}

/** Request payload for ObservatoryTrend#load. */
class ObservatoryTrendLoadMatch
{
    public string $url;
    public string $zone_id;
    public string $device_type;
    public ?string $end = null;
    public string $metric;
    public string $region;
    public string $start;
    public string $tz;
}

/** OriginCloudRegion entity data model. */
class OriginCloudRegion
{
    public array $errors;
    public ?string $id = null;
    public string $ip;
    public array $messages;
    public string $origin_ip;
    public string $region;
    public array $result;
    public array $result_info;
    public bool $success;
    public string $vendor;
}

/** Request payload for OriginCloudRegion#load. */
class OriginCloudRegionLoadMatch
{
    public string $id;
    public string $zone_id;
}

/** Request payload for OriginCloudRegion#list. */
class OriginCloudRegionListMatch
{
    public string $zone_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** Request payload for OriginCloudRegion#create. */
class OriginCloudRegionCreateData
{
    public string $zone_id;
    public array $errors;
    public ?string $id = null;
    public string $ip;
    public array $messages;
    public string $origin_ip;
    public string $region;
    public array $result;
    public array $result_info;
    public bool $success;
    public string $vendor;
}

/** Request payload for OriginCloudRegion#update. */
class OriginCloudRegionUpdateData
{
    public ?string $id = null;
    public string $zone_id;
    public ?array $errors = null;
    public ?string $ip = null;
    public ?array $messages = null;
    public ?string $origin_ip = null;
    public ?string $region = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
    public ?string $vendor = null;
}

/** Request payload for OriginCloudRegion#remove. */
class OriginCloudRegionRemoveMatch
{
    public ?string $id = null;
    public string $zone_id;
}

/** OriginPostQuantum entity data model. */
class OriginPostQuantum
{
    public ?array $result = null;
    public string $value;
}

/** Request payload for OriginPostQuantum#load. */
class OriginPostQuantumLoadMatch
{
    public string $zone_id;
}

/** Request payload for OriginPostQuantum#update. */
class OriginPostQuantumUpdateData
{
    public string $zone_id;
    public ?array $result = null;
    public ?string $value = null;
}

/** Schedule entity data model. */
class Schedule
{
    public ?string $id = null;
}

/** Request payload for Schedule#remove. */
class ScheduleRemoveMatch
{
    public string $id;
    public string $zone_id;
    public mixed $region = null;
}

/** SmartShield entity data model. */
class SmartShield
{
    public ?array $cache_reserve = null;
    public array $errors;
    public array $messages;
    public ?array $regional_tiered_cache = null;
    public array $result;
    public ?array $smart_routing = null;
    public ?array $smart_tiered_cache = null;
    public bool $success;
}

/** Request payload for SmartShield#list. */
class SmartShieldListMatch
{
    public string $zone_id;
}

/** Request payload for SmartShield#update. */
class SmartShieldUpdateData
{
    public string $zone_id;
    public ?array $cache_reserve = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $regional_tiered_cache = null;
    public ?array $result = null;
    public ?array $smart_routing = null;
    public ?array $smart_tiered_cache = null;
    public ?bool $success = null;
}

/** SmartTieredCache entity data model. */
class SmartTieredCache
{
    public ?array $result = null;
    public string $value;
}

/** Request payload for SmartTieredCache#load. */
class SmartTieredCacheLoadMatch
{
    public string $zone_id;
}

/** Request payload for SmartTieredCache#create. */
class SmartTieredCacheCreateData
{
    public string $zone_id;
    public ?array $result = null;
    public string $value;
}

/** Request payload for SmartTieredCache#update. */
class SmartTieredCacheUpdateData
{
    public string $zone_id;
    public ?array $result = null;
    public ?string $value = null;
}

/** Request payload for SmartTieredCache#remove. */
class SmartTieredCacheRemoveMatch
{
    public string $zone_id;
}

/** SmartshieldResponseCollection entity data model. */
class SmartshieldResponseCollection
{
    public ?array $result = null;
}

/** Request payload for SmartshieldResponseCollection#list. */
class SmartshieldResponseCollectionListMatch
{
    public string $zone_id;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** SmartshieldSingleHc entity data model. */
class SmartshieldSingleHc
{
    public string $address;
    public ?array $check_regions = null;
    public ?int $consecutive_fails = null;
    public ?int $consecutive_successes = null;
    public ?string $description = null;
    public ?array $http_config = null;
    public ?int $interval = null;
    public string $name;
    public ?array $result = null;
    public ?int $retries = null;
    public ?bool $suspended = null;
    public ?array $tcp_config = null;
    public ?int $timeout = null;
    public ?string $type = null;
}

/** Request payload for SmartshieldSingleHc#load. */
class SmartshieldSingleHcLoadMatch
{
    public string $healthcheck_id;
    public string $zone_id;
}

/** Request payload for SmartshieldSingleHc#create. */
class SmartshieldSingleHcCreateData
{
    public string $zone_id;
    public string $address;
    public ?array $check_regions = null;
    public ?int $consecutive_fails = null;
    public ?int $consecutive_successes = null;
    public ?string $description = null;
    public ?array $http_config = null;
    public ?int $interval = null;
    public string $name;
    public ?array $result = null;
    public ?int $retries = null;
    public ?bool $suspended = null;
    public ?array $tcp_config = null;
    public ?int $timeout = null;
    public ?string $type = null;
}

/** Request payload for SmartshieldSingleHc#update. */
class SmartshieldSingleHcUpdateData
{
    public string $healthcheck_id;
    public string $zone_id;
    public ?string $address = null;
    public ?array $check_regions = null;
    public ?int $consecutive_fails = null;
    public ?int $consecutive_successes = null;
    public ?string $description = null;
    public ?array $http_config = null;
    public ?int $interval = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?int $retries = null;
    public ?bool $suspended = null;
    public ?array $tcp_config = null;
    public ?int $timeout = null;
    public ?string $type = null;
}

/** SmartshieldSingleHcId entity data model. */
class SmartshieldSingleHcId
{
}

/** Request payload for SmartshieldSingleHcId#remove. */
class SmartshieldSingleHcIdRemoveMatch
{
    public string $healthcheck_id;
    public string $zone_id;
}

/** Test entity data model. */
class Test
{
}

/** Request payload for Test#remove. */
class TestRemoveMatch
{
    public string $url;
    public string $zone_id;
    public mixed $region = null;
}

/** TieredCaching entity data model. */
class TieredCaching
{
    public ?array $result = null;
    public string $value;
}

/** Request payload for TieredCaching#load. */
class TieredCachingLoadMatch
{
    public string $zone_id;
}

/** Request payload for TieredCaching#update. */
class TieredCachingUpdateData
{
    public string $zone_id;
    public ?array $result = null;
    public ?string $value = null;
}

/** UrlNormalization entity data model. */
class UrlNormalization
{
    public array $errors;
    public array $messages;
    public array $result;
    public string $scope;
    public bool $success;
    public string $type;
}

/** Request payload for UrlNormalization#list. */
class UrlNormalizationListMatch
{
    public string $zone_id;
}

/** Request payload for UrlNormalization#update. */
class UrlNormalizationUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?string $scope = null;
    public ?bool $success = null;
    public ?string $type = null;
}

/** Request payload for UrlNormalization#remove. */
class UrlNormalizationRemoveMatch
{
    public string $zone_id;
}

/** ZoneCacheSetting entity data model. */
class ZoneCacheSetting
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public string $value;
}

/** Request payload for ZoneCacheSetting#load. */
class ZoneCacheSettingLoadMatch
{
    public string $zone_id;
}

/** Request payload for ZoneCacheSetting#list. */
class ZoneCacheSettingListMatch
{
    public string $zone_id;
}

/** Request payload for ZoneCacheSetting#create. */
class ZoneCacheSettingCreateData
{
    public string $zone_id;
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public string $value;
}

/** Request payload for ZoneCacheSetting#update. */
class ZoneCacheSettingUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?string $value = null;
}

/** Request payload for ZoneCacheSetting#remove. */
class ZoneCacheSettingRemoveMatch
{
    public string $zone_id;
}

