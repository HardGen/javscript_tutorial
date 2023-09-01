'use strict'
// function baz() {
//     // стек вызовов: `baz`
//     // поэтому наша точка вызова — глобальная область видимости    

//     console.log("baz");
//     bar()
// }

// function bar() {
//     // стек вызовов: `baz` -> `bar`
//     // поэтому наша точка вызова в `baz`
//     console.log("bar")
//     foo()
// }

// function foo() {
//     // стек вызовов: `baz` -> `bar` -> `foo`
//     // поэтому наша точка вызова в `bar`

//     console.log("foo")
// }

// baz() // <-- точка вызова




//привязка по умолчанию (отдельный вызов функции)
// function foo() {
//     console.log(this.a)
// }

// var a = 2;

// foo()




// Неявная привязка
function foo() {
    console.log(this.a);
}

// var obj = {
//     a: 2,
//     foo: foo
// }


// var obj2 = {
// 	a: 42,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };

//Только верхний/последний уровень ссылки на свойство объекта
//в цепочке имеет значение для точки вызова
//obj1.obj2.foo(); // 42


//obj.foo() // 2




// Неявно потерянный

// Одним из самых распространенных недовольств, которые вызывает привязка 
// this — когда неявно привязанная функция теряет эту привязку,
//  что обычно означает что она вернется к привязке по умолчанию, 
//  либо объекта global, либо undefined, в зависимости от режима strict mode.
// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// var bar = obj.foo // ссылка на функцию

// var a = "Ой, глобальная"
// bar() // "ой, глобальная"

// function doFoo(fn) {
//     // `fn` — просто еще одна ссылка на `foo`
//     fn() //<-- точка вызова!
// }

// doFoo(obj.foo) //  "ой, глобальная"




// Явная привязка
// function foo() {
//     console.log(this.a)
// }

// var obj = {
//     a: 2
// }

// foo.call(obj)


// Жесткая привязка
// var bar = function() {
//     foo.call(obj)
// }

// bar() // 2
// setTimeout(bar, timeout); // 2

//Самый типичный способ обернуть функцию с жесткой привязкой
// var bar2 = function() {
//     return foo.apply(obj, arguments)
// }


//Еще один способ выразить этот шаблон — создать 
// переиспользуемую вспомогательную функцию:
// function foo2(something) {
//     console.log(this.a, something);
//     return this.a + something
// }

// function bind(fn, obj) {
//     return function() {
//         return fn.apply(obj, arguments)
//     }
// }

// var bar3 = bind(foo2, obj)





function foo(el) {
    console.log(el, this.id);
}

var obj = {
    id: "awesome"
};

[1, 2, 3, 4].forEach(foo, obj);





//Привязка new
// function foo(a) {
// 	this.a = a;
// }

// var bar = new foo( 2 );
// console.log( bar.a ); // 2

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // наиболее подходящая вещь в ECMAScript 5
            // внутренняя функция IsCallable
            throw new TypeError("Function.prototype.bind - what " +
                "is trying to be bound is not callable"
            );
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () { },
            fBound = function () {
                return fToBind.apply(
                    (
                        this instanceof fNOP &&
                            oThis ? this : oThis
                    ),
                    aArgs.concat(Array.prototype.slice.call(arguments))
                );
            }
            ;

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}