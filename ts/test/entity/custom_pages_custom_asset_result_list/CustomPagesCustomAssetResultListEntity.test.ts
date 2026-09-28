

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


describe('CustomPagesCustomAssetResultListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.CustomPagesCustomAssetResultList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_pages_custom_asset_result_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"custom_pages_custom_asset_result_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/custom_pages/assets","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/custom_pages/assets","q":{"exist":["account_id","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_pages"},{"lit":"assets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_pages/assets","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_pages/assets","q":{"exist":["page","per_page","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"},{"lit":"assets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"custom_pages_custom_asset_result_list","name__orig":"custom_pages_custom_asset_result_list","Name":"CustomPagesCustomAssetResultList","name_":"custom_pages_custom_asset_result_list","name-":"custom-pages-custom-asset-result-list","NAME":"CUSTOM_PAGES_CUSTOM_ASSET_RESULT_LIST","index$":7}, {"active":true,"entity":"custom_pages_custom_asset_result_list","key$":"BasicCustomPagesCustomAssetResultListFlow","kind":"basic","name":"BasicCustomPagesCustomAssetResultListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_pages_custom_asset_result_list_ref01"}}],"index$":0}]}, 'CustomPagesCustomAssetResultList', {"GET /accounts/{account_id}/custom_pages/assets":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Identifier of the Cloudflare account.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0},{"name":"page","in":"query","description":"Page number of paginated results.","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of custom assets per page.","schema":{"type":"integer","default":20,"maximum":200,"minimum":1},"index$":2}]},"GET /zones/{zone_id}/custom_pages/assets":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0},{"name":"page","in":"query","description":"Page number of paginated results.","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of custom assets per page.","schema":{"type":"integer","default":20,"maximum":200,"minimum":1},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_pages_custom_asset_result_list_ref01_data = Object.values(setup.data.existing.custom_pages_custom_asset_result_list)[0] as any

    // LIST
    const custom_pages_custom_asset_result_list_ref01_ent = client.CustomPagesCustomAssetResultList()
    const custom_pages_custom_asset_result_list_ref01_match: any = {}
    custom_pages_custom_asset_result_list_ref01_match['zone_id'] = setup.idmap['zone01']

    const custom_pages_custom_asset_result_list_ref01_list = (await custom_pages_custom_asset_result_list_ref01_ent.list(custom_pages_custom_asset_result_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_pages_custom_asset_result_list/CustomPagesCustomAssetResultListTestData.json')

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
    ['custom_pages_custom_asset_result_list01','custom_pages_custom_asset_result_list02','custom_pages_custom_asset_result_list03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_LIST_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_LIST_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGES_CUSTOM_ASSET_RESULT_LIST_ENTID']
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
  
