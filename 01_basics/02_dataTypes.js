//number => 2 to 53
//bigint
//string =>""
//boolean =>true/false
//null=> standalone value 
//undefined =>
//Symbol => unique
let state;
let age = 18
let name = "soheb"

// console.log(typeof undefined);
// console.log(typeof null);

let score =123.2569
let valueInNumber=Number(score)  //convert string to number 
console.log(typeof score);


const othernum=123.36985
console.log (othernum.toPrecision(4))

const hund=10000000
console.log (hund.toLocaleString(`en-IN`))

//==================================MATH=======================


console.log (Math)
console.log ("remove -ve value " + Math.abs(-10))
console.log ("roundup " + Math.round(4.3))
console.log ("ceil up " + Math.ceil(4.3))
console.log ("floor value " + Math.floor(4.3))
console.log ("minimum value " + Math.min(9,6,3,8,5,2))
console.log ("maximum value " + Math.max(9,6,3,8,5,2))
console.log(Math.random());
console.log ("rendom value greter then 1 " + Math.random()*10+1)
console.log ("flool random value " + Math.floor(Math.random()*10+1))




