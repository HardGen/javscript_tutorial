//примесь
let sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

let sayHiMixin = {
    __proto__: sayMixin,
    sayhi() {
        super.say(`Првет, ${this.name}`)
    },

    sayBye() {
        super.say(`Пока, ${this.name}`); // (*)
    }
}

//использовагние
class User {
    constructor(name) {
        this.name = name
    }
}

//копируем методы 
Object.assign(User.prototype, sayHiMixin)

new User("Вася").sayhi() // привет вася



let eventMixin = {
      /**
     * Подписаться на событие, использование:
     * menu.on('select', function(item) { ... }
   */
    on(eventName, handler) {
        if(!this._eventHandlers) this._eventHandlers = {}
        if(!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = []
        }
        this._eventHandlers[eventName].push(handler)
    },

    /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */

    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName]
        if(!handlers) return

        for(let i = 0; i < handlers.length; i++) {
            if(handlers[i] === handler) {
                handlers.slice(i--, 1)
            }
        }
    },

      /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if(!this._eventHandlers?.[eventName]){
        return;
    }

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
}

class Menu {
    choose(value) {
        this.trigger('select', value) 
    }
}

Object.assign(Menu.prototype, eventMixin)
let menu = new Menu()

menu.on("select", value => console.log(`выбранное значение: ${value}`))
menu.choose("123")