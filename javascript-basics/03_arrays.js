var fruit = ['mango', 'apple', 'pear'];
console.log(typeof fruit); // object (arrays are a type of object in JS)

// Accessing array elements
console.log(fruit[0]); // mango
console.log(fruit[1]); // apple
console.log(fruit[2]); // pear

// +++++++++++++++++++++++++++++++++++++++++++ Array Methods +++++++++++++++++++++++++++++++++++++++++++

// 1. concat() => joins two or more arrays
let male = ['Hamza', 'Ali', 'Ahmad', 'Ubaid'];
let female = ['Saba', 'Afreen'];

let maleFemale = male.concat(female);
console.log(maleFemale); // [ 'Hamza', 'Ali', 'Ahmad', 'Ubaid', 'Saba', 'Afreen' ]

// 2. indexOf() => returns the first index of the given value
let idxOf = 'Huzaifa';
console.log(idxOf.indexOf()); // if you call indexOf() with no argument, it searches for 'undefined' // -1 (undefined not found)    
console.log(idxOf.indexOf('a'));  // finds first occurrence of 'a' ->  4
console.log(idxOf.indexOf('a', 5)); // starts searching from index 4 // 6




