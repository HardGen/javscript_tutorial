let x = 1
x = -x
console.log(x) // унраный минус

let y = 3
console.log(y - x)

console.log(5 % 2) // 1
console.log(8 % 3) // 2
console.log(8 % 4) // 0

let s = "моя" + "строка"
console.log(s)

console.log('1' + 2)
console.log(2 + '1')

console.log(2 + 2 + '1') // '41'

let apples = "2"
let oranges = "3"

console.log(apples + oranges) //23

console.log(+apples + +oranges) // 5

// приоритет операторов: унарный плюс, унраный минус, **, *, /, +, -
console.log("ПРИОРИТЕТ")
console.log(3 + 4 * 5) // 23
console.log(3 * 4 ** 5) // 3072


let a, b;
console.log((a = b = 5))

console.log(3 > 2 && 2 > 1)
console.log(3 > 2 > 1)
console.log((3 > 2) > 1)


a = 1
b = 2

let c = 3 - (a = b + 1) // 0
console.log(c)
console.log(a)


let counter = 2
counter++
console.log(counter)
counter--
console.log(counter)


counter = 1
a = 0
a = ++counter
console.log(a)

let temp = (1 + 2, 3 + 4)

console.log(temp)

for(a = 1, b = 3, c = a * b; a < 10; a++) {

}


console.log("" + 1 + 0) // 10
console.log("" - 1 + 0)
console.log(true + false)
console.log("2" * "3") // 6
console.log(4 + 5 + "px") //  '9px'
console.log("4" - 2) // -2
console.log("4px" - 2) // NaN
console.log("  -9   " + 5) //   -9  5
console.log(null + 1) // 1
console.log(Number(null)) //0
console.log(undefined + 1) // NaN
console.log("\t \n" + 2) // 2