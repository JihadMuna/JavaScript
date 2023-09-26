/*1.Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function.
The function checks that the string is indeed a string.
 If the string is a string, pass the string to a callback function
  that logs that string to the console. */
function isString(text, callback) {
if (typeof text === 'string') {
    callback(text);
} else {
    console.log("Text is not a string.");
}
}

/*2.Create a function called ‘firstWordUpperCase’
that receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.*/
function firstWordUpperCase(text, callback) {
    if (typeof text !== 'string') {
        console.log("Text is not a string.");
        return;
      }
const words = text.split(' ');
const capitalizedFirstWord = words[0].charAt[0].toUpperCase() + words[0].slice(1);
const dashedString = words.map(word => word.toLowerCase()).join('-');

callback(dashedString);
}

/*// 3. Calling 'firstWordUpperCase' function
 with a callback of your choice*/
 function myCallback(result) {
    console.log(`Callback function recieved: ${result}`);
 }
 const stringText = "This is a string";
 firstWordUpperCase(stringText, myCallback);

 //4. Create my own function
const numbersArray = [15, 11, 40, 43, 52, 12, 20, 77, 58, 22];
const numbersArray2 = [78, 16, 36, 76, 54, 43, 28, 17, 28, 33];

 function totalSum(arrayList) {
let sum = 0;
arrayList.forEach((number) => {
    sum += number;
});
return sum;
}

function checkingTotal (myArray, myFunction) {
    if (myFunction(myArray) > 300) {
        console.log("The total is bigger than 300");
    }else console.log("The total is smaller than 300");
}

checkingTotal(numbersArray, totalSum);
checkingTotal(numbersArray2, totalSum);