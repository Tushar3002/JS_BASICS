
# JavaScript String Methods

---

## Character Access Methods

### `at()`

- Returns the character at a specified index
- Supports **negative indexing**
- Same as `[]`, but more powerful

```javascript
let text = "W3Schools";

text.at(0);   // "W"
text.at(-1);  // "s"
text[0];      // "W"
````

---

### `charAt()`

* Older method
* Does **not** support negative indexes

```javascript
text.charAt(0); // "W"
```

---

### `charCodeAt()`

* Returns the **UTF-16 code** of a character
* Range: `0 – 65535`

```javascript
let text = "HELLO WORLD";
text.charCodeAt(0); // 72
```

---

### `codePointAt()`

* Returns the **full Unicode code point**
* Supports characters above `0xFFFF`

```javascript
"😊".codePointAt(0); // 128522
```

#### `charCodeAt()` vs `codePointAt()`

| Feature         | charCodeAt() | codePointAt() |
| --------------- | ------------ | ------------- |
| Encoding        | UTF-16       | Unicode       |
| Max value       | 65535        | > 65535       |
| Supports emojis | ❌            | ✅             |

---

## String Concatenation

### `concat()`

* Joins multiple strings
* Does not modify original string

```javascript
let result = text1.concat(" ", text2);
let result = text1.concat(" ", text2, " ", text3);
```
---

## Searching & Checking

### `endsWith()`

```javascript
let text = "Hello world";
text.endsWith("world"); // true
```

---

### `includes()`

* Case-sensitive

```javascript
text.includes("world"); // true
```

---

### `indexOf()`

* Returns first index of match
* Returns `-1` if not found

```javascript
let text = "Hello world, welcome!";
text.indexOf("welcome"); // 13
text.indexOf("e", 5);    // 14
```

---

### `lastIndexOf()`

* Searches from end
* Returns index from start

```javascript
let text = "Hello planet earth, you are a great planet.";
text.lastIndexOf("planet"); // 34
```

---

### `search()`

* Uses **RegExp**
* Returns first match index

```javascript
text.search(/Blue/); // -1
```
---

### `match()`

* Matches string against RegExp
* Returns array of matches

```javascript
text.match(/ain/);
```

---

### `isWellFormed()`

* Checks for valid UTF-16 string

```javascript
let text = "Hello World \uD800";
text.isWellFormed(); // false
```

---

## Unicode Utilities

### `String.fromCharCode()`

* Converts Unicode values to characters
* Static method

```javascript
String.fromCharCode(72, 69, 76, 76, 79); // "HELLO"
```

---

## Padding Strings

### `padStart()` / `padEnd()`

```javascript
let text = "5";
text.padStart(4, "0"); // "0005"
text.padEnd(4, "x");   // "5xxx"
```

---

## String Repetition

### `repeat()`

```javascript
"text".repeat(4); // "texttexttexttext"
```

---

## Replacing Text

### `replace()`

* Replaces **first match only**

```javascript
let text = "Visit Microsoft!";
text.replace("Microsoft", "W3Schools");
```

---

### `replaceAll()`

* Replaces **all matches**

```javascript
text.replaceAll("Cats", "Dogs");
text.replaceAll("cats", "dogs");
```

---

## Extracting Parts of Strings

### `slice()`

* Supports negative indexes
* End index is exclusive

```javascript
let text = "Hello world!";
text.slice(0, 5); // "Hello"
text.slice(3);    // "lo world!"
```

---

### `substring()`

* Negative values become `0`
* Swaps arguments if `start > end`

```javascript
text.substring(1, 4); // "ell"
```

---

### `substr()` ❌ *(Deprecated)*

* Uses length instead of end index

```javascript
text.substr(1, 4); // "ello"
```

---

### `slice()` vs `substring()`

| Feature        | slice() | substring() |
| -------------- | ------- | ----------- |
| Negative index | ✅       | ❌           |
| Swaps indexes  | ❌       | ✅           |
| Modern usage   | ✅       | ❌           |

---

## Case Conversion

```javascript
text.toLowerCase();
text.toUpperCase();
```

---

## Splitting Strings

### `split()`

```javascript
let text = "How are you doing today?";

text.split(" ");      // ["How","are","you","doing","today?"]
text.split("");       // ["H","o","w",...]
text.split(" ", 3);   // ["How","are","you"]
```

---

## Trimming Whitespace

### `trim()`, `trimStart()`, `trimEnd()`

```javascript
let text = "   Hello World   ";

text.trim();       // "Hello World"
text.trimStart();  // "Hello World   "
text.trimEnd();    // "   Hello World"
```

---

## String Length

```javascript
text.length;
```

---

## Key Takeaways

* Use `at()` instead of `charAt()` for modern JS
* Prefer `slice()` over `substring()`
* Use `codePointAt()` for emojis & Unicode
* Strings are **immutable** (methods return new strings)

---