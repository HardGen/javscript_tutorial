'use strict'
// let user = {
//     name: "Alex",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         console.log(`hint: ${hint}`)
//         return hint == "string" ? `name: "${this.name}"` : this.money
//     }
// }

// console.log(user)
// console.log(+user)
// console.log(user + 1000)

const aaa = {
    toString() {
        return {}
    }
}

console.log(aaa.toString())