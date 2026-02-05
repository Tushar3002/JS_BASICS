
# JavaScript Classes, Dates, and Function Methods

---

## Classes

### `constructor()` Method

- Special method for creating and initializing objects in a class.
- Called automatically when a class is instantiated.
- A class **cannot have more than one constructor** (SyntaxError if you do).

```javascript
class Car {
  constructor(brand) {  // Constructor
    this.carname = brand;
  }
}

let mycar = new Car("Ford");
````

---

### Methods in Classes

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);  // Call parent constructor
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();
```

---

### Static Methods

* Defined using `static` keyword.
* Called on the **class itself**, not on instances.

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}

document.getElementById("demo").innerHTML = Car.hello();
// mycar.hello() would throw an error
```

---

### `super` Keyword

* Used to call parent class constructor or methods.
* Allows access to parent class properties and methods.

```javascript
class Model extends Car {
  constructor(brand, mod) {
    super(brand); // calls Car constructor
    this.model = mod;
  }
}
```

---

## Dates

```javascript
const time = new Date(); // Current date and time
const d = new Date();
let day = d.getDate();   // Day of the month
```

---

## Functions: `call()`, `apply()`, `bind()`

### Key Differences

| Feature             | call            | apply     | bind            |
| ------------------- | --------------- | --------- | --------------- |
| Invokes immediately | ✅               | ✅         | ❌               |
| Returns a function  | ❌               | ❌         | ✅               |
| Arguments style     | Comma-separated | Array     | Comma-separated |
| `this` binding      | Temporary       | Temporary | Permanent       |

---

### `call()`

* Calls a function with a given `this` and arguments separately.

```javascript
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const user = { name: "Alice" };
greet.call(user, "Hello", "!"); // Hello Alice!
```

---

### `apply()`

* Calls a function with a given `this` and arguments as an array.

```javascript
greet.apply(user, ["Hi", "?"]); // Hi Alice?
```

---

### `bind()`

* Returns a new function with permanently bound `this`.
* Does **not execute immediately**.

```javascript
const boundGreet = greet.bind(user, "Hey");
boundGreet("!!"); // Hey Alice!!
```

---

### Examples: `call`, `apply`, `bind`

#### Using `call()`

```javascript
let name1 = {
  firstname: "TJ",
  city: "Rajkot",
  printInfo: function(city){
    console.log(this.firstname, this.city, city);
  }
}

name1.printInfo();             // TJ Rajkot undefined

let name2 = { firstname: "Tushar" };
name1.printInfo.call(name2,"OSaka"); // Tushar undefined OSaka
```

#### Using function + `call()`

```javascript
function printInfo(city) {
  console.log(this.firstname, this.city, city);
}

let name1 = { firstname: "TJ", city: "Rajkot" };
printInfo.call(name1, "raj");   // TJ Rajkot raj

let name2 = { firstname: "Tushar" };
printInfo.call(name2, "OSaka"); // Tushar undefined OSaka
```

#### Using `apply()`

```javascript
function printInfo(city, state){
  console.log(this.firstname, this.city, city, state);
}

let name2 = { firstname: "Tushar" };
printInfo.call(name2, "OSaka", "GUJ");          // Tushar undefined OSaka GUJ
printInfo.apply(name2, ["OSaka", "GUJ"]);       // Tushar undefined OSaka GUJ
```

#### Using `bind()`

```javascript
let printMyName = printInfo.bind(name1, "Rajkot");
printMyName(); // TJ Rajkot Rajkot undefined
```

---

### Other Function Notes

```javascript
function fn1() {};
function fn2(a, b, c) {};

// Get function names
let text = fn1.name + " " + fn2.name; // "fn1 fn2"

// Convert function to string
function myFunction() { return "Hello"; }
let str = myFunction.toString(); // "function myFunction() { return 'Hello'; }"
```

---

### Summary

* **call()** → Immediate, arguments separately
* **apply()** → Immediate, arguments as array
* **bind()** → Returns new function, arguments separately, reusable later

```

