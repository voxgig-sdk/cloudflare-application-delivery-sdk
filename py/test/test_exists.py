# CloudflareApplicationDelivery SDK exists test

import pytest
from cloudflareapplicationdelivery_sdk import CloudflareApplicationDeliverySDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareApplicationDeliverySDK.test(None, None)
        assert testsdk is not None
