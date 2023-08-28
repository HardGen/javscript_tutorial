//obj instance of Class

class Rabbit {}
let rabbit = new Rabbit()

console.log(rabbit instanceof Rabbit) // true

function Animal() {}
console.log(new Animal() instanceof Animal) // true

let arr = [1, 2, 3, 4]
console.log(arr instanceof Array)// true
console.log(arr instanceof Object) // true


alert( window[Symbol.toStringTag]); // window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]