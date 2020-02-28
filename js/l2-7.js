// const a = 20
// const b = 10
// const c = 'js'

// es5
// const str = 'my age is ' + (a + b) + ' i love ' + c

// es6
// const str = `my age is ${a + b} i love ${c}`
// console.log(str)

// const retailPrice = 20
// const wholeSalePrice = 16
// const type = 'retail'
// let showTxt = ''

// es5
// if (type === 'retail') {
//   showTxt = '零售: ' + retailPrice
// } else {
//   showTxt = '批发: ' + wholeSalePrice
// }

// es6
// function Price (strings, type) {
//
//   let s1 = strings[0]
//   const retailPrice = 20
//   const wholeSalePrice = 16
//   let showTxt
//
//   if (type === 'retail') {
//     showTxt = '零售: ' + retailPrice
//   } else {
//     showTxt = '批发: ' + wholeSalePrice
//   }
//
//   return `${s1}${showTxt}`
// }
//
// let showTxt = Price`您此次的${'retail'}`
// console.log(showTxt)


// 换行
let s1 = `我是第一行
我是第二行`
console.log(s1)
