// 2. Build your own find method with the help of prototypes
// Extra
// 3. Build your own reduce method with the help of prototypes

// 1. Build your own filter method with the help of prototypes
Array.prototype.myFilter = function(callback){
    const filteredArray = [];
    for (let i = 0; i < this.length; i++){
if (callback(this[i], i, this)){
    filteredArray.push(this[i]);
}
    }
    return filteredArray;
};

// Example:
const numbers = [1,2,3,4,5];
const evenNumbers = numbers.myFilter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers); // output: [2,4]