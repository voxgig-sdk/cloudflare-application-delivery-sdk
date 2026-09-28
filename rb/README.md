# CloudflareApplicationDelivery Ruby SDK



The Ruby SDK for the CloudflareApplicationDelivery API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ArgoConfigApiResponseSingle` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "CloudflareApplicationDelivery_sdk"

client = CloudflareApplicationDeliverySDK.new({
  "apikey" => ENV["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
})
```

### 2. List argoconfigapiresponsesingle records

```ruby
begin
  # list returns an Array of ArgoConfigApiResponseSingle records — iterate directly.
  argoconfigapiresponsesingles = client.ArgoConfigApiResponseSingle.list
  argoconfigapiresponsesingles.each do |item|
    puts "#{item["errors"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an observatorypagetestresponsesingle

ObservatoryPageTestResponseSingle is nested under page, so provide the `page_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the ObservatoryPageTestResponseSingle record (raises on error).
  observatorypagetestresponsesingle = client.ObservatoryPageTestResponseSingle.load({ "page_id" => "example_page_id", "test_id" => "example_test_id", "zone_id" => "example_zone_id" })
  puts observatorypagetestresponsesingle
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# Update
client.ArgoConfigApiResponseSingle.update({ "zone_id" => "example_zone_id", "errors" => [] })

```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  originpostquantum = client.OriginPostQuantum.load({ "zone_id" => "example" })
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = CloudflareApplicationDeliverySDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
originpostquantum = client.OriginPostQuantum.load({ "zone_id" => "example" })
puts originpostquantum
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = CloudflareApplicationDeliverySDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### CloudflareApplicationDeliverySDK

```ruby
require_relative "CloudflareApplicationDelivery_sdk"
client = CloudflareApplicationDeliverySDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = CloudflareApplicationDeliverySDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareApplicationDeliverySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `CloudflareApplicationDeliveryError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

Create an instance: `argo_config_api_response_single = client.ArgoConfigApiResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Describes a successful API response. |
| `value` | `String` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```ruby
# list returns an Array of ArgoConfigApiResponseSingle records (raises on error).
argo_config_api_response_singles = client.ArgoConfigApiResponseSingle.list
```


### CachePurgeApiResponseSingleId

Create an instance: `cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Indicates the API call's success or failure. |

#### Example: Create

```ruby
cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### CacheReserveClear

