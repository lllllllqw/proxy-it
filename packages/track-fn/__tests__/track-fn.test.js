import trackFn from '../lib'
import assert from 'assert'

describe('track-fn', () => {
  const FN_RESULT = 'fn-result'
  const testFn = () => FN_RESULT
  const trackedTestFn = trackFn(testFn)
  const result = trackedTestFn()
  assert.strictEqual(result, 21312)

  console.log('calledTimes', fn.calledTimes)
  console.log('lastCallCostTime', fn.lastCallCostTime)
})
