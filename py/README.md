# CloudflareApplicationDelivery Python SDK



The Python SDK for the CloudflareApplicationDelivery API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ArgoConfigApiResponseSingle()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflareapplicationdelivery_sdk import CloudflareApplicationDeliverySDK

client = CloudflareApplicationDeliverySDK({
    "apikey": os.environ.get("CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"),
})
```

### 2. List argoconfigapiresponsesingle records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    argoconfigapiresponsesingles = client.ArgoConfigApiResponseSingle().list({"zone_id": "example"})
    for argoconfigapiresponsesingle in argoconfigapiresponsesingles:
        print(argoconfigapiresponsesingle)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an observatorypagetestresponsesingle

ObservatoryPageTestResponseSingle is nested under page, so provide the `page_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    observatorypagetestresponsesingle = client.ObservatoryPageTestResponseSingle().load({"page_id": "example_page_id", "test_id": "example_test_id", "zone_id": "example_zone_id"})
    print(observatorypagetestresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Update
client.ArgoConfigApiResponseSingle().update({"zone_id": "example_zone_id", "errors": []})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    originpostquantum = client.OriginPostQuantum().load({"zone_id": "example"})
    print(originpostquantum)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareApplicationDeliverySDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
originpostquantum = client.OriginPostQuantum().load({"zone_id": "example"})
# originpostquantum contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareApplicationDeliverySDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareApplicationDeliverySDK

```python
from cloudflareapplicationdelivery_sdk import CloudflareApplicationDeliverySDK

client = CloudflareApplicationDeliverySDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareApplicationDeliverySDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareApplicationDeliverySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `argo_config_api_response_single = client.ArgoConfigApiResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Describes a successful API response. |
| `value` | `str` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```python
argo_config_api_response_singles = client.ArgoConfigApiResponseSingle().list({"zone_id": "example"})
```


### CachePurgeApiResponseSingleId

Create an instance: `cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: Create

```python
cache_purge_api_response_single_id = client.CachePurgeApiResponseSingleId().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### CacheReserveClear

Create an instance: `cache_reserve_clear = client.CacheReserveClear()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
cache_reserve_clears = client.CacheReserveClear().list({"zone_id": "example"})
```

#### Example: Create

```python
cache_reserve_clear = client.CacheReserveClear().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "result": {},  # dict
    "success": True,  # bool
})
```


### CustomAssetsForAZone

Create an instance: `custom_assets_for_a_zone = client.CustomAssetsForAZone()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `custom_assets_for_an_account = client.CustomAssetsForAnAccount()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### CustomPage

Create an instance: `custom_page = client.CustomPage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `modified_on` | `str` |  |
| `preview_target` | `str` |  |
| `required_tokens` | `list` |  |
| `result` | `dict` |  |
| `state` | `str` | The custom page state. |
| `url` | `str` | The URL associated with the custom page. |

#### Example: Load

```python
custom_page = client.CustomPage().load({"id": "custom_page_id"})
```

#### Example: List

```python
custom_pages = client.CustomPage().list({"account_id": "example"})
```


### CustomPagesCustomAssetResult

Create an instance: `custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | A short description of the custom asset. |
| `name` | `str` | The unique name of the custom asset. |
| `result` | `dict` |  |
| `url` | `str` | The URL where the asset content is fetched from. |

#### Example: Load

```python
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult().load({"asset_name": "asset_name"})
```

#### Example: Create

```python
custom_pages_custom_asset_result = client.CustomPagesCustomAssetResult().create({
    "account_id": "example_account_id",  # str
    "description": "example_description",  # str
    "name": "example_name",  # str
    "url": "example_url",  # str
})
```


### CustomPagesCustomAssetResultList

Create an instance: `custom_pages_custom_asset_result_list = client.CustomPagesCustomAssetResultList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
custom_pages_custom_asset_result_lists = client.CustomPagesCustomAssetResultList().list({"account_id": "example"})
```


### CustomPagesPreviewTokenResult

Create an instance: `custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `act` | `str` | The preview action type. |
| `target` | `str` | The target custom page type to preview (e.g. |
| `url` | `str` | The URL of the custom page content to preview. |

#### Example: Create

```python
custom_pages_preview_token_result = client.CustomPagesPreviewTokenResult().create({
    "account_id": "example_account_id",  # str
    "act": "example_act",  # str
    "target": "example_target",  # str
    "url": "example_url",  # str
})
```


### ManagedTransform

Create an instance: `managed_transform = client.ManagedTransform()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | A list of error messages. |
| `managed_request_headers` | `list` | The list of Managed Request Transforms. |
| `managed_response_headers` | `list` | The list of Managed Response Transforms. |
| `messages` | `list` | A list of warning messages. |
| `result` | `dict` | A result. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
managed_transforms = client.ManagedTransform().list({"zone_id": "example"})
```


### ObservatoryAvailability

Create an instance: `observatory_availability = client.ObservatoryAvailability()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
observatory_availability = client.ObservatoryAvailability().load({"zone_id": "zone_id"})
```


### ObservatoryCreateSchedule

Create an instance: `observatory_create_schedule = client.ObservatoryCreateSchedule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Create

```python
observatory_create_schedule = client.ObservatoryCreateSchedule().create({
    "id": "example_id",  # str
    "zone_id": "example_zone_id",  # str
})
```


### ObservatoryPageTestResponseCollection

Create an instance: `observatory_page_test_response_collection = client.ObservatoryPageTestResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `result_info` | `dict` |  |

#### Example: List

```python
observatory_page_test_response_collections = client.ObservatoryPageTestResponseCollection().list({"url": "example", "zone_id": "example"})
```


### ObservatoryPageTestResponseSingle

Create an instance: `observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `Any` |  |
| `result` | `dict` |  |

#### Example: Load

```python
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle().load({"page_id": "page_id", "test_id": "test_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
observatory_page_test_response_single = client.ObservatoryPageTestResponseSingle().create({
    "url": "example_url",  # str
    "zone_id": "example_zone_id",  # str
})
```


### ObservatoryPagesResponseCollection

Create an instance: `observatory_pages_response_collection = client.ObservatoryPagesResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
observatory_pages_response_collections = client.ObservatoryPagesResponseCollection().list({"zone_id": "example"})
```


### ObservatoryScheduleResponseSingle

Create an instance: `observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` | The test schedule. |

#### Example: Load

```python
observatory_schedule_response_single = client.ObservatoryScheduleResponseSingle().load({"url": "url", "zone_id": "zone_id"})
```


### ObservatoryTrend

Create an instance: `observatory_trend = client.ObservatoryTrend()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
observatory_trend = client.ObservatoryTrend().load({"url": "url", "zone_id": "zone_id", "device_type": "device_type", "metric": "metric", "region": "region", "start": "start", "tz": "tz"})
```


### OriginCloudRegion

Create an instance: `origin_cloud_region = client.OriginCloudRegion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `ip` | `str` | Origin IP address (IPv4 or IPv6). |
| `messages` | `list` |  |
| `origin_ip` | `str` | Origin IP address (IPv4 or IPv6). |
| `region` | `str` | Cloud vendor region identifier. |
| `result` | `dict` | Response result for a single origin cloud region mapping. |
| `result_info` | `dict` | Pagination metadata for list responses. |
| `success` | `bool` | Whether the API call was successful. |
| `vendor` | `str` | Cloud vendor hosting the origin. |

#### Example: Load

```python
origin_cloud_region = client.OriginCloudRegion().load({"id": "origin_cloud_region_id", "zone_id": "zone_id"})
```

#### Example: List

```python
origin_cloud_regions = client.OriginCloudRegion().list({"zone_id": "example"})
```

#### Example: Create

```python
origin_cloud_region = client.OriginCloudRegion().create({
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


### OriginPostQuantum

Create an instance: `origin_post_quantum = client.OriginPostQuantum()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |
| `value` | `str` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```python
origin_post_quantum = client.OriginPostQuantum().load({"zone_id": "zone_id"})
```


### Schedule

Create an instance: `schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### SmartShield

Create an instance: `smart_shield = client.SmartShield()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `dict` |  |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `regional_tiered_cache` | `dict` |  |
| `result` | `dict` |  |
| `smart_routing` | `dict` |  |
| `smart_tiered_cache` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
smart_shields = client.SmartShield().list({"zone_id": "example"})
```


### SmartTieredCache

Create an instance: `smart_tiered_cache = client.SmartTieredCache()`

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
| `result` | `dict` |  |
| `value` | `str` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```python
smart_tiered_cache = client.SmartTieredCache().load({"zone_id": "zone_id"})
```

#### Example: Create

```python
smart_tiered_cache = client.SmartTieredCache().create({
    "zone_id": "example_zone_id",  # str
    "value": "example_value",  # str
})
```


### SmartshieldResponseCollection

Create an instance: `smartshield_response_collection = client.SmartshieldResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
smartshield_response_collections = client.SmartshieldResponseCollection().list({"zone_id": "example"})
```


### SmartshieldSingleHc

Create an instance: `smartshield_single_hc = client.SmartshieldSingleHc()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `list` | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `str` | A human-readable description of the health check. |
| `http_config` | `dict` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | The interval between each health check. |
| `name` | `str` | A short name to identify the health check. |
| `result` | `dict` |  |
| `retries` | `int` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `dict` | Parameters specific to TCP health check. |
| `timeout` | `int` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `str` | The protocol to use for the health check. |

#### Example: Load

```python
smartshield_single_hc = client.SmartshieldSingleHc().load({"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
smartshield_single_hc = client.SmartshieldSingleHc().create({
    "zone_id": "example_zone_id",  # str
    "address": "example_address",  # str
    "name": "example_name",  # str
})
```


### SmartshieldSingleHcId

Create an instance: `smartshield_single_hc_id = client.SmartshieldSingleHcId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Test

Create an instance: `test = client.Test()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TieredCaching

Create an instance: `tiered_caching = client.TieredCaching()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |
| `value` | `str` | Enables Tiered Caching. |

#### Example: Load

```python
tiered_caching = client.TieredCaching().load({"zone_id": "zone_id"})
```


### UrlNormalization

Create an instance: `url_normalization = client.UrlNormalization()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | A list of error messages. |
| `messages` | `list` | A list of warning messages. |
| `result` | `dict` | A result. |
| `scope` | `str` | The scope of the URL normalization. |
| `success` | `bool` | Whether the API call was successful. |
| `type` | `str` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```python
url_normalizations = client.UrlNormalization().list({"zone_id": "example"})
```


### ZoneCacheSetting

Create an instance: `zone_cache_setting = client.ZoneCacheSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `str` | Value of the Cache Reserve zone setting. |

#### Example: Load

```python
zone_cache_setting = client.ZoneCacheSetting().load({"zone_id": "zone_id"})
```

#### Example: List

```python
zone_cache_settings = client.ZoneCacheSetting().list({"zone_id": "example"})
```

#### Example: Create

```python
zone_cache_setting = client.ZoneCacheSetting().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
    "value": "example_value",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflareapplicationdelivery_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflareapplicationdelivery_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
originpostquantum = client.OriginPostQuantum()
originpostquantum.load({"zone_id": "example"})

# originpostquantum.data_get() now returns the originpostquantum data from the last load
# originpostquantum.match_get() returns the last match criteria
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
