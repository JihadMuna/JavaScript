const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];

    /*Example:
{
    hamburgers: 3,
    sausages: 1,
    salmon: 3,
    pike: 2,
    steak: 1,
    lamb: 2,
    tuna: 2,
    barracuda: 1,
    ham: 1,
    chicken: 1,
    bird: 1,
    rooster: 1,
    anchovies: 1
    }*/

//1. Function to Get All Names:
function getAllNames (data) {
    return data.map((item) => item.name); // uses the map function to extract all the names from the array of objects.
}
//example:
const names = getAllNames(data);
console.log("All Names:", names);

//2. Function to Get Objects Born Before 1990:
function getObjectsBornBefore1990(data) {
const cutoffYear = 1990;
return data.filter((item) => { //filter function to find objects where the birth year (extracted from the "birthday" property) is before 1990.
    const birthYear = new Date(item.birthday).getFullYear();
    return birthYear < cutoffYear;
});
}
//example:
const bornBefore1990 = getObjectsBornBefore1990(data);
console.log("Objects Born Before 1990 :" ,bornBefore1990);

//3. Function to Get Food Counts:
function getFoodCounts (data) {
    const foodCounts = {}; //storing the counts in the foodCounts object.

    data.forEach((item) => { // iterates through the favorite foods and counts how many times each food appears, 
     const favoriteFoods = item.favoriteFoods;
     for (const foodCategory in favoriteFoods) {
        const foods = favoriteFoods[foodCategory];
        foods.forEach((food) => {
            if (foodCounts[food]) {
                foodCounts[food]++;
            } else {
                foodCounts[food] = 1;
            }
        })
     }   
    });
    return foodCounts; 
}

// Example:
const foodCounts = getFoodCounts(data);
console.log("Food Counts: ",foodCounts);
