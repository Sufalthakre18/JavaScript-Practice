# FUNCTIONS

# ⚡ JavaScript Functions — Complete Notes 

## 🧠 What is a Function?

A **function** in JavaScript is a reusable block of code designed to perform a specific task.

### 🔹 Syntax

```js
function functionName(parameters) {
  // code to execute
  return value; // optional
}
```

### ✅ Example

```js
function greet() {
  console.log("Hello World!");
}

greet(); // Output: Hello World!
```

---

## 🔸 1. Function Declaration (Named Function)

A standard way to define a function.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

* Hoisted (can be used before declaration)
* Has a name

---

## 🔸 2. Function Expression

Assigning a function to a variable.

```js
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6
```

* Not hoisted
* Anonymous (no name by default)
* Useful for callbacks

---

## 🔸 3. Arrow Functions (ES6)

Shorter syntax for writing functions.

```js
const square = (n) => n * n;
console.log(square(5)); // 25
```

### 🧠 Key Points:

* No own `this`, `arguments`, or `super`
* Cannot be used as constructors
* Good for short, non-method functions

```js
const greet = () => console.log("Hello!");
greet();
```

---

## 🔸 4. Anonymous Functions

Functions without names.

```js
setTimeout(function() {
  console.log("Runs after 2 seconds");
}, 2000);
```

Used in callbacks and event listeners.

---

## 🔸 5. Immediately Invoked Function Expressions (IIFE)

Functions that execute immediately after being defined.

```js
(function() {
  console.log("IIFE runs immediately!");
})();
```

### ✅ With Parameters

```js
(function(name) {
  console.log(`Hello, ${name}`);
})("Jatin");
```

🧠 Used to create private scopes and avoid variable pollution.

---

## 🔸 6. Function Parameters and Arguments

### Default Parameters

```js
function greet(name = "User") {
  console.log("Hello, " + name);
}

greet(); // Hello, User
```

### Rest Parameters (`...`)

Collects all remaining arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### Arguments Object

Old way to access all passed arguments.

```js
function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3);
```

🧠 Not available in arrow functions.

---

## 🔸 7. Return Statement

The `return` keyword sends a value back from a function.

```js
function add(a, b) {
  return a + b;
}
let result = add(2, 3); // 5
```

If no `return`, the function returns `undefined`.

---

## 🔸 8. Function Scope

Variables declared inside a function are **local**.

```js
function test() {
  let x = 10;
  console.log(x); // accessible
}
console.log(x); // ❌ Error
```

---

## 🔸 9. Function Hoisting

* Function declarations are **hoisted**.
* Function expressions and arrow functions are **not hoisted**.

```js
sayHello(); // Works
function sayHello() {
  console.log("Hello");
}

sayHi(); // ❌ Error
const sayHi = function() {
  console.log("Hi");
};
```

---

## 🔸 10. Nested Functions

Functions defined inside another function.

```js
function outer() {
  function inner() {
    console.log("Inner Function");
  }
  inner();
}
outer();
```

Used for data privacy.

---

## 🔸 11. Higher-Order Functions

Functions that take another function as an argument or return a function.

```js
function greetUser(callback) {
  callback();
}

function sayHello() {
  console.log("Hello!");
}

greetUser(sayHello);
```

### Example: Returning a Function

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 🔸 12. Callback Functions

Functions passed as arguments to other functions.

```js
function processUserInput(callback) {
  let name = "Jatin";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello, " + name);
});
```

---

## 🔸 13. Recursion

When a function calls itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

🧠 Base case is required to stop infinite recursion.

---

## 🔸 14. Arrow Functions vs Regular Functions

| Feature        | Regular Function | Arrow Function       |
| -------------- | ---------------- | -------------------- |
| `this` binding | Own `this`       | Inherits from parent |
| `arguments`    | Yes              | No                   |
| Hoisting       | Yes              | No                   |
| Constructor    | Yes              | No                   |

