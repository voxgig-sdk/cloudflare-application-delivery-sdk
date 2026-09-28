-- ObservatoryScheduleResponseSingle entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-application-delivery_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ObservatoryScheduleResponseSingleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ObservatoryScheduleResponseSingle(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = observatory_schedule_response_single_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "observatory_schedule_response_single." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_SCHEDULE_RESPONSE_SINGLE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local observatory_schedule_response_single_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.observatory_schedule_response_single")))
    local observatory_schedule_response_single_ref01_data = nil
    if #observatory_schedule_response_single_ref01_data_raw > 0 then
      observatory_schedule_response_single_ref01_data = helpers.to_map(observatory_schedule_response_single_ref01_data_raw[1][2])
    end

    -- LOAD
    local observatory_schedule_response_single_ref01_ent = client:ObservatoryScheduleResponseSingle(nil)
    local observatory_schedule_response_single_ref01_match_dt0 = {}
    local observatory_schedule_response_single_ref01_data_dt0_loaded, err = observatory_schedule_response_single_ref01_ent:load(observatory_schedule_response_single_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(observatory_schedule_response_single_ref01_data_dt0_loaded)

  end)
end)

function observatory_schedule_response_single_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/observatory_schedule_response_single/ObservatoryScheduleResponseSingleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read observatory_schedule_response_single test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "observatory_schedule_response_single01", "observatory_schedule_response_single02", "observatory_schedule_response_single03", "schedule01", "schedule02", "schedule03", "zone01" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_SCHEDULE_RESPONSE_SINGLE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_SCHEDULE_RESPONSE_SINGLE_ENTID"] = idmap,
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_SCHEDULE_RESPONSE_SINGLE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
