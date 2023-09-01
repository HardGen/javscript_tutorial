'use strict'
var myObject = {
    a: 2
}

console.log(Object.getOwnPropertyDescriptors(myObject, "a"))

Object.defineProperty(myObject, "b", {
    value: 3,
    writable: true,
    configurable: true,
    enumerable: true
})

console.log(myObject.b)

// Запрет расширения
// Object.preventExtensions( myObject );