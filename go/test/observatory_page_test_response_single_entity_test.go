package sdktest

import (
	"encoding/json"
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

func TestObservatoryPageTestResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ObservatoryPageTestResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil ObservatoryPageTestResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := observatory_page_test_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "observatory_page_test_response_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		observatoryPageTestResponseSingleRef01Ent := client.ObservatoryPageTestResponseSingle(nil)
		observatoryPageTestResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "observatory_page_test_response_single"}), "observatory_page_test_response_single_ref01"))
		observatoryPageTestResponseSingleRef01Data["page_id"] = setup.idmap["page01"]
		observatoryPageTestResponseSingleRef01Data["url"] = setup.idmap["url01"]
		observatoryPageTestResponseSingleRef01Data["zone_id"] = setup.idmap["zone01"]

		observatoryPageTestResponseSingleRef01DataResult, err := observatoryPageTestResponseSingleRef01Ent.Create(observatoryPageTestResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		observatoryPageTestResponseSingleRef01Data = core.ToMapAny(entityData(observatoryPageTestResponseSingleRef01DataResult))
		if observatoryPageTestResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		observatoryPageTestResponseSingleRef01MatchDt0 := map[string]any{}
		observatoryPageTestResponseSingleRef01DataDt0Loaded, err := observatoryPageTestResponseSingleRef01Ent.Load(observatoryPageTestResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if observatoryPageTestResponseSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func observatory_page_test_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "observatory_page_test_response_single", "ObservatoryPageTestResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read observatory_page_test_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse observatory_page_test_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"observatory_page_test_response_single01", "observatory_page_test_response_single02", "observatory_page_test_response_single03", "test01", "test02", "test03", "page01", "url01", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_SINGLE_ENTID"])
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
