import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { TieredCaching, TieredCachingLoadMatch, TieredCachingUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class TieredCachingEntity extends CloudflareApplicationDeliveryEntityBase<TieredCaching> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: TieredCachingEntity): TieredCachingEntity;
    load(this: any, reqmatch?: TieredCachingLoadMatch, ctrl?: Control): Promise<TieredCachingEntity>;
    update(this: any, reqdata?: TieredCachingUpdateData, ctrl?: Control): Promise<TieredCachingEntity>;
}
export { TieredCachingEntity };
