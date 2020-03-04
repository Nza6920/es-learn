// // 让循环停下来
//es5
// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
//
// loop()

// es6 generator
// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }
// const l = loop()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }
// const l = gen()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield * [1, 2, 3, 4]
//   console.log(val)
// }
// const l = gen()
// console.log(l.next())
// console.log(l.next())

// 传参修改 yield 的表达式返回值
// function * gen () {
//   let val
//   val = yield [1, 2, 3, 4]
//   console.log(val)
// }
// const l = gen()
// console.log(l.next(10))
// console.log(l.return(100))
// console.log(l.next(20))


// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('ss'))
// console.log(g.next())


// 小实例1 抽奖
// es5
// function draw (first = 1, second = 3, third = 5) {
//   let firstPrice = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrice = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I']
//   let thirdPrice = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H', '3I']
//
//   let result = []
//   let random
//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrice.length)
//     result = result.concat(firstPrice.splice(random, 1))
//   }
//
//   // 抽二等奖
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrice.length)
//     result = result.concat(secondPrice.splice(random, 1))
//   }
//
//   // 抽三等奖
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrice.length)
//     result = result.concat(thirdPrice.splice(random, 1))
//   }
//
//   return result
// }
// let t = draw()
// for (let val of t) {
//   console.log(val)
// }


// function * draw (first = 1, second = 3, third = 5) {
//   let firstPrice = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrice = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I']
//   let thirdPrice = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H', '3I']
//
//   let count = 0
//   let random
//   while (true) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrice.length)
//       yield firstPrice[random]
//       count++
//       firstPrice.splice(random, 1)
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrice.length)
//       yield secondPrice[random]
//       count++
//       secondPrice.splice(random, 1)
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thirdPrice.length)
//       yield thirdPrice[random]
//       count++
//       thirdPrice.splice(random, 1)
//     } else {
//       return false
//     }
//   }
// }
//
// let d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)


// function * count (x = 1) {
//   while (1) {
//     if (x % 3 === 0) {
//       yield x
//     }
//     x ++
//   }
// }
//
// let c = count()
// console.log(c.next().value)
