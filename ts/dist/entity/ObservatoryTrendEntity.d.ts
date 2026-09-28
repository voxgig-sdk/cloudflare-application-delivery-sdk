import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ObservatoryTrend, ObservatoryTrendLoadMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ObservatoryTrendEntity extends CloudflareApplicationDeliveryEntityBase<ObservatoryTrend> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ObservatoryTrendEntity): ObservatoryTrendEntity;
    load(this: any, reqmatch?: ObservatoryTrendLoadMatch, ctrl?: Control): Promise<ObservatoryTrendEntity>;
}
export { ObservatoryTrendEntity };
