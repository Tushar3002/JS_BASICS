// const sales = "Toyota";

// function carTypes(name) {
//   return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

// const car = { myCar: "Saturn", getCar: carTypes("lola"), special: sales };

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Toyota

// //////////////////////////
// let username = null

// username ??= "Guest";

// let a=null

// let ans=a??5
// console.log(ans)

// console.log(username);


///////////////////

// let arr = [1, [2, 3], [4, [5, 6]]];

// console.log(arr.flat(3)); 

// let arr1 = [1, 2, 3];

// let result = arr1.flatMap(x => [x*2, x * x]);
// console.log(result); 

// let arr2 = [1, 2, 3];

// let ans = arr2.map(x => [x*2, x * x]);
// console.log(ans); 

// let arr3 = ["hello", "", "world"];

// let result1 = arr3.flatMap(str => str ? str.split("") : []);
// console.log(result1);

// let str = "hello";
// let arr4 = str.split(""); // Split string into characters
// console.log(arr4);



////////////// yield

// function* test() {
//     console.log("I'm before yield expression");
//     yield 20;
// }

// const genObj = test();
// console.log(genObj.next());



// function* numbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = numbers();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }



// let str = "hello";
// let arr = [4,,5]
// console.log(...str)
// console.log(...arr)
// let chars = [...str];
// chars.reverse()

// console.log(chars); // ['h','e','l','l','o']



// //Create an Array
// const cars = new Array("Saab", "Volvo", "BMW");

// //Add Values
// cars.push("Saab");
// cars.push("Volvo");
// cars.push("BMW");

// console.log(cars)

// document.getElementById("demo").innerHTML = cars;

// const arr1 = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];

// const arr3 = arr1.concat(arr2); 
// console.log(arr3)

// document.getElementById("demo").innerHTML = arr3;


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.entries();
// console.log(list)

// // List the Entries
// let text = "";
// for (let x of list) {
//   text += x + "<br>";
// }

// console.log(text);

// const ages = [32, 33, 16, 40];
// const result = ages.filter((e)=>{
//     return e>32;
// });

// console.log(result)

////

// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

// const newArr = myArr.flat();
// console.log(newArr)

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// document.getElementById("demo").innerHTML = newArr;
// console.log(newArr)

// const newArr2 = myArr.map(x => [x, x * 10]);
// document.getElementById("demo1").innerHTML = newArr2;
// console.log(newArr2)

// const fruits = ["apple", "orange", "cherry"];
// let res='';
// fruits.forEach((value)=>{
//     res += value + " "
// })

// console.log(res)


// const num=[1,2,3,4,5]

// let ans=num.map((n)=>{
//     return 2**n;
// })

// console.log(ans)


////////

// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds",age:30},
//   {firstname : "Kaylee", lastname: "Frye",age:25},
//   {firstname : "Jayne", lastname: "Cobb",age:20}
// ];

// let ans = persons.map((val)=>{
//     return val.firstname + " " + val.lastname ;
// });

// let ans2=persons.filter((val)=>{
//     return val.age >22
// }).map((val)=>{
//     return val.firstname + " " + val.lastname;
// })

// console.log(ans)
// console.log(ans2)


// console.log([] + []);      // ?
// console.log([] + {});      // ?
// console.log({} + []);      // ?
// console.log({} + {});      // ?

// let arr = [1,2,3];
// let a = arr.forEach(x => x * 2);
// let b = arr.map(x => x * 2);

// console.log(a); // ?
// console.log(b); // ?

// const numbers = [175, 50, 25];

// total=0
// var a=numbers.reduce((total,n)=>{
//     return total -= n;
// })

// console.log(a)

// let a, b, c, rest;
// const arr1 = [1,2,3,4,5,6,7,8];

// [a, b, c, ...rest] = arr1;

// console.log(rest)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);

// console.log(citrus)


// const val=fruits.some((e)=>{ return e=="Lemn"})

// console.log(val)

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor( mod) {
//     super();
//     this.model = mod;
//   }
//   show() {
//     return  ', it is a ' + this.model;
//   }
// }

// mycar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = mycar.show();


// console.log([ , ,,,        ].length);

// let name1={
//     firstname : "TJ",
//     city:"Rajkot",
    
// }

// function printInfo(city,state){
//         console.log(this.firstname,this.city,city,state)
//     }


// printInfo("raj") //undefined undefined 'raj'
// printInfo.call(name1,"raj") //TJ Rajkot raj




// let name2={
//     firstname:"Tushar"
// }

// printInfo.call(name2,"OSaka","GUJ")

// printInfo.apply(name2,["OSaka","GUJ"])

// //-----------------BIND

// let printMyName = printInfo.bind(name1,"Rajkot")
// console.log(printMyName);

// printMyName()


// const myIterator =Iterator.from([1,2,3,4,5,6])   //"123456"

// const res=myIterator.filter(x=>x>2);  /// will give all big than 2
// const res=myIterator.drop(1);
// let result = myIterator.every(x => x > 7);  return true or false
// const res=myIterator.find(x=>x>2);  //3  will find first element bigger than 2  

// const res=myIterator.flatMap(x => [x, x * 10]);
// const res=myIterator.map(x => [x, x * 10]);


// const myIterator = Iterator.from("123456789");

// // Iterate over all elements
// let text = "";
// myIterator.forEach (function(value) {
//   text += value;
// })

// // Create an Iterator
// const myIterator = Iterator.from([175, 50, 25]);

// // Reduce to sum
// let result = myIterator.reduce((total, num) =>{
//   return total + num;
// });
// const myIterator = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// // Take the first 5
// const res = myIterator.take(5);

// function checkValue(value) {
//   return value > 7;
// }

// const myIterator = Iterator.from("123456789");
// let result = myIterator.some(checkValue);


// let text = "";
// for (const x of res) {
//   text += x + " ";
// }

// console.log(text);


const fruits = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];



// Group by ok and low
// const result = Map.groupBy(fruits, ({ quantity }) =>{
//   return quantity > 200 ? "ok" : "low";
// });
// //  ------------- both are same

// const result1 = Map.groupBy(fruits, ( fruit ) =>{
//   return fruit.quantity > 200 ? "ok" : "low";
// });


// // Display Results
// let text ="These fruits are Ok: <br>";
// for (let x of result.get("ok")) {
//   text += x.name + " " + x.quantity + "<br>";
// }
// text += "<br>These fruits are low: <br>";
// for (let x of result.get("low")) {
//   text += x.name + " " + x.quantity + "<br>";
// }
// console.log(text);

// const person = {firstName:"John", lastName:"Doe", age:50};

// console.log(("" in person));



// const newSet = new Set(['a','b','c','a','a'])

// newSet.add('t')

// var text=''
// newSet.forEach((x)=>{
//     text += x + " ^ "
// })


// document.getElementById("demo").innerHTML=text
// console.log(newSet);

// let x = 15 * 5;
// document.getElementById("demo").innerHTML = x;

// let text = "How are you doing today?";
// const myArray = text.split(" ");

// console.log(myArray);


// window.addEventListener("click",()=>{
//     console.log("hey")
// })


// const a={

// }
// a.id=123
// console.log(typeof undefined);
// let a=10
let arr=[1,2]
let arr2=[1,2]

console.log(arr==arr2);

// arr.map((x)=>{

// })
let obj={
  a:10
}

let obj2=obj

obj2.a=20

console.log(obj.a);
