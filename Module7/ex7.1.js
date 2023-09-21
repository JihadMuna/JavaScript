const nums = [3,4,4,3,6,3];
// [3,4,6]
const numsNoDuplicates = [];
/*
1- go over every element in the original array.
2- check if element is inside the new array 
3- if it is - do nothing, if its not - add it
*/

for (let i =0; i < nums.length; i++) {
    const number = nums[i];
    if(numsNoDuplicates.indexOf(number) === -1) { // number is not inside new array
     // so add number to new array
     numsNoDuplicates.push(number);  
    }
}
console.log('numsNoDuplicates ', numsNoDuplicates);