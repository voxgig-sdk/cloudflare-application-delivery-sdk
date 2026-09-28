import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { CustomPage, CustomPageLoadMatch, CustomPageListMatch, CustomPageUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class CustomPageEntity extends CloudflareApplicationDeliveryEntityBase<CustomPage> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: CustomPageEntity): CustomPageEntity;
    load(this: any, reqmatch?: CustomPageLoadMatch, ctrl?: Control): Promise<CustomPageEntity>;
    list(this: any, reqmatch?: CustomPageListMatch, ctrl?: Control): Promise<CustomPageEntity[]>;
    update(this: any, reqdata?: CustomPageUpdateData, ctrl?: Control): Promise<CustomPageEntity>;
}
export { CustomPageEntity };
