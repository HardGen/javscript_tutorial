function User(name) {
    if (!new.target) {
        return new User(name)
    }
    this.name = name
    this.isAdmin = false

    this.sayHi = function() {
        console.log("My name is " + this.name)
    }
}

let user = new User('Jack')
let user2 = User('Kafarzada')

user.sayHi()

function BigUser() {
    this.name = "Alex"

    return {
        name: "Godzilla",
        ref: function() {
            return this.name.toString()
        }
    }
}

console.log(new BigUser().name) // Godzilla
console.log(new BigUser().ref()) // Godzilla