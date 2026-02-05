
# Self-Invoking Functions (IIFE)

## What is an IIFE?

**IIFE** stands for **Immediately Invoked Function Expression**.

An IIFE is a JavaScript function that **runs as soon as it is defined**.

```javascript
(function () {
  // Code runs immediately
})();
````

---

## Why Use an IIFE?

### Common Use Cases

* ✅ Create a **private scope**
* ✅ Avoid **polluting the global namespace**
* ✅ Run **setup / initialization code once**
* ✅ Used heavily in **older JavaScript** (before `let`, `const`, and modules)

---

## Avoid Polluting the Global Scope

Everything inside an IIFE is **private**.

```javascript
(function () {
  let secret = "Hidden value";
  console.log(secret);
})();

console.log(secret); // ❌ ReferenceError
```

Variables inside an IIFE **cannot be accessed from outside**.

---

## IIFE with Parameters

You can pass arguments to an IIFE just like a normal function.

```javascript
(function (name) {
  let text = "Hello " + name;
  console.log(text);
})("John Doe");
```

---

## Named Function Expression IIFE

You can give an IIFE a name:

```javascript
(function greet() {
  let text = "Hello! I called myself.";
  console.log(text);
})();
```

❌ The function name is **not accessible globally**:

```javascript
greet(); // ReferenceError
```

👉 The name `greet` exists **only inside the function itself**.

---

## Why Use a Named IIFE?

### Self-Recursion (Function calling itself)

Named IIFEs are useful when a function needs to **call itself internally**.

```javascript
(function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
})(5);
```

---

## IIFE as a Module (Private Variables)

IIFEs are commonly used to create **modules with private state**.

```javascript
const counter = (function () {
  let value = 0; // private variable

  return {
    increment() {
      value++;
    },
    get() {
      return value;
    }
  };
})();
```

### Usage

```javascript
counter.increment();
counter.increment();

let x = counter.get(); // 2
```

✔ `value` is **private**
✔ Only accessible via exposed methods

---

## Summary

* IIFE runs **immediately**
* Helps avoid **global scope pollution**
* Supports **parameters**
* Can be **named** (scope-limited)
* Useful for **private variables and module patterns**

---

### Syntax Variations

```javascript
(function(){})();
(()=>{})();
!function(){}();
```

(All are valid IIFE patterns)

```
