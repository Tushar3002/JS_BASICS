const data = {
  a: 5,
  b: {
    c: 10,
    d: {
      e: 20
    }
  },
  f: 15
};

// function sum2(data){ ----WRONG
//     let s=0
//     Object.values(data).reduce((acc,cur)=>{
        
//             if(typeof(cur)=="object"){
//                 sum(cur)
//             }
//             else{
//                 acc +=cur
//                 s=acc
//             }
        
//         return acc
//     },0)
//     return s
// }
// console.log(sum2(data));

function sum(data){
    let s=0
    let val=Object.values(data)

    for(let i of val){
        //  console.log(typeof(i));
        // console.log(i);
        
        if(typeof(i)==="object" && i!=="null"){
            s +=sum(i)
        }
        else{
            // console.log("Value of S: " + s);
            
            s=s+i
            // console.log("Value od S : " + s+ "Value of i : "+i);
            
            // console.log("Loop - " , s);
            
        }
    }
    return s
    
}
// console.log(sum(data));


// console.log(Object.entries(data));
// console.log(Object.keys(data));
// console.log(Object.values(data));


// ### 2️⃣ Count Total Keys in Deep Object

// Return how many keys exist in a deeply nested object.


const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};

// console.log(Object.values(obj));
// let m= new Map(Object.entries(obj))
// console.log(m.size);



// console.log(Object.entries(obj));

function count(obj){
    let cnt=0
    let val=Object.values(obj)
    for(let i of val){
        cnt +=1
        if(typeof(i)=="object" && i !== "null"){
            cnt+=count(i)
        }
    }
    return cnt

}


// console.log(count(obj));

// Expected result: `6`

// ---

// ## 🟡 Level 2 – Nested Arrays

// ### 3️⃣ Flatten Deep Array

// Write your own version of `.flat(Infinity)` recursively.


const arr = [1, [2, [3, 4], 5], 6];
function flat(arr){
    let ans=[]
    for(let i of arr){
        // console.log("I is : " + i);
        
        if(Array.isArray(i)){
            // console.log("in the condition I is : " + i);
            ans=ans.concat(flat(i))
        }else
        {
            // console.log("ans before : "+ans);
            
            ans.push(i)

            // console.log("ans Afetr : "+ ans);
            
        }
    }
    return ans
    
    
}
// console.log(flat(arr));  


function depthflat(arr,depth){
    let ans=[]
    for(let i of arr){
        // console.log("I is : " + i);
        
        if(Array.isArray(i) && depth>0){
            // console.log("in the condition I is : " + i);
            ans=ans.concat(depthflat(i,depth-1))
        }else
        {
            // console.log("ans before : "+ans);
            
            ans.push(i)

            // console.log("ans Afetr : "+ ans);
            
        }
    }
    return ans
    
    
}
// console.log(depthflat(arr,1));  


// Expected result:

// ```js
// [1, 2, 3, 4, 5, 6]
// ```



// ### 4️⃣ Sum Only Even Numbers in Nested Array


const arr2 = [1, [2, [3, 4], 6], 7];

function sumEven(arr){
    let sum=0
    for(let i of arr){
        if(Array.isArray(i)){
            sum += sumEven(i)
        }else{
            if(i%2===0){
                sum += i
            }
        }
    }
    return sum
}
// console.log(sumEven(arr2));


// Expected result:
// `2 + 4 + 6 = 12`

// ---

// ## 🟠 Level 3 – Array of Objects

// ### 5️⃣ Count Total Comments in Nested Comment Tree

const comments = [
  {
    id: 1,
    text: "Hello",
    replies: [
      {
        id: 2,
        text: "Reply 1",
        replies: []
      },
      {
        id: 3,
        text: "Reply 2",
        replies: [
          {
            id: 4,
            text: "Nested reply",
            replies: []
          }
        ]
      }
    ]
  }
];

