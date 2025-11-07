# Asynchronous JavaScript
---

## 1. Why asynchronous code?

JavaScript runs on a single thread — to keep the UI responsive, long-running tasks (network, timers, file I/O) must run *asynchronously* so the main thread isn’t blocked.

Analogy: JavaScript is a single chef in a kitchen. Asynchronous APIs let the chef ask an assistant to do something (like boil water) and continue cooking other dishes until the assistant returns.

---

## 2. Quick core concepts

* **Call stack**: where functions run now.
* **Web APIs (browser)**: timers, DOM events, `fetch` — run outside the JS stack.
* **Callback queue / task queue (macrotasks)**: scheduled tasks like `setTimeout` callbacks.
* **Microtask queue**: promises (`.then`) and `queueMicrotask` — run *before* the next macrotask.
* **Event loop**: moves tasks from queues to the call stack when it’s empty.

Important: **microtasks run sooner than macrotasks** — so `Promise.resolve().then(...)` runs before `setTimeout(..., 0)`.

---

## 3. Callbacks (basic)

A **callback** is a function passed to another function to run later.

```js
setTimeout(() => {
  console.log('done');
}, 1000);
```

**Problems with callbacks:** nested callbacks ("callback hell"), hard to read and error-handle.

---

## 4. Promises (modern replacement)

A **Promise** represents a future value — it can be **pending**, **fulfilled**, or **rejected**.

```js
const p = new Promise((resolve, reject) => {
  // do async work
  if (ok) resolve(result);
  else reject(error);
});

p.then(value => console.log(value))
 .catch(err => console.error(err))
 .finally(() => console.log('done'));
```

**Promise benefits:**

* Cleaner chaining
* Centralized error handling with `.catch()`
* Combinators: `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`

**Examples:**

```js
Promise.all([p1, p2])
  .then(([r1, r2]) => {/* both succeeded */})
  .catch(err => {/* any failed */});
```

---

## 5. Async/Await (syntactic sugar over promises)

`async` functions let you write asynchronous code like synchronous code using `await`.

```js
async function load() {
  try {
    const res = await fetch('/data');
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error('Failed', err);
  }
}
```

**Rules:**

* `await` pauses only inside `async` functions.
* `await` waits for a Promise to settle; if it rejects, it throws — use `try/catch`.

**Parallel vs Sequential:**

```js
// sequential (slower)
const a = await fetch(urlA);
const b = await fetch(urlB);

// parallel (faster)
const [pa, pb] = await Promise.all([fetch(urlA), fetch(urlB)]);
```

---

## 6. Fetch API (network requests)

`fetch()` returns a Promise that resolves to a `Response` object.

**GET example:**

```js
fetch('/api/items')
  .then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error('Network error', err));
```

**POST example with JSON:**

```js
fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
})
.then(res => res.json())
.then(data => console.log(data));
```

**Abort / timeout:**

```js
const controller = new AbortController();
const id = setTimeout(() => controller.abort(), 5000);

fetch('/api', { signal: controller.signal })
  .then(r => r.json())
  .catch(err => {
    if (err.name === 'AbortError') console.log('Timed out');
  })
  .finally(() => clearTimeout(id));
```

**Note:** `fetch` only rejects on network errors; HTTP errors (404, 500) still resolve — check `res.ok` or `res.status`.

---

## 7. Error handling patterns

* Promises: use `.catch()` at the end of chain.
* Async/await: use `try/catch`.
* For parallel requests with independent error handling, consider `Promise.allSettled()`.

```js
// allSettled example
const results = await Promise.allSettled([p1, p2]);
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.warn('failed', r.reason);
});
```

---

## 8. Common pitfalls & best practices

* **Don’t forget `await`** — missing it returns a Promise, not the value.
* **Avoid unnecessary `async`** — `async` functions always return a Promise.
* **Handle errors** — network failures, non-2xx responses.
* **Use AbortController** to cancel slow requests when component unmounts.
* **Prefer Promise.all for parallelism** when tasks are independent.
* **Avoid blocking the main thread** with heavy computation — offload to Web Workers if needed.

---

## 9. Microtasks vs Macrotasks (short recap)

* Microtasks: Promise callbacks (`.then`), `queueMicrotask()` — run **before** the next macrotask.
* Macrotasks: `setTimeout`, `setInterval`, DOM events — run after microtasks are drained.

Example:

```js
Promise.resolve().then(() => console.log('micro'));
setTimeout(() => console.log('macro'), 0);
console.log('sync');
// Output: sync, micro, macro
```

---

## 10. HTTP basics (very short)

* **Request / Response** structure: method, URL, headers, body.
* **Common methods:** `GET` (read), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (delete).
* **Status codes:** 2xx success (200 OK, 201 Created), 3xx redirects, 4xx client errors (400, 401 unauthorized, 404), 5xx server errors (500).
* **Headers:** `Content-Type`, `Authorization`, `Accept`, `Cache-Control`.
* **JSON:** Most APIs use `Content-Type: application/json` and exchange JSON bodies.

---

