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

func TestTieredCachingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TieredCaching(nil)
		if ent == nil {
			t.Fatal("expected non-nil TieredCachingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tiered_cachingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tiered_caching." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_TIERED_CACHING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		tieredCachingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.tiered_caching")))
		var tieredCachingRef01Data map[string]any
		if len(tieredCachingRef01DataRaw) > 0 {
			tieredCachingRef01Data = core.ToMapAny(tieredCachingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = tieredCachingRef01Data

		// UPDATE
		tieredCachingRef01Ent := client.TieredCaching(nil)
		tieredCachingRef01DataUp0Up := map[string]any{
		}

		tieredCachingRef01MarkdefUp0Name := "value"
		tieredCachingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-tiered_caching_ref01_%d", setup.now)
		tieredCachingRef01DataUp0Up[tieredCachingRef01MarkdefUp0Name] = tieredCachingRef01MarkdefUp0Value

		tieredCachingRef01ResdataUp0Result, err := tieredCachingRef01Ent.Update(tieredCachingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		tieredCachingRef01ResdataUp0 := core.ToMapAny(entityData(tieredCachingRef01ResdataUp0Result))
		if tieredCachingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if tieredCachingRef01ResdataUp0[tieredCachingRef01MarkdefUp0Name] != tieredCachingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", tieredCachingRef01MarkdefUp0Name, tieredCachingRef01ResdataUp0[tieredCachingRef01MarkdefUp0Name])
		}

		// LOAD
		tieredCachingRef01MatchDt0 := map[string]any{}
		tieredCachingRef01DataDt0Loaded, err := tieredCachingRef01Ent.Load(tieredCachingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if tieredCachingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func tiered_cachingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tiered_caching", "TieredCachingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tiered_caching test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tiered_caching test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tiered_caching01", "tiered_caching02", "tiered_caching03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_TIERED_CACHING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_TIERED_CACHING_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_TIERED_CACHING_ENTID"])
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
