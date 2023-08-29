let obj = {
    key: "value"
}

let myObj = new Object()

let strPrimitive = "I am a string"
console.log(typeof strPrimitive)
console.log(strPrimitive instanceof String) // false

let strObj = new String("I am a string")
console.log(typeof strObj)
console.log(strObj instanceof String) // true
Object.prototype.toString.call(strObj)