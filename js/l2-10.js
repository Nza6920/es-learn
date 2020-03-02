// 反射
// console.log(Math.floor.apply(null, [1.72]))

// console.log(Reflect.apply(Math.floor, null, [1.72]))

// let price = 91.5
// if (price > 100) {
//   price = Math.floor.apply(null, [price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
//
// console.log(price)

// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, price))


// let d = new Date()
// console.log(d.getTime())

// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)


// const student = {}
// let r = Object.defineProperty(student, 'name', { value: 'Mike2' })
// let r = Reflect.defineProperty(student, 'name', { value: 'Mike2' })
// console.log(student, r)

// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')
// console.log(obj)

// console.log(Reflect.get(obj, 'x'))
// console.log(Reflect.get([3, 4], 1))
// console.log(Reflect.set(obj, 'z', 4))

// const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 1, 'goose')
// console.log(arr)

// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))


// const obj = { x: 1, y: 2 }
// console.log(Reflect.has(obj, 'x'))
// Object.freeze(obj)                   // 冻结对象, 不可扩展
// Reflect.preventExtensions(obj)       // 冻结对象, 不可扩展
// console.log(Reflect.isExtensible(obj))  // 是否可扩展

// console.log(Reflect.ownKeys(obj))            // 查看自身属性
// console.log(Reflect.ownKeys([1, 2, 3, 4]))   // 查看自身属性

const arr = [1, 2, 3, 4]
console.log(Reflect.getPrototypeOf(arr))
Reflect.setPrototypeOf(String.prototype)
console.log(Reflect.getPrototypeOf(arr))
