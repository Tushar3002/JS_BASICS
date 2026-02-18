// const orders = [
//     { id: 1, customer: "Alice", items: 3, total: 150 },
//     { id: 2, customer: "Bob", items: 5, total: 300 },
//     { id: 3, customer: "Alice", items: 2, total: 100 }
// ];

// let ans=orders.reduce((acc,cur)=>{

//     if (!acc[cur.customer]) {
//     acc[cur.customer] = {
//       totalSpent: 0,
//       totalOrders: 0
//     };
//   }

//     acc[cur.customer].totalSpent += cur.total;
//     acc[cur.customer].totalOrders += 1;
//     // acc[cur.customer].totalVal=(acc[cur.customer].totalVal||0)+cur.totalVal
//     // acc[cur.customer].count=(acc[cur.customer].count||0)+cur.count
   
//     return acc
// },{})
// // console.log(ans);


// const exams = [
//   { id: 1, student: "Amit", subject: "Math", score: 80 },
//   { id: 2, student: "Neha", subject: "Math", score: 90 },
//   { id: 3, student: "Amit", subject: "Science", score: 70 },
//   { id: 4, student: "Neha", subject: "Science", score: 85 },
//   { id: 5, student: "Amit", subject: "Math", score: 60 }
// ];

// ans=exams.reduce((acc,cur)=>{
//     if(!acc[cur.student]) {
//         acc[cur.student]= {totalScore:0,examCount:0,avgScore:0}
//     }

//     acc[cur.student].totalScore+=cur.score
//     acc[cur.student].examCount+=1
//     acc[cur.student].avgScore=acc[cur.student].totalScore/acc[cur.student].examCount

//     return acc
// },{})
// // console.log(ans);

// // Group by subject instead of student and:

// // Find highest score in each subject

// // Find average score per subject

// let ans2=exams.reduce((acc,cur)=>{
//     if(!acc[cur.subject]) {
//         acc[cur.subject]={highestScore:0,avgScorePerSub:0,totalScore:0,count:0}
//     }
    
//     acc[cur.subject].highestScore = cur.score>acc[cur.subject].highestScore?cur.score:acc[cur.subject].highestScore
//     acc[cur.subject].totalScore+=cur.score
//     acc[cur.subject].count+=1
//     acc[cur.subject].avgScorePerSub = acc[cur.subject].totalScore/acc[cur.subject].count

//     return acc
//     // acc[cur.subject].highestScore
// },{})
// for (let subject in ans2) {
//   delete ans2[subject].totalScore;
//   delete ans2[subject].count;
// }
// // console.log(ans2);

// const sales = [
//   { id: 1, product: "Laptop", units: 3, revenue: 3000 },
//   { id: 2, product: "Phone", units: 5, revenue: 2500 },
//   { id: 3, product: "Laptop", units: 2, revenue: 2000 },
//   { id: 4, product: "Tablet", units: 4, revenue: 1600 },
//   { id: 5, product: "Phone", units: 2, revenue: 1000 }
// ];

// // Using reduce, create an object that groups by product and computes:

//         // totalUnitsSold – sum of units per product

//         // totalRevenue – sum of revenue per product

//         // averageRevenuePerUnit – totalRevenue / totalUnitsSold per product

// // let ans3=sales.reduce((acc,cur)=>{
// //     if(!acc[cur.product]) acc[cur.product]={totalUnitsSold:0,totalRevenue:0,averageRevenuePerUnit:0}

// //     acc[cur.product].totalUnitsSold+=cur.units

// //     acc[cur.product].totalRevenue += cur.revenue
// //     acc[cur.product].averageRevenuePerUnit = acc[cur.product].totalRevenue/acc[cur.product].totalUnitsSold

// //     // if(!acc.highestRevenue || acc[cur.product].averageRevenuePerUnit>acc.highestRevenue){
// //     if (
// //       !acc.highestRevProduct ||
// //       acc[cur.product].averageRevenuePerUnit >
// //         acc[acc.highestRevProduct].averageRevenuePerUnit
// //     ) {
// //         // acc.highestRevenue=acc[cur.product]
// //         acc.highestRevProduct=cur.product
// //     }
// //     return acc
// // },{  })


// // console.log(ans3);

// let ans3 = sales.reduce((acc, cur) => {
//   // initialize product inside acc.products
//   if (!acc.products[cur.product]) {
//     acc.products[cur.product] = { totalUnitsSold: 0, totalRevenue: 0, averageRevenuePerUnit: 0 };
//   }

//   // update totals
//   acc.products[cur.product].totalUnitsSold += cur.units;
//   acc.products[cur.product].totalRevenue += cur.revenue;
//   acc.products[cur.product].averageRevenuePerUnit =
//     acc.products[cur.product].totalRevenue / acc.products[cur.product].totalUnitsSold;

//   // track highest revenue per unit product
//   if (
//     !acc.highestRevProduct ||
//     acc.products[cur.product].averageRevenuePerUnit >
//       acc.products[acc.highestRevProduct].averageRevenuePerUnit
//   ) {
//     acc.highestRevProduct = cur.product;
//   }

