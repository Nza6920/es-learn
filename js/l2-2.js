// es5
const arr = [1,2,3,4,5]
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

// for (let item of arr) {
//   console.log(item)
// }

const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}

for (let key in Price) {
  console.log(key, Price[key])
}


