# CloudflareApplicationDelivery PHP SDK Reference

Complete API reference for the CloudflareApplicationDelivery PHP SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```php
require_once __DIR__ . '/cloudflareapplicationdelivery_sdk.php';

$client = new CloudflareApplicationDeliverySDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareApplicationDeliverySDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareApplicationDeliverySDK::test();
```


### Instance Methods

#### `ArgoConfigApiResponseSingle($data = null)`

Create a new `ArgoConfigApiResponseSingleEntity` instance. Pass `null` for no initial data.

#### `CachePurgeApiResponseSingleId($data = null)`

Create a new `CachePurgeApiResponseSingleIdEntity` instance. Pass `null` for no initial data.

#### `CacheReserveClear($data = null)`

Create a new `CacheReserveClearEntity` instance. Pass `null` for no initial data.

#### `CustomAssetsForAZone($data = null)`

Create a new `CustomAssetsForAZoneEntity` instance. Pass `null` for no initial data.

#### `CustomAssetsForAnAccount($data = null)`

Create a new `CustomAssetsForAnAccountEntity` instance. Pass `null` for no initial data.

#### `CustomPage($data = null)`

Create a new `CustomPageEntity` instance. Pass `null` for no initial data.

#### `CustomPagesCustomAssetResult($data = null)`

Create a new `CustomPagesCustomAssetResultEntity` instance. Pass `null` for no initial data.

#### `CustomPagesCustomAssetResultList($data = null)`

Create a new `CustomPagesCustomAssetResultListEntity` instance. Pass `null` for no initial data.

#### `CustomPagesPreviewTokenResult($data = null)`

Create a new `CustomPagesPreviewTokenResultEntity` instance. Pass `null` for no initial data.

#### `ManagedTransform($data = null)`

Create a new `ManagedTransformEntity` instance. Pass `null` for no initial data.

#### `ObservatoryAvailability($data = null)`

Create a new `ObservatoryAvailabilityEntity` instance. Pass `null` for no initial data.

#### `ObservatoryCreateSchedule($data = null)`

Create a new `ObservatoryCreateScheduleEntity` instance. Pass `null` for no initial data.

#### `ObservatoryPageTestResponseCollection($data = null)`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ObservatoryPageTestResponseSingle($data = null)`

Create a new `ObservatoryPageTestResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ObservatoryPagesResponseCollection($data = null)`

Create a new `ObservatoryPagesResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ObservatoryScheduleResponseSingle($data = null)`

Create a new `ObservatoryScheduleResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ObservatoryTrend($data = null)`

Create a new `ObservatoryTrendEntity` instance. Pass `null` for no initial data.

#### `OriginCloudRegion($data = null)`

Create a new `OriginCloudRegionEntity` instance. Pass `null` for no initial data.

#### `OriginPostQuantum($data = null)`

Create a new `OriginPostQuantumEntity` instance. Pass `null` for no initial data.

#### `Schedule($data = null)`

Create a new `ScheduleEntity` instance. Pass `null` for no initial data.

#### `SmartShield($data = null)`

Create a new `SmartShieldEntity` instance. Pass `null` for no initial data.

#### `SmartTieredCache($data = null)`

Create a new `SmartTieredCacheEntity` instance. Pass `null` for no initial data.

#### `SmartshieldResponseCollection($data = null)`

Create a new `SmartshieldResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `SmartshieldSingleHc($data = null)`

Create a new `SmartshieldSingleHcEntity` instance. Pass `null` for no initial data.

#### `SmartshieldSingleHcId($data = null)`

Create a new `SmartshieldSingleHcIdEntity` instance. Pass `null` for no initial data.

#### `Test($data = null)`

Create a new `TestEntity` instance. Pass `null` for no initial data.

#### `TieredCaching($data = null)`

Create a new `TieredCachingEntity` instance. Pass `null` for no initial data.

#### `UrlNormalization($data = null)`

Create a new `UrlNormalizationEntity` instance. Pass `null` for no initial data.

#### `ZoneCacheSetting($data = null)`

Create a new `ZoneCacheSettingEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareApplicationDeliveryUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ArgoConfigApiResponseSingleEntity

```php
$argo_config_api_response_single = $client->ArgoConfigApiResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Describes a successful API response. |
| `value` | `string` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ArgoConfigApiResponseSingle()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ArgoConfigApiResponseSingle()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ArgoConfigApiResponseSingleEntity`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CachePurgeApiResponseSingleIdEntity

```php
$cache_purge_api_response_single_id = $client->CachePurgeApiResponseSingleId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CachePurgeApiResponseSingleId()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CachePurgeApiResponseSingleIdEntity`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CacheReserveClearEntity

