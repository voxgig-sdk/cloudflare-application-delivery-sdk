-- CloudflareApplicationDelivery SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CloudflareApplicationDelivery",
      slug = "cloudflare-application-delivery",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.cloudflare.com/client/v4",
      auth = {
        prefix = "",
        name = "X-Auth-Email",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["argo_config_api_response_single"] = {},
        ["cache_purge_api_response_single_id"] = {},
        ["cache_reserve_clear"] = {},
        ["custom_assets_for_a_zone"] = {},
        ["custom_assets_for_an_account"] = {},
        ["custom_page"] = {},
        ["custom_pages_custom_asset_result"] = {},
        ["custom_pages_custom_asset_result_list"] = {},
        ["custom_pages_preview_token_result"] = {},
        ["managed_transform"] = {},
        ["observatory_availability"] = {},
        ["observatory_create_schedule"] = {},
        ["observatory_page_test_response_collection"] = {},
        ["observatory_page_test_response_single"] = {},
        ["observatory_pages_response_collection"] = {},
        ["observatory_schedule_response_single"] = {},
        ["observatory_trend"] = {},
        ["origin_cloud_region"] = {},
        ["origin_post_quantum"] = {},
        ["schedule"] = {},
        ["smart_shield"] = {},
        ["smart_tiered_cache"] = {},
        ["smartshield_response_collection"] = {},
        ["smartshield_single_hc"] = {},
        ["smartshield_single_hc_id"] = {},
        ["test"] = {},
        ["tiered_caching"] = {},
        ["url_normalization"] = {},
        ["zone_cache_setting"] = {},
      },
    },
    entity = {
      ["argo_config_api_response_single"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Describes a successful API response.",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Specifies the enablement value of Argo Smart Routing.",
          },
        },
        ["name"] = "argo_config_api_response_single",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/argo/smart_routing",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "argo",
                  },
                  {
                    ["lit"] = "smart_routing",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "argo",
                  "smart_routing",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/argo/smart_routing",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "argo",
                  },
                  {
                    ["lit"] = "smart_routing",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "argo",
                  "smart_routing",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cache_purge_api_response_single_id"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Indicates the API call's success or failure.",
          },
        },
        ["name"] = "cache_purge_api_response_single_id",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/purge_cache",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "purge_cache",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "purge_cache",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cache_reserve_clear"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$OBJECT`",
              },
              ["list"] = {
                ["type"] = "`$OBJECT`",
              },
            },
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful.",
          },
        },
        ["name"] = "cache_reserve_clear",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/smart_shield/cache_reserve_clear",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "cache_reserve_clear",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "cache_reserve_clear",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/smart_shield/cache_reserve_clear",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "cache_reserve_clear",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "cache_reserve_clear",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_assets_for_a_zone"] = {
        ["fields"] = {},
        ["name"] = "custom_assets_for_a_zone",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "asset_name",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_assets_for_an_account"] = {
        ["fields"] = {},
        ["name"] = "custom_assets_for_an_account",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "asset_name",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_page"] = {
        ["fields"] = {
          {
            ["name"] = "created_on",
            ["title"] = "Created On",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "modified_on",
            ["title"] = "Modified On",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "preview_target",
            ["title"] = "Preview Target",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "required_tokens",
            ["title"] = "Required Tokens",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "state",
            ["title"] = "State",
            ["type"] = "`$STRING`",
            ["op"] = {
              ["update"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The custom page state.",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["op"] = {
              ["update"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The URL associated with the custom page.",
            ["format"] = "uri",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_page",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/custom_pages",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/custom_pages",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/custom_pages/{identifier}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["identifier"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "identifier",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "ratelimit_block",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/custom_pages/{identifier}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["identifier"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "identifier",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "ratelimit_block",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/accounts/{account_id}/custom_pages/{identifier}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["identifier"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "identifier",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "ratelimit_block",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/custom_pages/{identifier}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["identifier"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "identifier",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "ratelimit_block",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_pages_custom_asset_result"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "A short description of the custom asset.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The unique name of the custom asset.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The URL where the asset content is fetched from.",
            ["format"] = "uri",
          },
        },
        ["name"] = "custom_pages_custom_asset_result",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/custom_pages/assets",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "assets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/custom_pages/assets",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "assets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "asset_name",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "asset_name",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/accounts/{account_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "asset_name",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/custom_pages/assets/{asset_name}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                  {
                    ["var"] = "asset_name",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "assets",
                  "{asset_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "asset_name",
                      ["orig"] = "asset_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "my_custom_error_page",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "asset_name",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_pages_custom_asset_result_list"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "custom_pages_custom_asset_result_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/custom_pages/assets",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "assets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 20,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "page",
                    "per_page",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/custom_pages/assets",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "assets",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "assets",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 20,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["custom_pages_preview_token_result"] = {
        ["fields"] = {
          {
            ["name"] = "act",
            ["title"] = "Act",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The preview action type.",
          },
          {
            ["name"] = "target",
            ["title"] = "Target",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The target custom page type to preview (e.g.",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The URL of the custom page content to preview.",
            ["format"] = "uri",
          },
        },
        ["name"] = "custom_pages_preview_token_result",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/custom_pages/preview_tokens",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "preview_tokens",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "custom_pages",
                  "preview_tokens",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/custom_pages/preview_tokens",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "custom_pages",
                  },
                  {
                    ["lit"] = "preview_tokens",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "custom_pages",
                  "preview_tokens",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["managed_transform"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "A list of error messages.",
          },
          {
            ["name"] = "managed_request_headers",
            ["title"] = "Managed Request Headers",
            ["type"] = "`$ARRAY`",
            ["short"] = "The list of Managed Request Transforms.",
          },
          {
            ["name"] = "managed_response_headers",
            ["title"] = "Managed Response Headers",
            ["type"] = "`$ARRAY`",
            ["short"] = "The list of Managed Response Transforms.",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "A list of warning messages.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "A result.",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether the API call was successful.",
          },
        },
        ["name"] = "managed_transform",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/managed_headers",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "managed_headers",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "managed_headers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/managed_headers",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "managed_headers",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "managed_headers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/managed_headers",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "managed_headers",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "managed_headers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observatory_availability"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "observatory_availability",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/availabilities",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "availabilities",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "availabilities",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observatory_create_schedule"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "observatory_create_schedule",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/speed_api/schedule/{url}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "schedule",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "schedule",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["url"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "frequency",
                      ["orig"] = "frequency",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "DAILY",
                    },
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observatory_page_test_response_collection"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "result_info",
            ["title"] = "Result Info",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "observatory_page_test_response_collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/pages/{url}/tests",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                  {
                    ["var"] = "url",
                  },
                  {
                    ["lit"] = "tests",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                  "{url}",
                  "tests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 20,
                    },
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observatory_page_test_response_single"] = {
        ["fields"] = {
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "observatory_page_test_response_single",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/speed_api/pages/{url}/tests",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                  {
                    ["var"] = "url",
                  },
                  {
                    ["lit"] = "tests",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                  "{url}",
                  "tests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                  {
                    ["var"] = "page_id",
                  },
                  {
                    ["lit"] = "tests",
                  },
                  {
                    ["var"] = "test_id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                  "{page_id}",
                  "tests",
                  "{test_id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["url"] = "page_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "page_id",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "test_id",
                      ["orig"] = "test_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page_id",
                    "test_id",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.test",
            },
          },
        },
      },
      ["observatory_pages_response_collection"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "observatory_pages_response_collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/pages",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["observatory_schedule_response_single"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["short"] = "The test schedule.",
          },
        },
        ["name"] = "observatory_schedule_response_single",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/schedule/{url}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "schedule",
                  },
                  {
                    ["var"] = "url",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "schedule",
                  "{url}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "region",
                    "url",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.schedule",
            },
          },
        },
      },
      ["observatory_trend"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "observatory_trend",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/speed_api/pages/{url}/trend",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                  {
                    ["var"] = "url",
                  },
                  {
                    ["lit"] = "trend",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                  "{url}",
                  "trend",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "device_type",
                      ["orig"] = "device_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "DESKTOP",
                    },
                    {
                      ["name"] = "end",
                      ["orig"] = "end",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "2014-01-01T05:20:00.12345Z",
                    },
                    {
                      ["name"] = "metric",
                      ["orig"] = "metric",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls",
                    },
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "us-central1",
                    },
                    {
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "2014-01-01T05:20:00.12345Z",
                    },
                    {
                      ["name"] = "tz",
                      ["orig"] = "tz",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "America/Chicago",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["origin_cloud_region"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ip",
            ["title"] = "Ip",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Origin IP address (IPv4 or IPv6).",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$ARRAY`",
              },
            },
          },
          {
            ["name"] = "origin_ip",
            ["title"] = "Origin Ip",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Origin IP address (IPv4 or IPv6).",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Cloud vendor region identifier.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$OBJECT`",
              },
            },
            ["short"] = "Response result for a single origin cloud region mapping.",
          },
          {
            ["name"] = "result_info",
            ["title"] = "Result Info",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Pagination metadata for list responses.",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["update"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether the API call was successful.",
          },
          {
            ["name"] = "vendor",
            ["title"] = "Vendor",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Cloud vendor hosting the origin.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "origin_cloud_region",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 20,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions/supported_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                  {
                    ["lit"] = "supported_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                  "supported_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "supported_region",
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/supported_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["lit"] = "supported_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "supported_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["origin_ip"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "origin_ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "192.0.2.1",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["origin_ip"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "origin_ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "192.0.2.1",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions/batch",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                  {
                    ["lit"] = "batch",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                  "batch",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "batch",
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["origin_ip"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "origin_ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "192.0.2.1",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["origin_ip"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "origin_ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "192.0.2.1",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/cache/origin_cloud_regions/batch",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_cloud_regions",
                  },
                  {
                    ["lit"] = "batch",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_cloud_regions",
                  "batch",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "batch",
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/batch",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["lit"] = "batch",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "batch",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/{origin_ip}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["origin_ip"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "origin_ip",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "192.0.2.1",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/origin/cloud_regions/batch",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "origin",
                  },
                  {
                    ["lit"] = "cloud_regions",
                  },
                  {
                    ["lit"] = "batch",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "origin",
                  "cloud_regions",
                  "batch",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["origin_post_quantum"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Value of the Origin Post Quantum Encryption Setting.",
          },
        },
        ["name"] = "origin_post_quantum",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/origin_post_quantum_encryption",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_post_quantum_encryption",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_post_quantum_encryption",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/cache/origin_post_quantum_encryption",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "origin_post_quantum_encryption",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "origin_post_quantum_encryption",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["schedule"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "schedule",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/speed_api/schedule/{url}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "schedule",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "schedule",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["url"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "region",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["smart_shield"] = {
        ["fields"] = {
          {
            ["name"] = "cache_reserve",
            ["title"] = "Cache Reserve",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "regional_tiered_cache",
            ["title"] = "Regional Tiered Cache",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "smart_routing",
            ["title"] = "Smart Routing",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "smart_tiered_cache",
            ["title"] = "Smart Tiered Cache",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful.",
          },
        },
        ["name"] = "smart_shield",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/smart_shield",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/smart_shield",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["smart_tiered_cache"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Enable or disable the Smart Tiered Cache.",
          },
        },
        ["name"] = "smart_tiered_cache",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "tiered_cache_smart_topology_enable",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "tiered_cache_smart_topology_enable",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "tiered_cache_smart_topology_enable",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "tiered_cache_smart_topology_enable",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "tiered_cache_smart_topology_enable",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "tiered_cache_smart_topology_enable",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "tiered_cache_smart_topology_enable",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "tiered_cache_smart_topology_enable",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["smartshield_response_collection"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "smartshield_response_collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 25,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["smartshield_single_hc"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["title"] = "Address",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The hostname or IP address of the origin server to run health checks on.",
          },
          {
            ["name"] = "check_regions",
            ["title"] = "Check Regions",
            ["type"] = "`$ARRAY`",
            ["short"] = "A list of regions from which to run health checks.",
          },
          {
            ["name"] = "consecutive_fails",
            ["title"] = "Consecutive Fails",
            ["type"] = "`$INTEGER`",
            ["short"] = "The number of consecutive fails required from a health check before changing the health to unhealthy.",
          },
          {
            ["name"] = "consecutive_successes",
            ["title"] = "Consecutive Successes",
            ["type"] = "`$INTEGER`",
            ["short"] = "The number of consecutive successes required from a health check before changing the health to healthy.",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "A human-readable description of the health check.",
          },
          {
            ["name"] = "http_config",
            ["title"] = "Http Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Parameters specific to an HTTP or HTTPS health check.",
          },
          {
            ["name"] = "interval",
            ["title"] = "Interval",
            ["type"] = "`$INTEGER`",
            ["short"] = "The interval between each health check.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "A short name to identify the health check.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "retries",
            ["title"] = "Retries",
            ["type"] = "`$INTEGER`",
            ["short"] = "The number of retries to attempt in case of a timeout before marking the origin as unhealthy.",
          },
          {
            ["name"] = "suspended",
            ["title"] = "Suspended",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "If suspended, no health checks are sent to the origin.",
          },
          {
            ["name"] = "tcp_config",
            ["title"] = "Tcp Config",
            ["type"] = "`$OBJECT`",
            ["short"] = "Parameters specific to TCP health check.",
          },
          {
            ["name"] = "timeout",
            ["title"] = "Timeout",
            ["type"] = "`$INTEGER`",
            ["short"] = "The timeout (in seconds) before marking the health check as failed.",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "The protocol to use for the health check.",
          },
        },
        ["name"] = "smartshield_single_hc",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                  {
                    ["var"] = "healthcheck_id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                  "{healthcheck_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "healthcheck_id",
                      ["orig"] = "healthcheck_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "healthcheck_id",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["patch"] = {
            ["input"] = "data",
            ["name"] = "patch",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                  {
                    ["var"] = "healthcheck_id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                  "{healthcheck_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "healthcheck_id",
                      ["orig"] = "healthcheck_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "healthcheck_id",
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                  {
                    ["var"] = "healthcheck_id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                  "{healthcheck_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "healthcheck_id",
                      ["orig"] = "healthcheck_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "healthcheck_id",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["smartshield_single_hc_id"] = {
        ["fields"] = {},
        ["name"] = "smartshield_single_hc_id",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "smart_shield",
                  },
                  {
                    ["lit"] = "healthchecks",
                  },
                  {
                    ["var"] = "healthcheck_id",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "smart_shield",
                  "healthchecks",
                  "{healthcheck_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "healthcheck_id",
                      ["orig"] = "healthcheck_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "healthcheck_id",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["test"] = {
        ["fields"] = {},
        ["name"] = "test",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/speed_api/pages/{url}/tests",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "speed_api",
                  },
                  {
                    ["lit"] = "pages",
                  },
                  {
                    ["var"] = "url",
                  },
                  {
                    ["lit"] = "tests",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "speed_api",
                  "pages",
                  "{url}",
                  "tests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "example.com",
                    },
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "region",
                    "url",
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tiered_caching"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Enables Tiered Caching.",
          },
        },
        ["name"] = "tiered_caching",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/argo/tiered_caching",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "argo",
                  },
                  {
                    ["lit"] = "tiered_caching",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "argo",
                  "tiered_caching",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/argo/tiered_caching",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "argo",
                  },
                  {
                    ["lit"] = "tiered_caching",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "argo",
                  "tiered_caching",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["url_normalization"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$ARRAY`",
              },
            },
            ["short"] = "A list of error messages.",
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "A list of warning messages.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "A result.",
          },
          {
            ["name"] = "scope",
            ["title"] = "Scope",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The scope of the URL normalization.",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$BOOLEAN`",
              },
            },
            ["short"] = "Whether the API call was successful.",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The type of URL normalization performed by Cloudflare.",
          },
        },
        ["name"] = "url_normalization",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/url_normalization",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "url_normalization",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "url_normalization",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/url_normalization",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "url_normalization",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "url_normalization",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/url_normalization",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "url_normalization",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "url_normalization",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "9f1839b6152d298aca64c4e906b6d074",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["zone_cache_setting"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful.",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Value of the Cache Reserve zone setting.",
          },
        },
        ["name"] = "zone_cache_setting",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/zones/{zone_id}/cache/cache_reserve_clear",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "cache_reserve_clear",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "cache_reserve_clear",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/cache_reserve_clear",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "cache_reserve_clear",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "cache_reserve_clear",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/cache_reserve",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "cache_reserve",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "cache_reserve",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/regional_tiered_cache",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "regional_tiered_cache",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "regional_tiered_cache",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/cache/variants",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "variants",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "variants",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/zones/{zone_id}/cache/variants",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "variants",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "variants",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/cache_reserve",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "cache_reserve",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "cache_reserve",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/regional_tiered_cache",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "regional_tiered_cache",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "regional_tiered_cache",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/zones/{zone_id}/cache/variants",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "cache",
                  },
                  {
                    ["lit"] = "variants",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "cache",
                  "variants",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
