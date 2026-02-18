// function checkAge(age) {
//   if (age < 18) {
//     let message = "Sorry, you're too young.";
//   } else {
//     let message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21));

// let newList = [1, 2, 3].push(4);

// console.log(newList);


// class Person {
//   constructor() {
//     this.name = 'Lydia';
//   }
// }

// Person = class AnotherPerson {
//   constructor() {
//     this.name = 'Sarah';
//   }
// };

// const member = new Person();
// const member2 = new AnotherPerson();
// console.log(member.name);
// console.log(member2.name);

const dob=new Date(2003,5,17)

const d=new Date()
// console.log(Date.now(2003,5,17));

console.log(d.getTime(2000));

console.log(Date.parse(2000))


const u=Date.UTC(2024,3,17);
console.log(u);
console.log(d.getTime()-dob.getTime);





console.log(d.toISOString().split("T")[1]);
console.log(d.toUTCString());
console.log(d.toLocaleString('en-IN'),{})
