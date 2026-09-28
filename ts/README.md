# CloudflareApplicationDelivery TypeScript SDK



The TypeScript SDK for the CloudflareApplicationDelivery API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.ArgoConfigApiResponseSingle()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareApplicationDeliverySDK } from '@voxgig-sdk/cloudflare-application-delivery-sdk'

const client = new CloudflareApplicationDeliverySDK({
  apikey: process.env.CLOUDFLARE_APPLICATION_DELIVERY_APIKEY,
})
```

### 2. List argoconfigapiresponsesingle records

`list()` resolves to an array of ArgoConfigApiResponseSingle ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const argoconfigapiresponsesingles = await client.ArgoConfigApiResponseSingle().list({ zone_id: "example" })

for (const argoconfigapiresponsesingle of argoconfigapiresponsesingles) {
  console.log(argoconfigapiresponsesingle)
}
```

### 3. Load an observatorypagetestresponsesingle

ObservatoryPageTestResponseSingle is nested under page, so provide the `page_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const observatorypagetestresponsesingle = await client.ObservatoryPageTestResponseSingle().load({
    page_id: 'example_page_id',
    test_id: 'example_test_id',
    zone_id: 'example_zone_id',
  })
  console.log(observatorypagetestresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.ArgoConfigApiResponseSingle().update({
  zone_id: 'example_zone_id',
  errors: [],
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const originpostquantum = await client.OriginPostQuantum().load({ zone_id: "example" })
  console.log(originpostquantum)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareApplicationDeliverySDK.test()

const originpostquantum = await client.OriginPostQuantum().load({ zone_id: 'example_zone_id' })
// originpostquantum is the entity, populated with mock response data
// — call originpostquantum.data() for the record itself
console.log(originpostquantum)
```

You can also use the instance method:

```ts
const client = new CloudflareApplicationDeliverySDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.OriginPostQuantum()

// First call runs the operation and stores its result
await entity.load({ zone_id: 'example_zone_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareApplicationDeliverySDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE
CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareApplicationDeliverySDK

#### Constructor

```ts
new CloudflareApplicationDeliverySDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `ArgoConfigApiResponseSingle(data?)` | `ArgoConfigApiResponseSingleEntity` | Create an ArgoConfigApiResponseSingle entity instance. |
| `CachePurgeApiResponseSingleId(data?)` | `CachePurgeApiResponseSingleIdEntity` | Create a CachePurgeApiResponseSingleId entity instance. |
| `CacheReserveClear(data?)` | `CacheReserveClearEntity` | Create a CacheReserveClear entity instance. |
| `CustomAssetsForAZone(data?)` | `CustomAssetsForAZoneEntity` | Create a CustomAssetsForAZone entity instance. |
| `CustomAssetsForAnAccount(data?)` | `CustomAssetsForAnAccountEntity` | Create a CustomAssetsForAnAccount entity instance. |
| `CustomPage(data?)` | `CustomPageEntity` | Create a CustomPage entity instance. |
| `CustomPagesCustomAssetResult(data?)` | `CustomPagesCustomAssetResultEntity` | Create a CustomPagesCustomAssetResult entity instance. |
| `CustomPagesCustomAssetResultList(data?)` | `CustomPagesCustomAssetResultListEntity` | Create a CustomPagesCustomAssetResultList entity instance. |
| `CustomPagesPreviewTokenResult(data?)` | `CustomPagesPreviewTokenResultEntity` | Create a CustomPagesPreviewTokenResult entity instance. |
| `ManagedTransform(data?)` | `ManagedTransformEntity` | Create a ManagedTransform entity instance. |
| `ObservatoryAvailability(data?)` | `ObservatoryAvailabilityEntity` | Create an ObservatoryAvailability entity instance. |
| `ObservatoryCreateSchedule(data?)` | `ObservatoryCreateScheduleEntity` | Create an ObservatoryCreateSchedule entity instance. |
| `ObservatoryPageTestResponseCollection(data?)` | `ObservatoryPageTestResponseCollectionEntity` | Create an ObservatoryPageTestResponseCollection entity instance. |
| `ObservatoryPageTestResponseSingle(data?)` | `ObservatoryPageTestResponseSingleEntity` | Create an ObservatoryPageTestResponseSingle entity instance. |
| `ObservatoryPagesResponseCollection(data?)` | `ObservatoryPagesResponseCollectionEntity` | Create an ObservatoryPagesResponseCollection entity instance. |
| `ObservatoryScheduleResponseSingle(data?)` | `ObservatoryScheduleResponseSingleEntity` | Create an ObservatoryScheduleResponseSingle entity instance. |
| `ObservatoryTrend(data?)` | `ObservatoryTrendEntity` | Create an ObservatoryTrend entity instance. |
| `OriginCloudRegion(data?)` | `OriginCloudRegionEntity` | Create an OriginCloudRegion entity instance. |
| `OriginPostQuantum(data?)` | `OriginPostQuantumEntity` | Create an OriginPostQuantum entity instance. |
| `Schedule(data?)` | `ScheduleEntity` | Create a Schedule entity instance. |
| `SmartShield(data?)` | `SmartShieldEntity` | Create a SmartShield entity instance. |
| `SmartTieredCache(data?)` | `SmartTieredCacheEntity` | Create a SmartTieredCache entity instance. |
| `SmartshieldResponseCollection(data?)` | `SmartshieldResponseCollectionEntity` | Create a SmartshieldResponseCollection entity instance. |
| `SmartshieldSingleHc(data?)` | `SmartshieldSingleHcEntity` | Create a SmartshieldSingleHc entity instance. |
| `SmartshieldSingleHcId(data?)` | `SmartshieldSingleHcIdEntity` | Create a SmartshieldSingleHcId entity instance. |
| `Test(data?)` | `TestEntity` | Create a Test entity instance. |
| `TieredCaching(data?)` | `TieredCachingEntity` | Create a TieredCaching entity instance. |
| `UrlNormalization(data?)` | `UrlNormalizationEntity` | Create an UrlNormalization entity instance. |
| `ZoneCacheSetting(data?)` | `ZoneCacheSettingEntity` | Create a ZoneCacheSetting entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareApplicationDeliverySDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareApplicationDeliverySDK.test(testopts?, sdkopts?)` | `CloudflareApplicationDeliverySDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareApplicationDeliverySDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### ArgoConfigApiResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Describes a successful API response. |
| `value` | Specifies the enablement value of Argo Smart Routing. |

