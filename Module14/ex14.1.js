// Write the following functions using the reduce built-in function.
// 1. max
function findMax(arr) {
    if (arr.length === 0) {
      return undefined; // Handle an empty array
    }
  
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
  }
  
  const numbers = [4, 7, 1, 12, 9];
  const maxNumber = findMax(numbers);
  console.log(maxNumber); // 12
  

// 2. the sum of even numbers
function sumOfEvens(arr) {
    return arr.reduce((sum, current) => (current % 2 === 0 ? sum + current : sum), 0);
  }
  
  const numbers1= [1, 2, 3, 4, 5, 6];
  const evenSum = sumOfEvens(numbers1);
  console.log(evenSum); // 12 (2 + 4 + 6)
  

// 3. average
function calculateAverage(arr) {
    if (arr.length === 0) {
      return undefined; // Handle an empty array
    }
  
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
  }
  
  const numbers2 = [3, 6, 9];
  const avg = calculateAverage(numbers2);
  console.log(avg); // 6 (3 + 6 + 9) / 3
  