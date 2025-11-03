# JavaScript DOM 
---

## Quick cheat-sheet (memorize these)

* **Select**: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`
* **Create**: `document.createElement('div')`, `element.textContent = 'x'`
* **Insert**: `parent.appendChild(node)`, `parent.insertBefore(node, ref)`
* **Remove**: `node.remove()` or `parent.removeChild(node)`
* **Classes**: `el.classList.add('a') / remove / toggle / contains`
* **Events**: `el.addEventListener('click', fn, {once:false, passive:false, capture:false})`
* **Delegation**: attach event on parent, check `event.target`
* **Styles**: `el.style.prop = '...'`, read `getComputedStyle(el)`
* **Attributes vs properties**: `getAttribute()` vs `el.property` (e.g., `input.value`)
* **Reflow vs Repaint**: reading layout properties (`offsetWidth`) may force reflow
* **Fragments**: use `DocumentFragment` to batch DOM writes

---

## 1. What *is* the DOM? (simple)

The DOM (Document Object Model) is a programming interface that represents HTML/XML as an object tree — each HTML element is a **node** you can inspect and modify using JavaScript.

Think: HTML → browser parses → DOM tree → JS can read/modify nodes → browser renders updates.

---

## 2. Nodes & basic API

* `Node` types: `Element` (HTMLElement), `Text`, `Comment`, `Document`, `DocumentFragment`.
* Key relationships: `parentNode`, `childNodes` (includes text nodes), `children` (elements only), `firstChild`, `lastChild`, `nextSibling`, `previousSibling`.

```js
const list = document.getElementById('list');
console.log(list.children); // HTMLCollection (elements only)
console.log(list.childNodes); // NodeList with text nodes too
```

---

## 3. Selecting elements

* `getElementById(id)` — fastest for single id
* `getElementsByClassName(cls)` — returns live HTMLCollection
* `getElementsByTagName(tag)` — returns live HTMLCollection
* `querySelector(css)` — first match, returns element or `null`
* `querySelectorAll(css)` — static `NodeList` (not live)

**Interview tip**: Know which are *live* vs *static*. `getElementsBy*` give live collections; `querySelectorAll` is static.

---

## 4. Attributes vs Properties

* **Attributes** are in HTML markup and can be read with `getAttribute('foo')`.
* **Properties** are JS object properties on the element: `el.foo`.

Example:

```html
<input id="i" value="hello" />
```

```js
const i = document.getElementById('i');
console.log(i.getAttribute('value')); // "hello"
console.log(i.value); // current value property (may change if user types)
```

---

## 5. Creating, inserting, cloning, removing nodes

```js
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'Hello';
parent.appendChild(div); // inserts at end

// insert before
parent.insertBefore(div, parent.firstChild);

// clone
const clone = div.cloneNode(true); // true -> deep clone

// remove
div.remove(); // modern
// or
parent.removeChild(div);
```

**Safer than `innerHTML`**: use `createElement` + `textContent` to avoid XSS. `innerHTML` is fast for bulk HTML but dangerous if it contains untrusted content.

---

## 6. Traversal helpers & useful patterns

* `el.closest(selector)` — find nearest ancestor matching selector (including itself)
* `el.matches(selector)` — test element against selector
* Convert NodeList to array: `[...document.querySelectorAll('.x')]` or `Array.from()`

Example: get all `.active` links under `nav`:

```js
const active = document.querySelectorAll('nav a.active');
```

---

## 7. Events — fundamentals

* `el.addEventListener(type, listener, options)` — prefer this over inline `onclick=`.
* Options: `{capture: false, once: false, passive: false}`. `passive: true` is useful for touch/wheel to avoid blocking scroll.
* Event phases: **capturing** → **target** → **bubbling** (default listeners listen in bubbling phase unless `capture: true`).

Key props on event object:

* `event.target` — the original source element
* `event.currentTarget` — the element whose listener is running
* `event.preventDefault()` — prevent browser default
* `event.stopPropagation()` — prevent further propagation (use sparingly)

```js
button.addEventListener('click', (e) => {
  console.log('target', e.target);
  console.log('current', e.currentTarget);
});
```

---

## 8. Event delegation (must-know for interviews)

Attach a single listener on a parent for many child elements. Efficient and great for dynamic children.

```html
<ul id="list">
  <li data-id="1">a</li>
  <li data-id="2">b</li>
