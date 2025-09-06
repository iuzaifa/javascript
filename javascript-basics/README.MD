# JavaScript Variables

JavaScript has three types of variables:

```

1. var   => can be reassigned and redeclared, function scoped
2. let   => can be reassigned but not redeclared, block scoped
3. const => cannot be reassigned or redeclared, block scoped

````

## Example Usage

```javascript
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
email = 'google@huzaifa.com';
// let email = "amazon@gmail.com"; // Error: let cannot be redeclared
console.log(email);

// const cannot be reassigned or redeclared
// password = "google@123";  // Error: Assignment to constant variable
// const password = "newPass"; // Error: const cannot be redeclared

// Test cases for hoisting
console.log(num); // undefined (var is hoisted)
var num = 123;

console.log(num2); // ReferenceError (let in TDZ)
let num2 = 234;

console.log(num3); // ReferenceError (const in TDZ)
const num3 = 234;
````

### Comparison Table

| Feature      | var      | let   | const |
| ------------ | -------- | ----- | ----- |
| Scope        | Function | Block | Block |
| Redeclarable | Yes      | No    | No    |
| Reassignable | Yes      | Yes   | No    |
| Hoisting     | Yes      | TDZ   | TDZ   |

> TDZ: **Temporal Dead Zone** — the phase where `let` and `const` variables exist but cannot be accessed before declaration.

---

# JavaScript Data Types

## 1. Number

```js
let num = 23; 
console.log(typeof num); // number
```

## 2. String

```js
let text = 'Huzaifa'; 
let city = "Delhi";
console.log(typeof text); // string
```

## 3. Boolean

```js
let isLoggedIn = true; 
console.log(typeof isLoggedIn); // boolean
```

## 4. Constant Value

```js
const pi = 3.14; 
console.log(typeof pi); // number
```

## 5. Object

```js
let fullName = { 
    fname: 'Abu', 
    lname: 'Huzaifa' 
};
console.log(typeof fullName); // object

const person = {
    name: 'Abu Huzaifa',
    email: 'abuhuzaifaw7@gmail.com',
    age: 23,
    nationality: 'Indian'
};
console.log(typeof person); // object
```

---

# JavaScript Arrays

## 1. Creating Arrays

```js
var fruit = ['mango', 'apple', 'pear'];
console.log(typeof fruit); // object (arrays are objects)
```

## 2. Accessing Array Elements

```js
console.log(fruit[0]); // mango
console.log(fruit[1]); // apple
console.log(fruit[2]); // pear
```

## 3. Array Methods

### 3.1 concat()

Joins arrays:

```js
let male = ['Hamza', 'Ali', 'Ahmad', 'Ubaid'];
let female = ['Saba', 'Afreen'];

let maleFemale = male.concat(female);
console.log(maleFemale); 
// [ 'Hamza', 'Ali', 'Ahmad', 'Ubaid', 'Saba', 'Afreen' ]
```

### 3.2 indexOf()

Finds index of a value:

```js
let idxOf = 'Huzaifa';
console.log(idxOf.indexOf()); // -1 (undefined not found)
console.log(idxOf.indexOf('a'));  // 4 (first occurrence of 'a')
console.log(idxOf.indexOf('a', 5)); // 6 (search starts from index 5)
```

### 3.3 Array Methods Table

