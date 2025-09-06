
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
