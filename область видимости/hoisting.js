// a = 2

// var a

// console.log(a) // 2

//------------------------------------


// console.log(a) // undefined

// var a = 2


// //------------------------------------


// foo()

// function foo() {
//     console.log(a)

//     var a = 2
// }



// //------------------------------------

foo() // 1

var foo;

function foo() {
    console.log(1)
}

foo = function() {
    console.log(2)
}