import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { OriginCloudRegion, OriginCloudRegionLoadMatch, OriginCloudRegionListMatch, OriginCloudRegionCreateData, OriginCloudRegionUpdateData, OriginCloudRegionRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class OriginCloudRegionEntity extends CloudflareApplicationDeliveryEntityBase<OriginCloudRegion> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: OriginCloudRegionEntity): OriginCloudRegionEntity;
    load(this: any, reqmatch?: OriginCloudRegionLoadMatch, ctrl?: Control): Promise<OriginCloudRegionEntity>;
    list(this: any, reqmatch?: OriginCloudRegionListMatch, ctrl?: Control): Promise<OriginCloudRegionEntity[]>;
    create(this: any, reqdata?: OriginCloudRegionCreateData, ctrl?: Control): Promise<OriginCloudRegionEntity>;
    update(this: any, reqdata?: OriginCloudRegionUpdateData, ctrl?: Control): Promise<OriginCloudRegionEntity>;
    remove(this: any, reqmatch?: OriginCloudRegionRemoveMatch, ctrl?: Control): Promise<OriginCloudRegionEntity>;
}
export { OriginCloudRegionEntity };
