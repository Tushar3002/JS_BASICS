
# JavaScript Set

---

## What is a Set?

A **Set** is a collection of **unique values**.

- Duplicate values are automatically ignored
- Values can be of any data type
- Maintains insertion order

---

## Creating a Set

### Method 1: Using an Array

```javascript
const letters = new Set(["a", "b", "c"]);
````

---

### Method 2: Creating an Empty Set and Adding Values

```javascript
const letters = new Set();

// Add values
letters.add("b");
letters.add("b"); // ignored
letters.add("c");
letters.add("c"); // ignored
letters.add("a");
```

✅ Final Set:

```javascript
[...letters]; // ["b", "c", "a"]
```

---

## Size of a Set

```javascript
letters.size; // 3
```

Example:

```javascript
document.getElementById("demo").innerHTML =
  "The set has " + [...letters] + " values.";
```

**Output**

```
The set has a,b,c values.
```

---

## Removing Elements

---

### `delete(value)`

Removes a specific element from the set.

```javascript
letters.delete("a");
```

---

### `clear()`

Removes all elements from the set.

```javascript
letters.clear();
```

---

## Set Methods (ES2024+)

---

### `difference()`

Returns elements that exist in **this set but not in the other set**.

```javascript
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.difference(B);

let text = "";
for (const x of C) {
  text += x;
}
```

**Output**

```
a
```

---

### `intersection()`

Returns elements common to both sets.

```javascript
const C = A.intersection(B); // {'b','c'}
```

---

### `union()`

Returns a new set containing all unique elements from both sets.

```javascript
const C = A.union(B); // {'a','b','c','d'}
```

---

### `symmetricDifference()`

Returns elements that are in **either set but not in both**.

```javascript
const C = A.symmetricDifference(B); // {'a','d'}
```

---

### `isSubsetOf()`

Returns `true` if all elements of this set exist in another set.

```javascript
A.isSubsetOf(B);
```

---

### `isSupersetOf()`

Returns `true` if this set contains all elements of another set.

```javascript
A.isSupersetOf(B);
```

---

### `isDisjointFrom()`

Returns `true` if two sets have **no common elements**.

```javascript
A.isDisjointFrom(B);
```

---

## Iterating Over a Set

---

### `entries()`

Returns an iterator with `[value, value]` pairs.

```javascript
const myIterator = letters.entries();

let text = "";
for (const entry of myIterator) {
  text += entry + "\n";
}
```

---

### `forEach()`

Executes a function once for each element.

```javascript
let text = "";
letters.forEach((value) => {
  text += value;
});
```

---

### `has(value)`

Checks if a value exists in the set.

```javascript
letters.has("a"); // true or false
```

---

## Set vs Array (Quick Comparison)

| Feature             | Set | Array |
| ------------------- | --- | ----- |
| Allows duplicates   | ❌   | ✅     |
| Fast lookup         | ✅   | ❌     |
| Order preserved     | ✅   | ✅     |
| Built-in uniqueness | ✅   | ❌     |
| Index-based access  | ❌   | ✅     |

---

## Key Takeaways

* `Set` automatically removes duplicates
* Ideal for **unique values**
* Fast membership checking using `has()`
* New methods like `union()`, `intersection()` make Set powerful
