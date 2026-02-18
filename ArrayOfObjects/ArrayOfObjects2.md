```js

// =======================================
// 🔥 ULTIMATE DATA ENGINE
// =======================================

// ---------- CORE UTILITIES ----------
const arrayToMap = (arr, key='id') => new Map(arr.map(i => [i[key], i]));

const countBy = (arr, fn=x=>x) =>
  arr.reduce((acc,i)=>((acc[fn(i)]??=0)++,acc),{});

const groupBy = (arr, fn) =>
  arr.reduce((acc,i)=>((acc[fn(i)]??=[]).push(i),acc),{});

const maxBy = obj =>
  Object.entries(obj).reduce((a,b)=>b[1]>a[1]?b:a);

const sumBy = (arr, fn) =>
  arr.reduce((sum,i)=>sum+fn(i),0);

const replaceIds = (arr, field, map) =>
  arr.map(x=>({...x,[field]:x[field].map(id=>map.get(id))}));

const similarity = (a,b)=>{
  const A=new Set(a), B=new Set(b);
  const inter=[...A].filter(x=>B.has(x));
  return inter.length / new Set([...A,...B]).size;
};

// =======================================
// 🧠 UNIVERSAL ANALYZER
// =======================================
function DataEngine(config){

  const {
    data,
    nameField='name',
    arrayField,
    referenceData,
    numericField,
    categoryField
  } = config;

  const refMap = referenceData ? arrayToMap(referenceData) : null;
  const expanded = (refMap && arrayField)
    ? replaceIds(data,arrayField,refMap)
    : data;

  const flat = arrayField
    ? expanded.flatMap(d=>d[arrayField])
    : [];

  const counts = flat.length
    ? countBy(flat.map(x=>x.id||x))
    : {};

  const mostCommon = flat.length
    ? (refMap ? refMap.get(maxBy(counts)[0]) : maxBy(counts))
    : null;

  return {

    // ---------- BASIC ----------
    expanded,
    counts,
    mostCommon,

    // ---------- SIMILARITY ----------
    similarityBetween(a,b){
      const A = expanded.find(d=>d[nameField]===a)[arrayField].map(x=>x.id||x);
      const B = expanded.find(d=>d[nameField]===b)[arrayField].map(x=>x.id||x);
      return similarity(A,B);
    },

    sharedWith(name){
      const base = expanded.find(d=>d[nameField]===name)[arrayField].map(x=>x.id||x);
      return expanded
        .filter(d=>d[nameField]!==name)
        .filter(d=>d[arrayField].some(x=>base.includes(x.id||x)))
        .map(d=>d[nameField]);
    },

    // ---------- NUMERIC TOTALS ----------
    totals(){
      if(!arrayField || !numericField) return null;
      return expanded.map(d=>({
        ...d,
        total: sumBy(d[arrayField],i=>i[numericField])
      }));
    },

    highestTotal(){
      const totals = this.totals();
      return totals
        ? totals.reduce((a,b)=>b.total>a.total?b:a)
        : null;
    },

    revenueByCategory(){
      if(!arrayField || !numericField || !categoryField) return null;
      return expanded
        .flatMap(d=>d[arrayField])
        .reduce((acc,i)=>((acc[i[categoryField]]??=0)+=i[numericField],acc),{});
    },

    // ---------- SOCIAL MEDIA ----------
    suggestConnections(name){
      const user = expanded.find(d=>d[nameField]===name);
      const following = user[arrayField];
      const suggestions = new Set();

      following.forEach(f=>{
        f[arrayField]?.forEach(ff=>{
          if(ff[nameField]!==name &&
             !following.some(x=>x[nameField]===ff[nameField])){
               suggestions.add(ff[nameField]);
          }
        });
      });

      return [...suggestions];
    }

  };
}


🧪 Example 1 — Orders & Products
const products = [
 {id:"p1",name:"Laptop",category:"Electronics",price:800},
 {id:"p2",name:"Phone",category:"Electronics",price:500},
 {id:"p3",name:"Shoes",category:"Fashion",price:100}
];

const orders = [
 {id:1,name:"Amit",items:["p1","p3"]},
 {id:2,name:"Neha",items:["p2"]}
];

const orderEngine = DataEngine({
  data: orders,
  arrayField: "items",
  referenceData: products,
  numericField: "price",
  categoryField: "category"
});

console.log(orderEngine.totals());
console.log("Highest Spender:", orderEngine.highestTotal());
console.log("Revenue By Category:", orderEngine.revenueByCategory());
console.log("Most Sold Product:", orderEngine.mostCommon);

🧪 Example 2 — Library
const books = [
 {id:"b1",title:"JS Basics"},
 {id:"b2",title:"React Guide"}
];

const members = [
 {id:1,name:"Amit",borrowed:["b1"]},
 {id:2,name:"Neha",borrowed:["b1","b2"]}
];

const libraryEngine = DataEngine({
  data: members,
  arrayField: "borrowed",
  referenceData: books
});

console.log("Most Borrowed:", libraryEngine.mostCommon);
console.log("Shared With Amit:", libraryEngine.sharedWith("Amit"));
console.log("Similarity:", libraryEngine.similarityBetween("Amit","Neha"));

🧪 Example 3 — Social Media
const users = [
 {id:1,name:"Amit",followers:[2]},
 {id:2,name:"Neha",followers:[1]}
];

const userMap = arrayToMap(users);
const expandedUsers = replaceIds(users,"followers",userMap);

const socialEngine = DataEngine({
  data: expandedUsers,
  arrayField: "followers"
});

console.log("Suggestions:", socialEngine.suggestConnections("Amit"));

```