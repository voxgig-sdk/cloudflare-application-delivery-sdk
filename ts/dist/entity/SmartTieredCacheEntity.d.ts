import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { SmartTieredCache, SmartTieredCacheLoadMatch, SmartTieredCacheCreateData, SmartTieredCacheUpdateData, SmartTieredCacheRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class SmartTieredCacheEntity extends CloudflareApplicationDeliveryEntityBase<SmartTieredCache> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: SmartTieredCacheEntity): SmartTieredCacheEntity;
    load(this: any, reqmatch?: SmartTieredCacheLoadMatch, ctrl?: Control): Promise<SmartTieredCacheEntity>;
    create(this: any, reqdata?: SmartTieredCacheCreateData, ctrl?: Control): Promise<SmartTieredCacheEntity>;
    update(this: any, reqdata?: SmartTieredCacheUpdateData, ctrl?: Control): Promise<SmartTieredCacheEntity>;
    remove(this: any, reqmatch?: SmartTieredCacheRemoveMatch, ctrl?: Control): Promise<SmartTieredCacheEntity>;
}
export { SmartTieredCacheEntity };
