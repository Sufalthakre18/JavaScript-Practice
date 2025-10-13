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
