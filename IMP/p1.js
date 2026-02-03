//SQUARE
let arr=[1,2,3,4,5]
let arr2=[1,2,3,4,5,1,2,11,1,1,1]

let ans=arr.map(x=>x*x)
let ans2=[... new Set(arr2)]
console.log(ans);
console.log(ans2);


//3. Reverse a string

let str="Tushar"

let rev=str.split("").reverse().join("")
console.log(rev);

//Count Vowels

let str2="Tushar Jana"
let vowel=str2.match(/[aeiou]/gi).length
console.log(vowel);

//➕ 5. Sum of array elements

let arr3=[1,2,3,4,5]
let sum=arr3.reduce((sum,curr)=>sum+curr,0)
console.log(sum);


//🔍 6. Find even numbers

let arr4=[1,2,3,4,5,6,7,8,9,10]
let ans3=arr4.filter(x=>x%2==0)
console.log(ans3);

// 7. Capitalize first letter of every word

let str3="tushar jana from india"
let ans4=str3.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ")
console.log(ans4)

// 8. Check palindrome

let str4="mdam"
let pal=s=>s === s.split("").reverse().join("")
console.log(pal(str4));

//🧮 9. Frequency count of array elements

let arr5=[1,2,2,3,4,4,4,5,5,5,5]

let m=new Map()

for(let i of arr5){
    if(m.has(i)){
        m.set(i,m.get(i)+1)
    }else{
        m.set(i,1)
    }
}
console.log(m);

//10. Find maximum number

let arr6=[1,5,3,9,2,8]
let max=Math.max(...arr6)

let max2=arr6.reduce((max,cur)=> cur>max?cur:max,arr6[0])
console.log(max2);

//11. Flatten array (1 level)

let arr7=[1,2,[3,4],[5,6]]
let fl=arr7.flat(1)
console.log(fl);

//12. Convert array of strings to uppercase

let arr8=["tushar","jana","india"]
let up=arr8.map(x=>x.toUpperCase())
console.log(up);

//13. Remove falsy values

let arr9=[0,1,false,2,"",3,null,4,undefined,5,"hello"]

let truthy=arr9.filter(x=>Boolean(x))
console.log(truthy);

//14. Count words in a sentence

let str5="Tushar Jana from India"

let wordCount=str5.split(" ").length
console.log(wordCount);

// 🎯 15. Check if all numbers are positive

let arr10=[1,2,3,4,5,-1]

let allPositive=arr10.every(x=>x>0)
console.log(allPositive);

// 16. Merge two arrays

let arr11=[1,2,3]
let arr12=[4,5,6]
let merged=[...arr11,...arr12]
console.log(merged);

//17. Find second largest number

let arr13=[1,5,3,9,2,8]
arr13.sort((a,b)=>a-b)
let secondLargest=arr13[arr13.length-2]
console.log(secondLargest);

// let first=-Infinity,second=-Infinity

// for(let num of arr13){
//     if(num>first){
//         second=first
//         first=num
//     }else if(num>second && num!=first){
//         second=num
//     }   
// }


//18. Remove duplicates from array of objects based on a key

let arr14=[
    {id:1,name:"Tushar"},
    {id:2,name:"Jana"},
    {id:1,name:"Tushar"},
    {id:3,name:"India"}
]
// let uniqueObjs=[...new Map(arr14.map(item=>[item.id,item])).values()]
// console.log(uniqueObjs);

let seen = new Set()

let uniqueObjs = arr14.filter(item => {
  if (seen.has(item.id)) return false
  seen.add(item.id)
  return true
})

console.log(uniqueObjs)

//19. Find missing number in an array of 1 to n

let arr15=[1,2,4,5,6]
let n=6
let totalSum=(n*(n+1))/2
let arrSum=arr15.reduce((sum,cur)=>sum+cur,0)
let missingNumber=totalSum - arrSum
console.log(missingNumber);

//Check if array is sorted
let arr16=[1,2,3,4,5]

let isSorted=arr16.every((x,i)=> i===0 || x>=arr16[i-1])
console.log(isSorted);

//Intersection of two arrays

let arr17=[1,2,3,4,5]
let arr18=[4,5,6,7,8]
let intersection=arr17.filter(x=>arr18.includes(x))
console.log(intersection);

//Difference of two arrays
let difference=arr17.filter(x=>!arr18.includes(x))
console.log(difference);

//Remove specific value
let arr19=[1,2,3,4,5,3,3]
let valueToRemove=3
let filteredArr=arr19.filter(x=>x!==valueToRemove)
console.log(filteredArr);

//Count occurrences of a character in a string
let str6="Tushar Jana from India"
let charToCount="a"
let count= str6.split("").filter(x=>x.toLowerCase()===charToCount.toLowerCase()).length
console.log(count);

//Remove spaces
let str7=" Tushar   Jana from   India "
let noSpaces=str7.replace(/\s+/g, '')
console.log(noSpaces);

let noSpaces2=str7.split(" ").join("")
console.log(noSpaces2);


//Find longest word in a string
let str8="Tushar Jana from India"
let longestWord=str8.split(" ").reduce((longest,cur)=> cur.length>longest.length?cur:longest,"")
console.log(longestWord);

//Count characters
let str9="Tushar Jana"
let charCount=str9.length
console.log(charCount);

//Generate range (1 to n)
let n2=10
let range=Array.from({length:n2},(_,i)=>i+1)
console.log(range);

//Shuffle array
let arr20=[1,2,3,4,5]
let shuffledArr=arr20.sort(()=>Math.random()-0.5)
console.log(shuffledArr);   

//Find average of array elements
let arr21=[1,2,3,4,5]
let average=arr21.reduce((sum,cur)=>sum+cur,0)/arr21.length
console.log(average);

//Check anagram
let str10="listen"
let str11="silent"
let areAnagrams=(s1,s2)=>{
    let sorted1=s1.split("").sort().join("")
    let sorted2=s2.split("").sort().join("")
    return sorted1===sorted2
}
console.log(areAnagrams(str10,str11));

//Find prime numbers in an array
let arr22=[1,2,3,4,5,6,7,8,9,10]
let isPrime=num=>{
    if(num<2) return false
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false
    }       
    return true
}
let primeNumbers=arr22.filter(x=>isPrime(x))
console.log(primeNumbers);

//Convert string to title case
let str12="tushar jana from india"
let titleCase=str12.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1).toLowerCase()).join(" ")
console.log(titleCase);

const d=new Date(2024);
console.log(d);