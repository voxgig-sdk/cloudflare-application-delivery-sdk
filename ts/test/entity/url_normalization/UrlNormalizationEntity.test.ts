

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


describe('UrlNormalizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.UrlNormalization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'url_normalization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"A list of error messages.","t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"A list of warning messages.","t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"A result.","t":"`$OBJECT`","union":{"branches":5,"count":1,"depth":0},"key$":"result","index$":2},"scope":{"a":true,"h":"Scope","n":"scope","r":true,"sh":"The scope of the URL normalization.","t":"`$STRING`","key$":"scope","index$":3},"success":{"a":true,"h":"Success","n":"success","op":{"list":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of URL normalization performed by Cloudflare.","t":"`$STRING`","key$":"type","index$":5}},"name":"url_normalization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/url_normalization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/url_normalization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"url_normalization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/url_normalization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/url_normalization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"url_normalization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/url_normalization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/url_normalization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"url_normalization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"url_normalization","name__orig":"url_normalization","Name":"UrlNormalization","name_":"url_normalization","name-":"url-normalization","NAME":"URL_NORMALIZATION","index$":27}, {"active":true,"entity":"url_normalization","key$":"BasicUrlNormalizationFlow","kind":"basic","name":"BasicUrlNormalizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"url_normalization_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"url_normalization_ref01","srcdatavar":"url_normalization_ref01_data","suffix":"_up0","textfield":"scope"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-url_normalization_ref01"}}],"v":[],"index$":1}]}, 'UrlNormalization', {"GET /zones/{zone_id}/url_normalization":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]},"DELETE /zones/{zone_id}/url_normalization":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]},"PUT /zones/{zone_id}/url_normalization":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"A URL Normalization object.","type":"object","properties":{"scope":{"description":"The scope of the URL normalization.","enum":["incoming","both","none"],"example":"incoming","title":"Scope","type":"string","key$":"scope"},"type":{"description":"The type of URL normalization performed by Cloudflare.","enum":["cloudflare","rfc3986"],"example":"cloudflare","title":"Type","type":"string","key$":"type"}},"required":["type","scope"],"title":"URL Normalization","x-ref":"#/components/schemas/rulesets_UrlNormalization","index$":1}}},"required":true,"x-ref":"#/components/requestBodies/rulesets_UrlNormalization"},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let url_normalization_ref01_data = Object.values(setup.data.existing.url_normalization)[0] as any

    // LIST
    const url_normalization_ref01_ent = client.UrlNormalization()
    const url_normalization_ref01_match: any = {}
    url_normalization_ref01_match['zone_id'] = setup.idmap['zone01']

    const url_normalization_ref01_list = (await url_normalization_ref01_ent.list(url_normalization_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const url_normalization_ref01_data_up0: any = {}

    const url_normalization_ref01_markdef_up0 = { name: 'scope', value: 'Mark01-url_normalization_ref01_' + setup.now }
    ;(url_normalization_ref01_data_up0 as any)[url_normalization_ref01_markdef_up0.name] = url_normalization_ref01_markdef_up0.value

    const url_normalization_ref01_resdata_up0 = (await url_normalization_ref01_ent.update(url_normalization_ref01_data_up0)).data()
    assert(null != url_normalization_ref01_resdata_up0)

    assert((url_normalization_ref01_resdata_up0 as any)[url_normalization_ref01_markdef_up0.name] === url_normalization_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/url_normalization/UrlNormalizationTestData.json')

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
    ['url_normalization01','url_normalization02','url_normalization03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_URL_NORMALIZATION_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_URL_NORMALIZATION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_URL_NORMALIZATION_ENTID']
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
  
