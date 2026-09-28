import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryScheduleResponseSingle, ObservatoryScheduleResponseSingleLoadMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryScheduleResponseSingleEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryScheduleResponseSingle> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryScheduleResponseSingleEntity): ObservatoryScheduleResponseSingleEntity;
    load(this: any, reqmatch?: ObservatoryScheduleResponseSingleLoadMatch, ctrl?: Control): Promise<ObservatoryScheduleResponseSingleEntity>;
}
export { ObservatoryScheduleResponseSingleEntity };
