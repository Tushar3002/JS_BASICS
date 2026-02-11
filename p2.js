const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" },
  { id: 1, name: "Amit" },   // duplicate
  { id: 3, name: "Rahul" },
  { id: 2, name: "Neha" }    // duplicate
];

let ans=users.filter((user,index)=>{
    return users.findIndex(u=>u.id===user.id)===index
})

console.log(ans);

//Map

let m=new Map()

ans=users.filter(x=>{
    if(m.has(x.id)) return false
    m.set(x.id,x)
    return true;
})

console.log(ans);


//set 
let s=new Set()

ans=users.filter(x=>{
    if(s.has(x.id)) return false
    s.add(x.id)
    return true
})

console.log(ans)

let s1=new Set()
let arr=[]
for(let i of users){
    if(!s1.has(i.id)){
        s1.add(i.id)
        arr.push(i)
    }
}

console.log(arr);


const m1=new Map()

for(let i of users){
    m1.set(i.id,i)
}

ans=Array.from(m1.values())

console.log(ans);


const arr1=[
    {city:"Rajkot"},
    {city:"Rajkot"},
    {city:"AMD"},
    {city:"Rajkot"},
]

ans=arr1.reduce((val,cur)=>{
    val[cur.city]=(val[cur.city]||0) +1
    return val
},{})

console.log(ans);
let text = "ABCDEFG";
const myA=Array.from(text);
console.log(myA);
