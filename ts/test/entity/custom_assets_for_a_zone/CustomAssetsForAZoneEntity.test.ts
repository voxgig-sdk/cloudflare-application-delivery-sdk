

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


describe('CustomAssetsForAZoneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.CustomAssetsForAZone()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_assets_for_a_zone.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"custom_assets_for_a_zone","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/custom_pages/assets/{asset_name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"my_custom_error_page","k":"param","n":"asset_name","or":"asset_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/custom_pages/assets/{asset_name}","q":{"exist":["asset_name","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_pages"},{"lit":"assets"},{"var":"asset_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"custom_assets_for_a_zone","name__orig":"custom_assets_for_a_zone","Name":"CustomAssetsForAZone","name_":"custom_assets_for_a_zone","name-":"custom-assets-for-a-zone","NAME":"CUSTOM_ASSETS_FOR_A_ZONE","index$":3}, {"active":true,"entity":"custom_assets_for_a_zone","key$":"BasicCustomAssetsForAZoneFlow","kind":"basic","name":"BasicCustomAssetsForAZoneFlow","param":{},"step":[]}, 'CustomAssetsForAZone', {"DELETE /zones/{zone_id}/custom_pages/assets/{asset_name}":{"protocol":"http","parameters":[{"name":"asset_name","in":"path","required":true,"schema":{"description":"The unique name of the custom asset. Can only contain letters (A-Z, a-z), numbers (0-9), and underscores (_).","type":"string","example":"my_custom_error_page","minLength":1,"pattern":"^[A-Za-z0-9_]+$","x-auditable":true,"x-ref":"#/components/schemas/custom-pages_asset_name"},"index$":0},{"name":"zone_id","in":"path","description":"Identifier of the Cloudflare zone.","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/custom-pages_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_assets_for_a_zone_ref01_data = Object.values(setup.data.existing.custom_assets_for_a_zone)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_assets_for_a_zone/CustomAssetsForAZoneTestData.json')

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
    ['custom_assets_for_a_zone01','custom_assets_for_a_zone02','custom_assets_for_a_zone03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_ASSETS_FOR_A_ZONE_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_ASSETS_FOR_A_ZONE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_CUSTOM_ASSETS_FOR_A_ZONE_ENTID']
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
  
