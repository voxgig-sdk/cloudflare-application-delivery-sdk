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

func TestCustomPagesCustomAssetResultEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomPagesCustomAssetResult(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomPagesCustomAssetResultEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := custom_pages_custom_asset_resultBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_pages_custom_asset_result." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customPagesCustomAssetResultRef01Ent := client.CustomPagesCustomAssetResult(nil)
		customPagesCustomAssetResultRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "custom_pages_custom_asset_result"}), "custom_pages_custom_asset_result_ref01"))
		customPagesCustomAssetResultRef01Data["account_id"] = setup.idmap["account01"]
		customPagesCustomAssetResultRef01Data["zone_id"] = setup.idmap["zone01"]

		customPagesCustomAssetResultRef01DataResult, err := customPagesCustomAssetResultRef01Ent.Create(customPagesCustomAssetResultRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customPagesCustomAssetResultRef01Data = core.ToMapAny(entityData(customPagesCustomAssetResultRef01DataResult))
		if customPagesCustomAssetResultRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		customPagesCustomAssetResultRef01DataUp0Up := map[string]any{
			"zone_id": setup.idmap["zone_id"],
		}

		customPagesCustomAssetResultRef01MarkdefUp0Name := "description"
		customPagesCustomAssetResultRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_pages_custom_asset_result_ref01_%d", setup.now)
		customPagesCustomAssetResultRef01DataUp0Up[customPagesCustomAssetResultRef01MarkdefUp0Name] = customPagesCustomAssetResultRef01MarkdefUp0Value

		customPagesCustomAssetResultRef01ResdataUp0Result, err := customPagesCustomAssetResultRef01Ent.Update(customPagesCustomAssetResultRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customPagesCustomAssetResultRef01ResdataUp0 := core.ToMapAny(entityData(customPagesCustomAssetResultRef01ResdataUp0Result))
		if customPagesCustomAssetResultRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customPagesCustomAssetResultRef01ResdataUp0[customPagesCustomAssetResultRef01MarkdefUp0Name] != customPagesCustomAssetResultRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customPagesCustomAssetResultRef01MarkdefUp0Name, customPagesCustomAssetResultRef01ResdataUp0[customPagesCustomAssetResultRef01MarkdefUp0Name])
		}

		// LOAD
		customPagesCustomAssetResultRef01MatchDt0 := map[string]any{}
		customPagesCustomAssetResultRef01DataDt0Loaded, err := customPagesCustomAssetResultRef01Ent.Load(customPagesCustomAssetResultRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if customPagesCustomAssetResultRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func custom_pages_custom_asset_resultBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_pages_custom_asset_result", "CustomPagesCustomAssetResultTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_pages_custom_asset_result test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_pages_custom_asset_result test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_pages_custom_asset_result01", "custom_pages_custom_asset_result02", "custom_pages_custom_asset_result03", "account01", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add zone_id alias for update test.
	if idmapResolved["zone_id"] == nil {
		idmapResolved["zone_id"] = idmapResolved["zone01"]
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
