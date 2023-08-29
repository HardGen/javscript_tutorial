// 'use strict'
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

function Foo(name) {
    this.name = name
}

Foo.prototype.myName = function() {
    return this.name
}

let a = new Foo("a")
let b = new Foo("b")

a.myName()
b.myName()