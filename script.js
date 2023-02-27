"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');



function logger() {
    console.log('My name is Uri');
}

//calling / runing / invoking function
logger();
logger();
logger();



const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);


const age2 = calcAge2(1991);

console.log(age1, age2);


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
} 




//no return needed if its just one parameter

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


console.log(yearsUntilRetirement(1991, 'Uri'));
console.log(yearsUntilRetirement(1980, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));



const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        return -1;
    }

   
}

console.log(yearsUntilRetirement(1991, 'Uri'));
console.log(yearsUntilRetirement(1950, 'Mike'));



//  ARRAYS.

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';  // changes one of the values of the array
console.log(friends);

// friends = ['Bob', 'Alice'];    you can't change the whole array just some parameter of it as the line above

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



//ADD METHODS
//push method
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


// unshift method

friends.unshift('John');
console.log(friends);



//REMOVE ELEMENTS

// pop method
                                //Last element out
friends.pop();
const popped = friends.pop();
console.log(popped);                    
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Steven')); 
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

*/

//OBJECTS

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Spain";
jonas["twitter"] = "@jonasschmedtman";

// Challenge
// "jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  //},

  //calcAge: function () {
  // console.log(this);
  // return 2037 - this.birthYear;
  //},

    */

/*

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}
    -year old ${this.job}, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
//console.log(jonas['calcAge'](1991));

//Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

//console.log(`${jonas.firstName} is a
//${jonas.calcAge()}-year old ${jonas.job},
//and ${
//  jonas.hasDriversLicense === true
//    ? "And he has a drivers license"
//    : "And he has not a drivers license;"
//}`);
console.log(jonas.getSummary());



// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weigths repetitions ${rep}`);
}

for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}

*/

/*

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
//CONTINUE
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

// BREAK WITH NUMBER

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}

*/

/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise:${exercise} Lifting weight repetition ${rep}`);
  }
}

*/

//for (let rep = 1; rep <= 10; rep++) {
//  console.log(`Lifting weigths repetitions ${rep}`);
//}

/*
let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE: Lifting weigths repetitions ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end..");
}
*/
