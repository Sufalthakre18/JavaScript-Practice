# JavaScript Foundation
# Introduction , Syntax, Variables, Operators, Loops, Condiational statement, function


## Introduction

- 1995: Created by Brendan Eich at Netscape in 10 days
- Named Mocha → LiveScript → JavaScript
- 1996: Microsoft released JScript
- 1997: Standardized as ECMAScript by ECMA
- 2009: Node.js → server-side JavaScript
- 2015 (ES6): Major update — let, const, arrow functions, classes, modules
- Post-2015: Added async/await, ?., ??, Object.entries, etc.
- Powers web, mobile, server, IoT, AI

# JavaScript Variables
## 🔹 Definition
A **variable** is a container used to store data values in JavaScript.  
It helps us reuse and manipulate data in our program.

---

## 🔸 Variable Declarations

JavaScript provides **three ways** to declare variables:
`var`, `let`, and `const`.

### 1. `let`
- Introduced in **ES6 (2015)**.
- **Block-scoped** → works only inside `{}`.
- Can be **updated**, but **not re-declared** in the same scope.

```js
let username = "jatin";
username = "rahul"; // ✅ allowed
let username = "ajay"; // ❌ not allowed
```

---

### 2. `const`
- Also introduced in **ES6**.
- **Block-scoped** (like `let`).
- Cannot be **re-assigned** or **re-declared**.
- Must be initialized at the time of declaration.

```js
const age = 45;
age = 50; // ❌ Error: Assignment to constant variable
```

---

### 3. `var`
- The **old way** (before ES6).
- **Function-scoped** (not block-scoped).
- Can be **updated** and **re-declared**.
- Has **hoisting** issues → declared at the top automatically but initialized as `undefined`.

```js
var email = "jatin@gmail.com";
var email = "new@gmail.com"; // ✅ allowed
```

---

## 🔸 Default Value

If a variable is declared but **not assigned**, it becomes `undefined`.

```js
let address;
console.log(address); // Output: undefined
```

--------------------
# 🔹 Primitive vs Non-Primitive — Copy vs Reference

## 🧠 1. Primitive Data Types → Copy by Value
Primitive types **store actual values** in memory.  
When you assign one variable to another, it **creates a copy** of the value — not a reference.

### ✅ Example (Copy by Value)
```js
let a = 10;
let b = a; // b gets a COPY of a's value

b = 20;

console.log(a); // 10  -> original value not affected
console.log(b); // 20  -> only copy changed 
```

## 2. Non-Primitive Data Types → Copy by Reference
Non-primitive (objects, arrays, functions) store a reference (memory address), not the actual value.
When you assign them, both variables point to the same memory location.

``` let user1 = { name: "Jatin" };
let user2 = user1; // user2 gets REFERENCE to same object

user2.name = "Rahul";

console.log(user1.name); // "Rahul"  -> changed for both!
console.log(user2.name); // "Rahul" 
```
----------------------------------------

* Q1. What is type coercion in JavaScript?

Ans: Type coercion is the automatic or implicit conversion of values from one data type to another when performing operations or comparisons.

* Q2. Difference between implicit and explicit coercion?

Ans:
Implicit: JavaScript automatically converts types (e.g., '5' - 2 → 3).

Explicit: Developer manually converts (e.g., Number('5') → 5).

* Q3. Difference between == and ===?

Ans:

== → checks value after coercion.

=== → checks value + type, no coercion.

Q4. What are falsy values in JavaScript?

Ans:
0, '', false, undefined, null, NaN are falsy — everything else is truthy.

-------------------------------

# Operators

# 🧠 JavaScript Type Coercion — Interview Notes

## 🔹 Definition

**Type Coercion** means **automatic or implicit conversion** of values from one data type to another.
JavaScript is a **loosely typed (dynamically typed)** language, so it automatically converts values when needed.

---

## 🔸 Types of Coercion

### 1. **Implicit Coercion**

Happens **automatically** when JavaScript tries to perform an operation between two different types.

#### 🧩 Example 1: String Conversion

```js
console.log('5' + 2); // '52'
console.log('5' + true); // '5true'
console.log('5' + undefined); // '5undefined'
console.log('5' + null); // '5null'
```

🧠 **Explanation:**
The `+` operator triggers **string concatenation** if any operand is a string.

---

#### 🧩 Example 2: Number Conversion

```js
console.log('5' - 2); // 3
console.log('5' * '2'); // 10
console.log('10' / 2); // 5
```

