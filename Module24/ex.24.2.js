// Here is the Pokemon function:
function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    };

// 1. Create three instances of the Pokemon and save them in a variable.
const pokemon1 = new Pokemon("Pikachu", "Electric", ["Thunderbolt", "Quick Attack", "Thunder Shock"]);
const pokemon2 = new Pokemon("Charizard", "Fire/Flying", ["Flamethrower", "Fly", "Ember"]);
const pokemon3 = new Pokemon("Squirtle", "Water", ["Water Gun", "Bubble", "Hydro Pump"]);

// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
    Pokemon.prototype.callPokemon = function(){
        console.log(`I choose you, ${this.name}.`);
    };

  // ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
    Pokemon.prototype.attack = function (attackNumber){
        if (attackNumber >=0 && attackNumber < this.attackList.length){
        console.log(`${this.name} used: ${this.attackList[attackNumber]}.`);
    }
    else{
        console.log("Invalid attack number.");
    }
};

// Call each pokemon with the 2 methods you created.

pokemon1.callPokemon();
pokemon1.attack(1);

pokemon2.callPokemon();
pokemon2.attack(0);

pokemon3.callPokemon();
pokemon3.attack(2);