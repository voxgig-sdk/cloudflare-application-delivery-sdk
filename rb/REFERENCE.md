# CloudflareApplicationDelivery Ruby SDK Reference

Complete API reference for the CloudflareApplicationDelivery Ruby SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```ruby
require_relative 'CloudflareApplicationDelivery_sdk'

client = CloudflareApplicationDeliverySDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareApplicationDeliverySDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareApplicationDeliverySDK.test
```


### Instance Methods

#### `ArgoConfigApiResponseSingle(data = nil)`

Create a new `ArgoConfigApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `CachePurgeApiResponseSingleId(data = nil)`

Create a new `CachePurgeApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheReserveClear(data = nil)`

Create a new `CacheReserveClear` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAZone(data = nil)`

Create a new `CustomAssetsForAZone` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAnAccount(data = nil)`

Create a new `CustomAssetsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `CustomPage(data = nil)`

Create a new `CustomPage` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResult(data = nil)`

Create a new `CustomPagesCustomAssetResult` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResultList(data = nil)`

Create a new `CustomPagesCustomAssetResultList` entity instance. Pass `nil` for no initial data.

#### `CustomPagesPreviewTokenResult(data = nil)`

Create a new `CustomPagesPreviewTokenResult` entity instance. Pass `nil` for no initial data.

#### `ManagedTransform(data = nil)`

Create a new `ManagedTransform` entity instance. Pass `nil` for no initial data.

#### `ObservatoryAvailability(data = nil)`

Create a new `ObservatoryAvailability` entity instance. Pass `nil` for no initial data.

#### `ObservatoryCreateSchedule(data = nil)`

Create a new `ObservatoryCreateSchedule` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseCollection(data = nil)`

Create a new `ObservatoryPageTestResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseSingle(data = nil)`

Create a new `ObservatoryPageTestResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPagesResponseCollection(data = nil)`

Create a new `ObservatoryPagesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryScheduleResponseSingle(data = nil)`

Create a new `ObservatoryScheduleResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryTrend(data = nil)`

Create a new `ObservatoryTrend` entity instance. Pass `nil` for no initial data.

#### `OriginCloudRegion(data = nil)`

Create a new `OriginCloudRegion` entity instance. Pass `nil` for no initial data.

#### `OriginPostQuantum(data = nil)`

Create a new `OriginPostQuantum` entity instance. Pass `nil` for no initial data.

#### `Schedule(data = nil)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `SmartShield(data = nil)`

Create a new `SmartShield` entity instance. Pass `nil` for no initial data.

#### `SmartTieredCache(data = nil)`

Create a new `SmartTieredCache` entity instance. Pass `nil` for no initial data.

#### `SmartshieldResponseCollection(data = nil)`

Create a new `SmartshieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHc(data = nil)`

Create a new `SmartshieldSingleHc` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHcId(data = nil)`

Create a new `SmartshieldSingleHcId` entity instance. Pass `nil` for no initial data.

#### `Test(data = nil)`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `TieredCaching(data = nil)`

Create a new `TieredCaching` entity instance. Pass `nil` for no initial data.

#### `UrlNormalization(data = nil)`

Create a new `UrlNormalization` entity instance. Pass `nil` for no initial data.

#### `ZoneCacheSetting(data = nil)`

Create a new `ZoneCacheSetting` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ArgoConfigApiResponseSingleEntity

```ruby
argo_config_api_response_single = client.ArgoConfigApiResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Describes a successful API response. |
| `value` | `String` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ArgoConfigApiResponseSingle.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ArgoConfigApiResponseSingle.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CachePurgeApiResponseSingleIdEntity

```ruby
cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CachePurgeApiResponseSingleId.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CacheReserveClearEntity

```ruby
cache_reserve_clear = client.CacheReserveClear
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CacheReserveClear.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CacheReserveClear.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CacheReserveClearEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomAssetsForAZoneEntity

