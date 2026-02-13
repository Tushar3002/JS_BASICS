// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const list = fruits.entries();

// let text = "";
// for (let [x,y] of list) {
//   text += x + "<br>";
// }
// console.log(text)///

// ////

const users = [
  { id: 1, name: "Aman", age: 25, gender: "male", salary: 50000, active: true },
  { id: 2, name: "Sara", age: 30, gender: "female", salary: 80000, active: false },
  { id: 3, name: "John", age: 22, gender: "male", salary: 30000, active: true },
  { id: 4, name: "Priya", age: 27, gender: "female", salary: 90000, active: true },
  { id: 5, name: "Mike", age: 35, gender: "male", salary: 120000, active: false },
  { id: 6, name: "Nina", age: 29, gender: "female", salary: 70000, active: true }
];


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


const orders = [
  { id: 1, userId: 1, total: 500 },
  { id: 2, userId: 2, total: 700 },
  { id: 3, userId: 1, total: 300 },
  { id: 4, userId: 3, total: 1000 },
];

// 9. Total amount spent by userId = 1
ans=orders.reduce((acc,cur)=>{
    return cur.userId===1?acc+cur.total:acc
},0)

console.log(ans);

//10. Combine users + orders → show each user with totalSpent

ans=users.map(x=>{
    const totalSpent=orders.reduce((acc,cur)=>{
        return cur.userId===x.id?acc+cur.total:acc
    },0)

    return{
        User: x.name,
        TotalSpent:totalSpent
    }
})

console.log(ans);


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

ans=users2.reduce((acc,cur)=>{
    return acc + cur.orders.reduce((sum,val)=> sum + val.total,0);
},0)

console.log(ans);
//1500


//2️⃣ Most Purchased Product (by quantity)

// ans=users2.


// ✅ 2️⃣ Most Purchased Product (by quantity)

// Step 1: Count products
// Step 2: Find max

// const productCount = {};

// users.forEach(user => {
//   user.orders.forEach(order => {
//     order.items.forEach(item => {
//       productCount[item.product] =
//         (productCount[item.product] || 0) + item.quantity;
//     });
//   });
// });

// const mostPurchased = Object.keys(productCount).reduce((max, product) =>
//   productCount[product] > productCount[max] ? product : max
// );

// console.log(mostPurchased);


// 🔥 This is real interview logic.

// ✅ 3️⃣ User Who Spent the Most
// const userWithMaxSpending = users.reduce((maxUser, user) => {
//   const totalSpent = user.orders.reduce((sum, order) => sum + order.total, 0);

//   const maxSpent = maxUser.orders
//     ? maxUser.orders.reduce((sum, order) => sum + order.total, 0)
//     : 0;

//   return totalSpent > maxSpent ? user : maxUser;
// }, users[0]);

// console.log(userWithMaxSpending);


// 🔥 Alternative cleaner version:

// const userWithMaxSpending = users
//   .map(user => ({
//     ...user,
//     totalSpent: user.orders.reduce((sum, o) => sum + o.total, 0)
//   }))
//   .reduce((max, user) =>
//     user.totalSpent > max.totalSpent ? user : max
//   );

// console.log(userWithMaxSpending);


// This one is cleaner and more readable.

// ✅ 4️⃣ Flat Array of All Purchased Products

// Using flatMap (cleanest way):

// const allProducts = users.flatMap(user =>
//   user.orders.flatMap(order =>
//     order.items.map(item => ({
//       user: user.name,
//       product: item.product
//     }))
//   )
// );

// console.log(allProducts);


// 🔥 This shows strong nested mapping skills.

// ✅ 5️⃣ Product Revenue Summary

// Revenue = price × quantity

// const revenueSummary = {};

// users.forEach(user => {
//   user.orders.forEach(order => {
//     order.items.forEach(item => {
//       revenueSummary[item.product] =
//         (revenueSummary[item.product] || 0) +
//         item.price * item.quantity;
//     });
//   });
// });

// console.log(revenueSummary);


// Output:

// {
//   Laptop: 500,
//   Mouse: 100,
//   Keyboard: 200,
//   Phone: 700
// }