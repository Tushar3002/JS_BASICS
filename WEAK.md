
# WeakMap & WeakSet in JavaScript

---

## What are WeakMap and WeakSet?

**WeakMap** and **WeakSet** hold objects **weakly**.

> If nothing else references an object, JavaScript can **garbage-collect it**,  
> even if it exists inside a WeakMap or WeakSet.

You **do not control when** this happens — the **Garbage Collector (GC)** decides.

---

## Why normal Map / Set can be dangerous

### Example: Memory Leak with `Map`

```javascript
const map = new Map();

let user = { name: "A" };
map.set(user, "online");

user = null; // you think it's gone…
````

❌ **Wrong**

The `Map` still holds a **strong reference**, so the object **stays in memory forever**.

☠️ **Memory leak**

---

## Enter WeakMap 🦸

```javascript
const wm = new WeakMap();

let user = { name: "A" };
wm.set(user, "online");

user = null; // object can now be GC'd
```

✅ When the object becomes unreachable elsewhere,
it is **automatically removed** from the `WeakMap`.

---

## WeakMap Rules (Very Important)

| Rule                   | Explanation                              |
| ---------------------- | ---------------------------------------- |
| Keys must be objects   | ❌ No strings, numbers, booleans          |
| Values can be anything | Objects, primitives, functions           |
| Not iterable           | ❌ No `.keys()`, `.values()`, `forEach()` |
| No `.size`             | GC is nondeterministic                   |

---

## WeakMap Example: Private Data (Classic Use Case)

```javascript
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    privateData.set(this, { password });
  }

  checkPassword(pw) {
    return privateData.get(this).password === pw;
  }
}
```

### Why WeakMap is perfect here

✅ Data is **truly private**
✅ When `User` instance is gone → private data is gone
✅ No memory leaks
✅ No naming collisions

---

## WeakMap vs Map

| Feature                | Map | WeakMap      |
| ---------------------- | --- | ------------ |
| Key types              | Any | Objects only |
| Iterable               | ✅   | ❌            |
| `.size`                | ✅   | ❌            |
| GC friendly            | ❌   | ✅            |
| Use for data ownership | ✅   | ❌            |
| Use for metadata       | ❌   | ✅            |

---

## WeakSet vs Set

| Feature               | Set         | WeakSet         |
| --------------------- | ----------- | --------------- |
| Stores primitives     | ✅           | ❌               |
| Iterable              | ✅           | ❌               |
| Prevents memory leaks | ❌           | ✅               |
| Best use              | Collections | Markers / flags |

---

## Why No Iteration?

Because the JavaScript engine can **remove entries at any time** due to garbage collection.

Iteration would be:

* Unreliable
* Misleading
* Non-deterministic

So JS **forbids it entirely**.

---

## Why Only Objects as Keys?

Because **only objects are garbage-collectable by reference**.

* Objects → Heap → GC-managed
* Primitives → Stack / interned → ❌ no GC semantics

---

## When NOT to Use WeakMap / WeakSet

❌ You need to list entries
❌ You need `.size`
❌ You want long-term storage

👉 **Use `Map` or `Set` instead**

---

## Mental Model (Remember This)

> **Map / Set own their data**
> **WeakMap / WeakSet only observe objects**

If the object dies,
the weak structure **forgets it ever existed**.
