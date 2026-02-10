//REGEX

let str="my cat is cute"
console.log(str.match(/cat/));  //cat


str="age: 25"
console.log(str.match(/\d+/g));  //2,5

str="123 11 1"
console.log(str.match(/\d{3}/g));   //123

str="my cat is a cute caterpillar"
console.log(str.match(/\bcat\b/g));    //   \b is word boundary


str="order 12 costs 450 dollars"
console.log(str.match(/\d+/g)); //12,450

str = "Years: 1899 1999 2024 2100"
console.log(str.match(/\b(19|20)\d{2}\b/g));    // '1999', '2024' 

str="_user_1"
console.log(str.match(/^[a-zA-Z0-9_]{3,10}$/));

//password at least 1 letter    at least 1 number   minimum 6 characters

str="aBcD1234"
console.log(str.match(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9@!#$^&%*]{6,}$/));

str="33tushar.jana123@gmail.com"
console.log(str.match(/^[a-zA-Z\d][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/));


str="+91 1234567890"
console.log(str.match(/^\+91\s\d{10}$/));  //
console.log(str.match(/^\+\d{2}\s\d{10}$/));  //


