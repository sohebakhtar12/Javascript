const mySym=Symbol("key1")

const jsUser={
    name:"Soheb",
    "fullName " : "Soheb Akhtar",
    age:22,
    location:"Bihar",
    email:"sohebakhtar2001@gmail.com",
    lastLoginDay : ["mondat","saturday"],

    [mySym] : "mykey1"
}

// console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser[mySym])

console.log("---------------update email----------------")
jsUser.email="akhtarsoheb610@gamil.com"
console.log(jsUser.email)
//Object.freeze(jsUser) // freeze object can not change any think

jsUser.greeting = function () {
    console.log("Hello is User")
}

jsUser.greeting1 = function () {
    console.log(`hello js user ${this.name}`)
}

// call methods
jsUser.greeting()
jsUser.greeting1()

console.log("------------create object--------------")
const tinderUser ={}

tinderUser.name ="soheb Akhtar"
tinderUser.id ="3456452"
tinderUser.islogin= false 
console.log("--------------object methods--------------")
// console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))






console.log("------------create object inside object--------------")
const regularUser={
    email: "sohebakhtar2001@gmail.com",
    name :{
        username :{
            fname: "soheb",
            lname : "akhtar"
        }     
    }
}

console.log(regularUser.name.username.fname)

console.log("-----------many object into one obeject-----------------")
const obj1={1:"a", 2:"b", 3:"c"}
const obj2={4:"d", 5:"y" , 6:"s"}
const obj3={7:"o" , 8:"w" , 9:"x"}
const obj4={...obj1,...obj2,...obj3}
console.log(obj4)