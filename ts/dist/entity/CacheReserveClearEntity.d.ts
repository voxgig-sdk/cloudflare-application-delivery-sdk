import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CacheReserveClear, CacheReserveClearListMatch, CacheReserveClearCreateData } from '../CloudflareApplicationDeliveryTypes';
declare class CacheReserveClearEntity extends CloudflareApplicationDeliveryEntityBase<CacheReserveClear> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CacheReserveClearEntity): CacheReserveClearEntity;
    list(this: any, reqmatch?: CacheReserveClearListMatch, ctrl?: Control): Promise<CacheReserveClearEntity[]>;
    create(this: any, reqdata?: CacheReserveClearCreateData, ctrl?: Control): Promise<CacheReserveClearEntity>;
}
export { CacheReserveClearEntity };
