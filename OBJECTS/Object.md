
**File: `JavaScript-Objects.md`**

````markdown
# JavaScript Object Methods & Properties Notes

## Creating Objects with Inheritance

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";

// Display Properties
document.getElementById("demo").innerHTML = 
  person.firstName + " and " + man.firstName; // John Peter
````

> The `Object.create()` method creates a new object with the specified prototype.

---

## `hasOwnProperty()` Method

The `hasOwnProperty()` method checks if an object has a specific property **as its own property** (not inherited).
Returns `true` if the property exists directly on the object, otherwise `false`.

**Syntax:**

```javascript
object.hasOwnProperty(prop);
```

---

## `Object.defineProperties()` Method

* Adds or changes object properties.
* Lets you change **property metadata**.
* Allows you to add **getters and setters**.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe"
};

Object.defineProperties(person, {
  language: { value: "en" },
  year: { value: "Hello" }
});
```

---

## `Object.defineProperty()` Method

* Adds or changes a single object property.
* Lets you modify property metadata.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add a new property
Object.defineProperty(person, "year", { value: "2008" });
```

---

## `delete` Operator

* Deletes a property from an object.
* Removes both the property and its value.

```javascript
delete person.lastName;
```

---

## `Object.entries()` Method

* Returns an array of the key/value pairs of an object.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let text = Object.entries(person); 
// [["firstName","John"],["lastName","Doe"],["age",50],["eyeColor","blue"]]
```

---

## `Object.freeze()` Method

* Prevents any changes to an object.
* Fails silently in non-strict mode.
* Throws a `TypeError` in strict mode.
* Frozen objects are **read-only**: no modification, addition, or deletion of properties.

```javascript
"use strict";
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person);

// This will throw an error
person.age = 51;

// Check if frozen
let text = Object.isFrozen(person); // true
```

---

### `Object.freeze()` vs `Object.seal()`

| Feature           | Object.seal() | Object.freeze() |
| ----------------- | ------------- | --------------- |
| Add properties    | ❌             | ❌               |
| Delete properties | ❌             | ❌               |
| Modify values     | ✅             | ❌               |

---

## `Object.keys()` Method

* Returns an array of the keys of an object.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const keys = Object.keys(person); 
// ["firstName", "lastName", "age", "eyeColor"]
```

---

## Other Useful Object Methods

| Method                             | Description                                               |
| ---------------------------------- | --------------------------------------------------------- |
| `Object.assign(target, source)`    | Copies properties from a source object to a target object |
| `Object.create(object)`            | Creates an object from an existing object                 |
| `Object.entries(object)`           | Returns an array of key/value pairs of an object          |
| `Object.fromEntries()`             | Creates an object from a list of keys/values              |
| `Object.keys(object)`              | Returns an array of the keys of an object                 |
| `Object.values(object)`            | Returns an array of the property values of an object      |
| `Object.groupBy(object, callback)` | Groups object elements according to a function            |
| `Object.preventExtensions(object)` | Prevents adding new properties                            |
| `Object.isExtensible(object)`      | Checks if properties can be added                         |
| `Object.seal(object)`              | Prevents adding or deleting properties                    |
| `Object.isSealed(object)`          | Checks if object is sealed                                |
| `Object.freeze(object)`            | Prevents any changes to an object                         |
| `Object.isFrozen(object)`          | Checks if object is frozen                                |

---

## Preventing Re-assignment Example

```javascript
const car = { type: "Fiat", model: "500", color: "white" };

// Prevent adding object properties
Object.preventExtensions(car);

// Check if object is extensible
Object.isExtensible(car); // false
```

