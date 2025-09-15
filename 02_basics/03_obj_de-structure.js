const course ={
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor)  //normal call

//de-structure (supporting renaming,)

const {courseInstructor:instractor}=course
console.log(instractor)



