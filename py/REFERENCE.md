# CloudflareApplicationDelivery Python SDK Reference

Complete API reference for the CloudflareApplicationDelivery Python SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```python
from cloudflareapplicationdelivery_sdk import CloudflareApplicationDeliverySDK

client = CloudflareApplicationDeliverySDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareApplicationDeliverySDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareApplicationDeliverySDK.test()
```


### Instance Methods

#### `ArgoConfigApiResponseSingle(data=None)`

Create a new `ArgoConfigApiResponseSingleEntity` instance. Pass `None` for no initial data.

#### `CachePurgeApiResponseSingleId(data=None)`

Create a new `CachePurgeApiResponseSingleIdEntity` instance. Pass `None` for no initial data.

#### `CacheReserveClear(data=None)`

Create a new `CacheReserveClearEntity` instance. Pass `None` for no initial data.

#### `CustomAssetsForAZone(data=None)`

Create a new `CustomAssetsForAZoneEntity` instance. Pass `None` for no initial data.

#### `CustomAssetsForAnAccount(data=None)`

Create a new `CustomAssetsForAnAccountEntity` instance. Pass `None` for no initial data.

#### `CustomPage(data=None)`

Create a new `CustomPageEntity` instance. Pass `None` for no initial data.

#### `CustomPagesCustomAssetResult(data=None)`

Create a new `CustomPagesCustomAssetResultEntity` instance. Pass `None` for no initial data.

#### `CustomPagesCustomAssetResultList(data=None)`

Create a new `CustomPagesCustomAssetResultListEntity` instance. Pass `None` for no initial data.

#### `CustomPagesPreviewTokenResult(data=None)`

Create a new `CustomPagesPreviewTokenResultEntity` instance. Pass `None` for no initial data.

#### `ManagedTransform(data=None)`

Create a new `ManagedTransformEntity` instance. Pass `None` for no initial data.

#### `ObservatoryAvailability(data=None)`

Create a new `ObservatoryAvailabilityEntity` instance. Pass `None` for no initial data.

#### `ObservatoryCreateSchedule(data=None)`

Create a new `ObservatoryCreateScheduleEntity` instance. Pass `None` for no initial data.

#### `ObservatoryPageTestResponseCollection(data=None)`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ObservatoryPageTestResponseSingle(data=None)`

Create a new `ObservatoryPageTestResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ObservatoryPagesResponseCollection(data=None)`

Create a new `ObservatoryPagesResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ObservatoryScheduleResponseSingle(data=None)`

Create a new `ObservatoryScheduleResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ObservatoryTrend(data=None)`

Create a new `ObservatoryTrendEntity` instance. Pass `None` for no initial data.

#### `OriginCloudRegion(data=None)`

Create a new `OriginCloudRegionEntity` instance. Pass `None` for no initial data.

#### `OriginPostQuantum(data=None)`

Create a new `OriginPostQuantumEntity` instance. Pass `None` for no initial data.

#### `Schedule(data=None)`

Create a new `ScheduleEntity` instance. Pass `None` for no initial data.

#### `SmartShield(data=None)`

Create a new `SmartShieldEntity` instance. Pass `None` for no initial data.

#### `SmartTieredCache(data=None)`

Create a new `SmartTieredCacheEntity` instance. Pass `None` for no initial data.

#### `SmartshieldResponseCollection(data=None)`

Create a new `SmartshieldResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `SmartshieldSingleHc(data=None)`

Create a new `SmartshieldSingleHcEntity` instance. Pass `None` for no initial data.

#### `SmartshieldSingleHcId(data=None)`

Create a new `SmartshieldSingleHcIdEntity` instance. Pass `None` for no initial data.

#### `Test(data=None)`

Create a new `TestEntity` instance. Pass `None` for no initial data.

#### `TieredCaching(data=None)`

Create a new `TieredCachingEntity` instance. Pass `None` for no initial data.

#### `UrlNormalization(data=None)`

Create a new `UrlNormalizationEntity` instance. Pass `None` for no initial data.

#### `ZoneCacheSetting(data=None)`

Create a new `ZoneCacheSettingEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ArgoConfigApiResponseSingleEntity

```python
argo_config_api_response_single = client.ArgoConfigApiResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Describes a successful API response. |
| `value` | `str` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ArgoConfigApiResponseSingle().list({"zone_id": "example"})
for argo_config_api_response_single in results:
    print(argo_config_api_response_single)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ArgoConfigApiResponseSingle().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CachePurgeApiResponseSingleIdEntity

```python
cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CachePurgeApiResponseSingleId().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CacheReserveClearEntity

