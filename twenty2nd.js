
// const obj={
//   name:"Tushar",
//   city:"Rajkot",
//   print(){
//     console.log(this);
    
//   }
// }

// obj.print()


// const obj = {
//   name: 'TJ',
//   age: 20,
//   print: function() {
//     function print2() {
//       console.log(this)
//     }

//     print2()
//   }
// }

// obj.print()  //Global object


// const obj = {
//   name: 'TJ',
//   age: 20,
//   print: function() {
//     const print2=()=> {
//       console.log(this)
//     }

//     print2()
//   }
// }

// obj.print() //{ name: 'TJ', age: 20, print: [Function: print] }

printName()

console.log("hello")

function printName(){
  console.log("i am TJ")
}