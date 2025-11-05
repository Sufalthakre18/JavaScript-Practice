# 🧾 JavaScript Forms & Form Validation 

---

## 🧠 1. What is a Form?

A **form** collects user input and sends it to the server or processes it using JavaScript.

**Example:**

```html
<form id="loginForm">
  <input type="text" id="username" placeholder="Username" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>
```

Access in JS:

```js
const form = document.querySelector('#loginForm');
const username = document.querySelector('#username');
```

---

## ⚙️ 2. Form Events

| Event    | Description                                     |
| -------- | ----------------------------------------------- |
| `submit` | Triggered when form is submitted                |
| `input`  | Fires every time user types in a field          |
| `change` | Fires when field value changes and focus leaves |
| `focus`  | When user clicks/tabs into a field              |
| `blur`   | When user leaves a field                        |

**Example:**

```js
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop default page reload
  console.log('Form submitted!');
});
```

---

## 🧩 3. Accessing Form Values

You can read or update input values using `.value`:

```js
console.log(username.value); // get value
username.value = ''; // clear input
```

You can also use:

```js
form.elements.username.value
```

if the input has `name="username"`.

---

## 🛠️ 4. Basic Form Validation

Validation ensures that users enter valid data before submission.

### ✅ Example — Manual Validation

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value.trim() === '') {
    alert('Username is required!');
  } else if (password.value.length < 6) {
    alert('Password must be at least 6 characters!');
  } else {
    alert('Form submitted successfully!');
  }
});
```

---

## 🧮 5. HTML5 Built-in Validation

HTML provides built-in validation attributes that work automatically:

| Attribute                 | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `required`                | Field cannot be empty                          |
| `minlength` / `maxlength` | Set input length limits                        |
| `pattern`                 | Regex pattern for matching input               |
| `type`                    | Enforces format (like `email`, `number`, etc.) |

**Example:**

```html
<input type="email" required>
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
```

You can check validity in JS:

```js
if (!input.checkValidity()) {
  console.log(input.validationMessage);
}
```

---

## 🔍 6. Custom Validation Messages

```js
input.addEventListener('input', () => {
  if (input.validity.patternMismatch) {
    input.setCustomValidity('Please enter only letters!');
  } else {
    input.setCustomValidity(''); // reset message
  }
});
```

---

## 💡 7. Real-time Validation Example

```js
username.addEventListener('input', () => {
  if (username.value.length < 3) {
    username.style.borderColor = 'red';
  } else {
    username.style.borderColor = 'green';
  }
});
```

---

## ✅ 8. Prevent Default Submission

Always use `e.preventDefault()` to handle form data manually:

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // do custom validation or send data with fetch()
});
```

---

## 📤 9. Sending Form Data

You can send data using **Fetch API**:

```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value
  };
  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
});
```

---
# JavaScript Timers & Intervals — Best & Practical Notes

> Clear, practical, and interview-useful notes covering `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `requestAnimationFrame`, precision, throttling, debouncing, and Node differences.

---

## 1. What are timers?

Timers schedule code to run in the future. In browsers and Node.js the most common APIs are:

* `setTimeout(fn, ms)` — run `fn` once after ~`ms` milliseconds
* `setInterval(fn, ms)` — run `fn` repeatedly every ~`ms` milliseconds
* `clearTimeout(id)` / `clearInterval(id)` — cancel scheduled timers
* `requestAnimationFrame(callback)` — schedule callback before the next repaint (for animations)

Timers do **not** run exactly at `ms`; they are scheduled as macrotasks on the event loop and may be delayed.

---

## 2. Basic usage

```js
// run once after 1 second
const id = setTimeout(() => console.log('done'), 1000);
clearTimeout(id); // cancel

