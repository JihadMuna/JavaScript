// We have an array of superheroes objects:
const wonderWoman = {
name: "Diana Prince"
}

const batman = {
name: "Bruce Wayne"
}

const superHeroes = [wonderWoman, batman];

// and a print name function:
function printName() {
console.log(`my name is ${this.name}`);
}

// We want to print the all heroes names. Implement the
// printHeroes function:
// Note: you cannot change the super heroes objects

function printHeroes(heroes, printFunc) {
    heroes.forEach(function (hero) {
        // Use bind to set the context for printFunc
        printFunc.bind(hero)();
      });
}

  // Test the printHeroes function
  printHeroes(superHeroes, printName);
  