</ul>
```

```js
document.getElementById('list').addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li || !document.getElementById('list').contains(li)) return;
  console.log('clicked', li.dataset.id);
});
```

**Why use `closest`/`matches`**: because events may fire from deep children (e.g., a `<span>` inside a `<li>`).

---

## 9. Common DOM interview questions (with short answers)

**Q: Difference between `innerText` and `textContent`?**

* `textContent` returns all text in node, fast, ignores CSS. `innerText` is affected by CSS and triggers reflow.

**Q: `appendChild` vs `append`?**

* `appendChild` takes a Node and returns it; `append` can take strings and multiple items; `append` doesn't return the appended node.

**Q: `document.createDocumentFragment()` — why and when?**

* A lightweight container to batch DOM insertions. Append children to fragment, then append fragment to DOM once — minimizes reflows.

**Q: How to avoid layout thrashing?**

* Batch reads and writes separately. Avoid reading layout properties (`offsetWidth`, `clientHeight`) after writing styles — that forces reflow.

**Q: How to detect DOM changes?**

* Use `MutationObserver` (modern). Avoid polling `setInterval` when possible.

**Q: Difference between `==` and `===` when comparing nodes?**

* `===` checks object identity. Two separate nodes cloned are not `===` even if equal in markup.

---

## 10. Performance & rendering (practical tips)

* **Minimize reflows**: change classes instead of inline styles repeatedly; use `transform` instead of top/left where possible.
* **Batch DOM writes**: accumulate HTML or use `DocumentFragment`.
* **Use CSS transitions** for animations, not JS layout changes.
* **Use `requestAnimationFrame`** for animation frame work.
* **Use `passive: true`** on `touchstart`/`wheel` listeners when you don't call `preventDefault()`.

Example with `DocumentFragment`:

```js
const frag = document.createDocumentFragment();
for (let i=0;i<1000;i++){
  const li = document.createElement('li');
  li.textContent = i;
  frag.appendChild(li);
}
list.appendChild(frag); // single insertion
```

---

## 11. Reflows vs Repaints (explain simply)

* **Repaint**: visual changes that do not affect layout (color change).
* **Reflow (layout)**: changes that affect element geometry (size, position). Reflow is more expensive.

Avoid patterns that alternate read/write-read-write causing multiple forced reflows.

---

## 12. Memory leaks & cleanup

* Remove event listeners on elements that are removed if the listener holds closures referencing big objects.
* Avoid accidental global references. Use `el.remove()` and null references if needed.
* For SPA frameworks, ensure cleanup when unmounting components.

---

## 13. Shadow DOM & templates (short)

* **Shadow DOM**: Encapsulates DOM + styles. Useful to prevent CSS leaking into components.
* **`<template>`**: HTML fragment not rendered until cloned/inserted; good for client-side templating.

```html
<template id="row">
  <li class="row"> <span class="name"></span> </li>
</template>
```

```js
const tpl = document.getElementById('row');
const clone = tpl.content.cloneNode(true);
clone.querySelector('.name').textContent = 'sam';
list.appendChild(clone);
```

---

## 14. Accessibility (a11y) basics for DOM work

* Use semantic elements (`<button>`, `<nav>`, `<main>`). Don't use `<div>` as a button unless necessary.
* Manage focus order (`tabindex`), roles, and `aria-*` attributes when building interactive widgets.
* Always ensure interactive elements are keyboard-accessible (Enter/Space) and visible focus is present.

---

## 15. Debugging DOM issues

* Use browser DevTools: Elements panel, Event Listeners pane, break on subtree modifications, `getEventListeners(node)` in console.
* Use `debugger` in event handler to pause and inspect event object.
* Use `Performance` panel to capture reflows/paint hotspots.

---

## 16. Security: XSS & innerHTML

* Never insert untrusted strings via `innerHTML`. Instead use `textContent` or sanitize input.
* When building strings for `innerHTML`, escape user input or use libraries that sanitize HTML.

---

## 17. Useful helper functions (copy-ready)

```js
// safe create text node
function el(tag, text, props = {}){
  const e = document.createElement(tag);
  if (text != null) e.textContent = text;
  Object.assign(e, props);
  return e;
}

