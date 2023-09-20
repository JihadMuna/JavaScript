//1- 'percentageOfWorld1' function:

function percentageOfWorld1 (population){
    const worldPopulation = 7900;
    const percentage = (population/worldPopulation) * 100;
    return percentage; 
}

// Calling 'percentageOfWorld1' for 3 populations and logging the results

const chinaPopulation = 1441;
const indiaPopulation = 1380;
const usaPopulation = 331;

const chinaPercentage = percentageOfWorld1(chinaPopulation);
const indiaPercentage = percentageOfWorld1(indiaPopulation);
const usaPercentage = percentageOfWorld1(usaPopulation);

console.log(`China represents ${chinaPercentage}% of the world population.`);
console.log(`India represents ${indiaPercentage}% of the world population.`);
console.log(`USA represents ${usaPercentage}% of the world population.`);

//2- 'percentageOfWorld2' function :


const percentageOfWorld2 = (population) => {
    const worldPopulation = 7900;
    const percentage = (population/worldPopulation) * 100;
    return percentage; 
}

// Calling 'percentageOfWorld2' for 3 populations and logging the results

const percentageOfChina = percentageOfWorld2(chinaPopulation);
const percentageOfIndia = percentageOfWorld2(indiaPopulation);
const percentageOfUsa = percentageOfWorld2(usaPopulation);

console.log(`China represents ${percentageOfChina}% of the world population.`);
console.log(`India represents ${percentageOfIndia}% of the world population.`);
console.log(`USA represents ${percentageOfUsa}% of the world population.`);
