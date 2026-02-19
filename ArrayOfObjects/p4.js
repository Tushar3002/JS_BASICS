const projects = [
  { id: "p1", name: "Website Redesign" },
  { id: "p2", name: "Mobile App" },
  { id: "p3", name: "Marketing Campaign" },
  { id: "p4", name: "Data Analysis" },
];

const employees = [
  { id: 1, name: "Alice", projects: ["p1", "p3"] },
  { id: 2, name: "Bob", projects: ["p2", "p4"] },
  { id: 3, name: "Charlie", projects: ["p1", "p2", "p4"] },
  { id: 4, name: "David", projects: ["p3"] },
  { id: 5, name: "Eva", projects: ["p1", "p2"] },
];


// Map project IDs → project names.

let m=new Map(projects.map(x=> [x.id,x.name]))
// console.log(m);

let p1=employees.map(x=>{
    return{
        ...x,
        projects:x.projects.map(val=>m.get(val))
    }
})
// console.log(p1);



// Group employees by project.

let uniqProj=Array.from(m.values())
// console.log(uniqProj);

let grpEmp=p1.reduce((acc,cur)=>{
    uniqProj.forEach(x=>{   // cur.projects.forEach(proj => {
        if(cur.projects.includes(x)){
            if(!acc[x]) acc[x]=[]
            acc[x].push(cur.name)
        }
    })
    return acc
},{})
// console.log(grpEmp);
/*
{
  'Website Redesign': [ 'Alice', 'Charlie', 'Eva' ],
  'Marketing Campaign': [ 'Alice', 'David' ],
  'Mobile App': [ 'Bob', 'Charlie', 'Eva' ],
  'Data Analysis': [ 'Bob', 'Charlie' ]
}*/

// Count employees per project.


let countEmp=Object.entries(grpEmp)
console.log(countEmp);


let ans=countEmp.map(([val,key])=>{
    // let len=x[1].length
    return {
        project:val,
        Total_emp:key.length
    }
})
console.log(ans);
/*[
  [ 'Website Redesign', [ 'Alice', 'Charlie', 'Eva' ] ],
  [ 'Marketing Campaign', [ 'Alice', 'David' ] ],
  [ 'Mobile App', [ 'Bob', 'Charlie', 'Eva' ] ],
  [ 'Data Analysis', [ 'Bob', 'Charlie' ] ]
]*/
let empCount = Object.entries(grpEmp).map(([proj, emp]) => ({
    project: proj,
    employees: emp,
    total_emp: emp.length
}));

console.log(empCount);


// wasn't done by me
const sharedProjects = employees.reduce((acc, emp) => {

    const empSet = new Set(emp.projects);
    // console.log(empSet);
    
    acc[emp.name] = employees
        .filter(other =>
            other.id !== emp.id &&
            other.projects.some(p => empSet.has(p))
        )
        .map(other => other.name);

    return acc;

}, {});

// console.log(sharedProjects);
// const projects = [
//   { id: "p1", name: "Website Redesign" },
//   { id: "p2", name: "Mobile App" },
//   { id: "p3", name: "Marketing Campaign" },
//   { id: "p4", name: "Data Analysis" },
// ];

// const employees = [
//   { id: 1, name: "Alice", projects: ["p1", "p3"] },
//   { id: 2, name: "Bob", projects: ["p2", "p4"] },
//   { id: 3, name: "Charlie", projects: ["p1", "p2", "p4"] },
//   { id: 4, name: "David", projects: ["p3"] },
//   { id: 5, name: "Eva", projects: ["p1", "p2"] },
// ];

// {
//   Alice: [ 'Charlie', 'David', 'Eva' ],
//   Bob: [ 'Charlie', 'Eva' ],
//   Charlie: [ 'Alice', 'Bob', 'Eva' ],
//   David: [ 'Alice' ],
//   Eva: [ 'Alice', 'Bob', 'Charlie' ]
// }


let arr3=[4,5,2]

// logic : 452 + 1 =  453

// output : [4,5,3]

let ans3=arr3.join("") 
ans3=Number(ans3)+1
ans3=ans3.toString().split("")
console.log(ans3);

let arr4=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
// [[{},{},{},{},{},{},{},],[{},{},{},{},{},{},{},]...]

// let len=arr4.length
// console.log(len);
// let val=0
// let ans4=arr4.reduce((acc,cur)=>{
//     let i
//     for( i=val;i<len;i++){
//         if(!acc[i]) acc[i]=[]
//         acc[i].push(cur)
//     }
//     val=i
// },{})

// for(let i=)
let emptyArr=[]
let len=arr4.length
for(let i=0;i<len;i+3){
    emptyArr.push(arr4[i])
    // console.log(arr4[i]);
    
}
console.log(emptyArr);


// console.log(Number(0.1)+Number(0.2)===Number(0.3));

// console.log(ans4);