// delegate
function delegate(parent, selector, type, handler){
  parent.addEventListener(type, (e) => {
    const match = e.target.closest(selector);
    if (match && parent.contains(match)) handler.call(match, e);
  });
}

// batch read/write
function batch(fn){
  requestAnimationFrame(() => { fn(); });
}
```

---

## 18. Top interview tasks (with solutions)

### A — Add/remove list items with delegation

```js
// HTML: <ul id="list"></ul>
const list = document.getElementById('list');
let i = 0;
list.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.matches('.del')) li.remove();
});

function add(){
  const li = document.createElement('li');
  li.innerHTML = `Item ${++i} <button class="del">x</button>`;
  list.appendChild(li);
}
```

### B — Toggle class on click (debounced)

```js
function debounce(fn, wait=200){
  let t;
  return (...args)=>{
    clearTimeout(t);
    t = setTimeout(()=>fn(...args), wait);
  }
}

button.addEventListener('click', debounce(()=>{
  box.classList.toggle('active');
}, 150));
```

### C — Find first visible ancestor

```js
function firstVisible(el){
  while(el && el.nodeType===1){
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || +style.opacity === 0) return null;
    el = el.parentElement;
  }
  return el;
}
```

---

## 19. Common pitfalls (learn these by heart)

* Confusing `innerHTML` vs `textContent` (security + performance).
* Expecting `querySelectorAll` to be live.
* Forgetting to remove event listeners (memory leaks).
* Using `offsetWidth`/`clientHeight` in tight loops — causes reflow.
* Relying on implicit casting with attributes vs properties.
* Not handling `null` results from selectors.

---

## 20. Short mock interview Q&A (practice answers)

**Q: How would you implement a custom dropdown component (accessible)?**

* Use a native `<button>` to toggle a `role="menu"` list, manage `aria-expanded`, trap focus when open, handle Arrow keys to navigate, and close on Escape or outside click.

**Q: Explain how event delegation works and why it’s efficient.**

* Delegation attaches one listener on a parent. When events bubble up, we inspect `event.target` or use `closest()` to find the child. Efficient because fewer listeners and works for dynamically added children.

**Q: How to measure time for a DOM-heavy operation?**

* Use `performance.now()` before/after, or use DevTools Performance profiler to record rendering and scripting time.

---
* notes
``` 
textContent → Gets all text (even hidden), faster, no reflow.

innerText → Gets only visible text, slower, causes reflow.
✅ Use textContent for better performance.
 ```
------------------------------------
# JavaScript Events & Event Listeners

---

## 🚀 1. What is an Event?

An **event** is an action that happens in the browser — like clicking a button, typing in an input, scrolling, or submitting a form.

> Think of an event as a *signal* that something occurred, and JavaScript can respond to it.

**Common event types:**

* Mouse: `click`, `dblclick`, `mouseover`, `mouseout`
* Keyboard: `keydown`, `keyup`, `keypress`
* Form: `submit`, `change`, `input`, `focus`, `blur`
* Window: `load`, `resize`, `scroll`

---

## ⚙️ 2. What is an Event Listener?

An **event listener** is a function that waits for a specific event to happen and runs when it does.

### ✅ Syntax

```js
element.addEventListener(eventType, callback, options);
```

### ✅ Example

```js
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  alert('Button clicked!');
});
```

Here:

* `eventType` → event name (e.g., `click`)
* `callback` → function to execute when event fires
* `options` → optional settings (capture, once, passive)

---

## 🧩 3. The Event Object

When an event occurs, the browser sends an **event object** with useful details.

```js
btn.addEventListener('click', function(event) {
  console.log(event.type); // 'click'
  console.log(event.target); // element that triggered event
});
```

**Common properties:**

| Property             | Description                           |
| -------------------- | ------------------------------------- |
| `type`               | Event type (`click`, `keydown`, etc.) |
| `target`             | Element where event started           |
| `currentTarget`      | Element currently handling event      |
| `preventDefault()`   | Stops default browser action          |
| `stopPropagation()`  | Stops event from bubbling             |
| `clientX`, `clientY` | Mouse pointer coordinates             |

---

## 🌊 4. Event Flow (Phases)

Events go through 3 phases:

1. **Capturing phase:** event moves from root → target
2. **Target phase:** event hits the target element
3. **Bubbling phase:** event bubbles from target → root

```js
div.addEventListener('click', fn, true); // capture phase
div.addEventListener('click', fn, false); // bubble phase (default)
```

**Default:** Bubbling phase.

---

## ⚡ 5. Options in addEventListener()

You can pass an **options object**:

```js
el.addEventListener('click', handler, {
  once: true,
  passive: true,
  capture: false
});
```

| Option    | Meaning                                        |
| --------- | ---------------------------------------------- |
| `once`    | Runs listener only once                        |
| `passive` | Improves performance (used for scroll/touch)   |
| `capture` | Listens in capturing phase instead of bubbling |

---

## 🔄 6. Removing Event Listeners

Use `removeEventListener()` with the *same function reference*:

```js
function greet() {
  console.log('Hi!');
}

