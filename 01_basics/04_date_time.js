let myDate = new Date()
console.log(typeof myDate)
console.log("OUTPUT 1 ::" + myDate.toString())  //imp
console.log("OUTPUT 2 ::" + myDate.toISOString())
console.log("OUTPUT 3 ::" + myDate.toJSON())
console.log("OUTPUT 4 ::" + myDate.toLocaleDateString())
console.log("OUTPUT 5 ::" + myDate.toLocaleString())  //imp

console.log(typeof myDate)

let createdDate= new Date(2025,8,14)
console.log("OUTPUT 6 ::" + createdDate.toString())  

let createdDate1= new Date(8,14,2025)
console.log("OUTPUT 7 ::" + createdDate1.toLocaleString()) 

// let myTimestamp=Date.now()
// console.log("OUTPUT 8 ::" + myTimestamp.toString())