🧠 **Explanation:**
`-`, `*`, `/` operators convert strings to numbers automatically.

---

#### 🧩 Example 3: Boolean Conversion

```js
console.log(Boolean(0));      // false
console.log(Boolean(''));     // false
console.log(Boolean('hello')); // true
console.log(Boolean(123));    // true
```

🧠 **Explanation:**
Falsy values → `0`, `""`, `null`, `undefined`, `NaN`, `false`
Truthy values → everything else.

---

### 2. **Explicit Coercion**

Conversion done **manually** using JavaScript functions or methods.

#### ✅ Example: String Conversion

```js
String(123);   // '123'
(123).toString(); // '123'
```

#### ✅ Example: Number Conversion

```js
Number('123');   // 123
parseInt('123'); // 123
parseFloat('3.14'); // 3.14
```

#### ✅ Example: Boolean Conversion

```js
Boolean(1); // true
Boolean(0); // false
```

---

## 🔹 Special Cases

### ⚠️ Weird JavaScript Coercions

```js
console.log(1 + '2' + 3);   // '123'
console.log(1 + +'2' + 3);  // 6  (+'2' => 2)
console.log('10' - '4' - '3' - 2 + '5'); // '15'
```

🧠 **Explanation:**

* `'1' + 2` → string concatenation → `'12'`
* `+'2'` → explicit number conversion
* Mixing strings and numbers causes **type coercion chain reactions**

---

## 🔹 Equality and Type Coercion

### ⚖️ Loose Equality (==)

Performs **type coercion** before comparison.

```js
console.log('5' == 5); // true
console.log(0 == false); // true
console.log(null == undefined); // true
```

### ⚖️ Strict Equality (===)

Checks **both value and type** — no coercion.

```js
console.log('5' === 5); // false
console.log(0 === false); // false
console.log(null === undefined); // false
```

---

## 🔸 Interview Summary Table

| Operator / Scenario | Type Coercion     | Example       | Output  |
| ------------------- | ----------------- | ------------- | ------- |
| `'5' + 2`           | String            | `'5' + '2'`   | `'52'`  |
| `'5' - 2`           | Number            | `5 - 2`       | `3`     |
| `true + 1`          | Number            | `1 + 1`       | `2`     |
| `false == 0`        | Boolean to Number | `0 == 0`      | `true`  |
| `'5' == 5`          | String to Number  | `5 == 5`      | `true`  |
| `'5' === 5`         | No Coercion       | Type mismatch | `false` |

---

## 🔹 Interview Questions

### Q1. What is type coercion in JavaScript?

**Ans:** Type coercion is the automatic or implicit conversion of values from one data type to another when performing operations or comparisons.

---

### Q2. Difference between implicit and explicit coercion?

**Ans:**

* **Implicit:** JavaScript automatically converts types (e.g., `'5' - 2` → `3`).
* **Explicit:** Developer manually converts (e.g., `Number('5')` → `5`).

---

### Q3. Difference between `==` and `===`?

**Ans:**

* `==` → checks **value** after coercion.
* `===` → checks **value + type**, no coercion.

---

### Q4. What are falsy values in JavaScript?

**Ans:**
`0`, `''`, `false`, `undefined`, `null`, `NaN` are falsy — everything else is truthy.

---

## 🏁 Summary

> Type coercion in JavaScript automatically converts data types during operations or comparisons.
> Prefer using **strict equality (===)** to avoid unexpected results due to implicit coercion.

---

# ⚙️ JavaScript Operators — Very Detailed (Interview Notes)

## 🔹 Overview

Operators let you **perform operations** on values and variables. They can return new values, compare values, or change program flow. Below is a deep and structured guide covering each operator type, examples, common pitfalls, and interview-style questions.

---

## 🧮 1. Arithmetic Operators

Perform mathematical calculations.

| Operator | Description                     |             Example |          Result |
| -------: | ------------------------------- | ------------------: | --------------: |
|      `+` | Addition / string concatenation | `5 + 2` / `'5' + 2` |    `7` / `'52'` |
|      `-` | Subtraction                     |             `5 - 2` |             `3` |
|      `*` | Multiplication                  |             `5 * 2` |            `10` |
|      `/` | Division                        |            `10 / 2` |             `5` |
|      `%` | Remainder (modulo)              |            `10 % 3` |             `1` |
|     `**` | Exponentiation                  |            `2 ** 3` |             `8` |
|     `++` | Increment                       |   `let a = 1; a++;` | `a` becomes `2` |
|     `--` | Decrement                       |   `let a = 1; a--;` | `a` becomes `0` |

