import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ManagedTransform, ManagedTransformListMatch, ManagedTransformUpdateData, ManagedTransformRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ManagedTransformEntity extends CloudflareApplicationDeliveryEntityBase<ManagedTransform> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ManagedTransformEntity): ManagedTransformEntity;
    list(this: any, reqmatch?: ManagedTransformListMatch, ctrl?: Control): Promise<ManagedTransformEntity[]>;
    update(this: any, reqdata?: ManagedTransformUpdateData, ctrl?: Control): Promise<ManagedTransformEntity>;
    remove(this: any, reqmatch?: ManagedTransformRemoveMatch, ctrl?: Control): Promise<ManagedTransformEntity>;
}
export { ManagedTransformEntity };
