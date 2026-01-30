//Function Constructor 

const myFunc=new Function("x","return x*x");

console.log(myFunc(3));

const a="aaa"

console.log(a.toUpperCase());


const person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person);

// Create new Object
const man = Object.create(person);
man.firstName = "Peter";
console.log(man);
