console.log("hello world")

//arrow function
let product_of_two=(a,b)=>{
    return a*b
}

console.log(product_of_two(2,4))

//student object with greet function
let student={
    name:'Hardik',
    age:26,
    greet(){
        console.log("Hello I'm ",this.name)
    }
}

student.greet()