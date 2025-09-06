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
```



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
