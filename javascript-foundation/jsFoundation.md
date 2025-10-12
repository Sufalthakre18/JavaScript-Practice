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

---

