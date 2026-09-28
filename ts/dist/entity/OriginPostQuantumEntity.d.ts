import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { OriginPostQuantum, OriginPostQuantumLoadMatch, OriginPostQuantumUpdateData } from '../CloudflareApplicationDeliveryTypes';
declare class OriginPostQuantumEntity extends CloudflareApplicationDeliveryEntityBase<OriginPostQuantum> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: OriginPostQuantumEntity): OriginPostQuantumEntity;
    load(this: any, reqmatch?: OriginPostQuantumLoadMatch, ctrl?: Control): Promise<OriginPostQuantumEntity>;
    update(this: any, reqdata?: OriginPostQuantumUpdateData, ctrl?: Control): Promise<OriginPostQuantumEntity>;
}
export { OriginPostQuantumEntity };
