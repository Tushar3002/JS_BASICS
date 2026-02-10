
# JavaScript Complete Reference


## 🔹 Set Methods & Properties

| Method                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `new Set()`                | Creates a new set                                                           |
| `add()`                    | Adds a new element to a set                                                 |
| `clear()`                  | Removes all elements from a set                                             |
| `delete()`                 | Removes an element from a set                                               |
| `difference()`             | Returns the difference between two sets                                     |
| `entries()`                | Returns an Iterator with the `[value, value]` pairs from a set              |
| `forEach()`                | Invokes a callback for each element in a set                                |
| `has()`                    | Returns `true` if a value exists                                            |
| `intersection()`           | Returns the intersection of two sets                                        |
| `isDisjointFrom()`         | Returns `true` if no elements in a set are elements in another set          |
| `isSubsetOf()`             | Returns `true` if a set is a subset of another set                          |
| `isSupersetOf()`           | Returns `true` if a set is a superset of another set                        |
| `keys()`                   | Same as `values()`                                                          |
| `symmetricDifference()`    | Returns the symmetric difference between two sets                           |
| `union()`                  | Returns the union of two sets                                               |
| `values()`                 | Returns an Iterator with the values in a set                                |
| `size`                     | Returns the number of elements in a Set                                     |

---

## 🔹 Map Methods & Properties

| Method                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `new Map()`                | Creates a new Map object                                                    |
| `clear()`                  | Removes all elements from a Map                                             |
| `delete()`                 | Removes a Map element specified by a key                                     |
| `entries()`                | Returns an iterator object with `[key, value]` pairs                        |
| `forEach()`                | Invokes a callback for each key/value pair                                   |
| `get()`                    | Gets the value for a key                                                    |
| `groupBy()`                | Groups object elements according to callback values                          |
| `has()`                    | Returns `true` if a key exists                                              |
| `keys()`                   | Returns an iterator object with the keys                                     |
| `set()`                    | Sets the value for a key                                                    |
| `size`                     | Returns the number of Map elements                                          |
| `values()`                 | Returns an iterator object of the values                                     |

---

## 🔹 Array Methods & Properties

| Name                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `[]`                  | Creates a new Array                                                         |
| `new Array()`          | Creates a new Array                                                         |
| `at()`                 | Returns an indexed element of an array                                      |
| `concat()`             | Joins arrays and returns a new array                                        |
| `constructor`          | Returns the function that created the Array prototype                      |
| `copyWithin()`         | Copies array elements within the array                                      |
| `entries()`            | Returns a key/value pair Array Iteration Object                             |
| `every()`              | Checks if every element passes a test                                       |
| `fill()`               | Fills the elements with a static value                                      |
| `filter()`             | Creates a new array with elements that pass a test                          |
| `find()`               | Returns the value of the first element that passes a test                   |
| `findIndex()`          | Returns the index of the first element that passes a test                   |
| `findLast()`           | Returns the last element that passes a test                                 |
| `findLastIndex()`      | Returns the index of the last element that passes a test                    |
| `flat()`               | Concatenates sub-array elements                                             |
| `flatMap()`            | Maps all elements and creates a flat array                                   |
| `forEach()`            | Calls a function for each array element                                      |
| `from()`               | Creates an array from an object                                             |
| `includes()`           | Checks if an array contains the specified element                           |
| `indexOf()`            | Searches for an element and returns its position                             |
| `isArray()`            | Checks if an object is an array                                             |
| `join()`               | Joins array elements into a string                                          |
| `keys()`               | Returns an Array Iteration Object containing the keys                        |
| `lastIndexOf()`        | Searches from the end for an element and returns its position               |
| `length`               | Returns or sets the number of elements                                      |
| `map()`                | Creates a new array from results of a function                               |
| `of()`                 | Creates an array from a number of arguments                                  |
| `pop()`                | Removes the last element and returns it                                     |
| `prototype`            | Allows adding properties/methods to an Array object                         |
| `push()`               | Adds elements to the end and returns the new length                          |
| `reduce()`             | Reduces array to a single value (left-to-right)                              |
| `reduceRight()`        | Reduces array to a single value (right-to-left)                              |
| `reverse()`            | Reverses the order of elements                                              |
| `shift()`              | Removes the first element and returns it                                    |
| `slice()`              | Returns a portion of an array                                               |
| `some()`               | Checks if any elements pass a test                                          |
| `sort()`               | Sorts the array elements                                                    |
| `splice()`             | Adds/removes elements                                                       |
| `toReversed()`         | Returns a new reversed array                                                |
| `toSorted()`           | Returns a sorted array                                                     |
| `toSpliced()`          | Returns a new array with spliced elements                                   |
| `toString()`           | Converts array to a string                                                 |
| `unshift()`            | Adds elements to the start and returns the new length                        |
| `valueOf()`            | Returns the primitive value of an array                                     |
| `with()`               | Returns a new array with updated elements                                   |

---

## 🔹 String Methods & Properties

