
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

