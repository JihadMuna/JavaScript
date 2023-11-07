// Use the array of numbers below and answer the following
// questions:

const numbers = [1, -5, 666, 2, 400, 11];

// 1. Sort the array of numbers from descending to ascending
// order.
const descendingToAscending = numbers.slice().sort((a,b) => a - b);
console.log('descendingToAscending', descendingToAscending);//output: [-5, 1, 2, 11, 400, 666] V

// 2. Sort the array of numbers from ascending to descending
// order
const ascendingToDescending = numbers.slice().sort((a,b) => b - a );
console.log('ascendingToDescending', ascendingToDescending); // output: [666, 400, 11, 2, 1, -5] V