function countComments(comments){
    let cnt=0
    comments.forEach(i=>{
        cnt+=1
        cnt+=countComments(i.replies)
    })
        
    return cnt
    
}
console.log(countComments(comments));



// 👉 Return total number of comments (including nested ones).
// Expected: `4`

// ---

// ### 6️⃣ Find Object by ID in Deep Tree

// Using the same `comments` structure:

// 👉 Write a recursive function that returns the object with `id = 4`.

function findComment(comments){
    for(let x of comments){
        if(x.id === 4){
            return x
        }
        const find=findComment(x.replies)

        if(find){
            return find
        }
    }
    return null
}
// console.log(findComment(comments));


// ---

// ### 7️⃣ Get All Employee Names in Organization Tree


const org = {
  name: "CEO",
  subordinates: [
    {
      name: "Manager 1",
      subordinates: [
        { name: "Dev 1", subordinates: [] },
        { name: "Dev 2", subordinates: [] }
      ]
    },
    {
      name: "Manager 2",
      subordinates: []
    }
  ]
};


function getName(org){
    let names=[org.name]
    for(let i of org.subordinates){
        names.push(...getName(i));
    }
    return names
}
// console.log(getName(org));

// console.log([org.name]);


// Expected output:

// ```js
// ["CEO", "Manager 1", "Dev 1", "Dev 2", "Manager 2"]
// ```

// ---

// ## 🔴 Level 4 – Real Interview Level

// ### 8️⃣ Deep Filter

// Given a nested array of objects:

const data2 = [
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "file",
        name: "index.js"
      },
      {
        type: "folder",
        name: "components",
        children: [
          { type: "file", name: "App.js" } 
        ]
      }
    ]
  }
];

function fileFilter(data){
    let arr=[]
    data.forEach(x=>{
        if(x.type === "file"){
            arr.push(x)
        }
        if(x.children){
            arr.push(...fileFilter(x.children))
        }
    })
    return arr
}
// console.log(fileFilter(data2));



// Expected:

// ```js
// [
//   { type: "file", name: "index.js" },
//   { type: "file", name: "App.js" }
// ]
// ```

// ---

// ### 9️⃣ Deep Clone Without JSON Methods

// Write a recursive function to deeply clone:

// * Objects
// * Arrays
// * Nested combinations

// ⚠️ Cannot use:

// * `JSON.parse`
// * `JSON.stringify`
// * `structuredClone`

function deepClone(value) {
    // Base case: primitive types or functions
    if (value === null || typeof value !== "object") {
        return value;
    }

    // Handle arrays
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }

    // Handle objects
    const clone = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            clone[key] = deepClone(value[key]);
        }
    }

    return clone;
}

// console.log(deepClone(comments));


// ---

// ### 🔥 10️⃣ Transform Tree Structure

// Convert:


let tree=[
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 }
]



function buildTree(flat, parentId = null) { ////HARDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
    const tree = [];

    flat
        .filter(item => item.parentId === parentId)
        .forEach(item => {
            const newNode = { id: item.id, children: buildTree(flat, item.id) };
            tree.push(newNode);
        });

    return tree;
}

console.log(buildTree(tree));


// // Into:

// [
//   {
//     id: 1,
//     children: [
//       {
//         id: 2,
//         children: [
//           { id: 4, children: [] }
//         ]
//       },
//       {
//         id: 3,
//         children: []
//       }
//     ]
//   }
// ]
// # ⚡ If You Want Even Harder

// Tell me your level:

// * Beginner
// * Intermediate
// * Interview prep
// * FAANG-level recursion insanity

// And I’ll generate custom problems tailored exactly to push you 🚀



// //---------------------------------------------------------------------------------------------------------------------
// 🟢 Level 1 – Nested Objects
// Sum all numeric values in a nested object
let t1={ a: 5, b: { c: 10, d: { e: 20 } }, f: 15 }

function prog1(t1){
    let sum=0
    for(let i of Object.values(t1)){
        if(typeof i === "object"){
            sum += prog1(i)
        }else{
            sum+=i
        }
    }
    return sum
}
console.log(prog1(t1));


