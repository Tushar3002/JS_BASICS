// const users = [
//   { name: "A", score: 10 },
//   { name: "B", score: 20 }
// ];

// const updated = users.map(u => {
//   u.score += 5;
//   return u;
// });

// console.log(users);
// console.log(updated);


// const events = [
//   { name: "A", date: new Date(2026, 1, 10) },
//   { name: "B", date: new Date(2026, 0, 25) },
//   { name: "C", date: new Date(2026, 2, 1) }
// ];

// const earliest = events.reduce((min, curr) =>
//   curr.date < min.date ? curr : min
// );

// console.log(earliest.name);

// const people = [
//   { name: "A", city: "NY" },
//   { name: "B", city: "LA" },
//   { name: "C", city: "NY" }
// ];

// const grouped = people.reduce((acc, p) => {
//   acc[p.city] ??= [];
//   acc[p.city].push(p);
//   return acc;
// }, {});

// console.log(grouped);

// const gro=Map.groupBy(people,(x)=>{
//     return x.city
// })

// console.log(gro);



//DATES

// const options = {
//   day: "2-digit",
//   month: "2-digit",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: false
// };

// const d = new Date();
// let text = d.toLocaleString();
// console.log(text);


// let person = { name: 'Lydia' };
// const members = person;
// // person.name="anb"
// person = { name: 'Pedro' };

// console.log(members);

// const person1 = {
//   name: 'Lydia',
//   age: 21,
// };

// Object.entries(person1).forEach(([key,v]) => {
//   console.log("hey");
//   console.log(key,v);           // "name", "age"
// });

// for (const [key, value] of Object.entries(person1)) {
//   console.log(key, value);    // "name" "Lydia", "age" 21
// }

// const num = parseInt('101',2);
// console.log(num);
// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = '1998';
// }

function getInfo(member, year) {
  member.name = 'Lydia';
  year = '1998';
}

const person = { name: 'Sarah' };
const birthYear = '1997';

getInfo(person, birthYear);

console.log(person, birthYear);

(() => {
  let x = y = 10;
})();

console.log(typeof x);
console.log(typeof y);
