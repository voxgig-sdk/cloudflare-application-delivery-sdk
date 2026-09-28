import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomAssetsForAnAccount, CustomAssetsForAnAccountRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class CustomAssetsForAnAccountEntity extends CloudflareApplicationDeliveryEntityBase<CustomAssetsForAnAccount> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomAssetsForAnAccountEntity): CustomAssetsForAnAccountEntity;
    remove(this: any, reqmatch?: CustomAssetsForAnAccountRemoveMatch, ctrl?: Control): Promise<CustomAssetsForAnAccountEntity>;
}
export { CustomAssetsForAnAccountEntity };
