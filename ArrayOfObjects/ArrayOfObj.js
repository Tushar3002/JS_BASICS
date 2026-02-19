
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

let userMap=new Map(users.map(x=>[x.id,x]))
// console.log(userMap);

// let userData=users.map(x=>{              --------------------------------WRONG WAY. Give data in array 
//     return x.followers.map(y=>userMap.get(y))
// })

userData=users.map(x=>{
    return{
        ...x,
        followers:x.followers.map(y=> userMap.get(y))
    }
})
// console.log(userData);



// Find most followed user

let mostFollowed=users.reduce((acc,cur)=>{

    return cur.followers.length>acc.followers.length?cur:acc
})

// console.log(mostFollowed);   //{ id: 1, name: 'Amit', followers: [ 2, 3 ] }


// Find most liked post

let mostLiked=posts.reduce((acc,cur)=>{
    return cur.likes.length>acc.likes.length?cur:acc
})
// console.log(mostLiked);

let likedUser=users.find(x=>{
    return x.id === mostLiked.userId
})
console.log(likedUser);

// Suggest people to follow (mutual followers logic)

function suggestFollow(userId){
    let user=userMap.get(userId)
    // console.log(user);

    let suggestSet = new Set()

    user.followers.forEach(userFollow=>{
        let followBy=userMap.get(userFollow)

        // console.log(followBy);
        followBy.followers.forEach(nestedFollow=>{
            if(nestedFollow!==userId && !user.followers.includes(nestedFollow)){
                suggestSet.add(nestedFollow)
            }
        })
        
    })
return [...suggestSet].map(u=>userMap.get(u))
    
}
// console.log(suggestFollow(2));

// const users = [
//   { id: 1, name: "Amit", followers: [2, 3] },
//   { id: 2, name: "Neha", followers: [1] },
//   { id: 3, name: "Rahul", followers: [1, 2] },
// ];

// const posts = [
//   { id: 1, userId: 1, likes: [2, 3] },
//   { id: 2, userId: 2, likes: [1] },
//   { id: 3, userId: 3, likes: [1, 2] },
// ];

// Detect mutual followers

// function mutualFollow(){
//     let mutual=[]

//     users.forEach(uid=>{
//         uid.followers.forEach(followerId=>{
//             let follower=userMap.get(followerId)
//             if(follower.followers.includes(uid.id) && uid.id < followerId){
//                 mutual.push([uid.name,follower.name])
//             }
//         })
//     })
//     return mutual
// }

function commonFollowers(userId1, userId2) {
    let user1 = userMap.get(userId1);
    let user2 = userMap.get(userId2);

    return user1.followers.filter(follower =>
        user2.followers.includes(follower)
    );
}

let commonUser=userMap.get(...commonFollowers(1, 3))
// console.log(commonUser);



// 🧩 3️⃣ Company & Departments
// 📦 Data
const employees = [
  { id: 1, name: "Amit", departmentId: "d1", salary: 80000 },
  { id: 2, name: "Neha", departmentId: "d2", salary: 60000 },
  { id: 3, name: "Rahul", departmentId: "d1", salary: 70000 },
];

const departments = [
  { id: "d1", name: "Engineering" },
  { id: "d2", name: "HR" },
];

// Problems:

// Replace departmentId with full department

let deptMap=new Map(departments.map(x=>[x.id,x]))
// console.log(deptMap);

let empData=employees.map(x=>{
    return{
        ...x,
        departmentId:deptMap.get(x.departmentId),
        salary:x.salary
    }
})
// console.log(empData);


// Find total salary per department

let deptNameMap=new Map(departments.map(x=>[x.id,x.name]))
let empData2=employees.map(x=>{
    return{
        ...x,
        departmentId:deptNameMap.get(x.departmentId),
        salary:x.salary
    }
})

// console.log(empData2);


