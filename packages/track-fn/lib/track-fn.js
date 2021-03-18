const trackFn = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error('fn must be a function, but get', fn)
  }

  let calledTimes = 0
  let lastCallCostTime = null

  return new Proxy(fn, {
    apply(target, thisArg, args) {
      calledTimes++
      const callStart = Date.now()
      const result = target.apply(thisArg, args)
      const callEnd = Date.now()
      lastCallCostTime = callEnd - callStart
      return result
    },
    get(target, prop) {
      if (prop === 'calledTimes') {
        return calledTimes
      } else if (prop === 'lastCallCostTime') {
        return lastCallCostTime
      }
      return Reflect.get(target, prop)
    },
  })
}

export {
  trackFn
}