class Animal {
    
    constructor(name) {
        this.speed = 0
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }

    stop() {
        this.speed = 0
        console.log(`${this.name} стоит наподвижно.`)
    }
}

class Rabbit extends Animal {
    constructor(name, speed, earLength) {
        super(name, speed)
        this.earLength = earLength
        
    }
    hide() {
        console.log(`${this.name} прячется`)
    }

    stop() {
        this.stop() // расширение родительского stop
        this.hide()
    }
}

let rabbit = new Rabbit("Белый кролик")
rabbit.run(5)
rabbit.hide()