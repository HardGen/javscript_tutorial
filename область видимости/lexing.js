function foo(a) {
    var b = a * 2
    
    function bar(c) {
        console.log(a, b, c)
    }

    bar(b * 3)
}

foo(2) // 2 4 12


function foo2(str, a) {
    eval(str)
    console.log(a, b)
}

var b = 2

foo2("var b = 3;", 1) // 1, 3


function foo3(str) {
    'use strict'
    eval(str)
    console.log(a)
}

try {
    foo3("var a = 2;")
} catch (err) {
    console.log(err.message)
}