| Name                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `at()`                 | Returns an indexed character                                                 |
| `charAt()`             | Returns the character at a specified index                                   |
| `charCodeAt()`         | Returns Unicode of character at index                                        |
| `codePointAt()`        | Returns Unicode value at index                                               |
| `concat()`             | Joins two or more strings                                                   |
| `constructor`          | Returns the string's constructor function                                   |
| `endsWith()`           | Checks if string ends with specified value                                   |
| `fromCharCode()`       | Converts Unicode values to characters                                       |
| `includes()`           | Checks if string contains a value                                           |
| `indexOf()`            | Returns index of first occurrence                                           |
| `isWellFormed()`       | Returns true if string is well-formed                                        |
| `lastIndexOf()`        | Returns index of last occurrence                                            |
| `length`               | Returns string length                                                       |
| `localeCompare()`      | Compares two strings in current locale                                          |
| `match()`              | Searches string using regex or value                                        |
| `matchAll()`           | Returns all matches                                                         |
| `padEnd()`             | Pads string at the end                                                      |
| `padStart()`           | Pads string at the start                                                    |
| `prototype`            | Allows adding properties/methods                                           |
| `repeat()`             | Returns string repeated n times                                             |
| `replace()`            | Replaces first occurrence of pattern                                       |
| `replaceAll()`         | Replaces all occurrences of pattern                                        |
| `search()`             | Searches for pattern and returns index                                      |
| `slice()`              | Extracts part of string                                                    |
| `split()`              | Splits string into array                                                   |
| `startsWith()`         | Checks if string starts with specified value                                |
| `substr()`             | Deprecated. Use `substring()` or `slice()`                                  |
| `substring()`          | Extracts characters between indices                                        |
| `toLocaleLowerCase()`  | Converts string to lowercase (locale)                                       |
| `toLocaleUpperCase()`  | Converts string to uppercase (locale)                                       |
| `toLowerCase()`        | Converts string to lowercase                                               |
| `toString()`           | Returns string value                                                       |
| `toUpperCase()`        | Converts string to uppercase                                               |
| `toWellFormed()`       | Replaces lone surrogates with Unicode replacement                           |
| `trim()`               | Removes whitespace from both ends                                           |
| `trimEnd()`            | Removes whitespace from end                                                |
| `trimStart()`          | Removes whitespace from start                                              |
| `valueOf()`            | Returns primitive value                                                    |

---

## 🔹 Date Methods & Properties

| Name                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `new Date()`           | Creates a new Date object                                                   |
| `constructor`          | Returns Date constructor or creates a new Date                              |
| `getDate()`            | Day of month (1–31)                                                        |
| `getDay()`             | Day of week (0–6)                                                          |
| `getFullYear()`        | Year                                                                        |
| `getHours()`           | Hour (0–23)                                                                |
| `getMilliseconds()`    | Milliseconds (0–999)                                                       |
| `getMinutes()`         | Minutes (0–59)                                                             |
| `getMonth()`           | Month (0–11)                                                               |
| `getSeconds()`         | Seconds (0–59)                                                             |
| `getTime()`            | Milliseconds since Jan 1, 1970                                            |
| `getTimezoneOffset()`  | Minutes difference between UTC and local time                               |
| `getUTCDate()`         | Day of month in UTC (1–31)                                                 |
| `getUTCDay()`          | Day of week in UTC (0–6)                                                   |
| `getUTCFullYear()`     | Year in UTC                                                                 |
| `getUTCHours()`        | Hour in UTC (0–23)                                                         |
| `getUTCMilliseconds()` | Milliseconds in UTC (0–999)                                                |
| `getUTCMinutes()`      | Minutes in UTC (0–59)                                                      |
| `getUTCMonth()`        | Month in UTC (0–11)                                                        |
| `getUTCSeconds()`      | Seconds in UTC (0–59)                                                      |
| `getYear()`            | Deprecated. Use `getFullYear()`                                             |
| `now()`                | Milliseconds since Jan 1, 1970                                            |
| `parse()`              | Parses date string and returns milliseconds                                 |
| `prototype`            | Allows adding properties/methods                                           |
| `setDate()`            | Sets day of month                                                          |
| `setFullYear()`        | Sets year                                                                   |
| `setHours()`           | Sets hour                                                                   |
| `setMilliseconds()`    | Sets milliseconds                                                          |
| `setMinutes()`         | Sets minutes                                                                |
| `setMonth()`           | Sets month                                                                  |
| `setSeconds()`         | Sets seconds                                                                |
| `setTime()`            | Sets date using milliseconds since Jan 1, 1970                             |
| `setUTCDate()`         | Sets UTC day of month                                                       |
| `setUTCFullYear()`     | Sets UTC year                                                               |
| `setUTCHours()`        | Sets UTC hour                                                               |
| `setUTCMilliseconds()` | Sets UTC milliseconds                                                      |
| `setUTCMinutes()`      | Sets UTC minutes                                                           |
| `setUTCMonth()`        | Sets UTC month                                                              |
| `setUTCSeconds()`      | Sets UTC seconds                                                            |
| `setYear()`            | Deprecated. Use `setFullYear()`                                             |
| `toDateString()`       | Converts date to readable string                                           |
| `toGMTString()`        | Deprecated. Use `toUTCString()`                                             |
| `toISOString()`        | Returns ISO string                                                         |
| `toJSON()`             | Returns JSON formatted date                                                |
| `toLocaleDateString()` | Returns locale date string                                                 |
| `toLocaleTimeString()` | Returns locale time string                                                 |
| `toLocaleString()`     | Returns locale date-time string                                            |
| `toString()`           | Converts date to string                                                    |
| `toTimeString()`       | Returns time portion as string                                             |
| `toUTCString()`        | Converts date to UTC string                                                |
| `UTC()`                | Returns milliseconds since Jan 1, 1970 in UTC                               |
| `valueOf()`            | Returns primitive value of Date object                                     |
