//function



// function add(a,b){
//     return a+b;
// }

// var add=(a,b)=>{a+b}

// var ans=add(9,3)

// var name="TJ"
// const person={
//     name:"Tushar",
//     add:function() {return this.name}
// }
// const person2={
//     name:"Tushar",
//     add:()=>{return name}
// }
// // document.getElementById("demo").innerHTML=person.add()
// document.getElementById("demo").innerHTML=person2.add()

// var a=this
// console.log(a);
// function showThis() {
//   return this;
// }

// console.log(showThis());

// const person = {
//   firstName: "John",
//   lastname:"Cena"
// };


// person.name=function(){
//     return this.firstName + " " + this.lastname
// }


// document.getElementById("demo1").innerHTML=JSON.stringify(person)

// console.log(person);
    
// console.table(person);


// // var ans= JSON.stringify(person)
// // console.log(ans);
// text=''
// Object.entries(person).forEach(([key,val])=>{
//     console.log(key,val);
//     text += key + " : " +val +"<br>" 
//     document.getElementById("demo").innerHTML=text
// })


// const name1 = "Tushar ";
// console.log(name1.split("").reverse().join(""));

/////////////////closure

// const b=document.getElementById("btn")

// function count(){
//     let counter=0;
//     return function(){
//         counter +=1
//         return counter
//     } 
// }

// const val=count()


// b.addEventListener("click",()=>{
//     document.getElementById("demo").innerHTML=val()
// })


///call

// const printVal={
//     add: function(){
//         return this.fname + " " +this.lname
//     }
// }
// const names={
//     fname:"Tushar",
//     lname:"Jana"
// }

// console.log(printVal.add.call(names));

//callback

// function myDis(val){
//     console.log(val)
// }


// function mySum(a,b){
//     let ans=a+b
//     return ans;
// } 

// let add=mySum(5,5)
// myDis(add)


// --------------------------

// function myDis(val){
//     console.log(val)
// }

// function myFun(a,b,ans){
//     ans(a+b)
// }

// myFun(5,7,myDis)

//Promise

// let myProm=new Promise((myRes,myRej)=>{
//     let res=false

//     if(res===true){
//         myRes("Done")
//     }else{
//         myRej("Error")
//     }
// })

// myProm.then((x)=>{myDis(x)},(err)=>myDis(err))

// function myDis(x){
//     console.log(x)
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const rev=fruits.map((v)=>v.split("").reverse().join(""))

// document.getElementById("demo").innerHTML=rev

// function add(...n){
    // var tot =0
    // for(var i=0;i<n.length;i++){
    //     tot += n[i]
    // }


    // var tot=0
    // n.forEach((val)=>{
    //     tot += val
    // })


    // var tot=0
    // for(var i of n){
    //     tot += i
    // }


    // var tot=n.reduce((total,n)=> total+n,0)

    // return tot
// }

// console.log(add(1,2,3));

// function add(...n){
//     const a=[4,9,3]
//     var ans2=Math.min(...a)
//     console.log(ans2);
    
//     var ans =  Math.min(...n)    
//     return ans
    
// }

// console.log(add(4,9,3));


// const a=10
// {
//     const a=30
//     console.log(a);
    
// }
////////////closure
// function outer(){

//     function inner(){
//         console.log(a)
//     }
//     let a=10
//     inner()
// }

// outer()

// function outest(){
//     var c=20
//     function outer(b){

//         function inner(){
//             console.log(a,b,c)
//         }
        
//         return inner;
//     }
//     let a=30
//     return outer
// }

// let a=100
// var close=outest()("hell")()


// const fetchData = async () => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/todos"
 
//     let res = await fetch(apiUrl)
 
//     let data = await res.json()
//     // let ans=JSON.stringify(data)
 
//     console.log(data);
// }

// (async () => {
//     await fetchData();
// })();

// fetchData().then(() => {
//     console.log("Done");
// });

// const str = `
// function fetchData() {
//     console.log("Hello from string");
// }
// fetchData();
// `;

// eval(str);



// const code = `
// return "Hello, " + name + "!";
// `;

// const name = "Alex";

// // Create function with parameters
// const dynamicFunc = new Function("name", code);

// // Call the function
// const result = dynamicFunc(name);
// console.log(result); // Hello, Alex!

////////////////////////////////////////////
// const ans = `const fetchData = async () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data);
// };
// fetchData(); // call it here
// `;

// eval(ans);

// console.log('Done');


// const fetchData = async () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data);
// };
// fetchData(); 

// const ans = `
// global.fetchData = async () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data);
// };
// `;

// eval(ans);

// (async () => {
//     await global.fetchData();
//     console.log("Done");
// })();

// const code = `
// const apiUrl = "https://jsonplaceholder.typicode.com/todos";
// const res = await fetch(apiUrl);
// const data = await res.json();
// console.log(data);
// `;

// const asyncFunc = new Function(`
//     return (async () => {
//         ${code}
//     })();
// `);

// (async () => {
//     await asyncFunc(); // call dynamically
//     console.log("Done");
// })();
// ---------------------------------------------------------------------------------------------
// const ans = `
// const fetchData = async () => {
//     const apiUrl = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(apiUrl);
//     const data = await res.json();
//     console.log(data);
// };
// fetchData(); // called here
// `;

// (async () => {
//     eval(ans); 
// })();
// ---------------------------------------------------------------------------------------------

// const fetchData=async()=>{
//     const apiUrl="https://jsonplaceholder.typicode.com/todos"
//     const res=await fetch(apiUrl);
//     const data =await res.json();
//     console.log(data);
    
// }
// // fetchData()



// (async () => {
//     const promise = fetchData(); // start fetch but don't await yet
//     console.log("Done");         // prints immediately
//     await promise;               // now wait for fetchData to finish
// })();


const fetchData=async()=>{
    const apiUrl="https://jsonplaceholder.typicode.com/todos"
    let res=await fetch(apiUrl)
    let data = await res.json()
    console.log(data);
    
}

const iife=(async()=>{
    await fetchData()
    console.log("DONE");
})()

// iife.then(()=>{
    
    
// })
