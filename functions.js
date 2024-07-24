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
// search
function search(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i]; //return the animal object if found
        }
    }
    return null; //return null if the animal with given name isnt found
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//replace
function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement; //replace the animal object with the replacement object
            return;
        }
    }
    
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//remove
function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals.splice(i, 1); //remove the animal object at index i
            return;
        }
    }
    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add
function add(animals, animal) {
    //if the animal object has name and species properties with valid lengths
    if (animal.name.length > 0 && animal.species.length > 0) {
        
        let isMonster = true;
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].name === animal.name) {
                isMonster = false;
                break;
            }
        }
        //whenname is monster add the animal to the animals array
        if (isMonster) {
            animals.push(animal);
        }
    }
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