function doSomething(a) {

    function doSomethingElse(a) {
        return a - 1
    }
    
    b = a + doSomethingElse(a * 2)

    var b;

    console.log(b * 3)
}

doSomething(2)



//колллизия (привела к бесконечному циклу)
function foo() {
    function bar(a) {
        i = 3
        console.log( a + i )
    }

    for(var i = 0; i < 10; i++) {
        bar(i * 2)
    }
}

foo()