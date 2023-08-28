'use strict'
let user = {
    firstname : 'Вася',
    sayhi() {
        console.log(`Hello ${this.firstname}`)
    }
}

setTimeout(user.sayhi, 1000); // привет undefined (потеря this)

//аналоги тому что
let f = user.sayhi
setTimeout(f, 2000);

//решение 1 сделать оборетку
setTimeout(() => {
    user.sayhi() 
}, 2000);

//недостатки
user = {
    sayhi() {
        console.log(`Другой пользователь в settimeout`)
    }
}


//РЕШЕНИЕ 2 привязка контекста с помощью BIND
// let boundFunc = func.bind(context)

const user2 = {
    firstname : "Alex",
    sayhi() {
        console.log("Hi ", this.firstname)
    }
}

function func(phrase) {
    console.log( phrase + " " + this.firstname)
}

let funcUser = func.bind(user2)

// Теперь sayHi – это «связанная» функция, которая может быть вызвана
// отдельно или передана в setTimeout (контекст всегда будет правильным).
let sayhi = user2.sayhi.bind(user2)

sayhi()
funcUser("Hello")

setTimeout(sayhi, 1);

//ЧАСТИСНОЕ ПРИМНЕНИНИЕ (привязка аргументов)
function mul(a, b) {
    return a * b
}

let double = mul.bind(null, 2)
let triple = mul.bind(null, 3)
console.log(double(3))
console.log(double(4))
console.log(double(5))


function some() {console.log(this)}
some()