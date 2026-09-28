import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryPageTestResponseCollection, ObservatoryPageTestResponseCollectionListMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryPageTestResponseCollectionEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryPageTestResponseCollection> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryPageTestResponseCollectionEntity): ObservatoryPageTestResponseCollectionEntity;
    list(this: any, reqmatch?: ObservatoryPageTestResponseCollectionListMatch, ctrl?: Control): Promise<ObservatoryPageTestResponseCollectionEntity[]>;
}
export { ObservatoryPageTestResponseCollectionEntity };
