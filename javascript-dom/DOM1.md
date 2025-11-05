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
