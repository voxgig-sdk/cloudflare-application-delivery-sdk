-- SmartshieldSingleHc entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-application-delivery_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("SmartshieldSingleHcEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SmartshieldSingleHc(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = smartshield_single_hc_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "smartshield_single_hc." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local smartshield_single_hc_ref01_ent = client:SmartshieldSingleHc(nil)
    local smartshield_single_hc_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.smartshield_single_hc"), "smartshield_single_hc_ref01"))
    smartshield_single_hc_ref01_data["zone_id"] = setup.idmap["zone01"]

    local smartshield_single_hc_ref01_data_result, err = smartshield_single_hc_ref01_ent:create(smartshield_single_hc_ref01_data, nil)
    assert.is_nil(err)
    smartshield_single_hc_ref01_data = helpers.to_map(type(smartshield_single_hc_ref01_data_result) == 'table' and smartshield_single_hc_ref01_data_result.data_get and smartshield_single_hc_ref01_data_result:data_get() or smartshield_single_hc_ref01_data_result)
    assert.is_not_nil(smartshield_single_hc_ref01_data)

    -- UPDATE
    local smartshield_single_hc_ref01_data_up0_up = {
      ["zone_id"] = setup.idmap["zone_id"],
    }

    local smartshield_single_hc_ref01_markdef_up0_name = "address"
    local smartshield_single_hc_ref01_markdef_up0_value = "Mark01-smartshield_single_hc_ref01_" .. tostring(setup.now)
    smartshield_single_hc_ref01_data_up0_up[smartshield_single_hc_ref01_markdef_up0_name] = smartshield_single_hc_ref01_markdef_up0_value

    local smartshield_single_hc_ref01_resdata_up0_result, err = smartshield_single_hc_ref01_ent:update(smartshield_single_hc_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local smartshield_single_hc_ref01_resdata_up0 = helpers.to_map(type(smartshield_single_hc_ref01_resdata_up0_result) == 'table' and smartshield_single_hc_ref01_resdata_up0_result.data_get and smartshield_single_hc_ref01_resdata_up0_result:data_get() or smartshield_single_hc_ref01_resdata_up0_result)
    assert.is_not_nil(smartshield_single_hc_ref01_resdata_up0)
    assert.are.equal(smartshield_single_hc_ref01_resdata_up0[smartshield_single_hc_ref01_markdef_up0_name], smartshield_single_hc_ref01_markdef_up0_value)

    -- LOAD
    local smartshield_single_hc_ref01_match_dt0 = {}
    local smartshield_single_hc_ref01_data_dt0_loaded, err = smartshield_single_hc_ref01_ent:load(smartshield_single_hc_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(smartshield_single_hc_ref01_data_dt0_loaded)

  end)
end)

function smartshield_single_hc_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/smartshield_single_hc/SmartshieldSingleHcTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read smartshield_single_hc test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "smartshield_single_hc01", "smartshield_single_hc02", "smartshield_single_hc03", "zone01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"] = idmap,
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"])
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
