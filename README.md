
````markdown
# JavaScript Basics

This example demonstrates a simple HTML file with inline JavaScript.

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics</title>
</head>
<body>
    
    <script>
        // This is a single-line comment using double slashes

        /*
            This is a multi-line comment.
            It can span across multiple lines.
        */

        // Example: printing to the console
        console.log("Hello, JavaScript is running!");
    </script>

    <!-- External JavaScript file can be linked like this -->
    <!-- <script src="script.js"></script> -->

</body>
</html>
````

---

## Explanation

* `<!DOCTYPE html>` → Defines the document type as HTML5.
* `<head>` → Metadata (character encoding, viewport, title).
* `<body>` → Page content.
* `<script>` → Inline JavaScript section.

### Inside JavaScript:

* `//` → Single-line comment.
* `/* ... */` → Multi-line comment.
* `console.log("Hello, JavaScript is running!");` → Prints text in browser console.

### External Script

```html
<script src="script.js"></script>
```

Links an external JavaScript file.

---

```

Perfect 👍
You’ve shared a **JavaScript code file about variables**.
Here’s the **Markdown (`.md`) converted version** with explanations and code blocks:

````markdown
# JavaScript Variables

There are **3 types of variables in JavaScript**:

1. **`var`** → can be reassigned and redeclared, function scoped.  
2. **`let`** → can be reassigned but not redeclared, block scoped.  
3. **`const`** → cannot be reassigned or redeclared, block scoped.  

---

## Example Usage

```js
// var example
var name = 'Abu Huzaifa';
console.log(name);

// let example
let email = "abuhuzaifaw7@gmail.com";
console.log(email);

// const example
const password = "password@123";
console.log(password);
````

---

## Behavior of Variables

### 1. `var` can be **reassigned** and **redeclared**

```js
name = 'Huzaifa Malik';
var name = 'Usama Malik'; 
console.log(name); // Usama Malik
```

### 2. `let` can be **reassigned** but **not redeclared**

```js
email = 'google@huzafia.com';
// let email = "amazone@gmail.com"; // Error: let cannot be redeclared
console.log(email); // google@huzafia.com
```

### 3. `const` cannot be **reassigned** or **redeclared**

```js
// password = "google@123";  //  Error: Assignment to constant variable
// const password = "newPass"; //  Error: const cannot be redeclared
```

---

## Hoisting Behavior

### Test Case 1: `var` is hoisted (initialized with `undefined`)

```js
console.log(num); // undefined
var num = 123;
```

### Test Case 2: `let` is hoisted but not initialized (Temporal Dead Zone)

```js
console.log(num2); //  ReferenceError
let num2 = 234;
```

### Test Case 3: `const` is hoisted but not initialized (Temporal Dead Zone)

```js
console.log(num3); // ReferenceError
const num3 = 234;
```

---
**Summary**

* Use `var` rarely (due to function scope + hoisting issues).
* Prefer `let` for variables that may change.
* Use `const` for values that should never change.

```


