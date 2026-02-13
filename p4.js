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
console.log(m);

let p1=employees.map(x=>{
    return{
        ...x,
        projects:x.projects.map(val=>m.get(val))
    }
})
console.log(p1);



// Group employees by project.

let uniqProj=Array.from(m.values())
console.log(uniqProj);

let grpEmp=p1.reduce((acc,cur)=>{
    uniqProj.forEach(x=>{   // cur.projects.forEach(proj => {
        if(cur.projects.includes(x)){
            if(!acc[x]) acc[x]=[]
            acc[x].push(cur.name)
        }
    })
    return acc
},{})
console.log(grpEmp);


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

// let empCount = Object.entries(grpEmp).map(([proj, emp]) => ({
//     project: proj,
//     employees: emp,
//     total_emp: emp.length
// }));

// console.log(empCount);


// wasn't done by me
const sharedProjects = employees.reduce((acc, emp) => {

    const empSet = new Set(emp.projects);
    acc[emp.name] = employees
        .filter(other =>
            other.id !== emp.id &&
            other.projects.some(p => empSet.has(p))
        )
        .map(other => other.name);

    return acc;

}, {});

console.log(sharedProjects);


// {
//   Alice: [ 'Charlie', 'David', 'Eva' ],
//   Bob: [ 'Charlie', 'Eva' ],
//   Charlie: [ 'Alice', 'Bob', 'Eva' ],
//   David: [ 'Alice' ],
//   Eva: [ 'Alice', 'Bob', 'Charlie' ]
// }
