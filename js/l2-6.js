// const s = 'aaa_a_aa'
// const r1 = /a+/g
// const r2 = /a+/y
//
// // y 粘连 sticky 严格匹配每一个字符   g 全局 只要有就行
// console.log(r1.exec(s)) // aaa
// console.log(r2.exec(s)) // aaa
//
// console.log(r1.exec(s)) // aaa
// console.log(r2.exec(s)) // aaa


// unicode 字符编码标准 u 修饰符 \uffff
let s = '𠮷'
let s2 = '\uD842\uDFB7'

// console.log(/^\uD842/.test(s2))
// console.log(/^\uD842/u.test(s2))
//
// console.log(/^.$/.test(s))
// console.log(/^.$/u.test(s))
//
// console.log(/\u{20BB7}/u.test(s))
// console.log(/\u{61}/u.test('a'))
//
// console.log(/𠮷{2}/u.test('𠮷𠮷'))

console.log(/[a-z]/i.test('\u212A'))
console.log(/[a-z]/iu.test('\u212A'))
