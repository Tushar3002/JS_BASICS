Here is your content formatted as a proper **Markdown (.md) file**:

---

# JavaScript Data Type Conversions Cheat Sheet

## 🔹 1. Object ↔ Array

### ✅ Object → Array

```js
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);    // ['a','b','c']
Object.values(obj);  // [1,2,3]
Object.entries(obj); // [['a',1], ['b',2], ['c',3]]
```

### ✅ Array of Entries → Object

```js
const arr = [['a',1], ['b',2]];

const obj = Object.fromEntries(arr);
// { a:1, b:2 }
```

---

## 🔹 2. Object ↔ Map

### ✅ Object → Map

```js
const obj = { a: 1, b: 2 };

const map = new Map(Object.entries(obj));
```

If numeric keys are needed:

```js
const map = new Map(
  Object.entries(obj).map(([k,v]) => [Number(k), v])
);
```

### ✅ Map → Object

```js
const obj = Object.fromEntries(map);
```

---

## 🔹 3. Array ↔ Set

### ✅ Array → Set (Remove Duplicates)

```js
const arr = [1,2,2,3];

const set = new Set(arr);
// Set {1,2,3}
```

### ✅ Set → Array

```js
const arr = [...set];
// or
Array.from(set);
```

---

## 🔹 4. Array ↔ Map

### ✅ Array of Pairs → Map

```js
const arr = [['a',1], ['b',2]];

const map = new Map(arr);
```

### ✅ Map → Array

```js
[...map];           // [['a',1], ['b',2]]
Array.from(map);    // same
```

---

## 🔹 5. Object ↔ JSON

### ✅ Object → JSON String

```js
const json = JSON.stringify(obj);
```

### ✅ JSON String → Object

```js
const obj = JSON.parse(json);
```

---

## 🔹 6. String ↔ Array

### ✅ String → Array

```js
const str = "hello";

str.split("");   // ['h','e','l','l','o']
[...str];        // same
```

### ✅ Array → String

```js
['h','e','l','l','o'].join("");
```

---

## 🔹 7. String ↔ Number

### ✅ String → Number

```js
Number("123");
parseInt("123");
parseFloat("123.45");
+"123";
```

### ✅ Number → String

```js
String(123);
(123).toString();
```

---

## 🔹 8. Boolean Conversions

### ✅ Anything → Boolean

```js
Boolean(value);
!!value;
```

### Falsy Values

```
false
0
""
null
undefined
NaN
```

Everything else → `true`

---

## 🔹 9. Array ↔ Object (Indexed)

### ✅ Array → Object

```js
const arr = ['a','b','c'];

const obj = { ...arr };
// {0:'a',1:'b',2:'c'}
```

### ✅ Object → Array (Values)

```js
Object.values(obj);
```

---

# 🔥 Most Important Real-World Conversions

| From   | To     | Method                         |
| ------ | ------ | ------------------------------ |
| Object | Map    | `new Map(Object.entries(obj))` |
| Map    | Object | `Object.fromEntries(map)`      |
| Array  | Set    | `new Set(arr)`                 |
| Set    | Array  | `[...set]`                     |
| Object | JSON   | `JSON.stringify(obj)`          |
| JSON   | Object | `JSON.parse(json)`             |

---

