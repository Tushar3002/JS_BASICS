
## 🔹 Object.groupBy() vs Map.groupBy()

### 1️⃣ Object.groupBy()
**Example:**
```javascript
const result = Object.groupBy(fruit1, f =>
  f.quantity > 210 ? "More" : "Less"
);
````

**Result:**

```javascript
{
  More: [ ... ],
  Less: [ ... ]
}
```

**Characteristics:**

* ✅ Keys are strings (or symbols)
* ✅ Easy to log / `JSON.stringify`
* ✅ Natural for simple data grouping
* ❌ No guaranteed insertion order (mostly ordered, but not strict spec)
* ❌ Risk of key collision (`__proto__`, `toString`, etc.)

---

### 2️⃣ Map.groupBy() (ES2023+)

**Example:**

```javascript
const result = Map.groupBy(fruit1, f =>
  f.quantity > 210 ? "More" : "Less"
);
```

**Result:**

```javascript
Map {
  "More" => [ ... ],
  "Less" => [ ... ]
}
```

**Characteristics:**

* ✅ Keys can be **any type** (string, number, object, function…)
* ✅ Guaranteed insertion order
* ✅ No key collision issues
* ✅ Better for large / complex datasets
* ❌ Not JSON-serializable directly
* ❌ Slightly more verbose to work with

---

### 3️⃣ Side-by-side comparison

| Feature                  | Object.groupBy       | Map.groupBy |
| ------------------------ | -------------------- | ----------- |
| Return type              | Plain Object `{}`    | Map         |
| Key types                | String / Symbol only | Any type    |
| Order guaranteed         | ❌ Mostly             | ✅           |
| JSON friendly            | ✅                    | ❌           |
| Performance (large data) | Good                 | Better      |
| Safe from collisions     | ❌                    | ✅           |

---

## 🔹 for...in vs for...of

| Feature               | for...in              | for...of                                |
| --------------------- | --------------------- | --------------------------------------- |
| Works on              | Objects, Arrays       | Iterables (Array, Map, Set, String)     |
| Iterates over         | Keys (property names) | Values                                  |
| Syntax                | `for (key in obj)`    | `for (value of iterable)`               |
| Can use with objects? | ✅ Yes                 | ❌ No, unless you use `Object.keys(obj)` |

**Example (for...in with object):**

```javascript
const obj = {
  name: "Pedro",
  age: 48,
  job: "Actor"
}

for (const key in obj) {
  console.log(key, obj[key])
}

// Output:
// name Pedro
// age 48
// job Actor
```
