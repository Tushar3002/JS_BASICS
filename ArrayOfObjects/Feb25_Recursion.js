let arr = [1, 2, 3, 3, 3];

function sumArr(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArr(arr.slice(1));
}
console.log(sumArr(arr));

//Find Maximum Element in Array (Recursively)

function findMax(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = findMax(arr.slice(1));

  return arr[0] > max ? arr[0] : max;
}
console.log(findMax([4, 9, 2, 7, 5]));

//Count Occurrences of a Number in Array

function occu(arr, target) {
  let count = 0;
  if (arr.length === 0) return 0;
  if (arr[0] === target) count += 1;

  return count + occu(arr.slice(1), target);
}
console.log(occu([1, 2, 1, 5, 3, 3, 3], 5));

//Reverse a String Using Recursion

function revStr(str) {
  if (str.length === 0) {
    return str;
  }
  return revStr(str.slice(1)) + str[0];
}
console.log(revStr("Jana"));

//Check if Array is Palindrome (Recursively)

function isPalindrome(arr) {
  if (arr.length <= 1) {
    return true;
  }

  if (arr[0] !== arr[arr.length - 1]) {
    return false;
  }

  return isPalindrome(arr.slice(1, -1));
}

console.log(isPalindrome([1, 2, 3, 2, 1]));

//Fibonacci (Classic Recursion)

function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6));

//1️⃣ Deep Key Rename

let data = {
  user: {
    userName: "dev",
    details: {
      userName: "admin",
    },
  },
};
// 👉 Rename every "userName" key to "username" recursively.

function rename(val) {
  for (let i in val) {
    if (i === "userName") {
      val["usernaam"] = val[i];
      delete val[i];
    }
    if (typeof val[i] === "object") {
      rename(val[i]);
    }
  }
  return val;
}
console.log(rename(data));
// ___*( ￣皿￣)*___

// console.log(Object.values(data));

// 2️⃣ Find All Even Numbers in Mixed Structure
// let mixedData = {
//   a: 1,
//   b: [2, 3, { c: 4 }],
//   d: { e: 6 }
// };

// // 👉 Return array of all even numbers.

// function mixData(data){
//     let arr=[]
//     function filterData(val){
//         if(typeof val ==="number" && val%2===0){
//             arr.push(val)
//         }else
//         if(Array.isArray(val)){
//             for(let i of val){
//                 filterData(i)
//             }
//         }else
//         if(typeof val==="object" && val !== null){
//             for(let i in val){
//                 filterData(val[i])
//             }
//         }
//     }
//     filterData(data)
//     return arr
// }
// console.log(mixData(mixedData));

function filterData(val, arr = []) {
  if (typeof val === "number" && val % 2 === 0) {
    arr.push(val);
  } else if (Array.isArray(val)) {
    for (let i of val) {
      filterData(i, arr);
    }
  } else if (typeof val === "object" && val !== null) {
    for (let i in val) {
      filterData(val[i], arr);
    }
  }

  return arr;
}

let mixedData = {
  a: 1,
  b: [2, 3, { c: 4 }],
  d: { e: 6 },
};

// console.log(filterData(mixedData));

//🔥 4️⃣ Count How Many Times Key Appears
let data2 = {
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3,
    },
  },
};
// 👉 Count occurrences of key "a".

function countOcc(data, target) {
  let count = 0;
  for (let i in data) {
    if (i === target) {
      count++;
    } else if (typeof data[i] === "object") {
      count += countOcc(data[i], target);
    }
  }
  return count;
}

// console.log(countOcc(data2,"c"));
// console.log(Object.values(data2));

// 🔥 5️⃣ Remove Duplicate Values Deeply
let data3 = {
  a: [1, 2, 2, 3],
  b: {
    c: [3, 4, 4],
  },
};
// 👉 Remove duplicates at every level.

function removeDupli(data) {
  for (let i in data) {
    if (Array.isArray(data[i])) {
      let s = [...new Set(data[i])];
      // console.log(s);
      data[i] = s;
    } else if (typeof data[i] === "object") {
      removeDupli(data[i]);
    }
  }
  return data;
}
console.log(removeDupli(data3));

//  6️⃣ Find Longest String in Nested Structure
let data4 = {
  a: "hi",
  b: ["hello world", { c: "javascript" }],
};
// 👉 Return longest string.

// function longestString(obj){
// let len=0
//     for(let i in obj){
//         if(typeof obj[i]==="string"){
//             len = obj[i].length
//             // console.log(len);

//         }else if(Array.isArray(obj[i])){
//             longestString(obj[i])
//         }else if(typeof obj[i]==="object"){
//             longestString(obj[i])
//         }
//     }
//     return len
// }
function longestString(obj) {
  let maxLen = 0; // keep track of max length

  if (typeof obj === "string") {
    return obj.length;
  }

  if (Array.isArray(obj)) {
    for (let item of obj) {
      let len = longestString(item);
      if (len > maxLen) maxLen = len;
    }
  } else if (typeof obj === "object" && obj !== null) {
    for (let key in obj) {
      let len = longestString(obj[key]);
      if (len > maxLen) maxLen = len;
    }
  }

  return maxLen;
}

console.log(longestString(data4));

//9️⃣ Reverse Nested Array (Without flat)
let arr2 = [1, [2, [3, 4]]];
console.log(arr2);

console.log(arr2.toReversed());

function revNestedArr(arr) {
    return arr.slice().reverse().map(x=>{
    if(Array.isArray(x)){
        return revNestedArr(x)
    }
    return x
})
};
console.log(revNestedArr(arr2));    //[ [ [ 4, 3 ], 2 ], 1 ]

