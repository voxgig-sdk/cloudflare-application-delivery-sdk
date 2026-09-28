# CloudflareApplicationDelivery PHP SDK



The PHP SDK for the CloudflareApplicationDelivery API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->ArgoConfigApiResponseSingle()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflareapplicationdelivery_sdk.php';

$client = new CloudflareApplicationDeliverySDK([
    "apikey" => getenv("CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"),
]);
```

### 2. List argoconfigapiresponsesingle records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $argoconfigapiresponsesingles = $client->ArgoConfigApiResponseSingle()->list();
    foreach ($argoconfigapiresponsesingles as $record) {
        $item = $record->data_get();
        echo $item["errors"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an observatorypagetestresponsesingle

ObservatoryPageTestResponseSingle is nested under page, so provide the `page_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the ObservatoryPageTestResponseSingle record (throws on error).
    $observatorypagetestresponsesingle = $client->ObservatoryPageTestResponseSingle()->load(["page_id" => "example_page_id", "test_id" => "example_test_id", "zone_id" => "example_zone_id"]);
    print_r($observatorypagetestresponsesingle->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Update
$client->ArgoConfigApiResponseSingle()->update(["zone_id" => "example_zone_id", "errors" => []]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $originpostquantum = $client->OriginPostQuantum()->load(["zone_id" => "example"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareApplicationDeliverySDK::test([
    "entity" => ["custompage" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$custompage = $client->CustomPage()->list();
print_r(array_map(fn($item) => $item->data_get(), $custompage));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareApplicationDeliverySDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE
CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareApplicationDeliverySDK

```php
require_once 'cloudflareapplicationdelivery_sdk.php';
$client = new CloudflareApplicationDeliverySDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareApplicationDeliverySDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareApplicationDeliverySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `ArgoConfigApiResponseSingle` | `($data): ArgoConfigApiResponseSingleEntity` | Create an ArgoConfigApiResponseSingle entity instance. |
| `CachePurgeApiResponseSingleId` | `($data): CachePurgeApiResponseSingleIdEntity` | Create a CachePurgeApiResponseSingleId entity instance. |
| `CacheReserveClear` | `($data): CacheReserveClearEntity` | Create a CacheReserveClear entity instance. |
| `CustomAssetsForAZone` | `($data): CustomAssetsForAZoneEntity` | Create a CustomAssetsForAZone entity instance. |
| `CustomAssetsForAnAccount` | `($data): CustomAssetsForAnAccountEntity` | Create a CustomAssetsForAnAccount entity instance. |
| `CustomPage` | `($data): CustomPageEntity` | Create a CustomPage entity instance. |
| `CustomPagesCustomAssetResult` | `($data): CustomPagesCustomAssetResultEntity` | Create a CustomPagesCustomAssetResult entity instance. |
| `CustomPagesCustomAssetResultList` | `($data): CustomPagesCustomAssetResultListEntity` | Create a CustomPagesCustomAssetResultList entity instance. |
| `CustomPagesPreviewTokenResult` | `($data): CustomPagesPreviewTokenResultEntity` | Create a CustomPagesPreviewTokenResult entity instance. |
| `ManagedTransform` | `($data): ManagedTransformEntity` | Create a ManagedTransform entity instance. |
| `ObservatoryAvailability` | `($data): ObservatoryAvailabilityEntity` | Create an ObservatoryAvailability entity instance. |
| `ObservatoryCreateSchedule` | `($data): ObservatoryCreateScheduleEntity` | Create an ObservatoryCreateSchedule entity instance. |
| `ObservatoryPageTestResponseCollection` | `($data): ObservatoryPageTestResponseCollectionEntity` | Create an ObservatoryPageTestResponseCollection entity instance. |
| `ObservatoryPageTestResponseSingle` | `($data): ObservatoryPageTestResponseSingleEntity` | Create an ObservatoryPageTestResponseSingle entity instance. |
| `ObservatoryPagesResponseCollection` | `($data): ObservatoryPagesResponseCollectionEntity` | Create an ObservatoryPagesResponseCollection entity instance. |
| `ObservatoryScheduleResponseSingle` | `($data): ObservatoryScheduleResponseSingleEntity` | Create an ObservatoryScheduleResponseSingle entity instance. |
| `ObservatoryTrend` | `($data): ObservatoryTrendEntity` | Create an ObservatoryTrend entity instance. |
| `OriginCloudRegion` | `($data): OriginCloudRegionEntity` | Create an OriginCloudRegion entity instance. |
| `OriginPostQuantum` | `($data): OriginPostQuantumEntity` | Create an OriginPostQuantum entity instance. |
| `Schedule` | `($data): ScheduleEntity` | Create a Schedule entity instance. |
| `SmartShield` | `($data): SmartShieldEntity` | Create a SmartShield entity instance. |
| `SmartTieredCache` | `($data): SmartTieredCacheEntity` | Create a SmartTieredCache entity instance. |
| `SmartshieldResponseCollection` | `($data): SmartshieldResponseCollectionEntity` | Create a SmartshieldResponseCollection entity instance. |
| `SmartshieldSingleHc` | `($data): SmartshieldSingleHcEntity` | Create a SmartshieldSingleHc entity instance. |
| `SmartshieldSingleHcId` | `($data): SmartshieldSingleHcIdEntity` | Create a SmartshieldSingleHcId entity instance. |
| `Test` | `($data): TestEntity` | Create a Test entity instance. |
| `TieredCaching` | `($data): TieredCachingEntity` | Create a TieredCaching entity instance. |
| `UrlNormalization` | `($data): UrlNormalizationEntity` | Create an UrlNormalization entity instance. |
| `ZoneCacheSetting` | `($data): ZoneCacheSettingEntity` | Create a ZoneCacheSetting entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$argo_config_api_response_single = $client->ArgoConfigApiResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Describes a successful API response. |
| `value` | `string` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```php
// list() returns an array of ArgoConfigApiResponseSingle records (throws on error).
$argo_config_api_response_singles = $client->ArgoConfigApiResponseSingle()->list();
```


### CachePurgeApiResponseSingleId

Create an instance: `$cache_purge_api_response_single_id = $client->CachePurgeApiResponseSingleId();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: Create

```php
$cache_purge_api_response_single_id = $client->CachePurgeApiResponseSingleId()->create([
    "zone_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### CacheReserveClear

Create an instance: `$cache_reserve_clear = $client->CacheReserveClear();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of CacheReserveClear records (throws on error).
$cache_reserve_clears = $client->CacheReserveClear()->list();
```

#### Example: Create

```php
$cache_reserve_clear = $client->CacheReserveClear()->create([
    "zone_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "success" => null, // bool
]);
```


### CustomAssetsForAZone

Create an instance: `$custom_assets_for_a_zone = $client->CustomAssetsForAZone();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `$custom_assets_for_an_account = $client->CustomAssetsForAnAccount();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomPage

Create an instance: `$custom_page = $client->CustomPage();`

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
| `required_tokens` | `array` |  |
| `result` | `array` |  |
| `state` | `string` | The custom page state. |
| `url` | `string` | The URL associated with the custom page. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomPage record (throws on error).
$custom_page = $client->CustomPage()->load(["id" => "custom_page_id"]);
```

#### Example: List

```php
// list() returns an array of CustomPage records (throws on error).
$custom_pages = $client->CustomPage()->list();
```


### CustomPagesCustomAssetResult

Create an instance: `$custom_pages_custom_asset_result = $client->CustomPagesCustomAssetResult();`

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
| `result` | `array` |  |
| `url` | `string` | The URL where the asset content is fetched from. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomPagesCustomAssetResult record (throws on error).
$custom_pages_custom_asset_result = $client->CustomPagesCustomAssetResult()->load(["asset_name" => "asset_name"]);
```

#### Example: Create

```php
$custom_pages_custom_asset_result = $client->CustomPagesCustomAssetResult()->create([
    "account_id" => null, // string
    "description" => null, // string
    "name" => null, // string
    "url" => null, // string
]);
```


### CustomPagesCustomAssetResultList

Create an instance: `$custom_pages_custom_asset_result_list = $client->CustomPagesCustomAssetResultList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of CustomPagesCustomAssetResultList records (throws on error).
$custom_pages_custom_asset_result_lists = $client->CustomPagesCustomAssetResultList()->list();
```


### CustomPagesPreviewTokenResult

Create an instance: `$custom_pages_preview_token_result = $client->CustomPagesPreviewTokenResult();`

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

```php
$custom_pages_preview_token_result = $client->CustomPagesPreviewTokenResult()->create([
    "account_id" => null, // string
    "act" => null, // string
    "target" => null, // string
    "url" => null, // string
]);
```


### ManagedTransform

Create an instance: `$managed_transform = $client->ManagedTransform();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` | A list of error messages. |
| `managed_request_headers` | `array` | The list of Managed Request Transforms. |
| `managed_response_headers` | `array` | The list of Managed Response Transforms. |
| `messages` | `array` | A list of warning messages. |
| `result` | `array` | A result. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ManagedTransform records (throws on error).
$managed_transforms = $client->ManagedTransform()->list();
```


### ObservatoryAvailability

Create an instance: `$observatory_availability = $client->ObservatoryAvailability();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ObservatoryAvailability record (throws on error).
$observatory_availability = $client->ObservatoryAvailability()->load(["zone_id" => "zone_id"]);
```


### ObservatoryCreateSchedule

Create an instance: `$observatory_create_schedule = $client->ObservatoryCreateSchedule();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |

#### Example: Create

```php
$observatory_create_schedule = $client->ObservatoryCreateSchedule()->create([
    "id" => null, // string
    "zone_id" => null, // string
]);
```


### ObservatoryPageTestResponseCollection

Create an instance: `$observatory_page_test_response_collection = $client->ObservatoryPageTestResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `result_info` | `array` |  |

#### Example: List

```php
// list() returns an array of ObservatoryPageTestResponseCollection records (throws on error).
$observatory_page_test_response_collections = $client->ObservatoryPageTestResponseCollection()->list();
```


### ObservatoryPageTestResponseSingle

Create an instance: `$observatory_page_test_response_single = $client->ObservatoryPageTestResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `mixed` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ObservatoryPageTestResponseSingle record (throws on error).
$observatory_page_test_response_single = $client->ObservatoryPageTestResponseSingle()->load(["page_id" => "page_id", "test_id" => "test_id", "zone_id" => "zone_id"]);
```

#### Example: Create

```php
$observatory_page_test_response_single = $client->ObservatoryPageTestResponseSingle()->create([
    "url" => null, // string
    "zone_id" => null, // string
]);
```


### ObservatoryPagesResponseCollection

Create an instance: `$observatory_pages_response_collection = $client->ObservatoryPagesResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ObservatoryPagesResponseCollection records (throws on error).
$observatory_pages_response_collections = $client->ObservatoryPagesResponseCollection()->list();
```


### ObservatoryScheduleResponseSingle

Create an instance: `$observatory_schedule_response_single = $client->ObservatoryScheduleResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` | The test schedule. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ObservatoryScheduleResponseSingle record (throws on error).
$observatory_schedule_response_single = $client->ObservatoryScheduleResponseSingle()->load(["url" => "url", "zone_id" => "zone_id"]);
```


### ObservatoryTrend

Create an instance: `$observatory_trend = $client->ObservatoryTrend();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ObservatoryTrend record (throws on error).
$observatory_trend = $client->ObservatoryTrend()->load(["url" => "url", "zone_id" => "zone_id", "device_type" => "device_type", "metric" => "metric", "region" => "region", "start" => "start", "tz" => "tz"]);
```


### OriginCloudRegion

Create an instance: `$origin_cloud_region = $client->OriginCloudRegion();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `messages` | `array` |  |
| `origin_ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Cloud vendor region identifier. |
| `result` | `array` | Response result for a single origin cloud region mapping. |
| `result_info` | `array` | Pagination metadata for list responses. |
| `success` | `bool` | Whether the API call was successful. |
| `vendor` | `string` | Cloud vendor hosting the origin. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OriginCloudRegion record (throws on error).
$origin_cloud_region = $client->OriginCloudRegion()->load(["id" => "origin_cloud_region_id", "zone_id" => "zone_id"]);
```

#### Example: List

```php
// list() returns an array of OriginCloudRegion records (throws on error).
$origin_cloud_regions = $client->OriginCloudRegion()->list();
```

#### Example: Create

```php
$origin_cloud_region = $client->OriginCloudRegion()->create([
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


### OriginPostQuantum

Create an instance: `$origin_post_quantum = $client->OriginPostQuantum();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `value` | `string` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OriginPostQuantum record (throws on error).
$origin_post_quantum = $client->OriginPostQuantum()->load(["zone_id" => "zone_id"]);
```


### Schedule

Create an instance: `$schedule = $client->Schedule();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SmartShield

Create an instance: `$smart_shield = $client->SmartShield();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `array` |  |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `regional_tiered_cache` | `array` |  |
| `result` | `array` |  |
| `smart_routing` | `array` |  |
| `smart_tiered_cache` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of SmartShield records (throws on error).
$smart_shields = $client->SmartShield()->list();
```


### SmartTieredCache

Create an instance: `$smart_tiered_cache = $client->SmartTieredCache();`

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
| `result` | `array` |  |
| `value` | `string` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SmartTieredCache record (throws on error).
$smart_tiered_cache = $client->SmartTieredCache()->load(["zone_id" => "zone_id"]);
```

#### Example: Create

```php
$smart_tiered_cache = $client->SmartTieredCache()->create([
    "zone_id" => null, // string
    "value" => null, // string
]);
```


### SmartshieldResponseCollection

Create an instance: `$smartshield_response_collection = $client->SmartshieldResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of SmartshieldResponseCollection records (throws on error).
$smartshield_response_collections = $client->SmartshieldResponseCollection()->list();
```


### SmartshieldSingleHc

Create an instance: `$smartshield_single_hc = $client->SmartshieldSingleHc();`

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
| `check_regions` | `array` | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | A human-readable description of the health check. |
| `http_config` | `array` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | The interval between each health check. |
| `name` | `string` | A short name to identify the health check. |
| `result` | `array` |  |
| `retries` | `int` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `array` | Parameters specific to TCP health check. |
| `timeout` | `int` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | The protocol to use for the health check. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SmartshieldSingleHc record (throws on error).
$smartshield_single_hc = $client->SmartshieldSingleHc()->load(["healthcheck_id" => "healthcheck_id", "zone_id" => "zone_id"]);
```

#### Example: Create

```php
$smartshield_single_hc = $client->SmartshieldSingleHc()->create([
    "zone_id" => null, // string
    "address" => null, // string
    "name" => null, // string
]);
```


### SmartshieldSingleHcId

Create an instance: `$smartshield_single_hc_id = $client->SmartshieldSingleHcId();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Test

Create an instance: `$test = $client->Test_();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TieredCaching

Create an instance: `$tiered_caching = $client->TieredCaching();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `value` | `string` | Enables Tiered Caching. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TieredCaching record (throws on error).
$tiered_caching = $client->TieredCaching()->load(["zone_id" => "zone_id"]);
```


### UrlNormalization

Create an instance: `$url_normalization = $client->UrlNormalization();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` | A list of error messages. |
| `messages` | `array` | A list of warning messages. |
| `result` | `array` | A result. |
| `scope` | `string` | The scope of the URL normalization. |
| `success` | `bool` | Whether the API call was successful. |
| `type` | `string` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```php
// list() returns an array of UrlNormalization records (throws on error).
$url_normalizations = $client->UrlNormalization()->list();
```


### ZoneCacheSetting

Create an instance: `$zone_cache_setting = $client->ZoneCacheSetting();`

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
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `string` | Value of the Cache Reserve zone setting. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZoneCacheSetting record (throws on error).
$zone_cache_setting = $client->ZoneCacheSetting()->load(["zone_id" => "zone_id"]);
```

#### Example: List

```php
// list() returns an array of ZoneCacheSetting records (throws on error).
$zone_cache_settings = $client->ZoneCacheSetting()->list();
```

#### Example: Create

```php
$zone_cache_setting = $client->ZoneCacheSetting()->create([
    "zone_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "success" => null, // bool
    "value" => null, // string
]);
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflareapplicationdelivery_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflareapplicationdelivery_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$originpostquantum = $client->OriginPostQuantum();
$originpostquantum->load(["zone_id" => "example"]);

// $originpostquantum->data_get() now returns the originpostquantum data from the last load
// $originpostquantum->match_get() returns the last match criteria
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
