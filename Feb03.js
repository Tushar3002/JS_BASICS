//Capitalize first and last

const str="Tushar Jana"

const ans=str.split(" ").map(val=>val.at(0).toUpperCase()+val.slice(1,-1)+val.at(-1).toUpperCase())

console.log(ans)


// swap cases upper to lower and lower to upper

const str2= "TushAR jaNA"
const ans2=str2.split(" ").map(v=>v.split("").map((letter)=>letter.charCodeAt()>=65 && letter.charCodeAt()<=90? letter.toLowerCase():letter.toUpperCase()))
console.log(ans2);


// Remove Vowels


const rem=str.split("").filter(val=>val!=('a'||'e'||'i'||'o'||'u')).join("")
console.log(rem);


//repeat abc ==aabbcc

//vowels should be capital   X

const res=str.split("").map(v=>'aeiou'.includes(v)? v.toUpperCase():v).join("")
console.log(res);


//alternate captials

const ans3=str.split("").map((v,i)=>i%2==0?v.toUpperCase():v).join("")
console.log(ans3);


///count vowels

const ans4=str.split("").reduce((count,v)=>'aeiou'.includes(v)? count + 1 :count,0)

console.log(ans4);

//remove first and last characters

const ans5=str.split(" ").map(x=>x.slice(1,x.length-1)).join(" ")

const ans6=str.slice(1,str.length-1)


console.log(ans5);
console.log(ans6);

const str3="My name is Tushar jana"
const ans7=str3.split(" ").reduce((long,curr)=>curr.length > long.length? curr:long,"")
console.log(ans7);

//Find First Repeating Character
//tushar jana

function RepeatingChar(str){
    const m=new Map()
  for (const ch of str) {
    if (m.has(ch)) {
      return ch; // first repeating character
    }
    m.set(ch, 1);
  }

}

console.log(RepeatingChar(str));
const d=new Date()
console.log(`${d.getHours()}:${d.getMinutes()}`);



for(let i=0;i<5;i++){
  let row=''
  for(let j=0;j<5;j++){
    row += '*'
  }
  console.log(row)
}

for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(5))
}
let n=5
for (let i = 0; i < n; i++) {
  console.log('*'.repeat(n-i))
}

for (let i = 0; i < n; i++) {
  console.log('*'.repeat(i+1))
}


