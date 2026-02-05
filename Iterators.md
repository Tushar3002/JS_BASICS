
# JavaScript Iterator Object

---

## What is an Iterator?

An **Iterator** is an object that provides a standard way to access elements **sequentially**, one at a time.

An iterator must follow the **Iterator Protocol**, which means:

- It must have a `next()` method
- `next()` returns an object:
  ```js
  { value: any, done: boolean }
````

---

## `Iterator.from()`

The `Iterator.from()` method creates an iterator from:

* An iterable (Array, String, Set, etc.)
* Another iterator

```javascript
// Create an iterator
const newIterator = Iterator.from([1, 2, 3]);

let text = "";
for (const x of newIterator) {
  text += x + "<br>";
}
```

---

## Iterator Methods

⚠️ **Important**:
Most iterator methods **do NOT modify the original iterator**.
They return a **new iterator**.

---

### `drop(n)`

* Drops the first `n` elements
* Returns a new iterator

```javascript
const myIterator = Iterator.from([1,2,3,4,5,6,7,8,9]);
const result = myIterator.drop(5); // [6,7,8,9]
```

---

### `take(n)`

* Takes the first `n` elements
* Returns a new iterator

```javascript
const myIterator = Iterator.from([1,2,3,4,5,6]);
const result = myIterator.take(3); // [1,2,3]
```

---

### `every(callback)`

* Returns `true` if **all elements** pass the test
* Stops early on failure

```javascript
const myIterator = Iterator.from("123456789");

myIterator.every(x => x > 7); // false
myIterator.every(x => x > 0); // true
```

---

### `some(callback)`

* Returns `true` if **any element** passes the test
* Stops immediately after first `true`

```javascript
function checkValue(value) {
  return value > 7;
}

const myIterator = Iterator.from("123456789");
myIterator.some(checkValue); // true
```

---

### `filter(callback)`

* Returns a new iterator with elements that pass the test

```javascript
const myIterator = Iterator.from([1,2,3,4,5,6]);
const result = myIterator.filter(x => x > 2); // [3,4,5,6]
```

---

### `find(callback)`

* Returns the **first matching element**
* Returns `undefined` if not found

```javascript
const myIterator = Iterator.from([1,2,3,4,5]);
const result = myIterator.find(x => x > 2); // 3
```

---

### `map(callback)`

* Transforms each element
* Returns a new iterator

```javascript
const myIterator = Iterator.from([1,2,3]);
const result = myIterator.map(x => x * 10); // [10,20,30]
```

---

### `flatMap(callback)`

* Maps + flattens one level
* Returns a new iterator

```javascript
const myIterator = Iterator.from([1,2,3]);
const result = myIterator.flatMap(x => [x, x * 10]);
// [1,10,2,20,3,30]
```

---

### `forEach(callback)`

* Executes a function for each element
* Does NOT return a new iterator

```javascript
const myIterator = Iterator.from("123456789");

let text = "";
myIterator.forEach(value => {
  text += value;
});
```

---

### `reduce(callback, initialValue)`

* Reduces values into a single result

```javascript
const myIterator = Iterator.from([175, 50, 25]);

const result = myIterator.reduce((total, num) => {
  return total + num;
}, 0); // 250
```

---

## Chaining Iterator Methods

```javascript
const myIterator = Iterator.from([1,2,3,4,5,6]);

const result = myIterator
  .drop(1)
  .filter(x => x > 2)
  .take(3);

for (const x of result) {
  console.log(x);
}
```

---

## Iterator vs Array Methods

| Feature           | Iterator | Array |
| ----------------- | -------- | ----- |
| Lazy evaluation   | ✅        | ❌     |
| Memory efficient  | ✅        | ❌     |
| Chainable         | ✅        | ✅     |
| Materialized data | ❌        | ✅     |

---

## Rest Parameters Example (Related Concept)

Using `...rest` with loops and array methods:

```javascript
function add(...n) {

  // Using for loop
  let total = 0;
  for (let i = 0; i < n.length; i++) {
    total += n[i];
  }

  // Using forEach
  total = 0;
  n.forEach(val => total += val);

  // Using for...of
  total = 0;
  for (let i of n) {
    total += i;
  }

  // Using reduce
  total = n.reduce((sum, num) => sum + num, 0);

  return total;
}

console.log(add(1,2,3)); // 6
```

---

## Key Takeaways

* `Iterator.from()` creates an iterator from iterable data
* Iterator methods are **lazy** and memory efficient
* Most methods return **new iterators**
* Use iterators for large datasets or streams
* Iterators are the foundation of `for...of`
