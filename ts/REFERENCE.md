# CloudflareApplicationDelivery TypeScript SDK Reference

Complete API reference for the CloudflareApplicationDelivery TypeScript SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```ts
new CloudflareApplicationDeliverySDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareApplicationDeliverySDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareApplicationDeliverySDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareApplicationDeliverySDK` instance in test mode.


### Instance Methods

#### `ArgoConfigApiResponseSingle(data?: object)`

Create a new `ArgoConfigApiResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ArgoConfigApiResponseSingleEntity` instance.

#### `CachePurgeApiResponseSingleId(data?: object)`

Create a new `CachePurgeApiResponseSingleId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CachePurgeApiResponseSingleIdEntity` instance.

#### `CacheReserveClear(data?: object)`

Create a new `CacheReserveClear` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CacheReserveClearEntity` instance.

#### `CustomAssetsForAZone(data?: object)`

Create a new `CustomAssetsForAZone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomAssetsForAZoneEntity` instance.

#### `CustomAssetsForAnAccount(data?: object)`

Create a new `CustomAssetsForAnAccount` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomAssetsForAnAccountEntity` instance.

#### `CustomPage(data?: object)`

Create a new `CustomPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPageEntity` instance.

#### `CustomPagesCustomAssetResult(data?: object)`

Create a new `CustomPagesCustomAssetResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPagesCustomAssetResultEntity` instance.

#### `CustomPagesCustomAssetResultList(data?: object)`

Create a new `CustomPagesCustomAssetResultList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPagesCustomAssetResultListEntity` instance.

#### `CustomPagesPreviewTokenResult(data?: object)`

Create a new `CustomPagesPreviewTokenResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomPagesPreviewTokenResultEntity` instance.

#### `ManagedTransform(data?: object)`

Create a new `ManagedTransform` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ManagedTransformEntity` instance.

#### `ObservatoryAvailability(data?: object)`

Create a new `ObservatoryAvailability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryAvailabilityEntity` instance.

#### `ObservatoryCreateSchedule(data?: object)`

Create a new `ObservatoryCreateSchedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryCreateScheduleEntity` instance.

#### `ObservatoryPageTestResponseCollection(data?: object)`

Create a new `ObservatoryPageTestResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryPageTestResponseCollectionEntity` instance.

#### `ObservatoryPageTestResponseSingle(data?: object)`

Create a new `ObservatoryPageTestResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryPageTestResponseSingleEntity` instance.

#### `ObservatoryPagesResponseCollection(data?: object)`

Create a new `ObservatoryPagesResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryPagesResponseCollectionEntity` instance.

#### `ObservatoryScheduleResponseSingle(data?: object)`

Create a new `ObservatoryScheduleResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryScheduleResponseSingleEntity` instance.

#### `ObservatoryTrend(data?: object)`

Create a new `ObservatoryTrend` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObservatoryTrendEntity` instance.

#### `OriginCloudRegion(data?: object)`

Create a new `OriginCloudRegion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OriginCloudRegionEntity` instance.

#### `OriginPostQuantum(data?: object)`

Create a new `OriginPostQuantum` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OriginPostQuantumEntity` instance.

#### `Schedule(data?: object)`

Create a new `Schedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntity` instance.

#### `SmartShield(data?: object)`

Create a new `SmartShield` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmartShieldEntity` instance.

#### `SmartTieredCache(data?: object)`

Create a new `SmartTieredCache` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmartTieredCacheEntity` instance.

#### `SmartshieldResponseCollection(data?: object)`

Create a new `SmartshieldResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmartshieldResponseCollectionEntity` instance.

#### `SmartshieldSingleHc(data?: object)`

Create a new `SmartshieldSingleHc` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmartshieldSingleHcEntity` instance.

#### `SmartshieldSingleHcId(data?: object)`

Create a new `SmartshieldSingleHcId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmartshieldSingleHcIdEntity` instance.

#### `Test(data?: object)`

Create a new `Test` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestEntity` instance.

#### `TieredCaching(data?: object)`

Create a new `TieredCaching` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TieredCachingEntity` instance.

#### `UrlNormalization(data?: object)`

Create a new `UrlNormalization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UrlNormalizationEntity` instance.

#### `ZoneCacheSetting(data?: object)`

Create a new `ZoneCacheSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZoneCacheSettingEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareApplicationDeliverySDK.test()`.

**Returns:** `CloudflareApplicationDeliverySDK` instance in test mode.


---