Operations: list, update.

API path: `/zones/{zone_id}/argo/smart_routing`

#### CachePurgeApiResponseSingleId

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: create.

API path: `/zones/{zone_id}/purge_cache`

#### CacheReserveClear

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, list.

API path: `/zones/{zone_id}/smart_shield/cache_reserve_clear`

#### CustomAssetsForAZone

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/custom_pages/assets/{asset_name}`

#### CustomAssetsForAnAccount

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/custom_pages/assets/{asset_name}`

#### CustomPage

| Field | Description |
| --- | --- |
| `created_on` |  |
| `description` |  |
| `id` |  |
| `modified_on` |  |
| `preview_target` |  |
| `required_tokens` |  |
| `result` |  |
| `state` | The custom page state. |
| `url` | The URL associated with the custom page. |

Operations: list, load, update.

API path: `/accounts/{account_id}/custom_pages`

#### CustomPagesCustomAssetResult

| Field | Description |
| --- | --- |
| `description` | A short description of the custom asset. |
| `name` | The unique name of the custom asset. |
| `result` |  |
| `url` | The URL where the asset content is fetched from. |

Operations: create, load, update.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesCustomAssetResultList

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesPreviewTokenResult

| Field | Description |
| --- | --- |
| `act` | The preview action type. |
| `target` | The target custom page type to preview (e.g. |
| `url` | The URL of the custom page content to preview. |

Operations: create.

API path: `/accounts/{account_id}/custom_pages/preview_tokens`

#### ManagedTransform

| Field | Description |
| --- | --- |
| `errors` | A list of error messages. |
| `managed_request_headers` | The list of Managed Request Transforms. |
| `managed_response_headers` | The list of Managed Response Transforms. |
| `messages` | A list of warning messages. |
| `result` | A result. |
| `success` | Whether the API call was successful. |

Operations: list, remove, update.

API path: `/zones/{zone_id}/managed_headers`

#### ObservatoryAvailability

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/zones/{zone_id}/speed_api/availabilities`

#### ObservatoryCreateSchedule

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: create.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryPageTestResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: list.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPageTestResponseSingle

| Field | Description |
| --- | --- |
| `region` |  |
| `result` |  |

Operations: create, load.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPagesResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/speed_api/pages`

#### ObservatoryScheduleResponseSingle

| Field | Description |
| --- | --- |
| `result` | The test schedule. |

Operations: load.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryTrend

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/zones/{zone_id}/speed_api/pages/{url}/trend`

#### OriginCloudRegion

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `ip` | Origin IP address (IPv4 or IPv6). |
| `messages` |  |
| `origin_ip` | Origin IP address (IPv4 or IPv6). |
| `region` | Cloud vendor region identifier. |
| `result` | Response result for a single origin cloud region mapping. |
| `result_info` | Pagination metadata for list responses. |
| `success` | Whether the API call was successful. |
| `vendor` | Cloud vendor hosting the origin. |

Operations: create, list, load, patch, remove, update.

API path: `/zones/{zone_id}/cache/origin_cloud_regions`

#### OriginPostQuantum

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Value of the Origin Post Quantum Encryption Setting. |

Operations: load, update.

API path: `/zones/{zone_id}/cache/origin_post_quantum_encryption`

#### Schedule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### SmartShield

| Field | Description |
| --- | --- |
| `cache_reserve` |  |
| `errors` |  |
| `messages` |  |
| `regional_tiered_cache` |  |
| `result` |  |
| `smart_routing` |  |
| `smart_tiered_cache` |  |
| `success` | Whether the API call was successful. |

Operations: list, update.

API path: `/zones/{zone_id}/smart_shield`

#### SmartTieredCache

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Enable or disable the Smart Tiered Cache. |

Operations: create, load, remove, update.

API path: `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`

#### SmartshieldResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/smart_shield/healthchecks`

#### SmartshieldSingleHc

| Field | Description |
| --- | --- |
| `address` | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | A list of regions from which to run health checks. |
| `consecutive_fails` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | A human-readable description of the health check. |
| `http_config` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | The interval between each health check. |
| `name` | A short name to identify the health check. |
| `result` |  |
| `retries` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | Parameters specific to TCP health check. |
| `timeout` | The timeout (in seconds) before marking the health check as failed. |
| `type` | The protocol to use for the health check. |

Operations: create, load, patch, update.

API path: `/zones/{zone_id}/smart_shield/healthchecks`

#### SmartshieldSingleHcId

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}`

#### Test

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### TieredCaching

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Enables Tiered Caching. |

Operations: load, update.

API path: `/zones/{zone_id}/argo/tiered_caching`

#### UrlNormalization

| Field | Description |
| --- | --- |
| `errors` | A list of error messages. |
| `messages` | A list of warning messages. |
| `result` | A result. |
| `scope` | The scope of the URL normalization. |
| `success` | Whether the API call was successful. |
| `type` | The type of URL normalization performed by Cloudflare. |

Operations: list, remove, update.

API path: `/zones/{zone_id}/url_normalization`

#### ZoneCacheSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `value` | Value of the Cache Reserve zone setting. |

Operations: create, list, load, remove, update.

API path: `/zones/{zone_id}/cache/cache_reserve_clear`



## Entities


### ArgoConfigApiResponseSingle

Create an instance: `const argo_config_api_response_single = client.ArgoConfigApiResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Describes a successful API response. |
| `value` | `string` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```ts
const argo_config_api_response_singles = await client.ArgoConfigApiResponseSingle().list({ zone_id: "example" })
```


