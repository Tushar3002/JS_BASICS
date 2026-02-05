
# JavaScript Array Methods Notes

## Creating Arrays

```javascript
// Using Array constructor
const cars = new Array("Saab", "Volvo", "BMW");

// Or using array literal
const cars = [];
````

### Adding Values

```javascript
cars.push("Saab");
cars.push("Volvo");
cars.push("BMW");

console.log(cars);
document.getElementById("demo").innerHTML = cars;
```

---

## `at()` Method

* Access elements at a specific index.
* Supports negative indexing from the end.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.at(2);   // "Apple"
fruits.at();    // "Banana" (first value)
fruits.at(-1);  // "Mango" (last value)
```

---

## `concat()` Method

* Combines arrays and/or values.
* Flattens nested arrays one level only.

```javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = [1];

const children = arr1.concat(arr2, arr3);
// ["Cecilie", "Lone", "Emil", "Tobias", "Linus", 1]

// Nested arrays
const arrA = [1, 2, [3 , 4]];
const arrB = [[5, 6], 7, 8];
const arrC = arrA.concat(arrB);
console.log(arrC);  // [1, 2, [3, 4], [5, 6], 7, 8]
```

---

## `copyWithin()` Method

* Copies array elements to another position, overwriting existing values.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);  // ["Banana", "Orange", "Banana", "Orange"]
```

---

## `entries()` Method

* Returns an iterator of `[index, value]` pairs.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const list = fruits.entries();

let text = "";
for (let x of list) {
  text += x + "<br>";
}
console.log(text);
// [0, "Banana"], [1, "Orange"], [2, "Apple"], [3, "Mango"]
```

---

## `every()` Method

* Tests whether **all elements** pass a function.

```javascript
const ages = [32, 33, 16, 40];
function checkAge(age) {
  return age > 18;
}

ages.every(checkAge); // false (because 16 < 18)
```

---

## `fill()` Method

* Fills array elements with a value.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");          // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]
fruits.fill("Kiwi", 2, 4);    // ["Banana", "Orange", "Kiwi", "Kiwi"]
```

---

## `filter()` Method

* Creates a new array with elements passing a test.

```javascript
const ages = [32, 33, 16, 40];
const result = ages.filter(e => e > 32); // [33, 40]
```

---

## `find()` and `findIndex()`

* `find()` → Returns the **first value** passing a test.
* `findIndex()` → Returns the **index** of the first passing element.

```javascript
ages.find(checkAge);      // 32
ages.findIndex(checkAge); // 0
```

* `findLast()` → Returns **last value** passing a test.

---

## `flat()` and `flatMap()`

```javascript
// flat(depth)
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2); // [1,2,3,4,5,6,7,8]

// flatMap()
const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr2.flatMap(x => [x, x * 10]);
// [1, 10, 2, 20, 3, 30, 4, 40, 5, 50, 6, 60]
```

---

## `forEach()` Method

```javascript
const fruits = ["apple", "orange", "cherry"];
let res = '';
fruits.forEach(value => {
  res += value + " ";
});
```

---

## Searching & Indexing

```javascript
arr.includes("Mango");            // true
arr.indexOf("Apple");             // 0
arr.indexOf("Apple", 1);          // search from index 1
arr.lastIndexOf("Apple");         // last occurrence
```

---

## Array Type & Joining

```javascript
Array.isArray(fruits);            // true
fruits.join();                     // "Banana,Orange,Apple,Mango"
fruits.join(" and ");              // "Banana and Orange and Apple and Mango"
```

---

## Iterators

```javascript
for (let x of fruits.keys()) { text += x + "<br>"; }   // keys()
for (let x of fruits.values()) { text += x + "<br>"; } // values()
```

---

## Length, Map, Filter Examples

```javascript
let length = fruits.length;

const num = [1,2,3];
let ans = num.map(n => 2**n);

const persons = [
  {firstname: "Malcom", lastname: "Reynolds", age: 30},
  {firstname: "Kaylee", lastname: "Frye", age: 25},
  {firstname: "Jayne", lastname: "Cobb", age: 20}
];

let ans1 = persons.map(val => val.firstname + " " + val.lastname);
let ans2 = persons.filter(val => val.age > 22)
                  .map(val => val.firstname + " " + val.lastname);
```

---

## `Array.of()` Method

```javascript
let fruits = Array.of("Banana", "Orange", "Apple", "Mango");
```

---

## Stack & Queue Methods

```javascript
fruits.pop();                       // remove last
fruits.push("Kiwi", "Lemon");       // add at end
fruits.shift();                      // remove first
fruits.unshift("Strawberry");       // add at start
```

---

## `reduce()` and `reduceRight()`

```javascript
const numbers = [175, 50, 25];
let total = numbers.reduce((total, n) => total - n); // 100
```

---

## Spread & Rest Operators

```javascript
const arr1 = [1,2,3,4,5,6];
let [a,b,c,...rest] = arr1;
console.log(rest);  // [4,5,6]

const arr2 = [...arr1];  // copy array
```

---

## Reversing & Sorting

```javascript
fruits.reverse();       // overwrites original array
const revFruits = fruits.toReversed(); // returns new array

fruits.sort();          // alphabetical sort, overwrites original
const sortedFruits = fruits.toSorted(); // returns new sorted array
```

---

## Slice & Splice

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3); // ["Orange","Lemon"] (does not modify original)
fruits.splice(2,0,"Lemon","Kiwi"); // inserts at index 2 (modifies original)
```

---

## Copying & Updating

```javascript
const arr3 = [...arr1, ...arr2];   // spread operator to merge arrays
const updatedArr = fruits.with(2,"Pineapple"); // returns new array, updates index 2
```

---

## Converting to String

```javascript
fruits.toString(); // "Banana,Orange,Apple,Mango"
```

```

---

If you want, I can **combine both your Object and Array notes into a single fully-formatted `JavaScript-Notes.md`** file, ready to download, so you have all your MERN/JS notes in one place.  

Do you want me to do that?
```
