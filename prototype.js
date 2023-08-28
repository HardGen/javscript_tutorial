// let animal = {
//     eats: true
// }

// function Rabbit(name) {
//     this.name = name
// }

// // Rabbit.prototype = animal

// // let rabbit = new Rabbit("White RAbbit")

// console.log(Rabbit.prototype.constructor == Rabbit)

// let rabbit = new Rabbit("White Rabbit")
// let rabbit2 = new rabbit.constructor("Black rabbit")

function Rabbit () {

}

Rabbit.prototype = {
    eats: true
}

let rabbit = new Rabbit()

Rabbit.prototype = {}

console.log(rabbit.eats)
