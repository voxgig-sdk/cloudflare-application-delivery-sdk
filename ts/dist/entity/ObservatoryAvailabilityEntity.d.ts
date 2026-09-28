import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryAvailability, ObservatoryAvailabilityLoadMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryAvailabilityEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryAvailability> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryAvailabilityEntity): ObservatoryAvailabilityEntity;
    load(this: any, reqmatch?: ObservatoryAvailabilityLoadMatch, ctrl?: Control): Promise<ObservatoryAvailabilityEntity>;
}
export { ObservatoryAvailabilityEntity };
