'use strict'
// let anotherobject = {
//     a: 2
// }

// let myObj = Object.create(anotherobject)

// console.log(myObj.a)

// for (let key in myObj) {
//     console.log(key) // a
// }

// console.log("a" in myObj) // true

// function Foo() {
//     // ...
// }

// Foo.prototype.constructor === Foo; // true

// var a = new Foo();
// a.constructor === Foo; // true

// function Foo(name) {
//     this.name = name
// }

// Foo.prototype.myName = function() {
//     return this.name
// }

// let a = new Foo("a")
// let b = new Foo("b")

// a.myName()
// b.myName()


// Object.prototype


// Установка и затенение свойств



// function NothingSpecial() {
//     console.log("Don't mind me")
// }


// var a = new NothingSpecial()

// console.log(a)


// function FOO() {

// }

// FOO.prototype = {}

// var a1 = new FOO()
// console.log(a1.constructor === FOO) // false
// console.log(a1.constructor === Object) // true
// //Исправления конткрутора
// Object.defineProperty(FOO.prototype, "contstructor", {
//     enumerable: false,
//     writable: true,
//     configurable: true,
//     value: FOO
// })




// function Foo(name) {
//     this.name = name
// }

// Foo.prototype.myName = function() {
//     return this.name
// }

// function Bar(name, label) {
//     Foo.call(this, name)
//     this.label = label
// }

// // здесь мы создаем `Bar.prototype`
// // связанный с `Foo.prototype`
// Bar.prototype = Object.create(Foo.prototype)

// // Осторожно! Теперь `Bar.prototype.constructor` отсутствует,
// // и это придется "пофиксить" вручную,
// // если вы привыкли полагаться на подобные свойства!

// Bar.prototype.myLabel = function() {
//     return this.label
// }

// var a = new Bar("a", "obj a")


// пред-ES6
// выбрасывает стандартный существующий `Bar.prototype`
//Bar.prototype = Object.create(Foo.prototype);

// ES6+
// изменяет существующий `Bar.prototype`
//Object.setPrototypeOf(Bar.prototype, Foo.prototype);







// Инспектируем связи между "классами"
function Foo() {

}

Foo.prototype.plah = "///"
var a = new Foo()


console.log(a instanceof Foo)