// const p=new Promise((res,rej)=>{
//     let succ=true

//     setTimeout(()=>{
//         if(succ){
//         res("Solved")
//     }else{
//         rej("Rejected")
//     }
//     }   ,5000)
// })

// const p1=new Promise((res,rej)=>{
//     let succ=true

//     setTimeout(()=>{
//         if(succ){
//         res("Solved")
//     }else{
//         rej("Rejected")
//     }
//     }   ,8000)
// })



// function a(){
//     p.then((x)=> console.log(x));
//     console.log("Tushar");   
// }

// a()  //here  Tushar will print first then the waiting promise after 5 second


// async function b(){
//     const val = await p;
//     console.log("done");
    
//     console.log(val)  //here it will wait and print done and val together after 5sec
   
//     // const val1=await p1
//     //  console.log(val)
//     // console.log("done");
//     // console.log(val1);
    
// }   

// b()



// async function c(){
//     const val = await p1;
//     console.log("done");
    
//     console.log(val)  //here it will wait and print done and val together after 5sec
   
//     const val1=await p


//     console.log(val1);
//         console.log("done"); //here what will happen is that total time it will take is 8sec and when that 8sec promise will be resolved the 5sec will already be done
    
// }   
// c()


// async function fetchdata(){
//     const res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data=await res.json()
//     console.log(data);
    
// }

// fetchdata()

