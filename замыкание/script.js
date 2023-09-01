// function foo() {
//     var a = 2

//     function bar () {
//         console.log(a)
//     }

//     return bar
// }

// var baz = foo()

// baz()


// function wait(message) {
//     setTimeout(function timer(){
//             console.log(message)
//     }, 2000);
// }

// wait("Привет замыкание")


// for(var i = 0; i < 7; i++) {
//     (function() {
//         var j = i
//         setTimeout(function timer() {
//             console.log(j)
//         }, 2000);
//     })()
// }



for(var i = 0; i < 7; i++) {
    (function(i) {
        setTimeout(function timer() {
            console.log(i)
        }, 2000);
    })(i)
}