//1- Print unique values from an array

const arr = [1, 2, 3, 3, 4, 5, 5];
let ans=[...new Set(arr)]
console.log(ans);


//2- How do you use the reduce() method to sum elements in an array without using a loop?

ans=arr.reduce((sum,cur)=> sum + cur,0)
console.log(ans);

//3- How can you flatten a nested array into a single flat array?

const arrF = [1, [2, 3], [4, [5, 6]]];
ans=arrF.flat(Infinity)
console.log(ans);

// /4- How can you find the intersection of two arrays?
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arr1.filter(item => arr2.includes(item));
console.log(intersection);  // [3, 4]

//5- Write a function that swaps the first two elements in a given array (solve with destructing)

const array = [3, 5, 1, 4, 2];

function swap(x,y,...arr){
    return [y,x,...arr]
}
console.log(swap(...array));

//6- Explain different ways to reverse an array and show each with a code example

const arr3 = [1, 2, 3, 4, 5];

ans=arr3.toReversed()
console.log(ans);


const originalArray = [1, 2, { a: 3 }, [4, 5]];
const copiedArray = structuredClone(originalArray);

copiedArray[2].a = 99;
copiedArray[3][0] = 44;

console.log(originalArray); // Output: [1, 2, { a: 3 }, [4, 5]]
console.log(copiedArray); 

const str="Tushar"
ans=str[0].padEnd(str.length,"x")
console.log(ans);

//---------------------------------------------------AI---------------------------------
const obj1 = [
    { id: 1, name: "TJ" },
    { id: 2, name: "Tushar" }
];

const obj2 = [
    { uid: 1, price: 1000 },
    { uid: 2, price: 3000 }
];

// Create a map from obj2 using uid
const obj2Map = new Map(obj2.map(o => [o.uid, o]));

const merged = obj1.map(o1 => {
    const match = obj2Map.get(o1.id);
    if (match) {
        // Merge and rename uid → id (optional)
        const { uid, ...rest } = match; // remove uid
        return { ...o1, ...rest };
    }
    return o1;
});

console.log(merged);
//------------------------------------------------------