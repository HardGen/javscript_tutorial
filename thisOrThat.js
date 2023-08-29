'use strict'

function identity() {
    return this.name.toUpperCase()
}

function spead() {
    let greeting = `Hello, I'm ${this}`
    console.log(greeting)
}

let me = {
    name: "Kyle",
    toString() {
        return this.name
    }
}

let you = {
    name: "Reader",
    toString() {
        return this.name
    }
}

identity.call(me)
identity.call(you)

spead.call(me)
spead.call(you)


function foo(num)  {
    console.log(`foo: ${num}`)
    this.count++
}

foo.count = 0

for(let i = 0; i< 10; i++) {
    if(i > 5) {
        foo(i)
    }
}