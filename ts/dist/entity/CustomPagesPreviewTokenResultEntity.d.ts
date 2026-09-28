import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomPagesPreviewTokenResult, CustomPagesPreviewTokenResultCreateData } from '../CloudflareApplicationDeliveryTypes';
declare class CustomPagesPreviewTokenResultEntity extends CloudflareApplicationDeliveryEntityBase<CustomPagesPreviewTokenResult> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomPagesPreviewTokenResultEntity): CustomPagesPreviewTokenResultEntity;
    create(this: any, reqdata?: CustomPagesPreviewTokenResultCreateData, ctrl?: Control): Promise<CustomPagesPreviewTokenResultEntity>;
}
export { CustomPagesPreviewTokenResultEntity };
