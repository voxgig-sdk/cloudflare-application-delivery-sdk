import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomPagesCustomAssetResult, CustomPagesCustomAssetResultLoadMatch, CustomPagesCustomAssetResultCreateData, CustomPagesCustomAssetResultUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class CustomPagesCustomAssetResultEntity extends CloudflareApplicationDeliveryEntityBase<CustomPagesCustomAssetResult> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomPagesCustomAssetResultEntity): CustomPagesCustomAssetResultEntity;
    load(this: any, reqmatch?: CustomPagesCustomAssetResultLoadMatch, ctrl?: Control): Promise<CustomPagesCustomAssetResultEntity>;
    create(this: any, reqdata?: CustomPagesCustomAssetResultCreateData, ctrl?: Control): Promise<CustomPagesCustomAssetResultEntity>;
    update(this: any, reqdata?: CustomPagesCustomAssetResultUpdateData, ctrl?: Control): Promise<CustomPagesCustomAssetResultEntity>;
}
export { CustomPagesCustomAssetResultEntity };
