let animal = {
    eats: true,
    walk() {
        console.log(`Animal walk`)
    },
    sleep() {
        this.isSleeping = true
    }
}

let rabbit = {
    jump: true
}

rabbit.__proto__ = animal

rabbit.sleep()
console.log(rabbit.isSleeping)
console.log(animal.isSleeping)
console.log(rabbit.eats)
console.log(rabbit.jump)


console.log(Object.keys(rabbit))

for(let prop in rabbit) {
    const isOwn = rabbit.hasOwnProperty(prop)

    if(isOwn) {
        console.log(`Our: ${prop}`)
    } else console.log(`Inherited: ${prop}`)
}