## ArgoConfigApiResponseSingleEntity

```ts
const argo_config_api_response_single = client.ArgoConfigApiResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Describes a successful API response. |
| `value` | `string` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ArgoConfigApiResponseSingle().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ArgoConfigApiResponseSingle().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CachePurgeApiResponseSingleIdEntity

```ts
const cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CachePurgeApiResponseSingleId().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CacheReserveClearEntity

```ts
const cache_reserve_clear = client.CacheReserveClear()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CacheReserveClear().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CacheReserveClear().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CacheReserveClearEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomAssetsForAZoneEntity

```ts
const custom_assets_for_a_zone = client.CustomAssetsForAZone()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomAssetsForAZone().remove({ asset_name: 'asset_name', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomAssetsForAZoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomAssetsForAnAccountEntity

```ts
const custom_assets_for_an_account = client.CustomAssetsForAnAccount()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomAssetsForAnAccount().remove({ account_id: 'account_id', asset_name: 'asset_name' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomAssetsForAnAccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPageEntity

```ts
const custom_page = client.CustomPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `modified_on` | `string` | No |  |
| `preview_target` | `string` | No |  |
| `required_tokens` | `any[]` | No |  |
| `result` | `Record<string, any>` | No |  |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomPage().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomPage().load({ id: 'custom_page_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomPage().update({
  id: 'custom_page_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPagesCustomAssetResultEntity

```ts
const custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A short description of the custom asset. |
| `name` | `string` | Yes | The unique name of the custom asset. |
| `result` | `Record<string, any>` | No |  |
| `url` | `string` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomPagesCustomAssetResult().create({
  account_id: 'example_account_id',
  description: 'example_description',
  name: 'example_name',
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomPagesCustomAssetResult().load({ asset_name: 'asset_name' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomPagesCustomAssetResult().update({
  asset_name: 'asset_name',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPagesCustomAssetResultListEntity

```ts
const custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomPagesCustomAssetResultList().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomPagesPreviewTokenResultEntity

```ts
const custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `string` | Yes | The preview action type. |
| `target` | `string` | Yes | The target custom page type to preview (e.g. |
| `url` | `string` | Yes | The URL of the custom page content to preview. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomPagesPreviewTokenResult().create({
  account_id: 'example_account_id',
  act: 'example_act',
  target: 'example_target',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ManagedTransformEntity

```ts
const managed_transform = client.ManagedTransform()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | A list of error messages. |
| `managed_request_headers` | `any[]` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `any[]` | No | The list of Managed Response Transforms. |
| `messages` | `any[]` | Yes | A list of warning messages. |
| `result` | `Record<string, any>` | Yes | A result. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ManagedTransform().list({ zone_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ManagedTransform().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ManagedTransform().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ManagedTransformEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryAvailabilityEntity

```ts
const observatory_availability = client.ObservatoryAvailability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservatoryAvailability().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryAvailabilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryCreateScheduleEntity

```ts
const observatory_create_schedule = client.ObservatoryCreateSchedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ObservatoryCreateSchedule().create({
  id: 'example_id',
  zone_id: 'example_zone_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryCreateScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryPageTestResponseCollectionEntity

```ts
const observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ObservatoryPageTestResponseCollection().list({ url: "example", zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryPageTestResponseSingleEntity

```ts
const observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `any` | No |  |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ObservatoryPageTestResponseSingle().create({
  url: 'example_url',
  zone_id: 'example_zone_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservatoryPageTestResponseSingle().load({ page_id: 'page_id', test_id: 'test_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryPagesResponseCollectionEntity

```ts
const observatory_pages_response_collection = client.ObservatoryPagesResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ObservatoryPagesResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryScheduleResponseSingleEntity

```ts
const observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No | The test schedule. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservatoryScheduleResponseSingle().load({ url: 'url', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObservatoryTrendEntity

```ts
const observatory_trend = client.ObservatoryTrend()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ObservatoryTrend().load({ url: 'url', zone_id: 'zone_id', device_type: 'device_type', metric: 'metric', region: 'region', start: 'start', tz: 'tz' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObservatoryTrendEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OriginCloudRegionEntity

```ts
const origin_cloud_region = client.OriginCloudRegion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `any[]` | Yes |  |
| `origin_ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Yes | Cloud vendor region identifier. |
| `result` | `Record<string, any>` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `Record<string, any>` | Yes | Pagination metadata for list responses. |
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

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `supported_region` | `/zones/{zone_id}/cache/origin_cloud_regions/supported_regions` | `client.OriginCloudRegion().list({ $action: 'supported_region', ... })` |
| `batch` | `/zones/{zone_id}/cache/origin_cloud_regions/batch` | `client.OriginCloudRegion().patch({ $action: 'batch', ... })` |
| `batch` | `/zones/{zone_id}/cache/origin_cloud_regions/batch` | `client.OriginCloudRegion().remove({ $action: 'batch', ... })` |

An action returns that action's OWN response, which is not necessarily a
OriginCloudRegion record — check the API definition for its shape.

```ts
const result = await client.OriginCloudRegion().list({
  $action: 'supported_region',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OriginCloudRegion().create({
  zone_id: 'example_zone_id',
  errors: [],
  ip: 'example_ip',
  messages: [],
  origin_ip: 'example_origin_ip',
  region: 'example_region',
  result: {},
  result_info: {},
  success: true,
  vendor: 'example_vendor',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OriginCloudRegion().list({ zone_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OriginCloudRegion().load({ id: 'origin_cloud_region_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OriginCloudRegion().remove({ id: 'origin_cloud_region_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OriginCloudRegion().update({
  id: 'origin_cloud_region_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OriginCloudRegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OriginPostQuantumEntity

```ts
const origin_post_quantum = client.OriginPostQuantum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `value` | `string` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OriginPostQuantum().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OriginPostQuantum().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OriginPostQuantumEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntity

```ts
const schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Schedule().remove({ id: 'id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmartShieldEntity

```ts
const smart_shield = client.SmartShield()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `Record<string, any>` | No |  |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `regional_tiered_cache` | `Record<string, any>` | No |  |
| `result` | `Record<string, any>` | Yes |  |
| `smart_routing` | `Record<string, any>` | No |  |
| `smart_tiered_cache` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SmartShield().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SmartShield().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmartShieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmartTieredCacheEntity

```ts
const smart_tiered_cache = client.SmartTieredCache()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `value` | `string` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SmartTieredCache().create({
  zone_id: 'example_zone_id',
  value: 'example_value',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SmartTieredCache().load({ zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SmartTieredCache().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SmartTieredCache().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmartTieredCacheEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmartshieldResponseCollectionEntity

```ts
const smartshield_response_collection = client.SmartshieldResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SmartshieldResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmartshieldResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmartshieldSingleHcEntity

```ts
const smartshield_single_hc = client.SmartshieldSingleHc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `any[]` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `number` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `number` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | No | A human-readable description of the health check. |
| `http_config` | `Record<string, any>` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `number` | No | The interval between each health check. |
| `name` | `string` | Yes | A short name to identify the health check. |
| `result` | `Record<string, any>` | No |  |
| `retries` | `number` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `boolean` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `Record<string, any>` | No | Parameters specific to TCP health check. |
| `timeout` | `number` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | No | The protocol to use for the health check. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SmartshieldSingleHc().create({
  zone_id: 'example_zone_id',
  address: 'example_address',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SmartshieldSingleHc().load({ healthcheck_id: 'healthcheck_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SmartshieldSingleHc().update({
  healthcheck_id: 'healthcheck_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmartshieldSingleHcEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmartshieldSingleHcIdEntity

```ts
const smartshield_single_hc_id = client.SmartshieldSingleHcId()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SmartshieldSingleHcId().remove({ healthcheck_id: 'healthcheck_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmartshieldSingleHcIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestEntity

```ts
const test = client.Test()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Test().remove({ url: 'url', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TieredCachingEntity

```ts
const tiered_caching = client.TieredCaching()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `value` | `string` | Yes | Enables Tiered Caching. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TieredCaching().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TieredCaching().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TieredCachingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UrlNormalizationEntity

```ts
const url_normalization = client.UrlNormalization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | A list of error messages. |
| `messages` | `any[]` | Yes | A list of warning messages. |
| `result` | `Record<string, any>` | Yes | A result. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UrlNormalization().list({ zone_id: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UrlNormalization().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UrlNormalization().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UrlNormalizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZoneCacheSettingEntity

```ts
const zone_cache_setting = client.ZoneCacheSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `string` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ZoneCacheSetting().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  success: true,
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZoneCacheSetting().list({ zone_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZoneCacheSetting().load({ zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ZoneCacheSetting().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZoneCacheSetting().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZoneCacheSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareApplicationDeliverySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareApplicationDeliverySDK({
  feature: {
    test: { active: true },
  }
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

