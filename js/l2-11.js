// // 代理
// let o = {
//   name: '小明',
//   price: 190
//
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
//
// console.log(d.price, d.name)

// 无法修改
// let o = {
//   name: '小明',
//   price: 190
// }

// es6
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key]
//   },
//   set (target, key, value) {
//     console.log("不允许修改" + value)
//     return false
//   }
// })
// d.price = 1
// console.log(d.price, d.name)

// es5
// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }
// console.log(o.name, o.price)
// o.price = 1
// console.log(o.name, o.price)

// 校验
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // 上报
// }, true)
//
// let o = {
//   name: '小明',
//   price: 190
// }
//
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         // 不满足规则就上报
//         throw new TypeError('price exceed 300')
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })

// d.price = 290
// console.log(d.price)
// d.price = 2000
// console.log(d.price)
// d.name = 'nza'
// console.log(d.name)
// d.age = 400
// console.log(d.age)


// class Component {
//   constructor () {
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//
//   get id () {
//     return this.proxy.id
//   }
// }
//
// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)


// 撤销
let o = {
  name: '小明',
  price: 190

}
let d = Proxy.revocable(o, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d.proxy.name, d.proxy.price)
setTimeout(function () {
  d.revoke()
  setTimeout(function () {
    console.log(d.proxy.name, d.proxy.price)
  }, 200)
}, 1000)