### CachePurgeApiResponseSingleId

Create an instance: `const cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: Create

```ts
const cache_purge_api_response_single_id = await client.CachePurgeApiResponseSingleId().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### CacheReserveClear

Create an instance: `const cache_reserve_clear = client.CacheReserveClear()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const cache_reserve_clears = await client.CacheReserveClear().list({ zone_id: "example" })
```

#### Example: Create

```ts
const cache_reserve_clear = await client.CacheReserveClear().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  result: {},
  success: true,
})
```


### CustomAssetsForAZone

Create an instance: `const custom_assets_for_a_zone = client.CustomAssetsForAZone()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `const custom_assets_for_an_account = client.CustomAssetsForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomPage

Create an instance: `const custom_page = client.CustomPage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `modified_on` | `string` |  |
| `preview_target` | `string` |  |
| `required_tokens` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `state` | `string` | The custom page state. |
| `url` | `string` | The URL associated with the custom page. |

#### Example: Load

```ts
const custom_page = await client.CustomPage().load({ id: 'custom_page_id' })
```

#### Example: List

```ts
const custom_pages = await client.CustomPage().list({ account_id: "example" })
```


### CustomPagesCustomAssetResult

Create an instance: `const custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A short description of the custom asset. |
| `name` | `string` | The unique name of the custom asset. |
| `result` | `Record<string, any>` |  |
| `url` | `string` | The URL where the asset content is fetched from. |

