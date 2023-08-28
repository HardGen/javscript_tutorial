class Animal {
    name = 'Animal'

    constructor() {
        console.log(this.name)
    }
}

class Rabbit extends Animal {
    name = 'rabbit'
}

new Animal()
new Rabbit()