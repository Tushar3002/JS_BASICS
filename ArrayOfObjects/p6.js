const products = [
  { id: "p1", name: "Laptop", category: "Electronics", price: 800 },
  { id: "p2", name: "Phone", category: "Electronics", price: 500 },
  { id: "p3", name: "Shoes", category: "Fashion", price: 100 },
  { id: "p4", name: "Watch", category: "Fashion", price: 200 },
];

const orders = [
  { id: 1, user: "Amit", items: ["p1", "p3","p1"] },
  { id: 2, user: "Neha", items: ["p2"] },
  { id: 3, user: "Rahul", items: ["p1", "p2", "p4"] },
];

// Replace product IDs with full product objects

let productMap=new Map(products.map(x=>[x.id,x]))
console.log(productMap);


// Calculate total amount per order

let priceMap=new Map(products.map(x=>[x.id,x.price]))
// console.log(priceMap);

let orderData=orders.map(x=>{
    return{
        ...x,
        items:x.items.map(v=>priceMap.get(v))
    }
})
// console.log(orderData);

let totalAmt=orderData.map(x=>{
    let tot=x.items.reduce((acc,cur)=> cur+acc,0)
    delete x.items
    return{
        ...x,
        totalAmt:tot
    }
})
console.log(totalAmt);


// Find highest spending user

let highestSpender=totalAmt.reduce((acc,cur)=>{
    return cur.totalAmt>acc.totalAmt?cur:acc
})

console.log(highestSpender);

// Find most sold product

let countP=orders.reduce((acc,cur)=>{
    cur.items.forEach(x=>{
        acc[x]=(acc[x]||0)+1
    })
    
    return acc
},{})


// console.log(countP);

let mostOrdered=Object.entries(countP).sort((a,b)=>b[1]-a[1])[0]
console.log(mostOrdered);

let mostSoldProduct=productMap.get(mostOrdered[0])
console.log(mostSoldProduct);


// Group revenue by category

let groupCategory=orders.reduce((acc,cur)=>{
    cur.items.forEach(x=>{
        let prod=productMap.get(x)
        acc[prod.category]=(acc[prod.category]||0)+prod.price
    })
    return acc
},{})
console.log(groupCategory);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const users = [
  { id: 1, name: "Amit", followers: [2, 3] },
  { id: 2, name: "Neha", followers: [1] },
  { id: 3, name: "Tushar", followers: [1, 2,3] },
];

const posts = [
  { id: 1, userId: 1, likes: [2, 3] },
  { id: 2, userId: 2, likes: [1] },
  { id: 3, userId: 3, likes: [1, 2] },
];

// Replace follower IDs with user objects

let userMap=new Map(users.map(x=>[x.id,x]))

let userData=users.map(x=>{
    return{
        ...x,
        followers:x.followers.map(val=> userMap.get(val))
    }
})
// console.log(userData);


// Find most followed user

let mostFollowed=users.reduce((acc,cur)=>{
    return cur.followers.length>acc.followers.length?cur:acc
})
console.log(mostFollowed);


// Find most liked post
let mostLiked=posts.reduce((acc,cur)=>{
    return cur.likes.length>acc.likes.length?cur:acc
})
console.log(mostLiked); 


//Suggest Users to follow

function suggestFollow(userId){
    let user=userMap.get(userId)
    let s = new Set()
    user.followers.forEach(x=>{
        let followedBy=userMap.get(x)

        followedBy.followers.forEach(nested=>{
            if(nested!==userId && !user.followers.includes(nested)){
                s.add(nested)
            }
        })
    })
    return [...s].map(x=>userMap.get(x))
}

console.log(suggestFollow(2));


//find Common followers of two users

function CommonFollowers(userId1,userId2){
    let user1=userMap.get(userId1)
    let user2=userMap.get(userId2)
    return user1.followers.filter(x=>{
        return user2.followers.includes(x)
    })
}
let ans=CommonFollowers(1,3).map(x=>userMap.get(x))

console.log(ans);