---

## 🔸 15. Pure vs Impure Functions

### ✅ Pure Function

Returns same output for same input, no side effects.

```js
function add(a, b) { return a + b; }
```

### ❌ Impure Function

Has side effects (e.g., modifies external variable).

```js
let count = 0;
function increment() { count++; }
```

---

## 🔸 16. Function Currying

Breaking a function into multiple functions that take one argument each.

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(2)(3)); // 5
```

---

## 🔸 17. Anonymous Arrow Function (Callback Example)

```js
setTimeout(() => console.log("Executed after delay"), 2000);
```

---

## 🔸 18. Default vs Rest vs Spread

```js
function demo(a = 10, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4); // 1 [2,3,4]
```

```js
const arr = [1, 2, 3];
function print(a, b, c) {
  console.log(a, b, c);
}
print(...arr); // Spread
```

---

## 🔸 19. Closures

A closure is when an inner function remembers variables from its outer function even after the outer function has finished executing.

```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

🧠 Used for data privacy and state management.

---

## 🔸 20. Asynchronous Functions (Async/Await)

Used to handle promises in a cleaner way.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  console.log(data);
}
```

### 🧠 Key Points:

* Always returns a **Promise**
* Use `await` only inside `async`
* Simplifies promise chaining

---

## 🔸 21. Generator Functions

Functions that can pause execution using `yield` and resume later.

```js
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

🧠 Used for iteration, async flows, and lazy evaluation.

---

## 🏁 Summary Table

| Type        | Description             | Hoisted | Example                    |
| ----------- | ----------------------- | ------- | -------------------------- |
| Declaration | Named, reusable         | ✅       | `function add(){}`         |
| Expression  | Stored in variable      | ❌       | `const add = function(){}` |
| Arrow       | Short syntax, no `this` | ❌       | `const add = ()=>{}`       |
| IIFE        | Runs instantly          | ❌       | `(function(){})()`         |
| Callback    | Passed to another fn    | ❌       | `setTimeout(()=>{},1000)`  |
| Async       | Works with promises     | ❌       | `async function(){}`       |
| Generator   | Uses yield              | ❌       | `function* gen(){}`        |

---

## 🎯 Interview Quick Notes

* Functions are **first-class citizens** in JS.
* Understand **hoisting**, **scope**, and **closures** deeply.
* Arrow functions do not have their own `this` or `arguments`.
* Master **callbacks**, **promises**, and **async/await**.
* Practice **currying**, **IIFE**, and **higher-order functions**.

---

## 🚀 One-Line Summary

> Functions are the heart of JavaScript — they define behavior, control scope, manage async operations, and power everything from callbacks to closures.

------------------------------------------

# 🧵 JavaScript Strings 
## 🧠 What is a String?

A **string** is a sequence of characters used to represent text in JavaScript.

### ✅ Example

```js
let name = "Jatin";
let greeting = 'Hello';
let sentence = `Hi, my name is ${name}.`; // Template literal
```

---

## 🔹 String Declaration

```js
let str1 = "Double quotes";
let str2 = 'Single quotes';
let str3 = `Backticks`; // Template literals
```

🧠 **Template Literals** (ES6):

* Allow **multiline strings**
* Support **expression interpolation** using `${}`

```js
let a = 10, b = 20;
console.log(`Sum: ${a + b}`); // Sum: 30
```

---

## 🔸 String Properties

| Property | Description                      | Example              |
| -------- | -------------------------------- | -------------------- |
| `length` | Returns the number of characters | `"hello".length` → 5 |

---

## 🔸 Common String Methods

### 🔹 Case Conversion

```js
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"
```

---

### 🔹 Searching and Checking

```js
let msg = "JavaScript is awesome";
console.log(msg.includes("Script")); // true
console.log(msg.startsWith("Java")); // true
console.log(msg.endsWith("awesome")); // true
console.log(msg.indexOf("is")); // 11
console.log(msg.lastIndexOf("a")); // 3
```

