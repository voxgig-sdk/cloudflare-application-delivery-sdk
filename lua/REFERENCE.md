# CloudflareApplicationDelivery Lua SDK Reference

Complete API reference for the CloudflareApplicationDelivery Lua SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```lua
local sdk = require("cloudflare-application-delivery_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ArgoConfigApiResponseSingle(data)`

Create a new `ArgoConfigApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `CachePurgeApiResponseSingleId(data)`

Create a new `CachePurgeApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheReserveClear(data)`

Create a new `CacheReserveClear` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAZone(data)`

Create a new `CustomAssetsForAZone` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAnAccount(data)`

Create a new `CustomAssetsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `CustomPage(data)`

Create a new `CustomPage` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResult(data)`

Create a new `CustomPagesCustomAssetResult` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResultList(data)`

Create a new `CustomPagesCustomAssetResultList` entity instance. Pass `nil` for no initial data.

#### `CustomPagesPreviewTokenResult(data)`

Create a new `CustomPagesPreviewTokenResult` entity instance. Pass `nil` for no initial data.

#### `ManagedTransform(data)`

Create a new `ManagedTransform` entity instance. Pass `nil` for no initial data.

#### `ObservatoryAvailability(data)`

Create a new `ObservatoryAvailability` entity instance. Pass `nil` for no initial data.

#### `ObservatoryCreateSchedule(data)`

Create a new `ObservatoryCreateSchedule` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseCollection(data)`

Create a new `ObservatoryPageTestResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseSingle(data)`

Create a new `ObservatoryPageTestResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPagesResponseCollection(data)`

Create a new `ObservatoryPagesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryScheduleResponseSingle(data)`

Create a new `ObservatoryScheduleResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryTrend(data)`

Create a new `ObservatoryTrend` entity instance. Pass `nil` for no initial data.

#### `OriginCloudRegion(data)`

Create a new `OriginCloudRegion` entity instance. Pass `nil` for no initial data.

#### `OriginPostQuantum(data)`

Create a new `OriginPostQuantum` entity instance. Pass `nil` for no initial data.

#### `Schedule(data)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `SmartShield(data)`

Create a new `SmartShield` entity instance. Pass `nil` for no initial data.

#### `SmartTieredCache(data)`

Create a new `SmartTieredCache` entity instance. Pass `nil` for no initial data.

#### `SmartshieldResponseCollection(data)`

Create a new `SmartshieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHc(data)`

Create a new `SmartshieldSingleHc` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHcId(data)`

Create a new `SmartshieldSingleHcId` entity instance. Pass `nil` for no initial data.

#### `Test(data)`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `TieredCaching(data)`

Create a new `TieredCaching` entity instance. Pass `nil` for no initial data.

#### `UrlNormalization(data)`

Create a new `UrlNormalization` entity instance. Pass `nil` for no initial data.

#### `ZoneCacheSetting(data)`

Create a new `ZoneCacheSetting` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ArgoConfigApiResponseSingleEntity

```lua
local argo_config_api_response_single = client:ArgoConfigApiResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Describes a successful API response. |
| `value` | `string` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ArgoConfigApiResponseSingle():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ArgoConfigApiResponseSingle():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CachePurgeApiResponseSingleIdEntity

