// 参数默认值(es5)
// function f (x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 12
//   }
//
//   return x + y + z
// }
//
// console.log(f(1))

// es6
// function f1 (x, y = 7, z = x + y) {
//   // console.log(Array.from(arguments))
//   // console.log(f1.length)
//   return x + y + z
// }
//
// console.log(f1(1, 2))


// 获取不确定参数(es5)
// function sum () {
//   let num = 0
//   let args = Array.from(arguments).forEach(function (item) {
//     num += item
//   })
//
//   return num
// }

// es6
// function sum(base, ...nums) {
//   let num = 0
//   nums.forEach(function (item) {
//     num += item * 1
//   })
//
//   return base * 2 + num
// }
// console.log(sum(1,2,3,4))



// es5
// function sum (x = 1, y = 2, z = 3) {
//   return x + y + z;
// }
// let data = [4, 5, 7]
// console.log(sum.apply(this, data))

// es6
// console.log(sum(...data))

// 箭头函数(es6)
// let hello = (name) => {
//   console.log('箭头函数' + name)
// }
// let hello2 = name => {
//   console.log('箭头函数2' + name)
// }
// hello('nza')
// hello2('nza2')

// let sum = (x, y, z) => ({data: x + y + z})
// console.log(sum(1, 2, 3))


// es6 this谁定义的指向谁 es5 this谁调用的指向谁
let test = {
  name: 'test',
  say: () => {
    console.log(this.name, this)
  }
}
test.say()
