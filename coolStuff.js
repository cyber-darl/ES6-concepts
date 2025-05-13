//Object.entries() returns an array of the key/value pairs of an object

const guy = {
    firstName : "Samuel",
    lastName : "Perry",
    age: 50,
    eyeColor: "blue"
}

Object.entries(guy); //console.log this to see the results
//Object.entries turns the object into an array of arrays - an array of entries

//MAP FILTER and REDUCE
/*Map, filter, and reduce are three of the most useful and powerful high-order array methods.
- They take a function as their parameters
-  they return a new array
These function makes a new array, the forEach function changes the original array
Map function iterates through the array, and perform a certain function/operation on the array.
Filter iterates through the array, and returns a new array containing the items in the array that returns true
Reduce is used to perform operations between items in an array. It reduces the array e.g you could sum up all items in the array.
*/
//MAP
const addFive = (num) => {
return num + 5;
}

let coolArray = [32, 45, 64, 36, 24, 11]
let coolArray1 = coolArray.map(addFive);
console.log (coolArray1);

//FILTER
const divFour = (num) => {
 return num % 4 == 0 ; //this line returns true or false, if true the number will be included in the new array
}

let coolArray2 = coolArray.filter(divFour);
console.log (coolArray2);

//REDUCE
const timesArray = (x, y) => {
 return x * y ; //this line returns true or false, if true the number will be included in the new array
}

let coolArray3 = coolArray.reduce(timesArray);
console.log (coolArray3);

//Destructuring and spread operator, they work on both arrays and objects
const shaggi = {
firstName : "Jiggy",
secondName : "Boy",
model : "Ford"
}

let {firstName, ...others} = shaggi;
/*now others is an object 
others = {
secondName : "Boy",
model : "Ford"
}

console.log (others);





