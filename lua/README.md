# CloudflareApplicationDelivery Lua SDK



The Lua SDK for the CloudflareApplicationDelivery API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:ArgoConfigApiResponseSingle()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-application-delivery_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"),
})
```

### 2. List argoconfigapiresponsesingle records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local argoconfigapiresponsesingles, err = client:ArgoConfigApiResponseSingle():list()
if err then error(err) end

for _, item in ipairs(argoconfigapiresponsesingles) do
  print(item)
end
```

### 3. Load an observatorypagetestresponsesingle

ObservatoryPageTestResponseSingle is nested under page, so provide the `page_id`.

```lua
local observatorypagetestresponsesingle, err = client:ObservatoryPageTestResponseSingle():load({ page_id = "example_page_id", test_id = "example_test_id", zone_id = "example_zone_id" })
if err then error(err) end
print(observatorypagetestresponsesingle)
```

### 4. Create, update, and remove

```lua
-- Update
client:ArgoConfigApiResponseSingle():update({ zone_id = "example_zone_id", errors = {} })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local originpostquantum, err = client:OriginPostQuantum():load({ zone_id = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:OriginPostQuantum():load({ zone_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### CloudflareApplicationDeliverySDK

```lua
local sdk = require("cloudflare-application-delivery_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareApplicationDeliverySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `ArgoConfigApiResponseSingle` | `(data) -> ArgoConfigApiResponseSingleEntity` | Create an ArgoConfigApiResponseSingle entity instance. |
| `CachePurgeApiResponseSingleId` | `(data) -> CachePurgeApiResponseSingleIdEntity` | Create a CachePurgeApiResponseSingleId entity instance. |
| `CacheReserveClear` | `(data) -> CacheReserveClearEntity` | Create a CacheReserveClear entity instance. |
| `CustomAssetsForAZone` | `(data) -> CustomAssetsForAZoneEntity` | Create a CustomAssetsForAZone entity instance. |
| `CustomAssetsForAnAccount` | `(data) -> CustomAssetsForAnAccountEntity` | Create a CustomAssetsForAnAccount entity instance. |
| `CustomPage` | `(data) -> CustomPageEntity` | Create a CustomPage entity instance. |
| `CustomPagesCustomAssetResult` | `(data) -> CustomPagesCustomAssetResultEntity` | Create a CustomPagesCustomAssetResult entity instance. |
| `CustomPagesCustomAssetResultList` | `(data) -> CustomPagesCustomAssetResultListEntity` | Create a CustomPagesCustomAssetResultList entity instance. |
| `CustomPagesPreviewTokenResult` | `(data) -> CustomPagesPreviewTokenResultEntity` | Create a CustomPagesPreviewTokenResult entity instance. |
| `ManagedTransform` | `(data) -> ManagedTransformEntity` | Create a ManagedTransform entity instance. |
| `ObservatoryAvailability` | `(data) -> ObservatoryAvailabilityEntity` | Create an ObservatoryAvailability entity instance. |
| `ObservatoryCreateSchedule` | `(data) -> ObservatoryCreateScheduleEntity` | Create an ObservatoryCreateSchedule entity instance. |
| `ObservatoryPageTestResponseCollection` | `(data) -> ObservatoryPageTestResponseCollectionEntity` | Create an ObservatoryPageTestResponseCollection entity instance. |
| `ObservatoryPageTestResponseSingle` | `(data) -> ObservatoryPageTestResponseSingleEntity` | Create an ObservatoryPageTestResponseSingle entity instance. |
| `ObservatoryPagesResponseCollection` | `(data) -> ObservatoryPagesResponseCollectionEntity` | Create an ObservatoryPagesResponseCollection entity instance. |
| `ObservatoryScheduleResponseSingle` | `(data) -> ObservatoryScheduleResponseSingleEntity` | Create an ObservatoryScheduleResponseSingle entity instance. |
| `ObservatoryTrend` | `(data) -> ObservatoryTrendEntity` | Create an ObservatoryTrend entity instance. |
| `OriginCloudRegion` | `(data) -> OriginCloudRegionEntity` | Create an OriginCloudRegion entity instance. |
| `OriginPostQuantum` | `(data) -> OriginPostQuantumEntity` | Create an OriginPostQuantum entity instance. |
| `Schedule` | `(data) -> ScheduleEntity` | Create a Schedule entity instance. |
| `SmartShield` | `(data) -> SmartShieldEntity` | Create a SmartShield entity instance. |
| `SmartTieredCache` | `(data) -> SmartTieredCacheEntity` | Create a SmartTieredCache entity instance. |
| `SmartshieldResponseCollection` | `(data) -> SmartshieldResponseCollectionEntity` | Create a SmartshieldResponseCollection entity instance. |
| `SmartshieldSingleHc` | `(data) -> SmartshieldSingleHcEntity` | Create a SmartshieldSingleHc entity instance. |
| `SmartshieldSingleHcId` | `(data) -> SmartshieldSingleHcIdEntity` | Create a SmartshieldSingleHcId entity instance. |
| `Test` | `(data) -> TestEntity` | Create a Test entity instance. |
| `TieredCaching` | `(data) -> TieredCachingEntity` | Create a TieredCaching entity instance. |
| `UrlNormalization` | `(data) -> UrlNormalizationEntity` | Create an UrlNormalization entity instance. |
| `ZoneCacheSetting` | `(data) -> ZoneCacheSettingEntity` | Create a ZoneCacheSetting entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local custom_page, err = client:CustomPage():load({ id = "example_id" })
    if err then error(err) end
    -- custom_page is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### ArgoConfigApiResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Describes a successful API response. |
| `value` | Specifies the enablement value of Argo Smart Routing. |

Operations: List, Update.

API path: `/zones/{zone_id}/argo/smart_routing`

#### CachePurgeApiResponseSingleId

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: Create.

API path: `/zones/{zone_id}/purge_cache`

#### CacheReserveClear

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, List.

API path: `/zones/{zone_id}/smart_shield/cache_reserve_clear`

#### CustomAssetsForAZone

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/custom_pages/assets/{asset_name}`

#### CustomAssetsForAnAccount

| Field | Description |
| --- | --- |

Operations: Remove.

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

Operations: List, Load, Update.

API path: `/accounts/{account_id}/custom_pages`

#### CustomPagesCustomAssetResult

| Field | Description |
| --- | --- |
| `description` | A short description of the custom asset. |
| `name` | The unique name of the custom asset. |
| `result` |  |
| `url` | The URL where the asset content is fetched from. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesCustomAssetResultList

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesPreviewTokenResult

| Field | Description |
| --- | --- |
| `act` | The preview action type. |
| `target` | The target custom page type to preview (e.g. |
| `url` | The URL of the custom page content to preview. |

Operations: Create.

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

Operations: List, Remove, Update.

API path: `/zones/{zone_id}/managed_headers`

#### ObservatoryAvailability

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/zones/{zone_id}/speed_api/availabilities`

#### ObservatoryCreateSchedule

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: Create.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryPageTestResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: List.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPageTestResponseSingle

| Field | Description |
| --- | --- |
| `region` |  |
| `result` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPagesResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/speed_api/pages`

#### ObservatoryScheduleResponseSingle

| Field | Description |
| --- | --- |
| `result` | The test schedule. |

Operations: Load.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryTrend

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

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

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/zones/{zone_id}/cache/origin_cloud_regions`

#### OriginPostQuantum

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Value of the Origin Post Quantum Encryption Setting. |

Operations: Load, Update.

API path: `/zones/{zone_id}/cache/origin_post_quantum_encryption`

#### Schedule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: List, Update.

API path: `/zones/{zone_id}/smart_shield`

#### SmartTieredCache

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Enable or disable the Smart Tiered Cache. |

Operations: Create, Load, Remove, Update.

API path: `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`

#### SmartshieldResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Patch, Update.

API path: `/zones/{zone_id}/smart_shield/healthchecks`

#### SmartshieldSingleHcId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}`

#### Test

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### TieredCaching

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | Enables Tiered Caching. |

Operations: Load, Update.

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

Operations: List, Remove, Update.

API path: `/zones/{zone_id}/url_normalization`

#### ZoneCacheSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `value` | Value of the Cache Reserve zone setting. |

Operations: Create, List, Load, Remove, Update.

API path: `/zones/{zone_id}/cache/cache_reserve_clear`



## Entities


### ArgoConfigApiResponseSingle

Create an instance: `local argo_config_api_response_single = client:ArgoConfigApiResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Describes a successful API response. |
| `value` | `string` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```lua
local argo_config_api_response_singles, err = client:ArgoConfigApiResponseSingle():list()
```


### CachePurgeApiResponseSingleId

Create an instance: `local cache_purge_api_response_single_id = client:CachePurgeApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: Create

```lua
local cache_purge_api_response_single_id, err = client:CachePurgeApiResponseSingleId():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### CacheReserveClear

Create an instance: `local cache_reserve_clear = client:CacheReserveClear(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local cache_reserve_clears, err = client:CacheReserveClear():list()
```

#### Example: Create

```lua
local cache_reserve_clear, err = client:CacheReserveClear():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  success = true, -- boolean
})
```


### CustomAssetsForAZone

Create an instance: `local custom_assets_for_a_zone = client:CustomAssetsForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `local custom_assets_for_an_account = client:CustomAssetsForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomPage

Create an instance: `local custom_page = client:CustomPage(nil)`

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
| `required_tokens` | `table` |  |
| `result` | `table` |  |
| `state` | `string` | The custom page state. |
| `url` | `string` | The URL associated with the custom page. |

#### Example: Load

```lua
local custom_page, err = client:CustomPage():load({ id = "custom_page_id" })
```

#### Example: List

```lua
local custom_pages, err = client:CustomPage():list()
```


### CustomPagesCustomAssetResult

Create an instance: `local custom_pages_custom_asset_result = client:CustomPagesCustomAssetResult(nil)`

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
| `result` | `table` |  |
| `url` | `string` | The URL where the asset content is fetched from. |

#### Example: Load

```lua
local custom_pages_custom_asset_result, err = client:CustomPagesCustomAssetResult():load({ asset_name = "asset_name" })
```

#### Example: Create

```lua
local custom_pages_custom_asset_result, err = client:CustomPagesCustomAssetResult():create({
  account_id = "example_account_id", -- string
  description = "example_description", -- string
  name = "example_name", -- string
  url = "example_url", -- string
})
```


### CustomPagesCustomAssetResultList

Create an instance: `local custom_pages_custom_asset_result_list = client:CustomPagesCustomAssetResultList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local custom_pages_custom_asset_result_lists, err = client:CustomPagesCustomAssetResultList():list()
```


### CustomPagesPreviewTokenResult

Create an instance: `local custom_pages_preview_token_result = client:CustomPagesPreviewTokenResult(nil)`

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

```lua
local custom_pages_preview_token_result, err = client:CustomPagesPreviewTokenResult():create({
  account_id = "example_account_id", -- string
  act = "example_act", -- string
  target = "example_target", -- string
  url = "example_url", -- string
})
```


### ManagedTransform

Create an instance: `local managed_transform = client:ManagedTransform(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | A list of error messages. |
| `managed_request_headers` | `table` | The list of Managed Request Transforms. |
| `managed_response_headers` | `table` | The list of Managed Response Transforms. |
| `messages` | `table` | A list of warning messages. |
| `result` | `table` | A result. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local managed_transforms, err = client:ManagedTransform():list()
```


### ObservatoryAvailability

Create an instance: `local observatory_availability = client:ObservatoryAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local observatory_availability, err = client:ObservatoryAvailability():load({ zone_id = "zone_id" })
```


### ObservatoryCreateSchedule

Create an instance: `local observatory_create_schedule = client:ObservatoryCreateSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Create

```lua
local observatory_create_schedule, err = client:ObservatoryCreateSchedule():create({
  id = "example_id", -- string
  zone_id = "example_zone_id", -- string
})
```


### ObservatoryPageTestResponseCollection

Create an instance: `local observatory_page_test_response_collection = client:ObservatoryPageTestResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: List

```lua
local observatory_page_test_response_collections, err = client:ObservatoryPageTestResponseCollection():list()
```


### ObservatoryPageTestResponseSingle

Create an instance: `local observatory_page_test_response_single = client:ObservatoryPageTestResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `any` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local observatory_page_test_response_single, err = client:ObservatoryPageTestResponseSingle():load({ page_id = "page_id", test_id = "test_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local observatory_page_test_response_single, err = client:ObservatoryPageTestResponseSingle():create({
  url = "example_url", -- string
  zone_id = "example_zone_id", -- string
})
```


### ObservatoryPagesResponseCollection

Create an instance: `local observatory_pages_response_collection = client:ObservatoryPagesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local observatory_pages_response_collections, err = client:ObservatoryPagesResponseCollection():list()
```


### ObservatoryScheduleResponseSingle

Create an instance: `local observatory_schedule_response_single = client:ObservatoryScheduleResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` | The test schedule. |

#### Example: Load

```lua
local observatory_schedule_response_single, err = client:ObservatoryScheduleResponseSingle():load({ url = "url", zone_id = "zone_id" })
```


### ObservatoryTrend

Create an instance: `local observatory_trend = client:ObservatoryTrend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local observatory_trend, err = client:ObservatoryTrend():load({ url = "url", zone_id = "zone_id", device_type = "device_type", metric = "metric", region = "region", start = "start", tz = "tz" })
```


### OriginCloudRegion

Create an instance: `local origin_cloud_region = client:OriginCloudRegion(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `messages` | `table` |  |
| `origin_ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Cloud vendor region identifier. |
| `result` | `table` | Response result for a single origin cloud region mapping. |
| `result_info` | `table` | Pagination metadata for list responses. |
| `success` | `boolean` | Whether the API call was successful. |
| `vendor` | `string` | Cloud vendor hosting the origin. |

#### Example: Load

```lua
local origin_cloud_region, err = client:OriginCloudRegion():load({ id = "origin_cloud_region_id", zone_id = "zone_id" })
```

#### Example: List

```lua
local origin_cloud_regions, err = client:OriginCloudRegion():list()
```

#### Example: Create

```lua
local origin_cloud_region, err = client:OriginCloudRegion():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  ip = "example_ip", -- string
  messages = {}, -- table
  origin_ip = "example_origin_ip", -- string
  region = "example_region", -- string
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
  vendor = "example_vendor", -- string
})
```


### OriginPostQuantum

Create an instance: `local origin_post_quantum = client:OriginPostQuantum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `value` | `string` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```lua
local origin_post_quantum, err = client:OriginPostQuantum():load({ zone_id = "zone_id" })
```


