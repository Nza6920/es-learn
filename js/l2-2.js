// es5
// const arr = [1,2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
//
// arr.forEach(function (item) {
//   console.log(item)
// })


// arr.every(function (item) {
//   console.log(item)
//   if (item === 1) {
//     return true
//   }
// })

// arr.a = 9
// for (let index in arr) {
//   console.log(index, arr[index])
// }
//
// for (let item of arr) {
//   console.log(item)
// }
//
// const Price = {
//   A: [1.5, 2.3, 4.5],
//   B: [3, 4, 5],
//   C: [0.5, 0.8, 1.2]
// }
//
// for (let key in Price) {
//   console.log(key, Price[key])
// }

// 伪数组转换(es5 )
// let args = [].slice.call(arguments)  // collection
// let imgs = [].slice.call(document.querySelectorAll('img'))   // NodeList

// es6
// let args2 = Array.from(arguments)
// let imgs2 = Array.from(document.querySelectorAll('img'));
// Array.from(arrayLike, mapFn, thisArg)

// let array = Array(5)
// array.forEach(function (item) {
//   item = 1
// })
// for (let i = 0; i < array.length; i++) {
//   array[i] = 1
// }
// let array2 = Array.from({ length: 5 }, function () {
//   return 1
// })
// console.log(array2)


// 创建新数组
// es5
// let arry = Array(5)

// es6
// let array = Array.of(1, 2, 3, 4)
// console.log(array)

// let array = Array(5).fill(3)
// console.log(array)


// 查找
// es5
let array = [1,2,3,4]
// let finds = array.filter(function (item) {
//   return item === 3
// })
// console.log(finds)

// es6
let find = array.find(function (item) {
  return item % 2 === 0
})
console.log(find)

let find2 = array.findIndex(function (item) {
  return item % 2 === 0
})
console.log(find2)
