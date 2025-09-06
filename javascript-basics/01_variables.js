// There are 3 types of variables in JavaScript

/*
    1. var   => can be reassigned and redeclared, function scoped
    2. let   => can be reassigned but not redeclared, block scoped
    3. const => cannot be reassigned or redeclared, block scoped
*/

// Example usage
var name = 'Abu Huzaifa';
console.log(name);

let email = "abuhuzaifaw7@gmail.com";
console.log(email);

const password = "password@123";
console.log(password);

// var can be reassigned and redeclared
name = 'Huzaifa Malik';
var name = 'Usama Malik'; 
console.log(name);

// let can be reassigned but not redeclared
email = 'google@huzafia.com';
// let email = "amazone@gmail.com"; // Error: let cannot be redeclared
console.log(email);

// const cannot be reassigned or redeclared
// password = "google@123";  // Error: Assignment to constant variable
// const password = "newPass"; // Error: const cannot be redeclared

// Test case 1: var is hoisted (initialized with undefined)
console.log(num); // undefined
var num = 123;

// Test case 2: let is hoisted but not initialized (Temporal Dead Zone)
console.log(num2); // ReferenceError
let num2 = 234;

// Test case 3: const is hoisted but not initialized (Temporal Dead Zone)
console.log(num3); // ReferenceError
const num3 = 234;