// run repeatedly every 2 seconds
const intervalId = setInterval(() => console.log('tick'), 2000);
clearInterval(intervalId); // stop
```

---

## 3. Why timers are imprecise

* The delay is a **minimum** delay — the callback is queued after `ms` have passed, but the callback runs only when the JS engine gets to it.
* If the main thread is busy (long-running JS, layout, paint), timers are delayed.
* Browsers clamp nested timers to a minimum (historically 4ms) and throttle timers in background tabs (to ~1s or more).

**Important:** Rely on timers for approximate scheduling only; use `performance.now()` for measuring time precisely.

---

## 4. Timer throttling & background tabs

Browsers throttle timers in inactive tabs to save power (interval callbacks may run less frequently). Mobile browsers may clamp intervals aggressively.

**Implication:** `setInterval` cannot be relied on for precise timing across tab states.

---

## 5. Prefer `requestAnimationFrame` for animations

* `requestAnimationFrame(cb)` runs callbacks before the next repaint and syncs to display refresh (~60fps).
* It is **paused** in background tabs (power friendly) and gives smoother animations than `setInterval`.

```js
function step(time){
  // time is high-resolution timestamp (DOMHighResTimeStamp)
  // update animation
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
```

---

## 6. Recursive `setTimeout` vs `setInterval`

Use **recursive `setTimeout`** when each iteration depends on async work or when you want to avoid overlapping execution.

```js
function run(){
  setTimeout(async () => {
    await doSomeAsyncWork();
    run(); // schedule next after completion
  }, 1000);
}
run();
```

`setInterval` will try to call the handler every `ms`, even if the previous invocation hasn't finished — this can cause overlapping calls.

---

## 7. Dealing with drift (correcting intervals)

`setInterval` accumulates drift. To keep precise intervals, compute next expected time using `performance.now()`:

```js
let expected = performance.now() + 1000;
function tick(){
  const now = performance.now();
  // do work
  expected += 1000;
  const delay = Math.max(0, expected - now);
  setTimeout(tick, delay);
}
setTimeout(tick, 1000);
```

---

## 8. Debounce vs Throttle (common patterns)

**Debounce:** wait until user stops firing events, then run once. Useful for search input, resize.

```js
function debounce(fn, wait){
  let t;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
```

**Throttle:** run at most once every `ms`. Useful for scroll/resize handlers.

```js
function throttle(fn, limit){
  let last = 0;
  return function(...args){
    const now = Date.now();
    if (now - last >= limit){
      last = now;
      fn.apply(this, args);
    }
  };
}
```

---

## 9. Cancelling and cleanup

Always clear timers when cleaning up (e.g., component unmount, view change):

```js
const id = setTimeout(...);
// later
clearTimeout(id);

const iId = setInterval(...);
clearInterval(iId);
```

**`clearInterval` vs `clearTimeout`**

* Use `clearInterval(id)` to stop a repeating `setInterval`.
* Use `clearTimeout(id)` to cancel a single scheduled `setTimeout`.
* In browsers both accept numeric IDs; in Node.js they accept the timer object returned by the call.

**Practical examples**

```js
// stop a repeating task after 10 seconds
const iid = setInterval(() => console.log('tick'), 1000);
setTimeout(() => clearInterval(iid), 10000);

// cancel a scheduled timeout if user navigates away
const t = setTimeout(() => doWork(), 5000);
window.addEventListener('beforeunload', () => clearTimeout(t));
```

**Common pitfalls**

* Forgetting to clear intervals leads to background work continuing and memory leaks.
* Trying to `clearInterval` with the wrong id/reference will not stop the interval.
* In component frameworks (React/Vue), always clear timers in cleanup/unmount hooks.

---

## 10. Event loop & tasks (where timers fit)

* **Macrotasks**: `setTimeout`, `setInterval`, I/O callbacks, rendering tasks.
* **Microtasks**: `Promise` callbacks (e.g., `.then()`), `queueMicrotask` — run **after current task** and **before** next macrotask.

Sequence (simplified): run script → flush microtasks → render → pick next macrotask (like timer)

**Consequence:** Promises run before timers scheduled for the next macrotask.

---

## 11. Node.js differences

* `setTimeout`/`setInterval` exist in Node but return `Timeout` objects (not numeric IDs).
* Node provides `setImmediate(fn)` (runs after I/O callbacks, before timers) and `process.nextTick()` (runs before other microtasks).

Quick order in Node: `process.nextTick()` → other microtasks → `setImmediate()` → timers

---

## 12. Timer precision & minimum delay

* Browsers enforce a minimum delay (historically 4ms). Very small delays may be clamped.
* In nested timers or inactive frames, browsers may increase the minimum delay.

---

## 13. Timeouts for network requests (pattern)

Use `AbortController` to implement request timeouts with `fetch()`:

```js
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 5000);

try {
  const res = await fetch('/api', { signal: controller.signal });
  // handle
} catch (err) {
  if (err.name === 'AbortError') console.log('Timed out');
}
clearTimeout(timeout);
```

---

## 14. Common pitfalls (memorize these)

* Using `setInterval` where work can overlap — prefer recursive `setTimeout`.
* Forgetting to `clearTimeout`/`clearInterval` when no longer needed (memory leaks or unexpected behavior).
* Relying on timer accuracy in background tabs or during heavy load.
* Using `Date.now()` for high-precision timing — prefer `performance.now()`.

---

## 15. Interview Q&A (short)

**Q:** Difference between `setTimeout(...,0)` and `Promise.resolve().then(...)`?
**A:** `setTimeout(...,0)` schedules a macrotask (runs later). `Promise.then` schedules a microtask (runs sooner, before next macrotask).

**Q:** When to use `requestAnimationFrame`?
**A:** For visual updates/animations synchronized to screen repaint.

**Q:** How to avoid overlapping intervals?
**A:** Use recursive `setTimeout` that schedules next run after async work completes.

---

## 16. Quick cheat-sheet

* Run once: `setTimeout(fn, ms)`
* Run repeatedly: `setInterval(fn, ms)`
* Cancel: `clearTimeout(id)` / `clearInterval(id)`
* Animation: `requestAnimationFrame(cb)` / `cancelAnimationFrame(id)`
* Debounce: delay until events stop
* Throttle: limit rate of calls

---

## 17. Example patterns (copy-ready)

**Debounce input:**

```js
const debounced = debounce(value => doSearch(value), 300);
input.addEventListener('input', (e) => debounced(e.target.value));
```

**Accurate repeated task with drift correction:**

```js
let expected = performance.now() + 1000;
function tick(){
  // work
  expected += 1000;
  const delay = Math.max(0, expected - performance.now());
  setTimeout(tick, delay);
}
setTimeout(tick, 1000);
```

---

## 18. Best practices

* Prefer `requestAnimationFrame` for UI animations.
* Prefer recursive `setTimeout` for repeated async tasks.
* Use `performance.now()` for measuring elapsed time.
* Always clear timers in cleanup.
* Use debouncing/throttling for high-frequency events.

---
