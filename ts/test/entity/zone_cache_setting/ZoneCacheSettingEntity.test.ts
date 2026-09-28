

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


describe('ZoneCacheSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.ZoneCacheSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zone_cache_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"Value of the Cache Reserve zone setting.","t":"`$STRING`","key$":"value","index$":4}},"name":"zone_cache_setting","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/cache/cache_reserve_clear","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/cache/cache_reserve_clear","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"cache_reserve_clear"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/cache_reserve_clear","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/cache_reserve_clear","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"cache_reserve_clear"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/cache_reserve","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/cache_reserve","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"cache_reserve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/regional_tiered_cache","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/regional_tiered_cache","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"regional_tiered_cache"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/variants","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/variants","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"variants"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/cache/variants","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/cache/variants","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"variants"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/cache_reserve","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/cache_reserve","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"cache_reserve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/regional_tiered_cache","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/regional_tiered_cache","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"regional_tiered_cache"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/variants","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/variants","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"variants"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zone_cache_setting","name__orig":"zone_cache_setting","Name":"ZoneCacheSetting","name_":"zone_cache_setting","name-":"zone-cache-setting","NAME":"ZONE_CACHE_SETTING","index$":28}, {"active":true,"entity":"zone_cache_setting","key$":"BasicZoneCacheSettingFlow","kind":"basic","name":"BasicZoneCacheSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zone_cache_setting_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zone_cache_setting_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"zone_cache_setting_ref01","srcdatavar":"zone_cache_setting_ref01_data","suffix":"_up0","textfield":"value"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zone_cache_setting_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"zone_cache_setting_ref01","srcdatavar":"zone_cache_setting_ref01_data","suffix":"_dt0"},"m":{"id":"zone_cache_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zone_cache_setting_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"zone_cache_setting_ref01","suffix":"_rm0"},"m":{"id":"zone_cache_setting01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"zone_cache_setting_ref01"}}],"index$":5}]}, 'ZoneCacheSetting', {"POST /zones/{zone_id}/cache/cache_reserve_clear":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/cache_reserve_clear":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/cache_reserve":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/regional_tiered_cache":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/variants":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"DELETE /zones/{zone_id}/cache/variants":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/cache/cache_reserve":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the Cache Reserve zone setting.","type":"string","default":"off","enum":["on","off"],"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_cache_reserve_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/cache/regional_tiered_cache":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the Regional Tiered Cache zone setting.","type":"string","default":"off","enum":["on","off"],"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_regional_tiered_cache_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/cache/variants":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the zone setting.","type":"object","properties":{"avif":{"description":"List of strings with the MIME types of all the variants that should be served for avif.","example":["image/webp","image/jpeg"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"bmp":{"description":"List of strings with the MIME types of all the variants that should be served for bmp.","example":["image/webp","image/jpeg"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"gif":{"description":"List of strings with the MIME types of all the variants that should be served for gif.","example":["image/webp","image/jpeg"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"jp2":{"description":"List of strings with the MIME types of all the variants that should be served for jp2.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"jpeg":{"description":"List of strings with the MIME types of all the variants that should be served for jpeg.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"jpg":{"description":"List of strings with the MIME types of all the variants that should be served for jpg.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"jpg2":{"description":"List of strings with the MIME types of all the variants that should be served for jpg2.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"png":{"description":"List of strings with the MIME types of all the variants that should be served for png.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"tif":{"description":"List of strings with the MIME types of all the variants that should be served for tif.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"tiff":{"description":"List of strings with the MIME types of all the variants that should be served for tiff.","example":["image/webp","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true},"webp":{"description":"List of strings with the MIME types of all the variants that should be served for webp.","example":["image/jpeg","image/avif"],"items":{"type":"string","x-auditable":true},"type":"array","uniqueItems":true}},"x-ref":"#/components/schemas/cache-settings_variants_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zone_cache_setting_ref01_ent = client.ZoneCacheSetting()
    let zone_cache_setting_ref01_data = setup.data.new.zone_cache_setting['zone_cache_setting_ref01']
    zone_cache_setting_ref01_data['zone_id'] = setup.idmap['zone01']

    zone_cache_setting_ref01_data = (await zone_cache_setting_ref01_ent.create(zone_cache_setting_ref01_data)).data()
    assert(null != zone_cache_setting_ref01_data)


    // LIST
    const zone_cache_setting_ref01_match: any = {}
    zone_cache_setting_ref01_match['zone_id'] = setup.idmap['zone01']

    const zone_cache_setting_ref01_list = (await zone_cache_setting_ref01_ent.list(zone_cache_setting_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const zone_cache_setting_ref01_data_up0: any = {}

    const zone_cache_setting_ref01_markdef_up0 = { name: 'value', value: 'Mark01-zone_cache_setting_ref01_' + setup.now }
    ;(zone_cache_setting_ref01_data_up0 as any)[zone_cache_setting_ref01_markdef_up0.name] = zone_cache_setting_ref01_markdef_up0.value

    const zone_cache_setting_ref01_resdata_up0 = (await zone_cache_setting_ref01_ent.update(zone_cache_setting_ref01_data_up0)).data()
    assert(null != zone_cache_setting_ref01_resdata_up0)

    assert((zone_cache_setting_ref01_resdata_up0 as any)[zone_cache_setting_ref01_markdef_up0.name] === zone_cache_setting_ref01_markdef_up0.value)




    // LIST
    const zone_cache_setting_ref01_match_rt0: any = {}
    zone_cache_setting_ref01_match_rt0['zone_id'] = setup.idmap['zone01']

    const zone_cache_setting_ref01_list_rt0 = (await zone_cache_setting_ref01_ent.list(zone_cache_setting_ref01_match_rt0)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zone_cache_setting/ZoneCacheSettingTestData.json')

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
    ['zone_cache_setting01','zone_cache_setting02','zone_cache_setting03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_ZONE_CACHE_SETTING_ENTID']
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
  
