// //Function Constructor 

// const myFunc=new Function("x","return x*x");

// console.log(myFunc(3));

// const a="aaa"

// console.log(a.toUpperCase());


// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };
// console.log(person);

// // Create new Object
// const man = Object.create(person);
// man.firstName = "Peter";
// console.log(man);



function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myName= new Person("John", "Doe", 50, "blue");

myName.fullName=function() {   //adding a function and withthe object and we can not use constructor to add it , example Person.myName is wrong 
  return this.firstName + " : "+ this.lastName
}

Person.prototype.changeName=function(name){ //this will create a permanent function inside Person
  this.firstName=name
}
myName.changeName("Pedro")
console.log(myName.fullName());
console.log(myName);


const numbers = ["a","b","c","d","e"];

// Destructuring
const [a,b, ...rest] = numbers;

console.log(rest);



const arr=[1,3,4]
console.log(arr);
console.log(...arr);


console.log([...arr,...arr]);


