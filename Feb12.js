// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const list = fruits.entries();

// let text = "";
// for (let [x,y] of list) {
//   text += x + "<br>";
// }
// console.log(text)///

// ////

// const users = [
//   { id: 1, name: "Aman", age: 25, gender: "male", salary: 50000, active: true },
//   { id: 2, name: "Sara", age: 30, gender: "female", salary: 80000, active: false },
//   { id: 3, name: "John", age: 22, gender: "male", salary: 30000, active: true },
//   { id: 4, name: "Priya", age: 27, gender: "female", salary: 90000, active: true },
//   { id: 5, name: "Mike", age: 35, gender: "male", salary: 120000, active: false },
//   { id: 6, name: "Nina", age: 29, gender: "female", salary: 70000, active: true }
// ];


// // 1. Get all active female users

// let ans=users.filter((x)=>{
//     return x.gender==="female" && x.active===true
// })

// console.log(ans);


// //2 . Get total salary of all active users

// ans=users.filter(x=>{
//    return x.active===true
// }).reduce((acc,cur)=>{
//    return acc+cur.salary
// },0)
// console.log(ans);

// // ans=ans.reduce((acc,cur)=>{
// //     return acc+cur.salary
// // },0)
// // console.log(ans);

// ans=users.reduce((acc,cur)=>{
//     return cur.active===true?acc+cur.salary:acc
// },0)

// console.log(ans);



// // 3. Find the highest paid user

// ans=users.toSorted((x,y)=>y.salary-x.salary)[0]
// console.log(ans);


// //4. Get average age of male users

// ans=users.reduce((acc,cur)=>{
//     return cur.gender==="male"?acc+cur.age:acc
// },0)
// let len=users.reduce((acc,cur)=>{
//     return cur.gender==="male"?acc+1:acc
// },0)

// ans=ans/len

// console.log(ans);


// //5. Return only names of users earning more than 60000

// ans=users.filter(x=>{
//     return x.salary>60000
// }).map(x=>x.name)

// console.log(ans);


// //6. Group users by gender

// ans=users.reduce((acc,cur)=>{
//     if(!acc[cur.gender]) acc[cur.gender]=[]
//     acc[cur.gender].push(cur)
//     return acc
// },{})

// console.log(ans);


// // 7. Check if ALL users are active

// ans=users.every(x=>x.active===true)
// console.log(ans);


// //8.Check if ANY user earns more than 100000

// ans=users.some(x=>x.salary>100000)
// console.log(ans);


// const orders = [
//   { id: 1, userId: 1, total: 500 },
//   { id: 2, userId: 2, total: 700 },
//   { id: 3, userId: 1, total: 300 },
//   { id: 4, userId: 3, total: 1000 },
// ];

// // 9. Total amount spent by userId = 1
// ans=orders.reduce((acc,cur)=>{
//     return cur.userId===1?acc+cur.total:acc
// },0)

// console.log(ans);

// //10. Combine users + orders → show each user with totalSpent

// ans=users.map(x=>{
//     const totalSpent=orders.reduce((acc,cur)=>{
//         return cur.userId===x.id?acc+cur.total:acc
//     },0)

//     return{
//         User: x.name,
//         TotalSpent:totalSpent
//     }
// })

// console.log(ans);


//--------------------------------------------------------------------------------------------------------------------------------------

