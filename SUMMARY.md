# Cloudflare Application Delivery

Cloudflare application delivery: cache, purge, Argo, speed optimization, origins, custom pages, managed headers, Smart Shield, and URL normalization.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 29 entities and 79 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ArgoConfigApiResponseSingle](docs/api/argo_config_api_response_single.html)

Results: Get Argo Smart Routing enablement setting response.; Patch Argo Smart Routing enablement setting response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Describes a successful API response.
- `value`: Specifies the enablement value of Argo Smart Routing.

### [CachePurgeApiResponseSingleId](docs/api/cache_purge_api_response_single_id.html)

Results: Request to purge cached content successful.

SDK operations: `create`.

Key fields to recognise:

- `success`: Indicates the API call&#39;s success or failure.

### [CacheReserveClear](docs/api/cache_reserve_clear.html)

Results: Start Cache Reserve Clear response.; Get Cache Reserve Clear response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [CustomAssetsForAZone](docs/api/custom_assets_for_a_zone.html)

Results: Delete a custom asset response.

SDK operations: `remove`.

### [CustomAssetsForAnAccount](docs/api/custom_assets_for_an_account.html)

Results: Delete a custom asset response.

SDK operations: `remove`.

### [CustomPage](docs/api/custom_page.html)

Results: List custom pages response; Get a custom page response; Update a custom page response.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `state`: The custom page state.
- `url`: The URL associated with the custom page.

### [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html)

Results: Create custom asset response; Get a custom asset response; Update a custom asset response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `description`: A short description of the custom asset.
- `name`: The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).
- `url`: The URL where the asset content is fetched from.

### [CustomPagesCustomAssetResultList](docs/api/custom_pages_custom_asset_result_list.html)

Results: List custom assets response.

SDK operations: `list`.

### [CustomPagesPreviewTokenResult](docs/api/custom_pages_preview_token_result.html)

Results: Create preview token response.

SDK operations: `create`.

Key fields to recognise:

