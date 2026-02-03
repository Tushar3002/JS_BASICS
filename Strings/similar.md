Ahh got it now 😄 — you want **JavaScript methods that exist on multiple data types**, like how **`.at()`** works on both **Array** and **String**.

Here’s a clean, interview-friendly list 👇

---

## 🔹 Shared methods across different data types

### 1️⃣ `.at()` → **Array, String**

```js
[10, 20, 30].at(-1);   // 30
"hello".at(-1);       // "o"
```

---

### 2️⃣ `.length` → **Array, String**

```js
[1, 2, 3].length;     // 3
"hello".length;       // 5
```

---

### 3️⃣ `.slice()` → **Array, String**

```js
[1, 2, 3, 4].slice(1, 3);  // [2, 3]
"hello".slice(1, 4);       // "ell"
```

---

### 4️⃣ `.includes()` → **Array, String**

```js
[1, 2, 3].includes(2);     // true
"hello".includes("ll");    // true
```

---

### 5️⃣ `.indexOf()` → **Array, String**

```js
[1, 2, 3].indexOf(2);      // 1
"hello".indexOf("l");      // 2
```

---

### 6️⃣ `.concat()` → **Array, String**

```js
[1, 2].concat([3, 4]);     // [1, 2, 3, 4]
"hi".concat(" there");     // "hi there"
```

---

### 7️⃣ `.map()` → **Array, Map**

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// Map equivalent
new Map([[1, 2]]).forEach((v, k) => v * 2); // conceptually similar
```

---

### 8️⃣ `.forEach()` → **Array, Map, Set, NodeList**

```js
[1, 2, 3].forEach(console.log);

new Set([1, 2, 3]).forEach(console.log);

new Map([["a", 1]]).forEach(console.log);
```

---

### 9️⃣ `.entries()` → **Array, Map, Object**

```js
[10, 20].entries();
new Map([["a", 1]]).entries();
Object.entries({ a: 1 });
```

---

### 🔟 `.keys()` / `.values()` → **Array, Map, Set, Object**

```js
Object.keys({ a: 1 });
Object.values({ a: 1 });

[1, 2].keys();
[1, 2].values();

new Map([["a", 1]]).keys();
```

---

## 🧠 Why this happens

JavaScript **reuses method names** when the *behavior conceptually matches*:

* sequence → `slice`, `at`, `includes`
* collection → `forEach`, `entries`, `keys`
* size → `length`, `size`

---

## 🔑 Interview one-liner

> “Some JS methods are shared across types because they operate on **iterable or collection-like behavior**.”

If you want, I can also give:

* 🔥 **tricky interview questions**
* 🧪 **polyfills**
* 🧩 **methods that look same but behave differently**

Just tell me 👌
