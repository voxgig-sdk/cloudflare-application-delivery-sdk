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

func TestOriginCloudRegionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OriginCloudRegion(nil)
		if ent == nil {
			t.Fatal("expected non-nil OriginCloudRegionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"origin_cloud_region": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OriginCloudRegion(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.OriginCloudRegion(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := origin_cloud_regionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "origin_cloud_region." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		originCloudRegionRef01Ent := client.OriginCloudRegion(nil)
		originCloudRegionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "origin_cloud_region"}), "origin_cloud_region_ref01"))
		originCloudRegionRef01Data["zone_id"] = setup.idmap["zone01"]

		originCloudRegionRef01DataResult, err := originCloudRegionRef01Ent.Create(originCloudRegionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		originCloudRegionRef01Data = core.ToMapAny(entityData(originCloudRegionRef01DataResult))
		if originCloudRegionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if originCloudRegionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		originCloudRegionRef01Match := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		originCloudRegionRef01ListResult, err := originCloudRegionRef01Ent.List(originCloudRegionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		originCloudRegionRef01List, originCloudRegionRef01ListOk := originCloudRegionRef01ListResult.([]any)
		if !originCloudRegionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", originCloudRegionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(originCloudRegionRef01List), map[string]any{"id": originCloudRegionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		originCloudRegionRef01DataUp0Up := map[string]any{
			"id": originCloudRegionRef01Data["id"],
		}

		originCloudRegionRef01MarkdefUp0Name := "ip"
		originCloudRegionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-origin_cloud_region_ref01_%d", setup.now)
		originCloudRegionRef01DataUp0Up[originCloudRegionRef01MarkdefUp0Name] = originCloudRegionRef01MarkdefUp0Value

		originCloudRegionRef01ResdataUp0Result, err := originCloudRegionRef01Ent.Update(originCloudRegionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		originCloudRegionRef01ResdataUp0 := core.ToMapAny(entityData(originCloudRegionRef01ResdataUp0Result))
		if originCloudRegionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if originCloudRegionRef01ResdataUp0["id"] != originCloudRegionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if originCloudRegionRef01ResdataUp0[originCloudRegionRef01MarkdefUp0Name] != originCloudRegionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", originCloudRegionRef01MarkdefUp0Name, originCloudRegionRef01ResdataUp0[originCloudRegionRef01MarkdefUp0Name])
		}

		// LOAD
		originCloudRegionRef01MatchDt0 := map[string]any{
			"id": originCloudRegionRef01Data["id"],
		}
		originCloudRegionRef01DataDt0Loaded, err := originCloudRegionRef01Ent.Load(originCloudRegionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		originCloudRegionRef01DataDt0LoadResult := core.ToMapAny(entityData(originCloudRegionRef01DataDt0Loaded))
		if originCloudRegionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if originCloudRegionRef01DataDt0LoadResult["id"] != originCloudRegionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		originCloudRegionRef01MatchRm0 := map[string]any{
			"id": originCloudRegionRef01Data["id"],
		}
		_, err = originCloudRegionRef01Ent.Remove(originCloudRegionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		originCloudRegionRef01MatchRt0 := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		originCloudRegionRef01ListRt0Result, err := originCloudRegionRef01Ent.List(originCloudRegionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		originCloudRegionRef01ListRt0, originCloudRegionRef01ListRt0Ok := originCloudRegionRef01ListRt0Result.([]any)
		if !originCloudRegionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", originCloudRegionRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(originCloudRegionRef01ListRt0), map[string]any{"id": originCloudRegionRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func origin_cloud_regionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "origin_cloud_region", "OriginCloudRegionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read origin_cloud_region test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse origin_cloud_region test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"origin_cloud_region01", "origin_cloud_region02", "origin_cloud_region03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID"])
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