### Schedule

Create an instance: `local schedule = client:Schedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SmartShield

Create an instance: `local smart_shield = client:SmartShield(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `table` |  |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `regional_tiered_cache` | `table` |  |
| `result` | `table` |  |
| `smart_routing` | `table` |  |
| `smart_tiered_cache` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local smart_shields, err = client:SmartShield():list()
```


### SmartTieredCache

Create an instance: `local smart_tiered_cache = client:SmartTieredCache(nil)`

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
| `result` | `table` |  |
| `value` | `string` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```lua
local smart_tiered_cache, err = client:SmartTieredCache():load({ zone_id = "zone_id" })
```

#### Example: Create

```lua
local smart_tiered_cache, err = client:SmartTieredCache():create({
  zone_id = "example_zone_id", -- string
  value = "example_value", -- string
})
```


### SmartshieldResponseCollection

Create an instance: `local smartshield_response_collection = client:SmartshieldResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local smartshield_response_collections, err = client:SmartshieldResponseCollection():list()
```


### SmartshieldSingleHc

Create an instance: `local smartshield_single_hc = client:SmartshieldSingleHc(nil)`

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
| `check_regions` | `table` | A list of regions from which to run health checks. |
| `consecutive_fails` | `number` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `number` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | A human-readable description of the health check. |
| `http_config` | `table` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `number` | The interval between each health check. |
| `name` | `string` | A short name to identify the health check. |
| `result` | `table` |  |
| `retries` | `number` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `boolean` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `table` | Parameters specific to TCP health check. |
| `timeout` | `number` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | The protocol to use for the health check. |

#### Example: Load

```lua
local smartshield_single_hc, err = client:SmartshieldSingleHc():load({ healthcheck_id = "healthcheck_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local smartshield_single_hc, err = client:SmartshieldSingleHc():create({
  zone_id = "example_zone_id", -- string
  address = "example_address", -- string
  name = "example_name", -- string
})
```


### SmartshieldSingleHcId

Create an instance: `local smartshield_single_hc_id = client:SmartshieldSingleHcId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Test

Create an instance: `local test = client:Test(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TieredCaching

Create an instance: `local tiered_caching = client:TieredCaching(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `value` | `string` | Enables Tiered Caching. |

#### Example: Load

```lua
local tiered_caching, err = client:TieredCaching():load({ zone_id = "zone_id" })
```


### UrlNormalization

Create an instance: `local url_normalization = client:UrlNormalization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | A list of error messages. |
| `messages` | `table` | A list of warning messages. |
| `result` | `table` | A result. |
| `scope` | `string` | The scope of the URL normalization. |
| `success` | `boolean` | Whether the API call was successful. |
| `type` | `string` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```lua
local url_normalizations, err = client:UrlNormalization():list()
```


### ZoneCacheSetting

Create an instance: `local zone_cache_setting = client:ZoneCacheSetting(nil)`

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
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `string` | Value of the Cache Reserve zone setting. |

#### Example: Load

```lua
local zone_cache_setting, err = client:ZoneCacheSetting():load({ zone_id = "zone_id" })
```

#### Example: List

```lua
local zone_cache_settings, err = client:ZoneCacheSetting():list()
```

#### Example: Create

```lua
local zone_cache_setting, err = client:ZoneCacheSetting():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
  value = "example_value", -- string
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-application-delivery_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-application-delivery_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local originpostquantum = client:OriginPostQuantum()
originpostquantum:load({ zone_id = "example" })

-- originpostquantum:data_get() now returns the originpostquantum data from the last load
-- originpostquantum:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
