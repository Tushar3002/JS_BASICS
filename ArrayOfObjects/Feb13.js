const users3 = [
  { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
  { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
  { id: 3, name: "Amit2", hobbies: ["reading", "playing"] }, // duplicate
  { id: 4, name: "Rahul", hobbies: ["singing", "reading"] },
  { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] }, // duplicate
];

let s = new Set();

users3.forEach((x) => {
  x.hobbies.forEach((y) => {
    s.add(y);
  });
});
let uniqueHobby = Array.from(s);
console.log(uniqueHobby);

let ans2={};

for (let i of uniqueHobby) {
  ans2 = users3.reduce((acc, cur) => {
    if (!acc[i]) acc[i] = [];

    if (cur.hobbies.includes(i)) {
      acc[i].push(cur);
    }
    return acc;
  }, ans2);
}

console.log(ans2);


// //Count Users Per Hobby

// ans2=users3.reduce((acc,cur)=>{
//     cur.hobbies.forEach(x=>{
//         acc[x] = (acc[x]||0)+1
//     })
//     return acc
// },{})

// console.log(ans2);

// //Find Users Who Have "reading"

// ans2=users3.filter((x)=>{
//     if(x.hobbies.includes("reading")){
//         return true
//     }
//     return false
// })
// console.log(ans2);

// //Find Users With More Than 2 Hobbies

// ans2=users3.filter(x=>{
//     if(x.hobbies.length >2) return true
// })
// console.log(ans2);



const hobbies = [
  { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" },
  { id: "ad490814-f1bf-46bb-a0cc-7b146ab0474b", hobby: "writing" },
  { id: "01408e0a-9582-4fe2-be2d-3fae1197bc8a", hobby: "dancing" },
  { id: "eba244e2-81f8-49ba-a2fa-9871581f7ddd", hobby: "singing" },
];

const users4 = [
  {
    id: 1,
    name: "Amit",
    hobbies: [
      "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
      "eba244e2-81f8-49ba-a2fa-9871581f7ddd",
    ],
  },
  {
    id: 2,
    name: "Neha",
    hobbies: [
      "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
      "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
    ],
  },
  { id: 3, name: "Amit2", hobbies: ["eba244e2-81f8-49ba-a2fa-9871581f7ddd"] },
  {
    id: 4,
    name: "Rahul",
    hobbies: [
      "ad490814-f1bf-46bb-a0cc-7b146ab0474b",
      "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
      "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
    ],
  },
  {
    id: 5,
    name: "Neha22",
    hobbies: [
      "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
      "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
    ],
  },
];

//Map hobby IDs to Names

// const hobbyMap = new Map();
// hobbies.forEach(h => hobbyMap.set(h.id, h.hobby));
const myMap = hobbies.map((x) => [x.id, x.hobby]);
console.log("-------------------------------------------------------");

console.log(myMap);

const m = new Map(myMap);
console.log(m);

// //Convert User Hobby IDs to Hobby Names

// let ans=users4.map(x=>{
//     return{
//         ...x,
//         hobbies:x.hobbies.map((val,k)=> m.get(val))

//     }
// })

// console.log(ans);


//Group Users by Hobby Name

const usersWithNames = users4.map(u => ({
    ...u,
    hobbies: u.hobbies.map(id => m.get(id)) // convert IDs to names
}));

console.log(usersWithNames);


let uniqVal=[...new Set(m.values())]
console.log(uniqVal);

ans=usersWithNames.reduce((acc,cur)=>{
    uniqVal.forEach(x=>{
        if(!acc[x]) acc[x]=[]
        if(cur.hobbies.includes(x)) {
            acc[x].push(cur.name)
        }
    })
    return acc
},{})

console.log(ans);



//Count Users Per Hobby

let countHob=usersWithNames.reduce((acc,cur)=>{
    cur.hobbies.forEach(x=>{
        acc[x]=(acc[x]||0)+1
        
    })
    return acc
},{})

console.log(countHob);


// Step 6: Find Most Popular Hobby
console.log(Object.entries(countHob));

let ent=Object.entries(countHob).reduce((acc,cur)=>{
    return cur[1]>acc[1]?cur:acc
})
console.log(ent);
