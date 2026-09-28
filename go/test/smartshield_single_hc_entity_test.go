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

func TestSmartshieldSingleHcEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SmartshieldSingleHc(nil)
		if ent == nil {
			t.Fatal("expected non-nil SmartshieldSingleHcEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := smartshield_single_hcBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "smartshield_single_hc." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		smartshieldSingleHcRef01Ent := client.SmartshieldSingleHc(nil)
		smartshieldSingleHcRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "smartshield_single_hc"}), "smartshield_single_hc_ref01"))
		smartshieldSingleHcRef01Data["zone_id"] = setup.idmap["zone01"]

		smartshieldSingleHcRef01DataResult, err := smartshieldSingleHcRef01Ent.Create(smartshieldSingleHcRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		smartshieldSingleHcRef01Data = core.ToMapAny(entityData(smartshieldSingleHcRef01DataResult))
		if smartshieldSingleHcRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		smartshieldSingleHcRef01DataUp0Up := map[string]any{
			"zone_id": setup.idmap["zone_id"],
		}

		smartshieldSingleHcRef01MarkdefUp0Name := "address"
		smartshieldSingleHcRef01MarkdefUp0Value := fmt.Sprintf("Mark01-smartshield_single_hc_ref01_%d", setup.now)
		smartshieldSingleHcRef01DataUp0Up[smartshieldSingleHcRef01MarkdefUp0Name] = smartshieldSingleHcRef01MarkdefUp0Value

		smartshieldSingleHcRef01ResdataUp0Result, err := smartshieldSingleHcRef01Ent.Update(smartshieldSingleHcRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		smartshieldSingleHcRef01ResdataUp0 := core.ToMapAny(entityData(smartshieldSingleHcRef01ResdataUp0Result))
		if smartshieldSingleHcRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if smartshieldSingleHcRef01ResdataUp0[smartshieldSingleHcRef01MarkdefUp0Name] != smartshieldSingleHcRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", smartshieldSingleHcRef01MarkdefUp0Name, smartshieldSingleHcRef01ResdataUp0[smartshieldSingleHcRef01MarkdefUp0Name])
		}

		// LOAD
		smartshieldSingleHcRef01MatchDt0 := map[string]any{}
		smartshieldSingleHcRef01DataDt0Loaded, err := smartshieldSingleHcRef01Ent.Load(smartshieldSingleHcRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if smartshieldSingleHcRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func smartshield_single_hcBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "smartshield_single_hc", "SmartshieldSingleHcTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read smartshield_single_hc test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse smartshield_single_hc test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"smartshield_single_hc01", "smartshield_single_hc02", "smartshield_single_hc03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"])
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
