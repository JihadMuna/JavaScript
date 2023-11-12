// Write a function that takes a number as an argument
// and returns a Promise that tests if the value is less than
// or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.
const value = 15;

function testNumber(value) {
  return new Promise((resolve, reject) => {
  if (value > 10) {
    resolve();
  } else {
    reject();
  }
  });
};
testNumber(value)
.then(() => {
console.log(`${value} is greater than 10.`);
})
.catch(() => {
  console.log(`${value} is less or equal to 10.`);
});