btn.addEventListener('click', greet);
btn.removeEventListener('click', greet); // removes listener
```

> You cannot remove anonymous listeners because you can’t reference them later.

---

## 🎯 7. Event Delegation (Pro Tip)

Instead of adding listeners to multiple children, attach **one** to a parent and use `event.target` to check which child triggered it.

```js
document.querySelector('ul').addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  console.log('Clicked:', li.textContent);
});
```

✅ Efficient
✅ Works for dynamically added elements
✅ Saves memory

---

## 💡 8. Prevent Default Behavior

Some events (like links or form submits) have default actions. Stop them with `preventDefault()`.

```js
form.addEventListener('submit', (e) => {
  e.preventDefault(); // stops form submission
  console.log('Form handled with JS');
});
```

---

## 🧠 9. Common Interview Q&A

| Question                           | Answer                                                               |
| ---------------------------------- | -------------------------------------------------------------------- |
| `onclick` vs `addEventListener`    | `onclick` replaces old handlers; `addEventListener` allows multiple. |
| Multiple listeners on one element? | Yes, possible with `addEventListener`.                               |
| What is event bubbling?            | Event travels upward from child to parent.                           |
| How to stop bubbling?              | Use `event.stopPropagation()`.                                       |
| Make listener run once?            | `{ once: true }` option.                                             |

---

## 🧩 10. Practice Examples

### Example 1 — Mouse position tracker

```js
document.body.addEventListener('mousemove', (e) => {
  console.log(`Mouse: ${e.clientX}, ${e.clientY}`);
});
```

### Example 2 — Input typing listener

```js
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  console.log('Typed:', e.target.value);
});
```

### Example 3 — Delegated delete buttons

```js
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.matches('.delete')) {
    e.target.closest('li').remove();
  }
});
```

---

## 📝 11. Quick Summary (Cheat Sheet)

| Task            | Code                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| Add listener    | `el.addEventListener('click', fn)`                                     |
| Remove listener | `el.removeEventListener('click', fn)`                                  |
| Run once        | `{ once: true }`                                                       |
| Stop default    | `event.preventDefault()`                                               |
| Stop bubbling   | `event.stopPropagation()`                                              |
| Delegate event  | `parent.addEventListener('click', e => e.target.matches('li') && ...)` |

---

In an event listener, the parameter `e` refers to the **event object**, not the HTML element itself.

The actual element that triggered the event is accessed through **`e.target`**.

That’s why using `e.style` ❌ won’t work — because the event object has no `style` property.

✅ Use `e.target.style` to change styles of the clicked element.

### Example

```js
h1.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'pink'; // correct ✅
});
```

Or if you already have a reference to the element:

```js
h1.addEventListener('click', () => {
  h1.style.backgroundColor = 'pink'; // also correct ✅
});
```

**In short:**

> `e` → event object
> `e.target` → element that triggered the event