| Method            | Description                  | Example                                                 | Return Type                |
| ----------------- | ---------------------------- | ------------------------------------------------------- | -------------------------- |
| `push()`          | Adds element(s) at end       | `let a=[1]; a.push(2); // [1,2]`                        | `Number` (new length)      |
| `pop()`           | Removes last element         | `let a=[1,2]; a.pop(); // 2`                            | `Any` (removed element)    |
| `unshift()`       | Adds element(s) at start     | `let a=[2]; a.unshift(1); // [1,2]`                     | `Number` (new length)      |
| `shift()`         | Removes first element        | `let a=[1,2]; a.shift(); // 1`                          | `Any` (removed element)    |
| `concat()`        | Joins arrays                 | `[1].concat([2,3]); // [1,2,3]`                         | `Array`                    |
| `slice()`         | Copies part of array         | `[1,2,3].slice(1); // [2,3]`                            | `Array`                    |
| `splice()`        | Add/remove elements          | `let a=[1,2,3]; a.splice(1,1,9); // [1,9,3]`            | `Array` (removed elements) |
| `includes()`      | Checks if value exists       | `[1,2,3].includes(2); // true`                          | `Boolean`                  |
| `indexOf()`       | Finds first index of value   | `[1,2,3].indexOf(2); // 1`                              | `Number`                   |
| `lastIndexOf()`   | Finds last index of value    | `[1,2,3,2].lastIndexOf(2); // 3`                        | `Number`                   |
| `join()`          | Converts to string           | `[1,2].join('-'); // "1-2"`                             | `String`                   |
| `toString()`      | Converts to string           | `[1,2].toString(); // "1,2"`                            | `String`                   |
| `reverse()`       | Reverses array               | `[1,2].reverse(); // [2,1]`                             | `Array`                    |
| `sort()`          | Sorts array                  | `[3,1,2].sort(); // [1,2,3]`                            | `Array`                    |
| `fill()`          | Fills array with value       | `[1,2,3].fill(0); // [0,0,0]`                           | `Array`                    |
| `flat()`          | Flattens nested arrays       | `[1,[2,3]].flat(); // [1,2,3]`                          | `Array`                    |
| `flatMap()`       | Maps + flattens              | `[1,2].flatMap(x=>[x,x*2]); // [1,2,2,4]`               | `Array`                    |
| `every()`         | Checks all elements          | `[2,4].every(x=>x%2===0); // true`                      | `Boolean`                  |
| `some()`          | Checks if any element passes | `[1,2,3].some(x=>x>2); // true`                         | `Boolean`                  |
| `filter()`        | Filters elements             | `[1,2,3].filter(x=>x>1); // [2,3]`                      | `Array`                    |
| `map()`           | Transforms elements          | `[1,2].map(x=>x*2); // [2,4]`                           | `Array`                    |
| `reduce()`        | Reduces to single value      | `[1,2,3].reduce((a,b)=>a+b,0); // 6`                    | `Any`                      |
| `reduceRight()`   | Reduce from right            | `["a","b"].reduceRight((a,b)=>a+b); // "ba"`            | `Any`                      |
| `find()`          | Finds first match            | `[1,2,3].find(x=>x>1); // 2`                            | `Any`                      |
| `findIndex()`     | Finds index of first match   | `[1,2,3].findIndex(x=>x>1); // 1`                       | `Number`                   |
| `keys()`          | Iterator of indices          | `[1,2].keys().next().value; // 0`                       | `Iterator`                 |
| `values()`        | Iterator of values           | `[1,2].values().next().value; // 1`                     | `Iterator`                 |
| `entries()`       | Iterator of \[index, value]  | `for(let [i,v] of [10,20].entries()){console.log(i,v)}` | `Iterator`                 |
| `copyWithin()`    | Copies elements within array | `[1,2,3,4].copyWithin(1,2); // [1,3,4,4]`               | `Array`                    |
| `Array.isArray()` | Checks if array              | `Array.isArray([1]); // true`                           | `Boolean`                  |
| `Array.from()`    | Creates array from iterable  | `Array.from("hi"); // ['h','i']`                        | `Array`                    |
| `Array.of()`      | Creates array from args      | `Array.of(1,2,3); // [1,2,3]`                           | `Array`                    |

--- 
# JavaScript Operators

JavaScript provides several types of operators for performing operations on values and variables.

---

## 1. Arithmetic Operators

| Operator | Description                     | Example                   | Output |
|----------|---------------------------------|---------------------------|--------|
| `+`      | Addition                        | `2 + 3`                   | 5      |
| `-`      | Subtraction                     | `5 - 2`                   | 3      |
| `*`      | Multiplication                  | `4 * 2`                   | 8      |
| `/`      | Division                        | `10 / 2`                  | 5      |
| `%`      | Modulus (remainder)             | `10 % 3`                  | 1      |
| `++`     | Increment (prefix & postfix)    | `let x=1; x++;`           | 2      |
| `--`     | Decrement (prefix & postfix)    | `let y=2; --y;`           | 1      |
| `()`     | Grouping / precedence           | `(2 + 3) * 4`             | 20     |

> **Note:** Prefix increment/decrement changes the value before using it, postfix after using it.

---

## 2. Comparison Operators

| Operator | Description                       | Example        | Output |
|----------|-----------------------------------|----------------|--------|
| `==`     | Equal to                          | `5 == '5'`     | true   |
| `===`    | Strict equal (value & type)       | `5 === '5'`    | false  |
| `!=`     | Not equal                         | `5 != 3`       | true   |
| `!==`    | Strict not equal                  | `5 !== '5'`    | true   |
| `>`      | Greater than                      | `5 > 3`        | true   |
| `<`      | Less than                         | `5 < 10`       | true   |
| `>=`     | Greater than or equal to          | `5 >= 5`       | true   |
| `<=`     | Less than or equal to             | `5 <= 3`       | false  |

---

## 3. Logical Operators

| Operator | Description           | Example                  | Output |
|----------|---------------------|--------------------------|--------|
| `&&`     | Logical AND          | `true && false`          | false  |
| `||`     | Logical OR           | `true || false`          | true   |
| `!`      | Logical NOT          | `!true`                  | false  |

---

## 4. Bitwise Operators

| Operator | Description                     | Example      | Output |
|----------|---------------------------------|--------------|--------|
| `&`      | AND                             | `5 & 3`      | 1      |
| `|`      | OR                              | `5 | 3`      | 7      |
| `^`      | XOR                             | `5 ^ 3`      | 6      |
| `~`      | NOT                             | `~5`         | -6     |
| `<<`     | Left shift                      | `5 << 1`     | 10     |
| `>>`     | Right shift                     | `5 >> 1`     | 2      |
| `>>>`    | Zero-fill right shift            | `5 >>> 1`    | 2      |

---
