function addTwoNums(num1,num2){
    console.log (num1+num2)
}
// addTwoNums(4,8)

function addtwo(num1,num2){
    let result = num1+num2
    return result 
}
const ans = addtwo(3,5)
// console.log("result : "+ ans )




function loginUserMessage(userName){
    if(userName===undefined){
        console.log("Please enter a username ")
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("soheb"))


 //create array
 function createArray(...num){
    return num
 }
 console.log(createArray(200,36,5,4,9,5))

 //OR
 function createArray(val1,val2,val3, ...num){
    return num
 }
 console.log(createArray(200,36,5))

 //create object
 const user={
    fname: "soheb",
    lname: "akhtar",
    age: 22
 }

 function handleObject(anyObject){
    console.log(`username is ${user.fname} ${user.lname } and age is ${user.age}`)
 }
//  handleObject(user)
 // call other object
 handleObject({
    userName : "sohrat",
    age: 23
    })



const myArray=[200,63,58,96,2,3,2,23]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(myArray))

console.log("----------------------SCOPE----------------------------------")
function one (){
    const name="soheb"
    console.log("one function call")
    function two(){   //inner function
     
        console.log(name)
    }
    two()
}
one()
