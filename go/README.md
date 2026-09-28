# CloudflareApplicationDelivery Golang SDK



The Golang SDK for the CloudflareApplicationDelivery API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ArgoConfigApiResponseSingle(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-application-delivery-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go=../cloudflare-application-delivery-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go"
)

func main() {
    client := sdk.NewCloudflareApplicationDeliverySDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"),
    })

    // List argoConfigApiResponseSingle records — the value is the array of records itself.
    argoConfigApiResponseSingles, err := client.ArgoConfigApiResponseSingle(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range argoConfigApiResponseSingles.([]any) {
        fmt.Println(item)
    }

    // Update a argoConfigApiResponseSingle.
    updated, err := client.ArgoConfigApiResponseSingle(nil).Update(map[string]any{"zone_id": "example_zone_id", "errors": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
originpostquantum, err := client.OriginPostQuantum(nil).Load(map[string]any{"zone_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = originpostquantum
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

originPostQuantum, err := client.OriginPostQuantum(nil).Load(
    map[string]any{"zone_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(originPostQuantum) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareApplicationDeliverySDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareApplicationDeliverySDK

```go
func NewCloudflareApplicationDeliverySDK(options map[string]any) *CloudflareApplicationDeliverySDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareApplicationDeliverySDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareApplicationDeliverySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ArgoConfigApiResponseSingle` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ArgoConfigApiResponseSingle entity instance. |
| `CachePurgeApiResponseSingleId` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CachePurgeApiResponseSingleId entity instance. |
| `CacheReserveClear` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CacheReserveClear entity instance. |
| `CustomAssetsForAZone` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomAssetsForAZone entity instance. |
| `CustomAssetsForAnAccount` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomAssetsForAnAccount entity instance. |
| `CustomPage` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomPage entity instance. |
| `CustomPagesCustomAssetResult` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomPagesCustomAssetResult entity instance. |
| `CustomPagesCustomAssetResultList` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomPagesCustomAssetResultList entity instance. |
| `CustomPagesPreviewTokenResult` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a CustomPagesPreviewTokenResult entity instance. |
| `ManagedTransform` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a ManagedTransform entity instance. |
| `ObservatoryAvailability` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryAvailability entity instance. |
| `ObservatoryCreateSchedule` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryCreateSchedule entity instance. |
| `ObservatoryPageTestResponseCollection` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryPageTestResponseCollection entity instance. |
| `ObservatoryPageTestResponseSingle` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryPageTestResponseSingle entity instance. |
| `ObservatoryPagesResponseCollection` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryPagesResponseCollection entity instance. |
| `ObservatoryScheduleResponseSingle` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryScheduleResponseSingle entity instance. |
| `ObservatoryTrend` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an ObservatoryTrend entity instance. |
| `OriginCloudRegion` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an OriginCloudRegion entity instance. |
| `OriginPostQuantum` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an OriginPostQuantum entity instance. |
| `Schedule` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a Schedule entity instance. |
| `SmartShield` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a SmartShield entity instance. |
| `SmartTieredCache` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a SmartTieredCache entity instance. |
| `SmartshieldResponseCollection` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a SmartshieldResponseCollection entity instance. |
| `SmartshieldSingleHc` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a SmartshieldSingleHc entity instance. |
| `SmartshieldSingleHcId` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a SmartshieldSingleHcId entity instance. |
| `Test` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a Test entity instance. |
| `TieredCaching` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a TieredCaching entity instance. |
| `UrlNormalization` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create an UrlNormalization entity instance. |
| `ZoneCacheSetting` | `(data map[string]any) CloudflareApplicationDeliveryEntity` | Create a ZoneCacheSetting entity instance. |

### Entity interface (CloudflareApplicationDeliveryEntity)

All entities implement the `CloudflareApplicationDeliveryEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    argoConfigApiResponseSingle, err := client.ArgoConfigApiResponseSingle(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // argoConfigApiResponseSingle is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ArgoConfigApiResponseSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Describes a successful API response. |
| `"value"` | Specifies the enablement value of Argo Smart Routing. |

Operations: List, Update.

API path: `/zones/{zone_id}/argo/smart_routing`

#### CachePurgeApiResponseSingleId

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Indicates the API call's success or failure. |

Operations: Create.

API path: `/zones/{zone_id}/purge_cache`

#### CacheReserveClear

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

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
| `"created_on"` |  |
| `"description"` |  |
| `"id"` |  |
| `"modified_on"` |  |
| `"preview_target"` |  |
| `"required_tokens"` |  |
| `"result"` |  |
| `"state"` | The custom page state. |
| `"url"` | The URL associated with the custom page. |

Operations: List, Load, Update.

API path: `/accounts/{account_id}/custom_pages`

#### CustomPagesCustomAssetResult

| Field | Description |
| --- | --- |
| `"description"` | A short description of the custom asset. |
| `"name"` | The unique name of the custom asset. |
| `"result"` |  |
| `"url"` | The URL where the asset content is fetched from. |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesCustomAssetResultList

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/custom_pages/assets`

#### CustomPagesPreviewTokenResult

| Field | Description |
| --- | --- |
| `"act"` | The preview action type. |
| `"target"` | The target custom page type to preview (e.g. |
| `"url"` | The URL of the custom page content to preview. |

Operations: Create.

API path: `/accounts/{account_id}/custom_pages/preview_tokens`

#### ManagedTransform

| Field | Description |
| --- | --- |
| `"errors"` | A list of error messages. |
| `"managed_request_headers"` | The list of Managed Request Transforms. |
| `"managed_response_headers"` | The list of Managed Response Transforms. |
| `"messages"` | A list of warning messages. |
| `"result"` | A result. |
| `"success"` | Whether the API call was successful. |

Operations: List, Remove, Update.

API path: `/zones/{zone_id}/managed_headers`

#### ObservatoryAvailability

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/zones/{zone_id}/speed_api/availabilities`

#### ObservatoryCreateSchedule

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: Create.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryPageTestResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

Operations: List.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPageTestResponseSingle

| Field | Description |
| --- | --- |
| `"region"` |  |
| `"result"` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/speed_api/pages/{url}/tests`

#### ObservatoryPagesResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/speed_api/pages`

#### ObservatoryScheduleResponseSingle

| Field | Description |
| --- | --- |
| `"result"` | The test schedule. |

Operations: Load.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### ObservatoryTrend

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/zones/{zone_id}/speed_api/pages/{url}/trend`

#### OriginCloudRegion

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"ip"` | Origin IP address (IPv4 or IPv6). |
| `"messages"` |  |
| `"origin_ip"` | Origin IP address (IPv4 or IPv6). |
| `"region"` | Cloud vendor region identifier. |
| `"result"` | Response result for a single origin cloud region mapping. |
| `"result_info"` | Pagination metadata for list responses. |
| `"success"` | Whether the API call was successful. |
| `"vendor"` | Cloud vendor hosting the origin. |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/zones/{zone_id}/cache/origin_cloud_regions`

#### OriginPostQuantum

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"value"` | Value of the Origin Post Quantum Encryption Setting. |

Operations: Load, Update.

API path: `/zones/{zone_id}/cache/origin_post_quantum_encryption`

#### Schedule

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/zones/{zone_id}/speed_api/schedule/{url}`

#### SmartShield

| Field | Description |
| --- | --- |
| `"cache_reserve"` |  |
| `"errors"` |  |
| `"messages"` |  |
| `"regional_tiered_cache"` |  |
| `"result"` |  |
| `"smart_routing"` |  |
| `"smart_tiered_cache"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/zones/{zone_id}/smart_shield`

#### SmartTieredCache

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"value"` | Enable or disable the Smart Tiered Cache. |

Operations: Create, Load, Remove, Update.

API path: `/zones/{zone_id}/cache/tiered_cache_smart_topology_enable`

#### SmartshieldResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/smart_shield/healthchecks`

#### SmartshieldSingleHc

| Field | Description |
| --- | --- |
| `"address"` | The hostname or IP address of the origin server to run health checks on. |
| `"check_regions"` | A list of regions from which to run health checks. |
| `"consecutive_fails"` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `"consecutive_successes"` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `"description"` | A human-readable description of the health check. |
| `"http_config"` | Parameters specific to an HTTP or HTTPS health check. |
| `"interval"` | The interval between each health check. |
| `"name"` | A short name to identify the health check. |
| `"result"` |  |
| `"retries"` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `"suspended"` | If suspended, no health checks are sent to the origin. |
| `"tcp_config"` | Parameters specific to TCP health check. |
| `"timeout"` | The timeout (in seconds) before marking the health check as failed. |
| `"type"` | The protocol to use for the health check. |

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
| `"result"` |  |
| `"value"` | Enables Tiered Caching. |

Operations: Load, Update.

API path: `/zones/{zone_id}/argo/tiered_caching`

#### UrlNormalization

| Field | Description |
| --- | --- |
| `"errors"` | A list of error messages. |
| `"messages"` | A list of warning messages. |
| `"result"` | A result. |
| `"scope"` | The scope of the URL normalization. |
| `"success"` | Whether the API call was successful. |
| `"type"` | The type of URL normalization performed by Cloudflare. |

Operations: List, Remove, Update.

API path: `/zones/{zone_id}/url_normalization`

#### ZoneCacheSetting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"value"` | Value of the Cache Reserve zone setting. |

Operations: Create, List, Load, Remove, Update.

API path: `/zones/{zone_id}/cache/cache_reserve_clear`



## Entities


### ArgoConfigApiResponseSingle

Create an instance: `argoConfigApiResponseSingle := client.ArgoConfigApiResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Describes a successful API response. |
| `value` | `string` | Specifies the enablement value of Argo Smart Routing. |

#### Example: List

```go
argoConfigApiResponseSingles, err := client.ArgoConfigApiResponseSingle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(argoConfigApiResponseSingles) // the array of records
```


### CachePurgeApiResponseSingleId

Create an instance: `cachePurgeApiResponseSingleId := client.CachePurgeApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: Create

```go
result, err := client.CachePurgeApiResponseSingleId(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CacheReserveClear

Create an instance: `cacheReserveClear := client.CacheReserveClear(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
cacheReserveClears, err := client.CacheReserveClear(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cacheReserveClears) // the array of records
```

#### Example: Create

```go
result, err := client.CacheReserveClear(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "messages": []any{},
    "result": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomAssetsForAZone

Create an instance: `customAssetsForAZone := client.CustomAssetsForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CustomAssetsForAnAccount

Create an instance: `customAssetsForAnAccount := client.CustomAssetsForAnAccount(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### CustomPage

Create an instance: `customPage := client.CustomPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `modified_on` | `string` |  |
| `preview_target` | `string` |  |
| `required_tokens` | `[]any` |  |
| `result` | `map[string]any` |  |
| `state` | `string` | The custom page state. |
| `url` | `string` | The URL associated with the custom page. |

#### Example: Load

```go
customPage, err := client.CustomPage(nil).Load(map[string]any{"id": "custom_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPage) // the loaded record
```

#### Example: List

```go
customPages, err := client.CustomPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPages) // the array of records
```


### CustomPagesCustomAssetResult

Create an instance: `customPagesCustomAssetResult := client.CustomPagesCustomAssetResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A short description of the custom asset. |
| `name` | `string` | The unique name of the custom asset. |
| `result` | `map[string]any` |  |
| `url` | `string` | The URL where the asset content is fetched from. |

#### Example: Load

```go
customPagesCustomAssetResult, err := client.CustomPagesCustomAssetResult(nil).Load(map[string]any{"asset_name": "asset_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPagesCustomAssetResult) // the loaded record
```

#### Example: Create

```go
result, err := client.CustomPagesCustomAssetResult(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "description": "example_description",
    "name": "example_name",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomPagesCustomAssetResultList

Create an instance: `customPagesCustomAssetResultList := client.CustomPagesCustomAssetResultList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
customPagesCustomAssetResultLists, err := client.CustomPagesCustomAssetResultList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customPagesCustomAssetResultLists) // the array of records
```


### CustomPagesPreviewTokenResult

Create an instance: `customPagesPreviewTokenResult := client.CustomPagesPreviewTokenResult(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `act` | `string` | The preview action type. |
| `target` | `string` | The target custom page type to preview (e.g. |
| `url` | `string` | The URL of the custom page content to preview. |

#### Example: Create

```go
result, err := client.CustomPagesPreviewTokenResult(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "act": "example_act",
    "target": "example_target",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ManagedTransform

Create an instance: `managedTransform := client.ManagedTransform(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | A list of error messages. |
| `managed_request_headers` | `[]any` | The list of Managed Request Transforms. |
| `managed_response_headers` | `[]any` | The list of Managed Response Transforms. |
| `messages` | `[]any` | A list of warning messages. |
| `result` | `map[string]any` | A result. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
managedTransforms, err := client.ManagedTransform(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(managedTransforms) // the array of records
```


### ObservatoryAvailability

Create an instance: `observatoryAvailability := client.ObservatoryAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
observatoryAvailability, err := client.ObservatoryAvailability(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryAvailability) // the loaded record
```


### ObservatoryCreateSchedule

Create an instance: `observatoryCreateSchedule := client.ObservatoryCreateSchedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.ObservatoryCreateSchedule(nil).Create(map[string]any{
    "id": "example_id",
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ObservatoryPageTestResponseCollection

Create an instance: `observatoryPageTestResponseCollection := client.ObservatoryPageTestResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
observatoryPageTestResponseCollections, err := client.ObservatoryPageTestResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryPageTestResponseCollections) // the array of records
```


### ObservatoryPageTestResponseSingle

Create an instance: `observatoryPageTestResponseSingle := client.ObservatoryPageTestResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `region` | `any` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
observatoryPageTestResponseSingle, err := client.ObservatoryPageTestResponseSingle(nil).Load(map[string]any{"page_id": "page_id", "test_id": "test_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryPageTestResponseSingle) // the loaded record
```

#### Example: Create

```go
result, err := client.ObservatoryPageTestResponseSingle(nil).Create(map[string]any{
    "url": "example_url",
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ObservatoryPagesResponseCollection

Create an instance: `observatoryPagesResponseCollection := client.ObservatoryPagesResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
observatoryPagesResponseCollections, err := client.ObservatoryPagesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryPagesResponseCollections) // the array of records
```


### ObservatoryScheduleResponseSingle

Create an instance: `observatoryScheduleResponseSingle := client.ObservatoryScheduleResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` | The test schedule. |

#### Example: Load

```go
observatoryScheduleResponseSingle, err := client.ObservatoryScheduleResponseSingle(nil).Load(map[string]any{"url": "url", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryScheduleResponseSingle) // the loaded record
```


### ObservatoryTrend

Create an instance: `observatoryTrend := client.ObservatoryTrend(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
observatoryTrend, err := client.ObservatoryTrend(nil).Load(map[string]any{"url": "url", "zone_id": "zone_id", "device_type": "device_type", "metric": "metric", "region": "region", "start": "start", "tz": "tz"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(observatoryTrend) // the loaded record
```


### OriginCloudRegion

Create an instance: `originCloudRegion := client.OriginCloudRegion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `messages` | `[]any` |  |
| `origin_ip` | `string` | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Cloud vendor region identifier. |
| `result` | `map[string]any` | Response result for a single origin cloud region mapping. |
| `result_info` | `map[string]any` | Pagination metadata for list responses. |
| `success` | `bool` | Whether the API call was successful. |
| `vendor` | `string` | Cloud vendor hosting the origin. |

#### Example: Load

```go
originCloudRegion, err := client.OriginCloudRegion(nil).Load(map[string]any{"id": "origin_cloud_region_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(originCloudRegion) // the loaded record
```

#### Example: List

```go
originCloudRegions, err := client.OriginCloudRegion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(originCloudRegions) // the array of records
```

#### Example: Create

```go
result, err := client.OriginCloudRegion(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "ip": "example_ip",
    "messages": []any{},
    "origin_ip": "example_origin_ip",
    "region": "example_region",
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
    "vendor": "example_vendor",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### OriginPostQuantum

Create an instance: `originPostQuantum := client.OriginPostQuantum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `value` | `string` | Value of the Origin Post Quantum Encryption Setting. |

#### Example: Load

```go
originPostQuantum, err := client.OriginPostQuantum(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(originPostQuantum) // the loaded record
```


### Schedule

Create an instance: `schedule := client.Schedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### SmartShield

Create an instance: `smartShield := client.SmartShield(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_reserve` | `map[string]any` |  |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `regional_tiered_cache` | `map[string]any` |  |
| `result` | `map[string]any` |  |
| `smart_routing` | `map[string]any` |  |
| `smart_tiered_cache` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
smartShields, err := client.SmartShield(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(smartShields) // the array of records
```


### SmartTieredCache

Create an instance: `smartTieredCache := client.SmartTieredCache(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `value` | `string` | Enable or disable the Smart Tiered Cache. |

#### Example: Load

```go
smartTieredCache, err := client.SmartTieredCache(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(smartTieredCache) // the loaded record
```

#### Example: Create

```go
result, err := client.SmartTieredCache(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SmartshieldResponseCollection

Create an instance: `smartshieldResponseCollection := client.SmartshieldResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
smartshieldResponseCollections, err := client.SmartshieldResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(smartshieldResponseCollections) // the array of records
```


### SmartshieldSingleHc

Create an instance: `smartshieldSingleHc := client.SmartshieldSingleHc(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `[]any` | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | A human-readable description of the health check. |
| `http_config` | `map[string]any` | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | The interval between each health check. |
| `name` | `string` | A short name to identify the health check. |
| `result` | `map[string]any` |  |
| `retries` | `int` | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `map[string]any` | Parameters specific to TCP health check. |
| `timeout` | `int` | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | The protocol to use for the health check. |

#### Example: Load

```go
smartshieldSingleHc, err := client.SmartshieldSingleHc(nil).Load(map[string]any{"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(smartshieldSingleHc) // the loaded record
```

#### Example: Create

```go
result, err := client.SmartshieldSingleHc(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "address": "example_address",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SmartshieldSingleHcId

Create an instance: `smartshieldSingleHcId := client.SmartshieldSingleHcId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Test

Create an instance: `test := client.Test(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TieredCaching

Create an instance: `tieredCaching := client.TieredCaching(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `value` | `string` | Enables Tiered Caching. |

#### Example: Load

```go
tieredCaching, err := client.TieredCaching(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tieredCaching) // the loaded record
```


### UrlNormalization

Create an instance: `urlNormalization := client.UrlNormalization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | A list of error messages. |
| `messages` | `[]any` | A list of warning messages. |
| `result` | `map[string]any` | A result. |
| `scope` | `string` | The scope of the URL normalization. |
| `success` | `bool` | Whether the API call was successful. |
| `type` | `string` | The type of URL normalization performed by Cloudflare. |

#### Example: List

```go
urlNormalizations, err := client.UrlNormalization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(urlNormalizations) // the array of records
```


### ZoneCacheSetting

Create an instance: `zoneCacheSetting := client.ZoneCacheSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `string` | Value of the Cache Reserve zone setting. |

#### Example: Load

```go
zoneCacheSetting, err := client.ZoneCacheSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneCacheSetting) // the loaded record
```

#### Example: List

```go
zoneCacheSettings, err := client.ZoneCacheSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneCacheSettings) // the array of records
```

#### Example: Create

```go
result, err := client.ZoneCacheSetting(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "messages": []any{},
    "success": true,
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/
├── cloudflare-application-delivery.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
originpostquantum := client.OriginPostQuantum(nil)
originpostquantum.Load(map[string]any{"zone_id": "example"}, nil)

// originpostquantum.Data() now returns the originpostquantum data from the last load
// originpostquantum.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
