
let id = Symbol("id")
let id2 = Symbol("id")

console.log(id == id2)
console.log(id.toString())
console.log(id.description)

let someSymbol = Symbol("id")
//скрытые свойство
let user = {
    name: "Alex",
    [someSymbol]: 123
}

user[id] = 1
console.log(user[id])

//символы игнорируются циклом for..in

for (let key in user ){
    console.log(key)
}

const clone = Object.assign({}, user)
console.log(clone[someSymbol])
console.log(clone[id])


//ГЛОБАЛЬНЫЕ СИМВОЛЫ (содержаться в реестрае)
let id3 = Symbol.for('id')
let idAgain = Symbol.for('id')
console.log(id3 == idAgain) // true

console.log(Object.getOwnPropertySymbols(Object))


function CANV(digit, size) { 
    const width =  height = digit.length * size

    const doska = []
    for (let i = 0; i < width; i++) {
        for(let j = 0; j < height; j++) {
            doska[i,j] = 0
        }
    }

    console.log(doska)
}

CANV("123", 2)