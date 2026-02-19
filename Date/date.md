
# JavaScript Date Object

The **Date** object in JavaScript is used to **work with dates and times**.  
It allows you to create, manipulate, and format dates and times.

---

## Creating a Date Object

### 1. Current Date and Time
```javascript
const now = new Date();
console.log(now); // e.g., 2026-02-05T14:30:00.000Z
```

### 2. Using a Date String

```javascript
const date1 = new Date("2026-02-05");
console.log(date1); // Thu Feb 05 2026 00:00:00 GMT+0000
```

### 3. Using Date and Time Components

```javascript
const date2 = new Date(2026, 1, 5, 14, 30, 0); // Month is 0-indexed (0 = Jan)
console.log(date2); // Thu Feb 05 2026 14:30:00
```

### 4. Using Milliseconds

```javascript
const date3 = new Date(1675589400000); // Milliseconds since Jan 1, 1970 UTC
console.log(date3);
```

---

## Date Methods

### Get Methods

| Method                | Description                            | Example                           |
| --------------------- | -------------------------------------- | --------------------------------- |
| `getFullYear()`       | Returns the year                       | `date.getFullYear()` → 2026       |
| `getMonth()`          | Returns month (0-11)                   | `date.getMonth()` → 1 (Feb)       |
| `getDate()`           | Returns day of month (1-31)            | `date.getDate()` → 5              |
| `getDay()`            | Returns day of week (0-6, 0=Sun)       | `date.getDay()` → 4 (Thu)         |
| `getHours()`          | Returns hour (0-23)                    | `date.getHours()` → 14            |
| `getMinutes()`        | Returns minutes (0-59)                 | `date.getMinutes()` → 30          |
| `getSeconds()`        | Returns seconds (0-59)                 | `date.getSeconds()` → 0           |
| `getMilliseconds()`   | Returns milliseconds (0-999)           | `date.getMilliseconds()` → 0      |
| `getTime()`           | Returns milliseconds since Jan 1, 1970 | `date.getTime()` → 1675589400000  |
| `getTimezoneOffset()` | Minutes difference from UTC            | `date.getTimezoneOffset()` → -300 |

---

### Set Methods

| Method                | Description              | Example                        |
| --------------------- | ------------------------ | ------------------------------ |
| `setFullYear(year)`   | Set year                 | `date.setFullYear(2025)`       |
| `setMonth(month)`     | Set month (0-11)         | `date.setMonth(11)` → December |
| `setDate(day)`        | Set day of month         | `date.setDate(25)`             |
| `setHours(hour)`      | Set hour                 | `date.setHours(10)`            |
| `setMinutes(min)`     | Set minutes              | `date.setMinutes(45)`          |
| `setSeconds(sec)`     | Set seconds              | `date.setSeconds(30)`          |
| `setMilliseconds(ms)` | Set milliseconds         | `date.setMilliseconds(500)`    |
| `setTime(ms)`         | Set time in milliseconds | `date.setTime(1675589400000)`  |

---

## Conversion Methods

| Method                 | Description         | Example                                                |
| ---------------------- | ------------------- | ------------------------------------------------------ |
| `toDateString()`       | Human-readable date | `date.toDateString()` → "Thu Feb 05 2026"              |
| `toTimeString()`       | Human-readable time | `date.toTimeString()` → "14:30:00 GMT+0000"            |
| `toISOString()`        | ISO format          | `date.toISOString()` → "2026-02-05T14:30:00.000Z"      |
| `toUTCString()`        | UTC string          | `date.toUTCString()` → "Thu, 05 Feb 2026 14:30:00 GMT" |
| `toLocaleDateString()` | Locale date         | `date.toLocaleDateString()` → "2/5/2026"               |
| `toLocaleTimeString()` | Locale time         | `date.toLocaleTimeString()` → "2:30:00 PM"             |
| `toJSON()`             | JSON format         | `date.toJSON()` → "2026-02-05T14:30:00.000Z"           |

---

## Date Arithmetic

```javascript
const today = new Date();

// Add 5 days
const future = new Date(today);
future.setDate(today.getDate() + 5);

// Subtract 3 days
const past = new Date(today);
past.setDate(today.getDate() - 3);

// Difference between dates in milliseconds
const diffMs = future - past; // ms
const diffDays = diffMs / (1000 * 60 * 60 * 24); // convert to days
console.log(diffDays); // 8
```

---

## Static Methods

| Method         | Description             | Example                      |
| -------------- | ----------------------- | ---------------------------- |
| `Date.now()`   | Current timestamp in ms | `Date.now()` → 1675589400000 |
| `Date.parse()` | Parse date string to ms | `Date.parse("2026-02-05")`   |
| `Date.UTC()`   | Create timestamp in UTC | `Date.UTC(2026,1,5,14,30,0)` |

---

## Useful Tips

* Months are **0-indexed**: `0 = Jan, 11 = Dec`
* Days of the week are **0-indexed**: `0 = Sun, 6 = Sat`
* Date arithmetic can be done by **milliseconds** or by `setDate()`
* Always be careful with **timezones** — use UTC methods if needed

---

## Example: Countdown Timer

```javascript
const eventDate = new Date("2026-12-31T23:59:59");

function countdown() {
  const now = new Date();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}

countdown();
setInterval(countdown, 1000);
```

---

## Summary

* **Date object** is used for **creation, manipulation, and formatting** of dates & times.
* Use **get/set methods** to read or modify individual components.
* Use **static methods** for timestamps or parsing.
* For **timezones and formatting**, use **`toLocale…`** or libraries like **Moment.js / Luxon / Day.js**.
* Always handle **months (0-indexed)** and **timezones** carefully.



console.log(
  date.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
);
// "12/06/1995, 19:24:30"
