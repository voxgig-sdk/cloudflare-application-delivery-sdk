"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ObservatoryCreateScheduleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareApplicationDeliverySDK.test();
        const ent = testsdk.ObservatoryCreateSchedule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'observatory_create_schedule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "observatory_create_schedule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /zones/{zone_id}/speed_api/schedule/{url}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "example.com", "k": "param", "n": "id", "or": "url", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "DAILY", "k": "query", "n": "frequency", "or": "frequency", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "region", "or": "region", "r": false, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/speed_api/schedule/{url}", "q": { "exist": ["frequency", "id", "region", "zone_id"] }, "r": { "param": { "url": "id" } }, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "speed_api" }, { "lit": "schedule" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "observatory_create_schedule", "name__orig": "observatory_create_schedule", "Name": "ObservatoryCreateSchedule", "name_": "observatory_create_schedule", "name-": "observatory-create-schedule", "NAME": "OBSERVATORY_CREATE_SCHEDULE", "index$": 11 }, { "active": true, "entity": "observatory_create_schedule", "key$": "BasicObservatoryCreateScheduleFlow", "kind": "basic", "name": "BasicObservatoryCreateScheduleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "observatory_create_schedule_ref01" }, "m": { "url": "url01", "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ObservatoryCreateSchedule', { "POST /zones/{zone_id}/speed_api/schedule/{url}": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/observatory_identifier" }, "index$": 0 }, { "name": "url", "in": "path", "required": true, "schema": { "description": "A URL.", "type": "string", "example": "example.com", "x-auditable": true, "x-ref": "#/components/schemas/observatory_url" }, "index$": 1 }, { "name": "region", "in": "query", "schema": { "allOf": [{ "description": "A test region.", "type": "string", "example": "us-central1", "enum": ["asia-east1", "asia-northeast1", "asia-northeast2", "asia-south1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west8", "europe-west9", "me-west1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-south1", "us-west1"], "x-auditable": true, "x-ref": "#/components/schemas/observatory_region" }, { "default": "us-central1", "type": "string" }] }, "x-stainless-terraform-configurability": "computed_optional", "index$": 2 }, { "name": "frequency", "in": "query", "description": "The frequency of the scheduled test. Defaults to WEEKLY for free plans, DAILY for paid plans.", "schema": { "description": "The frequency of the test.", "type": "string", "example": "DAILY", "enum": ["DAILY", "WEEKLY"], "x-auditable": true, "x-ref": "#/components/schemas/observatory_schedule_frequency" }, "x-stainless-terraform-configurability": "computed_optional", "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const observatory_create_schedule_ref01_ent = client.ObservatoryCreateSchedule();
        let observatory_create_schedule_ref01_data = setup.data.new.observatory_create_schedule['observatory_create_schedule_ref01'];
        observatory_create_schedule_ref01_data['url'] = setup.idmap['url01'];
        observatory_create_schedule_ref01_data['zone_id'] = setup.idmap['zone01'];
        observatory_create_schedule_ref01_data = (await observatory_create_schedule_ref01_ent.create(observatory_create_schedule_ref01_data)).data();
        (0, node_assert_1.default)(null != observatory_create_schedule_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/observatory_create_schedule/ObservatoryCreateScheduleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareApplicationDeliverySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['observatory_create_schedule01', 'observatory_create_schedule02', 'observatory_create_schedule03', 'url01', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_CREATE_SCHEDULE_ENTID': idmap,
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_CREATE_SCHEDULE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_CREATE_SCHEDULE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareApplicationDeliverySDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_APPLICATION_DELIVERY_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ObservatoryCreateScheduleEntity.test.js.map