---

### 🔹 Extracting Parts

```js
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
console.log(text.substring(4, 10)); // "Script"
console.log(text.substr(4, 6)); // "Script" (deprecated)
```

🧠 **Difference:**

| Method        | Negative index | End index | Mutates original? |
| ------------- | -------------- | --------- | ----------------- |
| `slice()`     | ✅ yes          | exclusive | ❌                 |
| `substring()` | ❌ no           | exclusive | ❌                 |
| `substr()`    | ✅ yes          | length    | ❌                 |

---

### 🔹 Modifying Strings

Strings are **immutable** — you can’t change characters directly.

```js
let name = "Jatin";
name[0] = 'K'; // ❌ Doesn’t work
name = "Katin"; // ✅ Reassign instead
```

---

### 🔹 Concatenation

```js
let first = "Hello";
let second = "World";
console.log(first + " " + second); // Hello World
console.log(`${first} ${second}`); // Hello World (template literal)
```

---

### 🔹 Trimming and Padding

```js
let str = "   hello   ";
console.log(str.trim()); // "hello"
console.log(str.trimStart()); // "hello   "
console.log(str.trimEnd()); // "   hello"

let code = "5";
console.log(code.padStart(3, '0')); // "005"
console.log(code.padEnd(3, '0')); // "500"
```

---

### 🔹 Replacing Text

```js
let text = "I love JavaScript";
console.log(text.replace("JavaScript", "Python")); // I love Python
console.log(text.replaceAll("o", "0")); // I l0ve JavaScript
```

🧠 Use **regex** for case-insensitive replace:

```js
text.replace(/javascript/i, "Python");
```

---

### 🔹 Splitting and Joining

```js
let fruits = "apple,banana,grape";
let arr = fruits.split(","); // ['apple', 'banana', 'grape']
console.log(arr.join(" | ")); // apple | banana | grape
```

---

### 🔹 Repeating Strings

```js
console.log("Hi ".repeat(3)); // Hi Hi Hi
```

---

## 🔹 String Conversion

```js
let num = 123;
console.log(String(num)); // '123'
console.log(num.toString()); // '123'
```

---

## 🔹 Escape Characters

| Code | Meaning      | Example             |
| ---- | ------------ | ------------------- |
| `\'` | Single quote | `'It\'s fine'`      |
| `\"` | Double quote | `"He said, \"Hi\""` |
| `\\` | Backslash    | `'\\path'`          |
| `\n` | New line     | `'Hello\nWorld'`    |
| `\t` | Tab          | `'Hello\tWorld'`    |

---

## 🧠 Interview Questions

### Q1: Are strings mutable in JavaScript?

❌ No. Strings are immutable — once created, they cannot be changed.

### Q2: Difference between `slice()` and `substring()`?

* `slice()` allows negative indexes.
* `substring()` swaps arguments if start > end.

### Q3: How do you check if a string includes a substring?

```js
str.includes("text");
```

### Q4: How to reverse a string?

```js
let reversed = str.split("").reverse().join("");
```

### Q5: How to count characters (frequency)?

```js
let count = {};
for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}
```

---

## 🏁 Summary Table

| Task             | Method                               |
| ---------------- | ------------------------------------ |
| Length of string | `str.length`                         |
| Change case      | `toUpperCase()`, `toLowerCase()`     |
| Extract part     | `slice()`, `substring()`             |
| Search           | `includes()`, `indexOf()`            |
| Replace          | `replace()`, `replaceAll()`          |
| Trim spaces      | `trim()`, `trimStart()`, `trimEnd()` |
| Split / Join     | `split()`, `join()`                  |
| Repeat           | `repeat()`                           |

- IF WE COMPARE OBJ ANND OBJ IN JAVASCRIPT THEN IT WILL give FALSE
-----



