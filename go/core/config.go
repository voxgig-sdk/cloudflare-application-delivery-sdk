package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareApplicationDelivery",
			"slug": "cloudflare-application-delivery",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"argo_config_api_response_single": map[string]any{},
				"cache_purge_api_response_single_id": map[string]any{},
				"cache_reserve_clear": map[string]any{},
				"custom_assets_for_a_zone": map[string]any{},
				"custom_assets_for_an_account": map[string]any{},
				"custom_page": map[string]any{},
				"custom_pages_custom_asset_result": map[string]any{},
				"custom_pages_custom_asset_result_list": map[string]any{},
				"custom_pages_preview_token_result": map[string]any{},
				"managed_transform": map[string]any{},
				"observatory_availability": map[string]any{},
				"observatory_create_schedule": map[string]any{},
				"observatory_page_test_response_collection": map[string]any{},
				"observatory_page_test_response_single": map[string]any{},
				"observatory_pages_response_collection": map[string]any{},
				"observatory_schedule_response_single": map[string]any{},
				"observatory_trend": map[string]any{},
				"origin_cloud_region": map[string]any{},
				"origin_post_quantum": map[string]any{},
				"schedule": map[string]any{},
				"smart_shield": map[string]any{},
				"smart_tiered_cache": map[string]any{},
				"smartshield_response_collection": map[string]any{},
				"smartshield_single_hc": map[string]any{},
				"smartshield_single_hc_id": map[string]any{},
				"test": map[string]any{},
				"tiered_caching": map[string]any{},
				"url_normalization": map[string]any{},
				"zone_cache_setting": map[string]any{},
			},
		},
		"entity": map[string]any{
			"argo_config_api_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Describes a successful API response.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Specifies the enablement value of Argo Smart Routing.",
					},
				},
				"name": "argo_config_api_response_single",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/argo/smart_routing",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "argo",
									},
									map[string]any{
										"lit": "smart_routing",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"argo",
									"smart_routing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/argo/smart_routing",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "argo",
									},
									map[string]any{
										"lit": "smart_routing",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"argo",
									"smart_routing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cache_purge_api_response_single_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates the API call's success or failure.",
					},
				},
				"name": "cache_purge_api_response_single_id",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/purge_cache",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "purge_cache",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"purge_cache",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cache_reserve_clear": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$OBJECT`",
							},
							"list": map[string]any{
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "cache_reserve_clear",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/smart_shield/cache_reserve_clear",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "cache_reserve_clear",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"cache_reserve_clear",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/smart_shield/cache_reserve_clear",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "cache_reserve_clear",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"cache_reserve_clear",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_assets_for_a_zone": map[string]any{
				"fields": []any{},
				"name": "custom_assets_for_a_zone",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_name",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_assets_for_an_account": map[string]any{
				"fields": []any{},
				"name": "custom_assets_for_an_account",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"asset_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_page": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_on",
						"title": "Created On",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_on",
						"title": "Modified On",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "preview_target",
						"title": "Preview Target",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_tokens",
						"title": "Required Tokens",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The custom page state.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The URL associated with the custom page.",
						"format": "uri",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_page",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_pages",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_pages",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_pages/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ratelimit_block",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_pages/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ratelimit_block",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/custom_pages/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ratelimit_block",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/custom_pages/{identifier}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"identifier": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "identifier",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ratelimit_block",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_pages_custom_asset_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "A short description of the custom asset.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique name of the custom asset.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL where the asset content is fetched from.",
						"format": "uri",
					},
				},
				"name": "custom_pages_custom_asset_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/custom_pages/assets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/custom_pages/assets",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"asset_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_name",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"asset_name",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/custom_pages/assets/{asset_name}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"var": "asset_name",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"assets",
									"{asset_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "asset_name",
											"orig": "asset_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "my_custom_error_page",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"asset_name",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_pages_custom_asset_result_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "custom_pages_custom_asset_result_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_pages/assets",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_pages/assets",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"assets",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_pages_preview_token_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "act",
						"title": "Act",
						"type": "`$STRING`",
						"req": true,
						"short": "The preview action type.",
					},
					map[string]any{
						"name": "target",
						"title": "Target",
						"type": "`$STRING`",
						"req": true,
						"short": "The target custom page type to preview (e.g.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The URL of the custom page content to preview.",
						"format": "uri",
					},
				},
				"name": "custom_pages_preview_token_result",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/custom_pages/preview_tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "preview_tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_pages",
									"preview_tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/custom_pages/preview_tokens",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_pages",
									},
									map[string]any{
										"lit": "preview_tokens",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_pages",
									"preview_tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"managed_transform": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "A list of error messages.",
					},
					map[string]any{
						"name": "managed_request_headers",
						"title": "Managed Request Headers",
						"type": "`$ARRAY`",
						"short": "The list of Managed Request Transforms.",
					},
					map[string]any{
						"name": "managed_response_headers",
						"title": "Managed Response Headers",
						"type": "`$ARRAY`",
						"short": "The list of Managed Response Transforms.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of warning messages.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A result.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the API call was successful.",
					},
				},
				"name": "managed_transform",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/managed_headers",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "managed_headers",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"managed_headers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/managed_headers",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "managed_headers",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"managed_headers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/managed_headers",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "managed_headers",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"managed_headers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observatory_availability": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "observatory_availability",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/availabilities",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "availabilities",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"availabilities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observatory_create_schedule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "observatory_create_schedule",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/speed_api/schedule/{url}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "schedule",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"schedule",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"url": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "frequency",
											"orig": "frequency",
											"type": "`$STRING`",
											"kind": "query",
											"example": "DAILY",
										},
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"frequency",
										"id",
										"region",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observatory_page_test_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "observatory_page_test_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/pages/{url}/tests",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
									map[string]any{
										"var": "url",
									},
									map[string]any{
										"lit": "tests",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
									"{url}",
									"tests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"region",
										"url",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observatory_page_test_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "observatory_page_test_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/speed_api/pages/{url}/tests",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
									map[string]any{
										"var": "url",
									},
									map[string]any{
										"lit": "tests",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
									"{url}",
									"tests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
									map[string]any{
										"var": "page_id",
									},
									map[string]any{
										"lit": "tests",
									},
									map[string]any{
										"var": "test_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
									"{page_id}",
									"tests",
									"{test_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"url": "page_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "page_id",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "test_id",
											"orig": "test_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page_id",
										"test_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.test",
						},
					},
				},
			},
			"observatory_pages_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "observatory_pages_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/pages",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"observatory_schedule_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "The test schedule.",
					},
				},
				"name": "observatory_schedule_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/schedule/{url}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "schedule",
									},
									map[string]any{
										"var": "url",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"schedule",
									"{url}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"region",
										"url",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.schedule",
						},
					},
				},
			},
			"observatory_trend": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "observatory_trend",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/speed_api/pages/{url}/trend",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
									map[string]any{
										"var": "url",
									},
									map[string]any{
										"lit": "trend",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
									"{url}",
									"trend",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "device_type",
											"orig": "device_type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "DESKTOP",
										},
										map[string]any{
											"name": "end",
											"orig": "end",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2014-01-01T05:20:00.12345Z",
										},
										map[string]any{
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls",
										},
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "us-central1",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2014-01-01T05:20:00.12345Z",
										},
										map[string]any{
											"name": "tz",
											"orig": "tz",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "America/Chicago",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"device_type",
										"end",
										"metric",
										"region",
										"start",
										"tz",
										"url",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"origin_cloud_region": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ip",
						"title": "Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "Origin IP address (IPv4 or IPv6).",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "origin_ip",
						"title": "Origin Ip",
						"type": "`$STRING`",
						"req": true,
						"short": "Origin IP address (IPv4 or IPv6).",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud vendor region identifier.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"short": "Response result for a single origin cloud region mapping.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Pagination metadata for list responses.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "vendor",
						"title": "Vendor",
						"type": "`$STRING`",
						"req": true,
						"short": "Cloud vendor hosting the origin.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "origin_cloud_region",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin/cloud_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions/supported_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
									map[string]any{
										"lit": "supported_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
									"supported_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "supported_region",
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin/cloud_regions/supported_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"lit": "supported_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"supported_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"origin_ip": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "origin_ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "192.0.2.1",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"origin_ip": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "origin_ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "192.0.2.1",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions/batch",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "batch",
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"origin_ip": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "origin_ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "192.0.2.1",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"origin_ip": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "origin_ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "192.0.2.1",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/cache/origin_cloud_regions/batch",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_cloud_regions",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_cloud_regions",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "batch",
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/origin/cloud_regions/batch",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"origin_ip": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "origin_ip",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "192.0.2.1",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/origin/cloud_regions/batch",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin",
									},
									map[string]any{
										"lit": "cloud_regions",
									},
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin",
									"cloud_regions",
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"origin_post_quantum": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Value of the Origin Post Quantum Encryption Setting.",
					},
				},
				"name": "origin_post_quantum",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/origin_post_quantum_encryption",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_post_quantum_encryption",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_post_quantum_encryption",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/cache/origin_post_quantum_encryption",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "origin_post_quantum_encryption",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"origin_post_quantum_encryption",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"schedule": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "schedule",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/speed_api/schedule/{url}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "schedule",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"schedule",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"url": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"region",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"smart_shield": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cache_reserve",
						"title": "Cache Reserve",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "regional_tiered_cache",
						"title": "Regional Tiered Cache",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "smart_routing",
						"title": "Smart Routing",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "smart_tiered_cache",
						"title": "Smart Tiered Cache",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "smart_shield",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/smart_shield",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/smart_shield",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"smart_tiered_cache": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Enable or disable the Smart Tiered Cache.",
					},
				},
				"name": "smart_tiered_cache",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "tiered_cache_smart_topology_enable",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"tiered_cache_smart_topology_enable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "tiered_cache_smart_topology_enable",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"tiered_cache_smart_topology_enable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "tiered_cache_smart_topology_enable",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"tiered_cache_smart_topology_enable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "tiered_cache_smart_topology_enable",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"tiered_cache_smart_topology_enable",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"smartshield_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "smartshield_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"smartshield_single_hc": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
						"req": true,
						"short": "The hostname or IP address of the origin server to run health checks on.",
					},
					map[string]any{
						"name": "check_regions",
						"title": "Check Regions",
						"type": "`$ARRAY`",
						"short": "A list of regions from which to run health checks.",
					},
					map[string]any{
						"name": "consecutive_fails",
						"title": "Consecutive Fails",
						"type": "`$INTEGER`",
						"short": "The number of consecutive fails required from a health check before changing the health to unhealthy.",
					},
					map[string]any{
						"name": "consecutive_successes",
						"title": "Consecutive Successes",
						"type": "`$INTEGER`",
						"short": "The number of consecutive successes required from a health check before changing the health to healthy.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "A human-readable description of the health check.",
					},
					map[string]any{
						"name": "http_config",
						"title": "Http Config",
						"type": "`$OBJECT`",
						"short": "Parameters specific to an HTTP or HTTPS health check.",
					},
					map[string]any{
						"name": "interval",
						"title": "Interval",
						"type": "`$INTEGER`",
						"short": "The interval between each health check.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A short name to identify the health check.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "retries",
						"title": "Retries",
						"type": "`$INTEGER`",
						"short": "The number of retries to attempt in case of a timeout before marking the origin as unhealthy.",
					},
					map[string]any{
						"name": "suspended",
						"title": "Suspended",
						"type": "`$BOOLEAN`",
						"short": "If suspended, no health checks are sent to the origin.",
					},
					map[string]any{
						"name": "tcp_config",
						"title": "Tcp Config",
						"type": "`$OBJECT`",
						"short": "Parameters specific to TCP health check.",
					},
					map[string]any{
						"name": "timeout",
						"title": "Timeout",
						"type": "`$INTEGER`",
						"short": "The timeout (in seconds) before marking the health check as failed.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The protocol to use for the health check.",
					},
				},
				"name": "smartshield_single_hc",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
									map[string]any{
										"var": "healthcheck_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
									"{healthcheck_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "healthcheck_id",
											"orig": "healthcheck_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"healthcheck_id",
										"zone_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
									map[string]any{
										"var": "healthcheck_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
									"{healthcheck_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "healthcheck_id",
											"orig": "healthcheck_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"healthcheck_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
									map[string]any{
										"var": "healthcheck_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
									"{healthcheck_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "healthcheck_id",
											"orig": "healthcheck_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"healthcheck_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"smartshield_single_hc_id": map[string]any{
				"fields": []any{},
				"name": "smartshield_single_hc_id",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "smart_shield",
									},
									map[string]any{
										"lit": "healthchecks",
									},
									map[string]any{
										"var": "healthcheck_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"smart_shield",
									"healthchecks",
									"{healthcheck_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "healthcheck_id",
											"orig": "healthcheck_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"healthcheck_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"test": map[string]any{
				"fields": []any{},
				"name": "test",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/speed_api/pages/{url}/tests",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "speed_api",
									},
									map[string]any{
										"lit": "pages",
									},
									map[string]any{
										"var": "url",
									},
									map[string]any{
										"lit": "tests",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"speed_api",
									"pages",
									"{url}",
									"tests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "region",
											"orig": "region",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"region",
										"url",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tiered_caching": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Enables Tiered Caching.",
					},
				},
				"name": "tiered_caching",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/argo/tiered_caching",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "argo",
									},
									map[string]any{
										"lit": "tiered_caching",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"argo",
									"tiered_caching",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/argo/tiered_caching",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "argo",
									},
									map[string]any{
										"lit": "tiered_caching",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"argo",
									"tiered_caching",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"url_normalization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "A list of error messages.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "A list of warning messages.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A result.",
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$STRING`",
						"req": true,
						"short": "The scope of the URL normalization.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of URL normalization performed by Cloudflare.",
					},
				},
				"name": "url_normalization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/url_normalization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "url_normalization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"url_normalization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/url_normalization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "url_normalization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"url_normalization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/url_normalization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "url_normalization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"url_normalization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "9f1839b6152d298aca64c4e906b6d074",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zone_cache_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Value of the Cache Reserve zone setting.",
					},
				},
				"name": "zone_cache_setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/cache/cache_reserve_clear",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "cache_reserve_clear",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"cache_reserve_clear",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/cache_reserve_clear",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "cache_reserve_clear",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"cache_reserve_clear",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/cache_reserve",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "cache_reserve",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"cache_reserve",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/regional_tiered_cache",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "regional_tiered_cache",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"regional_tiered_cache",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/cache/variants",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "variants",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"variants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/cache/variants",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "variants",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"variants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/cache_reserve",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "cache_reserve",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"cache_reserve",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/regional_tiered_cache",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "regional_tiered_cache",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"regional_tiered_cache",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/cache/variants",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "cache",
									},
									map[string]any{
										"lit": "variants",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"cache",
									"variants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