## 11. Quick examples (copy-ready)

**Fetch with async/await and error handling:**

```js
async function getData(){
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('Failed to fetch', err);
    throw err; // rethrow if needed
  }
}
```

**Parallel requests:**

```js
const [u1, u2] = await Promise.all([
  fetch('/one').then(r => r.json()),
  fetch('/two').then(r => r.json()),
]);
```

**Sequential dependent calls:**

```js
const user = await fetch('/me').then(r => r.json());
const posts = await fetch(`/users/${user.id}/posts`).then(r => r.json());
```

---

## 12. Cheat-sheet (short)

* Callback: `fn(arg, () => {/* callback */})`
* Promise: `new Promise((res, rej) => ...)`
* Then/catch: `p.then(v => ...).catch(err => ...)`
* Async/await: `const v = await p` in `async` fn
* Fetch GET: `await fetch(url).then(r => r.json())`
* Abort: `new AbortController()` + `signal`
* Parallel: `Promise.all([...])`
* Independent errors: `Promise.allSettled([...])`

---

#  JavaScript Event Loop & Queues 

---

## 🧠 1. What is the Event Loop?

The **Event Loop** controls how JavaScript executes code. Since JS is **single-threaded**, the event loop helps it handle asynchronous tasks efficiently.

It checks:

1. **Call Stack** → runs the code.
2. **Queues** → waits for new tasks (callbacks, promises, etc.).

---

## 🧩 2. Key Terms

| Term                                 | Meaning                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| **Call Stack**                       | Current running code (functions executing).                                      |
| **Macrotask Queue / Callback Queue** | Holds async callbacks like `setTimeout`, `setInterval`, events, fetch responses. |
| **Microtask Queue**                  | Holds `Promise.then`, `catch`, `finally`, and `queueMicrotask()`.                |
| **rAF (requestAnimationFrame)**      | Special queue for animations before browser paint.                               |

---

## ⚙️ 3. How the Event Loop Works

1. Run one **macrotask** (like your script or a timeout callback).
2. When it’s done → **run all microtasks** in order.
3. Then → render the UI (paint frame).
4. Repeat forever.

👉 **Microtasks always run before the next macrotask!**

---

## 🧩 4. Example — Callback vs Microtask

```js
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
```

**Output:**

```
start
end
promise
timeout
```

🪄 `Promise.then` is a **microtask**, so it runs before the `setTimeout` macrotask.

---

## ⚡ 5. Async/Await Example

```js
console.log('A');
async function demo() {
  await null;
  console.log('B');
}
demo();
console.log('C');
```

**Output:**

```
A
C
B
```

Because `await` pauses and resumes as a **microtask**.

---

## 🧮 6. Microtask Queue Details

* Runs **after** each macrotask.
* Keeps running until **empty**.
* Can delay rendering if overloaded.
* Typical examples: Promises, `queueMicrotask()`.

```js
queueMicrotask(() => console.log('micro'));
```

---

## 🕐 7. Macrotask Queue (Callback Queue)

Contains:

* `setTimeout`, `setInterval`
* DOM events (click, keydown)
* Network callbacks
* I/O operations

```js
setTimeout(() => console.log('macro'), 0);
```

Runs **after** current microtasks finish.

---

## 🌀 8. Rendering & requestAnimationFrame

**rAF** callbacks run right **before paint** (synchronized with screen refresh).

Good for smooth animations:

```js
function animate() {
  // update animation frame
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

---

## 🔍 9. Simplified Flow

```
Run script (macrotask)
→ Execute microtasks
→ Render (paint)
→ Next macrotask
→ Repeat...
```

---

## 💡 10. Browser vs Node.js

| Environment | Microtasks                      | Notes                                   |
| ----------- | ------------------------------- | --------------------------------------- |
| **Browser** | Promises, `queueMicrotask()`    | Standard behavior                       |
| **Node.js** | Promises + `process.nextTick()` | `nextTick` runs before other microtasks |

---

## 🧠 11. Interview Q&A

**Q:** Which runs first: `setTimeout(..., 0)` or `Promise.then()`?
**A:** `Promise.then()` (microtask).

**Q:** Can microtasks block UI rendering?
**A:** Yes, if you keep scheduling new microtasks endlessly.

**Q:** What is `queueMicrotask()` used for?
**A:** To schedule a small async task that runs before the next macrotask.

---

## 📋 12. Quick Summary Table

| Type          | Examples                         | Runs                            |
| ------------- | -------------------------------- | ------------------------------- |
| **Macrotask** | `setTimeout`, events             | One at a time → then microtasks |
| **Microtask** | `Promise.then`, `queueMicrotask` | After each macrotask            |
| **rAF**       | `requestAnimationFrame`          | Before next paint               |

---
-> Asynchronous programming grants a multitasking superpower to code, enabling programs to execute multiple tasks concurrently.

-> It enhances efficiency and responsiveness by allowing programs to perform various operations simultaneously, akin to multitasking in real life

-> Tasks can progress independently without waiting, leading to improved utilization of resources and faster overall execution times

---

