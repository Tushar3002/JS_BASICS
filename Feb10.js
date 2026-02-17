const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" },
  { id: 1, name: "Amit" },   // duplicate
  { id: 3, name: "Rahul" },
  { id: 2, name: "Neha" }    // duplicate
];

// const uniq=users.filter((val,index)=>{
//    return users.findIndex(u=>u.id===val.id)===index;
// })

// console.log(uniq);

// //SET


// const s= new Set()

// const uniq2=users.filter((val,index)=>{
//     if(s.has(val.id)) return false
//     s.add(val.id)
//     return true
// })

// console.log(uniq2);

// //Map
// const m=new Map()
// const uniq3=users.filter((val,index)=>{
//     if(m.has(val.id)){
//         return false
//     }
//     m.set(val.id,val.name)
//     return true
// })
// console.log(uniq3);


// ////////////////
// const seen = new Set();
// const uniq4 = [];

// for (const user of users) {
//   if (!seen.has(user.id)) {
//     seen.add(user.id);
//     uniq4.push(user);
//   }
// }
// console.log(uniq4);



// //////////

// const map = new Map();

// for (const user of users) {
//   map.set(user.id, user); // overwrites previous
// }
// console.log(map);

// const uniq5 = Array.from(map.values());
// console.log(uniq5);


// //------------------------------------------------------------------------------------------

// const names=["TJ","TJ","Pedro","Pascal","Pedro"]

// const uniq6=names.filter((val,i)=>{
//     return names.indexOf(val)===i
// })

// console.log(uniq6);



// ////Get all user names

// const allNames=users.map(v=>v.name)
// console.log(allNames);


// // Find user with id = 3

// const findUser=users.find(v=> v.id===3 )
// console.log(findUser);

// // //Check if user with id = 4 exists

// const exists = users.some(v => v.id === 4);
// console.log(exists);

// // //Count how many times each id appears

// let map2=new Map()

// users.forEach(x=>{
//     if(map2.has(x.id)){
//         map2.set(x.id,map2.get(x.id)+1)
//     }else{
//         map2.set(x.id,1)
//     }
// })
// console.log(map2);


//Find the first duplicate user

// let set2=new Set()
// let data2=null
// for (const user of users) {
//   if (set2.has(user.id)) {
//     data2 = user;
//     break; 
//   }
//   set2.add(user.id);
// }

// console.log(data2);

// //Find the last duplicate user

// let set=new Set()
// let data=null
// users.forEach(val=>{
//     if(set.has(val.id)){
//         data=val
//         return false
//     }
//     set.add(val.id)
//     return true
// })

// console.log(data);

// //GroupUsers by ID

// const group=Object.groupBy(users,(val)=>{
//     return val.id
// })
// console.log(group);

// //most repeted const freq = new Map();
// const freq = new Map();

// users.forEach(u => {
//   freq.set(u.id, (freq.get(u.id) || 0) + 1);
// });

// let maxCount = 0;
// let mostRepeatedId = null;

// for (const [id, count] of freq) {
//   if (count > maxCount) {
//     maxCount = count;
//     mostRepeatedId = id;
//   }
// }

// const mostRepeatedUser = users.find(u => u.id === mostRepeatedId);
// console.log(mostRepeatedUser);
// console.log(freq);

//===================

// const result = users.reduce((acc, cur) => {

//     acc.freq[cur.id] = (acc.freq[cur.id] || 0) + 1;


//     if (acc.freq[cur.id] > acc.maxCount) {
//         acc.maxCount = acc.freq[cur.id];
//         acc.mostRepeatedUser = cur;
//     }

//     return acc;
// }, { freq: {}, maxCount: 0, mostRepeatedUser: null });



// //////////////////////////////////////////////////////////////////////////////

// // Products Array

// const products = [
//   { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
//   { id: 2, name: "Shirt", price: 40, category: "Clothing" },
//   { id: 3, name: "Phone", price: 800, category: "Electronics" },
//   { id: 4, name: "Shoes", price: 100, category: "Clothing" },
//   { id: 5, name: "Headphones", price: 150, category: "Electronics" }
// ];

