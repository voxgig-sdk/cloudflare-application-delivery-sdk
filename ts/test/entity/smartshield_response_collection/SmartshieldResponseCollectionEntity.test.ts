

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


describe('SmartshieldResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.SmartshieldResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'smartshield_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"smartshield_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/smart_shield/healthchecks","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":25,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/smart_shield/healthchecks","q":{"exist":["page","per_page","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"smart_shield"},{"lit":"healthchecks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"smartshield_response_collection","name__orig":"smartshield_response_collection","Name":"SmartshieldResponseCollection","name_":"smartshield_response_collection","name-":"smartshield-response-collection","NAME":"SMARTSHIELD_RESPONSE_COLLECTION","index$":22}, {"active":true,"entity":"smartshield_response_collection","key$":"BasicSmartshieldResponseCollectionFlow","kind":"basic","name":"BasicSmartshieldResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"smartshield_response_collection_ref01"}}],"index$":0}]}, 'SmartshieldResponseCollection', {"GET /zones/{zone_id}/smart_shield/healthchecks":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/smartshield_identifier"},"index$":0},{"description":"Page number of paginated results.","in":"query","name":"page","schema":{"type":"number","default":1,"minimum":1},"x-ref":"#/components/parameters/smartshield_page","index$":1},{"description":"Maximum number of results per page. Must be a multiple of 5.","in":"query","name":"per_page","schema":{"type":"number","default":25,"maximum":1000,"minimum":5},"x-ref":"#/components/parameters/smartshield_per_page","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let smartshield_response_collection_ref01_data = Object.values(setup.data.existing.smartshield_response_collection)[0] as any

    // LIST
    const smartshield_response_collection_ref01_ent = client.SmartshieldResponseCollection()
    const smartshield_response_collection_ref01_match: any = {}
    smartshield_response_collection_ref01_match['zone_id'] = setup.idmap['zone01']

    const smartshield_response_collection_ref01_list = (await smartshield_response_collection_ref01_ent.list(smartshield_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/smartshield_response_collection/SmartshieldResponseCollectionTestData.json')

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
    ['smartshield_response_collection01','smartshield_response_collection02','smartshield_response_collection03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMARTSHIELD_RESPONSE_COLLECTION_ENTID']
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
  
