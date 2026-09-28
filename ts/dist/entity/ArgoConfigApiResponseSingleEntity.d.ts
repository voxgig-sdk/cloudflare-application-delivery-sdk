import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ArgoConfigApiResponseSingle, ArgoConfigApiResponseSingleListMatch, ArgoConfigApiResponseSingleUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class ArgoConfigApiResponseSingleEntity extends CloudflareApplicationDeliveryEntityBase<ArgoConfigApiResponseSingle> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ArgoConfigApiResponseSingleEntity): ArgoConfigApiResponseSingleEntity;
    list(this: any, reqmatch?: ArgoConfigApiResponseSingleListMatch, ctrl?: Control): Promise<ArgoConfigApiResponseSingleEntity[]>;
    update(this: any, reqdata?: ArgoConfigApiResponseSingleUpdateData, ctrl?: Control): Promise<ArgoConfigApiResponseSingleEntity>;
}
export { ArgoConfigApiResponseSingleEntity };
