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

- When merging objects with the spread operator, duplicate keys are resolved by overwriting the values with those from the second object.

- the indexOf method gives -1 if the specified substring is not found in string

- var is hoisted but let and const are not in same way

- The rest parameter used in last in parameter if this is conjunction with other parameters in function

- If a function with a rest parameter is called with no arguments, the rest parameter becomes an empty array.

-----


# 🧮 JavaScript Arrays 

## 🧠 What is an Array?

An **array** is a special type of object used to store **multiple values** in a single variable.

### ✅ Example

```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
```

* Arrays are **zero-indexed** → first element is at index `0`.
* Can store **different data types** in one array:

```js
let mixed = [1, "hello", true, null, [2, 3]];
```

---

## 🔹 Creating Arrays

```js
let arr1 = [10, 20, 30]; // Literal syntax ✅ (preferred)
let arr2 = new Array(10, 20, 30); // Constructor syntax ❌ (less used)
let arr3 = new Array(3); // Creates empty array of length 3
```

---

## 🔸 Array Properties

| Property | Description                | Example              |
| -------- | -------------------------- | -------------------- |
| `length` | Returns number of elements | `[1,2,3].length` → 3 |

```js
let nums = [1,2,3,4];
console.log(nums.length); // 4
nums.length = 2;
console.log(nums); // [1,2]
```

🧠 Changing `length` can **truncate** the array!

---

## 🔹 Accessing and Modifying Elements

```js
let colors = ["red", "green", "blue"];
colors[1] = "yellow"; // modify
console.log(colors[1]); // yellow
console.log(colors[5]); // undefined (index not present)
```

---

## 🔹 Basic Array Methods

### 🔹 Adding / Removing Elements

| Method      | Description           | Example          |
| ----------- | --------------------- | ---------------- |
| `push()`    | Add to **end**        | `arr.push(4)`    | 
| `pop()`     | Remove from **end**   | `arr.pop()`      | ``
| `unshift()` | Add to **start**      | `arr.unshift(0)` |
| `shift()`   | Remove from **start** | `arr.shift()`    |

- returns lenght of the array
- returns poped element of the array

```js
let nums = [1,2,3];
nums.push(4); // [1,2,3,4]
nums.pop(); // [1,2,3]
nums.unshift(0); // [0,1,2,3]
nums.shift(); // [1,2,3]
```

---

## 🔹 Searching Elements

```js
let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20)); // 1
console.log(arr.lastIndexOf(20)); // 3
console.log(arr.includes(30)); // true
```

---

## 🔹 Extracting / Joining / Combining

```js
let nums = [1,2,3,4,5];
console.log(nums.slice(1,4)); // [2,3,4] (does NOT modify original)

let part = nums.splice(1,2); // removes 2 elements starting index 1
console.log(part); // [2,3]
console.log(nums); // [1,4,5]

let arr1 = [1,2];
let arr2 = [3,4];
let merged = arr1.concat(arr2);
console.log(merged); // [1,2,3,4]
```

🧠 **Difference:**

| Method     | Modifies Original? | Purpose            |
| ---------- | ------------------ | ------------------ |
| `slice()`  | ❌ No               | Extract portion    |
| `splice()` | ✅ Yes              | Add/remove/replace |

---

## 🔹 Spread Operator (`...`)

Used to **copy or merge** arrays.

```js
let a = [1,2];
let b = [3,4];
let c = [...a, ...b]; // [1,2,3,4]
```

```js
let arr = [1,2,3];
let copy = [...arr];
copy.push(4);
console.log(arr); // [1,2,3]
console.log(copy); // [1,2,3,4]
```

🧠 Spread creates a **shallow copy** (nested arrays/objects still by reference).

---

## 🔹 Iterating over Arrays

### 1️⃣ `for` Loop

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### 2️⃣ `for...of`

```js
for (let val of arr) {
  console.log(val);
}
```

### 3️⃣ `forEach()`

```js
arr.forEach((value, index) => {
  console.log(index, value);
});
```

