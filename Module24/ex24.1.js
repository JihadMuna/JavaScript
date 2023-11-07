// Front-end development: Prototypes
// JavaScript – Is square
// The following exercise contains the following subjects:
// ● prototypes
// Instructions
// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.

// Here is the Square function:
function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }
// Add the isSquare method to the Square prototype
Square.prototype.isSquare = function () {
    return (this.a === this.b && this.b === this.c && this.c === this.d);
}
  // Example 
  const square1 = new Square (4, 4, 4, 4);
  console.log(square1.isSquare()); // true
  
  const square2 = new Square(4, 4, 5, 4);
  console.log(square2.isSquare()); // false

  
// class Square {
// constructor (a, b, c, d){
// this.a = a;
// this.b = b;
// this.c = c;
// this.d = d;
// }
// isSquare() {
    //     return (this.a === this.b && this.b === this.c && this.c === this.d);
    // }
    // }