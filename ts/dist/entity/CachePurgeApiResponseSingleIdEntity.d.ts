import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CachePurgeApiResponseSingleId, CachePurgeApiResponseSingleIdCreateData } from '../CloudflareApplicationDeliveryTypes';
declare class CachePurgeApiResponseSingleIdEntity extends CloudflareApplicationDeliveryEntityBase<CachePurgeApiResponseSingleId> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CachePurgeApiResponseSingleIdEntity): CachePurgeApiResponseSingleIdEntity;
    create(this: any, reqdata?: CachePurgeApiResponseSingleIdCreateData, ctrl?: Control): Promise<CachePurgeApiResponseSingleIdEntity>;
}
export { CachePurgeApiResponseSingleIdEntity };
