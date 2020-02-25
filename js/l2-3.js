// es5 class
// let Animal = function (type) {
//   this.type = type
// }
//
// Animal.prototype.eat = function () {
//   console.log('吃果子狸喽')
// }
//
// let dog = new Animal('小狗')
// let monkey = new Animal('猴子')
//
// console.log(dog)
// console.log(monkey)
//
// monkey.constructor.prototype.eat = function () {
//   console.log('吃猴脑')
// }
//
// dog.eat()
// monkey.eat()
//
// monkey.eat = function () {
//   console.log('吃猴脑2')
// }
//
// dog.eat()
// monkey.eat()

// es6
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//
//   eat () {
//     console.log('吃果子狸喽')
//   }
// }
//
// let dog = new Animal('小狗')
// let monkey = new Animal('猴子')
//
// console.log(dog)
// console.log(monkey)
//
// monkey.eat = function() {
//   console.log('吃猴脑2')
// }
//
// dog.eat()
// monkey.eat()
//
// console.log(typeof Animal)


// es6 getter setter
// let _age = 3
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//
//   get age() {
//     return _age
//   }
//
//   set age(age) {
//     if (age < 7) {
//       _age = age
//     }
//   }
//
//   eat () {
//     console.log('吃果子狸喽')
//   }
// }
//
// let dog = new Animal('小狗')
// console.log(dog.age)
// dog.age = 5
// console.log(dog.age)


// 静态方法  es6
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//
//   eat () {
//     Animal.walk()
//     console.log('吃果子狸喽')
//   }
//
//   static walk() {
//     console.log('走')
//   }
// }
//
// let dog = new Animal()
// dog.eat()


// 继承(es5)
// let Animal = function (type) {
//   this.type = type
// }
//
// Animal.prototype.eat = function () {
//   console.log('吃果子狸喽')
// }
//
// let Dog = function () {
//   // 初始化父类的构造函数
//   Animal.call(this, 'dog')
//   this.run = function () {
//     console.log('跑起来')
//   }
// }
//
// Dog.prototype = Animal.prototype
//
// let dog = new Dog()
// dog.eat()


//es6
class Animal {
  constructor (type) {
    this.type = type
  }

  eat () {
    console.log('吃果子狸喽')
  }
}

class Dog extends Animal{
  constructor (type) {
    super(type)
    this.age = 2
  }
}

let dog = new Dog('小狗')
dog.eat()
