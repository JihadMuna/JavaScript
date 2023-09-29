// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const integers = [5, 10, 15, 20, 25];
function doubledValues(integers) {
    return integers.map((integer) => integer * 2)
}
const doubledArray = doubledValues(integers);
console.log('doubledArray :', doubledArray);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
function onlyEvenValues(integers) {
    return integers.filter((integer) => integer % 2 === 0);
};
const EvenValuesArray = onlyEvenValues(integers);
console.log('onlyEvenValues Array:', EvenValuesArray);

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
const arr = ["Jihad", 32, "May", 34, "Rani", 23];
function showFirstAndLast(arr) {
    return arr.filter((element, index) => typeof element === 'string' && (index === 0 || index === arr.length - 1));
}
const filteredElements = showFirstAndLast(arr);
console.log('The Array with only first and last strings: ', filteredElements);

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u',];
    const vowelCounts = {};

    str.toLowerCase().split('').forEach((char) => {
        if (vowels.includes(char)) {
            vowelCounts[char] = (vowelCounts[char] || 0) + 1;
        }
    });
    return vowelCounts;
}
//trying example to test the code
const counts = vowelCount('Hello, World!');
console.log('The vowel counts is:', counts);

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalize (str) {
    return str.toUpperCase();
}

//Example
const capitalizedString = capitalize('hello, my name is jihad.');
console.log('The capitalizd string : ', capitalizedString);

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
function shiftLetters (str) {
    return str.split('').map((char) => {
        if (char >= 'a' && char <= 'z') {
        const shiftedCharCode = ((char.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 26)            
        }
    })
}









// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)