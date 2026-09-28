-- OriginPostQuantum entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-application-delivery_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("OriginPostQuantumEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:OriginPostQuantum(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = origin_post_quantum_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "origin_post_quantum." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local origin_post_quantum_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.origin_post_quantum")))
    local origin_post_quantum_ref01_data = nil
    if #origin_post_quantum_ref01_data_raw > 0 then
      origin_post_quantum_ref01_data = helpers.to_map(origin_post_quantum_ref01_data_raw[1][2])
    end

    -- UPDATE
    local origin_post_quantum_ref01_ent = client:OriginPostQuantum(nil)
    local origin_post_quantum_ref01_data_up0_up = {
    }

    local origin_post_quantum_ref01_markdef_up0_name = "value"
    local origin_post_quantum_ref01_markdef_up0_value = "Mark01-origin_post_quantum_ref01_" .. tostring(setup.now)
    origin_post_quantum_ref01_data_up0_up[origin_post_quantum_ref01_markdef_up0_name] = origin_post_quantum_ref01_markdef_up0_value

    local origin_post_quantum_ref01_resdata_up0_result, err = origin_post_quantum_ref01_ent:update(origin_post_quantum_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local origin_post_quantum_ref01_resdata_up0 = helpers.to_map(type(origin_post_quantum_ref01_resdata_up0_result) == 'table' and origin_post_quantum_ref01_resdata_up0_result.data_get and origin_post_quantum_ref01_resdata_up0_result:data_get() or origin_post_quantum_ref01_resdata_up0_result)
    assert.is_not_nil(origin_post_quantum_ref01_resdata_up0)
    assert.are.equal(origin_post_quantum_ref01_resdata_up0[origin_post_quantum_ref01_markdef_up0_name], origin_post_quantum_ref01_markdef_up0_value)

    -- LOAD
    local origin_post_quantum_ref01_match_dt0 = {}
    local origin_post_quantum_ref01_data_dt0_loaded, err = origin_post_quantum_ref01_ent:load(origin_post_quantum_ref01_match_dt0, nil)
    assert.is_nil(err)
    assert.is_not_nil(origin_post_quantum_ref01_data_dt0_loaded)

  end)
end)

function origin_post_quantum_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/origin_post_quantum/OriginPostQuantumTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read origin_post_quantum test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "origin_post_quantum01", "origin_post_quantum02", "origin_post_quantum03" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID"] = idmap,
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_POST_QUANTUM_ENTID"])
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
