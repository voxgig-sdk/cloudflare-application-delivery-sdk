

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareApplicationDeliverySDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CustomPagesPreviewTokenResultEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.CustomPagesPreviewTokenResult()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_pages_preview_token_result.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"act":{"a":true,"h":"Act","n":"act","r":true,"sh":"The preview action type.","t":"`$STRING`","key$":"act","index$":0},"target":{"a":true,"h":"Target","n":"target","r":true,"sh":"The target custom page type to preview (e.g.","t":"`$STRING`","key$":"target","index$":1},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"sh":"The URL of the custom page content to preview.","t":"`$STRING`","key$":"url","index$":2}},"name":"custom_pages_preview_token_result","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /accounts/{account_id}/custom_pages/preview_tokens","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/accounts/{account_id}/custom_pages/preview_tokens","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_pages"},{"lit":"preview_tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /zones/{zone_id}/custom_pages/preview_tokens","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/custom_pages/preview_tokens","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"},{"lit":"preview_tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"custom_pages_preview_token_result","name__orig":"custom_pages_preview_token_result","Name":"CustomPagesPreviewTokenResult","name_":"custom_pages_preview_token_result","name-":"custom-pages-preview-token-result","NAME":"CUSTOM_PAGES_PREVIEW_TOKEN_RESULT","index$":8}, {"active":true,"entity":"custom_pages_preview_token_result","key$":"BasicCustomPagesPreviewTokenResultFlow","kind":"basic","name":"BasicCustomPagesPreviewTokenResultFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_pages_preview_token_result_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CustomPagesPreviewTokenResult', {"POST /accounts/{account_id}/custom_pages/preview_tokens":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"act":{"description":"The preview action type. Required for request parsing but not used in token generation. Typically set to \"preview\".","type":"string","example":"preview","key$":"act"},"target":{"description":"The target custom page type to preview (e.g. \"block:waf\"). Encoded as the \"endpoint\" claim in the resulting JWT.","type":"string","example":"block:waf","key$":"target"},"url":{"description":"The URL of the custom page content to preview. Encoded as the \"zone\" claim in the resulting JWT.","type":"string","format":"uri","example":"https://example.com/error.html","key$":"url"}},"required":["act","target","url"],"x-ref":"#/components/schemas/custom-pages_preview_request","index$":1}}}},"parameters":[{"name":"account_id","in":"path","description":"Identifier of the Cloudflare account.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0}]},"POST /zones/{zone_id}/custom_pages/preview_tokens":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"act":{"description":"The preview action type. Required for request parsing but not used in token generation. Typically set to \"preview\".","type":"string","example":"preview","key$":"act"},"target":{"description":"The target custom page type to preview (e.g. \"block:waf\"). Encoded as the \"endpoint\" claim in the resulting JWT.","type":"string","example":"block:waf","key$":"target"},"url":{"description":"The URL of the custom page content to preview. Encoded as the \"zone\" claim in the resulting JWT.","type":"string","format":"uri","example":"https://example.com/error.html","key$":"url"}},"required":["act","target","url"],"x-ref":"#/components/schemas/custom-pages_preview_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_pages_preview_token_result_ref01_ent = client.CustomPagesPreviewTokenResult()
    let custom_pages_preview_token_result_ref01_data = setup.data.new.custom_pages_preview_token_result['custom_pages_preview_token_result_ref01']
    custom_pages_preview_token_result_ref01_data['zone_id'] = setup.idmap['zone01']

    custom_pages_preview_token_result_ref01_data = (await custom_pages_preview_token_result_ref01_ent.create(custom_pages_preview_token_result_ref01_data)).data()
    assert(null != custom_pages_preview_token_result_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_pages_preview_token_result/CustomPagesPreviewTokenResultTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareApplicationDeliverySDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['custom_pages_preview_token_result01','custom_pages_preview_token_result02','custom_pages_preview_token_result03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_PREVIEW_TOKEN_RESULT_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_PREVIEW_TOKEN_RESULT_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_PREVIEW_TOKEN_RESULT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareApplicationDeliverySDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
