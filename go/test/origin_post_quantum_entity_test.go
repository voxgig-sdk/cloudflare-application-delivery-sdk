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

func TestOriginPostQuantumEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OriginPostQuantum(nil)
		if ent == nil {
			t.Fatal("expected non-nil OriginPostQuantumEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := origin_post_quantumBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "origin_post_quantum." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		originPostQuantumRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.origin_post_quantum")))
		var originPostQuantumRef01Data map[string]any
		if len(originPostQuantumRef01DataRaw) > 0 {
			originPostQuantumRef01Data = core.ToMapAny(originPostQuantumRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = originPostQuantumRef01Data

		// UPDATE
		originPostQuantumRef01Ent := client.OriginPostQuantum(nil)
		originPostQuantumRef01DataUp0Up := map[string]any{
		}

		originPostQuantumRef01MarkdefUp0Name := "value"
		originPostQuantumRef01MarkdefUp0Value := fmt.Sprintf("Mark01-origin_post_quantum_ref01_%d", setup.now)
		originPostQuantumRef01DataUp0Up[originPostQuantumRef01MarkdefUp0Name] = originPostQuantumRef01MarkdefUp0Value

		originPostQuantumRef01ResdataUp0Result, err := originPostQuantumRef01Ent.Update(originPostQuantumRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		originPostQuantumRef01ResdataUp0 := core.ToMapAny(entityData(originPostQuantumRef01ResdataUp0Result))
		if originPostQuantumRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if originPostQuantumRef01ResdataUp0[originPostQuantumRef01MarkdefUp0Name] != originPostQuantumRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", originPostQuantumRef01MarkdefUp0Name, originPostQuantumRef01ResdataUp0[originPostQuantumRef01MarkdefUp0Name])
		}

		// LOAD
		originPostQuantumRef01MatchDt0 := map[string]any{}
		originPostQuantumRef01DataDt0Loaded, err := originPostQuantumRef01Ent.Load(originPostQuantumRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if originPostQuantumRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func origin_post_quantumBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "origin_post_quantum", "OriginPostQuantumTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read origin_post_quantum test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse origin_post_quantum test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"origin_post_quantum01", "origin_post_quantum02", "origin_post_quantum03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID"])
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
