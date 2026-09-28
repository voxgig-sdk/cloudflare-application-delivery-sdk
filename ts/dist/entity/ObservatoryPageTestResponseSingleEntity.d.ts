import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryPageTestResponseSingle, ObservatoryPageTestResponseSingleLoadMatch, ObservatoryPageTestResponseSingleCreateData } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryPageTestResponseSingleEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryPageTestResponseSingle> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryPageTestResponseSingleEntity): ObservatoryPageTestResponseSingleEntity;
    load(this: any, reqmatch?: ObservatoryPageTestResponseSingleLoadMatch, ctrl?: Control): Promise<ObservatoryPageTestResponseSingleEntity>;
    create(this: any, reqdata?: ObservatoryPageTestResponseSingleCreateData, ctrl?: Control): Promise<ObservatoryPageTestResponseSingleEntity>;
}
export { ObservatoryPageTestResponseSingleEntity };