```python
cache_reserve_clear = client.CacheReserveClear()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CacheReserveClear().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CacheReserveClear().list({"zone_id": "example"})
for cache_reserve_clear in results:
    print(cache_reserve_clear)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheReserveClearEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomAssetsForAZoneEntity

```python
custom_assets_for_a_zone = client.CustomAssetsForAZone()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomAssetsForAZone().remove({"asset_name": "asset_name", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAssetsForAZoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomAssetsForAnAccountEntity

```python
custom_assets_for_an_account = client.CustomAssetsForAnAccount()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomAssetsForAnAccount().remove({"account_id": "account_id", "asset_name": "asset_name"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAssetsForAnAccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPageEntity

```python
custom_page = client.CustomPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `modified_on` | `str` | No |  |
| `preview_target` | `str` | No |  |
| `required_tokens` | `list` | No |  |
| `result` | `dict` | No |  |
| `state` | `str` | No | The custom page state. |
| `url` | `str` | No | The URL associated with the custom page. |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `created_on` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `modified_on` | - | - | - |
| `preview_target` | - | - | - |
| `required_tokens` | - | - | - |
| `result` | - | - | - |
| `state` | - | - | Yes |
| `url` | - | - | Yes |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomPage().list({"account_id": "example"})
for custom_page in results:
    print(custom_page)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomPage().load({"id": "custom_page_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomPage().update({
    "id": "custom_page_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPagesCustomAssetResultEntity

```python
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes | A short description of the custom asset. |
| `name` | `str` | Yes | The unique name of the custom asset. |
| `result` | `dict` | No |  |
| `url` | `str` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomPagesCustomAssetResult().create({
    "account_id": "example_account_id",  # str
    "description": "example_description",  # str
    "name": "example_name",  # str
    "url": "example_url",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomPagesCustomAssetResult().load({"asset_name": "asset_name"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomPagesCustomAssetResult().update({
    "asset_name": "asset_name",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPagesCustomAssetResultListEntity

```python
custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomPagesCustomAssetResultList().list({"account_id": "example"})
for custom_pages_custom_asset_result_list in results:
    print(custom_pages_custom_asset_result_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomPagesPreviewTokenResultEntity

```python
custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `str` | Yes | The preview action type. |
| `target` | `str` | Yes | The target custom page type to preview (e.g. |
| `url` | `str` | Yes | The URL of the custom page content to preview. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomPagesPreviewTokenResult().create({
    "account_id": "example_account_id",  # str
    "act": "example_act",  # str
    "target": "example_target",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ManagedTransformEntity

```python
managed_transform = client.ManagedTransform()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | A list of error messages. |
| `managed_request_headers` | `list` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `list` | No | The list of Managed Response Transforms. |
| `messages` | `list` | Yes | A list of warning messages. |
| `result` | `dict` | Yes | A result. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | update | remove |
| --- | --- | --- | --- |
| `errors` | Yes | - | - |
| `managed_request_headers` | - | - | - |
| `managed_response_headers` | - | - | - |
| `messages` | - | - | - |
| `result` | - | - | - |
| `success` | Yes | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ManagedTransform().list({"zone_id": "example"})
for managed_transform in results:
    print(managed_transform)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ManagedTransform().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ManagedTransform().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ManagedTransformEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryAvailabilityEntity

```python
observatory_availability = client.ObservatoryAvailability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ObservatoryAvailability().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryAvailabilityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryCreateScheduleEntity

```python
observatory_create_schedule = client.ObservatoryCreateSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ObservatoryCreateSchedule().create({
    "id": "example_id",  # str
    "zone_id": "example_zone_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryCreateScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryPageTestResponseCollectionEntity

```python
observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ObservatoryPageTestResponseCollection().list({"url": "example", "zone_id": "example"})
for observatory_page_test_response_collection in results:
    print(observatory_page_test_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryPageTestResponseSingleEntity

```python
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `Any` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ObservatoryPageTestResponseSingle().create({
    "url": "example_url",  # str
    "zone_id": "example_zone_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ObservatoryPageTestResponseSingle().load({"page_id": "page_id", "test_id": "test_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryPagesResponseCollectionEntity

```python
observatory_pages_response_collection = client.ObservatoryPagesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ObservatoryPagesResponseCollection().list({"zone_id": "example"})
for observatory_pages_response_collection in results:
    print(observatory_pages_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryScheduleResponseSingleEntity

```python
observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No | The test schedule. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ObservatoryScheduleResponseSingle().load({"url": "url", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObservatoryTrendEntity

```python
observatory_trend = client.ObservatoryTrend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ObservatoryTrend().load({"url": "url", "zone_id": "zone_id", "device_type": "device_type", "metric": "metric", "region": "region", "start": "start", "tz": "tz"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryTrendEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OriginCloudRegionEntity

```python
origin_cloud_region = client.OriginCloudRegion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `ip` | `str` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `list` | Yes |  |
| `origin_ip` | `str` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `str` | Yes | Cloud vendor region identifier. |
| `result` | `dict` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `dict` | Yes | Pagination metadata for list responses. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `vendor` | `str` | Yes | Cloud vendor hosting the origin. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | Yes | - |
| `id` | - | - | - | - | - |
| `ip` | - | - | - | - | - |
| `messages` | - | - | - | Yes | - |
| `origin_ip` | - | - | - | - | - |
| `region` | - | - | - | - | - |
| `result` | - | - | - | Yes | - |
| `result_info` | - | - | - | - | - |
| `success` | - | - | - | Yes | - |
| `vendor` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OriginCloudRegion().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "ip": "example_ip",  # str
    "messages": [],  # list
    "origin_ip": "example_origin_ip",  # str
    "region": "example_region",  # str
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
    "vendor": "example_vendor",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OriginCloudRegion().list({"zone_id": "example"})
for origin_cloud_region in results:
    print(origin_cloud_region)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OriginCloudRegion().load({"id": "origin_cloud_region_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OriginCloudRegion().remove({"id": "origin_cloud_region_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OriginCloudRegion().update({
    "id": "origin_cloud_region_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginCloudRegionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OriginPostQuantumEntity

```python
origin_post_quantum = client.OriginPostQuantum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `value` | `str` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OriginPostQuantum().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OriginPostQuantum().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginPostQuantumEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleEntity

```python
schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Schedule().remove({"id": "id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmartShieldEntity

```python
smart_shield = client.SmartShield()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `dict` | No |  |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `regional_tiered_cache` | `dict` | No |  |
| `result` | `dict` | Yes |  |
| `smart_routing` | `dict` | No |  |
| `smart_tiered_cache` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SmartShield().list({"zone_id": "example"})
for smart_shield in results:
    print(smart_shield)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SmartShield().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartShieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmartTieredCacheEntity

```python
smart_tiered_cache = client.SmartTieredCache()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `value` | `str` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SmartTieredCache().create({
    "zone_id": "example_zone_id",  # str
    "value": "example_value",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SmartTieredCache().load({"zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SmartTieredCache().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SmartTieredCache().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartTieredCacheEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmartshieldResponseCollectionEntity

```python
smartshield_response_collection = client.SmartshieldResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SmartshieldResponseCollection().list({"zone_id": "example"})
for smartshield_response_collection in results:
    print(smartshield_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmartshieldSingleHcEntity

```python
smartshield_single_hc = client.SmartshieldSingleHc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `list` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `str` | No | A human-readable description of the health check. |
| `http_config` | `dict` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | No | The interval between each health check. |
| `name` | `str` | Yes | A short name to identify the health check. |
| `result` | `dict` | No |  |
| `retries` | `int` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `dict` | No | Parameters specific to TCP health check. |
| `timeout` | `int` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `str` | No | The protocol to use for the health check. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SmartshieldSingleHc().create({
    "zone_id": "example_zone_id",  # str
    "address": "example_address",  # str
    "name": "example_name",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SmartshieldSingleHc().load({"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SmartshieldSingleHc().update({
    "healthcheck_id": "healthcheck_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldSingleHcEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmartshieldSingleHcIdEntity

```python
smartshield_single_hc_id = client.SmartshieldSingleHcId()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SmartshieldSingleHcId().remove({"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldSingleHcIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestEntity

```python
test = client.Test()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Test().remove({"url": "url", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TieredCachingEntity

```python
tiered_caching = client.TieredCaching()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `value` | `str` | Yes | Enables Tiered Caching. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TieredCaching().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TieredCaching().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TieredCachingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UrlNormalizationEntity

```python
url_normalization = client.UrlNormalization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | A list of error messages. |
| `messages` | `list` | Yes | A list of warning messages. |
| `result` | `dict` | Yes | A result. |
| `scope` | `str` | Yes | The scope of the URL normalization. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `type` | `str` | Yes | The type of URL normalization performed by Cloudflare. |

### Field Usage by Operation

| Field | list | update | remove |
| --- | --- | --- | --- |
| `errors` | Yes | - | - |
| `messages` | - | - | - |
| `result` | - | - | - |
| `scope` | - | - | - |
| `success` | Yes | - | - |
| `type` | - | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UrlNormalization().list({"zone_id": "example"})
for url_normalization in results:
    print(url_normalization)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UrlNormalization().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UrlNormalization().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlNormalizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZoneCacheSettingEntity

```python
zone_cache_setting = client.ZoneCacheSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `str` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ZoneCacheSetting().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
    "value": "example_value",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZoneCacheSetting().list({"zone_id": "example"})
for zone_cache_setting in results:
    print(zone_cache_setting)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZoneCacheSetting().load({"zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ZoneCacheSetting().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZoneCacheSetting().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneCacheSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareApplicationDeliverySDK({
    "feature": {
        "test": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

