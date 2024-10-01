// Arguments or parameters will work as an input in function 

// With parameter and return
function demo(a){
   return a+a
}
var b=10
console.log(demo(b))

// with parameter and no return
function demo1(c){
    
    console.log(c)
}
var age = 19
demo1(age)



// WAP to take input from user and print the table using with argument and no return function

function table(a){
    for (let b = 1; b <= 10; b++) {
        console.log(a*b)
    }
}
table(parseInt(prompt("Enter number")))



// WAP to take input from user and print cube of that number with argument and return value

function cube(a){

    return a*a*a 
}
console.log(cube(parseInt(prompt("Enter number"))))