// // Filter products under $100

// ans=products.filter(val=>val.price<100)
// console.log(ans);


// // Get all product names

// ans=products.map(val=>val.name)
// console.log(ans);

// // Group products by category

// // ans=Object.groupBy(products,(val)=>{
// //     return val.category;
// // })
// // console.log(ans);

// const productsByCategory = products.reduce((acc, product) => {
//   if (!acc[product.category]) acc[product.category] = [];
//   acc[product.category].push(product);
//   return acc;
// }, {});

// console.log(productsByCategory);


// // Find the most expensive product

// ans=products.reduce((acc,cur)=>cur.price>acc?cur:acc,0) 
// console.log(ans);


// // Calculate total price of Electronics

// // ans=products.filter(val=>val.category==="Electronics").reduce((sum,cur)=>sum + cur.price,0)
// ans=products.reduce((acc,cur)=>{
//     return cur.category==="Electronics"?acc+cur.price:acc
// },0)
// console.log(ans);


// // Students Array
// const students = [
//   { id: 1, name: "Alice", grade: 85 },
//   { id: 2, name: "Bob", grade: 92 },
//   { id: 3, name: "Charlie", grade: 78 },
//   { id: 4, name: "David", grade: 95 },
//   { id: 5, name: "Eva", grade: 88 }
// ];


// // Get all students who scored > 90

// ans=students.filter(x=>x.grade>90)
// console.log(ans);


// // Sort students by grade descending

// ans=students.toSorted((x,y)=> y.grade-x.grade)
// console.log(ans);


// // Calculate average grade

// ans=students.reduce((acc,cur)=>acc+cur.grade,0)
// ans=ans/students.length
// console.log(ans);


// // Find top 3 students

// ans=students.toSorted((x,y)=> y.grade-x.grade)
// ans=ans.slice(0,3)
// console.log(ans);

// // Transform into { name: grade } object

// const nameToGrade = students.reduce((acc, s) => {
//   acc[s.name] = s.grade;
//   return acc;
// }, {});

// console.log(nameToGrade);  //{ Alice: 85, Bob: 92, Charlie: 78, David: 95, Eva: 88 }



// // Books Array
// const books = [
//   { id: 1, title: "1984", author: "George Orwell", year: 1949 },
//   { id: 2, title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
//   { id: 3, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
//   { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 }
// ];


// // Find books published before 1950

// ans=books.filter(x=>x.year<1950)
// console.log(ans);


// // List all book titles

// ans=books.map(x=>x.title)
// console.log(ans);


// // Sort books by year ascending

// ans=books.toSorted((x,y)=> x.year-y.year)
// console.log(ans);


// // Find author of "1984"

// ans=books.find(x=>x.title==="1984")
// console.log(ans);


// // // Count how many books by each author
// const books = [
//   { id: 1, title: "1984", author: "George Orwell", year: 1949 },
//   { id: 2, title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
//   { id: 3, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
//   { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 }
// ];
// const m2=new Map()
// for(let i of books){
//     if(m2.has(i.author)){
//         m2.set(i.author,m2.get(i.author)+1)
//     }else{
//         m2.set(i.author,1)
//     }
// }
// console.log(m2);

// let ans=books.reduce((acc,cur)=>{
//   acc[cur.author]=(acc[cur.author]||0)+1
//   return acc
// },{})
// console.log(ans);

// //  Orders Array
// const orders = [
//   { orderId: 101, customer: "Alice", amount: 250, status: "Delivered" },
//   { orderId: 102, customer: "Bob", amount: 450, status: "Pending" },
//   { orderId: 103, customer: "Alice", amount: 150, status: "Delivered" },
//   { orderId: 104, customer: "Charlie", amount: 300, status: "Cancelled" }
// ];
// const m33=new Map()
// for(let i of orders){
//   console.log(i.customer);
  
//   console.log(i.amount);
//   console.log(m33.get(i.customer));
  
  
//   if(m33.has(i.customer)){
//     m33.set(i.customer,m33.get(i.customer)+i.amount)

