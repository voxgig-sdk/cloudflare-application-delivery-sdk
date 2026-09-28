

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


describe('ManagedTransformEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.ManagedTransform()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'managed_transform.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","op":{"list":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"A list of error messages.","t":"`$ARRAY`","key$":"errors","index$":0},"managed_request_headers":{"a":true,"h":"Managed Request Headers","n":"managed_request_headers","r":false,"sh":"The list of Managed Request Transforms.","t":"`$ARRAY`","key$":"managed_request_headers","index$":1},"managed_response_headers":{"a":true,"h":"Managed Response Headers","n":"managed_response_headers","r":false,"sh":"The list of Managed Response Transforms.","t":"`$ARRAY`","key$":"managed_response_headers","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"sh":"A list of warning messages.","t":"`$ARRAY`","key$":"messages","index$":3},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"A result.","t":"`$OBJECT`","union":{"branches":5,"count":1,"depth":0},"key$":"result","index$":4},"success":{"a":true,"h":"Success","n":"success","op":{"list":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":5}},"name":"managed_transform","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/managed_headers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/managed_headers","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"managed_headers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/managed_headers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/managed_headers","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"managed_headers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/managed_headers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"9f1839b6152d298aca64c4e906b6d074","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/managed_headers","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"managed_headers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"managed_transform","name__orig":"managed_transform","Name":"ManagedTransform","name_":"managed_transform","name-":"managed-transform","NAME":"MANAGED_TRANSFORM","index$":9}, {"active":true,"entity":"managed_transform","key$":"BasicManagedTransformFlow","kind":"basic","name":"BasicManagedTransformFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"managed_transform_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"managed_transform_ref01","srcdatavar":"managed_transform_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-managed_transform_ref01"}}],"v":[],"index$":1}]}, 'ManagedTransform', {"GET /zones/{zone_id}/managed_headers":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]},"DELETE /zones/{zone_id}/managed_headers":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]},"PATCH /zones/{zone_id}/managed_headers":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"A Managed Transforms patch object. Both fields are optional; only the sections provided will be updated.","type":"object","properties":{"managed_request_headers":{"description":"The list of Managed Request Transforms.","type":"array","items":{"allOf":[{"description":"A Managed Transform object.","type":"object","properties":{},"required":[],"title":"Managed Transform","x-ref":"#/components/schemas/rulesets_ManagedTransform"},{"properties":{},"type":"object"}]},"title":"Managed Request Transforms","uniqueItems":true,"key$":"managed_request_headers"},"managed_response_headers":{"description":"The list of Managed Response Transforms.","type":"array","items":{"allOf":[{"description":"A Managed Transform object.","type":"object","properties":{},"required":[],"title":"Managed Transform","x-ref":"#/components/schemas/rulesets_ManagedTransform"},{"properties":{},"type":"object"}]},"title":"Managed Response Transforms","uniqueItems":true,"key$":"managed_response_headers"}},"title":"Managed Transforms Patch","x-ref":"#/components/schemas/rulesets_ManagedTransformsPatch","index$":1}}},"required":true,"x-ref":"#/components/requestBodies/rulesets_ManagedTransforms"},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"The unique ID of the zone.","type":"string","example":"9f1839b6152d298aca64c4e906b6d074","pattern":"^[0-9a-f]{32}$","title":"Zone ID","x-ref":"#/components/schemas/rulesets_ZoneId"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let managed_transform_ref01_data = Object.values(setup.data.existing.managed_transform)[0] as any

    // LIST
    const managed_transform_ref01_ent = client.ManagedTransform()
    const managed_transform_ref01_match: any = {}
    managed_transform_ref01_match['zone_id'] = setup.idmap['zone01']

    const managed_transform_ref01_list = (await managed_transform_ref01_ent.list(managed_transform_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const managed_transform_ref01_data_up0: any = {}

    const managed_transform_ref01_resdata_up0 = (await managed_transform_ref01_ent.update(managed_transform_ref01_data_up0)).data()
    assert(null != managed_transform_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/managed_transform/ManagedTransformTestData.json')

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
    ['managed_transform01','managed_transform02','managed_transform03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_MANAGED_TRANSFORM_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_MANAGED_TRANSFORM_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_MANAGED_TRANSFORM_ENTID']
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
  
