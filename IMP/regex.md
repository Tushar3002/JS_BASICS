
# JavaScript Regular Expressions (RegExp)

Regular expressions (regex) are patterns used to match character combinations in strings.  
In JavaScript, regex is implemented via the `RegExp` object and regex literals.

---

## Creating a RegExp

### Regex Literal (recommended)
```js
const pattern = /abc/;
````

### RegExp Constructor

```js
const pattern = new RegExp("abc");
```

> Use the constructor when the pattern is dynamic.

---

## Flags

| Flag | Meaning             |
| ---: | ------------------- |
|  `g` | Global search       |
|  `i` | Case-insensitive    |
|  `m` | Multiline           |
|  `s` | Dot matches newline |
|  `u` | Unicode             |
|  `y` | Sticky              |

```js
/hello/gi
```

---

## Common Methods

### `test()`

Checks if a match exists.

```js
/abc/.test("abcdef"); // true
```

### `exec()`

Returns match details.

```js
/abc/.exec("abcdef");
```

### String Methods

```js
"abc123".match(/\d+/);
"abc123".replace(/\d+/, "456");
"abc123".search(/\d/);
"abc123".split(/\d/);
```

---

## Character Classes

| Pattern | Description                  |
| ------: | ---------------------------- |
|     `.` | Any character except newline |
|    `\d` | Digit                        |
|    `\D` | Not a digit                  |
|    `\w` | Word character               |
|    `\W` | Non-word character           |
|    `\s` | Whitespace                   |
|    `\S` | Non-whitespace               |

```js
/\d{3}/ // matches 3 digits
```

---

## Quantifiers

| Quantifier | Meaning         |
| ---------: | --------------- |
|        `*` | 0 or more       |
|        `+` | 1 or more       |
|        `?` | 0 or 1          |
|      `{n}` | Exactly n       |
|     `{n,}` | At least n      |
|    `{n,m}` | Between n and m |

```js
/\d{2,4}/
```

---

## Anchors

| Anchor | Meaning           |
| -----: | ----------------- |
|    `^` | Start of string   |
|    `$` | End of string     |
|   `\b` | Word boundary     |
|   `\B` | Non-word boundary |

```js
/^hello$/;
```

---

## Groups & Ranges

### Capturing Groups

```js
/(abc)+/
```

### Non-capturing Groups

```js
/(?:abc)+/
```

### Character Ranges

```js
/[a-zA-Z0-9]/
```

---

## Alternation (OR)

```js
/cat|dog/
```

---

## Lookarounds

### Lookahead

```js
/\d(?=px)/   // digit followed by 'px'
```

### Negative Lookahead

```js
/\d(?!px)/
```

### Lookbehind

```js
/(?<=\$)\d+/
```

### Negative Lookbehind

```js
/(?<!\$)\d+/
```

---

## Escaping Special Characters

Special characters must be escaped:

```js
\ ^ $ . | ? * + ( ) [ ] { }
```

Example:

```js
/\$100/
```

---

## Common Examples

### Validate Email (simple)

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Match Hex Color

```js
/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
```

### Remove Extra Spaces

```js
str.replace(/\s+/g, " ");
```

---

## Tips

* Regex literals are faster and clearer
* Use online testers (like regex101) when debugging
* Keep regex readable—complex patterns deserve comments

