import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { SmartshieldSingleHc, SmartshieldSingleHcLoadMatch, SmartshieldSingleHcCreateData, SmartshieldSingleHcUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class SmartshieldSingleHcEntity extends CloudflareApplicationDeliveryEntityBase<SmartshieldSingleHc> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: SmartshieldSingleHcEntity): SmartshieldSingleHcEntity;
    load(this: any, reqmatch?: SmartshieldSingleHcLoadMatch, ctrl?: Control): Promise<SmartshieldSingleHcEntity>;
    create(this: any, reqdata?: SmartshieldSingleHcCreateData, ctrl?: Control): Promise<SmartshieldSingleHcEntity>;
    update(this: any, reqdata?: SmartshieldSingleHcUpdateData, ctrl?: Control): Promise<SmartshieldSingleHcEntity>;
}
export { SmartshieldSingleHcEntity };
