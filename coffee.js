'use strict'
class CoffeMachine {
    //Защищённые свойства обычно начинаются с префикса _.
    _waterAmount = 0 // количество воды внутри

    //приватное свойство
    #waterLimit = 200

    #checkWater(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды")
        if (value > this.#waterLimit) throw new Error('Слишком много воды')
    }

    set waterAmount(value) {
        if(value < 0) throw new Error("Отрицательное количество воды")
        this._waterAmount = value
    }

    get waterAmount() {
        return this._waterAmount
    }

    constructor(power) {
        this._power = power
        console.log(`Создана кофеварка, мощность: ${power}`)
    }

    //только для чтения
    get power() {
        return this._power
    }
}

//создаем кофеварку
const coffeeMachine = new CoffeMachine(100)

//добавляем воды
coffeeMachine.waterAmount = 200
console.log(`Мощность: ${coffeeMachine.power}W`)

coffeeMachine.power = 25

// снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error