function foo() {
    var something = "cool"
    var another = [1, 2, 3]

    function something() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join(" ! "));
    }
}


function CoolModule() {
    var something = "cool"
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something);
    }

    function doAnotherThing() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnotherThing: doAnotherThing
    }
}

var foo = CoolModule()

foo.doSomething()
foo.doAnotherThing()


var foo2 = (function CoolModule() {
    var something = "cool"
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something);
    }

    function doAnotherThing() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnotherThing: doAnotherThing
    }
})()

foo2.doSomething()