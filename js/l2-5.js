// let x = 1
// let y = 2
// let z = 3
// * 代表异步
// let obj = {
//   x,
//   y,
//   [z]: 6,
//   * hello () {
//     console.log('hello world')
//   }
// }
// obj.hello()

// Set
// let s = new Set()
// let s = new Set([1,2,3,4])
// s.add('hello')
// s.add('world')

// 重复数据会自动过滤
// s.add('hello').add('world').add('hello')
// console.log(s)

// s.delete('world')
// console.log(s)
//
// s.clear()
// console.log(s)

// console.log(s.has('hello'), s.size)

// console.log(s.keys())
// console.log(s.values())
// console.log(s.entries())

// s.forEach(function (item) {
//   console.log(item)
// })

// for (let item of s) {
//   console.log(item)
// }

// let map = new Map([[1, 2], [3, 4], [5, 6]])
// console.log(map)

// map.set(5, 7)
// console.log(map)
//
//
// map.delete(5)
// console.log(map)
//
// map.clear()
// console.log(map)

// console.log(map.has(1))
// console.log(map.get(1))
//
// console.log(map.keys(), map.values(), map.entries())
//
// map.forEach((val, key) => {
//   console.log(key, val)
// })
//
// for (let [key, val] of map) {
//   console.log(key, val)
// }

const target = {
  a: {
    b: {
      c: {
        d: 3
      }
    },
    e: 6,
    f: 5,
    h: 10
  },

}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 2,
    f: 3
  },
}
Object.assign(target, source)
console.log(target)
console.log(source)
