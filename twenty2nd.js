// // // const obj={
// // //   name:"Tushar",
// // //   city:"Rajkot",
// // //   print(){
// // //     console.log(this);

// // //   }
// // // }

// // // obj.print()

// // // const obj = {
// // //   name: 'TJ',
// // //   age: 20,
// // //   print: function() {
// // //     function print2() {
// // //       console.log(this)
// // //     }

// // //     print2()
// // //   }
// // // }

// // // obj.print()  //Global object

// // // const obj = {
// // //   name: 'TJ',
// // //   age: 20,
// // //   print: function() {
// // //     const print2=()=> {
// // //       console.log(this)
// // //     }

// // //     print2()
// // //   }
// // // }

// // // obj.print() //{ name: 'TJ', age: 20, print: [Function: print] }

// // printName()

// // console.log("hello")

// // function printName(){
// //   console.log("i am TJ")
// // }

// const obj = {
//   a: 10,
// };

// const obj2 = { ...obj };

// obj2.a = 20;

// console.log();

// function arr(...num) {
//   console.log(num);
// }

// arr(1, 2, 3);

// const userInfo = { name: "Harshil", age: 22, a: ()=>{console.log(this); return "a";} };
// const preferences = { theme: "dark", lang: "en" };

// const info = { ...userInfo, ...preferences };
// info.name = "tushar"
// // info.a.b.c.d = 5
// // console.log(JSON.stringify(info),JSON.stringify(userInfo));
// // console.log(JSON.stringify(info.a.b),JSON.stringify(userInfo.a.b));
// console.log(userInfo.a())

// let arr1=[1,2,3,3,3,4,4,5]


// let ans=[...new Set(arr1)]

// console.log(ans);


// const permission=["read","write","delete"]

const product=[
  {name:"TJ",price:100},
  {name:"cup",price:30}
]

const m=product.map((x)=> x.name)
console.log(m);


// const ans=product.sort((x,y)=>{
//   return x.price-y.price;
// })

// console.log(ans);

// const at=[2,4,6,8]

// const res=at.reduce((min,val)=>{
//   return min <val?min : val
// })
// console.log(res);


let name="Tushar"

const ans= [...name].reverse().join("")

console.log(ans);


const arr=[3,5,6,7,8]

const ans1=Math.min(...arr)

console.log(ans1);
