Here’s a comprehensive explanation of **all types of functions in JavaScript**, structured clearly:

---

# JavaScript Functions – Complete Guide

Functions in JavaScript are blocks of reusable code that perform specific tasks. They can take inputs (parameters), perform operations, and return outputs.

There are **several types of functions**:

---

## 1. Function Declaration (Named Function)

A **named function** defined using the `function` keyword.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Huzaifa")); // Hello, Huzaifa!
```

* Can be **called before declaration** (hoisting).
* Good for reusable tasks.

---

## 2. Function Expression

A function assigned to a variable.

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Abu")); // Hello, Abu!
```

* Not hoisted; must be defined before use.
* Useful for **passing functions as arguments**.

---

## 3. Arrow Function (ES6)

Shorter syntax for writing functions:

```javascript
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Short version with implicit return
const greet2 = name => `Hello, ${name}!`;

console.log(greet2("Huzaifa")); // Hello, Huzaifa!
```

**Features:**

* Concise syntax.
* Implicit return for single expressions.
* Does **not have its own `this`** (uses parent context).
* Cannot be used as constructors (`new` keyword).

---

## 4. Anonymous Function

A function **without a name**, usually used as a value or callback.

```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
```

* Often used in **callbacks**.
* Can also be assigned to variables (then becomes a function expression).

---

## 5. Immediately Invoked Function Expression (IIFE)

A function that **runs immediately after creation**.

```javascript
(function() {
    console.log("IIFE executed immediately!");
})();
```

* Useful for creating a **private scope**.
* Helps avoid polluting the global namespace.

---

## 6. Recursive Function

A function that **calls itself**.

```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

* Must have a **base condition** to prevent infinite recursion.

---

## 7. Callback Function

A function **passed as an argument** to another function.

```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Huzaifa", sayGoodbye);
// Output:
// Hello, Huzaifa!
// Goodbye!
```

* Widely used in **event handling, asynchronous operations, and functional programming**.

---

## 8. Higher-Order Function

A function that **takes another function as input or returns a function**.

```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

* Promotes **functional programming style**.

---

## 9. Generator Function (ES6)

A special function that **can pause and resume execution**.

```javascript
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

* Useful for **lazy evaluation** and managing large sequences of data.

---

## 10. Async/Await Function

Functions that **handle asynchronous operations** using promises.

```javascript
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}

fetchData();
```

* `async` marks a function as asynchronous.
* `await` pauses execution until a promise resolves.

---

### Summary Table

| Function Type         | Syntax / Example                  | Key Points                               |
| --------------------- | --------------------------------- | ---------------------------------------- |
| Function Declaration  | `function fn(){}`                 | Hoisted, named, reusable                 |
| Function Expression   | `const fn = function(){}`         | Not hoisted, can be anonymous            |
| Arrow Function        | `const fn = () => {}`             | Short syntax, no `this`, implicit return |
| Anonymous Function    | `function(){}`                    | No name, used in callbacks               |
| IIFE                  | `(function(){})();`               | Executes immediately, private scope      |
| Recursive Function    | `function f(){ f(); }`            | Calls itself, needs base condition       |
| Callback Function     | `fn(arg, callback)`               | Passed as argument                       |
| Higher-Order Function | `function hof(fn){}`              | Accepts or returns functions             |
| Generator Function    | `function* gen(){}`               | `yield` values, can pause execution      |
| Async/Await Function  | `async function fn(){ await ...}` | Handles asynchronous operations          |

---

If you want, I can **combine this with Variables, Data Types, Arrays, Operators, and Arrow Functions** into **one complete beginner-friendly JavaScript Markdown guide**.

Do you want me to do that?
