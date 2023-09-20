/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions

const welcome = () => 'Welcome to Appleseeds Bootcamp!';
   console.log(welcome()); 

const power = (a) => (Math.pow(a , 2));
console.log(power());

const add = (a, b = 5) => sum = a + b;
console.log(add());

    // From function expressions to function declarations
   function sayHello () {
    let hello = 'Hello';
    return hello;
  
   }
   console.log(sayHello());

    function squareRoot (a){
       let myNumber= a;
       let result = Math.sqrt(a);
return result;
    } 
console.log(squareRoot.a);

    function randomNumbers (a,b){
       let myNumber = a;
       let myNumber2 = b;
       let result = Math.random() * (a - b) +  b;
       return result;
    } 
console.log(randomNumbers());
   