<?php
declare(strict_types=1);

// CloudflareApplicationDelivery SDK base feature

class CloudflareApplicationDeliveryBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareApplicationDeliveryContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PostConstructEntity(CloudflareApplicationDeliveryContext $ctx): void {}
    public function SetData(CloudflareApplicationDeliveryContext $ctx): void {}
    public function GetData(CloudflareApplicationDeliveryContext $ctx): void {}
    public function GetMatch(CloudflareApplicationDeliveryContext $ctx): void {}
    public function SetMatch(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PrePoint(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreSpec(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreRequest(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreResponse(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreResult(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreDone(CloudflareApplicationDeliveryContext $ctx): void {}
    public function PreUnexpected(CloudflareApplicationDeliveryContext $ctx): void {}
}
