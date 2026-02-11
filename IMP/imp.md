Objects are objects
Maths are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
RegExp are Objects
Errors are Objects


-------------------------------------------------
JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.

Example 1 does not give the same result as Example 2:

Example 1
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
Example 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // 5  undefined

var y = 7; // Initialize y


// Group customers by city.

ans=customers.reduce((acc,cur)=>{
    if(!acc[cur.city]) acc[cur.city]=[]
    acc[cur.city].push(cur);
    return acc
},{})

console.log(ans);
{
  'New York': [
    { id: 1, name: 'Tom', city: 'New York' },
    { id: 3, name: 'Spike', city: 'New York' }
  ],
  'Los Angeles': [
    { id: 2, name: 'Jerry', city: 'Los Angeles' },
    { id: 2, name: 'Jerry', city: 'Los Angeles' }
  ],
  Chicago: [ { id: 4, name: 'Tyke', city: 'Chicago' } ]
}

// Count how many customers per city.

ans=customers.reduce((acc,cur)=>{
    acc[cur.city]=(acc[cur.city] || 0) +1
    return acc;
},{})

console.log(ans);
{ 'New York': 2, 'Los Angeles': 2, Chicago: 1 }


// Merge items with the same SKU, summing their quantities.

const mergedInventory = Object.values(
  inventory.reduce((acc, item) => {
    if (acc[item.sku]) {
      acc[item.sku].quantity += item.quantity;
    } else {
      acc[item.sku] = { ...item };
    }
    return acc;
  }, {})
);