### 🔍 Notes

* `+` is **overloaded**: adds numbers, concatenates if any operand is a string.
* `++` and `--` have **prefix** and **postfix** forms: `++a` vs `a++` (prefix returns new value, postfix returns original then updates).

```js
let x = 1;
console.log(x++); // 1 (postfix returns original), x becomes 2
console.log(++x); // 3 (prefix increments then returns)
```

---

## 📝 2. Assignment Operators

Assign values to variables; many are compound.

| Operator |   Equivalent |   Example |
| -------: | -----------: | --------: |
|      `=` |   Assignment |   `a = 5` |
|     `+=` |  `a = a + b` |  `a += 2` |
|     `-=` |  `a = a - b` |  `a -= 2` |
|     `*=` |  `a = a * b` |  `a *= 2` |
|     `/=` |  `a = a / b` |  `a /= 2` |
|     `%=` |  `a = a % b` |  `a %= 2` |
|    `**=` | `a = a ** b` | `a **= 2` |

### 🔍 Notes

* Compound assignment operators evaluate the right side first, then assign.
* They respect type coercion rules (e.g., `a += '2'` will coerce `a` to string if applicable).

---

## ⚖️ 3. Comparison Operators

Compare two values and return a boolean.

| Operator | Description                   |              Example |
| -------: | ----------------------------- | -------------------: |
|     `==` | Loose equality (coercion)     |   `'5' == 5 // true` |
|    `===` | Strict equality (no coercion) | `'5' === 5 // false` |
|     `!=` | Loose inequality (coercion)   |   `'5' != 6 // true` |
|    `!==` | Strict inequality             |  `'5' !== 5 // true` |
|      `>` | Greater than                  |      `5 > 3 // true` |
|      `<` | Less than                     |      `3 < 5 // true` |
|     `>=` | Greater or equal              |     `5 >= 5 // true` |
|     `<=` | Less or equal                 |     `3 <= 4 // true` |

### 🔍 Notes & Pitfalls

* Prefer `===` and `!==` to avoid unexpected coercion.
* Comparisons with `null` and `undefined` have special behavior: `null == undefined` is `true`, but `null >= 0` is `true`? (Be careful — `null >= 0` yields `true` due to coercion rules; avoid relying on this.)

```js
console.log(null == undefined); // true
console.log(null >= 0); // true  (weird but true)
console.log(null > 0); // false
```

---

## 🔗 4. Logical Operators

Used with booleans, but due to JS coercion they work with other types and return original values.

| Operator | Description                                      |  Example |                                                 |    |   |    |
| :------: | ------------------------------------------------ | -------: | ----------------------------------------------- | -- | - | -- |
|   `&&`   | Logical AND — returns first falsy or last truthy | `a && b` |                                                 |    |   |    |
|     `    |                                                  |        ` | Logical OR — returns first truthy or last falsy | `a |   | b` |
|    `!`   | Logical NOT — converts to boolean then negates   |     `!a` |                                                 |    |   |    |

### 🔍 Short-circuiting & Return Values

* `a && b`: if `a` is **falsy**, returns `a`; otherwise returns `b`.
* `a || b`: if `a` is **truthy**, returns `a`; otherwise returns `b`.

```js
console.log(null && 'hello'); // null
console.log('' || 'fallback'); // 'fallback'
console.log(0 || 5); // 5
```

### ✅ Practical uses

* `||` for default values (but be careful with falsy values like 0):

  ```js
  let port = config.port || 3000; // if config.port = 0, you'll get 3000 (maybe undesired)
  ```
* Use **Nullish Coalescing (`??`)** to avoid that issue (see below).

---

## 🧩 5. Nullish Coalescing and Optional Chaining

Modern operators that help with `null`/`undefined` handling.

* `??` (Nullish coalescing): returns right-hand side only if left is `null` or `undefined`.

  ```js
  let x = 0 ?? 5; // 0 (not nullish)
  let y = null ?? 5; // 5
  ```

* `?.` (Optional chaining): safely access nested properties without throwing errors.

  ```js
  let user = null;
  console.log(user?.address?.street); // undefined (no error)
  ```

---

## 🔢 6. Bitwise Operators

Operate on 32-bit integer representations — less common in normal JS apps but useful in low-level tasks.

