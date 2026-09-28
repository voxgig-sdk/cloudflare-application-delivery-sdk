# CloudflareApplicationDelivery Golang SDK Reference

Complete API reference for the CloudflareApplicationDelivery Golang SDK.


## CloudflareApplicationDeliverySDK

### Constructor

```go
func NewCloudflareApplicationDeliverySDK(options map[string]any) *CloudflareApplicationDeliverySDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareApplicationDeliverySDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareApplicationDeliverySDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `ArgoConfigApiResponseSingle(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ArgoConfigApiResponseSingle` entity instance. Pass `nil` for no initial data.

#### `CachePurgeApiResponseSingleId(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CachePurgeApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheReserveClear(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CacheReserveClear` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAZone(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomAssetsForAZone` entity instance. Pass `nil` for no initial data.

#### `CustomAssetsForAnAccount(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomAssetsForAnAccount` entity instance. Pass `nil` for no initial data.

#### `CustomPage(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomPage` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResult(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomPagesCustomAssetResult` entity instance. Pass `nil` for no initial data.

#### `CustomPagesCustomAssetResultList(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomPagesCustomAssetResultList` entity instance. Pass `nil` for no initial data.

#### `CustomPagesPreviewTokenResult(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `CustomPagesPreviewTokenResult` entity instance. Pass `nil` for no initial data.

#### `ManagedTransform(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ManagedTransform` entity instance. Pass `nil` for no initial data.

#### `ObservatoryAvailability(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryAvailability` entity instance. Pass `nil` for no initial data.

#### `ObservatoryCreateSchedule(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryCreateSchedule` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseCollection(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryPageTestResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPageTestResponseSingle(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryPageTestResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryPagesResponseCollection(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryPagesResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ObservatoryScheduleResponseSingle(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryScheduleResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ObservatoryTrend(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ObservatoryTrend` entity instance. Pass `nil` for no initial data.

#### `OriginCloudRegion(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `OriginCloudRegion` entity instance. Pass `nil` for no initial data.

#### `OriginPostQuantum(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `OriginPostQuantum` entity instance. Pass `nil` for no initial data.

#### `Schedule(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `SmartShield(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `SmartShield` entity instance. Pass `nil` for no initial data.

#### `SmartTieredCache(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `SmartTieredCache` entity instance. Pass `nil` for no initial data.

#### `SmartshieldResponseCollection(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `SmartshieldResponseCollection` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHc(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `SmartshieldSingleHc` entity instance. Pass `nil` for no initial data.

#### `SmartshieldSingleHcId(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `SmartshieldSingleHcId` entity instance. Pass `nil` for no initial data.

#### `Test(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `TieredCaching(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `TieredCaching` entity instance. Pass `nil` for no initial data.

#### `UrlNormalization(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `UrlNormalization` entity instance. Pass `nil` for no initial data.

#### `ZoneCacheSetting(data map[string]any) CloudflareApplicationDeliveryEntity`

Create a new `ZoneCacheSetting` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ArgoConfigApiResponseSingleEntity

```go
argoConfigApiResponseSingle := client.ArgoConfigApiResponseSingle(nil)
fmt.Println(argoConfigApiResponseSingle.GetName()) // "argo_config_api_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Describes a successful API response. |
| `value` | `string` | Yes | Specifies the enablement value of Argo Smart Routing. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ArgoConfigApiResponseSingle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ArgoConfigApiResponseSingle(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ArgoConfigApiResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CachePurgeApiResponseSingleIdEntity

```go
cachePurgeApiResponseSingleId := client.CachePurgeApiResponseSingleId(nil)
fmt.Println(cachePurgeApiResponseSingleId.GetName()) // "cache_purge_api_response_single_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CachePurgeApiResponseSingleIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CacheReserveClearEntity

```go
cacheReserveClear := client.CacheReserveClear(nil)
fmt.Println(cacheReserveClear.GetName()) // "cache_reserve_clear"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `errors` | - | - |
| `messages` | - | - |
| `result` | Yes | Yes |
| `success` | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CacheReserveClear(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CacheReserveClearEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomAssetsForAZoneEntity

```go
customAssetsForAZone := client.CustomAssetsForAZone(nil)
fmt.Println(customAssetsForAZone.GetName()) // "custom_assets_for_a_zone"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomAssetsForAZone(nil).Remove(map[string]any{"asset_name": "asset_name", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomAssetsForAZoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomAssetsForAnAccountEntity

```go
customAssetsForAnAccount := client.CustomAssetsForAnAccount(nil)
fmt.Println(customAssetsForAnAccount.GetName()) // "custom_assets_for_an_account"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomAssetsForAnAccount(nil).Remove(map[string]any{"account_id": "account_id", "asset_name": "asset_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomAssetsForAnAccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPageEntity

```go
customPage := client.CustomPage(nil)
fmt.Println(customPage.GetName()) // "custom_page"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `string` | No |  |
| `modified_on` | `string` | No |  |
| `preview_target` | `string` | No |  |
| `required_tokens` | `[]any` | No |  |
| `result` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomPage(nil).Load(map[string]any{"id": "custom_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomPage(nil).Update(map[string]any{
    "id": "custom_page_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPagesCustomAssetResultEntity

```go
customPagesCustomAssetResult := client.CustomPagesCustomAssetResult(nil)
fmt.Println(customPagesCustomAssetResult.GetName()) // "custom_pages_custom_asset_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | A short description of the custom asset. |
| `name` | `string` | Yes | The unique name of the custom asset. |
| `result` | `map[string]any` | No |  |
| `url` | `string` | Yes | The URL where the asset content is fetched from. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomPagesCustomAssetResult(nil).Load(map[string]any{"asset_name": "asset_name"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomPagesCustomAssetResult(nil).Update(map[string]any{
    "asset_name": "asset_name",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPagesCustomAssetResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPagesCustomAssetResultListEntity

```go
customPagesCustomAssetResultList := client.CustomPagesCustomAssetResultList(nil)
fmt.Println(customPagesCustomAssetResultList.GetName()) // "custom_pages_custom_asset_result_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomPagesCustomAssetResultList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPagesCustomAssetResultListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomPagesPreviewTokenResultEntity

```go
customPagesPreviewTokenResult := client.CustomPagesPreviewTokenResult(nil)
fmt.Println(customPagesPreviewTokenResult.GetName()) // "custom_pages_preview_token_result"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `string` | Yes | The preview action type. |
| `target` | `string` | Yes | The target custom page type to preview (e.g. |
| `url` | `string` | Yes | The URL of the custom page content to preview. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomPagesPreviewTokenResultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ManagedTransformEntity

```go
managedTransform := client.ManagedTransform(nil)
fmt.Println(managedTransform.GetName()) // "managed_transform"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | A list of error messages. |
| `managed_request_headers` | `[]any` | No | The list of Managed Request Transforms. |
| `managed_response_headers` | `[]any` | No | The list of Managed Response Transforms. |
| `messages` | `[]any` | Yes | A list of warning messages. |
| `result` | `map[string]any` | Yes | A result. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ManagedTransform(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ManagedTransform(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ManagedTransform(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ManagedTransformEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryAvailabilityEntity

```go
observatoryAvailability := client.ObservatoryAvailability(nil)
fmt.Println(observatoryAvailability.GetName()) // "observatory_availability"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ObservatoryAvailability(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryAvailabilityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryCreateScheduleEntity

```go
observatoryCreateSchedule := client.ObservatoryCreateSchedule(nil)
fmt.Println(observatoryCreateSchedule.GetName()) // "observatory_create_schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryCreateScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryPageTestResponseCollectionEntity

```go
observatoryPageTestResponseCollection := client.ObservatoryPageTestResponseCollection(nil)
fmt.Println(observatoryPageTestResponseCollection.GetName()) // "observatory_page_test_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ObservatoryPageTestResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryPageTestResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryPageTestResponseSingleEntity

```go
observatoryPageTestResponseSingle := client.ObservatoryPageTestResponseSingle(nil)
fmt.Println(observatoryPageTestResponseSingle.GetName()) // "observatory_page_test_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `region` | `any` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ObservatoryPageTestResponseSingle(nil).Load(map[string]any{"page_id": "page_id", "test_id": "test_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryPageTestResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryPagesResponseCollectionEntity

```go
observatoryPagesResponseCollection := client.ObservatoryPagesResponseCollection(nil)
fmt.Println(observatoryPagesResponseCollection.GetName()) // "observatory_pages_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ObservatoryPagesResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryPagesResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryScheduleResponseSingleEntity

```go
observatoryScheduleResponseSingle := client.ObservatoryScheduleResponseSingle(nil)
fmt.Println(observatoryScheduleResponseSingle.GetName()) // "observatory_schedule_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No | The test schedule. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ObservatoryScheduleResponseSingle(nil).Load(map[string]any{"url": "url", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryScheduleResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObservatoryTrendEntity

```go
observatoryTrend := client.ObservatoryTrend(nil)
fmt.Println(observatoryTrend.GetName()) // "observatory_trend"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ObservatoryTrend(nil).Load(map[string]any{"url": "url", "zone_id": "zone_id", "device_type": "device_type", "metric": "metric", "region": "region", "start": "start", "tz": "tz"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObservatoryTrendEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OriginCloudRegionEntity

```go
originCloudRegion := client.OriginCloudRegion(nil)
fmt.Println(originCloudRegion.GetName()) // "origin_cloud_region"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `messages` | `[]any` | Yes |  |
| `origin_ip` | `string` | Yes | Origin IP address (IPv4 or IPv6). |
| `region` | `string` | Yes | Cloud vendor region identifier. |
| `result` | `map[string]any` | Yes | Response result for a single origin cloud region mapping. |
| `result_info` | `map[string]any` | Yes | Pagination metadata for list responses. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OriginCloudRegion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OriginCloudRegion(nil).Load(map[string]any{"id": "origin_cloud_region_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OriginCloudRegion(nil).Update(map[string]any{
    "id": "origin_cloud_region_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OriginCloudRegion(nil).Remove(map[string]any{"id": "origin_cloud_region_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OriginCloudRegionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OriginPostQuantumEntity

```go
originPostQuantum := client.OriginPostQuantum(nil)
fmt.Println(originPostQuantum.GetName()) // "origin_post_quantum"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `value` | `string` | Yes | Value of the Origin Post Quantum Encryption Setting. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OriginPostQuantum(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OriginPostQuantum(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OriginPostQuantumEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScheduleEntity

```go
schedule := client.Schedule(nil)
fmt.Println(schedule.GetName()) // "schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Schedule(nil).Remove(map[string]any{"id": "id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmartShieldEntity

```go
smartShield := client.SmartShield(nil)
fmt.Println(smartShield.GetName()) // "smart_shield"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_reserve` | `map[string]any` | No |  |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `regional_tiered_cache` | `map[string]any` | No |  |
| `result` | `map[string]any` | Yes |  |
| `smart_routing` | `map[string]any` | No |  |
| `smart_tiered_cache` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SmartShield(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SmartShield(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmartShieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmartTieredCacheEntity

```go
smartTieredCache := client.SmartTieredCache(nil)
fmt.Println(smartTieredCache.GetName()) // "smart_tiered_cache"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `value` | `string` | Yes | Enable or disable the Smart Tiered Cache. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SmartTieredCache(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SmartTieredCache(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SmartTieredCache(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmartTieredCacheEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmartshieldResponseCollectionEntity

```go
smartshieldResponseCollection := client.SmartshieldResponseCollection(nil)
fmt.Println(smartshieldResponseCollection.GetName()) // "smartshield_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SmartshieldResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmartshieldResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmartshieldSingleHcEntity

```go
smartshieldSingleHc := client.SmartshieldSingleHc(nil)
fmt.Println(smartshieldSingleHc.GetName()) // "smartshield_single_hc"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The hostname or IP address of the origin server to run health checks on. |
| `check_regions` | `[]any` | No | A list of regions from which to run health checks. |
| `consecutive_fails` | `int` | No | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| `consecutive_successes` | `int` | No | The number of consecutive successes required from a health check before changing the health to healthy. |
| `description` | `string` | No | A human-readable description of the health check. |
| `http_config` | `map[string]any` | No | Parameters specific to an HTTP or HTTPS health check. |
| `interval` | `int` | No | The interval between each health check. |
| `name` | `string` | Yes | A short name to identify the health check. |
| `result` | `map[string]any` | No |  |
| `retries` | `int` | No | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| `suspended` | `bool` | No | If suspended, no health checks are sent to the origin. |
| `tcp_config` | `map[string]any` | No | Parameters specific to TCP health check. |
| `timeout` | `int` | No | The timeout (in seconds) before marking the health check as failed. |
| `type` | `string` | No | The protocol to use for the health check. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SmartshieldSingleHc(nil).Load(map[string]any{"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SmartshieldSingleHc(nil).Update(map[string]any{
    "healthcheck_id": "healthcheck_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmartshieldSingleHcEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmartshieldSingleHcIdEntity

```go
smartshieldSingleHcId := client.SmartshieldSingleHcId(nil)
fmt.Println(smartshieldSingleHcId.GetName()) // "smartshield_single_hc_id"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SmartshieldSingleHcId(nil).Remove(map[string]any{"healthcheck_id": "healthcheck_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmartshieldSingleHcIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestEntity

```go
test := client.Test(nil)
fmt.Println(test.GetName()) // "test"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Test(nil).Remove(map[string]any{"url": "url", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TieredCachingEntity

```go
tieredCaching := client.TieredCaching(nil)
fmt.Println(tieredCaching.GetName()) // "tiered_caching"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `value` | `string` | Yes | Enables Tiered Caching. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TieredCaching(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TieredCaching(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TieredCachingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UrlNormalizationEntity

```go
urlNormalization := client.UrlNormalization(nil)
fmt.Println(urlNormalization.GetName()) // "url_normalization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | A list of error messages. |
| `messages` | `[]any` | Yes | A list of warning messages. |
| `result` | `map[string]any` | Yes | A result. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.UrlNormalization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.UrlNormalization(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UrlNormalization(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UrlNormalizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZoneCacheSettingEntity

```go
zoneCacheSetting := client.ZoneCacheSetting(nil)
fmt.Println(zoneCacheSetting.GetName()) // "zone_cache_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `string` | Yes | Value of the Cache Reserve zone setting. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZoneCacheSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZoneCacheSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZoneCacheSetting(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ZoneCacheSetting(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZoneCacheSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareApplicationDeliverySDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

