// const arrA = [1, 2, [3 , 4]];
// const arrB = [[5, 6], 7, 8];
// const arrC = arrA.concat(arrB);
// console.log(...arrC); 
// console.log(arrC.join(' ').split(',').join(' '));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const list = fruits.entries();

// let text = "";
// for (let [x,y] of list) {
//   text += x + y;
// }
// console.log(text);

// const myArr2 = [1, 2, 3, 4, 5, 6];
// const newArr2 = myArr2.flatMap(x => [x, x * 10]);

// console.log(myArr2);

// console.log(newArr2);


// const persons = [
//   {firstname: "Malcom", lastname: "Reynolds", age: 30},
//   {firstname: "Kaylee", lastname: "Frye", age: 25},
//   {firstname: "Jayne", lastname: "Cobb", age: 20}
// ];

// let ans1 = persons.map(val => val.firstname + " " + val.lastname);
// let ans2 = persons.filter(val => val.age > 22).map(val => val.firstname + " " + val.lastname);

// console.log(ans1);
// console.log(ans2);
        
// const date3 = new Date(1677589400000); // Milliseconds since Jan 1, 1970 UTC
// console.log(date3);

// const today = new Date();
// console.log(today);

// today.setDate(today.getDate()+5)
// console.log(today);


// // Add 5 days
// const future = new Date(today);
// future.setDate(today.getDate() + 5);
// console.log(future);


// // Subtract 3 days
// const past = new Date(today);
// past.setDate(today.getDate() - 3);
// console.log(past);


// const eventDate = new Date("2026-12-31T23:59:59");

// function countdown() {
//   const now = new Date();
//   const diff = eventDate - now;

//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((diff / (1000 * 60)) % 60);
//   const seconds = Math.floor((diff / 1000) % 60);

//   console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
// }

// countdown();
// // setInterval(countdown, 1000);


// const date=new Date()
// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/New_York',
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false
//   })
// );

// const p1=new Date("January 25,2026")
// console.log(p1)

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);  // Call parent constructor
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let mycar = new Model("Ford", "Mustang");
// console.log(mycar.show())

// const d33=Date.now()
// const d35=new Date("2026-02-08")
// const d34=Date.parse(2026,1,8)


// console.log(Math.floor((d33-d34)/(1000*60*60)));
// console.log(Math.floor((d33-d35)/(1000*60*60)));

// function fn1() {};
// function fn2(a, b, c) {};

// // Get function names
// let text1 = fn1.name + " " + fn2.name;

// console.log(text1);


// //repeat each alpha abc

// let al="abc"
// let ans=al.split("").map((x)=>x+x).join("")
// console.log(ans);


// let name="Tushar Jana"
// ans=name.split(" ").map((x)=>x.split("").reverse().join("")).join(" ")
// console.log(ans);


// //take only vowels

// ans=name.split("").filter(x=>"aeiou".includes(x)).join("")
// console.log(ans);


// str="programming"
// ans=[...new Set(str)]
// console.log(ans);


// let arr=["racecar","madam","hi"]
// ans=arr.map(x=>x.split("").reverse().join("") ===  x )
// console.log(ans);


// arr=["cat",["dog","ant"],["apple",["bat"]]]
// ans=arr.flat(3)
// console.log(ans);


// str="Practice makes me better"
// ans=str.split(" ").reverse().join(" ")
// console.log(ans);



const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" },
  { id: 1, name: "Amit" },   // duplicate
  { id: 3, name: "Rahul" },
  { id: 2, name: "Neha" }    // duplicate
];

let s=new Set()
let m=new Map()
// const val=users.map(x=>{
//     if(m.has(x.id)){
//         m.set(x.id,m.get(x.id))
//     }else{
//         m.set(x.id,1)
//     }

// })

function norm(users) {
    const seen = new Set();

    return users.filter(user => {
        if (seen.has(user.id)) return false;
        seen.add(user.id);
        return true;
    });
}

console.log(norm(users));



function mapP(x){
    
    const m=new Map()
    x.forEach(val=>{
        if(m.has(val.name)){
            m.set(val.name,m.get(val.name)+1)
        }else{
            m.set(val.name,1)
        }
       
    })

    const s=new Set()
    for(let x of m.keys()){
        console.log(x);
        
        s.add(x)
    }

     return s
}
console.log(mapP(users));

function setP(users) {
    const s = new Set();

    users.forEach(user => s.add(user.name));

    return s;
}

console.log(setP(users));




// console.log(val);
