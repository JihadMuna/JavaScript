function funcA() {
    console.log(a); // output will be undefined, because a is declared by var, but it still not has initialization.
    console.log(foo()); // output will be 2, because its an inner function (foo()) at the outer function (func()).
    var a = 1;
    function foo() {
    return 2;
    }
    }
    funcA();