- `act`: The preview action type.
- `target`: The target custom page type to preview (for example
- `url`: The URL of the custom page content to preview.

### [ManagedTransform](docs/api/managed_transform.html)

Results: A Managed Transforms response.; An empty response.

SDK operations: `list`, `remove`, `update`.

Key fields to recognise:

- `errors`: A list of error messages.
- `managed_request_headers`: The list of Managed Request Transforms.
- `managed_response_headers`: The list of Managed Response Transforms.
- `messages`: A list of warning messages.
- `result`: A result.

### [ObservatoryAvailability](docs/api/observatory_availability.html)

Results: Page test availability.

SDK operations: `load`.

### [ObservatoryCreateSchedule](docs/api/observatory_create_schedule.html)

Results: Page test schedule.

SDK operations: `create`.

Key fields to recognise:

- `id`: UUID.

### [ObservatoryPageTestResponseCollection](docs/api/observatory_page_test_response_collection.html)

Results: List of test history for a page.

SDK operations: `list`.

### [ObservatoryPageTestResponseSingle](docs/api/observatory_page_test_response_single.html)

Results: Page test details.; Page test result.

SDK operations: `create`, `load`.

Key fields to recognise:

- `region`: A test region with a label.

### [ObservatoryPagesResponseCollection](docs/api/observatory_pages_response_collection.html)

Results: List of pages.

SDK operations: `list`.

### [ObservatoryScheduleResponseSingle](docs/api/observatory_schedule_response_single.html)

Results: Page test schedule.

SDK operations: `load`.

Key fields to recognise:

- `result`: The test schedule.

### [ObservatoryTrend](docs/api/observatory_trend.html)

Results: Page trend.

SDK operations: `load`.

### [OriginCloudRegion](docs/api/origin_cloud_region.html)

Results: Create origin cloud region mapping response.; List origin cloud region mappings response.; List supported cloud vendors and regions response.; Get origin cloud region mapping response.; Create or update origin cloud region mapping response.; Batch create or update origin cloud region mappings successful.; Delete origin cloud region mapping response.; Batch delete origin cloud region mappings successful.; Create or replace origin cloud region mapping response.; Batch create or replace origin cloud region mappings successful.

SDK operations: `create`, `list`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `ip`: Origin IP address (IPv4 or IPv6).
- `origin_ip`: The origin IP address (IPv4 or IPv6). Normalized to canonical form (RFC 5952 for IPv6).
- `region`: Cloud vendor region identifier.
- `result`: Response result for a single origin cloud region mapping.
- `result_info`: Pagination metadata for list responses.

### [OriginPostQuantum](docs/api/origin_post_quantum.html)

Results: Get Origin Post-Quantum Encryption setting response.; Change Origin Post-Quantum Encryption setting response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `value`: The value of the setting.

### [Schedule](docs/api/schedule.html)

Results: Number of deleted tests.

SDK operations: `remove`.

### [SmartShield](docs/api/smart_shield.html)

Results: Smart Shield Settings response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `result`: The full Smart Shield response from the GET and PATCH operations.
- `success`: Whether the API call was successful.

### [SmartTieredCache](docs/api/smart_tiered_cache.html)

Results: Create Smart Tiered Cache setting response.; Get Smart Tiered Cache setting response.; Delete Smart Tiered Cache setting response.; Patch Smart Tiered Cache setting response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `value`: The value of the setting.

### [SmartshieldResponseCollection](docs/api/smartshield_response_collection.html)

Results: List Health Checks response.

SDK operations: `list`.

### [SmartshieldSingleHc](docs/api/smartshield_single_hc.html)

Results: Create Health Check response.; Health Check Details response.; Patch Health Check response.; Update Health Check response.

SDK operations: `create`, `load`, `patch`, `update`.

Key fields to recognise:

- `address`: The hostname or IP address of the origin server to run health checks on.
- `check_regions`: A list of regions from which to run health checks. Null means Cloudflare will pick a default region.
- `consecutive_fails`: The number of consecutive fails required from a health check before changing the health to unhealthy.
- `consecutive_successes`: The number of consecutive successes required from a health check before changing the health to healthy.
- `description`: A human-readable description of the health check.

### [SmartshieldSingleHcId](docs/api/smartshield_single_hc_id.html)

Results: Delete Health Check response.

SDK operations: `remove`.

### [Test](docs/api/test.html)

Results: Number of deleted tests.

SDK operations: `remove`.

### [TieredCaching](docs/api/tiered_caching.html)

Results: Get Tiered Caching setting response.; Patch Tiered Caching setting response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `value`: The value of the setting.

### [UrlNormalization](docs/api/url_normalization.html)

Results: A URL Normalization response.; An empty response.

SDK operations: `list`, `remove`, `update`.

Key fields to recognise:

- `errors`: A list of error messages.
- `messages`: A list of warning messages.
- `result`: A result.
- `scope`: The scope of the URL normalization.
- `success`: Whether the API call was successful.

### [ZoneCacheSetting](docs/api/zone_cache_setting.html)

Results: Start Cache Reserve Clear response.; Get Cache Reserve Clear response.; Get Cache Reserve setting response.; Get Regional Tiered Cache setting response.; Get variants setting response.; Delete variants setting response.; Change Cache Reserve setting response.; Change Regional Tiered Cache setting response.; Change variants setting response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `result`: Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the &#39;Vary: Accept&#39; response header. If the origin server sends &#39;Vary: Accept&#39; but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
- `success`: Whether the API call was successful.
- `value`: The value of the setting.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ArgoConfigApiResponseSingle](docs/api/argo_config_api_response_single.html) | `list` | `GET /zones/{zone_id}/argo/smart_routing` | Required |
| [ArgoConfigApiResponseSingle](docs/api/argo_config_api_response_single.html) | `update` | `PATCH /zones/{zone_id}/argo/smart_routing` | Required |
| [CachePurgeApiResponseSingleId](docs/api/cache_purge_api_response_single_id.html) | `create` | `POST /zones/{zone_id}/purge_cache` | Required |
| [CacheReserveClear](docs/api/cache_reserve_clear.html) | `create` | `POST /zones/{zone_id}/smart_shield/cache_reserve_clear` | Required |
| [CacheReserveClear](docs/api/cache_reserve_clear.html) | `list` | `GET /zones/{zone_id}/smart_shield/cache_reserve_clear` | Required |
| [CustomAssetsForAZone](docs/api/custom_assets_for_a_zone.html) | `remove` | `DELETE /zones/{zone_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomAssetsForAnAccount](docs/api/custom_assets_for_an_account.html) | `remove` | `DELETE /accounts/{account_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomPage](docs/api/custom_page.html) | `list` | `GET /accounts/{account_id}/custom_pages` | Required |
| [CustomPage](docs/api/custom_page.html) | `list` | `GET /zones/{zone_id}/custom_pages` | Required |
| [CustomPage](docs/api/custom_page.html) | `load` | `GET /accounts/{account_id}/custom_pages/{identifier}` | Required |
| [CustomPage](docs/api/custom_page.html) | `load` | `GET /zones/{zone_id}/custom_pages/{identifier}` | Required |
| [CustomPage](docs/api/custom_page.html) | `update` | `PUT /accounts/{account_id}/custom_pages/{identifier}` | Required |
| [CustomPage](docs/api/custom_page.html) | `update` | `PUT /zones/{zone_id}/custom_pages/{identifier}` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `create` | `POST /accounts/{account_id}/custom_pages/assets` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `create` | `POST /zones/{zone_id}/custom_pages/assets` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `load` | `GET /accounts/{account_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `load` | `GET /zones/{zone_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `update` | `PUT /accounts/{account_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomPagesCustomAssetResult](docs/api/custom_pages_custom_asset_result.html) | `update` | `PUT /zones/{zone_id}/custom_pages/assets/{asset_name}` | Required |
| [CustomPagesCustomAssetResultList](docs/api/custom_pages_custom_asset_result_list.html) | `list` | `GET /accounts/{account_id}/custom_pages/assets` | Required |
| [CustomPagesCustomAssetResultList](docs/api/custom_pages_custom_asset_result_list.html) | `list` | `GET /zones/{zone_id}/custom_pages/assets` | Required |
| [CustomPagesPreviewTokenResult](docs/api/custom_pages_preview_token_result.html) | `create` | `POST /accounts/{account_id}/custom_pages/preview_tokens` | Required |
| [CustomPagesPreviewTokenResult](docs/api/custom_pages_preview_token_result.html) | `create` | `POST /zones/{zone_id}/custom_pages/preview_tokens` | Required |
| [ManagedTransform](docs/api/managed_transform.html) | `list` | `GET /zones/{zone_id}/managed_headers` | Required |
| [ManagedTransform](docs/api/managed_transform.html) | `remove` | `DELETE /zones/{zone_id}/managed_headers` | Required |
| [ManagedTransform](docs/api/managed_transform.html) | `update` | `PATCH /zones/{zone_id}/managed_headers` | Required |
| [ObservatoryAvailability](docs/api/observatory_availability.html) | `load` | `GET /zones/{zone_id}/speed_api/availabilities` | Required |
| [ObservatoryCreateSchedule](docs/api/observatory_create_schedule.html) | `create` | `POST /zones/{zone_id}/speed_api/schedule/{url}` | Required |
| [ObservatoryPageTestResponseCollection](docs/api/observatory_page_test_response_collection.html) | `list` | `GET /zones/{zone_id}/speed_api/pages/{url}/tests` | Required |
| [ObservatoryPageTestResponseSingle](docs/api/observatory_page_test_response_single.html) | `create` | `POST /zones/{zone_id}/speed_api/pages/{url}/tests` | Required |
| [ObservatoryPageTestResponseSingle](docs/api/observatory_page_test_response_single.html) | `load` | `GET /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}` | Required |
| [ObservatoryPagesResponseCollection](docs/api/observatory_pages_response_collection.html) | `list` | `GET /zones/{zone_id}/speed_api/pages` | Required |
| [ObservatoryScheduleResponseSingle](docs/api/observatory_schedule_response_single.html) | `load` | `GET /zones/{zone_id}/speed_api/schedule/{url}` | Required |
| [ObservatoryTrend](docs/api/observatory_trend.html) | `load` | `GET /zones/{zone_id}/speed_api/pages/{url}/trend` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `create` | `POST /zones/{zone_id}/cache/origin_cloud_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `list` | `GET /zones/{zone_id}/origin/cloud_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `list` | `GET /zones/{zone_id}/cache/origin_cloud_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `list` | `GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `list` | `GET /zones/{zone_id}/origin/cloud_regions/supported_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `load` | `GET /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `load` | `GET /zones/{zone_id}/origin/cloud_regions/{origin_ip}` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `patch` | `PATCH /zones/{zone_id}/cache/origin_cloud_regions` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `patch` | `PATCH /zones/{zone_id}/cache/origin_cloud_regions/batch` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `remove` | `DELETE /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `remove` | `DELETE /zones/{zone_id}/origin/cloud_regions/{origin_ip}` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `remove` | `DELETE /zones/{zone_id}/cache/origin_cloud_regions/batch` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `remove` | `DELETE /zones/{zone_id}/origin/cloud_regions/batch` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `update` | `PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}` | Required |
| [OriginCloudRegion](docs/api/origin_cloud_region.html) | `update` | `PUT /zones/{zone_id}/origin/cloud_regions/batch` | Required |
| [OriginPostQuantum](docs/api/origin_post_quantum.html) | `load` | `GET /zones/{zone_id}/cache/origin_post_quantum_encryption` | Required |
| [OriginPostQuantum](docs/api/origin_post_quantum.html) | `update` | `PUT /zones/{zone_id}/cache/origin_post_quantum_encryption` | Required |
| [Schedule](docs/api/schedule.html) | `remove` | `DELETE /zones/{zone_id}/speed_api/schedule/{url}` | Required |
| [SmartShield](docs/api/smart_shield.html) | `list` | `GET /zones/{zone_id}/smart_shield` | Required |
| [SmartShield](docs/api/smart_shield.html) | `update` | `PATCH /zones/{zone_id}/smart_shield` | Required |
| [SmartTieredCache](docs/api/smart_tiered_cache.html) | `create` | `POST /zones/{zone_id}/cache/tiered_cache_smart_topology_enable` | Required |
| [SmartTieredCache](docs/api/smart_tiered_cache.html) | `load` | `GET /zones/{zone_id}/cache/tiered_cache_smart_topology_enable` | Required |
| [SmartTieredCache](docs/api/smart_tiered_cache.html) | `remove` | `DELETE /zones/{zone_id}/cache/tiered_cache_smart_topology_enable` | Required |
| [SmartTieredCache](docs/api/smart_tiered_cache.html) | `update` | `PATCH /zones/{zone_id}/cache/tiered_cache_smart_topology_enable` | Required |
| [SmartshieldResponseCollection](docs/api/smartshield_response_collection.html) | `list` | `GET /zones/{zone_id}/smart_shield/healthchecks` | Required |
| [SmartshieldSingleHc](docs/api/smartshield_single_hc.html) | `create` | `POST /zones/{zone_id}/smart_shield/healthchecks` | Required |
| [SmartshieldSingleHc](docs/api/smartshield_single_hc.html) | `load` | `GET /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}` | Required |
| [SmartshieldSingleHc](docs/api/smartshield_single_hc.html) | `patch` | `PATCH /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}` | Required |
| [SmartshieldSingleHc](docs/api/smartshield_single_hc.html) | `update` | `PUT /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}` | Required |
| [SmartshieldSingleHcId](docs/api/smartshield_single_hc_id.html) | `remove` | `DELETE /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}` | Required |
| [Test](docs/api/test.html) | `remove` | `DELETE /zones/{zone_id}/speed_api/pages/{url}/tests` | Required |
| [TieredCaching](docs/api/tiered_caching.html) | `load` | `GET /zones/{zone_id}/argo/tiered_caching` | Required |
| [TieredCaching](docs/api/tiered_caching.html) | `update` | `PATCH /zones/{zone_id}/argo/tiered_caching` | Required |
| [UrlNormalization](docs/api/url_normalization.html) | `list` | `GET /zones/{zone_id}/url_normalization` | Required |
| [UrlNormalization](docs/api/url_normalization.html) | `remove` | `DELETE /zones/{zone_id}/url_normalization` | Required |
| [UrlNormalization](docs/api/url_normalization.html) | `update` | `PUT /zones/{zone_id}/url_normalization` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `create` | `POST /zones/{zone_id}/cache/cache_reserve_clear` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `list` | `GET /zones/{zone_id}/cache/cache_reserve_clear` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `load` | `GET /zones/{zone_id}/cache/cache_reserve` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `load` | `GET /zones/{zone_id}/cache/regional_tiered_cache` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `load` | `GET /zones/{zone_id}/cache/variants` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `remove` | `DELETE /zones/{zone_id}/cache/variants` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `update` | `PATCH /zones/{zone_id}/cache/cache_reserve` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `update` | `PATCH /zones/{zone_id}/cache/regional_tiered_cache` | Required |
| [ZoneCacheSetting](docs/api/zone_cache_setting.html) | `update` | `PATCH /zones/{zone_id}/cache/variants` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-application-delivery_list`: List records for an entity. Supported entities: `argo_config_api_response_single`, `cache_reserve_clear`, `custom_page`, `custom_pages_custom_asset_result_list`, `managed_transform`, `observatory_page_test_response_collection`, `observatory_pages_response_collection`, `origin_cloud_region`, `smart_shield`, `smartshield_response_collection`, `url_normalization`, `zone_cache_setting`.
- `cloudflare-application-delivery_load`: Load one record for an entity. Supported entities: `custom_page`, `custom_pages_custom_asset_result`, `observatory_availability`, `observatory_page_test_response_single`, `observatory_schedule_response_single`, `observatory_trend`, `origin_cloud_region`, `origin_post_quantum`, `smart_tiered_cache`, `smartshield_single_hc`, `tiered_caching`, `zone_cache_setting`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

