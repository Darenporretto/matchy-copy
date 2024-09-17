/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //iterate over an array of animals
    for (let i = 0; i < animals.length; i++) {
        //check if current name matches provided
        if (animals[i].name === name) {
            //return animal if match found
            return animals[i];
        }
    }
    //return null if not found
    return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //iterarte over array of animals
    for (let i = 0; i < animals.length; i++) {
        //check for matching provided names
        if (animals[i].name === name) {
            //replace entire object with replacement
            animals[i] =replacement;
            return;
            //exit the function after replacement. if no match found do nothing
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //iterate over the animals array
    for (let i = 0; i < animals.length; i++) {
        //check if anmal name matches provided
        if (animals[i].name === name) {
            //remove the animal from the array usinf splice
            animals.splice(i, 1);
            //exit function after removal, if no match is found do nothing
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //check if animal has name property and its length is > 0
    if (!animal.name || animal.name.length === 0) {
      return false; //failed due to invalid name
    }
    
    //check if animal has species property and length is > 0
    if (!animal.species || animal.species.length === 0) {
      return false; //failed due to invalid species
    }
    
    //check for unique name
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === animal.name) {
        return false; //failed bc of dup name
      }
    }
    
    //add new animal object to the array
    animals.push(animal);
    return true; //GREAT SCOTT!!
  }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}