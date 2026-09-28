import { CloudflareApplicationDeliveryEntityBase } from '../CloudflareApplicationDeliveryEntityBase';
import type { CloudflareApplicationDeliverySDK } from '../CloudflareApplicationDeliverySDK';
import type { Control } from '../types';
import type { ZoneCacheSetting, ZoneCacheSettingLoadMatch, ZoneCacheSettingListMatch, ZoneCacheSettingCreateData, ZoneCacheSettingUpdateData, ZoneCacheSettingRemoveMatch } from '../CloudflareApplicationDeliveryTypes';
declare class ZoneCacheSettingEntity extends CloudflareApplicationDeliveryEntityBase<ZoneCacheSetting> {
    constructor(client: CloudflareApplicationDeliverySDK, entopts: any);
    make(this: ZoneCacheSettingEntity): ZoneCacheSettingEntity;
    load(this: any, reqmatch?: ZoneCacheSettingLoadMatch, ctrl?: Control): Promise<ZoneCacheSettingEntity>;
    list(this: any, reqmatch?: ZoneCacheSettingListMatch, ctrl?: Control): Promise<ZoneCacheSettingEntity[]>;
    create(this: any, reqdata?: ZoneCacheSettingCreateData, ctrl?: Control): Promise<ZoneCacheSettingEntity>;
    update(this: any, reqdata?: ZoneCacheSettingUpdateData, ctrl?: Control): Promise<ZoneCacheSettingEntity>;
    remove(this: any, reqmatch?: ZoneCacheSettingRemoveMatch, ctrl?: Control): Promise<ZoneCacheSettingEntity>;
}
export { ZoneCacheSettingEntity };
