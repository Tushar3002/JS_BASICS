
# Deep Copy in JavaScript using `JSON.stringify` / `JSON.parse`

Creating a deep copy of an object means **duplicating the object and all nested objects**, so that changes to the copy do **not affect the original**.

---

## Example

```javascript
const original = { name: 'Bob', details: { age: 28 } };
const deepCopy = JSON.parse(JSON.stringify(original));
````

---

## 🔹 Step 1: `JSON.stringify(original)`

Converts the object into a **JSON string**.

```javascript
JSON.stringify(original)
```

**Internally:**

* Reads each property of `original`
* Converts it into JSON-compatible format
* Recursively processes nested objects

**Result:**

```json
'{"name":"Bob","details":{"age":28}}'
```

📌 At this point:

* This is **just plain text**
* **No object references exist**
* Memory links are completely broken

---

## 🔹 Step 2: `JSON.parse(...)`

Converts the JSON string back into a **brand new object**.

```javascript
JSON.parse('{"name":"Bob","details":{"age":28}}')
```

**Internally:**

* Reads the JSON string
* Creates a new object in memory
* Creates new nested objects as well

**Result:**

```javascript
{
  name: "Bob",
  details: { age: 28 }
}
```

---

## 🔹 Step 3: Reference Comparison

```javascript
original === deepCopy;                 // false
original.details === deepCopy.details; // false
```

✔ Different memory locations
✔ No shared references

**Example:**

```javascript
deepCopy.details.age = 30;
console.log(original.details.age); // 28
```

---

## 🔹 Visual Memory Model 🧠

**Before copy:**

```
original ──▶ { name, details ──▶ { age } }
```

**After copy:**

```
original ──▶ { name, details ──▶ { age } }
deepCopy ──▶ { name, details ──▶ { age } }
```

✔ Completely separate object trees

---

## ⚠️ Unsupported Values

During `JSON.stringify`:

| Value              | Result              |
| ------------------ | ------------------- |
| `undefined`        | removed             |
| function           | removed             |
| `Date`             | converted to string |
| `Symbol`           | removed             |
| Circular reference | ❌ error             |

**Example:**

```javascript
JSON.stringify({ a: undefined, b: () => {} })
// "{}"
```

---

## 🔑 Key Summary

1. Serialize object → JSON string
2. Deserialize string → new object
3. All references are broken
4. Works only for **JSON-safe data**

---

## ✅ Mutation vs Reassignment

| Action                                  | Effect on original reference                      |
| --------------------------------------- | ------------------------------------------------- |
| `person.name = 'Pedro'` (mutate)        | changes object, both see it                       |
| `person = { name: 'Pedro' }` (reassign) | points variable to new object, original untouched |
