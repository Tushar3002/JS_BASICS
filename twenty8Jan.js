////groupBy map


// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// function sortFruits({quantity}){
//     return quantity>200 ? "ok":"low"
// }

// const res=Map.groupBy(fruits,sortFruits);
// console.log("OK OK OK");

// for(let x of res.get('ok')){
//     console.log(x.name);
    
// }

// console.log("LOW LOW LOW");

// for(let x of res.get('low')){
//     console.log(x.name);
    
// }

const students = [
  {name: "Alice", grade: "A"},
  {name: "Bob", grade: "B"},
  {name: "Charlie", grade: "A"},
  {name: "David", grade: "C"}
];



// Group by grade
const grouped = Map.groupBy(students, s => s.grade);

console.log(grouped);

// Iterate
for (let [grade, arr] of grouped) {
  console.log(`Grade ${grade}:`);
  arr.forEach(s => console.log(" - " + s.name));
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const groupedNumbers = Map.groupBy(numbers, n => (n % 2 === 0 ? "even" : "odd"));

for (let [key, arr] of groupedNumbers) {
  console.log(key + ": " + arr.join(", "));
}



const words = ["apple", "banana", "avocado", "blueberry", "kiwi"];

const groupedWords = Map.groupBy(words, word => word[0]); // first letter

for (let [letter, arr] of groupedWords) {
  console.log(letter + ": " + arr.join(", "));

}

let n=[10,33,45,78,121,25,44,973,56,112]

const oddEven=Map.groupBy(n,val=>(val%2==0?'even':'odd'))

for(let [key,values] of oddEven){
    console.log(key + " : " + values);
    
}

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

console.log(bark.animal);


const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

const res=Map.groupBy(fruits,(val)=>{
  return val.quantity<300 ? "low":"OK"
})

console.log(res);

for(let i of res.get("low")){
  console.log(i);
}
console.log("OK");

for(let i of res.get("OK")){
  console.log(i);
}