#### Example: Load

```ts
const custom_pages_custom_asset_result = await client.CustomPagesCustomAssetResult().load({ asset_name: 'asset_name' })
```

#### Example: Create

```ts
const custom_pages_custom_asset_result = await client.CustomPagesCustomAssetResult().create({
  account_id: 'example_account_id',
  description: 'example_description',
  name: 'example_name',
  url: 'example_url',
})
```


### CustomPagesCustomAssetResultList

Create an instance: `const custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const custom_pages_custom_asset_result_lists = await client.CustomPagesCustomAssetResultList().list({ account_id: "example" })
```


### CustomPagesPreviewTokenResult

Create an instance: `const custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `act` | `string` | The preview action type. |
| `target` | `string` | The target custom page type to preview (e.g. |
| `url` | `string` | The URL of the custom page content to preview. |

#### Example: Create

```ts
const custom_pages_preview_token_result = await client.CustomPagesPreviewTokenResult().create({
  account_id: 'example_account_id',
  act: 'example_act',
  target: 'example_target',
  url: 'example_url',
})
```


### ManagedTransform

Create an instance: `const managed_transform = client.ManagedTransform()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | A list of error messages. |
| `managed_request_headers` | `any[]` | The list of Managed Request Transforms. |
| `managed_response_headers` | `any[]` | The list of Managed Response Transforms. |
| `messages` | `any[]` | A list of warning messages. |
| `result` | `Record<string, any>` | A result. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const managed_transforms = await client.ManagedTransform().list({ zone_id: "example" })
```


### ObservatoryAvailability

Create an instance: `const observatory_availability = client.ObservatoryAvailability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const observatory_availability = await client.ObservatoryAvailability().load({ zone_id: 'zone_id' })
```


### ObservatoryCreateSchedule

Create an instance: `const observatory_create_schedule = client.ObservatoryCreateSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Create

```ts
const observatory_create_schedule = await client.ObservatoryCreateSchedule().create({
  id: 'example_id',
  zone_id: 'example_zone_id',
})
```


### ObservatoryPageTestResponseCollection

Create an instance: `const observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const observatory_page_test_response_collections = await client.ObservatoryPageTestResponseCollection().list({ url: "example", zone_id: "example" })
```


### ObservatoryPageTestResponseSingle

Create an instance: `const observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `any` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const observatory_page_test_response_single = await client.ObservatoryPageTestResponseSingle().load({ page_id: 'page_id', test_id: 'test_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const observatory_page_test_response_single = await client.ObservatoryPageTestResponseSingle().create({
  url: 'example_url',
  zone_id: 'example_zone_id',
})
```


### ObservatoryPagesResponseCollection

Create an instance: `const observatory_pages_response_collection = client.ObservatoryPagesResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const observatory_pages_response_collections = await client.ObservatoryPagesResponseCollection().list({ zone_id: "example" })
```


### ObservatoryScheduleResponseSingle

Create an instance: `const observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` | The test schedule. |

#### Example: Load

```ts
const observatory_schedule_response_single = await client.ObservatoryScheduleResponseSingle().load({ url: 'url', zone_id: 'zone_id' })
```


### ObservatoryTrend

Create an instance: `const observatory_trend = client.ObservatoryTrend()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const observatory_trend = await client.ObservatoryTrend().load({ url: 'url', zone_id: 'zone_id', device_type: 'device_type', metric: 'metric', region: 'region', start: 'start', tz: 'tz' })
```


### OriginCloudRegion

Create an instance: `const origin_cloud_region = client.OriginCloudRegion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `messages` | `any[]` |  |
| `origin_ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Cloud vendor region identifier. |
| `result` | `Record<string, any>` | Response result for a single origin cloud region mapping. |
| `result_info` | `Record<string, any>` | Pagination metadata for list responses. |
| `success` | `boolean` | Whether the API call was successful. |
| `vendor` | `string` | Cloud vendor hosting the origin. |

#### Example: Load

```ts
const origin_cloud_region = await client.OriginCloudRegion().load({ id: 'origin_cloud_region_id', zone_id: 'zone_id' })
```

#### Example: List

```ts
const origin_cloud_regions = await client.OriginCloudRegion().list({ zone_id: "example" })
```

