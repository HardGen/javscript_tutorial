// 'use strict'

// let obj = {}
// console.log(obj)

// let arr = [1, 2, 3]

// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__ == Object.prototype)

// console.log(arr.__proto__.__proto__.__proto__)

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
// }

// Function.prototype.defer2 = function(ms) {
//     let f = this
//     return function(...args) {
//         setTimeout(() => {
//             f.apply(this, args)
//         }, ms);
//     }
// }

// function f() {
//     console.log("hello")
// }

// f.defer(1000)

// function f2(a, b) {
//     console.log(a + b)
// }

// f2.defer2(100)(1, 1)


function work(a, b) {
    console.log(a + b)
}

function spy(func) {
    wrapper.calls = []
    function wrapper(a, b) {
        func.call(null, a, b)
        wrapper.calls.push(`${a}${b}`)
    }

    return wrapper
}

work = spy(work)
work(1,2)
work(3,2)
work(4,2)
work(5,2)

