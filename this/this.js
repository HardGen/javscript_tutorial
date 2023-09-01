function identity() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = `Hello I'am ${identity.call(this)}`
    console.log(greeting)
}

var me = {
    name: "Kyle"
}

var you = {
    name: "Reader"
}

identity.call(me) // Kyle
identity.call(you) // Reader

speak.call(me)
speak.call(you)


function foo(num) {
    console.log("foo: " + num);

    this.count++
}

foo.count = 0

for(let i = 0; i < 10; i++) {
    if(i > 5) {
        foo.call(foo, i)
    }
}

console.log(foo.count)