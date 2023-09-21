const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
/*
1- go over every element in the first array.
2- go over every element in the second array.
2- check if each element is at the first and the second array.
3- if it is -print true, if its not -print false
*/

// Function to check if two arrays have the same values
function arraysHaveSameValues(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

for (const item of arr1) {
    if (!arr2.includes(item)) {
      return false;
    }
  }

  return true;
}

const result = arraysHaveSameValues(food1,food2); // Test with the given arrays
console.log(result); // Should print false V

// Test with the same arrays
const food3 = [...food1]; // Create a copy of food1
const result2 = arraysHaveSameValues(food1, food3);
console.log(result2); // Should print true