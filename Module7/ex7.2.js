const string = "The more you know, the more you know that you don't know";
/*We want to get the index of the last occurrence of the word
“you”. It should give you 42*/
const searchWord = "you";
//There is three words "you" , so we will have (three indexOf)
const indexOfFirst = string.indexOf(searchWord); 
const indexOfSecond = string.indexOf(searchWord, indexOfFirst + 1); // to get the indexOf for the second "you"

/*console.log(`The index of the first "${searchWord}" from the beginning is ${indexOfFirst}`); // check indexOf for the first "you"*/
console.log(`The index of the last occurrence of the word "${searchWord}" is ${string.indexOf(searchWord, indexOfSecond + 1)}`); // get the index of the last occurrence of the word “you” V


