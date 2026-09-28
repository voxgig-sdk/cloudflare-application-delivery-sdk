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
(0, node_test_1.describe)('CacheReserveClearEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareApplicationDeliverySDK.test();
        const ent = testsdk.CacheReserveClear();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cache_reserve_clear.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "create": { "req": false, "type": "`$OBJECT`" }, "list": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "cache_reserve_clear", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /zones/{zone_id}/smart_shield/cache_reserve_clear", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/smart_shield/cache_reserve_clear", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "smart_shield" }, { "lit": "cache_reserve_clear" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/smart_shield/cache_reserve_clear", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/smart_shield/cache_reserve_clear", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "smart_shield" }, { "lit": "cache_reserve_clear" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "cache_reserve_clear", "name__orig": "cache_reserve_clear", "Name": "CacheReserveClear", "name_": "cache_reserve_clear", "name-": "cache-reserve-clear", "NAME": "CACHE_RESERVE_CLEAR", "index$": 2 }, { "active": true, "entity": "cache_reserve_clear", "key$": "BasicCacheReserveClearFlow", "kind": "basic", "name": "BasicCacheReserveClearFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cache_reserve_clear_ref01" }, "m": { "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "cache_reserve_clear_ref01" } }], "index$": 1 }] }, 'CacheReserveClear', { "POST /zones/{zone_id}/smart_shield/cache_reserve_clear": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/smartshield_identifier" }, "index$": 0 }] }, "GET /zones/{zone_id}/smart_shield/cache_reserve_clear": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/smartshield_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const cache_reserve_clear_ref01_ent = client.CacheReserveClear();
        let cache_reserve_clear_ref01_data = setup.data.new.cache_reserve_clear['cache_reserve_clear_ref01'];
        cache_reserve_clear_ref01_data['zone_id'] = setup.idmap['zone01'];
        cache_reserve_clear_ref01_data = (await cache_reserve_clear_ref01_ent.create(cache_reserve_clear_ref01_data)).data();
        (0, node_assert_1.default)(null != cache_reserve_clear_ref01_data);
        // LIST
        const cache_reserve_clear_ref01_match = {};
        cache_reserve_clear_ref01_match['zone_id'] = setup.idmap['zone01'];
        const cache_reserve_clear_ref01_list = (await cache_reserve_clear_ref01_ent.list(cache_reserve_clear_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cache_reserve_clear/CacheReserveClearTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareApplicationDeliverySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cache_reserve_clear01', 'cache_reserve_clear02', 'cache_reserve_clear03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID': idmap,
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CACHE_RESERVE_CLEAR_ENTID'];
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
//# sourceMappingURL=CacheReserveClearEntity.test.js.map