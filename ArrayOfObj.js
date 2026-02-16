
////////////////Practice Array of Objects

const products = [
  { id: "p1", name: "Laptop", category: "Electronics", price: 800 },
  { id: "p2", name: "Phone", category: "Electronics", price: 500 },
  { id: "p3", name: "Shoes", category: "Fashion", price: 100 },
  { id: "p4", name: "Watch", category: "Fashion", price: 200 },
];

const orders = [
  { id: 1, user: "Amit", items: ["p1", "p3"] },
  { id: 2, user: "Neha", items: ["p2"] },
  { id: 3, user: "Rahul", items: ["p1", "p2", "p4"] },
];

// Replace product IDs with full product objects

let productMap=new Map(products.map(x=>[x.id,x]))

// console.log(productMap);
// Map(4) {
//   'p1' => { id: 'p1', name: 'Laptop', category: 'Electronics', price: 800 },
//   'p2' => { id: 'p2', name: 'Phone', category: 'Electronics', price: 500 },
//   'p3' => { id: 'p3', name: 'Shoes', category: 'Fashion', price: 100 },
//   'p4' => { id: 'p4', name: 'Watch', category: 'Fashion', price: 200 }
// }

let orderData=orders.map(x=>{
    return{
        ...x,
        items:x.items.map(u=>productMap.get(u))
    }
})

// console.log(orderData);
// [
//   { id: 1, user: 'Amit', items: [ [Object], [Object] ] },
//   { id: 2, user: 'Neha', items: [ [Object] ] },
//   { id: 3, user: 'Rahul', items: [ [Object], [Object], [Object] ] }
// ]



// Calculate total amount per order
let priceMap=new Map(products.map(X=>[X.id,X.price]))
// console.log(priceMap);//Map(4) { 'p1' => 800, 'p2' => 500, 'p3' => 100, 'p4' => 200 }

let priceData=orders.map(x=>{
    return{
        ...x,
        items:x.items.map(val=>priceMap.get(val))
    }
})
// console.log(priceData);
// [
//   { id: 1, user: 'Amit', items: [ 800, 100 ] },
//   { id: 2, user: 'Neha', items: [ 500 ] },
//   { id: 3, user: 'Rahul', items: [ 800, 500, 200 ] }
// ]

let totalAmt=priceData.map((x)=>{

    return {
        ...x,
        TotalAmount:x.items.reduce((acc,cur)=>{
  
            return acc = acc+cur
        })  

    }
})

// console.log(totalAmt);

// [
//   { id: 1, user: 'Amit', items: [ 800, 100 ], TotalAmount: 900 },
//   { id: 2, user: 'Neha', items: [ 500 ], TotalAmount: 500 },
//   { id: 3, user: 'Rahul', items: [ 800, 500, 200 ], TotalAmount: 1500 }
// ]


// Find highest spending user

let highestSpend=totalAmt.reduce((acc,cur)=>{
    return cur.TotalAmount>acc.TotalAmount?cur:acc
})
// console.log(highestSpend); //{ id: 3, user: 'Rahul', items: [ 800, 500, 200 ], TotalAmount: 1500 }

// Find most sold product

let pCount=orders.reduce((acc,cur)=>{
    cur.items.forEach(x=>{
        acc[x] = (acc[x]||0) +1
    })
    return acc
},{})
// console.log(pCount);   // { p1: 2, p3: 1, p2: 2, p4: 1 }

let [mostSoldId, count] = Object.entries(pCount)
    .reduce((acc, cur) => cur[1] > acc[1] ? cur : acc);

let mostSoldProduct = productMap.get(mostSoldId);
// console.log(mostSoldProduct);//{ id: 'p1', name: 'Laptop', category: 'Electronics', price: 800 }


// console.log({
//     product: mostSoldProduct.name,
//     sold: count
// });//{ product: 'Laptop', sold: 2 }


// Group revenue by category

// let grp=products.reduce((acc,cur)=>{                                                     WRONG
//     acc[cur.category]=(acc[cur.category]||0)+cur.price
//     return acc
// },[])

// console.log(grp);   //[ Electronics: 1300, Fashion: 300 ]

let grp=orders.reduce((acc,cur)=>{
    cur.items.forEach(x=>{
        let prod=productMap.get(x)
        acc[prod.category] = (acc[prod.category]||0)+prod.price
        
    })
   return acc
},{})

// console.log(grp);   //{ Electronics: 2600, Fashion: 300 }



// 🧩 2️⃣ Social Media System
// 📦 Data

const users = [
  { id: 1, name: "Amit", followers: [2, 3] },
  { id: 2, name: "Neha", followers: [1] },
  { id: 3, name: "Rahul", followers: [1, 2] },
];

const posts = [
  { id: 1, userId: 1, likes: [2, 3] },
  { id: 2, userId: 2, likes: [1] },
  { id: 3, userId: 3, likes: [1, 2] },
];

// Problems:

// Replace follower IDs with user objects



// Find most followed user

// Find most liked post

// Suggest people to follow (mutual followers logic)

// Detect mutual followers

// 🧩 3️⃣ Company & Departments
// 📦 Data
// const employees = [
//   { id: 1, name: "Amit", departmentId: "d1", salary: 50000 },
//   { id: 2, name: "Neha", departmentId: "d2", salary: 60000 },
//   { id: 3, name: "Rahul", departmentId: "d1", salary: 70000 },
// ];

// const departments = [
//   { id: "d1", name: "Engineering" },
//   { id: "d2", name: "HR" },
// ];

// Problems:

// Replace departmentId with full department

// Find total salary per department

// Find highest paid employee per department

// Find department with highest average salary

// 🧩 4️⃣ Library System
// 📦 Data
// const books = [
//   { id: "b1", title: "JS Basics", author: "John" },
//   { id: "b2", title: "React Guide", author: "Mike" },
// ];

// const members = [
//   { id: 1, name: "Amit", borrowed: ["b1"] },
//   { id: 2, name: "Neha", borrowed: ["b1", "b2"] },
// ];

// Problems:

// Replace book IDs with book objects

// Find most borrowed book

// Find members who borrowed same books

// Detect duplicate borrow patterns

// 🧩 5️⃣ Movie Rating System
// 📦 Data
// const movies = [
//   { id: "m1", title: "Inception", genre: "Sci-Fi" },
//   { id: "m2", title: "Titanic", genre: "Romance" },
// ];

// const ratings = [
//   { user: "Amit", movieId: "m1", rating: 5 },
//   { user: "Neha", movieId: "m1", rating: 4 },
//   { user: "Rahul", movieId: "m2", rating: 3 },
// ];

// Problems:

// Average rating per movie

// Highest rated movie

// Most active user

// Group ratings by genre

// Recommend movies based on similar users

// 🧩 6️⃣ Nested Deep Structure (Harder)
// 📦 Data
// const companies = [
//   {
//     id: 1,
//     name: "TechCorp",
//     teams: [
//       {
//         name: "Frontend",
//         members: ["Amit", "Neha"]
//       },
//       {
//         name: "Backend",
//         members: ["Rahul"]
//       }
//     ]
//   }
// ];

// Problems:

// Flatten all members

// Count members per company

// Detect duplicate members across teams

// Find members in multiple teams