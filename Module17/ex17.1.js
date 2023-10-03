// //Block 1
// var b = 1; //1-'b' initialized to 1 
// function someFunction(number) {  //2- define a function (someFunction)
// function otherFunction(input) { //4- define an inner function (otherFunction)
// return b; // inside otherFunction, it returns the value of the variable b
// }
// b = 5; //5- b is set to 5 within (someFunction)
// return otherFunction; //6- Then, someFunction returns otherFunction >> then firstResult is assigned the result of calling someFunction(9)
// }
// var firstResult = someFunction(9); //3- someFunction(9) is called 
// var result = firstResult(2); // Finally, result is assigned the result of calling firstResult(2),
// //when firstResult(2) is called. Since otherFunction has access to the variable b,
// // it returns the current value of b, which is 5.
// //So, the result of result will be 5.
// console.log('firstResult(2)', firstResult(2)) // so the output will be 5.
// //--------------------------------//

// //Block 2
// var a = 1; //a is initialized to 1 in the outer scope.
// function b2() { //We have a function named b2() defined.
// a = 10; //The assignment a = 10 inside the b2 function modifies the local variable a within that function.
// // It does not affect the global variable a outside of the function.
// return;
// function a() { } //Inside the b2 function, there is a declaration of another function named a
// } //This declaration of a inside the function b2 creates a new variable a
// //that is local to the function b2.
// // This local a inside b2 "shadows" or takes precedence over the outer a in the global scope.
// b2();
// console.log(a); //it looks for the variable a within the current scope,
// // which is the scope of the b2 function
// // In this scope, there is a local a variable, and its value is 10.
// // Therefore, console.log(a) logs the value of the local a,
// // which is 10.
// //So, the result of console.log(a) will be 10, not 1,
// // because it's accessing the local a variable within the b2 function,
// // not the global a variable.


//Block 3
let i;
for (i = 0; i < 3; i++) {//The for loop initializes i to 0.
const log = () => {//In each iteration of the loop, a log function is defined using an arrow function. 
console.log(i); //This log function captures the variable i from the outer scope.
}
setTimeout(log, 100);//The setTimeout function is called with the log function and a 100-millisecond delay
//The log function will execute after the loop has completed.
//The loop increments i by 1 in each iteration until i becomes 3, at which point the loop exits.
//After the loop completes, the value of i is 3.
// When the log functions scheduled by setTimeout execute, 
//they will all log the value of i, which is 3, because they capture the value of i from the outer scope.

//So, the result of the console.log statements inside the setTimeout functions will all display 3.
}