//   }else{
//     m33.set(i.customer,i.amount)
//   }
// }
// console.log(m33);

// // // Total amount spent by each customer

// ans=orders.reduce((acc,cur)=>{
//     acc[cur.customer]=(acc[cur.customer]||0)+cur.amount
//     return acc;
// },{})
// console.log(ans);


// // // Filter only delivered orders

// ans=orders.filter(x=>x.status==="Delivered")
// console.log(ans);

// // // Find the highest order amount

// ans=orders.reduce((acc,cur)=>cur.amount>acc?cur.amount:acc,0)
// console.log(ans);


// // // Count orders by status

// const countByStatus = orders.reduce((acc, order) => {
//   acc[order.status] = (acc[order.status] || 0) + 1;
//   return acc;
// }, {});

// console.log(countByStatus);

// // // Transform to { orderId, customer } array

// const orderSummary = orders.map(o => ({ orderId: o.orderId, customer: o.customer }));
// console.log(orderSummary);


// const movies = [
//   { id: 1, title: "Inception", rating: 8.8, genre: "Sci-Fi" },
//   { id: 2, title: "Titanic", rating: 7.8, genre: "Romance" },
//   { id: 3, title: "The Dark Knight", rating: 9.0, genre: "Action" },
//   { id: 4, title: "Interstellar", rating: 8.6, genre: "Sci-Fi" }
// ];

// // Filter movies with rating > 8.5
// ans=movies.filter(x=>x.rating > 8.5)
// console.log(ans);

// // Group movies by genre

// ans=Object.groupBy(movies,x=>{
//     return x.genre;
// })
// console.log(ans);
// //------
// const moviesByGenre = movies.reduce((acc, movie) => {
//   if (!acc[movie.genre]) acc[movie.genre] = [];
//   acc[movie.genre].push(movie);
//   return acc;
// }, {});

// console.log(moviesByGenre);

// // Sort movies by rating descending

// ans=movies.toSorted((x,y)=>y.rating-x.rating)
// console.log(ans);

// // List only movie titles

// ans=movies.map(x=>x.title)
// console.log(ans);


// // Find the highest rated movie in Sci-Fi

// const highestSciFi = movies
//   .filter(m => m.genre === "Sci-Fi")
//   .reduce((max, m) => (m.rating > max.rating ? m : max), { rating: 0 });

// console.log(highestSciFi);



// --------------

// const employees = [
//   { id: 1, name: "John", department: "HR" },
//   { id: 2, name: "Jane", department: "IT" },
//   { id: 3, name: "John", department: "Finance" },
//   { id: 4, name: "Alice", department: "IT" },
//   { id: 2, name: "Jane", department: "IT" }
// ];
// // Problems to try:

// // Find all unique employees by id (keep first).

// const s=new Set()

// ans=employees.filter(val=>{
//     if(s.has(val.id)) return false
//     s.add(val.id)
//     return true
// })
// console.log(ans);

// // Count how many employees are in each department.

// const countDept=employees.reduce((acc,curr)=>{
//     acc[curr.department]=(acc[curr.department]||0)+1
//     return acc
// },{})
// console.log(countDept);


// // List all unique names.

// ans=[...new Set(employees.map(x=>x.name))]
// console.log(ans);


// // Find first duplicate employee by id.

// let dupl=null
// let s3=new Set()

// for(let i of employees){
//     if(s.has(i.id)){
//         dupl=i.name
//         break;
//     }
//     s.add(i.id)
// }

// console.log(dupl);



// // 2️⃣ Inventory Array
const inventory = [
  { sku: "A101", name: "Chair", quantity: 10 },
  { sku: "A102", name: "Table", quantity: 5 },
  { sku: "A101", name: "Chair", quantity: 8 },
  { sku: "A103", name: "Lamp", quantity: 15 }
];

// Merge items with the same SKU, summing their quantities.

const mergedInventory = 
  inventory.reduce((acc, item) => {
    if (acc[item.sku]) {
      acc[item.sku].quantity += item.quantity;
    } else {
      acc[item.sku] = { ...item };
    }
    return acc;
  }, {})


