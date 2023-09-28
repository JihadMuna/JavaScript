const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200

    }

/* 1. Implement the following getCandy function:
The function should return the candy element with
the specified id.*/
    
function getCandy(candyStore, id){
    candyStore.candies.map(candy => {
     if (candy.id == id) {
         return (candy.name);
     } else
     return "Candy is not found by this id:" + id;
    });
 }
 //trying to find candy from specified id
 console.log(getCandy(candyStore, 'as12f'));

/*2. Implement the following getPrice function:
The function should return the price (number) of the
candy with the specified id.*/
function getPrice (candyStore, id){
const matchingPrices = candyStore.candies
.filter((candy) => candy.id === id)
.map((candy) =>  candy.price);
return matchingPrices.length > 0 ? matchingPrices[0] : "Sorry, this id is not found.";
}
//trying example
let candyPrice = getPrice(candyStore,"as12f");
console.log(`Candy price is: ${candyPrice}`);

/*3. Implement the following addCandy function:
The function should add a new candy to the candy
list in candyStore with a default amount of 1. The
function will not return anything.*/
function addCandy (candyStore, id, name, price){
    const newCandy = {
        id: id,
        name: name,
        price: price,
        amount: 1,
    };
    candyStore.candies.push(newCandy);
}

/*4. Implement the following buy function: The function
should add the candy price to the cashRegister, and
decrease the amount property of the relevant candy.*/
function buy(candyStore, id){
    const candy = getCandy(candyStore, id);
    if (candy) { // check if thr candy exists
        if (candy.amount > 0){ // check if there are candies available to buy
            candyStore.cashRegister -= candy.price;
            candy.amount -= 1;
        }else {
            console.log("Sorry, this candy is out of stock.");
        }
    }else {
        console.log("Sorry, Candy not found.");
    }
    }

