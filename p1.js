// let a = { a: 1 };
// let b = { a: 1 };
// let c = a;

// let a = [1,2,3];
// let b = [1,2,3];
// let c = a;


// console.log(a === b); // logs false even though they have the same property
// console.log(a === c); //true
// console.log("--------------------------------");

// console.log(!!null); //logs false
// console.log(!!undefined); //logs false
// console.log(!!''); //logs false
// console.log(!!0); //logs false
// console.log(!!NaN); //logs false
// console.log(!!' '); //logs true
// console.log(!!{}); //logs true
// console.log(!![]); //logs true
// console.log(!!1); //logs true
// console.log(!![].length); //logs false

// function myFavoriteFunc(a) {
//        if (true) {
//           var b = "Hello " + a;
//        }
//        return b;
//    }


// //    console.log(   myFavoriteFunc("World")); // Throws a ReferenceError "a" is not defined
//    function testBlock(){
//    if(true){
//      let z = 5;
//    }
//    return z; 
//  }

//  testBlock(); // Throws a ReferenceError "z" is not defined

// const arr = [1, 2, 3];
 
// arr.forEach(async (num) => {

//   await new Promise(() => setTimeout( 3000));

  

// });
 
// console.log('Done');

// console.log([] + {});
// console.log({} + []); 

// const obj = {
//   name: "TJ",
//   getName() {
//     return this.name;
//   }
// };


// console.log(obj.getName.call(obj));
// console.log(obj.name);

// console.log(0.1 + 0.2 === 0.3);

// console.log(0.3 == 0.3);


// console.log("");
// console.log([]==null);

// function outer() {
//   let count = 0;
//   return function inner() {
//     return ++count;
//   };
// }

// const fn = outer();
// console.log(fn());
// console.log(fn());

// function createCounter() {
//   let count = 0;
//   return async function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// counter().then(console.log);
// counter().then(console.log);

// console.log(foo());
// function foo() {
//   return 1;
// };

// const obj = {
//   name: "TJ",
//   getName(){
//     console.log(this.name)
//   }
// };
// const fn = obj.getName;
// fn();

// obj.getName()

// let name1={
//     firstname : "TJ",
//     city:"Rajkot",
//     printInfo:function(city){
//         console.log(this.firstname,this.city,city)
//     }

// }

// name1.printInfo()// TJ Rajkot undefined


// let name2={
//     firstname:"Tushar"
// }

// name1.printInfo.call(name2,"OSaka")

// const obj1 = {
//  result:0
// };

// const obj2 = {
//  result:0
// };


// function reduceAdd(){
//    let result = 0;
//    for(let i = 0, len = arguments.length; i < len; i++){
//      result += arguments[i];
//    }
//    this.result = result;
// }

// reduceAdd.apply(obj1, [1, 2, 3, 4, 5]); // returns 15
// reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15

// console.log(obj1);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }


// console.log(foo());
// function foo() { return 1; };
const words = ["Functional", "Procedural", "Object-Oriented"];

const wordsLength = words.map(word => word.length);

console.log(wordsLength);
const strs = ["I", " ", "am", " ", "Iron", " ", "Man"];
const result = strs.reduce((acc, currentStr) => acc + currentStr, "");

console.log(result);


const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017
};


let { firstName:fn, lastName, position, yearHired } = employee;

console.log(`Name : ${fn+" "+lastName}`);

const set2 = new Set(["d","e","b"]);
set2.add("a");
set2.add("g").add("h").add("i").add("j").add("k").add("k");

console.log(set2);