🧠 `forEach` does **not return** a new array.

---

## 🔹 Transforming Arrays

### 🔹 `map()`

Creates a **new array** by applying a function to each element.

```js
let nums = [1,2,3];
let doubled = nums.map(x => x * 2);
console.log(doubled); // [2,4,6]
```

### 🔹 `filter()`

Filters elements based on condition.

```js
let nums = [1,2,3,4];
let even = nums.filter(x => x % 2 === 0);
console.log(even); // [2,4]
```

### 🔹 `reduce()`

Reduces array to a single value.

```js
let nums = [1,2,3,4];
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

### 🔹 `find()` & `findIndex()`

```js
let nums = [5,10,15];
console.log(nums.find(x => x > 7)); // 10
console.log(nums.findIndex(x => x > 7)); // 1
```

### 🔹 `some()` & `every()`

```js
let nums = [2,4,6];
console.log(nums.some(x => x > 5)); // true (at least one)
console.log(nums.every(x => x > 1)); // true (all)
```

---

## 🔹 Sorting and Reversing

```js
let nums = [4,1,3,2];
nums.sort(); // [1,2,3,4] — works lexicographically (as strings)

// For numeric sort:
nums.sort((a,b) => a - b);

nums.reverse(); // [4,3,2,1]
```

---

## 🔹 Flattening Arrays

```js
let arr = [1, [2, 3], [4, [5]]];
console.log(arr.flat()); // [1,2,3,4,[5]]
console.log(arr.flat(2)); // [1,2,3,4,5]
```

---

## 🔹 Converting Arrays

```js
let arr = [1,2,3];
console.log(arr.join('-')); // '1-2-3'
console.log(arr.toString()); // '1,2,3'
```

---

## 🔹 Checking for Arrays

```js
Array.isArray([1,2,3]); // true
Array.isArray('abc'); // false
```

---

## 🧠 Advanced Concepts

### 🔸 Shallow vs Deep Copy

```js
let a = [1, [2,3]];
let b = [...a]; // shallow copy
b[1][0] = 99;
console.log(a); // [1, [99,3]]
```

✅ Use deep copy methods like `structuredClone()` or `JSON.parse(JSON.stringify())` if needed.

### 🔸 Destructuring

```js
let [x, y, z] = [10, 20, 30];
console.log(x, y, z); // 10 20 30
```

### 🔸 Rest Operator

```js
let [first, ...rest] = [1,2,3,4];
console.log(first); // 1
console.log(rest); // [2,3,4]
```

---

## 🧾 Common Interview Questions

### Q1: Difference between `forEach()` and `map()`?

| Feature            | `forEach()`  | `map()`         |
| ------------------ | ------------ | --------------- |
| Returns new array? | ❌ No         | ✅ Yes           |
| Used for           | side effects | transformations |

### Q2: Difference between `slice()` and `splice()`?

* `slice()` → **does not modify** the array.
* `splice()` → **modifies** the array (can add/remove elements).

### Q3: How to remove duplicates?

```js
let nums = [1,2,2,3,3];
let unique = [...new Set(nums)];
console.log(unique); // [1,2,3]
```

### Q4: Flatten a nested array?

```js
arr.flat(Infinity);
```

### Q5: How to check if an element exists?

```js
arr.includes(value);
```

---

## 🏁 Summary Table

| Task              | Method                           |
| ----------------- | -------------------------------- |
| Add/Remove end    | `push()`, `pop()`                |
| Add/Remove start  | `unshift()`, `shift()`           |
| Extract portion   | `slice()`                        |
| Modify array      | `splice()`                       |
| Combine arrays    | `concat()`, `...`                |
| Search            | `indexOf()`, `includes()`        |
| Iterate           | `forEach()`, `map()`, `for...of` |
| Filter            | `filter()`                       |
| Reduce            | `reduce()`                       |
| Sort/Reverse      | `sort()`, `reverse()`            |
| Flatten           | `flat()`                         |
| Remove duplicates | `[...new Set(arr)]`              |
| Check array       | `Array.isArray()`                |

--
#### Imporant points
### JavaScript Function & Execution Concepts

**1. Call Stack:**
The call stack is a data structure that keeps track of the function being called in the current execution context. It facilitates the order of execution by maintaining a record of function calls and their return points.

**2. Anonymous Functions:**
Anonymous functions are functions without a name. They can be passed as arguments to other functions, making them useful in functional programming patterns like callbacks and event handlers.

**3. IIFE (Immediately Invoked Function Expression):**
IIFEs are functions that are executed immediately after their definition. They are commonly used to create a private scope, which helps prevent naming conflicts and provides data privacy.

**4. Memory Leak from Unpopped Execution Contexts:**
If a function's execution context is not popped off the call stack after it completes, it leads to a memory leak. This happens because the memory allocated for that context cannot be freed and reused.

**5. Array Indexing in JavaScript:**
In JavaScript, accessing an array with a negative index or an index greater than or equal to the array's length returns `undefined`.
Example:

```js
let arr = ["mango", "orange", "apple"];
console.log(arr[arr.length - 1]); // "apple"
console.log(arr[-1]); // undefined
console.log(arr.length); // 3
```

**6. Array Creation Differences:**

```js
arr = [23];          // Creates an array with one element: [23]
arr = new Array(23); // Creates an array with length 23 (empty slots)
```



---
# 🧱 JavaScript Objects 

## 🧠 What is an Object?

An **object** is a collection of **key-value pairs** used to store related data and functions.

### ✅ Example

```js
let person = {
  name: "Jatin",
  age: 22,
  isStudent: true,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```

* Keys are **strings or symbols**.
* Values can be **any data type** (even functions — called methods).

---

## 🔹 Creating Objects

```js
// 1. Object literal ✅ (most common)
let user = { name: "John", age: 25 };

// 2. Using new Object()
let user2 = new Object();
user2.name = "Alice";

// 3. Using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Bob", 30);

// 4. Using Object.create()
let proto = { greet() { console.log("Hello!"); } };
let obj = Object.create(proto);
obj.name = "Jatin";
```

---

## 🔸 Accessing Properties

```js
console.log(user.name); // dot notation
console.log(user["age"]); // bracket notation
```

🧠 Use **bracket notation** when the key is dynamic or not a valid identifier.

```js
let key = "email";
user[key] = "john@gmail.com";
```

---

## 🔹 Adding / Modifying / Deleting

```js
let person = { name: "Jatin" };
person.age = 22; // add
person.name = "Rohan"; // modify
delete person.age; // delete
```

---

## 🔹 Object Methods

| Method                          | Description                           | Example                         |
| ------------------------------- | ------------------------------------- | ------------------------------- |
| `Object.keys(obj)`              | Returns array of keys                 | `['name','age']`                |
| `Object.values(obj)`            | Returns array of values               | `['Jatin',22]`                  |
| `Object.entries(obj)`           | Returns key-value pairs               | `[['name','Jatin'],['age',22]]` |
| `Object.assign(target, source)` | Copies properties                     | `Object.assign({}, obj)`        |
| `Object.freeze(obj)`            | Prevents changes                      | locks object                    |
| `Object.seal(obj)`              | Allows modify but not add/remove keys | semi-lock                       |
| `Object.hasOwn(obj, key)`       | Checks if property exists             | true/false                      |

---

## 🔹 Looping through Objects

```js
let user = { name: "Jatin", age: 22 };
for (let key in user) {
  console.log(key, user[key]);
}
```

🧠 `for...in` iterates **over enumerable keys**.

---

## 🔹 Copying Objects

### 1️⃣ Shallow Copy

```js
let obj1 = { a: 1, b: 2 };
let copy = { ...obj1 }; // or Object.assign({}, obj1)
```

### 2️⃣ Deep Copy

```js
let user = { name: "Jatin", address: { city: "Delhi" } };
let deepCopy = JSON.parse(JSON.stringify(user));
```

🧠 Spread and assign create **shallow copies**, meaning nested objects are still references.

---

## 🔹 Destructuring Objects

```js
let person = { name: "Jatin", age: 22 };
let { name, age } = person;
console.log(name, age); // Jatin 22
```

### With renaming and default value:

```js
let { name: fullName, age = 18 } = person;
```

---

## 🔹 Nested Objects

```js
let user = {
  name: "Jatin",
  address: {
    city: "Delhi",
    pin: 110001
  }
};
console.log(user.address.city); // Delhi
```

---

## 🔹 Optional Chaining

```js
console.log(user.address?.city); // avoids error if address undefined
```

---

## 🔹 Merging Objects (Spread Operator)

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 5, c: 10 };
let merged = { ...obj1, ...obj2 };
console.log(merged); // { a:1, b:5, c:10 }
```

🧠 Duplicate keys are **overwritten** by the latter object.

---

## 🔹 Checking Properties

```js
console.log('name' in user); // true
console.log(user.hasOwnProperty('age')); // true
```

---

## 🔹 Methods inside Objects

```js
let car = {
  brand: "BMW",
  start() {
    console.log(this.brand + " started");
  }
};
car.start(); // BMW started
```

🧠 `this` refers to the object the method belongs to.

---

## 🔹 Object References

Objects are **stored by reference**, not by value.

```js
let a = { x: 10 };
let b = a;
b.x = 20;
console.log(a.x); // 20
```

🧠 Copying just assigns the same reference, not a new object.

---

## 🔹 Object.freeze() vs Object.seal()

| Method     | Add/Remove Props | Modify Existing | Example      |
| ---------- | ---------------- | --------------- | ------------ |
| `freeze()` | ❌                | ❌               | Fully locked |
| `seal()`   | ❌                | ✅               | Semi-locked  |

---

## 🔹 Converting Objects

```js
let obj = { a: 1, b: 2 };
let arr = Object.entries(obj); // [['a',1], ['b',2]]
let newObj = Object.fromEntries(arr); // { a:1, b:2 }
```

---

## 🔹 Optional Advanced Concepts

### 🔸 Computed Property Names

```js
let key = "age";
let user = {
  name: "Jatin",
  [key]: 22
};
```

### 🔸 Object Destructuring with Nested Values

```js
let person = { name: "Jatin", address: { city: "Delhi" } };
let { address: { city } } = person;
console.log(city); // Delhi
```

### 🔸 Object Shorthand

```js
let name = "Jatin", age = 22;
let user = { name, age }; // same as { name: name, age: age }
```

---

## 🧾 Common Interview Questions

### Q1: Difference between primitive and reference types?

* Primitive → copied by **value**
* Object → copied by **reference**

### Q2: How to clone an object?

```js
let copy = { ...obj }; // shallow copy
let deepCopy = JSON.parse(JSON.stringify(obj));
```

### Q3: Difference between `Object.freeze()` and `Object.seal()`?

* `freeze()` → cannot modify or add/remove keys.
* `seal()` → can modify, but cannot add/remove.

### Q4: How to merge two objects?

```js
let merged = { ...obj1, ...obj2 };
```

### Q5: What is optional chaining?

```js
obj?.property // prevents runtime error if obj undefined
```
* The map method doubles each number, and then sort is called on the resulting array without a custom comparison function, which sorts the elements as strings in ascending order based on their UTF-16 code unit values.
---

## 🏁 Summary Table

| Task                 | Method                                 |
| -------------------- | -------------------------------------- |
| Get keys             | `Object.keys(obj)`                     |
| Get values           | `Object.values(obj)`                   |
| Get entries          | `Object.entries(obj)`                  |
| Merge                | `{ ...obj1, ...obj2 }`                 |
| Clone                | `Object.assign({}, obj)`               |
| Check prop           | `'key' in obj`, `obj.hasOwnProperty()` |
| Freeze               | `Object.freeze(obj)`                   |
| Seal                 | `Object.seal(obj)`                     |
| Convert to array     | `Object.entries(obj)`                  |
| From array to object | `Object.fromEntries(arr)`              |

---

