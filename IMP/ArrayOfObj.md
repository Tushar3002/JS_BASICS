
# **Dataset**

```js
const users3 = [
  { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
  { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
  { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
  { id: 4, name: "Rahul", hobbies: ["singing", "reading"] },
  { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] },
];
```

---

## **1️⃣ Get All Unique Hobbies Using `Set`**

```js 
const uniqueHobbies = new Set(users3.flatMap(u => u.hobbies));
console.log([...uniqueHobbies]);
```

**Output:**
`["reading", "playing", "dancing", "gaming", "singing"]`

---

## **2️⃣ Count Users per Hobby Using `Map`**

```js
const hobbyCount = new Map();

users3.forEach(u => {
  u.hobbies.forEach(h => hobbyCount.set(h, (hobbyCount.get(h) || 0) + 1));
});

console.log(hobbyCount);
```

**Output:**

```js
Map(5) { 'reading' => 3, 'playing' => 3, 'dancing' => 2, 'gaming' => 1, 'singing' => 2 }
```

---

## **3️⃣ Group Users by Hobby Using `Map`**

```js
const hobbyGroups = users3.reduce((map, u) => {
  u.hobbies.forEach(h => {
    if (!map.has(h)) map.set(h, []);
    map.get(h).push(u.name);
  });
  return map;
}, new Map());

console.log(hobbyGroups);


//OP
Map(5) {
  'reading' => ['Amit', 'Amit2', 'Rahul'],
  'playing' => ['Amit', 'Amit2', 'Neha22'],
  'dancing' => ['Neha', 'Neha22'],
  'gaming' => ['Neha'],
  'singing' => ['Rahul', 'Neha22']
}
```

---

## **4️⃣ Most Popular Hobby**

```js
const mostPopular = [...hobbyCount.entries()]
  .reduce((a, b) => (b[1] > a[1] ? b : a));

console.log(mostPopular); // ["reading", 3]

OP
["reading", 3]
```

---

## **5️⃣ Users with More Than 2 Hobbies**

```js
const multiHobbyUsers = users3.filter(u => u.hobbies.length > 2);
console.log(multiHobbyUsers);

[
  { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] }
]

```

---

## **6️⃣ Remove Duplicate Hobby Sets Using `Set`**

```js
const seen = new Set();
const uniqueUsers = users3.filter(u => {
  const key = [...u.hobbies].sort().join("|");
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});
console.log(uniqueUsers);

OP
[
  { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
  { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
  { id: 4, name: "Rahul", hobbies: ["singing", "reading"] },
  { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] }
]

```

---

## **7️⃣ Users Sharing Hobbies with a Given User**

```js
const target = users3.find(u => u.name === "Neha22");
const targetSet = new Set(target.hobbies);

const sharedUsers = users3
  .filter(u => u.name !== target.name && u.hobbies.some(h => targetSet.has(h)))
  .map(u => u.name);

console.log(sharedUsers); // ["Neha", "Amit", "Amit2", "Rahul"]

["Amit", "Neha", "Amit2", "Rahul"]

```

---

## **8️⃣ Hobby → Number of Users Who Have It Using `reduce`**

```js
const hobbyMap = users3.reduce((map, u) => {
  u.hobbies.forEach(h => map.set(h, (map.get(h) || 0) + 1));
  return map;
}, new Map());

console.log(hobbyMap);

OP
Map(5) {
  'reading' => 3,
  'playing' => 3,
  'dancing' => 2,
  'gaming' => 1,
  'singing' => 2
}

```

---

## **9️⃣ Users → Other Users With Any Common Hobby (`Map`)**

```js
const similarUsers = new Map();

users3.forEach(u => {
  similarUsers.set(u.name, users3
    .filter(o => o.name !== u.name && o.hobbies.some(h => u.hobbies.includes(h)))
    .map(o => o.name));
});

console.log(similarUsers);

OP
Map(5) {
  'Amit' => ['Amit2', 'Rahul', 'Neha22'],
  'Neha' => ['Neha22'],
  'Amit2' => ['Amit', 'Rahul', 'Neha22'],
  'Rahul' => ['Amit', 'Amit2', 'Neha22'],
  'Neha22' => ['Amit', 'Neha', 'Amit2', 'Rahul']
}

```

---

## **🔟 Hobby → Users Sorted by Name**

```js
const sortedHobbyUsers = users3.reduce((map, u) => {
  u.hobbies.forEach(h => {
    if (!map.has(h)) map.set(h, []);
    map.get(h).push(u.name);
    map.get(h).sort();
  });
  return map;
}, new Map());

console.log(sortedHobbyUsers);

OP

Map(5) {
  'reading' => ['Amit', 'Amit2', 'Rahul'],
  'playing' => ['Amit', 'Amit2', 'Neha22'],
  'dancing' => ['Neha', 'Neha22'],
  'gaming' => ['Neha'],
  'singing' => ['Neha22', 'Rahul']
}

```

---

## **1️⃣1️⃣ Find Users Who Have a Specific Hobby Using `Set`**

```js
const hobby = "reading";
const usersWithHobby = users3.filter(u => new Set(u.hobbies).has(hobby));
console.log(usersWithHobby.map(u => u.name)); // ["Amit", "Amit2", "Rahul"]

OP 
["Amit", "Amit2", "Rahul"]

```

---

## **1️⃣2️⃣ All Unique Hobbies Across Multiple Users Using `reduce` + `Set`**

```js
const allHobbies = users3.reduce((set, u) => {
  u.hobbies.forEach(h => set.add(h));
  return set;
}, new Set());

console.log([...allHobbies]);

OP
["reading", "playing", "dancing", "gaming", "singing"]

```

---

# ✅ Key Patterns Learned

1. **Set** → unique values / detect duplicates
2. **Map** → dynamic key-value storage with iteration order
3. **reduce** → transform arrays into objects, maps, sets
4. Combine **Set + Map + reduce** → powerful data transformations
5. Filter, map, sort can be chained for more complex logic
