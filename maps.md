
## What is a Map?

A **Map** is a collection of key–value pairs where:

- Keys can be **any data type**
- Keys are **unique**
- Order of insertion is preserved

---

## Creating a Map

### Method 1: Using Array of Entries

```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
````

---

### Method 2: Using `set()`

```javascript
const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```

---

## Map Methods

---

### `set(key, value)`

* Adds a new element
* Updates value if key already exists

```javascript
fruits.set("apples", 600);
```

---

### `get(key)`

* Returns the value for a given key

```javascript
let value = fruits.get("apples"); // 500
```

---

### `has(key)`

* Returns `true` if the key exists

```javascript
fruits.has("apples"); // true
```

---

### `delete(key)`

* Removes an element by key

```javascript
fruits.delete("apples");
```

---

### `clear()`

* Removes all elements from the map

```javascript
fruits.clear();
```

---

### `size`

* Returns number of elements in the map

```javascript
fruits.size; // 3
```

---

## Iterating Over a Map

---

### `entries()`

* Returns an **iterator** of `[key, value]` pairs
* Does not change the original map

```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
for (const x of fruits.entries()) {
  text += x + "\n";
}
```

**Output**

```
apples,500
bananas,300
oranges,200
```

---

### `forEach()`

* Executes a callback for each map entry
* Arguments order: `(value, key)`

```javascript
let text = "";
fruits.forEach((value, key) => {
  text += key + " = " + value + "\n";
});
```

**Output**

```
apples = 500
bananas = 300
oranges = 200
```

---

### `keys()`

* Returns an iterator with map keys
* Does not modify the map

```javascript
let text = "";
for (const key of fruits.keys()) {
  text += key + "\n";
}
```

---

### `values()`

* Returns an iterator with map values
* Does not modify the map

```javascript
let text = "";
for (const value of fruits.values()) {
  text += value + "\n";
}
```

---

## Map vs Object (Quick Comparison)

| Feature                           | Map    | Object          |
| --------------------------------- | ------ | --------------- |
| Key types                         | Any    | String / Symbol |
| Order preserved                   | ✅      | ❌ (mostly)      |
| Size property                     | ✅      | ❌               |
| Iteration                         | Easy   | Less convenient |
| Performance (frequent add/remove) | Better | Slower          |

---

## Key Takeaways

* `Map` is ideal when keys are **not strings**
* Maintains **insertion order**
* Built-in iteration methods (`keys`, `values`, `entries`)
* Prefer `Map` over objects for **dynamic key-value data**
