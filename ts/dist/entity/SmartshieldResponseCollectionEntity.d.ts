import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { SmartshieldResponseCollection, SmartshieldResponseCollectionListMatch } from '../CloudflareApplicationDeliveryTypes';
declare class SmartshieldResponseCollectionEntity extends CloudflareApplicationDeliveryEntityBase<SmartshieldResponseCollection> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: SmartshieldResponseCollectionEntity): SmartshieldResponseCollectionEntity;
    list(this: any, reqmatch?: SmartshieldResponseCollectionListMatch, ctrl?: Control): Promise<SmartshieldResponseCollectionEntity[]>;
}
export { SmartshieldResponseCollectionEntity };
