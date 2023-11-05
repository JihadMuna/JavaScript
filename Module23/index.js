// Answer the following questions:

// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
console.log(this);
// in the global scope, 'this' will point to the global object,
// which is 'window' in a web browser context.
// because when 'this' is not set within a function or object,
// it defaults to the global object.


// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// greet: () => {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();
//a. 'this' will point to the global object which is 'window'
// because arrow functions capture the this value from their containing lexical context,
// and in this case, the lexical context is the global scope.

//b. To fix the code and have this point to the myObj object
// I should use a regular function for the 'greet' method
const myObj = {
    name: 'Timmy',
    greet: function (){
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();


// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};
//  If it's called as a method of an object:
// this will refer to that object.
// If called standalone:
// it will refer to the global object (window in a web browser). The value of this is determined at runtime based on the calling context.


// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();
//this will also point to the global object (window)
// because arrow functions do not have their own this context.


// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
document.querySelector(".element").addEventListener(() => {
console.log(this);
});
// a.the this inside the arrow function passed to addEventListener
// will also point to the global object (window).
// Arrow functions do not have their own this context and capture it from their surrounding lexical context,
// which, in this case, is the global scope.

// b. I can use a regular function instead of an arrow function for the event listener:
document.querySelector(".element").addEventListener(function() {
    console.log(this);
  });
  