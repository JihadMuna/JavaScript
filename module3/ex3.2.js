/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit return functions (one of each).

function welcome() {
    let welcomeMessage = 'Welcome to Appleseeds Bootcamp!';
    return welcomeMessage;
  }
const welcome = () => 'Welcome to Appleseeds Bootcamp!';

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}

const power = a => {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
};

// From function expressions to IIFE functions.

const result = (a => Math.sqrt(a))(value);

const result = (a,b) => Math.randum() * (a - b) + b;