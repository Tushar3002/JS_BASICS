///reverse sentence

// let a="My name is Tushar"

// let ans=a.split("").reverse().join("");

// console.log(ans);


// //reverse words

// let rev=a.split(" ").map((x)=>{ 
//     return x.split("").reverse().join("").toLowerCase()
// })

// console.log(rev);


///reverse a number

//  let num=369


// let ans=num.toString().split("").reverse().join("")
// let res=Number(ans)
// console.log(res);


//-----------------OR

// let num = 369;
// let ans = Number([...num.toString()].reverse().join(""));
// console.log(ans);

// let num=369
// var ans=0

// while(num>0){
//     let rem=num%10
//     ans =ans *10 + rem 
//     num= Math.floor(num/10)

// }

// console.log(ans);

// let num1 = 369;

// while (num1 > 0) {
//   console.log(num1 % 10);
//   num1 = Math.floor(num1 / 10);
// }



////////////sort a string in alphabetical


// let str="Tushar"

// let ans=str.toLowerCase().split("").sort().join("");

// console.log(ans);


// ----------------------------accept first letter of string as parameter and coveet the first letter to uppercase

// function firstUpper(str){

//     let ans=str.split(" ").map((x)=>{
        
//     let first= x[0].toUpperCase()
//     let val=first.concat(x.slice(1))
//     // let val=x[0].toUpperCase() + x.substring(1)
//     return val
//     }).join(" ")
//     console.log(ans);
// }

// firstUpper("My name is Tushar")



//-------count the occurance of each letters 


// function occurance(x){

//     const m=new Map();
//     x.split("").map((val)=>{
//         if(val===" ") return;
//         if (m.has(val)) {
//             m.set(val, m.get(val) + 1);
//         } else {
//             m.set(val, 1);
//         }
//     })
//     return m;
// }

// function occurance2(x){
//     let obj={}
//     x.split("").forEach((val)=>{
//         if(val===" ") return;
//         if(obj.hasOwnProperty(val)){
//             obj[val]++ 
//         }else{
//             obj[val]=1
//         }
//     })
//     return obj;
// }


// console.log(occurance("Jana  Tushar"));
// console.log(occurance2("Jana  Tushar"));

//////// 