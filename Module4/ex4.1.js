// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');
let numSiblings = prompt("How many siblings do you have?");

// 2. If you have one sibling, log to the console '1 sibling!' (use loose equality == for now)
if (numSiblings == 1)
{console.log('1 sibling');
}

// 3. Use an else-if block to log 'More than 1 sibling' in case 'numSiblings' is greater than 1
else if (numSiblings > 1) {
    console.log('More than 1 sibling');
}

// 4. Use an else block to log 'No siblings' (this block will be executed when 'numSiblings' is 0 or any other value)
else {
    console.log('No siblings');
}

// 5. Test the code with different values of 'numSiblings',
// including 1 and 0. -V

// 6. Change == to ===, and test the code again, with the same
// values of 'numSiblings'. Notice what happens when there
// is exactly 1 sibling! Why is this happening?
if (numSiblings === 1)
{console.log('1 sibling');
}
else if (numSiblings > 1) {
    console.log('More than 1 sibling');
}
else {
    console.log('No siblings');
}
console.log(numSiblings === 1);

// >> its log ('No siblings'), because numSiblings is a variable and didn't equal 1 all the time. numSiblings === 1 is false.

// 7. Finally, convert 'numSibling' to a number, and watch what happens now when you input 1.
numSiblings = 2;
if (numSiblings === 1)
{console.log('1 sibling');
}
else if (numSiblings > 1) {
    console.log('More than 1 sibling');
}
else {
    console.log('No siblings');
}
// output ('More than 1 sibling')

// 8. Reflect on why we should use the === operator and type
// conversion in this situation.