const users2 = [
  {
    id: 1,
    name: "Aman",
    orders: [
      {
        id: 101,
        total: 500,
        items: [
          { product: "Laptop", price: 500, quantity: 1 },
        ]
      },
      {
        id: 102,
        total: 300,
        items: [
          { product: "Mouse", price: 100, quantity: 1 },
          { product: "Keyboard", price: 200, quantity: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Sara",
    orders: [
      {
        id: 103,
        total: 700,
        items: [
          { product: "Phone", price: 700, quantity: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "John",
    orders: []
  }
];


//Get total revenue (sum of all orders of all users)

// ans=users2.reduce((acc,cur)=>{
//     return acc + cur.orders.reduce((sum,val)=> sum + val.total,0);
// },0)

// console.log(ans);
// //1500


//2️⃣ Most Purchased Product (by quantity)



const users3 = [
  { id: 1, name: "Amit",hobbies:["reading","playing"] },
  { id: 2, name: "Neha",hobbies:["dancing","gaming"] },
  { id: 3, name: "Amit2",hobbies:["reading","playing"] },   // duplicate
  { id: 4, name: "Rahul",hobbies:["singing","reading"] },
  { id: 5, name: "Neha22" ,hobbies:["dancing","playing","singing"]}    // duplicate
];


let s=new Set()


users3.forEach((x)=>{
    x.hobbies.forEach(y=>{
        s.add(y)
    })
})
let uniqueHobby=Array.from(s)
console.log(uniqueHobby);

let ans2={};

for(let i of uniqueHobby){
    ans2=users3.reduce((acc,cur)=>{
        if(!acc[i]) acc[i]=[]

        if(cur.hobbies.includes(i)){
            acc[i].push(cur)
            
        }
        return acc
      
    },ans2)
    
}

console.log(ans2);




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
    


//     console.log("--------------------------------------------------------------------------------------");
    
// let ans9=users3.reduce((acc,cur)=>{
//         cur.hobbies.forEach(x=>{
//             if(!acc[x]) acc[x]=[]

//         acc[x].push(cur)
        
//         })
//         return acc
//     },{})
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






// let ans2;
// for(let i=0;i<uniqueHobby.length;i++){
//     ans2=users3.reduce((acc,cur)=>{

//         if(!acc[uniqueHobby[i]]) acc[uniqueHobby[i]]=[]
//         acc[uniqueHobby[i]].push(cur)
//         return acc
    
// },{})
// }

// console.log(ans2);

// output: [{hobby:"reading", users:[ { id: 1, name: "Amit",hobbies:["reading","playing"] }, { id: 3, name: "Amit2",hobbies:["reading","playing"] },  { id: 4, name: "Rahul",hobbies:["singing","reading"] }]}]

const hobbies = [
    {id:"1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",hobby:"reading"},
    {id:"ad490814-f1bf-46bb-a0cc-7b146ab0474b",hobby:"writing"},
    {id:"01408e0a-9582-4fe2-be2d-3fae1197bc8a",hobby:"dancing"},
    {id:"eba244e2-81f8-49ba-a2fa-9871581f7ddd",hobby:"singing"}
]

const users4 = [
  { id: 1, name: "Amit",hobbies:["1b451981-2f77-43e7-b9e1-8c4d5c3d69b0","eba244e2-81f8-49ba-a2fa-9871581f7ddd"] },
  { id: 2, name: "Neha",hobbies:["01408e0a-9582-4fe2-be2d-3fae1197bc8a","1b451981-2f77-43e7-b9e1-8c4d5c3d69b0"] },
  { id: 3, name: "Amit2",hobbies:["eba244e2-81f8-49ba-a2fa-9871581f7ddd"] },  
  { id: 4, name: "Rahul",hobbies:["ad490814-f1bf-46bb-a0cc-7b146ab0474b","01408e0a-9582-4fe2-be2d-3fae1197bc8a","1b451981-2f77-43e7-b9e1-8c4d5c3d69b0"] },
  { id: 5, name: "Neha22",hobbies:["01408e0a-9582-4fe2-be2d-3fae1197bc8a","1b451981-2f77-43e7-b9e1-8c4d5c3d69b0"]}   
];
// const output = [ { id: 1, name: "Amit",hobbies:[{id:"1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",hobby:"reading"}]},]
// let m3=new Map()
// let ans5=users4.reduce((acc,cur)=>{
//     hobbies.forEach(x=>{
//         cur.hobbies.
//     })
// })

