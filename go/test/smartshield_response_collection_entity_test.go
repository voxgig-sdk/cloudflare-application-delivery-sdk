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

func TestSmartshieldResponseCollectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SmartshieldResponseCollection(nil)
		if ent == nil {
			t.Fatal("expected non-nil SmartshieldResponseCollectionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"smartshield_response_collection": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SmartshieldResponseCollection(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.SmartshieldResponseCollection(nil).Stream("list", nil, nil) {
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
		setup := smartshield_response_collectionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "smartshield_response_collection." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		smartshieldResponseCollectionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.smartshield_response_collection")))
		var smartshieldResponseCollectionRef01Data map[string]any
		if len(smartshieldResponseCollectionRef01DataRaw) > 0 {
			smartshieldResponseCollectionRef01Data = core.ToMapAny(smartshieldResponseCollectionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = smartshieldResponseCollectionRef01Data

		// LIST
		smartshieldResponseCollectionRef01Ent := client.SmartshieldResponseCollection(nil)
		smartshieldResponseCollectionRef01Match := map[string]any{
			"zone_id": setup.idmap["zone01"],
		}

		smartshieldResponseCollectionRef01ListResult, err := smartshieldResponseCollectionRef01Ent.List(smartshieldResponseCollectionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, smartshieldResponseCollectionRef01ListOk := smartshieldResponseCollectionRef01ListResult.([]any)
		if !smartshieldResponseCollectionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", smartshieldResponseCollectionRef01ListResult)
		}

	})
}

func smartshield_response_collectionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "smartshield_response_collection", "SmartshieldResponseCollectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read smartshield_response_collection test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse smartshield_response_collection test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"smartshield_response_collection01", "smartshield_response_collection02", "smartshield_response_collection03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID": idmap,
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_APPLICATION_DELIVERY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID"])
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
