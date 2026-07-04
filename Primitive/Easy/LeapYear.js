//Leap Year

const year = 1900;

if (year % 400 === 0 ||  (year % 4 === 0 && year % 100 !== 0))
    console.log("Leap Year")
else
    console.log("Not a Leap Year")
