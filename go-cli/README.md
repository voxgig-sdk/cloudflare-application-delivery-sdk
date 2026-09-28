# cloudflare-application-delivery-cli

boru-driven command-line client **and** interactive REPL for the CloudflareApplicationDelivery
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-application-delivery-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-application-delivery-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudflare-application-delivery-cli list argo_config_api_response_single
./cloudflare-application-delivery-cli update '{name:"x"}' argo_config_api_response_single
./cloudflare-application-delivery-cli list cache_purge_api_response_single_id

# 5. Override the API base URL for a single call
CLOUDFLARE_APPLICATION_DELIVERY_BASE=https://api.example.com ./cloudflare-application-delivery-cli list argo_config_api_response_single

# 6. No arguments -> interactive REPL
./cloudflare-application-delivery-cli
cloudflare-application-delivery> list argo_config_api_response_single
cloudflare-application-delivery> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-application-delivery-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-application-delivery-cli list argo_config_api_response_single
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudflare-application-delivery-cli list argo_config_api_response_single
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Update a record

```sh
./cloudflare-application-delivery-cli update '{id:1,name:"new"}' argo_config_api_response_single
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_APPLICATION_DELIVERY_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_APPLICATION_DELIVERY_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-application-delivery-cli list argo_config_api_response_single
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-application-delivery>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-application-delivery-cli
cloudflare-application-delivery> list argo_config_api_response_single
cloudflare-application-delivery> /help
cloudflare-application-delivery> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 29 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `argo_config_api_response_single`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_APPLICATION_DELIVERY_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_APPLICATION_DELIVERY_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-application-delivery-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 29 entities this SDK exposes (any is valid as `<entity>`):

argo_config_api_response_single cache_purge_api_response_single_id cache_reserve_clear custom_assets_for_a_zone custom_assets_for_an_account custom_page custom_pages_custom_asset_result custom_pages_custom_asset_result_list custom_pages_preview_token_result managed_transform observatory_availability observatory_create_schedule observatory_page_test_response_collection observatory_page_test_response_single observatory_pages_response_collection observatory_schedule_response_single observatory_trend origin_cloud_region origin_post_quantum schedule smart_shield smart_tiered_cache smartshield_response_collection smartshield_single_hc smartshield_single_hc_id test tiered_caching url_normalization zone_cache_setting

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-application-delivery-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
