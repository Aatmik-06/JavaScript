// Function is a block of code which we have to use multiple times 


// Making an function
// function identity(parameters/arguments){
//          code 
// }


// Calling a function
// identity(write parameters if given)


// 1.Function decelaration 
// 2.Function Definition 
// 3.Function calling    
// these are used to make function



// Types of function
// 1.without parameter and no return
// 2.without parameter and return
// 3.with parameter and no return 
// 4.with parameter and return
// 

// without parameter and no return function
function hello() {
    alert("This is an function")
}

hello()

// without parameter and return
function addition(){
    let number1 = parseInt(prompt("Enter first number"))
    let number2 = parseInt(prompt("Enter second number"))
    return number1+number2  // return value will go inside function calling
}

console.log(addition())   // return value will come inside this 

// if we have to store the answer so
let a = addition()
console.log(a*a);