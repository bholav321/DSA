//Prime Number

const num = 997; //Prime Number
let count =0;

for(let i=2; i<=num/2; i++){
    if(num%i==0)
        count++;
}
if(count===0)
    console.log("Prime Number")
else
    console.log("Not Prime Number")