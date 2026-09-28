

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


describe('ObservatoryPageTestResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.ObservatoryPageTestResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'observatory_page_test_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":1}},"name":"observatory_page_test_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/speed_api/pages/{url}/tests","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"example.com","k":"param","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/zones/{zone_id}/speed_api/pages/{url}/tests","q":{"exist":["page","per_page","region","url","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"speed_api"},{"lit":"pages"},{"var":"url"},{"lit":"tests"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"observatory_page_test_response_collection","name__orig":"observatory_page_test_response_collection","Name":"ObservatoryPageTestResponseCollection","name_":"observatory_page_test_response_collection","name-":"observatory-page-test-response-collection","NAME":"OBSERVATORY_PAGE_TEST_RESPONSE_COLLECTION","index$":12}, {"active":true,"entity":"observatory_page_test_response_collection","key$":"BasicObservatoryPageTestResponseCollectionFlow","kind":"basic","name":"BasicObservatoryPageTestResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"url":"url01","zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"observatory_page_test_response_collection_ref01"}}],"index$":0}]}, 'ObservatoryPageTestResponseCollection', {"GET /zones/{zone_id}/speed_api/pages/{url}/tests":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/observatory_identifier"},"index$":0},{"name":"url","in":"path","required":true,"schema":{"description":"A URL.","type":"string","example":"example.com","x-auditable":true,"x-ref":"#/components/schemas/observatory_url"},"index$":1},{"name":"page","in":"query","schema":{"type":"integer","default":1},"index$":2},{"name":"per_page","in":"query","schema":{"type":"integer","default":20,"maximum":50,"minimum":5},"index$":3},{"name":"region","in":"query","schema":{"allOf":[{"description":"A test region.","type":"string","example":"us-central1","enum":["asia-east1","asia-northeast1","asia-northeast2","asia-south1","asia-southeast1","australia-southeast1","europe-north1","europe-southwest1","europe-west1","europe-west2","europe-west3","europe-west4","europe-west8","europe-west9","me-west1","southamerica-east1","us-central1","us-east1","us-east4","us-south1","us-west1"],"x-auditable":true,"x-ref":"#/components/schemas/observatory_region"},{"default":"us-central1","type":"string"}]},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let observatory_page_test_response_collection_ref01_data = Object.values(setup.data.existing.observatory_page_test_response_collection)[0] as any

    // LIST
    const observatory_page_test_response_collection_ref01_ent = client.ObservatoryPageTestResponseCollection()
    const observatory_page_test_response_collection_ref01_match: any = {}
    observatory_page_test_response_collection_ref01_match['url'] = setup.idmap['url01']
    observatory_page_test_response_collection_ref01_match['zone_id'] = setup.idmap['zone01']

    const observatory_page_test_response_collection_ref01_list = (await observatory_page_test_response_collection_ref01_ent.list(observatory_page_test_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/observatory_page_test_response_collection/ObservatoryPageTestResponseCollectionTestData.json')

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
    ['observatory_page_test_response_collection01','observatory_page_test_response_collection02','observatory_page_test_response_collection03','url01','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_PAGE_TEST_RESPONSE_COLLECTION_ENTID']
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
  
