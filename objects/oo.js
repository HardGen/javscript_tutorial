function Foo(who) {
    this.me = who
}

Foo.prototype.identity = function() {
    return `I'm ${this.name}`
}

function Bar(who) {
    Foo.call.apply(this, who)
}
Bar.prototype = Object.create(Foo.prototype) // наследвание (ссылка на Foo.prototype)

Bar.prototype.speak = function() {
    console.log("Hello ", this.identity() + ".")
}

var b1 = new Bar("b1")
var b2 = new Bar("b2")


b1.speak()
b2.speak()