// function sumEven(number) {
//     if (number===0) {
//         return 0;
//     } else if (number%2 !== 0) {
//         return sumEven(number-1);
//     }
//     return number + sumEven(number-1);
// }

// console.log(sumEven(10));

// Count total keys in a deep object

let t2={ a: 1, b: { c: 2, d: { e: 3, f: 4 } } }

// Output: 6

function countKeys(data){
    let cnt=0
    for(let i of Object.values(data)){
        cnt +=1
        if(typeof i === "object"){
            cnt+=countKeys(i)
        }

    }
    return cnt
}

console.log(countKeys(t2));

// -----------------------------------------------------------  FLOOR ---------------------------------------------------
//👉 Rename every "userName" key to "username" recursively.
let data3 = {
  user: {
    userName: "dev",
    details: {
      userName: "admin"
    }
  }
};

function renameData(data){
    for(let i in data){
        if(i==="userName"){
            data["username"]=data[i]
            delete data[i]
        }
        if(typeof data[i] === "object"){
            renameData(data[i])
        }
    }
    return data
}

console.log(renameData(data3));
// console.log(Object.entries(data3));
// console.log(Object.keys(data3));
// console.log(Object.values(data3));

// 2️⃣ Find All Even Numbers in Mixed Structure
let data4 = {
  a: 1,
  b: [2, 3, { c: 4 }],
  d: { e: 6 }
};
// 👉 Return array of all even numbers.

function getEven(data){
    let arr=[]

    function eachValue(val){
        if(typeof val === "number" && val % 2 ===0){
            arr.push(val)
        }
        else if(Array.isArray(val)){
            for(let i of val){
                eachValue(i)
            }
        }
        else if(typeof val ==="object"){
            for(let i in val){  //for(let i of Object.values(val)){
                eachValue(val[i])
            }
        }
    }
    eachValue(data)
    return arr

}
console.log(getEven(data4));

//  4️⃣ Count How Many Times Key Appears

// 👉 Count occurrences of key "a".


function countOcc(data){
    let cnt=0
    for(let i of Object.values(data)){
        cnt+=1
        if(typeof i === "object"){
            cnt+=countOcc(i)
        }
    }
    return cnt
}
// console.log(countOcc(data5));

// function countSpecOcc(data, target) {
//   let cnt = 0;

//   for (let key in data) {

//     // Count matching value
//     if (data[key] === target) {
//       cnt++;
//     }

//     // Recurse into nested object/array
//     if (typeof data[key] === "object" && data[key] !== null) {
//       cnt += countSpecOcc(data[key], target);
//     }
//   }

//   return cnt;
// }

// function countSpecOcc(data,target){
//     let cnt=0
//     for(let i of Object.keys(data)){
//         if(data[i]===target){
//             cnt+=1
//         }
//         if(typeof data[i] === "object"){
//              if(data[i]===target){
//                 cnt+=countSpecOcc(data[i],target)
//             }
            
//         }
//     }
//     return cnt
// }

let data5 = {
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
    }
  }
};
// function countSpecOcc(data, target) {
//   let cnt = 0;

//   for (let i of Object.keys(data)) {

//     // Count value match
//     if (data[i] === target) {
//       cnt += 1;
//     }

//     // Recurse if it's an object (array included)
//     if (typeof data[i] === "object" && data[i] !== null) {
//       cnt += countSpecOcc(data[i], target);
//     }
//   }

//   return cnt;
// }
function countSpecKey(data, targetKey) {
  let cnt = 0;

  for (let key of Object.keys(data)) {
    // Count key match
    if (key === targetKey) {
      cnt++;
    }

    // Recurse into objects
    if (typeof data[key] === "object" && data[key] !== null) {
      cnt += countSpecKey(data[key], targetKey);
    }
  }

  return cnt;
}

console.log(countSpecKey(data5, 'a')); // ✅ Output: 3


console.log(Object.keys(data5));
