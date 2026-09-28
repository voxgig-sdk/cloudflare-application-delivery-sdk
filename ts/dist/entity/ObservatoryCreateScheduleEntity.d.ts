import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryCreateSchedule, ObservatoryCreateScheduleCreateData } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryCreateScheduleEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryCreateSchedule> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryCreateScheduleEntity): ObservatoryCreateScheduleEntity;
    create(this: any, reqdata?: ObservatoryCreateScheduleCreateData, ctrl?: Control): Promise<ObservatoryCreateScheduleEntity>;
}
export { ObservatoryCreateScheduleEntity };
