"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareApplicationDeliveryError = void 0;
class CloudflareApplicationDeliveryError extends Error {
    isCloudflareApplicationDeliveryError = true;
    sdk = 'CloudflareApplicationDelivery';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareApplicationDeliveryError = CloudflareApplicationDeliveryError;
//# sourceMappingURL=CloudflareApplicationDeliveryError.js.map