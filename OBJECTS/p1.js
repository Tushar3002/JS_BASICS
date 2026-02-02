// function obj(firstname,lastname){
//     this.firstname=firstname
//     this.lastname=lastname
// }

// console.log(obj);   //[Function: obj]


// const myName=new obj("Tushar","jana")


// console.log(obj.firstname); //undefined
// console.log(myName); //obj { firstname: 'Tushar', lastname: 'jana' }
// console.log(myName.firstname);  //Tushar

// myName.fullName=function(){
//     return this.firstname + " "+ this.lastname;

// }
// console.log(obj);   //[Function: obj]

// console.log(myName.fullName()); //Tushar undefined


// obj.prototype.changeName=function(name){
//     this.firstname=name
// }

// console.log(myName);    
// // obj {
// //   firstname: 'Tushar',
// //   lastname: 'jana',
// //   fullName: [Function (anonymous)]
// // }

// myName.changeName("TJ")
// console.log(myName.fullName());
// console.log(myName);    // name is changes
// // obj {
// //   firstname: 'TJ',
// //   lastname: 'jana',
// //   fullName: [Function (anonymous)]
// // }

//--------------------------------------------------------------------------------------------------------------------------------------------------------


// // Copies properties from a source object to a target object
// Object.assign(target, source)

// // Creates an object from an existing object
// Object.create(object)

// // Returns an array of the key/value pairs of an object
// Object.entries(object)

// // Creates an object from a list of keys/values
// Object.fromEntries()

// // Returns an array of the keys of an object
// Object.keys(object)

// // Returns an array of the property values of an object
// Object.values(object)

// // Groups object elements according to a function
// Object.groupBy(object, callback)

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Tushar",lastName: "Jana",age:33};

// Object.assign(target, source)
// Assign Source to Target
Object.assign(person1, person2);  //person2 in value person1

 // Returns an array of the key/value pairs of an object
let ans=Object.entries(person1)
console.log(ans);
// [
//   [ 'firstName', 'Tushar' ],
//   [ 'lastName', 'Jana' ],
//   [ 'age', 33 ],
//   [ 'eyeColor', 'blue' ]
// ]



const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
// Creates an object from a list of keys/values
const myObj = Object.fromEntries(fruits);   //{ apples: 300, pears: 900, bananas: 500 }
console.log(myObj);

const fruit1 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

const ans2=Object.groupBy(fruit1,function(x){
    return x.quantity >210 ? "More":"Less"
})

console.log(ans2);


for (let y of ans2.Less) {    //let [x,y] of ans2.Less.entries()
  text = y.name + " " + y.quantity ;
}

console.log(text);