```php
$cache_reserve_clear = $client->CacheReserveClear();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CacheReserveClear()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CacheReserveClear()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CacheReserveClearEntity`

Create a new `CacheReserveClearEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomAssetsForAZoneEntity

```php
$custom_assets_for_a_zone = $client->CustomAssetsForAZone();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomAssetsForAZone()->remove(["asset_name" => "asset_name", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomAssetsForAZoneEntity`

Create a new `CustomAssetsForAZoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomAssetsForAnAccountEntity

```php
$custom_assets_for_an_account = $client->CustomAssetsForAnAccount();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomAssetsForAnAccount()->remove(["account_id" => "account_id", "asset_name" => "asset_name"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomAssetsForAnAccountEntity`

Create a new `CustomAssetsForAnAccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPageEntity

```php
$custom_page = $client->CustomPage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `modified_on` | `string` | No |  |
| `preview_target` | `string` | No |  |
| `required_tokens` | `array` | No |  |
| `result` | `array` | No |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomPage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomPage()->load(["id" => "custom_page_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomPage()->update([
  "id" => "custom_page_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPageEntity`

Create a new `CustomPageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPagesCustomAssetResultEntity

```php
$custom_pages_custom_asset_result = $client->CustomPagesCustomAssetResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A short description of the custom asset. |
| `name` | `string` | Yes | The unique name of the custom asset. |
| `result` | `array` | No |  |
| `url` | `string` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomPagesCustomAssetResult()->create([
  "account_id" => null, // string
  "description" => null, // string
  "name" => null, // string
  "url" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomPagesCustomAssetResult()->load(["asset_name" => "asset_name"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomPagesCustomAssetResult()->update([
  "asset_name" => "asset_name",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPagesCustomAssetResultEntity`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPagesCustomAssetResultListEntity

```php
$custom_pages_custom_asset_result_list = $client->CustomPagesCustomAssetResultList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomPagesCustomAssetResultList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPagesCustomAssetResultListEntity`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomPagesPreviewTokenResultEntity

```php
$custom_pages_preview_token_result = $client->CustomPagesPreviewTokenResult();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `string` | Yes | The preview action type. |
| `target` | `string` | Yes | The target custom page type to preview (e.g. |
| `url` | `string` | Yes | The URL of the custom page content to preview. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomPagesPreviewTokenResult()->create([
  "account_id" => null, // string
  "act" => null, // string
  "target" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomPagesPreviewTokenResultEntity`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ManagedTransformEntity

```php
$managed_transform = $client->ManagedTransform();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | A list of error messages. |
| `managed_request_headers` | `array` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `array` | No | The list of Managed Response Transforms. |
| `messages` | `array` | Yes | A list of warning messages. |
| `result` | `array` | Yes | A result. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ManagedTransform()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ManagedTransform()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ManagedTransform()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ManagedTransformEntity`

Create a new `ManagedTransformEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryAvailabilityEntity

```php
$observatory_availability = $client->ObservatoryAvailability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ObservatoryAvailability()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryAvailabilityEntity`

Create a new `ObservatoryAvailabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryCreateScheduleEntity

```php
$observatory_create_schedule = $client->ObservatoryCreateSchedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ObservatoryCreateSchedule()->create([
  "id" => null, // string
  "zone_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryCreateScheduleEntity`

Create a new `ObservatoryCreateScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryPageTestResponseCollectionEntity

```php
$observatory_page_test_response_collection = $client->ObservatoryPageTestResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ObservatoryPageTestResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryPageTestResponseCollectionEntity`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryPageTestResponseSingleEntity

```php
$observatory_page_test_response_single = $client->ObservatoryPageTestResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `mixed` | No |  |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ObservatoryPageTestResponseSingle()->create([
  "url" => null, // string
  "zone_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ObservatoryPageTestResponseSingle()->load(["page_id" => "page_id", "test_id" => "test_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryPageTestResponseSingleEntity`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryPagesResponseCollectionEntity

```php
$observatory_pages_response_collection = $client->ObservatoryPagesResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ObservatoryPagesResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryPagesResponseCollectionEntity`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryScheduleResponseSingleEntity

```php
$observatory_schedule_response_single = $client->ObservatoryScheduleResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No | The test schedule. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ObservatoryScheduleResponseSingle()->load(["url" => "url", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryScheduleResponseSingleEntity`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ObservatoryTrendEntity

```php
$observatory_trend = $client->ObservatoryTrend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ObservatoryTrend()->load(["url" => "url", "zone_id" => "zone_id", "device_type" => "device_type", "metric" => "metric", "region" => "region", "start" => "start", "tz" => "tz"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ObservatoryTrendEntity`

Create a new `ObservatoryTrendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OriginCloudRegionEntity

```php
$origin_cloud_region = $client->OriginCloudRegion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `array` | Yes |  |
| `origin_ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Yes | Cloud vendor region identifier. |
| `result` | `array` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `array` | Yes | Pagination metadata for list responses. |
| `success` | `bool` | Yes | Whether the API call was successful. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OriginCloudRegion()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "ip" => null, // string
  "messages" => null, // array
  "origin_ip" => null, // string
  "region" => null, // string
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
  "vendor" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OriginCloudRegion()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OriginCloudRegion()->load(["id" => "origin_cloud_region_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OriginCloudRegion()->remove(["id" => "origin_cloud_region_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OriginCloudRegion()->update([
  "id" => "origin_cloud_region_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OriginCloudRegionEntity`

Create a new `OriginCloudRegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OriginPostQuantumEntity

```php
$origin_post_quantum = $client->OriginPostQuantum();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `value` | `string` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OriginPostQuantum()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OriginPostQuantum()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OriginPostQuantumEntity`

Create a new `OriginPostQuantumEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleEntity

```php
$schedule = $client->Schedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Schedule()->remove(["id" => "id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleEntity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SmartShieldEntity

```php
$smart_shield = $client->SmartShield();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `array` | No |  |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `regional_tiered_cache` | `array` | No |  |
| `result` | `array` | Yes |  |
| `smart_routing` | `array` | No |  |
| `smart_tiered_cache` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SmartShield()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SmartShield()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SmartShieldEntity`

Create a new `SmartShieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SmartTieredCacheEntity

```php
$smart_tiered_cache = $client->SmartTieredCache();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `value` | `string` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SmartTieredCache()->create([
  "zone_id" => null, // string
  "value" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SmartTieredCache()->load(["zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SmartTieredCache()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SmartTieredCache()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SmartTieredCacheEntity`

Create a new `SmartTieredCacheEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SmartshieldResponseCollectionEntity

```php
$smartshield_response_collection = $client->SmartshieldResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SmartshieldResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SmartshieldResponseCollectionEntity`

Create a new `SmartshieldResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SmartshieldSingleHcEntity

```php
$smartshield_single_hc = $client->SmartshieldSingleHc();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `array` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | No | A human-readable description of the health check. |
| `http_config` | `array` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | No | The interval between each health check. |
| `name` | `string` | Yes | A short name to identify the health check. |
| `result` | `array` | No |  |
| `retries` | `int` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `array` | No | Parameters specific to TCP health check. |
| `timeout` | `int` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | No | The protocol to use for the health check. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SmartshieldSingleHc()->create([
  "zone_id" => null, // string
  "address" => null, // string
  "name" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SmartshieldSingleHc()->load(["healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SmartshieldSingleHc()->update([
  "healthcheck_id" => "healthcheck_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SmartshieldSingleHcEntity`

Create a new `SmartshieldSingleHcEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SmartshieldSingleHcIdEntity

```php
$smartshield_single_hc_id = $client->SmartshieldSingleHcId();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SmartshieldSingleHcId()->remove(["healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SmartshieldSingleHcIdEntity`

Create a new `SmartshieldSingleHcIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TestEntity

```php
$test = $client->Test_();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Test_()->remove(["url" => "url", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TestEntity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TieredCachingEntity

```php
$tiered_caching = $client->TieredCaching();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `value` | `string` | Yes | Enables Tiered Caching. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TieredCaching()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TieredCaching()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TieredCachingEntity`

Create a new `TieredCachingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UrlNormalizationEntity

```php
$url_normalization = $client->UrlNormalization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | A list of error messages. |
| `messages` | `array` | Yes | A list of warning messages. |
| `result` | `array` | Yes | A result. |
| `scope` | `string` | Yes | The scope of the URL normalization. |
| `success` | `bool` | Yes | Whether the API call was successful. |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->UrlNormalization()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UrlNormalization()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UrlNormalization()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UrlNormalizationEntity`

Create a new `UrlNormalizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZoneCacheSettingEntity

```php
$zone_cache_setting = $client->ZoneCacheSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `string` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ZoneCacheSetting()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
  "value" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZoneCacheSetting()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneCacheSetting()->load(["zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneCacheSetting()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZoneCacheSetting()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZoneCacheSettingEntity`

Create a new `ZoneCacheSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareApplicationDeliverySDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