// let totalSal=empData2.reduce((acc,cur)=>{
//     acc[cur.departmentId]=(acc[cur.departmentId]||0)+cur.salary
//     return acc
// },{})
// console.log(totalSal);


let totalSal2=empData.reduce((acc,cur)=>{
    
    acc[cur.departmentId.name]=(acc[cur.departmentId.name]||0)+cur.salary
    return acc
},{})

// console.log(totalSal2);



// Find highest paid employee per department

let highestPaid=employees.reduce((acc,cur)=>{
    return cur.salary>acc.salary?cur:acc
})
// console.log(highestPaid);


// Find department with highest average salary

let count_Sum=empData.reduce((acc,cur)=>{
    
    if(!acc[cur.departmentId.name]){
        acc[cur.departmentId.name] = {sum:0 , count:0}
    }
    acc[cur.departmentId.name].sum+= cur.salary
    acc[cur.departmentId.name].count+=1
    return acc
},{})
// console.log(count_Sum);


let avgSal={}

for(let i in count_Sum){
    avgSal[i]=count_Sum[i].sum/count_Sum[i].count
}

let highestDeptSal=Object.entries(avgSal).reduce((acc,cur)=>{
    return cur[1]>acc[1]?cur:acc
})

// console.log(highestDeptSal);


/////////////////////More Simpler

let res=departments.map(dept=>{
    let filter=employees.filter(emp=>{
        return dept.id===emp.departmentId
    })

    // console.log(filter);
    let avgSal=filter.reduce((acc,cur)=>{
        return acc+cur.salary /filter.length
        
    },0)
    // console.log(avgSal);

    return{
        Department: dept.name,
        TotalAVGSal: avgSal
    }
    
}).sort((a,b)=>b.TotalAVGSal-a.TotalAVGSal)[0]
// console.log(res);


/*
const employees = [
  { id: 1, name: "Amit", departmentId: "d1", salary: 50000 },
  { id: 2, name: "Neha", departmentId: "d2", salary: 60000 },
  { id: 3, name: "Rahul", departmentId: "d1", salary: 70000 },
];

const departments = [
  { id: "d1", name: "Engineering" },
  { id: "d2", name: "HR" },
];
*/

// 🧩 4️⃣ Library System
// 📦 Data
const books = [
  { id: "b1", title: "JS Basics", author: "John" },
  { id: "b2", title: "React Guide", author: "Mike" },
];

const members = [
  { id: 1, name: "Amit", borrowed: ["b1"] },
  { id: 2, name: "Neha", borrowed: ["b1", "b2"] },
];

// Problems:

// Replace book IDs with book objects

let bookMap=new Map(books.map(x=>[x.id,x]))
let membersData=members.map(x=>{
    return {
        ...x,
        borrowed:x.borrowed.map(val=>bookMap.get(val))
    }
})
// console.log(membersData);


// Find most borrowed book
let mostBorrowed = members.reduce((acc,cur)=>{
    cur.borrowed.forEach(x=>{
        acc[x] = (acc[x]||0)+1
    })
    return acc
},[])

mostBorrowed=Object.entries(mostBorrowed).sort((a,b)=> b[1]-a[1])[0]
console.log(mostBorrowed);

console.log(bookMap);

let ans=bookMap.get(mostBorrowed[0])
console.log(ans);
// console.log(bookMap);


// Find members who borrowed same books     //==NOT DONE BY ME - CHATGPT

function membersWithCommonBooks(members) {
    let result = [];

    for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {

            let common = members[i].borrowed.filter(book =>
                members[j].borrowed.includes(book)
            );

            if (common.length > 0) {
                result.push({
                    members: [members[i].name, members[j].name],
                    commonBooks: common
                });
            }
        }
    }
    return result;
}

console.log(membersWithCommonBooks(members));


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

// 7. Capitalize first letter of every word

let str="hello everyone"

let ans1=str.split(" ").map(x=>x[0].toUpperCase()+x.slice(1)).join(" ")
console.log(ans1);
