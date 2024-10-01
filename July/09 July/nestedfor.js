
// for (let i=1;i<=5;i++) {

//     document.write("*")
    
// }




for(let r=1;r<=5;r++)
        {
for (let c=1;c<=r;c++)
    {
        document.write("*")
    }
    document.write("<br>")
}


// == will compare values 
// === will compare values and DataType also 

// it will compare values 
let a='5'
let b=5
console.log(a==b)

// it will compares datatype and values 
let c='5'
let d=5
console.log(c===d)



// ?: ternary operator
// if condition is true so it will execute first block written before :

let n=20
 n>15 ? console.log("Greater"):console.log("Lesser") 


//  WAP to check number is even or odd using ternary operator

let z=parseInt(prompt("Enter any number"))
z%2==0 ? console.log("Even"):console.log("Odd")