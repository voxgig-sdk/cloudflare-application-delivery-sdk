import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomAssetsForAZone, CustomAssetsForAZoneRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class CustomAssetsForAZoneEntity extends CloudflareApplicationDeliveryEntityBase<CustomAssetsForAZone> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomAssetsForAZoneEntity): CustomAssetsForAZoneEntity;
    remove(this: any, reqmatch?: CustomAssetsForAZoneRemoveMatch, ctrl?: Control): Promise<CustomAssetsForAZoneEntity>;
}
export { CustomAssetsForAZoneEntity };
