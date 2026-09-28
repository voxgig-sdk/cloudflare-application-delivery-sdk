
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareApplicationDeliverySDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareApplicationDeliverySDK.test()
    equal(testsdk instanceof CloudflareApplicationDeliverySDK, true,
      'CloudflareApplicationDeliverySDK.test() must return a client synchronously')
  })

})
