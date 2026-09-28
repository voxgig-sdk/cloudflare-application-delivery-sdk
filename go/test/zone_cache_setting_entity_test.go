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

func TestZoneCacheSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ZoneCacheSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil ZoneCacheSettingEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"zone_cache_setting": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ZoneCacheSetting(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.ZoneCacheSetting(nil).Stream("list", nil, nil) {
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
		setup := zone_cache_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "zone_cache_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		zoneCacheSettingRef01Ent := client.ZoneCacheSetting(nil)
		zoneCacheSettingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "zone_cache_setting"}), "zone_cache_setting_ref01"))
		zoneCacheSettingRef01Data["zone_id"] = setup.idmap["zone01"]

		zoneCacheSettingRef01DataResult, err := zoneCacheSettingRef01Ent.Create(zoneCacheSettingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		zoneCacheSettingRef01Data = core.ToMapAny(entityData(zoneCacheSettingRef01DataResult))
		if zoneCacheSettingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		zoneCacheSettingRef01Match := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		zoneCacheSettingRef01ListResult, err := zoneCacheSettingRef01Ent.List(zoneCacheSettingRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, zoneCacheSettingRef01ListOk := zoneCacheSettingRef01ListResult.([]any)
		if !zoneCacheSettingRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", zoneCacheSettingRef01ListResult)
		}

		// UPDATE
		zoneCacheSettingRef01DataUp0Up := map[string]any{
		}

		zoneCacheSettingRef01MarkdefUp0Name := "value"
		zoneCacheSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-zone_cache_setting_ref01_%d", setup.now)
		zoneCacheSettingRef01DataUp0Up[zoneCacheSettingRef01MarkdefUp0Name] = zoneCacheSettingRef01MarkdefUp0Value

		zoneCacheSettingRef01ResdataUp0Result, err := zoneCacheSettingRef01Ent.Update(zoneCacheSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		zoneCacheSettingRef01ResdataUp0 := core.ToMapAny(entityData(zoneCacheSettingRef01ResdataUp0Result))
		if zoneCacheSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if zoneCacheSettingRef01ResdataUp0[zoneCacheSettingRef01MarkdefUp0Name] != zoneCacheSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", zoneCacheSettingRef01MarkdefUp0Name, zoneCacheSettingRef01ResdataUp0[zoneCacheSettingRef01MarkdefUp0Name])
		}

		// LOAD
		zoneCacheSettingRef01MatchDt0 := map[string]any{}
		zoneCacheSettingRef01DataDt0Loaded, err := zoneCacheSettingRef01Ent.Load(zoneCacheSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if zoneCacheSettingRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


		// LIST
		zoneCacheSettingRef01MatchRt0 := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		zoneCacheSettingRef01ListRt0Result, err := zoneCacheSettingRef01Ent.List(zoneCacheSettingRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, zoneCacheSettingRef01ListRt0Ok := zoneCacheSettingRef01ListRt0Result.([]any)
		if !zoneCacheSettingRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", zoneCacheSettingRef01ListRt0Result)
		}

	})
}

func zone_cache_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "zone_cache_setting", "ZoneCacheSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read zone_cache_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse zone_cache_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"zone_cache_setting01", "zone_cache_setting02", "zone_cache_setting03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID"])
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
