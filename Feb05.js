//factorial

function factorial(n) {
    if (n < 0) return undefined;
    return Array.from({ length: n }, (_, i) => i + 1)   //Array(n).fill(0).map((_, i) => i + 1)
        .reduce((acc, cur) => acc * cur, 1);
}


function factorial2(n){
    if (n<0) return undefined;
    let fac=1
    for(let i=2;i<=n;i++){
        fac *= i
    }
    return fac
}

function factorial3(n){
    if(n<0) return undefined;
    if(n==1) return 1;
    return n*factorial3(n-1)
}

console.log(factorial(5));
console.log(factorial2(5));
console.log(factorial3(6));



//Arrsys are equal

function arrayEqual(arr1,arr2){
    if(arr1.length!==arr2.length) return false;
    return arr1.every((val,i)=>val===arr2[i])
}
console.log(arrayEqual([1,2,3],[1,2,3]));
console.log(arrayEqual([1,2,3],[1,2,5]));
console.log(arrayEqual([1,2,3],[1,2,5,8]));
console.log(arrayEqual([],[]));



//Sum of Digits

function sod(n){
    return n.toString().split("").reduce((acc,cur)=>Number(acc)+Number(cur),0)
}
console.log(sod(12345));



//remove duplicate from an array


// =============================================


function run(fn) {
  return fn();
}

const sayHello = function() {
  return "Hello";
};

console.log(sayHello());


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// // Stringify the Array
// let text = myArray.toString();

console.log(myArray);



const fruits = {Bananas:300, Oranges:200, Apples:500};

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
console.log(Object.entries(fruits).toString());

const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display JSON
let text1 = JSON.stringify(person);

console.log(text1);



console.log(x);
          // Display x in the element
x = 5; // Assign 5 to x
var x; // Declare x