//   return acc;
// }, { products: {}, highestRevProduct: null });

// // console.log(ans3);


// const highestRevenue=null
const transactions = [
  { txId: 1, user: "Alice", amount: 200 },
  { txId: 2, user: "Bob", amount: 450 },
  { txId: 3, user: "Alice", amount: 150 },
  { txId: 4, user: "Charlie", amount: 300 },
  { txId: 5, user: "Bob", amount: 100 }
];
//first user who has made more than one transaction
//With Set
let s=new Set()
let firstDupl=null
for(let i of transactions){
    if(s.has(i.user)){
        firstDupl=i
        break;

    }
    s.add(i.user)

}
// console.log(firstDupl);


//With reduce
// firstDupl = transactions.reduce((acc, curr) => {
//   if (acc.found) return acc;

//   if (acc.users.has(curr.user)) {
//     acc.found = curr;
//   } else {
//     acc.users.add(curr.user);
//   }
//   return acc;
// }, { users: new Set(), found: null }).found;

// console.log(firstDupl);


const customers = [
  { id: 1, name: "Amit", purchased: ["o1", "o3"] },
  { id: 2, name: "Neha", purchased: ["o2"] },
  { id: 3, name: "Rahul", purchased: ["o1", "o2", "o3"] }
];

const orders = [
  { id: "o1", products: ["p1", "p2"] },
  { id: "o2", products: ["p2"] },
  { id: "o3", products: ["p1", "p3"] }
];

const products = [
  { id: "p1", name: "Laptop", category: "Electronics", price: 1000 },
  { id: "p2", name: "Phone", category: "Electronics", price: 500 },
  { id: "p3", name: "Shoes", category: "Fashion", price: 200 }
];


// orders.products → full product objects

const productMap=new Map(products.map(x=>[x.id,x]))
const orderData=orders.map(x=>{
    return{
        ...x,
        products:x.products.map(x=>productMap.get(x))
    }

})

// console.log(orderData);

// customers.purchased → full order objects

const orderMap=new Map(orderData.map(x=>[x.id,x]))
const customerData=customers.map(x=>{
    return{
        ...x,
        purchased:x.purchased.map(v=>orderMap.get(v))
    }
})

// console.log(customerData);



// 🔹 Part 2 — Customer Analytics

// Calculate total money spent by each customer.    HARD
let totalMoneySpentbyCustomer=customerData.map((cust)=>{
    let total=cust.purchased.flatMap(o=>o.products).reduce((sum,cur)=>sum+cur.price,0)
    // let flat=cust.purchased.flatMap(o=>o.products)

    return {
        name:cust.name,
        totalSpent: total,
        // flatM:flat
    }
})
console.log(totalMoneySpentbyCustomer);

// Find the highest spending customer.

let highestSpender=totalMoneySpentbyCustomer.reduce((acc,cur)=>{
    return cur.totalSpent>acc.totalSpent?cur:acc
})
console.log(highestSpender);


// Find similarity score between Amit and Rahul based on products purchased.



// Find customers who bought at least one common product with Neha.




// 🔹 Part 3 — Product Analytics

// Count how many times each product was sold.

// Find the most sold product.

// Calculate total revenue per category.

// Find the most profitable category.

// 🔹 Part 4 — Recommendation Logic (Hard Mode 🔥)

// Recommend products to Neha:

// Based on products purchased by similar customers

// Exclude products she already bought






















const customers1 = [
    { id: 1, name: "Rahul", city: "Delhi" },
    { id: 2, name: "Sneha", city: "Mumbai" },
    { id: 3, name: "Arjun", city: "Delhi" }
];
 
const orders1 = [
    { id: "o1", customerId: 1, amount: 500, status: "delivered" },
    { id: "o2", customerId: 2, amount: 700, status: "pending" },
    { id: "o3", customerId: 1, amount: 300, status: "delivered" },
    { id: "o4", customerId: 3, amount: 900, status: "cancelled" },
];

const cust=customers1.reduce((acc,cur)=>{
    let total=orders1.filter(custId=>{
        return custId.customerId===cur.id
    }).reduce((sum,cur2)=> sum + cur2.amount,0)
    
    acc[cur.city] = (acc[cur.city]||0) + total

    return acc
},{})
// console.log(cust);


 
//  const groupCity=customers1.reduce((acc,cur)=>{
//     if(!acc[cur.city]) acc[cur.city]=[]
    
//     acc[cur.city].push(cur.id)
//     return acc
//  },{})

//  console.log(groupCity);

//  let MapCity=new Map(orders1.map(x=>[x.customerId,x.amount]))

//  console.log(MapCity);
 
// let grpData=Object.entries(groupCity).map(x=>{
//     let ans= x[1].map(y=>{
//         return MapCity.get(y)
//     }).reduce((acc,cur)=> acc + cur,0)

//     return ans
// })



 