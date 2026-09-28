# cloudflare-application-delivery-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareApplicationDelivery SDK as
two agent tools — `cloudflare-application-delivery_list` and `cloudflare-application-delivery_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-application-delivery-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-application-delivery \
  -- /absolute/path/to/cloudflare-application-delivery-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-application-delivery-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-application-delivery_list: first page of records
{ "entity": "argo_config_api_response_single" }
{ "entity": "argo_config_api_response_single", "query": { } }

// cloudflare-application-delivery_load: one record by id
{ "entity": "custom_page", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-application-delivery-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-application-delivery \
     -- "$PWD"/dist/*/cloudflare-application-delivery-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-application-delivery_list` and `cloudflare-application-delivery_load` tools now appear
   in new sessions. Ask the agent to *"list argo_config_api_response_single using cloudflare-application-delivery"*
   and it calls `cloudflare-application-delivery_list` with `{"entity":"argo_config_api_response_single"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_APPLICATION_DELIVERY_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-application-delivery-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-application-delivery_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "argo_config_api_response_single" }
```

### Call the `cloudflare-application-delivery_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "custom_page", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-application-delivery_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-application-delivery_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 29 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_APPLICATION_DELIVERY_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_APPLICATION_DELIVERY_BASE` | Optional override of the API base URL. |

### Entities

The 29 entities valid as the `entity` argument:

argo_config_api_response_single | cache_purge_api_response_single_id | cache_reserve_clear | custom_assets_for_a_zone | custom_assets_for_an_account | custom_page | custom_pages_custom_asset_result | custom_pages_custom_asset_result_list | custom_pages_preview_token_result | managed_transform | observatory_availability | observatory_create_schedule | observatory_page_test_response_collection | observatory_page_test_response_single | observatory_pages_response_collection | observatory_schedule_response_single | observatory_trend | origin_cloud_region | origin_post_quantum | schedule | smart_shield | smart_tiered_cache | smartshield_response_collection | smartshield_single_hc | smartshield_single_hc_id | test | tiered_caching | url_normalization | zone_cache_setting

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-application-delivery-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-application-delivery_load","arguments":{"entity":"custom_page","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
