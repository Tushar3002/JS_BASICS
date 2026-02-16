const skills = [
  { id: "s1", name: "JavaScript" },
  { id: "s2", name: "React" },
  { id: "s3", name: "NodeJS" },
  { id: "s4", name: "Python" },
  { id: "s5", name: "Django" },
  { id: "s6", name: "MongoDB" },
];

const employees = [
  { id: 1, name: "Amit", skills: ["s1", "s2", "s3"] },
  { id: 2, name: "Neha", skills: ["s2", "s4"] },
  { id: 3, name: "Rahul", skills: ["s1", "s3"] },
  { id: 4, name: "Priya", skills: ["s4", "s5"] },
  { id: 5, name: "Karan", skills: ["s1", "s3", "s6"] },
];

const projects = [
  { id: "p1", title: "Web App", requiredSkills: ["s1", "s2"] },
  { id: "p2", title: "Backend API", requiredSkills: ["s3", "s6"] },
  { id: "p3", title: "Data Analysis", requiredSkills: ["s4"] },
  { id: "p4", title: "Machine Learning", requiredSkills: ["s4", "s5"] },
];

let skillMap=new Map(skills.map(x=>[x.id,x]))
//🟢 Level 1 – Basic Mapping
// 1 Replace skill IDs in employees with full skill objects

let emp=employees.map(x=>{
    return{
        ...x,
        skills:x.skills.map(y=>skillMap.get(y))
    }
})
// console.log(emp);
// [
//   { id: 1, name: 'Amit', skills: [ [Object], [Object], [Object] ] },
//   { id: 2, name: 'Neha', skills: [ [Object], [Object] ] },
//   { id: 3, name: 'Rahul', skills: [ [Object], [Object] ] },
//   { id: 4, name: 'Priya', skills: [ [Object], [Object] ] },
//   { id: 5, name: 'Karan', skills: [ [Object], [Object], [Object] ] }
// ]

// 2 Replace skill IDs in projects with full skill objects

let proj=projects.map(x=>{
    return{
        ...x,
        requiredSkills:x.requiredSkills.map(y=>skillMap.get(y))
    }
})

// console.log(proj);
// [
//   {
//     id: 'p1',
//     title: 'Web App',
//     requiredSkills: [ [Object], [Object] ]
//   },
//   {
//     id: 'p2',
//     title: 'Backend API',
//     requiredSkills: [ [Object], [Object] ]
//   },
//   { id: 'p3', title: 'Data Analysis', requiredSkills: [ [Object] ] },
//   {
//     id: 'p4',
//     title: 'Machine Learning',
//     requiredSkills: [ [Object], [Object] ]
//   }
// ]

//🟡 Level 2 – Counting & Popularity

// 3️⃣ Count how many employees have each skill

let skillMap2=new Map(skills.map(x=>[x.id,x.name]))

let uniqEmp=employees.map(x=>{
    return{
        ...x,
        skills:x.skills.map(y=>skillMap2.get(y))
    }
})
// console.log(uniqEmp);
// [
//   { id: 1, name: 'Amit', skills: [ 'JavaScript', 'React', 'NodeJS' ] },
//   { id: 2, name: 'Neha', skills: [ 'React', 'Python' ] },
//   { id: 3, name: 'Rahul', skills: [ 'JavaScript', 'NodeJS' ] },
//   { id: 4, name: 'Priya', skills: [ 'Python', 'Django' ] },
//   {
//     id: 5,
//     name: 'Karan',
//     skills: [ 'JavaScript', 'NodeJS', 'MongoDB' ]
//   }
// ]

let countEmp=uniqEmp.reduce((acc,cur)=>{
    cur.skills.forEach(x=>{
        acc[x]=(acc[x]||0)+1
    })
    return acc
},{})

// console.log(countEmp);
// {
//   JavaScript: 3,
//   React: 2,
//   NodeJS: 3,
//   Python: 2,
//   Django: 1,
//   MongoDB: 1
// }


// 4️⃣ Find the most common skill

let mostCommon=Object.entries(countEmp).reduce((acc,cur)=>{
    return cur[1]>acc[1]?cur:acc
})

// console.log(mostCommon);    //[ 'JavaScript', 3 ]

// 🟠 Level 3 – Relationships

// 5️⃣ Find employees who share at least one skill with Amit

let amit=uniqEmp.find(x=>{
    return x.name==="Amit"
})

console.log(amit);

let atleastOne=uniqEmp.filter(x=>{
    return x.name!=="Amit" && 
    x.skills.some(val=> amit.skills.includes(val))
})
console.log(atleastOne);

//-------------------------------------------------------AFTER THIS NON WERE DONE BY ME


// 6️⃣ Find employees whose skills are unique (no one else has the same skills)

let comboMap = {};

uniqEmp.forEach(emp => {
    let key = [...emp.skills].sort().join("|");
    if (!comboMap[key]) comboMap[key] = [];
    comboMap[key].push(emp.name);
});

let uniqueSkillEmployees = Object.values(comboMap)
    .filter(group => group.length === 1)
    .flat();

console.log(uniqueSkillEmployees);

// 7️⃣ Recommend skills to Rahul (skills Rahul doesn’t have but 2+ others have)

let rahul = uniqEmp.find(e => e.name === "Rahul");
let rahulSet = new Set(rahul.skills);

let recommendations = Object.entries(countEmp)
    .filter(([skill, count]) =>
        count >= 2 && !rahulSet.has(skill)
    )
    .map(([skill]) => skill);

console.log(recommendations);


// 8 Employee is eligible if they have all required skills.

let assignment = {};

projects.forEach(project => {
    assignment[project.title] = employees
        .filter(emp =>
            project.requiredSkills.every(skill =>
                emp.skills.includes(skill)
            )
        )
        .map(emp => emp.name);
});

console.log(assignment);


// ⚠️ This works because both use skill IDs.

// 🟣 9️⃣ Detect Identical Skill Sets
let duplicateGroups = Object.values(comboMap)
    .filter(group => group.length > 1);

console.log(duplicateGroups);

// 🔵 🔟 Jaccard Similarity
function similarity(nameA, nameB) {
    let a = uniqEmp.find(e => e.name === nameA);
    let b = uniqEmp.find(e => e.name === nameB);

    let setA = new Set(a.skills);
    let setB = new Set(b.skills);

    let intersection = [...setA].filter(x => setB.has(x)).length;
    let union = new Set([...setA, ...setB]).size;

    return intersection / union;
}

console.log(similarity("Amit", "Karan"));