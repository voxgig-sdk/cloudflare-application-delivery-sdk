import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { SmartshieldSingleHcId, SmartshieldSingleHcIdRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class SmartshieldSingleHcIdEntity extends CloudflareApplicationDeliveryEntityBase<SmartshieldSingleHcId> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: SmartshieldSingleHcIdEntity): SmartshieldSingleHcIdEntity;
    remove(this: any, reqmatch?: SmartshieldSingleHcIdRemoveMatch, ctrl?: Control): Promise<SmartshieldSingleHcIdEntity>;
}
export { SmartshieldSingleHcIdEntity };
