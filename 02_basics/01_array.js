const myArr1=[0,1,2,3,"soheb","akhtar"]

const myArr2=new Array(1,2,3,4,5,6)  //another  way 

console.log(myArr1)
console.log(myArr2)

console.log("-------------ADD------------------")
myArr1.push(5)
myArr2.push(8)
console.log(myArr1)
console.log(myArr2)
console.log("-------------DELETED------------------")
myArr1.pop(5)
myArr2.pop(8)
console.log(myArr1)
console.log(myArr2)
console.log("-------------ADD element for forent ------------------")
myArr1.unshift(9)  // add element for forent side
console.log(myArr1)
console.log("-------------Deleted element for forent ------------------")
myArr1.shift() // deleted element forent side 
myArr1.shift()
console.log(myArr1)

console.log("-------------find elements------------------")
console.log(myArr1.includes(5)) // find element 
console.log(myArr1.indexOf(3))  // serchar element by index
console.log("-----------------------------------------------------------")

const newArr=myArr1.join()  //undue array
console.log(myArr1)
console.log(newArr)

console.log("--------------SLICE --------------------------")
console.log("A " ,myArr1 )
const arr1 = myArr1.slice(2,4)
console.log(arr1)
console.log("B " ,myArr1 )

console.log("--------------SPLICE --------------------------")
console.log("A " ,myArr1 )
const arr2 = myArr1.splice(1,4)
console.log(arr2)
console.log("B " ,myArr1 )

console.log("--------------add twoo array --------------------------")
const marvel_hero=["thor","ironman","spiderman"]
const dc = ["syperman","ironman","nathman"]
console.log(marvel_hero)
console.log(dc)

// marvel_hero.push(dc)
// console.log(marvel_hero)
console.log("--------------OR---------------------")

const allHero= marvel_hero.concat(dc)
console.log(allHero)
console.log("--------------OR---------------------")

const allNewHero = [...marvel_hero,...dc]
console.log(allNewHero)

console.log("--------------one array---------------------")

const anotheArr=[5,9,8,[58,96,45],15,61,5,[8,9,7,4,5],0,0,0]
const oneArr=anotheArr.flat(Infinity)
console.log(oneArr)

console.log("--------------Convert Array---------------------")
let sc=500
let sc1 =600
let sc2=700
let sc3=800
console.log(Array.of(sc,sc1,sc2,sc3))