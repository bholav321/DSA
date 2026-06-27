const arr = [23,2,1,34,35,21,5]
let largest = arr[0];

for(let i=0; i<arr.length; i++){
    if(largest<arr[i])
    largest = arr[i];
}

console.log("Largest Element of the Array is: ",largest)