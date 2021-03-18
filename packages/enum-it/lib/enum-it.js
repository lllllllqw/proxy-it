export const enumIt = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      if(Reflect.has(target, prop)) {
        return Reflect.get(target, prop)
      } else {
        throw new Error(`Unknown enum prop '%s'`, prop)
      }
    },
    set() {
      throw new Error(`Enum is readonly, can not set prop`)
    },
    defineProperty() {
      throw new Error(`Enum is readonly, can not set prop`)
    },
    deleteProperty() {
      throw new Error(`Enum is readonly, can not set prop`)
    }
  })
}