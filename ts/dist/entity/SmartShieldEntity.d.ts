import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { SmartShield, SmartShieldListMatch, SmartShieldUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class SmartShieldEntity extends CloudflareApplicationDeliveryEntityBase<SmartShield> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: SmartShieldEntity): SmartShieldEntity;
    list(this: any, reqmatch?: SmartShieldListMatch, ctrl?: Control): Promise<SmartShieldEntity[]>;
    update(this: any, reqdata?: SmartShieldUpdateData, ctrl?: Control): Promise<SmartShieldEntity>;
}
export { SmartShieldEntity };
