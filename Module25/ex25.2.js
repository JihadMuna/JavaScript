// Create an object with a name property.
//The object should also have:
//1-a method that prints its name
//2-and another method that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.

// Create an object with a name property and methods
const myObject = {
  name: "Jihad",
  printName: function () {
console.log(this.name);
 },
 printNameAfterASecond: function () {
  setTimeout(function () {
    console.log(this.name);
  }.bind(this), 1000);
 },
};

// Test the methods
myObject.printName();  // Prints: Jhiad
myObject.printNameAfterASecond();  // Prints: Jihad after a second
