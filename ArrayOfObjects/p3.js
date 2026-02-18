const users3 = [
  { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
  { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
  { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
  { id: 4, name: "Rahul", hobbies: ["singing", "reading"] },
  { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] }, 
];

let s = new Set();

users3.forEach((x) => {
  x.hobbies.forEach((y) => {
    s.add(y);
  });
});
let uniqueHobby = Array.from(s);
// console.log(uniqueHobby);

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




// console.log(ans2);
/*
{
  reading: [
    { id: 1, name: 'Amit', hobbies: [Array] },
    { id: 3, name: 'Amit2', hobbies: [Array] },
    { id: 4, name: 'Rahul', hobbies: [Array] }
  ],
  playing: [
    { id: 1, name: 'Amit', hobbies: [Array] },
    { id: 3, name: 'Amit2', hobbies: [Array] },
    { id: 5, name: 'Neha22', hobbies: [Array] }
  ],
  dancing: [
    { id: 2, name: 'Neha', hobbies: [Array] },
    { id: 5, name: 'Neha22', hobbies: [Array] }
  ],
  gaming: [ { id: 2, name: 'Neha', hobbies: [Array] } ],
  singing: [
    { id: 4, name: 'Rahul', hobbies: [Array] },
    { id: 5, name: 'Neha22', hobbies: [Array] }
  ]
}
*/

// console.log("--------------------------------------------------------------------------------------");


// let ans33=users3.reduce((acc,cur)=>{

//         for (let i = 0; i < uniqueHobby.length; i++) {
//             if(!acc[uniqueHobby[i]]) acc[uniqueHobby[i]]=[]
//             if(cur.hobbies.includes(i)){
//                 acc[uniqueHobby[i]].push(cur)
//             }
//         }
//         return acc

//     },{})
//     console.log(ans33);
// let ans2 = users3.reduce((acc, user) => { //correct but not mine
//   user.hobbies.forEach(hobby => {
//     if (!acc[hobby]) acc[hobby] = [];
//     acc[hobby].push(user);
//   });
//   return acc;
// }, {});
//     console.log("--------------------------------------------------------------------------------------");

let ans9=users3.reduce((acc,cur)=>{
        cur.hobbies.forEach(x=>{
            if(!acc[x]) acc[x]=[]

        acc[x].push(cur)

        })
        return acc
    },{})
// console.log(ans9);

// ans2=uniqueHobby.map((x,i)=>{
//     console.log(x);

//     let val=users3.reduce((acc,cur)=>{

//         if(!acc[x]) acc[x]=[]
//         if(cur.hobbies.includes(x)){
//             acc[x].push(cur)
//         }
//     })
//     return{
//         hobby:x,
//         users:acc[x]
//     }
// })

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
// const output = [ { id: 1, name: "Amit",hobbies:[{id:"1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",hobby:"reading"}]},]
// let m3=new Map()
// let ans5=users4.reduce((acc,cur)=>{
//     hobbies.forEach(x=>{
//         cur.hobbies.
//     })
// })

const myMap = hobbies.map((x) => [x.id, x]);
// console.log(myMap);

const m = new Map(myMap);
console.log(m);
/*
Map(4) {
  '1b451981-2f77-43e7-b9e1-8c4d5c3d69b0' => { id: '1b451981-2f77-43e7-b9e1-8c4d5c3d69b0', hobby: 'reading' },
  'ad490814-f1bf-46bb-a0cc-7b146ab0474b' => { id: 'ad490814-f1bf-46bb-a0cc-7b146ab0474b', hobby: 'writing' },
  '01408e0a-9582-4fe2-be2d-3fae1197bc8a' => { id: '01408e0a-9582-4fe2-be2d-3fae1197bc8a', hobby: 'dancing' },
  'eba244e2-81f8-49ba-a2fa-9871581f7ddd' => { id: 'eba244e2-81f8-49ba-a2fa-9871581f7ddd', hobby: 'singing' }
}*/

const ans10 = users4.map((x, i) => {
  // for(let [k,v] of m.entries()){
  return {
    ...x,
    // hobbies:m.set(m.get(k),m.get(v))
    // hobbies: x.hobbies.map((val) => {
    //     // console.log(val);
    // //   return  {
    // //         id:m.set(m.get(val))
    // //     }
    // return  m.set(m.get(val));
    // }),
    hobbies: x.hobbies.map(val => m.get(val))
  };
  // }
});

console.log(ans10);

/*
[
  { id: 1, name: 'Amit', hobbies: [ [Object], [Object] ] },
  { id: 2, name: 'Neha', hobbies: [ [Object], [Object] ] },
  { id: 3, name: 'Amit2', hobbies: [ [Object] ] },
  { id: 4, name: 'Rahul', hobbies: [ [Object], [Object], [Object] ] },
  { id: 5, name: 'Neha22', hobbies: [ [Object], [Object] ] }
]
  */