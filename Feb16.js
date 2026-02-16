// const users = [
//   { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
//   { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
//   { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
//   { id: 4, name: "Rahul", hobbies: ["singing", "reading"] },
//   { id: 5, name: "Neha22", hobbies: ["dancing", "playing", "singing"] }, 
// ];
// let s=new Set()
// users.forEach(x=>{
//     x.hobbies.forEach(v=>{
        
//         s.add(v)
//     })

   
// })
// s=Array.from(s)
// console.log(s);

// let ans=users.reduce((acc,cur)=>{
//     s.forEach(x=>{
//         if(!acc[x]) acc[x]=[]
//         if(cur.hobbies.includes(x)){
//             acc[x].push(cur)
//         }
//     })
//     return acc
// },{})

// console.log(ans);


// const hobbies = [
//   { id: "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0", hobby: "reading" },
//   { id: "ad490814-f1bf-46bb-a0cc-7b146ab0474b", hobby: "writing" },
//   { id: "01408e0a-9582-4fe2-be2d-3fae1197bc8a", hobby: "dancing" },
//   { id: "eba244e2-81f8-49ba-a2fa-9871581f7ddd", hobby: "singing" },
// ];

// const users1 = [
//   {
//     id: 1,
//     name: "Amit",
//     hobbies: [
//       "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
//       "eba244e2-81f8-49ba-a2fa-9871581f7ddd",
//     ],
//   },
//   {
//     id: 2,
//     name: "Neha",
//     hobbies: [
//       "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
//       "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
//     ],
//   },
//   { id: 3, name: "Amit2", hobbies: ["eba244e2-81f8-49ba-a2fa-9871581f7ddd"] },
//   {
//     id: 4,
//     name: "Rahul",
//     hobbies: [
//       "ad490814-f1bf-46bb-a0cc-7b146ab0474b",
//       "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
//       "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
//     ],
//   },
//   {
//     id: 5,
//     name: "Neha22",
//     hobbies: [
//       "01408e0a-9582-4fe2-be2d-3fae1197bc8a",
//       "1b451981-2f77-43e7-b9e1-8c4d5c3d69b0",
//     ],
//   },
// ];

// let hobbyMap=hobbies.map(x=> [x.id,x])
// hobbyMap=new Map(hobbyMap)
// console.log(hobbyMap);

// let ans2=users1.map(x=>{
//     return{
//         ...x,
//         hobbies:x.hobbies.map(y=> hobbyMap.get(y))
//     }
// })

// console.log(ans2);

// //-----------------------------------------------------------------------------------------------

// //  Count Users Per Hobby

// let hobbyMap2=hobbies.map(x=>[x.id,x.hobby])
// hobbyMap2=new Map(hobbyMap2)
// console.log(hobbyMap2);

// let userHob=users1.map(x=>{
//     return{
//         ...x,
//         hobbies:x.hobbies.map(u=>{
//             return hobbyMap2.get(u)
//         })
//     }
// })


// let countUsers=userHob.reduce((acc,cur)=>{
//     cur.hobbies.forEach(x=>{
//         acc[x]=(acc[x]||0)+1
        
//     })
//     return acc
// },{})
// console.log(countUsers);

// // -----------------------------------

// // Get Users Who Share At Least One Hobby With "Amit"

// let amit=userHob.find(x=>x.name==="Amit")
// console.log(amit);

// let ans3=userHob.filter(u=>
//     u.name !== "Amit" &&
//     u.hobbies.some(v=>amit.hobbies.includes(v))
// ).map(x=> x.name)

// console.log(ans3);//[ 'Neha', 'Amit2', 'Rahul', 'Neha22' ]



// // Find Most Popular Hobby

// let [hobby,count]=Object.entries(countUsers).reduce((acc,cur)=>{
//     return cur[1]>acc[1]?cur:acc;

// })
// console.log(hobby); //reading

// console.log({ hobby, count });  //{ hobby: 'reading', count: 4 }

//------------------------------------------------------------------------------------------------------

const courses = [
  { id: "c1", title: "JavaScript" },
  { id: "c2", title: "React" },
  { id: "c3", title: "NodeJS" },
  { id: "c4", title: "MongoDB" },
  { id: "c5", title: "Python" },
];

const students = [
  { id: 1, name: "Amit", courses: ["c1", "c2", "c3"] },
  { id: 2, name: "Neha", courses: ["c2", "c4"] },
  { id: 3, name: "Rahul", courses: ["c1", "c2"] },
  { id: 4, name: "Priya", courses: ["c5","c4"] },
  { id: 5, name: "Karan", courses: ["c1", "c3"] },
];

// Replace Course IDs With Full Course Objects

let courseMap=new Map(courses.map(x=> [x.id,x]))

console.log(courseMap);

ans=students.map(x=>{
    return{
        ...x,
        courses:x.courses.map(y=>courseMap.get(y))
    }
})

console.log(ans);

//Count Students Per Course

// let courseSet=new Set()
// courses.forEach(x=>{
//     courseSet.add(x.title)
// })
let courseMap2=new Map(courses.map(x=> [x.id,x.title]))

let studentsCourse=students.map(x=>{
    return{
        ...x,
        courses:x.courses.map(y=> courseMap2.get(y))
    }
})
console.log(studentsCourse);

let countCourse=studentsCourse.reduce((acc,cur)=>{
    cur.courses.forEach(x=>{
        acc[x]=(acc[x]||0)+1
    })
    return acc
},{})
console.log(countCourse);


//Find Most Popular Course

let [course,count]=Object.entries(countCourse).reduce((acc,cur)=>{
    return cur[1]>acc[1]?cur:acc
})

console.log({course,count});


//Find Students Who Share At Least One Course With "Amit"

let amit=studentsCourse.find(x=> x.name==="Amit")

console.log(amit);

let findStudent = studentsCourse.filter(x=>{
    return x.name !=="Amit" &&
    x.courses.some(y=> amit.courses.includes(y))
})
console.log(findStudent);

//Find Students With Unique Courses

let uniqCourse=studentsCourse.filter(x=>{
    return x.courses.some(val=>countCourse[val]===1)
})
console.log(uniqCourse);

ans=uniqCourse.map(x=>x.name);
console.log(ans);



//Recommend Courses To "Rahul"  -- Copied from GPT


let rahul = studentsCourse.find(s => s.name === "Rahul");
let rahulSet = new Set(rahul.courses);

let recommendation = Object.entries(countCourse)
    .filter(([course, count]) => count >= 2 && !rahulSet.has(course))
    .map(([course]) => course);

console.log(recommendation);


// Detect Students With Identical Course Combinations   -- Copied --

let combinationMap = {};

// Create a key by sorting courses (so order doesn't matter)
studentsCourse.forEach(student => {
    let key = [...student.courses].sort().join("|");
    if (!combinationMap[key]) combinationMap[key] = [];
    combinationMap[key].push(student.name);
});

// Filter only groups with duplicates
let duplicates = Object.values(combinationMap).filter(group => group.length > 1);

console.log(duplicates);





// Calculate Similarity Score Between Two Students  --Copied--

function getSimilarity(nameA, nameB) {
    let a = studentsCourse.find(s => s.name === nameA);
    let b = studentsCourse.find(s => s.name === nameB);

    let setA = new Set(a.courses);
    let setB = new Set(b.courses);

    let intersection = [...setA].filter(x => setB.has(x)).length;
    let union = new Set([...setA, ...setB]).size;

    return intersection / union;
}

console.log(getSimilarity("Amit", "Rahul"));  // Example: 0.666...
console.log(getSimilarity("Amit", "Priya"));  // Example: 0

