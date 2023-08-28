console.log(1 || 0)
console.log(true || 'no matter what') // true
console.log(null || 1) // 1
console.log(null || 0 || 1 || 'a')
console.log(undefined || null || 0)

let currentUser = null
let defaultUser = 'Alex'

let name = currentUser || defaultUser || 'unnamed'

console.log(name) // Alex

let x

console.log(1 && 0) // 0
console.log(1 && 5) // 5


console.log(null && 5)
console.log(0 && 'no matter what') // 0


console.log(!true)
console.log(!0)

console.log(!!"non empty string")
console.log(!!null)


//result = (a != null && a != undefined) ? a : b

let user = "Иван"
console.log(user ?? 'Аноним')

let firstname = null
let lastname = null
nickname = "суперкодер"
console.log(firstname ?? lastname ?? nickname ?? "Аноним")

let height = 0
console.log(height || 1000)
console.log(height ?? 100)