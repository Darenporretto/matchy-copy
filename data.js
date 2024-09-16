/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create variable animal assigned t0 an empty object
var animal = {};
//add species using dot notation
animal.species = 'Rat';
//add name using bracket notation
animal['name'] = 'Fink';
//add noises with empty array
animal.noises = [];
//prin to console
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create new variable noises to an empty array
var noises = [];
//add noise element using bracket notation
noises[0] = 'Squeak';
//add a new noise to end using .push
noises.push('Squeal');
// add a new noise to front using .unshift
noises.unshift('Hiss');
//add another using bracket syntax
noises[noises.length] = 'Scream';
//log the array
console.log(noises.length);
//log last element in array
console.log(noises[noises.length - 1]);
//log entire array
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {
  species: 'Rat',
  name: 'Fink',
  noises: []
};
//define noises array
var noises = ['Squeak', 'Squeal', 'Hiss', 'Scream'];

//assign noises array to the noise property using bracket syntax
animal['noises'] = noises;

//add a new noise to the noises array
animal.noises.push('Chirp')

//log the animal object
console.log(animals);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create empty array
var animals = [];
// add the Rat Fink Object
var animal = {
  species: 'Rat',
  name: 'Fink',
  noises: ['Squeak', 'Squeal', 'Hiss', 'Scream', 'Chirp']
};
//add the animal object to an animals array
animals.push(animal);

//log the animals array
console.log(animals);

//create duck object
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

//add duck to array
animals.push(duck);

//log animals array
console.log(animals)

//create 2 more animal objects
var myna = {
  species: 'bird',
  name: 'Waldo',
  noises: ['Leo, no!', 'Laura?']
};

var dog = {
  species: 'St. Bernard',
  name: 'Cujo',
  noises: ['growl', 'snarl']
};

//pushe new animals into array
animals.push(myna);
animals.push(dog);

//log the animals array length
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//array is for the list of friends
var friends = []; 

//define getRandom function
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}

//add a random animal name to the array
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
friends.push(randomAnimal.name); 

//log the friends array
console.log(friends);

//add friends list as property of one animal
animals[0]['friends'] = friends;

//log the animals array
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}