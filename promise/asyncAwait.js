let Promise1= Promise.resolve("A")
let Promise2= Promise.resolve("B")
let Promise3= Promise.resolve("C")

Promise.all([Promise1, Promise2, Promise3])
  .then(values => console.log(values));

Promise.any([Promise1, Promise2, Promise3])
  .then(values => console.log(values));

Promise.allSettled([Promise1, Promise2, Promise3])
  .then(values => console.log(values));

Promise.race([Promise1, Promise2, Promise3])
  .then(values => console.log(values));


function A(){
    return Promise.resolve("A")
}
function B(val){
    return Promise.resolve(val+"T")
}
function C(val){
    return Promise.resolve(val+"Z")
}


A()
.then(x=> B(x))
.then(x=> C(x))
.then(x=> console.log(x)
)

async function p(){
    let p1=await A()
    let p2=await B(p1)
    let p3=await C(p2)
    console.log(p3);
}

p()

function fail() {
  return Promise.reject("Failed");
}

async function run() {
  try {
    let value = await fail();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

run();