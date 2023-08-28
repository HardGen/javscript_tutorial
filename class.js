class User {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        if(value.length < 4) {
            console.log("Имя слишком короткое")
            return;
        }
        this._name = value
    }

    sayhi() {
        console.log(this.name)
    }
}

let user = new User("Иван")
user.sayhi()

console.log(User.prototype.sayhi)
console.log(Object.getOwnPropertyNames(User.prototype))


let User2 = class {
    sayHi() {
        console.log("Привет")
    }
}