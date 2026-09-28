# SmartshieldSingleHc entity test

import json
import os
import time

import pytest

from cloudflareapplicationdelivery_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareapplicationdelivery_sdk import CloudflareApplicationDeliverySDK
from cloudflareapplicationdelivery_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSmartshieldSingleHcEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareApplicationDeliverySDK.test(None, None)
        ent = testsdk.SmartshieldSingleHc(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _smartshield_single_hc_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "smartshield_single_hc." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        smartshield_single_hc_ref01_ent = client.SmartshieldSingleHc(None)
        smartshield_single_hc_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.smartshield_single_hc"), "smartshield_single_hc_ref01"))
        smartshield_single_hc_ref01_data["zone_id"] = setup["idmap"]["zone01"]

        smartshield_single_hc_ref01_data = helpers.to_map(runner.entity_data(smartshield_single_hc_ref01_ent.create(smartshield_single_hc_ref01_data, None)))
        assert smartshield_single_hc_ref01_data is not None

        # UPDATE
        smartshield_single_hc_ref01_data_up0_up = {
            "zone_id": setup["idmap"]["zone_id"],
        }

        smartshield_single_hc_ref01_markdef_up0_name = "address"
        smartshield_single_hc_ref01_markdef_up0_value = "Mark01-smartshield_single_hc_ref01_" + str(setup["now"])
        smartshield_single_hc_ref01_data_up0_up[smartshield_single_hc_ref01_markdef_up0_name] = smartshield_single_hc_ref01_markdef_up0_value

        smartshield_single_hc_ref01_resdata_up0 = helpers.to_map(runner.entity_data(smartshield_single_hc_ref01_ent.update(smartshield_single_hc_ref01_data_up0_up, None)))
        assert smartshield_single_hc_ref01_resdata_up0 is not None
        assert smartshield_single_hc_ref01_resdata_up0[smartshield_single_hc_ref01_markdef_up0_name] == smartshield_single_hc_ref01_markdef_up0_value

        # LOAD
        smartshield_single_hc_ref01_match_dt0 = {}
        smartshield_single_hc_ref01_data_dt0_loaded = smartshield_single_hc_ref01_ent.load(smartshield_single_hc_ref01_match_dt0, None)
        assert smartshield_single_hc_ref01_data_dt0_loaded is not None



def _smartshield_single_hc_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/smartshield_single_hc/SmartshieldSingleHcTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareApplicationDeliverySDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["smartshield_single_hc01", "smartshield_single_hc02", "smartshield_single_hc03", "zone01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID": idmap,
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE": "FALSE",
        "CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_APPLICATION_DELIVERY_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_SINGLE_HC_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("zone_id") is None:
        idmap_resolved["zone_id"] = idmap_resolved.get("zone01")

    if env.get("CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_APPLICATION_DELIVERY_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareApplicationDeliverySDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
