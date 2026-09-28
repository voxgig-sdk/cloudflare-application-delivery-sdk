-- CustomPagesCustomAssetResult entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-application-delivery_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CustomPagesCustomAssetResultEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomPagesCustomAssetResult(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = custom_pages_custom_asset_result_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "custom_pages_custom_asset_result." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local custom_pages_custom_asset_result_ref01_ent = client:CustomPagesCustomAssetResult(nil)
    local custom_pages_custom_asset_result_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.custom_pages_custom_asset_result"), "custom_pages_custom_asset_result_ref01"))
    custom_pages_custom_asset_result_ref01_data["account_id"] = setup.idmap["account01"]
    custom_pages_custom_asset_result_ref01_data["zone_id"] = setup.idmap["zone01"]

    local custom_pages_custom_asset_result_ref01_data_result, err = custom_pages_custom_asset_result_ref01_ent:create(custom_pages_custom_asset_result_ref01_data, nil)
    assert.is_nil(err)
    custom_pages_custom_asset_result_ref01_data = helpers.to_map(type(custom_pages_custom_asset_result_ref01_data_result) == 'table' and custom_pages_custom_asset_result_ref01_data_result.data_get and custom_pages_custom_asset_result_ref01_data_result:data_get() or custom_pages_custom_asset_result_ref01_data_result)
    assert.is_not_nil(custom_pages_custom_asset_result_ref01_data)

    -- UPDATE
    local custom_pages_custom_asset_result_ref01_data_up0_up = {
      ["zone_id"] = setup.idmap["zone_id"],
    }

    local custom_pages_custom_asset_result_ref01_markdef_up0_name = "description"
    local custom_pages_custom_asset_result_ref01_markdef_up0_value = "Mark01-custom_pages_custom_asset_result_ref01_" .. tostring(setup.now)
    custom_pages_custom_asset_result_ref01_data_up0_up[custom_pages_custom_asset_result_ref01_markdef_up0_name] = custom_pages_custom_asset_result_ref01_markdef_up0_value

    local custom_pages_custom_asset_result_ref01_resdata_up0_result, err = custom_pages_custom_asset_result_ref01_ent:update(custom_pages_custom_asset_result_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local custom_pages_custom_asset_result_ref01_resdata_up0 = helpers.to_map(type(custom_pages_custom_asset_result_ref01_resdata_up0_result) == 'table' and custom_pages_custom_asset_result_ref01_resdata_up0_result.data_get and custom_pages_custom_asset_result_ref01_resdata_up0_result:data_get() or custom_pages_custom_asset_result_ref01_resdata_up0_result)
    assert.is_not_nil(custom_pages_custom_asset_result_ref01_resdata_up0)
    assert.are.equal(custom_pages_custom_asset_result_ref01_resdata_up0[custom_pages_custom_asset_result_ref01_markdef_up0_name], custom_pages_custom_asset_result_ref01_markdef_up0_value)

    -- LOAD
    local custom_pages_custom_asset_result_ref01_match_dt0 = {}
    local custom_pages_custom_asset_result_ref01_data_dt0_loaded, err = custom_pages_custom_asset_result_ref01_ent:load(custom_pages_custom_asset_result_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(custom_pages_custom_asset_result_ref01_data_dt0_loaded)

  end)
end)

function custom_pages_custom_asset_result_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/custom_pages_custom_asset_result/CustomPagesCustomAssetResultTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read custom_pages_custom_asset_result test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "custom_pages_custom_asset_result01", "custom_pages_custom_asset_result02", "custom_pages_custom_asset_result03", "account01", "zone01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID"] = idmap,
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["zone_id"] == nil then
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
  end

  if env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
