# Typed models for the CloudflareApplicationDelivery SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ArgoConfigApiResponseSingle(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class ArgoConfigApiResponseSingleListMatch(TypedDict):
    zone_id: str


class ArgoConfigApiResponseSingleUpdateDataRequired(TypedDict):
    zone_id: str


class ArgoConfigApiResponseSingleUpdateData(ArgoConfigApiResponseSingleUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class CachePurgeApiResponseSingleId(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class CachePurgeApiResponseSingleIdCreateData(TypedDict):
    zone_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class CacheReserveClear(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class CacheReserveClearListMatch(TypedDict):
    zone_id: str


class CacheReserveClearCreateData(TypedDict):
    zone_id: str
    errors: list
    messages: list
    result: dict
    success: bool


class CustomAssetsForAZone(TypedDict):
    pass


class CustomAssetsForAZoneRemoveMatch(TypedDict):
    asset_name: str
    zone_id: str


class CustomAssetsForAnAccount(TypedDict):
    pass


class CustomAssetsForAnAccountRemoveMatch(TypedDict):
    account_id: str
    asset_name: str


class CustomPage(TypedDict, total=False):
    created_on: str
    description: str
    id: str
    modified_on: str
    preview_target: str
    required_tokens: list
    result: dict
    state: str
    url: str


class CustomPageLoadMatchRequired(TypedDict):
    id: str


class CustomPageLoadMatch(CustomPageLoadMatchRequired, total=False):
    account_id: str
    zone_id: str


class CustomPageListMatch(TypedDict):
    account_id: str


class CustomPageUpdateDataRequired(TypedDict):
    id: str


class CustomPageUpdateData(CustomPageUpdateDataRequired, total=False):
    account_id: str
    zone_id: str
    created_on: str
    description: str
    modified_on: str
    preview_target: str
    required_tokens: list
    result: dict
    state: str
    url: str


class CustomPagesCustomAssetResultRequired(TypedDict):
    description: str
    name: str
    url: str


class CustomPagesCustomAssetResult(CustomPagesCustomAssetResultRequired, total=False):
    result: dict


class CustomPagesCustomAssetResultLoadMatchRequired(TypedDict):
    asset_name: str


class CustomPagesCustomAssetResultLoadMatch(CustomPagesCustomAssetResultLoadMatchRequired, total=False):
    account_id: str
    zone_id: str


class CustomPagesCustomAssetResultCreateDataRequired(TypedDict):
    account_id: str
    description: str
    name: str
    url: str


class CustomPagesCustomAssetResultCreateData(CustomPagesCustomAssetResultCreateDataRequired, total=False):
    result: dict


class CustomPagesCustomAssetResultUpdateDataRequired(TypedDict):
    asset_name: str


class CustomPagesCustomAssetResultUpdateData(CustomPagesCustomAssetResultUpdateDataRequired, total=False):
    account_id: str
    zone_id: str
    description: str
    name: str
    result: dict
    url: str


class CustomPagesCustomAssetResultList(TypedDict, total=False):
    result: list


class CustomPagesCustomAssetResultListListMatchRequired(TypedDict):
    account_id: str


class CustomPagesCustomAssetResultListListMatch(CustomPagesCustomAssetResultListListMatchRequired, total=False):
    page: int
    per_page: int


class CustomPagesPreviewTokenResult(TypedDict):
    act: str
    target: str
    url: str


class CustomPagesPreviewTokenResultCreateData(TypedDict):
    account_id: str
    act: str
    target: str
    url: str


class ManagedTransformRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class ManagedTransform(ManagedTransformRequired, total=False):
    managed_request_headers: list
    managed_response_headers: list


class ManagedTransformListMatch(TypedDict):
    zone_id: str


class ManagedTransformUpdateDataRequired(TypedDict):
    zone_id: str


class ManagedTransformUpdateData(ManagedTransformUpdateDataRequired, total=False):
    errors: list
    managed_request_headers: list
    managed_response_headers: list
    messages: list
    result: dict
    success: bool


class ManagedTransformRemoveMatch(TypedDict):
    zone_id: str


class ObservatoryAvailability(TypedDict, total=False):
    result: dict


class ObservatoryAvailabilityLoadMatch(TypedDict):
    zone_id: str


class ObservatoryCreateSchedule(TypedDict, total=False):
    id: str
    result: dict


class ObservatoryCreateScheduleCreateDataRequired(TypedDict):
    id: str
    zone_id: str


class ObservatoryCreateScheduleCreateData(ObservatoryCreateScheduleCreateDataRequired, total=False):
    frequency: str
    region: Any
    result: dict


class ObservatoryPageTestResponseCollection(TypedDict, total=False):
    result: list
    result_info: dict


class ObservatoryPageTestResponseCollectionListMatchRequired(TypedDict):
    url: str
    zone_id: str


class ObservatoryPageTestResponseCollectionListMatch(ObservatoryPageTestResponseCollectionListMatchRequired, total=False):
    page: int
    per_page: int
    region: Any


class ObservatoryPageTestResponseSingle(TypedDict, total=False):
    region: Any
    result: dict


class ObservatoryPageTestResponseSingleLoadMatch(TypedDict):
    page_id: str
    test_id: str
    zone_id: str


class ObservatoryPageTestResponseSingleCreateDataRequired(TypedDict):
    url: str
    zone_id: str


class ObservatoryPageTestResponseSingleCreateData(ObservatoryPageTestResponseSingleCreateDataRequired, total=False):
    region: Any
    result: dict


class ObservatoryPagesResponseCollection(TypedDict, total=False):
    result: list


class ObservatoryPagesResponseCollectionListMatch(TypedDict):
    zone_id: str


class ObservatoryScheduleResponseSingle(TypedDict, total=False):
    result: dict


class ObservatoryScheduleResponseSingleLoadMatchRequired(TypedDict):
    url: str
    zone_id: str


class ObservatoryScheduleResponseSingleLoadMatch(ObservatoryScheduleResponseSingleLoadMatchRequired, total=False):
    region: Any


class ObservatoryTrend(TypedDict, total=False):
    result: dict


class ObservatoryTrendLoadMatchRequired(TypedDict):
    url: str
    zone_id: str
    device_type: str
    metric: str
    region: str
    start: str
    tz: str


class ObservatoryTrendLoadMatch(ObservatoryTrendLoadMatchRequired, total=False):
    end: str


class OriginCloudRegionRequired(TypedDict):
    errors: list
    ip: str
    messages: list
    origin_ip: str
    region: str
    result: dict
    result_info: dict
    success: bool
    vendor: str


class OriginCloudRegion(OriginCloudRegionRequired, total=False):
    id: str


class OriginCloudRegionLoadMatch(TypedDict):
    id: str
    zone_id: str


class OriginCloudRegionListMatchRequired(TypedDict):
    zone_id: str


class OriginCloudRegionListMatch(OriginCloudRegionListMatchRequired, total=False):
    page: int
    per_page: int


class OriginCloudRegionCreateDataRequired(TypedDict):
    zone_id: str
    errors: list
    ip: str
    messages: list
    origin_ip: str
    region: str
    result: dict
    result_info: dict
    success: bool
    vendor: str


class OriginCloudRegionCreateData(OriginCloudRegionCreateDataRequired, total=False):
    id: str


class OriginCloudRegionUpdateDataRequired(TypedDict):
    zone_id: str


class OriginCloudRegionUpdateData(OriginCloudRegionUpdateDataRequired, total=False):
    id: str
    errors: list
    ip: str
    messages: list
    origin_ip: str
    region: str
    result: dict
    result_info: dict
    success: bool
    vendor: str


class OriginCloudRegionRemoveMatchRequired(TypedDict):
    zone_id: str


class OriginCloudRegionRemoveMatch(OriginCloudRegionRemoveMatchRequired, total=False):
    id: str


class OriginPostQuantumRequired(TypedDict):
    value: str


class OriginPostQuantum(OriginPostQuantumRequired, total=False):
    result: dict


class OriginPostQuantumLoadMatch(TypedDict):
    zone_id: str


class OriginPostQuantumUpdateDataRequired(TypedDict):
    zone_id: str


class OriginPostQuantumUpdateData(OriginPostQuantumUpdateDataRequired, total=False):
    result: dict
    value: str


class Schedule(TypedDict, total=False):
    id: str


class ScheduleRemoveMatchRequired(TypedDict):
    id: str
    zone_id: str


class ScheduleRemoveMatch(ScheduleRemoveMatchRequired, total=False):
    region: Any


class SmartShieldRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class SmartShield(SmartShieldRequired, total=False):
    cache_reserve: dict
    regional_tiered_cache: dict
    smart_routing: dict
    smart_tiered_cache: dict


class SmartShieldListMatch(TypedDict):
    zone_id: str


class SmartShieldUpdateDataRequired(TypedDict):
    zone_id: str


class SmartShieldUpdateData(SmartShieldUpdateDataRequired, total=False):
    cache_reserve: dict
    errors: list
    messages: list
    regional_tiered_cache: dict
    result: dict
    smart_routing: dict
    smart_tiered_cache: dict
    success: bool


class SmartTieredCacheRequired(TypedDict):
    value: str


class SmartTieredCache(SmartTieredCacheRequired, total=False):
    result: dict


class SmartTieredCacheLoadMatch(TypedDict):
    zone_id: str


class SmartTieredCacheCreateDataRequired(TypedDict):
    zone_id: str
    value: str


class SmartTieredCacheCreateData(SmartTieredCacheCreateDataRequired, total=False):
    result: dict


class SmartTieredCacheUpdateDataRequired(TypedDict):
    zone_id: str


class SmartTieredCacheUpdateData(SmartTieredCacheUpdateDataRequired, total=False):
    result: dict
    value: str


class SmartTieredCacheRemoveMatch(TypedDict):
    zone_id: str


class SmartshieldResponseCollection(TypedDict, total=False):
    result: list


class SmartshieldResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class SmartshieldResponseCollectionListMatch(SmartshieldResponseCollectionListMatchRequired, total=False):
    page: float
    per_page: float


class SmartshieldSingleHcRequired(TypedDict):
    address: str
    name: str


class SmartshieldSingleHc(SmartshieldSingleHcRequired, total=False):
    check_regions: list
    consecutive_fails: int
    consecutive_successes: int
    description: str
    http_config: dict
    interval: int
    result: dict
    retries: int
    suspended: bool
    tcp_config: dict
    timeout: int
    type: str


class SmartshieldSingleHcLoadMatch(TypedDict):
    healthcheck_id: str
    zone_id: str


class SmartshieldSingleHcCreateDataRequired(TypedDict):
    zone_id: str
    address: str
    name: str


class SmartshieldSingleHcCreateData(SmartshieldSingleHcCreateDataRequired, total=False):
    check_regions: list
    consecutive_fails: int
    consecutive_successes: int
    description: str
    http_config: dict
    interval: int
    result: dict
    retries: int
    suspended: bool
    tcp_config: dict
    timeout: int
    type: str


class SmartshieldSingleHcUpdateDataRequired(TypedDict):
    healthcheck_id: str
    zone_id: str


class SmartshieldSingleHcUpdateData(SmartshieldSingleHcUpdateDataRequired, total=False):
    address: str
    check_regions: list
    consecutive_fails: int
    consecutive_successes: int
    description: str
    http_config: dict
    interval: int
    name: str
    result: dict
    retries: int
    suspended: bool
    tcp_config: dict
    timeout: int
    type: str


class SmartshieldSingleHcId(TypedDict):
    pass


class SmartshieldSingleHcIdRemoveMatch(TypedDict):
    healthcheck_id: str
    zone_id: str


class Test(TypedDict):
    pass


class TestRemoveMatchRequired(TypedDict):
    url: str
    zone_id: str


class TestRemoveMatch(TestRemoveMatchRequired, total=False):
    region: Any


class TieredCachingRequired(TypedDict):
    value: str


class TieredCaching(TieredCachingRequired, total=False):
    result: dict


class TieredCachingLoadMatch(TypedDict):
    zone_id: str


class TieredCachingUpdateDataRequired(TypedDict):
    zone_id: str


class TieredCachingUpdateData(TieredCachingUpdateDataRequired, total=False):
    result: dict
    value: str


class UrlNormalization(TypedDict):
    errors: list
    messages: list
    result: dict
    scope: str
    success: bool
    type: str


class UrlNormalizationListMatch(TypedDict):
    zone_id: str


class UrlNormalizationUpdateDataRequired(TypedDict):
    zone_id: str


class UrlNormalizationUpdateData(UrlNormalizationUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    scope: str
    success: bool
    type: str


class UrlNormalizationRemoveMatch(TypedDict):
    zone_id: str


class ZoneCacheSettingRequired(TypedDict):
    errors: list
    messages: list
    success: bool
    value: str


class ZoneCacheSetting(ZoneCacheSettingRequired, total=False):
    result: dict


class ZoneCacheSettingLoadMatch(TypedDict):
    zone_id: str


class ZoneCacheSettingListMatch(TypedDict):
    zone_id: str


class ZoneCacheSettingCreateDataRequired(TypedDict):
    zone_id: str
    errors: list
    messages: list
    success: bool
    value: str


class ZoneCacheSettingCreateData(ZoneCacheSettingCreateDataRequired, total=False):
    result: dict


class ZoneCacheSettingUpdateDataRequired(TypedDict):
    zone_id: str


class ZoneCacheSettingUpdateData(ZoneCacheSettingUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class ZoneCacheSettingRemoveMatch(TypedDict):
    zone_id: str