| Operator | Description                  |    Example |    |    |
| :------: | ---------------------------- | ---------: | -- | -- |
|    `&`   | AND                          |    `5 & 1` |    |    |
|     `    | `                            |         OR | `5 | 1` |
|    `^`   | XOR                          |    `5 ^ 1` |    |    |
|    `~`   | NOT                          |       `~5` |    |    |
|   `<<`   | Left shift                   |   `5 << 1` |    |    |
|   `>>`   | Sign-propagating right shift |   `5 >> 1` |    |    |
|   `>>>`  | Zero-fill right shift        | `-1 >>> 1` |    |    |

### 🔍 Note

Bitwise ops convert operands to 32-bit signed integers — watch out for large numbers.

---

## ➕ 7. Unary Operators

Operate on a single operand.

| Operator | Description                                  |                 Example |
| :------: | -------------------------------------------- | ----------------------: |
|    `+`   | Unary plus — converts operand to number      |           `+'42' // 42` |
|    `-`   | Unary minus — negates after conversion       |            `-'5' // -5` |
|    `!`   | Logical NOT                                  |        `!true // false` |
| `typeof` | Returns type as string                       | `typeof [] // 'object'` |
|  `void`  | Evaluates expression and returns `undefined` |                `void 0` |
| `delete` | Deletes a property from object               |       `delete obj.prop` |

---

## ❓ 8. Ternary Operator

Short form of `if-else`.

```js
let status = age >= 18 ? 'adult' : 'minor';
```

---

## 🔎 9. `instanceof` and `in`

* `instanceof`: checks prototype chain for constructor.

  ```js
  console.log([] instanceof Array); // true
  console.log({} instanceof Object); // true
  ```
* `in`: checks property existence in object (including prototype chain).

  ```js
  console.log('length' in []); // true
  ```

---

## 📚 Operator Precedence & Associativity

Operators have precedence (which runs first) and associativity (left-to-right or right-to-left). Important when expressions mix operators.

* Example: `*` has higher precedence than `+` → `2 + 3 * 4` → `14` not `20`.
* Assignment operators are **right-associative**: `a = b = 5` sets both to 5.

Always use parentheses `()` to make intent explicit.

---

## ⚠️ Common Pitfalls & Gotchas

* `+` with strings vs numbers: `'1' + 2` -> `'12'`.
* `==` surprises: `'' == 0` is `true`? (`'' == 0` is true because both are coerced to numbers.)
* Falsy values in `||` defaulting: `0 || 10` -> `10` (maybe undesired).
* `typeof null` is `'object'` (historic bug).
* Bitwise operators convert to 32-bit signed ints — large numbers get truncated.

---

## 🧪 Examples — Putting it all together

```js
// Short-circuit defaulting but safe with ??
let config = { port: 0 };
let port1 = config.port || 3000; // 3000 (undesired)
let port2 = config.port ?? 3000; // 0 (correct if 0 is valid)

// Logical chaining returns values
let user = { name: 'Jatin', age: 25 };
let name = user && user.name; // 'Jatin'

// Ternary and assignment precedence
let a = 1, b = 2;
let c = a > b ? a : b; // 2

// Unary plus
console.log(+'42'); // 42

// Optional chaining
console.log(user?.address?.street); // undefined (no error)
```

--------------------------------------------
# CONTROL FLOW 


## 🔹 What is Control Flow?

Control flow in JavaScript defines **the order in which statements are executed** in a program.
Normally, JavaScript executes code **from top to bottom**, **left to right**, but control flow statements let you **make decisions**, **repeat tasks**, and **control execution**.

---

## 🧩 1. Conditional Statements

Used to perform **different actions based on conditions**.

### ✅ `if` Statement

Executes a block of code if the condition is `true`.

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

### ✅ `if...else` Statement

Executes one block if true, another if false.

```js
let age = 16;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

🧠 **Explanation:**

* `if` block executes only if the condition is `true`.
* If not, the `else` block runs.

---

### ✅ `if...else if...else` Ladder

Used when multiple conditions need checking.

```js
let marks = 85;
if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 50) {
  console.log("Grade B");
} else {
  console.log("Fail");
}
```

🧠 **Tip:** The first condition that evaluates to true is executed, then JS skips the rest.

---

### ✅ Ternary Operator (Short Form of `if...else`)

One-line shorthand for simple conditions.

```js
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Adult
```

🧠 **Syntax:**

```
condition ? expression_if_true : expression_if_false
```

---

### ✅ Nested `if` Statements

`if` statements inside another `if`.

```js
let user = "admin";
let password = "1234";

