
# JavaScript Promises

## What is a Promise?

A **Promise** represents the **eventual completion or failure** of an asynchronous operation and its resulting value.

---

## Promise States

A Promise can be in **one of three states**:

| State     | Description |
|-----------|-------------|
| `pending` | Initial state (neither fulfilled nor rejected) |
|`fulfilled`| Operation completed successfully |
| `rejected`| Operation failed |

---

## Promise Instance Methods

### `then()`

- Executes when a promise is **fulfilled**
- Can also handle rejection if a second callback is provided

```javascript
promise.then(
  result => console.log(result),
  error => console.log(error)
);


---

### `catch()`

* Executes when a promise is **rejected**
* Cleaner alternative to `.then(null, errorHandler)`

```javascript
promise.catch(error => {
  console.log(error);
});
```

---

### `finally()`

* Executes **regardless of promise outcome**
* Runs after fulfillment or rejection
* Useful for cleanup logic

```javascript
promise.finally(() => {
  console.log("Promise settled");
});
```

---

## Promise Static Methods

---

### `Promise.all()`

* Resolves **only if ALL promises resolve**
* Rejects immediately if **any one promise rejects**
* Order of results matches input order

```javascript
const myPromise1 = new Promise(resolve => {
  setTimeout(resolve, 200, "King");
});

const myPromise2 = new Promise(resolve => {
  setTimeout(resolve, 100, "Queen");
});

Promise.all([myPromise1, myPromise2])
  .then(result => console.log(result));
// ["King", "Queen"]
```

#### Behavior Summary

* ✅ All must succeed
* ❌ One failure rejects all
* ⛔ Stops caring after rejection

---

### `Promise.allSettled()`

* Resolves **after all promises settle**
* Never rejects
* Returns status of each promise

```javascript
Promise.allSettled([myPromise1, myPromise2])
  .then(results => {
    results.forEach(r => console.log(r.status));
  });
// fulfilled
// fulfilled
```

#### Why use it?

* When you want **results of every promise**, even failures

---

### `Promise.any()`

* Resolves when **ANY promise fulfills**
* Ignores rejected promises
* Rejects only if **ALL promises reject**

```javascript
Promise.any([myPromise1, myPromise2])
  .then(result => console.log(result));
// "Queen"
```

❌ If all promises reject → **AggregateError**

---

### `Promise.race()`

* Resolves or rejects with the **first settled promise**
* Whichever finishes first (success or failure)

```javascript
Promise.race([myPromise1, myPromise2])
  .then(result => console.log(result));
```

---

### `Promise.resolve()`

* Returns a resolved Promise

```javascript
Promise.resolve("Success")
  .then(value => console.log(value));
```

---

### `Promise.reject()`

* Returns a rejected Promise

```javascript
Promise.reject("Error")
  .catch(err => console.log(err));
```

---

### `Promise.try()` *(newer proposal / environments)*

* Executes a function and wraps the result in a Promise

```javascript
Promise.try(() => {
  return riskyOperation();
});
```

---

### `Promise.withResolvers()` *(modern JS)*

* Returns a promise with externally accessible `resolve` and `reject`

```javascript
const { promise, resolve, reject } = Promise.withResolvers();
```

---

## Creating Promises Manually

### `new Promise(...)`

Use when you want **full control** over resolving or rejecting.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
```

✔ Wrap async logic
✔ Decide when to resolve/reject

---

## Combining Promises (Static Methods)


Static methods work on **existing promises**.

```javascript
const p1 = new Promise(resolve => setTimeout(resolve, 200, "A"));
const p2 = new Promise(resolve => setTimeout(resolve, 100, "B"));

Promise.any([p1, p2])
  .then(result => console.log(result));
// "B"
```

---

## Quick Rule of Thumb

| Task                      | Syntax                                    |
| ------------------------- | ----------------------------------------- |
| Create a promise manually | `new Promise((resolve, reject) => {...})` |
| Combine multiple promises | `Promise.all()`, `Promise.any()`          |
| Use async functions       | Just call them (they return promises)     |

---

## Full Example: Creation + Combination

```javascript
// Step 1: Create promises
const promise1 = new Promise(resolve =>
  setTimeout(resolve, 300, "One")
);
const promise2 = new Promise(resolve =>
  setTimeout(resolve, 100, "Two")
);

// Step 2: Combine promises
Promise.any([promise1, promise2])
  .then(result => console.log(result));
// "Two"
```

---

## Key Takeaway

* `new Promise()` → defines async operations
* `Promise.all / any / race` → control **multiple async flows**
* Promises help avoid **callback hell**
* Foundation for **async / await**

---
