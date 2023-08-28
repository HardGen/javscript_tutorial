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


// function work(a, b) {
//     console.log(a + b)
// }

// function spy(func) {
//     wrapper.calls = []
//     function wrapper(a, b) {
//         func.call(null, a, b)
//         wrapper.calls.push(`${a}${b}`)
//     }

//     return wrapper
// }

// work = spy(work)
// work(1,2)
// work(3,2)
// work(4,2)
// work(5,2)

// //Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
// //Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
// function f() {
//     console.log(...arguments)
// }

// let f1000 = delay(f, 1000) 
// let f1500 = delay(f, 1500) 


// function delay(f, ms) {
//     return function() {
//         setTimeout(() => f.apply(this, arguments), ms)
//     }
// }

// f1000("test", "Kafazada"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// //f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.







// //Результатом декоратора debounce(f, ms) должна быть обёртка,
// //  которая передаёт вызов f не более одного раза в ms миллисекунд.
// //   Другими словами, когда мы вызываем debounce, это гарантирует, 
// //   что все остальные вызовы будут игнорироваться в течение ms.
// let f2 = debounce(console.log, 1000)

// f2(1) // выполняется намедленно
// f2(2) // проигнорирован


// setTimeout(() => f2(3), 100) // проигнорирован (прошло только 100 мс)
// setTimeout(() => f2(4), 1100) // выполняется
// setTimeout(() => f2(5), 1500) // проигнорирован (прошло только 400 мс от последнего вызова)

// function debounce(func, timeout) {
//     wrapper.flag = false

//     function wrapper() {
        
//         if(wrapper.flag) return 

//         wrapper.flag = true
//         setTimeout(() => {
//             func.call(this, ...arguments)
//             wrapper.flag = false 
//         }, timeout);
//     }

//     return wrapper
// }




function show(a) {
    console.log(a)
}

// show1000 передаёт вызовы show максимум раз в 1000 мс
let show1000 = throttle(show, 1000)

show1000(1)
show1000(2)
show1000(3)
show1000(4)
show1000(5)

function throttle(func, timeout) {

    wrapper.flag = false

    function wrapper() {

        if(wrapper.flag)  {
            wrapper.tempFunc = func
            wrapper.args = arguments
            return
        }

        func.call(this,...arguments)

        wrapper.flag = true

        setTimeout(() => {
            wrapper.flag = false
            wrapper.tempFunc.call(this, ...wrapper.args)
        }, timeout)
    }

    return wrapper
}
