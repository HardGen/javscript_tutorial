function slow(x) {
    console.log(`called with ${x}`)
    return x
}

let worker = {
    somemethod() {
        return 1
    },

    slow(min, max) {
        return min + max
    }
}

function cachingDecorator(func) {
    let cache = new Map()

    return function(x) {
        if(cache.has(x)) {
            return cache.get(x)
        }

        let result = func.call(this, x)

        cache.set(x, result)
        return result
    }
}
slow = cachingDecorator(slow)

console.log(slow(1))
console.log("again: " + slow(1))

console.log(slow(2))
console.log("again: " + slow(2))


worker.slow = cachingDecorator(worker.slow)
console.log(worker.slow(2))
console.log(worker.slow(2))