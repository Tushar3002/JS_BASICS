const stud1={
    name:"TJ",
    printN: function(){
        console.log(this);
        
    }
}

stud1.printN() //{ name: 'TJ', printN: [Function: printN] }


const stud2={
    name:"TJ",
    printN: ()=>{
        console.log(this);
        
    }
}

stud2.printN() //window


const stud3={
    name:"TJ",
    printN: function(){
        const printN2= ()=>{
            console.log(this);
        }
        printN2()
    }
        
    
}

stud3.printN()  //{ name: 'TJ', printN: [Function: printN] }

const stud4={
    name:"TJ",
    printN: function(){
        function printN2(){
            console.log(this);
        }
        printN2()
    }
        
    
}

stud4.printN() //window

const stud5={
    name:"TJ",
    printN: ()=>{
        function printN2(){
            console.log(this);
        }
        printN2()
    }
        
    
}

stud5.printN() //global

const stud6={
    name:"TJ",
    printN: ()=>{
        const printN2= ()=>{
            console.log(this);
        }
        printN2()
    }
        
    
}

stud6.printN() //global

// Arrow functions don’t create this.
// Regular functions get this from how they are called.




//POINTERS

// 1. No arguments object in arrow functions
// A normal function has an arguments object which you can access in the function:

// But arguments object does not exist in arrow functions. 
// So have a reference error: arguments is not defined. That's because the arguments variable does not exist in arrow functions.

// 2. Arrow functions do not create their own this binding
// In normal functions, a this variable is created which references the objects that call them. For example:

// const obj = {
//   name: 'deeecode',
//   age: 200,
//   print: function() {
//     console.log(this)
//   }
// }

// obj.print()
// // {
// //   name: 'deeecode',
// //   age: 200,
// //   print: [Function: print]
// // }
// As you can see here, the this in the print method points to obj, which is the object that calls the method.

// const obj = {
//   name: 'deeecode',
//   age: 200,
//   print: function() {
//     function print2() {
//       console.log(this)
//     }

//     print2()
//   }
// }

// obj.print()
// // Window
// Here, we have two functions. The first one is print which is a method of the obj object. The second is print2 which is a function declared inside print. print2() is also called directly.

// In this case, print is called by obj (obj.print()) but no object calls print2 (print2()). So the this in print2 would reference the window object by default.

// Now let's see what happens with an arrow function.

// const obj = {
//   name: 'deeecode',
//   age: 200,
//   print: () => {
//     console.log(this)
//   }
// }

// obj.print()
// // Window
// By using an arrow function for print, this function does not automatically create a this variable. As a result, any reference to this would point to what this was before the function was created.

// As you see in the result, this was pointing to the Window object before print was created.

// Let's see another example:

// const obj = {
//   name: 'deeecode',
//   age: 200,
//   print: function() {
//     const print2 = () => {
//       console.log(this)
//     }

//     print2()
//   }
// }

// obj.print()
// // {
// //   name: 'deeecode',
// //   age: 200,
// //   print: [Function: print]
// // }
// Here, we have print as a normal function which means a this variable is automatically created in it. Then we have print2 which is an arrow function.

// Because obj is calling print (as in obj.print()), the this in print would point to obj.

// Since print2 is an arrow function, it doesn't create its own this variable. Therefore, any reference to this would point to what the value of this was before the function was created. In this case where obj calls print, 
// this was pointing to obj before print2 was created. As you can see in the results, by logging this from print2, obj is the result.

// 3. Arrow functions cannot be used as constructors
// With normal functions, you can create constructors which serve as a special function for instantiating an object from a class.

