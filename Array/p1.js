//----------------------------------------repeat

// let arr=[1,2,3]

// // let ans=[...arr,...arr]
// // console.log(ans);
// ////////////OR

// let ans=arr.concat(arr)
// console.log(ans);


// ------------------------------------count values of an array


let arr =[1,2,3,4,"abcd",5.5]

let ans= arr.reduce((x,y)=>{
    return Number.isFinite(y)?x+y:x
},0) 

console.log(ans);



let sum=0
arr.forEach((x)=>{
    if(Number.isFinite(x)){
        sum =sum +x
    }
})

console.log(sum);


//////  LOOP Through a array of objects


// let arr=[
//     {name:"Tushar",gender:"male"},
//     {name:"Tsadsdr",gender:"female"},
//     {name:"Sdff",gender:"non"},
//     {name:"aaa",gender:"male"},
//     {name:"nomi",gender:"female"},
// ]

// let ans=arr.filter((x)=>{
//     return x.gender=="female"
// })

// console.log(ans);


////count non male

// var count=0
// arr.forEach((x)=>{
//     if(x.gender !== "male"){
//         count++
//     }
// })
// console.log(count);


// //remove elements

// for(var i=0;i<arr.length;i++){
//     if(arr[i].gender!=="male"){
//         arr.splice(i,1) 
//     }
// }

// console.log(arr);

// function to return typeof of data


// function typeofData(a){
//     return typeof a;
// }
// console.log(typeofData(3));
// console.log(typeofData([11]));//object
// console.log(typeofData("afs"));
// console.log(typeofData(true));
// console.log(typeofData({}));//object
// console.log(typeofData(undefined));//undefined
// console.log(typeofData(null));//object
// console.log(typeofData(NaN));//number
// console.log(typeofData(function(){}));//function

////function to get the first n elements of an array

// function retrieve(a,n=1){
//     // return a[0]
//     if(n<=a.length){
//         for(var i=0;i<n;i++){
//             console.log(a[i])
//         }
//     }
// }
// retrieve([3,4,5,6],3)

function lastRetrieve(a,n=1){
    // return a[0]
    if(n<=a.length){
        for(var i=0;i<n;i++){
            console.log(a[a.length-1-i]) //a.length-n+i
        }
    }
}
lastRetrieve([3,4,5,6],3)



/////////FUNCTION TO FIND THE MOST FREQUENT OCCURANCE

// function occur(a){
//     let m=new Map()
//     a.forEach((x)=>{
//         if(m.has(x)){
//             m.set(x,m.get(x)+1)
//         }else{
//             m.set(x,1)
//         }
//     })
//     return m
// }

// console.log(occur([4,5,8,1,1,1,2,3,4]));


// //SHUFFLE AN ARRAY

// function shuffleArray(a){
//     let n=a.length

//     while(n>0){
//         n--
//         let randomVal=Math.floor(Math.random() * n)
//         // let temp=a[n]
//         // a[n]=a[randomVal]
//         // a[randomVal]=temp


//     }
//     return a
// }

// console.log(shuffleArray([1,2,3,4,5,6]));



// function union(a1,a2){
//     return [...new Set(a1.concat(a2))]
// }
 

// console.log(union([1,2,3,4,5],[3,4,5,6,7]) );


function combine(x,y){
    console.log(x+y);
    return x.concat(y)
    
}
console.log(combine([1,2,3],[2,3,3]));



// function shuffleArray(arr){
//     let n=arr.length

//     while(n>0){
//         n--
//         let rand=Math.floor(Math.random()*n);
//         [arr[n], arr[rand]] = [arr[rand], arr[n]];

//     }
//     return arr
// }

// console.log(shuffleArray([1,2,3,4,5,6]));


const user = { name: "Alex", age: 25 };

for (let key in user) {
  console.log(key, user[key]);
}

const map = new Map([["x",1],["y",2]]);
map.forEach((v,k)=>console.log(k,v));
