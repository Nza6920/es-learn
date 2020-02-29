
// ea5
// let arr = ['hello', 'world']
// let firstName = arr[0]
// let secName = arr[1]
// console.log(firstName, secName)

// es6
// 解构赋值
// let [firstName, secName] = arr
// console.log(firstName, secName)

// let arr = ['a', 'b', 'c', 'd']
// let [firstName, ,thirdName] = arr
// console.log(firstName, thirdName)

// let arr = 'abcd'
// let [firstName, ,thirdName] = arr
// console.log(firstName, thirdName)

// let arr = 'abcd'
// let [firstName, ,thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)

// let user = {
//   name: 's',
//   surname: 't'
// };
// console.log(user);
// [user.name, user.surname] = [1,2]
// console.log(user)

// let user = {
//   name: 's',
//   surname: 't'
// };
// for (let [key, val] of Object.entries(user)) {
//   console.log(key, val)
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// let [first, sec, ...last] = arr
// console.log(first, sec, last)

// let arr = []
// let [first, sec, ...last] = arr
// console.log(first, sec, last)


// let options = {
//   title: 'menu',
//   // width: 100,
//   height: 200
// }
//
// let {title: title2, width = 130, height} = options
// console.log(title2, width, height)


// let options = {
//   title: 'menu',
//   width: 100,
//   height: 200
// }
// let { title, ...last } = options
// console.log(title, last)


let options = {
  size: {
    width: 100,
    height: 200
  },
  item: ['cake', 'cookie'],
  extra: true
}
let { size: {width, height}, extra, item: [first, sec] } = options
console.log(width, height, extra, first, sec)
