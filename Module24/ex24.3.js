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


// 2. Build your own find method with the help of prototypes
Array.prototype.myFind = function(callback){
    for (let i = 0; i <= this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

// Example
const fruits = ['apple', 'orange', 'banana', 'cherry'];
const foundFruit = fruits.myFind(fruit => fruit === 'banana');
console.log('Found Fruit:', foundFruit); // output: 'banana' V


// Extra
// 3. Build your own reduce method with the help of prototypes

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    };

    // Example:
    const numbers2 = [1, 2, 3, 4, 5];
    const sum = numbers2.myReduce((acc, num) => acc + num, 0);
    console.log('Sum for numbers: ', sum); // output: 15 V
