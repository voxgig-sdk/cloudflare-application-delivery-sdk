import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomPagesCustomAssetResultList, CustomPagesCustomAssetResultListListMatch } from '../CloudflareApplicationDeliveryTypes';
declare class CustomPagesCustomAssetResultListEntity extends CloudflareApplicationDeliveryEntityBase<CustomPagesCustomAssetResultList> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomPagesCustomAssetResultListEntity): CustomPagesCustomAssetResultListEntity;
    list(this: any, reqmatch?: CustomPagesCustomAssetResultListListMatch, ctrl?: Control): Promise<CustomPagesCustomAssetResultListEntity[]>;
}
export { CustomPagesCustomAssetResultListEntity };
