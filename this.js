'use strict'
let user = {
    name: "Alex",
    age: 30
}

// user.sayHI = function() {
//     console.log("Привет")
// }


function sayhi() {
    console.log(this)
}

user.sayHi = sayhi

user.sayHi()

let admin = {name: 'admin'}

admin.sayHi = sayhi

admin.sayHi()

sayhi()

function makeuser() {
    return {
        name: "user",
        ref: this
    }
}

let usr = makeuser()
//console.log(usr.ref.name) // error


function makeuser2() {
    return {
        name: 'makeuser2',
        ref: function() {
            return this
        }
    }
}

let usr2 = makeuser2()
console.log(usr2.ref().name)