'use strict'
// let age = 19
// if (age  < 18) {
//     function welcome() {
//         console.log("Привет")
//     }
// } else {
//     function welcome() {
//         console.log("Здравствуйте")
//     }
// }

// welcome() // function is not define



let age = 19
// let welcome;

// if(age < 18) {
//     welcome = function() {
//         console.log("Привет")
//     }
// } else {
//     welcome = function() {
//         console.log("Здравствуйте")
//     }
// }

let welcome = (age < 18)
             ? function() { console.log("Привет") }
             : function() { console.log("Здравствуйте") }

welcome()