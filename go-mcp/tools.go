package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-application-delivery-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"argo_config_api_response_single | cache_purge_api_response_single_id | cache_reserve_clear | custom_assets_for_a_zone | custom_assets_for_an_account | custom_page | custom_pages_custom_asset_result | custom_pages_custom_asset_result_list | custom_pages_preview_token_result | managed_transform | observatory_availability | observatory_create_schedule | observatory_page_test_response_collection | observatory_page_test_response_single | observatory_pages_response_collection | observatory_schedule_response_single | observatory_trend | origin_cloud_region | origin_post_quantum | schedule | smart_shield | smart_tiered_cache | smartshield_response_collection | smartshield_single_hc | smartshield_single_hc_id | test | tiered_caching | url_normalization | zone_cache_setting"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareApplicationDeliverySDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-application-delivery_list",
		Description: "List records from CloudflareApplicationDelivery. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-application-delivery_load",
		Description: "Load a single record from CloudflareApplicationDelivery. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareApplicationDeliverySDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareApplicationDeliverySDK, name string) (sdk.CloudflareApplicationDeliveryEntity, error) {
	switch strings.ToLower(name) {
	case "argo_config_api_response_single":
		return client.ArgoConfigApiResponseSingle(nil), nil
	case "cache_purge_api_response_single_id":
		return client.CachePurgeApiResponseSingleId(nil), nil
	case "cache_reserve_clear":
		return client.CacheReserveClear(nil), nil
	case "custom_assets_for_a_zone":
		return client.CustomAssetsForAZone(nil), nil
	case "custom_assets_for_an_account":
		return client.CustomAssetsForAnAccount(nil), nil
	case "custom_page":
		return client.CustomPage(nil), nil
	case "custom_pages_custom_asset_result":
		return client.CustomPagesCustomAssetResult(nil), nil
	case "custom_pages_custom_asset_result_list":
		return client.CustomPagesCustomAssetResultList(nil), nil
	case "custom_pages_preview_token_result":
		return client.CustomPagesPreviewTokenResult(nil), nil
	case "managed_transform":
		return client.ManagedTransform(nil), nil
	case "observatory_availability":
		return client.ObservatoryAvailability(nil), nil
	case "observatory_create_schedule":
		return client.ObservatoryCreateSchedule(nil), nil
	case "observatory_page_test_response_collection":
		return client.ObservatoryPageTestResponseCollection(nil), nil
	case "observatory_page_test_response_single":
		return client.ObservatoryPageTestResponseSingle(nil), nil
	case "observatory_pages_response_collection":
		return client.ObservatoryPagesResponseCollection(nil), nil
	case "observatory_schedule_response_single":
		return client.ObservatoryScheduleResponseSingle(nil), nil
	case "observatory_trend":
		return client.ObservatoryTrend(nil), nil
	case "origin_cloud_region":
		return client.OriginCloudRegion(nil), nil
	case "origin_post_quantum":
		return client.OriginPostQuantum(nil), nil
	case "schedule":
		return client.Schedule(nil), nil
	case "smart_shield":
		return client.SmartShield(nil), nil
	case "smart_tiered_cache":
		return client.SmartTieredCache(nil), nil
	case "smartshield_response_collection":
		return client.SmartshieldResponseCollection(nil), nil
	case "smartshield_single_hc":
		return client.SmartshieldSingleHc(nil), nil
	case "smartshield_single_hc_id":
		return client.SmartshieldSingleHcId(nil), nil
	case "test":
		return client.Test(nil), nil
	case "tiered_caching":
		return client.TieredCaching(nil), nil
	case "url_normalization":
		return client.UrlNormalization(nil), nil
	case "zone_cache_setting":
		return client.ZoneCacheSetting(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
