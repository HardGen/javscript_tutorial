function sum(a, b, ...rest) {
    console.log(...rest)
    return a + b
}

function summAll(...args) {
    let sum = 0

    for(let arg of args) {
        sum += arg
    }

    return sum
}

console.log(sum(1, 2, 3, 4, 5))
console.log(summAll(1, 2, 3, 4, 5, 6, 7, 8))


