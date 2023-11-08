// a. Array of words

const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending
// order.
// a.2. Sort the array of strings from ascending to descending
// order.
// b. Let's sort an array of words that includes a word with an
// uppercase:

const foodsWithUpperCase = [
"falafel",
"Sabich",
"hummus",
"pizza with extra pineapple",
];

// b.1. Sort the array of strings from descending to ascending
// order.
const descendingToAscending = foods.slice().sort((a,b) =>  a.localeCompare(b));
console.log('descendingToAscending', descendingToAscending);

// b.2. Sort the array of strings from ascending to descending
// order.
const ascendingToDescending = foods.slice().sort((a,b) =>  b.localeCompare(a));
console.log('ascendingToDescending ', ascendingToDescending );


// c. Longest word
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];
words.sort((a,b) => b.length - a.length);
console.log('Words: ', words);
