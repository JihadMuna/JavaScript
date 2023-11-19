// 1. What is wrong with the code? explain in your own words

/**The problem with the code is related to the context (this)
within the getStrength method of the hero object.
When the getStrength function is passed as an argument to whoIsStronger,
it loses its original context:
(this refers to the global object, which is window in a browser environment).
Therefore, this.
health in getStrength becomes undefined, leading to unexpected behavior.*/

// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

// const hero = {
// health: 5,
// power: 68,
// getStrength: function(){
// if (this.health <= 5){
// return this.power - 10;
// } else return this.power;
// }
// }
// function whoIsStronger(getStrength){
// const myStrength = 82;
// if (getStrength() < myStrength){
// return "I am stronger";
// } else return "You are stronger";
// }
// whoIsStronger(hero.getStrength);

const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
      if (this.health <= 5) {
        return this.power - 10;
      } else return this.power;
    },
  };
  
  function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
      return "I am stronger";
    } else return "You are stronger";
  }
  
  // Fix: Use bind to set the context for getStrength
  whoIsStronger(hero.getStrength.bind(hero));
  