// 异步操作

// es5
// function loadScript (src, callback) {
//   // 动态创建节点
//   let script = document.createElement('script')
//   script.src = src
//   // 监听 onload 事件
//   script.onload = () => {
//     callback(src)
//   }
//   document.head.append(script)
// }
// function test(name) {
//   console.log(name)
// }
//
// loadScript('./1.js', function (script) {
//   loadScript('./2.js', function (script) {
//     loadScript('./3.js', function (script) {
//
//     })
//   })
// })

// es6
// function loadScript (src) {
//   // padding -> fulfilled or rejected
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => {
//       resolve(src)
//     }
//     script.onerror = (err) => {
//       reject(err)
//     }
//     document.head.append(script)
//   })
// }
//
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./2.js')
//   }, (err) => {
//     console.log(err)
//   })
//   .then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   })

// promise.then(onFulfilled, onRejected), 若传入非函数会返回空的promise对象

// function test (bool) {
//   if (bool) {
//     return new Promise((resolve, reject) => {
//       resolve(30)
//     })
//   } else {
//     return Promise.resolve(42)
//   }
// }
// test(1).then((val) => {
//   console.log(val)
// })

// 统一异常
// function loadScript (src) {
//   // padding -> fulfilled or rejected
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = src
//     script.onload = () => {
//       resolve(src)
//     }
//     script.onerror = (err) => {
//       reject(err)
//     }
//     document.head.append(script)
//   })
// }
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./2.js')
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   })
//   .catch(err => console.log(err))


// 并行
// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)
//
// 聚合接口结果
// Promise.all([p1, p2, p3]).then((val) => {
//   console.log(val)
// })


const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 1000)
  })
}

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 0)
  })
}
// 只取快的接口结果, 先到先得
Promise.race([p1(), p2()]).then((val) => {
  console.log(val)
})
