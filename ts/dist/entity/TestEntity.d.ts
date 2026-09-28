import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { Test, TestRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class TestEntity extends CloudflareApplicationDeliveryEntityBase<Test> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: TestEntity): TestEntity;
    remove(this: any, reqmatch?: TestRemoveMatch, ctrl?: Control): Promise<TestEntity>;
}
export { TestEntity };