console.log(mergedInventory);


// // Find items with quantity < 10.

// ans=inventory.filter(v=>v.quantity<10)
// console.log(ans);


// // Get an array of all SKUs.

// ans=inventory.map(x=>x.sku)
// console.log(ans);


// // Find the item with the highest quantity.

// ans=mergedInventory.reduce((acc,curr)=>{
//     return curr.quantity>acc.quantity?curr:acc
//     },mergedInventory[0])


// console.log(ans);



// // 3️⃣ Customers Array
// const customers = [
//   { id: 1, name: "Tom", city: "New York" },
//   { id: 2, name: "Jerry", city: "Los Angeles" },
//   { id: 3, name: "Spike", city: "New York" },
//   { id: 2, name: "Jerry", city: "Los Angeles" },
//   { id: 4, name: "Tyke", city: "Chicago" }
// ];

// // Find all unique customers by id.

// ans=customers.filter((val,index)=>{
//     return customers.findIndex(v=>v.id===val.id)===index
// })

// console.log(ans);


// // Group customers by city.

// ans=customers.reduce((acc,cur)=>{
//     if(!acc[cur.city]) acc[cur.city]=[]
//     acc[cur.city].push(cur);
//     return acc
// },{})

// console.log(ans);


// // Count how many customers per city.

// ans=customers.reduce((acc,cur)=>{
//     acc[cur.city]=(acc[cur.city] || 0) +1
//     return acc;
// },{})

// console.log(ans);

// // List all unique names.

// ans=customers.map(val=>val.name)
// ans=[...new Set(ans)]
// console.log(ans);


// // 4️⃣ Transactions Array
// const transactions = [
//   { txId: 1, user: "Alice", amount: 200 },
//   { txId: 2, user: "Bob", amount: 450 },
//   { txId: 3, user: "Alice", amount: 150 },
//   { txId: 4, user: "Charlie", amount: 300 },
//   { txId: 5, user: "Bob", amount: 100 }
// ];

// // Find total amount per user.

// ans=transactions.reduce((acc,cur)=>{
//     acc[cur.user]=(acc[cur.user] || 0)+cur.amount
//     return acc
// },{})
// console.log(ans);


// // Find users with transactions > 200.

// ans=transactions.filter(x=>x.amount>200)
// console.log(ans);


// // List unique users.

// ans=transactions.map(x=>x.user)
// ans=[...new Set(ans)]
// console.log(ans);


// // Find first duplicate transaction by user.

// let s4=new Set
// let fDup=null
// for(let i of transactions){
//     if(s4.has(i.user)){ 
//         fDup=i 
//         break;
//     }else{
//         s4.add(i.user)
//     }

// }

// console.log(fDup);


// // // 5️⃣ Cars Array
// const cars = [
//   { id: 1, brand: "Toyota", model: "Camry", year: 2018 },
//   { id: 2, brand: "Honda", model: "Civic", year: 2020 },
//   { id: 3, brand: "Toyota", model: "Corolla", year: 2019 },
//   { id: 1, brand: "Toyota", model: "Camry", year: 2018 },
//   { id: 4, brand: "Ford", model: "Mustang", year: 2021 }
// ];

// // Find unique cars by id.

// ans=cars.filter((val,index)=>{
//     return cars.findIndex(v=>v.id===val.id)===index
// })

// console.log(ans);


// // Group cars by brand.

// ans=cars.reduce((acc,cur)=>{
//     if(!acc[cur.brand]) acc[cur.brand]=[]
//     acc[cur.brand].push(cur)
//     return acc
// },{})
// console.log(ans);

// // Find the newest car.

// ans=cars.reduce((acc,cur)=>{
//     return cur.year>acc.year?cur:acc

// })

// console.log(ans);

// // Count how many cars per brand.

// ans=cars.reduce((acc,cur)=>{
//     acc[cur.brand]=(acc[cur.brand]||0)+1
//     return acc
// },{})

// console.log(ans);