if (user === "admin") {
  if (password === "1234") {
    console.log("Access Granted");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Invalid User");
}
```

🧠 **Tip:** Avoid deep nesting by combining conditions with logical operators (&&, ||).

---

### ✅ `switch` Statement

Used to compare one expression against multiple possible values.

```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}
```

🧠 **Key Points:**

* Use `break` to prevent fall-through (executing next cases).
* `default` executes if no match is found.

---

## 🔁 2. Looping Statements (Iteration)

Loops allow you to **repeat code** multiple times until a condition is false.

### 🔸 `for` Loop

Used when number of iterations is known.

```js
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```

🧠 **Structure:**

```
for (initialization; condition; increment/decrement) {
   // code block
}
```

---

### 🔸 `while` Loop

Used when number of iterations is **unknown**, and depends on a condition.

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

🧠 **Note:** The loop checks the condition **before** executing the block.

---

### 🔸 `do...while` Loop

Similar to `while`, but runs **at least once**, even if the condition is false.

```js
let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

🧠 Output → `6` (runs once before checking condition)

---

### 🔸 `for...of` Loop

Used to iterate over **iterable objects** (arrays, strings, maps, etc.).

```js
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

🧠 **Output:** apple, banana, mango

---

### 🔸 `for...in` Loop

Used to loop through **object properties**.

```js
let user = { name: "Jatin", age: 22, city: "Delhi" };
for (let key in user) {
  console.log(key + ":", user[key]);
}
```

🧠 **Output:**

```
name: Jatin
age: 22
city: Delhi
```

---

## ⛔ 3. Control Flow Alteration

### ✅ `break`

Used to exit a loop or `switch` early.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1, 2
```

### ✅ `continue`

Skips current iteration and moves to the next.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1, 2, 4, 5
```

### ✅ `return`

Exits a function immediately and optionally returns a value.

```js
function add(a, b) {
  if (a < 0 || b < 0) {
    return "Invalid Input";
  }
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

## ⚡ 4. Advanced Concepts

### 🧠 Nested Loops

A loop inside another loop.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

### 🧠 Labelled Statements

Used to control outer loops from inside inner loops.

```js
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}
```

---

## 🧾 Summary Table

| Type                | Statement                                            | Description             |
| ------------------- | ---------------------------------------------------- | ----------------------- |
| **Conditional**     | `if`, `else`, `switch`, ternary                      | Decide which block runs |
| **Loops**           | `for`, `while`, `do...while`, `for...in`, `for...of` | Repeat blocks of code   |
| **Jump Statements** | `break`, `continue`, `return`                        | Alter normal execution  |

---

## 🧠 Common Interview Questions

### Q1. Difference between `==` and `===` in conditions?

**Ans:** `==` compares values with coercion; `===` compares both value and type.

### Q2. Difference between `while` and `do...while`?

**Ans:** `while` checks before execution; `do...while` runs at least once.

### Q3. When to use `switch` instead of `if...else`?

**Ans:** When comparing **the same expression** with multiple possible values.

### Q4. What is the difference between `for...of` and `for...in`?

**Ans:**

* `for...of` → iterates **values** (arrays, strings).
* `for...in` → iterates **keys/properties** (objects).

### Q5. What’s the use of `break` and `continue`?

**Ans:**

* `break` → exits loop/switch.
* `continue` → skips current iteration.

---

## 🏁 Summary

> Control flow helps JavaScript make decisions, repeat actions, and manage how code executes. Mastering `if`, `switch`, and loops is essential for writing clean and efficient logic.
--------------------------------------

# 🔹 JavaScript `forEach()` — Short & Important Notes

## 🧠 Definition
- `forEach()` is an **array method** used to **execute a function once for each element**.
- It does **not return anything** (`undefined`).
- Used for **side effects** like logging or modifying existing arrays.

---

## 🧩 Syntax
```js
array.forEach((element, index, array) => {
  // code
});

``` let users = [
  { name: "Jatin", age: 22 },
  { name: "Rahul", age: 25 },
  { name: "Simran", age: 20 }
];

users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old.`);
});
 ```

- forEach() executes a function for each array element.
- It does not return anything.
- It cannot break early.
- Use map() when you need a new array instead.
- ❌ Cannot break or continue — runs for all elements.
- ❌ Does not return new array (unlike map()).
- ✅ Can modify the original array.
- ✅ Works only on arrays, not on plain objects.