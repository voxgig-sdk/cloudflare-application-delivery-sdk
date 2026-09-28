import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryPagesResponseCollection, ObservatoryPagesResponseCollectionListMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryPagesResponseCollectionEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryPagesResponseCollection> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryPagesResponseCollectionEntity): ObservatoryPagesResponseCollectionEntity;
    list(this: any, reqmatch?: ObservatoryPagesResponseCollectionListMatch, ctrl?: Control): Promise<ObservatoryPagesResponseCollectionEntity[]>;
}
export { ObservatoryPagesResponseCollectionEntity };
