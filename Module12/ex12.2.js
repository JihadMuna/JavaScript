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