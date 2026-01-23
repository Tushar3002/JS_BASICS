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