```ruby
custom_assets_for_a_zone = client.CustomAssetsForAZone
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomAssetsForAZone.remove({ "asset_name" => "asset_name", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomAssetsForAZoneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomAssetsForAnAccountEntity

```ruby
custom_assets_for_an_account = client.CustomAssetsForAnAccount
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomAssetsForAnAccount.remove({ "account_id" => "account_id", "asset_name" => "asset_name" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomAssetsForAnAccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomPageEntity

```ruby
custom_page = client.CustomPage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `String` | No |  |
| `description` | `String` | No |  |
| `id` | `String` | No |  |
| `modified_on` | `String` | No |  |
| `preview_target` | `String` | No |  |
| `required_tokens` | `Array` | No |  |
| `result` | `Hash` | No |  |
| `state` | `String` | No | The custom page state. |
| `url` | `String` | No | The URL associated with the custom page. |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomPage.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomPage.load({ "id" => "custom_page_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomPage.update({
  "id" => "custom_page_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomPageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomPagesCustomAssetResultEntity

```ruby
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes | A short description of the custom asset. |
| `name` | `String` | Yes | The unique name of the custom asset. |
| `result` | `Hash` | No |  |
| `url` | `String` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomPagesCustomAssetResult.create({
  "account_id" => "example_account_id", # String
  "description" => "example_description", # String
  "name" => "example_name", # String
  "url" => "example_url", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.CustomPagesCustomAssetResult.load({ "asset_name" => "asset_name" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomPagesCustomAssetResult.update({
  "asset_name" => "asset_name",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomPagesCustomAssetResultListEntity

```ruby
custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CustomPagesCustomAssetResultList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomPagesPreviewTokenResultEntity

```ruby
custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `String` | Yes | The preview action type. |
| `target` | `String` | Yes | The target custom page type to preview (e.g. |
| `url` | `String` | Yes | The URL of the custom page content to preview. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.CustomPagesPreviewTokenResult.create({
  "account_id" => "example_account_id", # String
  "act" => "example_act", # String
  "target" => "example_target", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ManagedTransformEntity

```ruby
managed_transform = client.ManagedTransform
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | A list of error messages. |
| `managed_request_headers` | `Array` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `Array` | No | The list of Managed Response Transforms. |
| `messages` | `Array` | Yes | A list of warning messages. |
| `result` | `Hash` | Yes | A result. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ManagedTransform.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ManagedTransform.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ManagedTransform.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ManagedTransformEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryAvailabilityEntity

```ruby
observatory_availability = client.ObservatoryAvailability
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ObservatoryAvailability.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryAvailabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryCreateScheduleEntity

```ruby
observatory_create_schedule = client.ObservatoryCreateSchedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ObservatoryCreateSchedule.create({
  "id" => "example_id", # String
  "zone_id" => "example_zone_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryCreateScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryPageTestResponseCollectionEntity

```ruby
observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ObservatoryPageTestResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryPageTestResponseSingleEntity

```ruby
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `Object` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ObservatoryPageTestResponseSingle.create({
  "url" => "example_url", # String
  "zone_id" => "example_zone_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ObservatoryPageTestResponseSingle.load({ "page_id" => "page_id", "test_id" => "test_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryPagesResponseCollectionEntity

```ruby
observatory_pages_response_collection = client.ObservatoryPagesResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ObservatoryPagesResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryScheduleResponseSingleEntity

```ruby
observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No | The test schedule. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ObservatoryScheduleResponseSingle.load({ "url" => "url", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ObservatoryTrendEntity

```ruby
observatory_trend = client.ObservatoryTrend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ObservatoryTrend.load({ "url" => "url", "zone_id" => "zone_id", "device_type" => "device_type", "metric" => "metric", "region" => "region", "start" => "start", "tz" => "tz" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ObservatoryTrendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OriginCloudRegionEntity

```ruby
origin_cloud_region = client.OriginCloudRegion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `ip` | `String` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `Array` | Yes |  |
| `origin_ip` | `String` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `String` | Yes | Cloud vendor region identifier. |
| `result` | `Hash` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `Hash` | Yes | Pagination metadata for list responses. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `vendor` | `String` | Yes | Cloud vendor hosting the origin. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OriginCloudRegion.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "ip" => "example_ip", # String
  "messages" => [], # Array
  "origin_ip" => "example_origin_ip", # String
  "region" => "example_region", # String
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
  "vendor" => "example_vendor", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OriginCloudRegion.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OriginCloudRegion.load({ "id" => "origin_cloud_region_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OriginCloudRegion.remove({ "id" => "origin_cloud_region_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OriginCloudRegion.update({
  "id" => "origin_cloud_region_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OriginCloudRegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OriginPostQuantumEntity

```ruby
origin_post_quantum = client.OriginPostQuantum
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `value` | `String` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OriginPostQuantum.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OriginPostQuantum.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OriginPostQuantumEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleEntity

```ruby
schedule = client.Schedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Schedule.remove({ "id" => "id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SmartShieldEntity

```ruby
smart_shield = client.SmartShield
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `Hash` | No |  |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `regional_tiered_cache` | `Hash` | No |  |
| `result` | `Hash` | Yes |  |
| `smart_routing` | `Hash` | No |  |
| `smart_tiered_cache` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SmartShield.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SmartShield.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SmartShieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SmartTieredCacheEntity

```ruby
smart_tiered_cache = client.SmartTieredCache
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `value` | `String` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SmartTieredCache.create({
  "zone_id" => "example_zone_id", # String
  "value" => "example_value", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SmartTieredCache.load({ "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SmartTieredCache.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SmartTieredCache.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SmartTieredCacheEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SmartshieldResponseCollectionEntity

```ruby
smartshield_response_collection = client.SmartshieldResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SmartshieldResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SmartshieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SmartshieldSingleHcEntity

```ruby
smartshield_single_hc = client.SmartshieldSingleHc
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `Array` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `Integer` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `Integer` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `String` | No | A human-readable description of the health check. |
| `http_config` | `Hash` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `Integer` | No | The interval between each health check. |
| `name` | `String` | Yes | A short name to identify the health check. |
| `result` | `Hash` | No |  |
| `retries` | `Integer` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `Boolean` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `Hash` | No | Parameters specific to TCP health check. |
| `timeout` | `Integer` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `String` | No | The protocol to use for the health check. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SmartshieldSingleHc.create({
  "zone_id" => "example_zone_id", # String
  "address" => "example_address", # String
  "name" => "example_name", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SmartshieldSingleHc.load({ "healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.SmartshieldSingleHc.update({
  "healthcheck_id" => "healthcheck_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SmartshieldSingleHcEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SmartshieldSingleHcIdEntity

```ruby
smartshield_single_hc_id = client.SmartshieldSingleHcId
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SmartshieldSingleHcId.remove({ "healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SmartshieldSingleHcIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TestEntity

```ruby
test = client.Test
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Test.remove({ "url" => "url", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TieredCachingEntity

```ruby
tiered_caching = client.TieredCaching
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `value` | `String` | Yes | Enables Tiered Caching. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TieredCaching.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TieredCaching.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TieredCachingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UrlNormalizationEntity

```ruby
url_normalization = client.UrlNormalization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | A list of error messages. |
| `messages` | `Array` | Yes | A list of warning messages. |
| `result` | `Hash` | Yes | A result. |
| `scope` | `String` | Yes | The scope of the URL normalization. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `type` | `String` | Yes | The type of URL normalization performed by Cloudflare. |

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

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.UrlNormalization.list
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UrlNormalization.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UrlNormalization.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UrlNormalizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZoneCacheSettingEntity

```ruby
zone_cache_setting = client.ZoneCacheSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `value` | `String` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ZoneCacheSetting.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
  "value" => "example_value", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZoneCacheSetting.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneCacheSetting.load({ "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneCacheSetting.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZoneCacheSetting.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZoneCacheSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareApplicationDeliverySDK.new({
  "feature" => {
    "test" => { "active" => true },
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

