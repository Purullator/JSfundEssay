"use strict";

/*

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descSpain = describeCountry('Spain', 10, 'Madrid');
const describePortugal = describeCountry('Portugal', 10, 'Lisbon');
const describeGermany = describeCountry('Germany', 83, 'Berlin');

console.log(descSpain, describePortugal, describeGermany);



const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(49);
const population2 = percentageOfWorld1(83);
const population3 = percentageOfWorld1(1441);

console.log(population1, population2, population3);




const populationPercentage = population => (population /  7900) * 100;

const population1 = populationPercentage(49);
const population2 = populationPercentage(83);
const population3 = populationPercentage(1441);

console.log(population1, population2, population3);




function percentageOfWorld1 (population) {
    return (population / 7900) *100;
}

function describePopulation (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} milion people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('Spain', 49);
describePopulation('China', 1441);
describePopulation('USA', 332);





const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log('No teams wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



const populations = [47, 83, 332, 1441];
console.log(populations.length === 4);

const percentagePop = function percentageOfWorld1(populations) {
    return (populations / 7900) *100;
    
 }

const percentage = [percentagePop(populations[0]), 
                    percentagePop(populations[1]), 
                    percentagePop(populations[2]), 
                    percentagePop(populations[3])
                    ];

console.log(percentage); 



const neighbours = ['Portugal', 'Spain', 'France'];
neighbours.push('Utopia');
neighbours.pop('Utopia');

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
    


neighbours[neighbours.indexOf('Spain')] = 'Gibraltar';
console.log(neighbours);


//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));


*/

//CodingChallenge #2 jsF2
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
bills.forEach((element) => {
  console.log(calcTip(element));
});
*/

/*


const myCountry = {
  country: "Spain",
  capital: "Madrid",
  language: "Spanish",
  population: 49,
  neighbours: ["Portugal", "Italy", "France"],

  describe: function () {
    return `${this.country} has ${this.population}
    million spanish-speaking people, ${this.neighbours.length}
    neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
//console.log(`${myCountry.country} has ${myCountry.population}
//million spanish-speaking people, ${myCountry.neighbours.length}
//neighbouring countries and a capital called ${myCountry.capital}`);
// myCountry.population += 2;
// console.log(myCountry.population);
console.log(myCountry.checkIsland());
console.log(myCountry);

*/

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);
const johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

const markHihgherBMI = markBMI > johnBMI;
console.log(markHihgherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's ${markBMI}!`);
}
*/

/*
const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  totalMass: 78,
  totalHeight: 1.69,

  calcBMI: function () {
    this.bmi = this.totalMass / this.totalHeight ** 2;
    return this.bmi;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  totalMass: 92,
  totalHeight: 1.95,

  calcBMI: function () {
    this.bmi = this.totalMass / this.totalHeight ** 2;
    return this.bmi;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();

if (markMiller.bmi > johnSmith.bmi) {
  console.log(`${markMiller.firstName} ${markMiller.lastName}'s BMI(${markMiller.bmi})
    is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s BMI(${johnSmith.bmi})`);
} else if (johnSmith.bmi > markMiller.bmi) {
  console.log(`${johnSmith.firstName} ${johnSmith.lastName}'s BMI(${johnSmith.bmi})
is higher than ${markMiller.firstName} ${markMiller.lastName}'s BMI(${markMiller.bmi})`);
}
x

const populations = [47, 83, 332, 1441];
const percentages2 = [];

function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);



const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

*/

/*
const populations = [47, 83, 332, 1441];

function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

*/

/*

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
bills.forEach((element) => {
  console.log(calcTip(element));
});

*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tipsys = calcTip(bills[i]);
  tips.push(tipsys);
  const totallis = bills[i] + tips[i];
  totals.push(totallis);
}
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    // sum += arr[i];  same
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
