// Write the following functions using the reduce built-in function.
// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key
function extractOnlyValue(arr, key) {
    return arr.reduce((result, obj) => {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
      return result;
    }, []);
  }
  
  // Example usage:
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  
  const ages = extractOnlyValue(people, 'age');
  console.log(ages); // [30, 25, 35]
  

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
function countOnlyVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].reduce((result, char) => {
      if (vowels.includes(char)) {
        char = char.toLowerCase();
        result[char] = (result[char] || 0) + 1;
      }
      return result;
    }, {});
  }
  
  // Example usage:
  const text = 'Hello World';
  const vowelCounts = countOnlyVowels(text);
  console.log(vowelCounts); // { a: 1, e: 1, o: 2 }
  

// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function
function addKeyAndValue(arr, key, value) {
    return arr.reduce((result, obj) => {
      obj[key] = value;
      result.push(obj);
      return result;
    }, []);
  }
  
  // Example usage:
  const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  
  const newData = addKeyAndValue(data, 'country', 'USA');
  console.log(newData);
  