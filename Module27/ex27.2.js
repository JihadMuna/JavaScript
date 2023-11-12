//1- Write two functions that use Promises that you can chain.
// The first function, makeAllCaps():
// will take in an array of words and capitalize them,
// and then the second function, sortWords():
// will sort the words in alphabetical order.

//2- If the array contains anything but strings:
// >> it should throw an error.

//3- Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.

//4- Print the resolve and reject in a .then, .catch.

function makeAllCaps(words) {
return new Promise((resolve, reject) => {
    if (Array.isArray(words)) {
const capitalizedWords = words.map((word) => {
    if (typeof word === 'string') {
        return word.toUpperCase();
    } else {
        reject ('Error: Array contains non-string element.');
    }
});
resolve(capitalizedWords);
    }else {
        reject('Error: Input in not an array.')
    }
});
};


function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words)) {
            const sortedWords = words.sort();
            resolve(sortedWords);
        } else {
            reject('Error: Input is not an array.')
        }
    });
};

// Example usage:

const validWords = ['apple', 'banana', 'orange'];

makeAllCaps(validWords)
.then((capitalizedWords) => sortWords(capitalizedWords))
.then((sortedWords) => {
    console.log("Resolved:", sortedWords);
})
.catch((error) => {
    console.log("Rejected:", error);
});

const invalidWords = ['apple', 42, 'orange'];

makeAllCaps(invalidWords)
.then((capitalizedWords) => sortWords(capitalizedWords))
.then((sortedWords) => {
    console.log("Resolved:", sortedWords);
})
.catch((error) => {
    console.log("Rejected:", error);
});