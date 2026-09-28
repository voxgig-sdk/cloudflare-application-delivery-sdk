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
(0, node_test_1.describe)('CustomPagesCustomAssetResultEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareApplicationDeliverySDK.test();
        const ent = testsdk.CustomPagesCustomAssetResult();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'custom_pages_custom_asset_result.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "A short description of the custom asset.", "t": "`$STRING`", "key$": "description", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The unique name of the custom asset.", "t": "`$STRING`", "key$": "name", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "sh": "The URL where the asset content is fetched from.", "t": "`$STRING`", "key$": "url", "index$": 3 } }, "name": "custom_pages_custom_asset_result", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/custom_pages/assets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/custom_pages/assets", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "custom_pages" }, { "lit": "assets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /zones/{zone_id}/custom_pages/assets", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/custom_pages/assets", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "custom_pages" }, { "lit": "assets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/custom_pages/assets/{asset_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my_custom_error_page", "k": "param", "n": "asset_name", "or": "asset_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/custom_pages/assets/{asset_name}", "q": { "exist": ["account_id", "asset_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "custom_pages" }, { "lit": "assets" }, { "var": "asset_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /zones/{zone_id}/custom_pages/assets/{asset_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_custom_error_page", "k": "param", "n": "asset_name", "or": "asset_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/custom_pages/assets/{asset_name}", "q": { "exist": ["asset_name", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "custom_pages" }, { "lit": "assets" }, { "var": "asset_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/custom_pages/assets/{asset_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "my_custom_error_page", "k": "param", "n": "asset_name", "or": "asset_name", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/custom_pages/assets/{asset_name}", "q": { "exist": ["account_id", "asset_name"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "custom_pages" }, { "lit": "assets" }, { "var": "asset_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /zones/{zone_id}/custom_pages/assets/{asset_name}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my_custom_error_page", "k": "param", "n": "asset_name", "or": "asset_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/zones/{zone_id}/custom_pages/assets/{asset_name}", "q": { "exist": ["asset_name", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "custom_pages" }, { "lit": "assets" }, { "var": "asset_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "custom_pages_custom_asset_result", "name__orig": "custom_pages_custom_asset_result", "Name": "CustomPagesCustomAssetResult", "name_": "custom_pages_custom_asset_result", "name-": "custom-pages-custom-asset-result", "NAME": "CUSTOM_PAGES_CUSTOM_ASSET_RESULT", "index$": 6 }, { "active": true, "entity": "custom_pages_custom_asset_result", "key$": "BasicCustomPagesCustomAssetResultFlow", "kind": "basic", "name": "BasicCustomPagesCustomAssetResultFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "custom_pages_custom_asset_result_ref01" }, "m": { "account_id": "account01", "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "zone_id": "zone01" }, "i": { "ref": "custom_pages_custom_asset_result_ref01", "srcdatavar": "custom_pages_custom_asset_result_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-custom_pages_custom_asset_result_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "custom_pages_custom_asset_result_ref01", "srcdatavar": "custom_pages_custom_asset_result_ref01_data", "suffix": "_dt0" }, "m": { "id": "custom_pages_custom_asset_result01", "zone_id": "zone01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-custom_pages_custom_asset_result_ref01" } }], "index$": 2 }] }, 'CustomPagesCustomAssetResult', { "POST /accounts/{account_id}/custom_pages/assets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "description": { "description": "A short description of the custom asset.", "type": "string", "example": "Custom 500 error page", "x-ref": "#/components/schemas/custom-pages_asset_description", "key$": "description" }, "name": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name", "key$": "name" }, "url": { "description": "The URL where the asset content is fetched from.", "type": "string", "format": "uri", "example": "https://example.com/error.html", "x-ref": "#/components/schemas/custom-pages_asset_url", "key$": "url" } }, "required": ["name", "description", "url"], "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "description": "Identifier of the Cloudflare account.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 0 }] }, "POST /zones/{zone_id}/custom_pages/assets": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "description": { "description": "A short description of the custom asset.", "type": "string", "example": "Custom 500 error page", "x-ref": "#/components/schemas/custom-pages_asset_description", "key$": "description" }, "name": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name", "key$": "name" }, "url": { "description": "The URL where the asset content is fetched from.", "type": "string", "format": "uri", "example": "https://example.com/error.html", "x-ref": "#/components/schemas/custom-pages_asset_url", "key$": "url" } }, "required": ["name", "description", "url"], "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "description": "Identifier of the Cloudflare zone.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/custom_pages/assets/{asset_name}": { "protocol": "http", "parameters": [{ "name": "asset_name", "in": "path", "required": true, "schema": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name" }, "index$": 0 }, { "name": "account_id", "in": "path", "description": "Identifier of the Cloudflare account.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 1 }] }, "GET /zones/{zone_id}/custom_pages/assets/{asset_name}": { "protocol": "http", "parameters": [{ "name": "asset_name", "in": "path", "required": true, "schema": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name" }, "index$": 0 }, { "name": "zone_id", "in": "path", "description": "Identifier of the Cloudflare zone.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/custom_pages/assets/{asset_name}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "description": { "description": "A short description of the custom asset.", "type": "string", "example": "Custom 500 error page", "x-ref": "#/components/schemas/custom-pages_asset_description", "key$": "description" }, "url": { "description": "The URL where the asset content is fetched from.", "type": "string", "format": "uri", "example": "https://example.com/error.html", "x-ref": "#/components/schemas/custom-pages_asset_url", "key$": "url" } }, "required": ["description", "url"], "index$": 1 } } } }, "parameters": [{ "name": "asset_name", "in": "path", "required": true, "schema": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name" }, "index$": 0 }, { "name": "account_id", "in": "path", "description": "Identifier of the Cloudflare account.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 1 }] }, "PUT /zones/{zone_id}/custom_pages/assets/{asset_name}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "properties": { "description": { "description": "A short description of the custom asset.", "type": "string", "example": "Custom 500 error page", "x-ref": "#/components/schemas/custom-pages_asset_description", "key$": "description" }, "url": { "description": "The URL where the asset content is fetched from.", "type": "string", "format": "uri", "example": "https://example.com/error.html", "x-ref": "#/components/schemas/custom-pages_asset_url", "key$": "url" } }, "required": ["description", "url"], "index$": 1 } } } }, "parameters": [{ "name": "asset_name", "in": "path", "required": true, "schema": { "description": "The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).", "type": "string", "example": "my_custom_error_page", "minLength": 1, "pattern": "^[A-Za-z0-9_]+$", "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_asset_name" }, "index$": 0 }, { "name": "zone_id", "in": "path", "description": "Identifier of the Cloudflare zone.", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/custom-pages_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const custom_pages_custom_asset_result_ref01_ent = client.CustomPagesCustomAssetResult();
        let custom_pages_custom_asset_result_ref01_data = setup.data.new.custom_pages_custom_asset_result['custom_pages_custom_asset_result_ref01'];
        custom_pages_custom_asset_result_ref01_data['account_id'] = setup.idmap['account01'];
        custom_pages_custom_asset_result_ref01_data['zone_id'] = setup.idmap['zone01'];
        custom_pages_custom_asset_result_ref01_data = (await custom_pages_custom_asset_result_ref01_ent.create(custom_pages_custom_asset_result_ref01_data)).data();
        (0, node_assert_1.default)(null != custom_pages_custom_asset_result_ref01_data);
        // UPDATE
        const custom_pages_custom_asset_result_ref01_data_up0 = {};
        custom_pages_custom_asset_result_ref01_data_up0['zone_id'] = setup.idmap['zone_id'];
        const custom_pages_custom_asset_result_ref01_markdef_up0 = { name: 'description', value: 'Mark01-custom_pages_custom_asset_result_ref01_' + setup.now };
        custom_pages_custom_asset_result_ref01_data_up0[custom_pages_custom_asset_result_ref01_markdef_up0.name] = custom_pages_custom_asset_result_ref01_markdef_up0.value;
        const custom_pages_custom_asset_result_ref01_resdata_up0 = (await custom_pages_custom_asset_result_ref01_ent.update(custom_pages_custom_asset_result_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != custom_pages_custom_asset_result_ref01_resdata_up0);
        (0, node_assert_1.default)(custom_pages_custom_asset_result_ref01_resdata_up0[custom_pages_custom_asset_result_ref01_markdef_up0.name] === custom_pages_custom_asset_result_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/custom_pages_custom_asset_result/CustomPagesCustomAssetResultTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareApplicationDeliverySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['custom_pages_custom_asset_result01', 'custom_pages_custom_asset_result02', 'custom_pages_custom_asset_result03', 'account01', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID': idmap,
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_ENTID'];
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
//# sourceMappingURL=CustomPagesCustomAssetResultEntity.test.js.map