#### Example: Create

```ts
const origin_cloud_region = await client.OriginCloudRegion().create({
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


### OriginPostQuantum

Create an instance: `const origin_post_quantum = client.OriginPostQuantum()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `value` | `string` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```ts
const origin_post_quantum = await client.OriginPostQuantum().load({ zone_id: 'zone_id' })
```


### Schedule

Create an instance: `const schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SmartShield

Create an instance: `const smart_shield = client.SmartShield()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `Record<string, any>` |  |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `regional_tiered_cache` | `Record<string, any>` |  |
| `result` | `Record<string, any>` |  |
| `smart_routing` | `Record<string, any>` |  |
| `smart_tiered_cache` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const smart_shields = await client.SmartShield().list({ zone_id: "example" })
```


### SmartTieredCache

Create an instance: `const smart_tiered_cache = client.SmartTieredCache()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `value` | `string` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```ts
const smart_tiered_cache = await client.SmartTieredCache().load({ zone_id: 'zone_id' })
```

#### Example: Create

```ts
const smart_tiered_cache = await client.SmartTieredCache().create({
  zone_id: 'example_zone_id',
  value: 'example_value',
})
```


### SmartshieldResponseCollection

Create an instance: `const smartshield_response_collection = client.SmartshieldResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const smartshield_response_collections = await client.SmartshieldResponseCollection().list({ zone_id: "example" })
```


### SmartshieldSingleHc

Create an instance: `const smartshield_single_hc = client.SmartshieldSingleHc()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `any[]` | A list of regions from which to run health checks. |
| `consecutive_fails` | `number` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `number` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | A human-readable description of the health check. |
| `http_config` | `Record<string, any>` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `number` | The interval between each health check. |
| `name` | `string` | A short name to identify the health check. |
| `result` | `Record<string, any>` |  |
| `retries` | `number` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `boolean` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `Record<string, any>` | Parameters specific to TCP health check. |
| `timeout` | `number` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | The protocol to use for the health check. |

#### Example: Load

```ts
const smartshield_single_hc = await client.SmartshieldSingleHc().load({ healthcheck_id: 'healthcheck_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const smartshield_single_hc = await client.SmartshieldSingleHc().create({
  zone_id: 'example_zone_id',
  address: 'example_address',
  name: 'example_name',
})
```


### SmartshieldSingleHcId

Create an instance: `const smartshield_single_hc_id = client.SmartshieldSingleHcId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Test

Create an instance: `const test = client.Test()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TieredCaching

Create an instance: `const tiered_caching = client.TieredCaching()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `value` | `string` | Enables Tiered Caching. |

#### Example: Load

```ts
const tiered_caching = await client.TieredCaching().load({ zone_id: 'zone_id' })
```


### UrlNormalization

Create an instance: `const url_normalization = client.UrlNormalization()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | A list of error messages. |
| `messages` | `any[]` | A list of warning messages. |
| `result` | `Record<string, any>` | A result. |
| `scope` | `string` | The scope of the URL normalization. |
| `success` | `boolean` | Whether the API call was successful. |
| `type` | `string` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```ts
const url_normalizations = await client.UrlNormalization().list({ zone_id: "example" })
```


### ZoneCacheSetting

Create an instance: `const zone_cache_setting = client.ZoneCacheSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `string` | Value of the Cache Reserve zone setting. |

#### Example: Load

```ts
const zone_cache_setting = await client.ZoneCacheSetting().load({ zone_id: 'zone_id' })
```

#### Example: List

```ts
const zone_cache_settings = await client.ZoneCacheSetting().list({ zone_id: "example" })
```

#### Example: Create

```ts
const zone_cache_setting = await client.ZoneCacheSetting().create({
  zone_id: 'example_zone_id',
  errors: [],
  messages: [],
  success: true,
  value: 'example_value',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

4 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `managed_transform` | `result` | 5 | 0 levels |
| `url_normalization` | `result` | 5 | 0 levels |
| `cache_reserve_clear` | `result` | 3 | 0 levels |
| `smart_shield` | `result` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-application-delivery/
├── src/
│   ├── CloudflareApplicationDeliverySDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareApplicationDeliverySDK } from '@voxgig-sdk/cloudflare-application-delivery-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const originpostquantum = client.OriginPostQuantum()
await originpostquantum.load({ zone_id: "example" })

// originpostquantum.data() now returns the originpostquantum data from the last `load`
// originpostquantum.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
