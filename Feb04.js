var a = 9, b =3
console.log(b && a);    //9

var foo = 'outside';

function logIt() {
  console.log(foo); 
  var foo = 'inside';
  }
logIt();


console.log(42..toString());
console.log(4.2.toString());


object1 = {
  prop1: 1,
  prop2: 2
}
object1.prop33=3
console.log(object1);

Object.freeze(object1);
console.log(object1);

object1.prop3=3

console.log(object1);


// x = 10;
// console.log(x);
// var x;


console.log(x);
var x;
x = 10;

//Longest word from the sentence


function findLongestWord(s){
    return s.split(" ").reduce((acc,cur)=>cur.length >acc.length? cur: acc)
}
console.log(findLongestWord("My Name is Tiushar Jana"));

function findLongestWord2(s){
    return s.split(" ").sort((a,b)=>a.length-b.length).at(-1)
}
console.log(findLongestWord2("My Name is Tiushar Jana"));

////////Generate Hash 

function hashGenerator(s){
    return "#".concat(s.split(" ").map(x=> x.at(0).toUpperCase()+x.slice(1)).join(""))
}

function hashGenerator2(s){
    return "#".concat(s.split(" ").map(x=> x.replace(x.at(0),x.at(0).toUpperCase())).join(""))
}

console.log(hashGenerator("My name is tiushar jana"));
console.log(hashGenerator2("My name is tiushar jana"));



// Count occurance of a character in a word

function countOccurance(word,target){
    const m=new Map()
    word=word.toLowerCase()
    target=target.toLowerCase()
    word.split("").forEach((x)=>{
        if(m.has(x)){
            m.set(x,m.get(x)+1)
        }else{
            m.set(x,1)
        }
    })
    if(m.has(target)){
        return m.get(target)
    }
    return false;
}
function countOccurance2(word,target){
    word=word.toLowerCase()
    target=target.toLowerCase()
    const ans=word.split("").filter((x)=>x==target).length
    return ans
}

function countOccurance3(word,target){
    word=word.toLowerCase()
    target=target.toLowerCase()
    const ans=word.split("").reduce((acc,cur)=>cur==target?acc+1:acc,0)
    return ans
}

console.log(countOccurance("mississipipi","I"));
console.log(countOccurance2("mississippi","I"));
console.log(countOccurance3("mississippi","I"));


function palindrome(s){
    s=s.toLowerCase().replace(/\W/g,"")
    return s==s.split("").reverse().join("")
}


console.log(palindrome("madam"));
console.log(palindrome("A man,a plan,a canal, Panama"));


//factorial

function factorial(n){
    return n.toString().split().reduce((acc,cur)=>acc>0? acc*--acc:acc,n)
}
console.log(factorial(5));


