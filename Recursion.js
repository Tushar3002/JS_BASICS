function pNum(i,n){
    if(i>n) return ;
    console.log(i);
    return pNum(i+1,n)
}

// pNum(1,5)


function pNumRev(i,n){
    if(i>n) return ;
    
    pNumRev(i+1,n)
    console.log(i);
}

pNumRev(1,5)

function  factorial(n){
    if (n<=0) return 0
    if (n==1) return 1
    return n*factorial(n-1)
}
// console.log(factorial(5));


//Sum of First N Numbers
function Sum(n){
    if(n==0) return 0

    return n+Sum(n-1)
}
console.log(Sum(10));


//Reverse a String

function rev(str){
    if (str.length <= 1) return str
    console.log(str[0]);
    
    return rev(str.slice(1)) + str[0]
}
console.log(rev("Tushar"));

//4️⃣ Power Function

function power(p,e){
    if (e==1) return p
    return p*power(p,e-1)
}

console.log(power(2,4));

// Fibonacci

function fibo(n){
    if (n <= 1) return n
    return fibo(n - 1) + fibo(n - 2)
}
console.log(fibo(6));

function fibSeries(n, a = 0, b = 1){
    if (n == 0) return
    console.log(a)
    fibSeries(n - 1, b, a + b)
}



fibSeries(6)

// function fibo1(n,a=0,b=1){
//     // if(n===n) return 
//     if (n==0) return
//     console.log(b);
    
//     return fibo1(n-1,b,a+b)
// }
// fibo1(6)

//6️⃣ Check Palindrome

function isPalindrome(str){
    if (str.length <= 1) return true
    if (str[0] !== str[str.length - 1]) return false
    return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome("madam"));

//Sum of Digits

function DigitSum(n){
    if (n == 0) return 0
    return (n % 10) + DigitSum(Math.floor(n / 10))
}

console.log(DigitSum(1234));


// 8️⃣ Count Occurrences in Array
// count([1,2,3,2,2], 2) → 3

function count(arr, target, index = 0){
    if (index == arr.length) return 0
    return (arr[index] == target ? 1 : 0) + count(arr, target, index + 1)
}

console.log(count([1,2,3,2,2], 2));



// 🔟 Binary Search (Recursive)
// binarySearch([1,2,3,4,5], 4) → 3

function binarySearch(arr, target, left = 0, right = arr.length - 1){
    if (left > right) return -1

    let mid = Math.floor((left + right) / 2)

    if (arr[mid] == target) return mid
    if (target < arr[mid])
        return binarySearch(arr, target, left, mid - 1)
    else
        return binarySearch(arr, target, mid + 1, right)
}

console.log(binarySearch([1,2,3,4,5], 4))


function sumOfDig(n){
    let ans=0;
    while(n>0){
        let rem=n%10
        ans=ans+rem
        n=Math.floor(n/10)
    }
    return ans
}
console.log(sumOfDig(123));

//------------------------------------------------------------

// 🔹 Level 1 – Basics

// Print numbers from 1 to N
// Example: 1 2 3 4 5

function printN(i,n){
    if(i>n) return ;
    console.log(i);
    printN(i+1,n)
    
}
printN(1,5)

// Print numbers from N to 1
// Example: 5 4 3 2 1

function printNRev(i,n){
    if(i>n) return ;
    
    printNRev(i+1,n)
    console.log(i);
    
}
printNRev(1,5)

// Sum of first N numbers
// Input: 5 → Output: 15

function SumofN(n){
    if(n==0) return 0;
    return SumofN(n-1) + n;
}
console.log(SumofN(5));


// Factorial of a number
// Input: 5 → Output: 120

function fact(n){
    if(n<0) return null
    if(n<=1) return 1
    return n* fact(n-1)
}
console.log(fact(5));

// Reverse a string
// Input: "hello" → Output: "olleh"

function revStr(str){
    if(str=="") return str
    return revStr(str.slice(1))+str[0]
}

console.log(revStr("Tushar"));


// 🔹 Level 2 – Intermediate

// Fibonacci number
// Return nth Fibonacci number using recursion.

function fib(n){
    if(n==0) return 0
    if(n==1) return 1
    return fib(n-1) + fib(n-2)
}
console.log(fib(6));

// Print first N Fibonacci numbers
// Example: 0 1 1 2 3 5 ...

function fibS(n,a=0,b=1){
    if(n==0) return 0
    console.log(a);
    
    return fibS(n-1,b,a+b)

}
fibS(6)

// Check if a string is palindrome
// Input: "level" → Output: true

function palin(str){
    if(str.length<1) return true
    if(str[0]!==str[str.length-1]) return false
    return palin(str.slice(1,-1))
}

console.log(palin("level"));


// Sum of digits of a number
// Input: 1234 → Output: 10

function sumOfD(n){ 
    if(n==0) return 0;
    return (n%10)+sumOfD(Math.floor(n/10))
}
console.log(sumOfD(12345));


// Power function (x^n)
// Input: (2,4) → Output: 16

function pow(n,x){
    if(x==0) return 1
    return pow(n,x-1) * n
}
console.log(pow(2,3));

// 🔹 Level 3 – Arrays & Objects

// Count occurrences of an element in an array
// Example: [1,2,2,3,2], count 2 → 3

function occ(arr,tar,idx=0){
    if(idx===arr.length) return 0
    return (arr[idx]===tar?1:0) + occ(arr,tar,idx+1)
}
console.log(occ([1,1,2,3,3,2,3,3,3],3));


// Find max element in an array using recursion

function maxArr(arr,idx=0,max=-Infinity){
    if(idx>=arr.length) return max;
    max=arr[idx]>max?arr[idx]:max
    return maxArr(arr,idx+1,max)
}
console.log(maxArr([5,6,8,33,3]));


// Reverse an array recursively

function revArr(arr){
    if(arr.length <= 1) return arr

    return [arr[arr.length - 1]].concat(revArr(arr.slice(0, -1)))
}
console.log(revArr([1,2,3]));


// Flatten a nested array
// Input: [1, [2, [3,4], 5]] → Output: [1,2,3,4,5]

function flatten(n){
    let arr=[]
    for(let i of n){
        if(Array.isArray(i)){
            arr=arr.concat(flatten(i))
        }else{
            arr.push(i)
        }
    }
    return arr
}
console.log(flatten([1,[2,[3,4],5]]))

// Sum of all elements in a nested array

function sumFlatten(n){
    let sum=0
    for(let i of n){
        if(Array.isArray(i)){
           sum +=sumFlatten(i)
        }else{
            sum += i
        }
    }
    return sum
}
console.log(sumFlatten([1,[2,[3,4],5]]))

// 🔥 Print only even numbers from 1 to N using recursion

function evenN(i,n){
    if(i>n) return false
    if(i%2===0) console.log(i)
    evenN(i+1,n)
}
evenN(1,10);


// 🔥 Count total nodes in nested replies object

// 🔥 Find depth of nested replies (max nesting level)

// 🔥 Generate all subsets of [1,2,3]

// 🔥 Print pattern:

// 1
// 12
// 123
// 1234

function pattern(n){

}
console.log(pattern(5));
