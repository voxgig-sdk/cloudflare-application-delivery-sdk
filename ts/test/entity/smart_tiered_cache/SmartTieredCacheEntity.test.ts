

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


describe('SmartTieredCacheEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.SmartTieredCache()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'smart_tiered_cache.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"Enable or disable the Smart Tiered Cache.","t":"`$STRING`","key$":"value","index$":1}},"name":"smart_tiered_cache","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/cache/tiered_cache_smart_topology_enable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/cache/tiered_cache_smart_topology_enable","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"tiered_cache_smart_topology_enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/tiered_cache_smart_topology_enable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/tiered_cache_smart_topology_enable","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"tiered_cache_smart_topology_enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/cache/tiered_cache_smart_topology_enable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/cache/tiered_cache_smart_topology_enable","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"tiered_cache_smart_topology_enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/tiered_cache_smart_topology_enable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/tiered_cache_smart_topology_enable","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"tiered_cache_smart_topology_enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"smart_tiered_cache","name__orig":"smart_tiered_cache","Name":"SmartTieredCache","name_":"smart_tiered_cache","name-":"smart-tiered-cache","NAME":"SMART_TIERED_CACHE","index$":21}, {"active":true,"entity":"smart_tiered_cache","key$":"BasicSmartTieredCacheFlow","kind":"basic","name":"BasicSmartTieredCacheFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"smart_tiered_cache_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"smart_tiered_cache_ref01","srcdatavar":"smart_tiered_cache_ref01_data","suffix":"_up0","textfield":"value"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-smart_tiered_cache_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"smart_tiered_cache_ref01","srcdatavar":"smart_tiered_cache_ref01_data","suffix":"_dt0"},"m":{"id":"smart_tiered_cache01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-smart_tiered_cache_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"smart_tiered_cache_ref01","suffix":"_rm0"},"m":{"id":"smart_tiered_cache01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'SmartTieredCache', {"POST /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Update enablement of Smart Tiered Cache.","type":"object","properties":{"value":{"description":"Enable or disable the Smart Tiered Cache.","type":"string","example":"on","enum":["on","off"],"x-auditable":true,"key$":"value"}},"required":["value"],"x-ref":"#/components/schemas/cache-settings_smart_tiered_cache_patch","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"DELETE /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Update enablement of Smart Tiered Cache.","type":"object","properties":{"value":{"description":"Enable or disable the Smart Tiered Cache.","type":"string","example":"on","enum":["on","off"],"x-auditable":true,"key$":"value"}},"required":["value"],"x-ref":"#/components/schemas/cache-settings_smart_tiered_cache_patch","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const smart_tiered_cache_ref01_ent = client.SmartTieredCache()
    let smart_tiered_cache_ref01_data = setup.data.new.smart_tiered_cache['smart_tiered_cache_ref01']
    smart_tiered_cache_ref01_data['zone_id'] = setup.idmap['zone01']

    smart_tiered_cache_ref01_data = (await smart_tiered_cache_ref01_ent.create(smart_tiered_cache_ref01_data)).data()
    assert(null != smart_tiered_cache_ref01_data)


    // UPDATE
    const smart_tiered_cache_ref01_data_up0: any = {}

    const smart_tiered_cache_ref01_markdef_up0 = { name: 'value', value: 'Mark01-smart_tiered_cache_ref01_' + setup.now }
    ;(smart_tiered_cache_ref01_data_up0 as any)[smart_tiered_cache_ref01_markdef_up0.name] = smart_tiered_cache_ref01_markdef_up0.value

    const smart_tiered_cache_ref01_resdata_up0 = (await smart_tiered_cache_ref01_ent.update(smart_tiered_cache_ref01_data_up0)).data()
    assert(null != smart_tiered_cache_ref01_resdata_up0)

    assert((smart_tiered_cache_ref01_resdata_up0 as any)[smart_tiered_cache_ref01_markdef_up0.name] === smart_tiered_cache_ref01_markdef_up0.value)




  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/smart_tiered_cache/SmartTieredCacheTestData.json')

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
    ['smart_tiered_cache01','smart_tiered_cache02','smart_tiered_cache03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_SMART_TIERED_CACHE_ENTID']
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
  
