
'use strict'
console.group('true-false')
let result = 5 > 3
console.log(result)
console.log(2 > 1)
console.log(2 == 1)
console.log(2 != 1)
console.groupEnd()


console.group("Сравнение строк (UNICODE)")
console.log("Я" > "А")
console.log("Коты" > "Кода")
console.log("Сонный" > "Сонн")
console.groupEnd()

console.group('Сравнение разных типов')
console.log("2" > 1) // true, '2' становится 2
console.log('01' == 1) // true
console.log(true == 1)
console.log(false == 0)

let a = 0
console.log(Boolean(a)) // false

let b = "0"
console.log(Boolean(b)) // true
console.log(a == b)
console.groupEnd()



console.group("Строгое сравнение")
console.log(0 == false)
console.log('' == false)
console.groupEnd()


console.log('Строгое сравнение')
console.log(null === undefined) // строгое сравнение false
console.log(null == undefined) // нестрогое стравнеиние true


console.groupEnd()