

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


describe('OriginCloudRegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    const ent = testsdk.OriginCloudRegion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'origin_cloud_region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"ip":{"a":true,"h":"Ip","n":"ip","r":true,"sh":"Origin IP address (IPv4 or IPv6).","t":"`$STRING`","key$":"ip","index$":2},"messages":{"a":true,"h":"Messages","n":"messages","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"t":"`$ARRAY`","key$":"messages","index$":3},"origin_ip":{"a":true,"h":"Origin Ip","n":"origin_ip","r":true,"sh":"Origin IP address (IPv4 or IPv6).","t":"`$STRING`","key$":"origin_ip","index$":4},"region":{"a":true,"h":"Region","n":"region","r":true,"sh":"Cloud vendor region identifier.","t":"`$STRING`","key$":"region","index$":5},"result":{"a":true,"h":"Result","n":"result","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"Response result for a single origin cloud region mapping.","t":"`$OBJECT`","key$":"result","index$":6},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":true,"sh":"Pagination metadata for list responses.","t":"`$OBJECT`","key$":"result_info","index$":7},"success":{"a":true,"h":"Success","n":"success","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":8},"vendor":{"a":true,"h":"Vendor","n":"vendor","r":true,"sh":"Cloud vendor hosting the origin.","t":"`$STRING`","key$":"vendor","index$":9}},"id":{"field":"id","name":"id"},"name":"origin_cloud_region","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/cache/origin_cloud_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/cache/origin_cloud_regions","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/origin/cloud_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/origin/cloud_regions","q":{"exist":["page","per_page","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/origin_cloud_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/origin_cloud_regions","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/origin_cloud_regions/supported_regions","q":{"$action":"supported_region","exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"},{"lit":"supported_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /zones/{zone_id}/origin/cloud_regions/supported_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/origin/cloud_regions/supported_regions","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"lit":"supported_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"192.0.2.1","k":"param","n":"id","or":"origin_ip","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}","q":{"exist":["id","zone_id"]},"r":{"param":{"origin_ip":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/origin/cloud_regions/{origin_ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"192.0.2.1","k":"param","n":"id","or":"origin_ip","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/origin/cloud_regions/{origin_ip}","q":{"exist":["id","zone_id"]},"r":{"param":{"origin_ip":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/origin_cloud_regions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/origin_cloud_regions","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/cache/origin_cloud_regions/batch","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/cache/origin_cloud_regions/batch","q":{"$action":"batch","exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"192.0.2.1","k":"param","n":"id","or":"origin_ip","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}","q":{"exist":["id","zone_id"]},"r":{"param":{"origin_ip":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /zones/{zone_id}/origin/cloud_regions/{origin_ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"192.0.2.1","k":"param","n":"id","or":"origin_ip","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/origin/cloud_regions/{origin_ip}","q":{"exist":["id","zone_id"]},"r":{"param":{"origin_ip":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /zones/{zone_id}/cache/origin_cloud_regions/batch","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/cache/origin_cloud_regions/batch","q":{"$action":"batch","exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"cache"},{"lit":"origin_cloud_regions"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /zones/{zone_id}/origin/cloud_regions/batch","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/origin/cloud_regions/batch","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"192.0.2.1","k":"param","n":"id","or":"origin_ip","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/origin/cloud_regions/{origin_ip}","q":{"exist":["id","zone_id"]},"r":{"param":{"origin_ip":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /zones/{zone_id}/origin/cloud_regions/batch","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/origin/cloud_regions/batch","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin"},{"lit":"cloud_regions"},{"lit":"batch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"origin_cloud_region","name__orig":"origin_cloud_region","Name":"OriginCloudRegion","name_":"origin_cloud_region","name-":"origin-cloud-region","NAME":"ORIGIN_CLOUD_REGION","index$":17}, {"active":true,"entity":"origin_cloud_region","key$":"BasicOriginCloudRegionFlow","kind":"basic","name":"BasicOriginCloudRegionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"origin_cloud_region_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"origin_cloud_region_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"origin_cloud_region_ref01","srcdatavar":"origin_cloud_region_ref01_data","suffix":"_up0","textfield":"ip"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-origin_cloud_region_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"origin_cloud_region_ref01","srcdatavar":"origin_cloud_region_ref01_data","suffix":"_dt0"},"m":{"id":"origin_cloud_region01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-origin_cloud_region_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"origin_cloud_region_ref01","suffix":"_rm0"},"m":{"id":"origin_cloud_region01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"origin_cloud_region_ref01"}}],"index$":5}]}, 'OriginCloudRegion', {"POST /zones/{zone_id}/cache/origin_cloud_regions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"aws":{"value":{"ip":"192.0.2.1","region":"us-east-1","vendor":"aws"},"x-ref":"#/components/examples/cache-settings_origin_cloud_region_request_aws"}},"schema":{"description":"Request body for creating or updating an origin cloud region mapping.","type":"object","properties":{"ip":{"description":"Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).","type":"string","example":"192.0.2.1","x-auditable":true,"key$":"ip"},"region":{"description":"Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.","type":"string","example":"us-east-1","x-auditable":true,"key$":"region"},"vendor":{"description":"Cloud vendor hosting the origin. Must be one of the supported vendors.","type":"string","example":"aws","enum":["aws","azure","gcp","oci"],"x-auditable":true,"key$":"vendor"}},"required":["ip","vendor","region"],"x-ref":"#/components/schemas/cache-settings_origin_cloud_region_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/origin/cloud_regions":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"page","in":"query","description":"Page number of paginated results.","schema":{"type":"integer","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","description":"Number of items per page.","schema":{"type":"integer","default":20,"maximum":100,"minimum":1},"index$":2}]},"GET /zones/{zone_id}/cache/origin_cloud_regions":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/origin_cloud_regions/supported_regions":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/origin/cloud_regions/supported_regions":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"origin_ip","in":"path","description":"Origin IP address to look up. IPv4 and IPv6 are supported.","required":true,"schema":{"type":"string","example":"192.0.2.1"},"index$":1}]},"GET /zones/{zone_id}/origin/cloud_regions/{origin_ip}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"origin_ip","in":"path","description":"Origin IP address to look up. IPv4 and IPv6 are supported.","required":true,"schema":{"type":"string","example":"192.0.2.1"},"index$":1}]},"PATCH /zones/{zone_id}/cache/origin_cloud_regions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"gcp":{"value":{"ip":"2001:db8::1","region":"us-central1","vendor":"gcp"},"x-ref":"#/components/examples/cache-settings_origin_cloud_region_request_gcp"}},"schema":{"description":"Request body for creating or updating an origin cloud region mapping.","type":"object","properties":{"ip":{"description":"Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).","type":"string","example":"192.0.2.1","x-auditable":true,"key$":"ip"},"region":{"description":"Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.","type":"string","example":"us-east-1","x-auditable":true,"key$":"region"},"vendor":{"description":"Cloud vendor hosting the origin. Must be one of the supported vendors.","type":"string","example":"aws","enum":["aws","azure","gcp","oci"],"x-auditable":true,"key$":"vendor"}},"required":["ip","vendor","region"],"x-ref":"#/components/schemas/cache-settings_origin_cloud_region_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/cache/origin_cloud_regions/batch":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"batch_patch":{"value":[{"ip":"192.0.2.1","region":"us-east-1","vendor":"aws"},{"ip":"2001:db8::1","region":"us-central1","vendor":"gcp"}],"x-ref":"#/components/examples/cache-settings_origin_cloud_region_batch_patch_request"}},"schema":{"type":"array","items":{"description":"Request body for creating or updating an origin cloud region mapping.","type":"object","properties":{"ip":{"description":"Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6).","type":"string","example":"192.0.2.1","x-auditable":true,"key$":"ip"},"region":{"description":"Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.","type":"string","example":"us-east-1","x-auditable":true,"key$":"region"},"vendor":{"description":"Cloud vendor hosting the origin. Must be one of the supported vendors.","type":"string","example":"aws","enum":["aws","azure","gcp","oci"],"x-auditable":true,"key$":"vendor"}},"required":["ip","vendor","region"],"x-ref":"#/components/schemas/cache-settings_origin_cloud_region_request"},"maxItems":100}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"DELETE /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"origin_ip","in":"path","description":"Origin IP address whose mapping should be deleted.","required":true,"schema":{"type":"string","example":"192.0.2.1"},"index$":1}]},"DELETE /zones/{zone_id}/origin/cloud_regions/{origin_ip}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"origin_ip","in":"path","description":"Origin IP address whose mapping should be deleted.","required":true,"schema":{"type":"string","example":"192.0.2.1"},"index$":1}]},"DELETE /zones/{zone_id}/cache/origin_cloud_regions/batch":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"batch_delete":{"value":["192.0.2.1","2001:db8::1"],"x-ref":"#/components/examples/cache-settings_origin_cloud_region_batch_delete_request"}},"schema":{"type":"array","items":{"description":"Origin IP address to delete.","example":"192.0.2.1","type":"string"},"maxItems":100}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"DELETE /zones/{zone_id}/origin/cloud_regions/batch":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"batch_delete":{"value":["192.0.2.1","2001:db8::1"],"x-ref":"#/components/examples/cache-settings_origin_cloud_region_v2_batch_delete_request"}},"schema":{"type":"array","items":{"description":"Origin IP address to delete.","example":"192.0.2.1","type":"string"},"maxItems":100}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PUT /zones/{zone_id}/origin/cloud_regions/{origin_ip}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"aws":{"value":{"origin_ip":"192.0.2.1","region":"us-east-1","vendor":"aws"},"x-ref":"#/components/examples/cache-settings_origin_cloud_region_v2_request_aws"}},"schema":{"description":"Request body for creating or replacing an origin cloud region mapping.","type":"object","properties":{"origin_ip":{"description":"Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path parameter or the request will be rejected with a 400 error. For the batch PUT endpoint, this field identifies which mapping to upsert.","type":"string","example":"192.0.2.1","x-auditable":true,"key$":"origin_ip"},"region":{"description":"Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.","type":"string","example":"us-east-1","x-auditable":true,"key$":"region"},"vendor":{"description":"Cloud vendor hosting the origin. Must be one of the supported vendors.","type":"string","example":"aws","enum":["aws","azure","gcp","oci"],"x-auditable":true,"key$":"vendor"}},"required":["origin_ip","vendor","region"],"x-ref":"#/components/schemas/cache-settings_origin_cloud_region_v2_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0},{"name":"origin_ip","in":"path","description":"Origin IP address to create or replace.","required":true,"schema":{"type":"string","example":"192.0.2.1"},"index$":1}]},"PUT /zones/{zone_id}/origin/cloud_regions/batch":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"examples":{"batch_put":{"value":[{"origin_ip":"192.0.2.1","region":"us-east-1","vendor":"aws"},{"origin_ip":"2001:db8::1","region":"us-central1","vendor":"gcp"}],"x-ref":"#/components/examples/cache-settings_origin_cloud_region_v2_batch_put_request"}},"schema":{"type":"array","items":{"description":"Request body for creating or replacing an origin cloud region mapping.","type":"object","properties":{"origin_ip":{"description":"Origin IP address (IPv4 or IPv6). For the single PUT endpoint (`PUT /origin/cloud_regions/{origin_ip}`), this field must match the path parameter or the request will be rejected with a 400 error. For the batch PUT endpoint, this field identifies which mapping to upsert.","type":"string","example":"192.0.2.1","x-auditable":true,"key$":"origin_ip"},"region":{"description":"Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint.","type":"string","example":"us-east-1","x-auditable":true,"key$":"region"},"vendor":{"description":"Cloud vendor hosting the origin. Must be one of the supported vendors.","type":"string","example":"aws","enum":["aws","azure","gcp","oci"],"x-auditable":true,"key$":"vendor"}},"required":["origin_ip","vendor","region"],"x-ref":"#/components/schemas/cache-settings_origin_cloud_region_v2_request"},"maxItems":100,"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const origin_cloud_region_ref01_ent = client.OriginCloudRegion()
    let origin_cloud_region_ref01_data = setup.data.new.origin_cloud_region['origin_cloud_region_ref01']
    origin_cloud_region_ref01_data['zone_id'] = setup.idmap['zone01']

    origin_cloud_region_ref01_data = (await origin_cloud_region_ref01_ent.create(origin_cloud_region_ref01_data)).data()
    assert(null != origin_cloud_region_ref01_data.id)


    // LIST
    const origin_cloud_region_ref01_match: any = {}
    origin_cloud_region_ref01_match['zone_id'] = setup.idmap['zone01']

    const origin_cloud_region_ref01_list = (await origin_cloud_region_ref01_ent.list(origin_cloud_region_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(origin_cloud_region_ref01_list, { id: origin_cloud_region_ref01_data.id })))


    // UPDATE
    const origin_cloud_region_ref01_data_up0: any = {}
    origin_cloud_region_ref01_data_up0.id = origin_cloud_region_ref01_data.id

    const origin_cloud_region_ref01_markdef_up0 = { name: 'ip', value: 'Mark01-origin_cloud_region_ref01_' + setup.now }
    ;(origin_cloud_region_ref01_data_up0 as any)[origin_cloud_region_ref01_markdef_up0.name] = origin_cloud_region_ref01_markdef_up0.value

    const origin_cloud_region_ref01_resdata_up0 = (await origin_cloud_region_ref01_ent.update(origin_cloud_region_ref01_data_up0)).data()
    assert(origin_cloud_region_ref01_resdata_up0.id === origin_cloud_region_ref01_data_up0.id)

    assert((origin_cloud_region_ref01_resdata_up0 as any)[origin_cloud_region_ref01_markdef_up0.name] === origin_cloud_region_ref01_markdef_up0.value)


    // LOAD
    const origin_cloud_region_ref01_match_dt0: any = {}
    origin_cloud_region_ref01_match_dt0.id = origin_cloud_region_ref01_data.id
    const origin_cloud_region_ref01_data_dt0 = (await origin_cloud_region_ref01_ent.load(origin_cloud_region_ref01_match_dt0)).data()
    assert(origin_cloud_region_ref01_data_dt0.id === origin_cloud_region_ref01_data.id)


    // REMOVE
    const origin_cloud_region_ref01_match_rm0: any = { id: origin_cloud_region_ref01_data.id }
    await origin_cloud_region_ref01_ent.remove(origin_cloud_region_ref01_match_rm0)
  

    // LIST
    const origin_cloud_region_ref01_match_rt0: any = {}
    origin_cloud_region_ref01_match_rt0['zone_id'] = setup.idmap['zone01']

    const origin_cloud_region_ref01_list_rt0 = (await origin_cloud_region_ref01_ent.list(origin_cloud_region_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(origin_cloud_region_ref01_list_rt0, { id: origin_cloud_region_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/origin_cloud_region/OriginCloudRegionTestData.json')

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
    ['origin_cloud_region01','origin_cloud_region02','origin_cloud_region03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID': idmap,
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_APPLICATION_DELIVERY_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_APPLICATION_DELIVERY_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_APPLICATION_DELIVERY_TEST_ORIGIN_CLOUD_REGION_ENTID']
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
  
