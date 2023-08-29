debugger
function baz() {
    // стек вызовов: `baz`
    // поэтому наша точка вызова — глобальная область видимости

    console.log('baz')
    bar()
}

function bar() {
    // стек вызовов: `baz` -> `bar`
    // поэтому наша точка вызова в `baz`

    console.log('bar')
    foo()
}

function foo() {
    // стек вызовов: `baz` -> `bar` -> `foo`
    // поэтому наша точка вызова в `bar`

    console.log('foo')
}

baz() // <-- точка вызова для `baz`



function foo2() {
    console.log(this.a)
}

let obj2 = {
    a: 42,
    foo:foo
}

let obj1 = {
    a: 2,
    obj2: obj
}

// obj.foo()

obj1.obj2.foo() // 42