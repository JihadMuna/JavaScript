 //block 1:
// function funcA() {
//     console.log(a); // output will be undefined, because a is declared by var, but it still not has initialization.
//     console.log(foo()); // output will be 2, because its an inner function (foo()) at the outer function (func()).
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();

//block 2:
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName; 
// }
// }
// };
// console.log(obj.prop.getFullName()); // output will be : 'Aurelio De Rosa', because of the function (getFullName) read from the specified function (prop).
// var test = obj.prop.getFullName;
// console.log(test()); //output will be "'John Doe'", because of the function take the global variable.

//block 3:
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a); //output will be undefined, because the a declared as a variable at block scope. 
//     console.log(typeof b); // output will be (number) because its declared as a global variable.

// block 4:
// function funcC() {
//     console.log("1");
//     }
//     funcC();
//     function funcC() {
//     console.log("2");  // Two output wil be '2', because the hoisted function is the second function
//     }
//     funcC(); 

//     // block 5:
//     function funcD1() {
//         d = 1;
//         }
//         funcD1();
//         console.log(d); // output will be 1; because the function read the global variable b.
//         function funcD2() {
//         var e = 1;
//         }
//         funcD2();
//         console.log(e); // will be an error, because e declared as a var inside the function, so it's unknown outside it.

        //block 6:
        function funcE() {
            console.log("Value of f in local scope: ", f); // at local scope the output will be 1, because it read from the global variable which is declared and has initialization.
            }
            console.log("Value of f in global scope: ", f); // at global scope the output will be undefined, because its read the variable which is declared but not has initialization. 
            var f = 1;
            funcE(); 