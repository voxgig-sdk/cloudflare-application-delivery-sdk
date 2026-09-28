// CloudflareApplicationDelivery Ts SDK

import { ArgoConfigApiResponseSingleEntity } from './entity/ArgoConfigApiResponseSingleEntity'
import { CachePurgeApiResponseSingleIdEntity } from './entity/CachePurgeApiResponseSingleIdEntity'
import { CacheReserveClearEntity } from './entity/CacheReserveClearEntity'
import { CustomAssetsForAZoneEntity } from './entity/CustomAssetsForAZoneEntity'
import { CustomAssetsForAnAccountEntity } from './entity/CustomAssetsForAnAccountEntity'
import { CustomPageEntity } from './entity/CustomPageEntity'
import { CustomPagesCustomAssetResultEntity } from './entity/CustomPagesCustomAssetResultEntity'
import { CustomPagesCustomAssetResultListEntity } from './entity/CustomPagesCustomAssetResultListEntity'
import { CustomPagesPreviewTokenResultEntity } from './entity/CustomPagesPreviewTokenResultEntity'
import { ManagedTransformEntity } from './entity/ManagedTransformEntity'
import { ObservatoryAvailabilityEntity } from './entity/ObservatoryAvailabilityEntity'
import { ObservatoryCreateScheduleEntity } from './entity/ObservatoryCreateScheduleEntity'
import { ObservatoryPageTestResponseCollectionEntity } from './entity/ObservatoryPageTestResponseCollectionEntity'
import { ObservatoryPageTestResponseSingleEntity } from './entity/ObservatoryPageTestResponseSingleEntity'
import { ObservatoryPagesResponseCollectionEntity } from './entity/ObservatoryPagesResponseCollectionEntity'
import { ObservatoryScheduleResponseSingleEntity } from './entity/ObservatoryScheduleResponseSingleEntity'
import { ObservatoryTrendEntity } from './entity/ObservatoryTrendEntity'
import { OriginCloudRegionEntity } from './entity/OriginCloudRegionEntity'
import { OriginPostQuantumEntity } from './entity/OriginPostQuantumEntity'
import { ScheduleEntity } from './entity/ScheduleEntity'
import { SmartShieldEntity } from './entity/SmartShieldEntity'
import { SmartTieredCacheEntity } from './entity/SmartTieredCacheEntity'
import { SmartshieldResponseCollectionEntity } from './entity/SmartshieldResponseCollectionEntity'
import { SmartshieldSingleHcEntity } from './entity/SmartshieldSingleHcEntity'
import { SmartshieldSingleHcIdEntity } from './entity/SmartshieldSingleHcIdEntity'
import { TestEntity } from './entity/TestEntity'
import { TieredCachingEntity } from './entity/TieredCachingEntity'
import { UrlNormalizationEntity } from './entity/UrlNormalizationEntity'
import { ZoneCacheSettingEntity } from './entity/ZoneCacheSettingEntity'

export type * from './CloudflareApplicationDeliveryTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareApplicationDeliveryEntityBase } from './CloudflareApplicationDeliveryEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareApplicationDeliverySDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareApplicationDeliverySDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareApplicationDeliverySDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareApplicationDeliverySDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.ArgoConfigApiResponseSingle().list()` / `client.ArgoConfigApiResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ArgoConfigApiResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ArgoConfigApiResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.CachePurgeApiResponseSingleId().list()` / `client.CachePurgeApiResponseSingleId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CachePurgeApiResponseSingleId(entopts?: Record<string, any>) {
    const self = this
    return new CachePurgeApiResponseSingleIdEntity(self, entopts)
  }


  // Entity access: `client.CacheReserveClear().list()` / `client.CacheReserveClear().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CacheReserveClear(entopts?: Record<string, any>) {
    const self = this
    return new CacheReserveClearEntity(self, entopts)
  }


  // Entity access: `client.CustomAssetsForAZone().list()` / `client.CustomAssetsForAZone().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomAssetsForAZone(entopts?: Record<string, any>) {
    const self = this
    return new CustomAssetsForAZoneEntity(self, entopts)
  }


  // Entity access: `client.CustomAssetsForAnAccount().list()` / `client.CustomAssetsForAnAccount().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomAssetsForAnAccount(entopts?: Record<string, any>) {
    const self = this
    return new CustomAssetsForAnAccountEntity(self, entopts)
  }


  // Entity access: `client.CustomPage().list()` / `client.CustomPage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPage(entopts?: Record<string, any>) {
    const self = this
    return new CustomPageEntity(self, entopts)
  }


  // Entity access: `client.CustomPagesCustomAssetResult().list()` / `client.CustomPagesCustomAssetResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPagesCustomAssetResult(entopts?: Record<string, any>) {
    const self = this
    return new CustomPagesCustomAssetResultEntity(self, entopts)
  }


  // Entity access: `client.CustomPagesCustomAssetResultList().list()` / `client.CustomPagesCustomAssetResultList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPagesCustomAssetResultList(entopts?: Record<string, any>) {
    const self = this
    return new CustomPagesCustomAssetResultListEntity(self, entopts)
  }


  // Entity access: `client.CustomPagesPreviewTokenResult().list()` / `client.CustomPagesPreviewTokenResult().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomPagesPreviewTokenResult(entopts?: Record<string, any>) {
    const self = this
    return new CustomPagesPreviewTokenResultEntity(self, entopts)
  }


  // Entity access: `client.ManagedTransform().list()` / `client.ManagedTransform().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ManagedTransform(entopts?: Record<string, any>) {
    const self = this
    return new ManagedTransformEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryAvailability().list()` / `client.ObservatoryAvailability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryAvailability(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryAvailabilityEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryCreateSchedule().list()` / `client.ObservatoryCreateSchedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryCreateSchedule(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryCreateScheduleEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryPageTestResponseCollection().list()` / `client.ObservatoryPageTestResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryPageTestResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryPageTestResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryPageTestResponseSingle().list()` / `client.ObservatoryPageTestResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryPageTestResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryPageTestResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryPagesResponseCollection().list()` / `client.ObservatoryPagesResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryPagesResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryPagesResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryScheduleResponseSingle().list()` / `client.ObservatoryScheduleResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryScheduleResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryScheduleResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.ObservatoryTrend().list()` / `client.ObservatoryTrend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObservatoryTrend(entopts?: Record<string, any>) {
    const self = this
    return new ObservatoryTrendEntity(self, entopts)
  }


  // Entity access: `client.OriginCloudRegion().list()` / `client.OriginCloudRegion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OriginCloudRegion(entopts?: Record<string, any>) {
    const self = this
    return new OriginCloudRegionEntity(self, entopts)
  }


  // Entity access: `client.OriginPostQuantum().list()` / `client.OriginPostQuantum().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OriginPostQuantum(entopts?: Record<string, any>) {
    const self = this
    return new OriginPostQuantumEntity(self, entopts)
  }


  // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Schedule(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleEntity(self, entopts)
  }


  // Entity access: `client.SmartShield().list()` / `client.SmartShield().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SmartShield(entopts?: Record<string, any>) {
    const self = this
    return new SmartShieldEntity(self, entopts)
  }


  // Entity access: `client.SmartTieredCache().list()` / `client.SmartTieredCache().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SmartTieredCache(entopts?: Record<string, any>) {
    const self = this
    return new SmartTieredCacheEntity(self, entopts)
  }


  // Entity access: `client.SmartshieldResponseCollection().list()` / `client.SmartshieldResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SmartshieldResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new SmartshieldResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.SmartshieldSingleHc().list()` / `client.SmartshieldSingleHc().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SmartshieldSingleHc(entopts?: Record<string, any>) {
    const self = this
    return new SmartshieldSingleHcEntity(self, entopts)
  }


  // Entity access: `client.SmartshieldSingleHcId().list()` / `client.SmartshieldSingleHcId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SmartshieldSingleHcId(entopts?: Record<string, any>) {
    const self = this
    return new SmartshieldSingleHcIdEntity(self, entopts)
  }


  // Entity access: `client.Test().list()` / `client.Test().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Test(entopts?: Record<string, any>) {
    const self = this
    return new TestEntity(self, entopts)
  }


  // Entity access: `client.TieredCaching().list()` / `client.TieredCaching().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TieredCaching(entopts?: Record<string, any>) {
    const self = this
    return new TieredCachingEntity(self, entopts)
  }


  // Entity access: `client.UrlNormalization().list()` / `client.UrlNormalization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UrlNormalization(entopts?: Record<string, any>) {
    const self = this
    return new UrlNormalizationEntity(self, entopts)
  }


  // Entity access: `client.ZoneCacheSetting().list()` / `client.ZoneCacheSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ZoneCacheSetting(entopts?: Record<string, any>) {
    const self = this
    return new ZoneCacheSettingEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareApplicationDeliverySDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareApplicationDeliverySDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareApplicationDelivery' }
  }

  toString() {
    return 'CloudflareApplicationDelivery ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareApplicationDeliverySDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareApplicationDeliveryEntityBase,

  CloudflareApplicationDeliverySDK,
  SDK,
}


