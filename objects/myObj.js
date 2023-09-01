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



// Дублирование Объектов
function anotherFunction() {

}

var anotherObject = {
    c: true
}

var anotherArray = [];

var myObject = {
    a: 2,
    b: anotherObject,	// ссылка, а не копия!
    c: anotherArray,	// еще одна ссылка!
    d: anotherFunction
};

anotherArray.push(anotherObject, myObject)

var newObject = Object.assign({}, myObject)
console.log(newObject.a)
console.log(newObject.b === anotherObject)
console.log(newObject.c === anotherArray)
console.log(newObject.d === anotherFunction)