```lua
local cache_purge_api_response_single_id = client:CachePurgeApiResponseSingleId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CachePurgeApiResponseSingleId():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CacheReserveClearEntity

```lua
local cache_reserve_clear = client:CacheReserveClear(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CacheReserveClear():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CacheReserveClear():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheReserveClearEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomAssetsForAZoneEntity

```lua
local custom_assets_for_a_zone = client:CustomAssetsForAZone(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomAssetsForAZone():remove({ asset_name = "asset_name", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAssetsForAZoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomAssetsForAnAccountEntity

```lua
local custom_assets_for_an_account = client:CustomAssetsForAnAccount(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomAssetsForAnAccount():remove({ account_id = "account_id", asset_name = "asset_name" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomAssetsForAnAccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPageEntity

```lua
local custom_page = client:CustomPage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `modified_on` | `string` | No |  |
| `preview_target` | `string` | No |  |
| `required_tokens` | `table` | No |  |
| `result` | `table` | No |  |
| `state` | `string` | No | The custom page state. |
| `url` | `string` | No | The URL associated with the custom page. |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomPage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomPage():load({ id = "custom_page_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomPage():update({
  id = "custom_page_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPagesCustomAssetResultEntity

```lua
local custom_pages_custom_asset_result = client:CustomPagesCustomAssetResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A short description of the custom asset. |
| `name` | `string` | Yes | The unique name of the custom asset. |
| `result` | `table` | No |  |
| `url` | `string` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomPagesCustomAssetResult():create({
  account_id = --[[ string ]],
  description = --[[ string ]],
  name = --[[ string ]],
  url = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomPagesCustomAssetResult():load({ asset_name = "asset_name" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomPagesCustomAssetResult():update({
  asset_name = "asset_name",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPagesCustomAssetResultListEntity

```lua
local custom_pages_custom_asset_result_list = client:CustomPagesCustomAssetResultList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomPagesCustomAssetResultList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomPagesPreviewTokenResultEntity

```lua
local custom_pages_preview_token_result = client:CustomPagesPreviewTokenResult(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `string` | Yes | The preview action type. |
| `target` | `string` | Yes | The target custom page type to preview (e.g. |
| `url` | `string` | Yes | The URL of the custom page content to preview. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomPagesPreviewTokenResult():create({
  account_id = --[[ string ]],
  act = --[[ string ]],
  target = --[[ string ]],
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ManagedTransformEntity

```lua
local managed_transform = client:ManagedTransform(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | A list of error messages. |
| `managed_request_headers` | `table` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `table` | No | The list of Managed Response Transforms. |
| `messages` | `table` | Yes | A list of warning messages. |
| `result` | `table` | Yes | A result. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ManagedTransform():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ManagedTransform():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ManagedTransform():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ManagedTransformEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryAvailabilityEntity

```lua
local observatory_availability = client:ObservatoryAvailability(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ObservatoryAvailability():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryAvailabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryCreateScheduleEntity

```lua
local observatory_create_schedule = client:ObservatoryCreateSchedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ObservatoryCreateSchedule():create({
  id = --[[ string ]],
  zone_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryCreateScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryPageTestResponseCollectionEntity

```lua
local observatory_page_test_response_collection = client:ObservatoryPageTestResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ObservatoryPageTestResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryPageTestResponseSingleEntity

```lua
local observatory_page_test_response_single = client:ObservatoryPageTestResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `any` | No |  |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ObservatoryPageTestResponseSingle():create({
  url = --[[ string ]],
  zone_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ObservatoryPageTestResponseSingle():load({ page_id = "page_id", test_id = "test_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryPagesResponseCollectionEntity

```lua
local observatory_pages_response_collection = client:ObservatoryPagesResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ObservatoryPagesResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryScheduleResponseSingleEntity

```lua
local observatory_schedule_response_single = client:ObservatoryScheduleResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No | The test schedule. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ObservatoryScheduleResponseSingle():load({ url = "url", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObservatoryTrendEntity

```lua
local observatory_trend = client:ObservatoryTrend(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ObservatoryTrend():load({ url = "url", zone_id = "zone_id", device_type = "device_type", metric = "metric", region = "region", start = "start", tz = "tz" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObservatoryTrendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OriginCloudRegionEntity

```lua
local origin_cloud_region = client:OriginCloudRegion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `table` | Yes |  |
| `origin_ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Yes | Cloud vendor region identifier. |
| `result` | `table` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `table` | Yes | Pagination metadata for list responses. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `vendor` | `string` | Yes | Cloud vendor hosting the origin. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OriginCloudRegion():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  ip = --[[ string ]],
  messages = --[[ table ]],
  origin_ip = --[[ string ]],
  region = --[[ string ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
  vendor = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OriginCloudRegion():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OriginCloudRegion():load({ id = "origin_cloud_region_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OriginCloudRegion():remove({ id = "origin_cloud_region_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OriginCloudRegion():update({
  id = "origin_cloud_region_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginCloudRegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OriginPostQuantumEntity

```lua
local origin_post_quantum = client:OriginPostQuantum(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `value` | `string` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OriginPostQuantum():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OriginPostQuantum():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginPostQuantumEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleEntity

```lua
local schedule = client:Schedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Schedule():remove({ id = "id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmartShieldEntity

```lua
local smart_shield = client:SmartShield(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `table` | No |  |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `regional_tiered_cache` | `table` | No |  |
| `result` | `table` | Yes |  |
| `smart_routing` | `table` | No |  |
| `smart_tiered_cache` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SmartShield():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SmartShield():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartShieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmartTieredCacheEntity

```lua
local smart_tiered_cache = client:SmartTieredCache(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `value` | `string` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SmartTieredCache():create({
  zone_id = --[[ string ]],
  value = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SmartTieredCache():load({ zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SmartTieredCache():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SmartTieredCache():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartTieredCacheEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmartshieldResponseCollectionEntity

```lua
local smartshield_response_collection = client:SmartshieldResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SmartshieldResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmartshieldSingleHcEntity

```lua
local smartshield_single_hc = client:SmartshieldSingleHc(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `table` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `number` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `number` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | No | A human-readable description of the health check. |
| `http_config` | `table` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `number` | No | The interval between each health check. |
| `name` | `string` | Yes | A short name to identify the health check. |
| `result` | `table` | No |  |
| `retries` | `number` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `boolean` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `table` | No | Parameters specific to TCP health check. |
| `timeout` | `number` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | No | The protocol to use for the health check. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SmartshieldSingleHc():create({
  zone_id = --[[ string ]],
  address = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SmartshieldSingleHc():load({ healthcheck_id = "healthcheck_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SmartshieldSingleHc():update({
  healthcheck_id = "healthcheck_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldSingleHcEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmartshieldSingleHcIdEntity

```lua
local smartshield_single_hc_id = client:SmartshieldSingleHcId(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SmartshieldSingleHcId():remove({ healthcheck_id = "healthcheck_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmartshieldSingleHcIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestEntity

```lua
local test = client:Test(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Test():remove({ url = "url", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TieredCachingEntity

```lua
local tiered_caching = client:TieredCaching(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `value` | `string` | Yes | Enables Tiered Caching. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TieredCaching():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TieredCaching():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TieredCachingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UrlNormalizationEntity

```lua
local url_normalization = client:UrlNormalization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | A list of error messages. |
| `messages` | `table` | Yes | A list of warning messages. |
| `result` | `table` | Yes | A result. |
| `scope` | `string` | Yes | The scope of the URL normalization. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `type` | `string` | Yes | The type of URL normalization performed by Cloudflare. |

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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:UrlNormalization():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UrlNormalization():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UrlNormalization():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UrlNormalizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZoneCacheSettingEntity

```lua
local zone_cache_setting = client:ZoneCacheSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `string` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ZoneCacheSetting():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZoneCacheSetting():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZoneCacheSetting():load({ zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ZoneCacheSetting():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZoneCacheSetting():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneCacheSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

