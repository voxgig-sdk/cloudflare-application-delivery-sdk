

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


describe('ObservatoryTrendEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.ObservatoryTrend()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'observatory_trend.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0}},"name":"observatory_trend","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/speed_api/pages/{url}/trend","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"example.com","k":"param","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"DESKTOP","k":"query","n":"device_type","or":"device_type","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2014-01-01T05:20:00.12345Z","k":"query","n":"end","or":"end","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls","k":"query","n":"metric","or":"metric","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"us-central1","k":"query","n":"region","or":"region","r":true,"t":"`$STRING`","index$":3},{"a":true,"ex":"2014-01-01T05:20:00.12345Z","k":"query","n":"start","or":"start","r":true,"t":"`$STRING`","index$":4},{"a":true,"ex":"America/Chicago","k":"query","n":"tz","or":"tz","r":true,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/zones/{zone_id}/speed_api/pages/{url}/trend","q":{"exist":["device_type","end","metric","region","start","tz","url","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"speed_api"},{"lit":"pages"},{"var":"url"},{"lit":"trend"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"observatory_trend","name__orig":"observatory_trend","Name":"ObservatoryTrend","name_":"observatory_trend","name-":"observatory-trend","NAME":"OBSERVATORY_TREND","index$":16}, {"active":true,"entity":"observatory_trend","key$":"BasicObservatoryTrendFlow","kind":"basic","name":"BasicObservatoryTrendFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"observatory_trend_ref01","srcdatavar":"observatory_trend_ref01_data","suffix":"_dt0"},"m":{"id":"observatory_trend01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-observatory_trend_ref01"}}],"index$":0}]}, 'ObservatoryTrend', {"GET /zones/{zone_id}/speed_api/pages/{url}/trend":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/observatory_identifier"},"index$":0},{"name":"url","in":"path","required":true,"schema":{"description":"A URL.","type":"string","example":"example.com","x-auditable":true,"x-ref":"#/components/schemas/observatory_url"},"index$":1},{"name":"region","in":"query","required":true,"schema":{"description":"A test region.","type":"string","example":"us-central1","enum":["asia-east1","asia-northeast1","asia-northeast2","asia-south1","asia-southeast1","australia-southeast1","europe-north1","europe-southwest1","europe-west1","europe-west2","europe-west3","europe-west4","europe-west8","europe-west9","me-west1","southamerica-east1","us-central1","us-east1","us-east4","us-south1","us-west1"],"x-auditable":true,"x-ref":"#/components/schemas/observatory_region"},"index$":2},{"name":"deviceType","in":"query","required":true,"schema":{"description":"The type of device.","type":"string","example":"DESKTOP","enum":["DESKTOP","MOBILE"],"x-auditable":true,"x-ref":"#/components/schemas/observatory_device_type"},"index$":3},{"name":"start","in":"query","required":true,"schema":{"type":"string","format":"date-time","example":"2014-01-01T05:20:00.12345Z","x-auditable":true,"x-ref":"#/components/schemas/observatory_timestamp"},"index$":4},{"name":"end","in":"query","schema":{"type":"string","format":"date-time","example":"2014-01-01T05:20:00.12345Z","x-auditable":true,"x-ref":"#/components/schemas/observatory_timestamp"},"index$":5},{"name":"tz","in":"query","description":"The timezone of the start and end timestamps.","required":true,"schema":{"type":"string"},"example":"America/Chicago","index$":6},{"name":"metrics","in":"query","description":"A comma-separated list of metrics to include in the results.","required":true,"schema":{"type":"string","example":"performanceScore,ttfb,fcp,si,lcp,tti,tbt,cls"},"index$":7}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let observatory_trend_ref01_data = Object.values(setup.data.existing.observatory_trend)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const observatory_trend_ref01_ent = client.ObservatoryTrend()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/observatory_trend/ObservatoryTrendTestData.json')

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
    ['observatory_trend01','observatory_trend02','observatory_trend03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_TREND_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_TREND_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_OBSERVATORY_TREND_ENTID']
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
  
