let value = true
console.log(typeof value)

value = String(value)
console.log(value)
console.log(typeof value)


console.log("6" / "2")

let str = '123'
console.log(typeof str)

let num = Number(str)
console.log(typeof num)

let age = Number("Любая строка вместо числа")
console.log(age) // NaN

console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1

console.log(Number('12px')) // NaN
console.log(parseInt("123.2px"))
console.log(parseFloat("123.2px"))

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true

console.log(Boolean(null)) // false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) // false

console.log(Boolean("0")) // true
console.log(Boolean(" ")) // true
console.log(Boolean("")) // false



//численное преобразование
// undefined -> NaN
// null -> 0
// true / false -> 1/0
