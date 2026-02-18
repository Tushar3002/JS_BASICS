// ===========================
// Master Data Manipulation File
// ===========================

// Utility Functions

```js
const arrayToMap = (arr, key = 'id') => new Map(arr.map(item => [item[key], item]));
const countOccurrences = (arr) => arr.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
const getMaxEntry = (obj) => Object.entries(obj).reduce((acc, cur) => cur[1] > acc[1] ? cur : acc);
const getUnique = (arr) => [...new Set(arr)];
const similarityScore = (arrA, arrB) => {
    const setA = new Set(arrA), setB = new Set(arrB);
    const intersection = [...setA].filter(x => setB.has(x));
    const union = new Set([...setA, ...setB]);
    return intersection.length / union.size;
};

// ===========================
// Hobbies Example
// ===========================
const users = [
    { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
    { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
    { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
];

const allHobbies = getUnique(users.flatMap(u => u.hobbies));
const usersByHobby = allHobbies.reduce((acc, h) => {
    acc[h] = users.filter(u => u.hobbies.includes(h));
    return acc;
}, {});
console.log('Users by Hobby:', usersByHobby);

// ===========================
// Courses Example
// ===========================
const courses = [
    { id: "c1", title: "JavaScript" },
    { id: "c2", title: "React" },
    { id: "c3", title: "NodeJS" },
];

const students = [
    { id: 1, name: "Amit", courses: ["c1", "c2"] },
    { id: 2, name: "Neha", courses: ["c2", "c3"] },
];

const courseMap = arrayToMap(courses);
const studentsWithCourses = students.map(s => ({
    ...s,
    courses: s.courses.map(cid => courseMap.get(cid))
}));

const courseCounts = countOccurrences(students.flatMap(s => s.courses));
console.log('Students with full courses:', studentsWithCourses);
console.log('Course counts:', courseCounts);

// ===========================
// Products & Orders Example
// ===========================
const products = [
    { id: "p1", name: "Laptop", category: "Electronics", price: 800 },
    { id: "p2", name: "Phone", category: "Electronics", price: 500 },
];

const orders = [
    { id: 1, user: "Amit", items: ["p1", "p2"] },
];

const productMap = arrayToMap(products);
const ordersWithProducts = orders.map(o => ({
    ...o,
    items: o.items.map(pid => productMap.get(pid))
}));

const totalAmountPerOrder = ordersWithProducts.map(o => ({
    ...o,
    total: o.items.reduce((sum, p) => sum + p.price, 0)
}));

console.log('Orders with Products:', ordersWithProducts);
console.log('Total amount per order:', totalAmountPerOrder);

// ===========================
// Social Media Example
// ===========================
const smUsers = [
    { id: 1, name: "Amit", followers: [2, 3] },
    { id: 2, name: "Neha", followers: [1] },
];

const smUserMap = arrayToMap(smUsers);
const smUsersExpanded = smUsers.map(u => ({
    ...u,
    followers: u.followers.map(fid => smUserMap.get(fid))
}));

function suggestFollow(userId) {
    const user = smUserMap.get(userId);
    const suggestions = new Set();
    user.followers.forEach(fid => {
        smUserMap.get(fid).followers.forEach(ffid => {
            if (ffid !== userId && !user.followers.includes(ffid)) suggestions.add(ffid);
        });
    });
    return [...suggestions].map(fid => smUserMap.get(fid));
}

console.log('Social media expanded:', smUsersExpanded);
console.log('Follow suggestions for 2:', suggestFollow(2));

// ===========================
// Library Example
// ===========================
const books = [
    { id: "b1", title: "JS Basics" },
    { id: "b2", title: "React Guide" },
];

const members = [
    { id: 1, name: "Amit", borrowed: ["b1"] },
    { id: 2, name: "Neha", borrowed: ["b1", "b2"] },
];

const bookMap = arrayToMap(books);
const membersExpanded = members.map(m => ({
    ...m,
    borrowed: m.borrowed.map(bid => bookMap.get(bid))
}));

const borrowCounts = countOccurrences(members.flatMap(m => m.borrowed));
const mostBorrowedBook = bookMap.get(getMaxEntry(borrowCounts)[0]);

console.log('Members expanded:', membersExpanded);
console.log('Most borrowed book:', mostBorrowedBook);

// ===========================
// Similarity Example
// ===========================
console.log('Similarity Amit vs Neha:', similarityScore(
    membersExpanded[0].borrowed.map(b => b.id),
    membersExpanded[1].borrowed.map(b => b.id)
));


//---------------------------------------------------------------------------------------------------------

// ===========================
// MASTER DATA MANIPULATION FILE
// ===========================

// ---------------------------
// Utility Functions
// ---------------------------
const arrayToMap = (arr, key = 'id') => new Map(arr.map(item => [item[key], item]));
const countOccurrences = (arr) => arr.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
const getMaxEntry = (obj) => Object.entries(obj).reduce((acc, cur) => cur[1] > acc[1] ? cur : acc);
const getUnique = (arr) => [...new Set(arr)];
const similarityScore = (arrA, arrB) => {
    const setA = new Set(arrA), setB = new Set(arrB);
    const intersection = [...setA].filter(x => setB.has(x));
    const union = new Set([...setA, ...setB]);
    return intersection.length / union.size;
};

// ---------------------------
// 1️⃣ Hobbies System
// ---------------------------
const users = [
    { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
    { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
    { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
];

const allHobbies = getUnique(users.flatMap(u => u.hobbies));
const usersByHobby = allHobbies.reduce((acc, h) => {
    acc[h] = users.filter(u => u.hobbies.includes(h));
    return acc;
}, {});

console.log('Users by Hobby:', usersByHobby);

// ---------------------------
// 2️⃣ Courses & Students
// ---------------------------
const courses = [
    { id: "c1", title: "JavaScript" },
    { id: "c2", title: "React" },
    { id: "c3", title: "NodeJS" },
];

const students = [
    { id: 1, name: "Amit", courses: ["c1", "c2"] },
    { id: 2, name: "Neha", courses: ["c2", "c3"] },
];

const courseMap = arrayToMap(courses);
const studentsWithCourses = students.map(s => ({
    ...s,
    courses: s.courses.map(cid => courseMap.get(cid))
}));

const courseCounts = countOccurrences(students.flatMap(s => s.courses));
console.log('Students with full courses:', studentsWithCourses);
console.log('Course counts:', courseCounts);

// Students who share at least one course with Amit
const amitCourses = studentsWithCourses.find(s => s.name === "Amit").courses.map(c => c.id);
const sharedWithAmit = studentsWithCourses.filter(s => s.name !== "Amit" &&
    s.courses.some(c => amitCourses.includes(c.id))
).map(s => s.name);

console.log('Students sharing a course with Amit:', sharedWithAmit);

// Recommend courses to Rahul
const rahulCourses = studentsWithCourses.find(s => s.name === "Rahul")?.courses.map(c => c.id) || [];
const rahulSet = new Set(rahulCourses);
const recommendedCourses = Object.entries(courseCounts)
    .filter(([courseId, count]) => count >= 2 && !rahulSet.has(courseId))
    .map(([courseId]) => courseMap.get(courseId).title);

console.log('Recommended courses for Rahul:', recommendedCourses);

// ---------------------------
// 3️⃣ Products & Orders
// ---------------------------
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

const productMap = arrayToMap(products);
const ordersWithProducts = orders.map(o => ({
    ...o,
    items: o.items.map(pid => productMap.get(pid))
}));

// Total amount per order
const totalAmountPerOrder = ordersWithProducts.map(o => ({
    ...o,
    total: o.items.reduce((sum, p) => sum + p.price, 0)
}));

console.log('Orders with products:', ordersWithProducts);
console.log('Total amount per order:', totalAmountPerOrder);

// Highest spending user
const highestSpender = totalAmountPerOrder.reduce((acc, cur) => cur.total > acc.total ? cur : acc);
console.log('Highest spending user:', highestSpender);

// Most sold product
const productCount = countOccurrences(orders.flatMap(o => o.items));
const mostSoldProduct = productMap.get(getMaxEntry(productCount)[0]);
console.log('Most sold product:', mostSoldProduct);

// Revenue by category
const revenueByCategory = orders.flatMap(o => o.items.map(pid => productMap.get(pid)))
    .reduce((acc, p) => (acc[p.category] = (acc[p.category] || 0) + p.price, acc), {});
console.log('Revenue by category:', revenueByCategory);

// ---------------------------
// 4️⃣ Social Media System
// ---------------------------
const smUsers = [
    { id: 1, name: "Amit", followers: [2, 3] },
    { id: 2, name: "Neha", followers: [1] },
    { id: 3, name: "Rahul", followers: [1, 2] },
];

const smUserMap = arrayToMap(smUsers);
const smUsersExpanded = smUsers.map(u => ({
    ...u,
    followers: u.followers.map(fid => smUserMap.get(fid))
}));

console.log('Social Media Users:', smUsersExpanded);

// Suggest follows based on mutual followers
function suggestFollow(userId) {
    const user = smUserMap.get(userId);
    const suggestions = new Set();
    user.followers.forEach(fid => {
        smUserMap.get(fid).followers.forEach(ffid => {
            if (ffid !== userId && !user.followers.includes(ffid)) suggestions.add(ffid);
        });
    });
    return [...suggestions].map(fid => smUserMap.get(fid));
}
console.log('Follow suggestions for user 2:', suggestFollow(2));

// Detect mutual followers
function mutualFollowers() {
    const mutuals = [];
    smUsers.forEach(u => {
        u.followers.forEach(fid => {
            const follower = smUserMap.get(fid);
            if (follower.followers.includes(u.id) && u.id < fid) mutuals.push([u.name, follower.name]);
        });
    });
    return mutuals;
}
console.log('Mutual followers:', mutualFollowers());

// ---------------------------
// 5️⃣ Company & Departments
// ---------------------------
const employees = [
    { id: 1, name: "Amit", departmentId: "d1", salary: 80000 },
    { id: 2, name: "Neha", departmentId: "d2", salary: 60000 },
    { id: 3, name: "Rahul", departmentId: "d1", salary: 70000 },
];

const departments = [
    { id: "d1", name: "Engineering" },
    { id: "d2", name: "HR" },
];

const deptMap = arrayToMap(departments);
const employeesExpanded = employees.map(e => ({
    ...e,
    department: deptMap.get(e.departmentId)
}));

// Total salary per department
const totalSalaryDept = employeesExpanded.reduce((acc, e) => {
    acc[e.department.name] = (acc[e.department.name] || 0) + e.salary;
    return acc;
}, {});
console.log('Total salary per department:', totalSalaryDept);

// Highest paid per department
const highestPaidPerDept = departments.map(d => {
    const emps = employeesExpanded.filter(e => e.department.name === d.name);
    return { department: d.name, employee: emps.reduce((a, c) => c.salary > a.salary ? c : a) };
});
console.log('Highest paid per department:', highestPaidPerDept);

// Department with highest average salary
const avgSalaryDept = departments.map(d => {
    const emps = employeesExpanded.filter(e => e.department.name === d.name);
    return { department: d.name, avgSalary: emps.reduce((s, e) => s + e.salary, 0) / emps.length };
}).sort((a, b) => b.avgSalary - a.avgSalary)[0];
console.log('Department with highest average salary:', avgSalaryDept);

// ---------------------------
// 6️⃣ Library System
// ---------------------------
const books = [
    { id: "b1", title: "JS Basics", author: "John" },
    { id: "b2", title: "React Guide", author: "Mike" },
];

const members = [
    { id: 1, name: "Amit", borrowed: ["b1"] },
    { id: 2, name: "Neha", borrowed: ["b1", "b2"] },
];

const bookMap = arrayToMap(books);
const membersExpanded = members.map(m => ({
    ...m,
    borrowed: m.borrowed.map(bid => bookMap.get(bid))
}));

// Most borrowed book
const borrowCounts = countOccurrences(members.flatMap(m => m.borrowed));
const mostBorrowedBook = bookMap.get(getMaxEntry(borrowCounts)[0]);
console.log('Most borrowed book:', mostBorrowedBook);

// Members with common books
function membersWithCommonBooks(members) {
    const result = [];
    for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
            const common = members[i].borrowed.filter(book => members[j].borrowed.includes(book));
            if (common.length > 0) result.push({ members: [members[i].name, members[j].name], commonBooks: common });
        }
    }
    return result;
}
console.log('Members with common books:', membersWithCommonBooks(members.flatMap(m => m.borrowed)));

// ---------------------------
// 7️⃣ Similarity Scores
// ---------------------------
console.log('Similarity Amit vs Neha:', similarityScore(
    membersExpanded[0].borrowed.map(b => b.id),
    membersExpanded[1].borrowed.map(b => b.id)
));


// ===========================
// GENERIC DATA TOOLKIT
// ===========================

// ---------------------------
// 1️⃣ Utility Functions
// ---------------------------

// Convert array to map by key
const arrayToMap = (arr, key = 'id') => new Map(arr.map(item => [item[key], item]));

// Group array items by a function or property
const groupBy = (arr, fn) => arr.reduce((acc, item) => {
    const key = typeof fn === 'function' ? fn(item) : item[fn];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});

// Count occurrences of values in an array (or transform with function)
const countBy = (arr, fn = x => x) => arr.reduce((acc, item) => {
    const key = fn(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
}, {});

// Get entry with max value from an object
const maxBy = (obj) => Object.entries(obj).reduce((max, curr) => curr[1] > max[1] ? curr : max);

// Replace IDs with objects using a Map
const replaceIdsWithObjects = (arr, field, map) => arr.map(item => ({
    ...item,
    [field]: item[field].map(id => map.get(id))
}));

// Get unique values from array
const getUnique = (arr) => [...new Set(arr)];

// Compute similarity score between two arrays
const similarityScore = (arrA, arrB) => {
    const setA = new Set(arrA), setB = new Set(arrB);
    const intersection = [...setA].filter(x => setB.has(x));
    const union = new Set([...setA, ...setB]);
    return intersection.length / union.size;
};

// ---------------------------
// 2️⃣ Examples Using Toolkit
// ---------------------------

// Hobbies Example
const users = [
    { id: 1, name: "Amit", hobbies: ["reading", "playing"] },
    { id: 2, name: "Neha", hobbies: ["dancing", "gaming"] },
    { id: 3, name: "Amit2", hobbies: ["reading", "playing"] },
];

const allHobbies = getUnique(users.flatMap(u => u.hobbies));
const usersByHobby = groupBy(users.flatMap(u => u.hobbies.map(h => ({ hobby: h, user: u.name }))), 'hobby');
console.log('Users by Hobby:', usersByHobby);

// Courses Example
const courses = [
    { id: "c1", title: "JavaScript" },
    { id: "c2", title: "React" },
    { id: "c3", title: "NodeJS" },
];

const students = [
    { id: 1, name: "Amit", courses: ["c1", "c2"] },
    { id: 2, name: "Neha", courses: ["c2", "c3"] },
];

const courseMap = arrayToMap(courses);
const studentsWithCourses = replaceIdsWithObjects(students, 'courses', courseMap);

const courseCounts = countBy(students.flatMap(s => s.courses));
console.log('Course counts:', courseCounts);

const sharedWithAmit = studentsWithCourses.filter(s =>
    s.name !== "Amit" && s.courses.some(c => studentsWithCourses.find(st => st.name === "Amit").courses.includes(c))
).map(s => s.name);
console.log('Students sharing a course with Amit:', sharedWithAmit);

// Products & Orders Example
const products = [
    { id: "p1", name: "Laptop", category: "Electronics", price: 800 },
    { id: "p2", name: "Phone", category: "Electronics", price: 500 },
    { id: "p3", name: "Shoes", category: "Fashion", price: 100 },
];

const orders = [
    { id: 1, user: "Amit", items: ["p1", "p3"] },
    { id: 2, user: "Neha", items: ["p2"] },
];

const productMap = arrayToMap(products);
const ordersWithProducts = replaceIdsWithObjects(orders, 'items', productMap);

// Total per order
const totalPerOrder = ordersWithProducts.map(o => ({
    ...o,
    total: o.items.reduce((sum, p) => sum + p.price, 0)
}));
console.log('Total per order:', totalPerOrder);

// Most sold product
const productCount = countBy(orders.flatMap(o => o.items));
const mostSoldProduct = productMap.get(maxBy(productCount)[0]);
console.log('Most sold product:', mostSoldProduct);

// Social Media Example
const smUsers = [
    { id: 1, name: "Amit", followers: [2, 3] },
    { id: 2, name: "Neha", followers: [1] },
];

const smUserMap = arrayToMap(smUsers);
const smUsersExpanded = replaceIdsWithObjects(smUsers, 'followers', smUserMap);
console.log('Social Media Users:', smUsersExpanded);

// Library Example
const books = [
    { id: "b1", title: "JS Basics", author: "John" },
    { id: "b2", title: "React Guide", author: "Mike" },
];

const members = [
    { id: 1, name: "Amit", borrowed: ["b1"] },
    { id: 2, name: "Neha", borrowed: ["b1", "b2"] },
];

const bookMap = arrayToMap(books);
const membersExpanded = replaceIdsWithObjects(members, 'borrowed', bookMap);

// Most borrowed book
const borrowCounts = countBy(members.flatMap(m => m.borrowed));
const mostBorrowedBook = bookMap.get(maxBy(borrowCounts)[0]);
console.log('Most borrowed book:', mostBorrowedBook);

// Similarity Example
console.log('Similarity Amit vs Neha:', similarityScore(
    membersExpanded[0].borrowed.map(b => b.id),
    membersExpanded[1].borrowed.map(b => b.id)
));


// ===========================
// 🔹 GENERIC TOOLKIT (Reusable & One-liner)
// ===========================

const arrayToMap = (arr, key = 'id') => new Map(arr.map(i => [i[key], i]));
const groupBy = (arr, fn) => arr.reduce((acc, i) => ((acc[typeof fn==='function'?fn(i):i[fn]] ||= []).push(i), acc), {});
const countBy = (arr, fn = x => x) => arr.reduce((acc, i) => (acc[fn(i)] = (acc[fn(i)]||0)+1, acc), {});
const maxBy = obj => Object.entries(obj).reduce((a,b)=>b[1]>a[1]?b:a);
const replaceIdsWithObjects = (arr, field, map) => arr.map(x=>({...x,[field]:x[field].map(id=>map.get(id))}));
const getUnique = arr => [...new Set(arr)];
const similarityScore = (a,b) => {let sA=new Set(a), sB=new Set(b); let inter=[...sA].filter(x=>sB.has(x)); return inter.length / new Set([...sA,...sB]).size};

// ===========================
// 1️⃣ Hobbies Example
// ===========================
const users = [
  { id: 1, name: "Amit", hobbies: ["reading","playing"] },
  { id: 2, name: "Neha", hobbies: ["dancing","gaming"] },
  { id: 3, name: "Amit2", hobbies: ["reading","playing"] }
];
console.log("Unique Hobbies:", getUnique(users.flatMap(u=>u.hobbies)));
console.log("Users By Hobby:", groupBy(users.flatMap(u=>u.hobbies.map(h=>({hobby:h,user:u.name}))), 'hobby'));

// ===========================
// 2️⃣ Courses Example
// ===========================
const courses = [ {id:"c1",title:"JS"}, {id:"c2",title:"React"}, {id:"c3",title:"Node"} ];
const students = [ {id:1,name:"Amit",courses:["c1","c2"]}, {id:2,name:"Neha",courses:["c2","c3"]} ];

const courseMap = arrayToMap(courses);
const studentsExpanded = replaceIdsWithObjects(students,'courses',courseMap);
console.log("Course Counts:", countBy(students.flatMap(s=>s.courses)));
console.log("Share Course With Amit:", studentsExpanded.filter(s=>s.name!=="Amit" && s.courses.some(c=>studentsExpanded.find(st=>st.name==="Amit").courses.includes(c))).map(s=>s.name));

// ===========================
// 3️⃣ Orders & Products
// ===========================
const products = [ {id:"p1",name:"Laptop",category:"Electronics",price:800},{id:"p2",name:"Phone",category:"Electronics",price:500},{id:"p3",name:"Shoes",category:"Fashion",price:100} ];
const orders = [ {id:1,user:"Amit",items:["p1","p3"]},{id:2,user:"Neha",items:["p2"]} ];
const productMap = arrayToMap(products);
const ordersExpanded = replaceIdsWithObjects(orders,'items',productMap);
console.log("Total Per Order:", ordersExpanded.map(o=>({...o,total:o.items.reduce((sum,p)=>sum+p.price,0)})));
console.log("Most Sold Product:", productMap.get(maxBy(countBy(orders.flatMap(o=>o.items)))[0]));

// ===========================
// 4️⃣ Social Media
// ===========================
const smUsers = [ {id:1,name:"Amit",followers:[2,3]}, {id:2,name:"Neha",followers:[1]} ];
const smUserMap = arrayToMap(smUsers);
const smUsersExpanded = replaceIdsWithObjects(smUsers,'followers',smUserMap);
console.log("Social Media Users:", smUsersExpanded);

// ===========================
// 5️⃣ Library System
// ===========================
const books = [ {id:"b1",title:"JS Basics",author:"John"},{id:"b2",title:"React Guide",author:"Mike"} ];
const members = [ {id:1,name:"Amit",borrowed:["b1"]},{id:2,name:"Neha",borrowed:["b1","b2"]} ];
const bookMap = arrayToMap(books);
const membersExpanded = replaceIdsWithObjects(members,'borrowed',bookMap);
console.log("Most Borrowed Book:", bookMap.get(maxBy(countBy(members.flatMap(m=>m.borrowed)))[0]));
console.log("Members With Common Books:", membersExpanded.flatMap((m,i)=>membersExpanded.slice(i+1).map(n=>({members:[m.name,n.name],commonBooks:m.borrowed.filter(b=>n.borrowed.includes(b))}))).filter(x=>x.commonBooks.length>0));

// ===========================
// 6️⃣ Similarity Example
// ===========================
console.log("Similarity Amit vs Neha:", similarityScore(membersExpanded[0].borrowed.map(b=>b.id), membersExpanded[1].borrowed.map(b=>b.id)));


// ===========================
// 🔹 ULTIMATE DATA TOOLKIT
// ===========================

// Generic Helpers
const arrayToMap = (arr, key = 'id') => new Map(arr.map(i => [i[key], i]));
const groupBy = (arr, fn) => arr.reduce((acc, i) => ((acc[typeof fn==='function'?fn(i):i[fn]] ||= []).push(i), acc), {});
const countBy = (arr, fn = x => x) => arr.reduce((acc, i) => (acc[fn(i)] = (acc[fn(i)]||0)+1, acc), {});
const maxBy = obj => Object.entries(obj).reduce((a,b)=>b[1]>a[1]?b:a);
const replaceIdsWithObjects = (arr, field, map) => arr.map(x=>({...x,[field]:x[field].map(id=>map.get(id))}));
const getUnique = arr => [...new Set(arr)];
const similarityScore = (a,b) => {let sA=new Set(a), sB=new Set(b); let inter=[...sA].filter(x=>sB.has(x)); return inter.length / new Set([...sA,...sB]).size};
const sharedItems = (a,b) => a.filter(x=>b.includes(x));

// ===========================
// 🔹 Universal Analyzer
// ===========================
function analyzeDataset(config) {
    const { data, idField='id', nameField='name', arrayField, objectMapArray, referenceField } = config;

    // Map reference IDs to objects if provided
    let map = objectMapArray ? arrayToMap(objectMapArray) : null;
    let expandedData = map && arrayField ? replaceIdsWithObjects(data,arrayField,map) : data;

    // Flatten arrayField for counting if exists
    let flatArray = arrayField ? expandedData.flatMap(d=>d[arrayField]) : [];

    // Count occurrences
    let counts = flatArray.length ? countBy(flatArray.map(x=>x.id || x)) : {};

    // Most common item
    let most = flatArray.length ? (map ? map.get(maxBy(counts)[0]) : maxBy(counts)) : null;

    return {
        expandedData,
        counts,
        most,
        getUniqueArray: arrayField ? getUnique(flatArray.map(x=>x.id || x)) : [],
        similarity: (nameA,nameB) => {
            if(!arrayField) return 0;
            let a = expandedData.find(d=>d[nameField]===nameA)[arrayField].map(x=>x.id || x);
            let b = expandedData.find(d=>d[nameField]===nameB)[arrayField].map(x=>x.id || x);
            return similarityScore(a,b);
        },
        sharedWith: (name) => {
            if(!arrayField) return [];
            let user = expandedData.find(d=>d[nameField]===name)[arrayField].map(x=>x.id || x);
            return expandedData.filter(d=>d[nameField]!==name && sharedItems(d[arrayField].map(x=>x.id || x),user).length>0).map(d=>d[nameField]);
        }
    };
}

// ===========================
// 🔹 Example 1 — Library System
// ===========================
const books = [
  { id:"b1", title:"JS Basics", author:"John" },
  { id:"b2", title:"React Guide", author:"Mike" }
];
const members = [
  { id:1,name:"Amit",borrowed:["b1"] },
  { id:2,name:"Neha",borrowed:["b1","b2"] }
];

const libraryAnalysis = analyzeDataset({
    data: members,
    nameField: 'name',
    arrayField: 'borrowed',
    objectMapArray: books
});

console.log("Expanded Members:", libraryAnalysis.expandedData);
console.log("Most Borrowed Book:", libraryAnalysis.most);
console.log("Members Who Share Books With Amit:", libraryAnalysis.sharedWith("Amit"));
console.log("Similarity Amit vs Neha:", libraryAnalysis.similarity("Amit","Neha"));

// ===========================
// 🔹 Example 2 — Courses
// ===========================
const courses = [ {id:"c1",title:"JS"},{id:"c2",title:"React"},{id:"c3",title:"Node"} ];
const students = [ {id:1,name:"Amit",courses:["c1","c2"]},{id:2,name:"Neha",courses:["c2","c3"]} ];

const courseAnalysis = analyzeDataset({
    data: students,
    nameField: 'name',
    arrayField: 'courses',
    objectMapArray: courses
});

console.log("Expanded Students:", courseAnalysis.expandedData);
console.log("Course Counts:", courseAnalysis.counts);
console.log("Students Sharing Courses With Amit:", courseAnalysis.sharedWith("Amit"));
console.log("Similarity Amit vs Neha:", courseAnalysis.similarity("Amit","Neha"));
console.log("Most Popular Course:", courseAnalysis.most);




```