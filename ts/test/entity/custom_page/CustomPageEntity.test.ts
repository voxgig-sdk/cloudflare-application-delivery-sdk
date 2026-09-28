

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


describe('CustomPageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.CustomPage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_page.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":false,"t":"`$STRING`","key$":"created_on","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"modified_on":{"a":true,"fo":"date-time","h":"Modified On","n":"modified_on","r":false,"t":"`$STRING`","key$":"modified_on","index$":3},"preview_target":{"a":true,"h":"Preview Target","n":"preview_target","r":false,"t":"`$STRING`","key$":"preview_target","index$":4},"required_tokens":{"a":true,"h":"Required Tokens","n":"required_tokens","r":false,"t":"`$ARRAY`","key$":"required_tokens","index$":5},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":6},"state":{"a":true,"h":"State","n":"state","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The custom page state.","t":"`$STRING`","key$":"state","index$":7},"url":{"a":true,"fo":"uri","h":"Url","n":"url","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The URL associated with the custom page.","t":"`$STRING`","key$":"url","index$":8}},"id":{"field":"id","name":"id"},"name":"custom_page","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/custom_pages","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/custom_pages","q":{"exist":["account_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_pages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_pages","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_pages","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/custom_pages/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ratelimit_block","k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/custom_pages/{identifier}","q":{"exist":["account_id","id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_pages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_pages/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ratelimit_block","k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_pages/{identifier}","q":{"exist":["id","zone_id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /accounts/{account_id}/custom_pages/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ratelimit_block","k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/accounts/{account_id}/custom_pages/{identifier}","q":{"exist":["account_id","id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_pages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /zones/{zone_id}/custom_pages/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"ratelimit_block","k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/custom_pages/{identifier}","q":{"exist":["id","zone_id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_page","name__orig":"custom_page","Name":"CustomPage","name_":"custom_page","name-":"custom-page","NAME":"CUSTOM_PAGE","index$":5}, {"active":true,"entity":"custom_page","key$":"BasicCustomPageFlow","kind":"basic","name":"BasicCustomPageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_page_ref01"}}],"index$":0},{"a":true,"d":{"zone_id":"zone01"},"i":{"ref":"custom_page_ref01","srcdatavar":"custom_page_ref01_data","suffix":"_up0","textfield":"created_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_page_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_page_ref01","srcdatavar":"custom_page_ref01_data","suffix":"_dt0"},"m":{"id":"custom_page01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_page_ref01"}}],"index$":2}]}, 'CustomPage', {"GET /accounts/{account_id}/custom_pages":{"protocol":"http","parameters":[{"name":"account_id","in":"path","description":"Identifier of the Cloudflare account.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0}]},"GET /zones/{zone_id}/custom_pages":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":0}]},"GET /accounts/{account_id}/custom_pages/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","in":"path","required":true,"schema":{"description":"Custom page type.","type":"string","example":"ratelimit_block","enum":["1000_errors","500_errors","basic_challenge","country_challenge","ip_block","managed_challenge","ratelimit_block","under_attack","waf_block","waf_challenge"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_error_page_type"},"index$":0},{"name":"account_id","in":"path","description":"Identifier of the Cloudflare account.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":1}]},"GET /zones/{zone_id}/custom_pages/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","in":"path","required":true,"schema":{"description":"Custom page type.","type":"string","example":"ratelimit_block","enum":["1000_errors","500_errors","basic_challenge","country_challenge","ip_block","managed_challenge","ratelimit_block","under_attack","waf_block","waf_challenge"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_error_page_type"},"index$":0},{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":1}]},"PUT /accounts/{account_id}/custom_pages/{identifier}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"state":{"description":"The custom page state.","type":"string","example":"default","enum":["default","customized"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_state","key$":"state"},"url":{"description":"The URL associated with the custom page.","type":"string","format":"uri","example":"http://www.example.com","default":"","x-auditable":true,"x-ref":"#/components/schemas/custom-pages_url","key$":"url"}},"required":["url","state"],"index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"description":"Custom page type.","type":"string","example":"ratelimit_block","enum":["1000_errors","500_errors","basic_challenge","country_challenge","ip_block","managed_challenge","ratelimit_block","under_attack","waf_block","waf_challenge"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_error_page_type"},"index$":0},{"name":"account_id","in":"path","description":"Identifier of the Cloudflare account.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":1}]},"PUT /zones/{zone_id}/custom_pages/{identifier}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"state":{"description":"The custom page state.","type":"string","example":"default","enum":["default","customized"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_state","key$":"state"},"url":{"description":"The URL associated with the custom page.","type":"string","format":"uri","example":"http://www.example.com","default":"","x-auditable":true,"x-ref":"#/components/schemas/custom-pages_url","key$":"url"}},"required":["url","state"],"index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"description":"Custom page type.","type":"string","example":"ratelimit_block","enum":["1000_errors","500_errors","basic_challenge","country_challenge","ip_block","managed_challenge","ratelimit_block","under_attack","waf_block","waf_challenge"],"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_error_page_type"},"index$":0},{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_page_ref01_data = Object.values(setup.data.existing.custom_page)[0] as any

    // LIST
    const custom_page_ref01_ent = client.CustomPage()
    const custom_page_ref01_match: any = {}
    custom_page_ref01_match['zone_id'] = setup.idmap['zone01']

    const custom_page_ref01_list = (await custom_page_ref01_ent.list(custom_page_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const custom_page_ref01_data_up0: any = {}
    custom_page_ref01_data_up0.id = custom_page_ref01_data.id
    custom_page_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const custom_page_ref01_markdef_up0 = { name: 'created_on', value: 'Mark01-custom_page_ref01_' + setup.now }
    ;(custom_page_ref01_data_up0 as any)[custom_page_ref01_markdef_up0.name] = custom_page_ref01_markdef_up0.value

    const custom_page_ref01_resdata_up0 = (await custom_page_ref01_ent.update(custom_page_ref01_data_up0)).data()
    assert(custom_page_ref01_resdata_up0.id === custom_page_ref01_data_up0.id)

    assert((custom_page_ref01_resdata_up0 as any)[custom_page_ref01_markdef_up0.name] === custom_page_ref01_markdef_up0.value)


    // LOAD
    const custom_page_ref01_match_dt0: any = {}
    custom_page_ref01_match_dt0.id = custom_page_ref01_data.id
    const custom_page_ref01_data_dt0 = (await custom_page_ref01_ent.load(custom_page_ref01_match_dt0)).data()
    assert(custom_page_ref01_data_dt0.id === custom_page_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_page/CustomPageTestData.json')

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
    ['custom_page01','custom_page02','custom_page03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_PAGE_ENTID']
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
  
