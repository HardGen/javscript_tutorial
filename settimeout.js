// function sayHi() {
//     console.log("hello")
// }

// // let timerId = setTimeout(sayHi, 5000)
// // // clearTimeout(timerId)
// // console.log(timerId)


// setInterval(() => {
//    console.log("click") 
// }, 2000);

// console.log("hello")

function printNumbers(from, to) {
    const timerID = setInterval(() => {
        from += 1
        console.log(from)
        if(from == to) clearInterval(timerID)
    }, 1000);
}

function printNumbers2(from ,to) {
    setTimeout(function inner() {
        console.log(from)
        from++
        setTimeout(inner, 1000)
    }, 1000)
}    

printNumbers(1, 10)