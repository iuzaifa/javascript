// ==============================
// JavaScript Basic Operators
// ==============================

// 1. Arithmetic Operators

let a = 10;
let b = 3;

// Addition
console.log("Addition:", a + b); // 13

// Subtraction
console.log("Subtraction:", a - b); // 7

// Multiplication
console.log("Multiplication:", a * b); // 30

// Division
console.log("Division:", a / b); // 3.3333

// Modulus (Remainder)
console.log("Modulus:", a % b); // 1

// Grouping
console.log("Grouping:", (a + b) * 2); // 26

// Increment
let x = 5;
console.log("Postfix Increment:", x++); // 5
console.log("After Postfix Increment:", x); // 6
let y = 5;
console.log("Prefix Increment:", ++y); // 6

// Decrement
let m = 5;
console.log("Postfix Decrement:", m--); // 5
console.log("After Postfix Decrement:", m); // 4
let n = 5;
console.log("Prefix Decrement:", --n); // 4

// ==============================
// 2. Comparison Operators
// ==============================

console.log("Equal (==):", a == b); // false
console.log("Strict Equal (===):", a === b); // false
console.log("Not Equal (!=):", a != b); // true
console.log("Strict Not Equal (!==):", a !== b); // true
console.log("Greater Than (>):", a > b); // true
console.log("Less Than (<):", a < b); // false
console.log("Greater Than or Equal (>=):", a >= b); // true
console.log("Less Than or Equal (<=):", a <= b); // false

// ==============================
// 3. Logical Operators
// ==============================

let p = true;
let q = false;

console.log("Logical AND (&&):", p && q); // false
console.log("Logical OR (||):", p || q); // true
console.log("Logical NOT (!):", !p); // false

// ==============================
// 4. Bitwise Operators
// ==============================

let c = 5;  // 0101
let d = 3;  // 0011

console.log("Bitwise AND (&):", c & d); // 1 (0001)
console.log("Bitwise OR (|):", c | d); // 7 (0111)
console.log("Bitwise XOR (^):", c ^ d); // 6 (0110)
console.log("Bitwise NOT (~):", ~c); // -6 (invert bits)
console.log("Left Shift (<<):", c << 1); // 10
console.log("Right Shift (>>):", c >> 1); // 2
console.log("Zero-fill Right Shift (>>>):", c >>> 1); // 2
