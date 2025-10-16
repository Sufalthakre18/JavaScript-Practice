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


