import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { Schedule, ScheduleRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ScheduleEntity extends CloudflareApplicationDeliveryEntityBase<Schedule> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ScheduleEntity): ScheduleEntity;
    remove(this: any, reqmatch?: ScheduleRemoveMatch, ctrl?: Control): Promise<ScheduleEntity>;
}
export { ScheduleEntity };
