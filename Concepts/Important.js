// spread operator and destructuring assignment are two important features in JavaScript that allow for more concise and readable code.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function avg(a,b,c){
    return (a+b+c)/3;
}
let result = avg(...arr1);

console.log(result); // Output: 2


let a = [...arr1];
let mergeArr = [...arr1, ...arr2];
console.log(mergeArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(a); // Output: [1, 2, 3]

//________________


let obj1 = {name: "Gittu", age: 30};

let obj2={...obj1, age: 12, city: "New York"};
console.log(obj2); // Output: {name: "Gittu", age: 12, city: "New York"}


// Destructuring assignment allows you to extract values from arrays or properties from objects into distinct variables.

let obj = {name: "Gullu", age: 25, city: "Los Angeles"};

const {name, age, city} = obj;
console.log(name);
console.log(age);
console.log(city); // Output: Gullu 25 Los Angeles