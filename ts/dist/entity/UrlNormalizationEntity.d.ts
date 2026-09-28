import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { UrlNormalization, UrlNormalizationListMatch, UrlNormalizationUpdateData, UrlNormalizationRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class UrlNormalizationEntity extends CloudflareApplicationDeliveryEntityBase<UrlNormalization> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: UrlNormalizationEntity): UrlNormalizationEntity;
    list(this: any, reqmatch?: UrlNormalizationListMatch, ctrl?: Control): Promise<UrlNormalizationEntity[]>;
    update(this: any, reqdata?: UrlNormalizationUpdateData, ctrl?: Control): Promise<UrlNormalizationEntity>;
    remove(this: any, reqmatch?: UrlNormalizationRemoveMatch, ctrl?: Control): Promise<UrlNormalizationEntity>;
}
export { UrlNormalizationEntity };
