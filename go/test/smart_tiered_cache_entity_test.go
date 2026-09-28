package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go"
	"github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go/utility/struct"
)

func TestSmartTieredCacheEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SmartTieredCache(nil)
		if ent == nil {
			t.Fatal("expected non-nil SmartTieredCacheEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := smart_tiered_cacheBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "smart_tiered_cache." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		smartTieredCacheRef01Ent := client.SmartTieredCache(nil)
		smartTieredCacheRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "smart_tiered_cache"}), "smart_tiered_cache_ref01"))
		smartTieredCacheRef01Data["zone_id"] = setup.idmap["zone01"]

		smartTieredCacheRef01DataResult, err := smartTieredCacheRef01Ent.Create(smartTieredCacheRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		smartTieredCacheRef01Data = core.ToMapAny(entityData(smartTieredCacheRef01DataResult))
		if smartTieredCacheRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		smartTieredCacheRef01DataUp0Up := map[string]any{
		}

		smartTieredCacheRef01MarkdefUp0Name := "value"
		smartTieredCacheRef01MarkdefUp0Value := fmt.Sprintf("Mark01-smart_tiered_cache_ref01_%d", setup.now)
		smartTieredCacheRef01DataUp0Up[smartTieredCacheRef01MarkdefUp0Name] = smartTieredCacheRef01MarkdefUp0Value

		smartTieredCacheRef01ResdataUp0Result, err := smartTieredCacheRef01Ent.Update(smartTieredCacheRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		smartTieredCacheRef01ResdataUp0 := core.ToMapAny(entityData(smartTieredCacheRef01ResdataUp0Result))
		if smartTieredCacheRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if smartTieredCacheRef01ResdataUp0[smartTieredCacheRef01MarkdefUp0Name] != smartTieredCacheRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", smartTieredCacheRef01MarkdefUp0Name, smartTieredCacheRef01ResdataUp0[smartTieredCacheRef01MarkdefUp0Name])
		}

		// LOAD
		smartTieredCacheRef01MatchDt0 := map[string]any{}
		smartTieredCacheRef01DataDt0Loaded, err := smartTieredCacheRef01Ent.Load(smartTieredCacheRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if smartTieredCacheRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


	})
}

func smart_tiered_cacheBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "smart_tiered_cache", "SmartTieredCacheTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read smart_tiered_cache test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse smart_tiered_cache test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"smart_tiered_cache01", "smart_tiered_cache02", "smart_tiered_cache03", "zone01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareApplicationDeliverySDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