Create an instance: `cache_reserve_clear = client.CacheReserveClear`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of CacheReserveClear records (raises on error).
cache_reserve_clears = client.CacheReserveClear.list
```

#### Example: Create

```ruby
cache_reserve_clear = client.CacheReserveClear.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "result" => {}, # Hash
  "success" => true, # Boolean
})
```


### CustomAssetsForAZone

Create an instance: `custom_assets_for_a_zone = client.CustomAssetsForAZone`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `custom_assets_for_an_account = client.CustomAssetsForAnAccount`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomPage

Create an instance: `custom_page = client.CustomPage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `String` |  |
| `description` | `String` |  |
| `id` | `String` |  |
| `modified_on` | `String` |  |
| `preview_target` | `String` |  |
| `required_tokens` | `Array` |  |
| `result` | `Hash` |  |
| `state` | `String` | The custom page state. |
| `url` | `String` | The URL associated with the custom page. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomPage record (raises on error).
custom_page = client.CustomPage.load({ "id" => "custom_page_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomPage records (raises on error).
custom_pages = client.CustomPage.list
```


### CustomPagesCustomAssetResult

Create an instance: `custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | A short description of the custom asset. |
| `name` | `String` | The unique name of the custom asset. |
| `result` | `Hash` |  |
| `url` | `String` | The URL where the asset content is fetched from. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomPagesCustomAssetResult record (raises on error).
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult.load({ "asset_name" => "asset_name" })
```

#### Example: Create

```ruby
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult.create({
  "account_id" => "example_account_id", # String
  "description" => "example_description", # String
  "name" => "example_name", # String
  "url" => "example_url", # String
})
```


### CustomPagesCustomAssetResultList

Create an instance: `custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of CustomPagesCustomAssetResultList records (raises on error).
custom_pages_custom_asset_result_lists = client.CustomPagesCustomAssetResultList.list
```


### CustomPagesPreviewTokenResult

Create an instance: `custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `act` | `String` | The preview action type. |
| `target` | `String` | The target custom page type to preview (e.g. |
| `url` | `String` | The URL of the custom page content to preview. |

#### Example: Create

```ruby
custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult.create({
  "account_id" => "example_account_id", # String
  "act" => "example_act", # String
  "target" => "example_target", # String
  "url" => "example_url", # String
})
```


### ManagedTransform

Create an instance: `managed_transform = client.ManagedTransform`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | A list of error messages. |
| `managed_request_headers` | `Array` | The list of Managed Request Transforms. |
| `managed_response_headers` | `Array` | The list of Managed Response Transforms. |
| `messages` | `Array` | A list of warning messages. |
| `result` | `Hash` | A result. |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of ManagedTransform records (raises on error).
managed_transforms = client.ManagedTransform.list
```


### ObservatoryAvailability

Create an instance: `observatory_availability = client.ObservatoryAvailability`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ObservatoryAvailability record (raises on error).
observatory_availability = client.ObservatoryAvailability.load({ "zone_id" => "zone_id" })
```


### ObservatoryCreateSchedule

Create an instance: `observatory_create_schedule = client.ObservatoryCreateSchedule`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |
| `result` | `Hash` |  |

#### Example: Create

```ruby
observatory_create_schedule = client.ObservatoryCreateSchedule.create({
  "id" => "example_id", # String
  "zone_id" => "example_zone_id", # String
})
```


### ObservatoryPageTestResponseCollection

Create an instance: `observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |
| `result_info` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of ObservatoryPageTestResponseCollection records (raises on error).
observatory_page_test_response_collections = client.ObservatoryPageTestResponseCollection.list
```


### ObservatoryPageTestResponseSingle

Create an instance: `observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `Object` |  |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ObservatoryPageTestResponseSingle record (raises on error).
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle.load({ "page_id" => "page_id", "test_id" => "test_id", "zone_id" => "zone_id" })
```

#### Example: Create

```ruby
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle.create({
  "url" => "example_url", # String
  "zone_id" => "example_zone_id", # String
})
```


### ObservatoryPagesResponseCollection

Create an instance: `observatory_pages_response_collection = client.ObservatoryPagesResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of ObservatoryPagesResponseCollection records (raises on error).
observatory_pages_response_collections = client.ObservatoryPagesResponseCollection.list
```


### ObservatoryScheduleResponseSingle

Create an instance: `observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` | The test schedule. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ObservatoryScheduleResponseSingle record (raises on error).
observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle.load({ "url" => "url", "zone_id" => "zone_id" })
```


### ObservatoryTrend

Create an instance: `observatory_trend = client.ObservatoryTrend`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ObservatoryTrend record (raises on error).
observatory_trend = client.ObservatoryTrend.load({ "url" => "url", "zone_id" => "zone_id", "device_type" => "device_type", "metric" => "metric", "region" => "region", "start" => "start", "tz" => "tz" })
```


### OriginCloudRegion

Create an instance: `origin_cloud_region = client.OriginCloudRegion`

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
| `errors` | `Array` |  |
| `id` | `String` |  |
| `ip` | `String` | Origin IP address (IPv4 or IPv6). |
| `messages` | `Array` |  |
| `origin_ip` | `String` | Origin IP address (IPv4 or IPv6). |
| `region` | `String` | Cloud vendor region identifier. |
| `result` | `Hash` | Response result for a single origin cloud region mapping. |
| `result_info` | `Hash` | Pagination metadata for list responses. |
| `success` | `Boolean` | Whether the API call was successful. |
| `vendor` | `String` | Cloud vendor hosting the origin. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OriginCloudRegion record (raises on error).
origin_cloud_region = client.OriginCloudRegion.load({ "id" => "origin_cloud_region_id", "zone_id" => "zone_id" })
```

#### Example: List

```ruby
# list returns an Array of OriginCloudRegion records (raises on error).
origin_cloud_regions = client.OriginCloudRegion.list
```

#### Example: Create

```ruby
origin_cloud_region = client.OriginCloudRegion.create({
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


### OriginPostQuantum

Create an instance: `origin_post_quantum = client.OriginPostQuantum`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |
| `value` | `String` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OriginPostQuantum record (raises on error).
origin_post_quantum = client.OriginPostQuantum.load({ "zone_id" => "zone_id" })
```


### Schedule

Create an instance: `schedule = client.Schedule`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |


### SmartShield

Create an instance: `smart_shield = client.SmartShield`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `Hash` |  |
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `regional_tiered_cache` | `Hash` |  |
| `result` | `Hash` |  |
| `smart_routing` | `Hash` |  |
| `smart_tiered_cache` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |

#### Example: List

```ruby
# list returns an Array of SmartShield records (raises on error).
smart_shields = client.SmartShield.list
```


### SmartTieredCache

Create an instance: `smart_tiered_cache = client.SmartTieredCache`

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
| `result` | `Hash` |  |
| `value` | `String` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SmartTieredCache record (raises on error).
smart_tiered_cache = client.SmartTieredCache.load({ "zone_id" => "zone_id" })
```

#### Example: Create

```ruby
smart_tiered_cache = client.SmartTieredCache.create({
  "zone_id" => "example_zone_id", # String
  "value" => "example_value", # String
})
```


### SmartshieldResponseCollection

Create an instance: `smartshield_response_collection = client.SmartshieldResponseCollection`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of SmartshieldResponseCollection records (raises on error).
smartshield_response_collections = client.SmartshieldResponseCollection.list
```


### SmartshieldSingleHc

Create an instance: `smartshield_single_hc = client.SmartshieldSingleHc`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `Array` | A list of regions from which to run health checks. |
| `consecutive_fails` | `Integer` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `Integer` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `String` | A human-readable description of the health check. |
| `http_config` | `Hash` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `Integer` | The interval between each health check. |
| `name` | `String` | A short name to identify the health check. |
| `result` | `Hash` |  |
| `retries` | `Integer` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `Boolean` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `Hash` | Parameters specific to TCP health check. |
| `timeout` | `Integer` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `String` | The protocol to use for the health check. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the SmartshieldSingleHc record (raises on error).
smartshield_single_hc = client.SmartshieldSingleHc.load({ "healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id" })
```

#### Example: Create

```ruby
smartshield_single_hc = client.SmartshieldSingleHc.create({
  "zone_id" => "example_zone_id", # String
  "address" => "example_address", # String
  "name" => "example_name", # String
})
```


### SmartshieldSingleHcId

Create an instance: `smartshield_single_hc_id = client.SmartshieldSingleHcId`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Test

Create an instance: `test = client.Test`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TieredCaching

Create an instance: `tiered_caching = client.TieredCaching`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Hash` |  |
| `value` | `String` | Enables Tiered Caching. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the TieredCaching record (raises on error).
tiered_caching = client.TieredCaching.load({ "zone_id" => "zone_id" })
```


### UrlNormalization

Create an instance: `url_normalization = client.UrlNormalization`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `Array` | A list of error messages. |
| `messages` | `Array` | A list of warning messages. |
| `result` | `Hash` | A result. |
| `scope` | `String` | The scope of the URL normalization. |
| `success` | `Boolean` | Whether the API call was successful. |
| `type` | `String` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```ruby
# list returns an Array of UrlNormalization records (raises on error).
url_normalizations = client.UrlNormalization.list
```


### ZoneCacheSetting

Create an instance: `zone_cache_setting = client.ZoneCacheSetting`

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
| `errors` | `Array` |  |
| `messages` | `Array` |  |
| `result` | `Hash` |  |
| `success` | `Boolean` | Whether the API call was successful. |
| `value` | `String` | Value of the Cache Reserve zone setting. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ZoneCacheSetting record (raises on error).
zone_cache_setting = client.ZoneCacheSetting.load({ "zone_id" => "zone_id" })
```

#### Example: List

```ruby
# list returns an Array of ZoneCacheSetting records (raises on error).
zone_cache_settings = client.ZoneCacheSetting.list
```

#### Example: Create

```ruby
zone_cache_setting = client.ZoneCacheSetting.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
  "value" => "example_value", # String
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

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── CloudflareApplicationDelivery_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`CloudflareApplicationDelivery_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
originpostquantum = client.OriginPostQuantum
originpostquantum.load({ "zone_id" => "example" })

# originpostquantum.data_get now returns the originpostquantum data from the last load
# originpostquantum.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
