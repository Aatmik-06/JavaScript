// WAP to check number is even or divisible by 3 or not 
// let num1=parseInt(prompt("Enter any number"))
// if (num1%2==0) {
//     console.log("Even")
// }
// else if(num1%3==0) {
    
// console.log("Divisible by 3")
// }
//     else{
//         console.log("Not Divisible By 3")
//     }



// WAP to take 3 inputs 

    let num2=parseInt(prompt("Enter any number"))
    let num3=parseInt(prompt("Enter any number"))
    let num4=parseInt(prompt("Enter any number"))

    if (num2%2==0) {

        console.log("Even", num2*num3)
        
    } 
     else if (num2%2!=0) {

        console.log("Odd",num2+num3+num4)
        
    }

    


// WAP to check number is neutral or not 

let num5=parseInt(prompt("Enter any number"))
if (num5==0) {
    console.log("Neutral")
} else {
    console.log("Not neutral")
    
}


// WAP to make bill generator using switch case

let num6=parseInt(prompt("Press 1 for samosa , 2 for idli , 3 for chai and 4 for coofee"))

switch (num6) {
    case 1:
        let num7=parseInt(prompt("Enter Quantity"))
        console.log("Bill=",5*num7)
        break;
    
        case 2:
        let num8=parseInt(prompt("Enter Quantity"))
        console.log("Bill=",10*num8)
        break;

        case 3:
        let num9=parseInt(prompt("Enter Quantity"))
        console.log("Bill=",9*num9)
        break;

        case 4:
        let num10=parseInt(prompt("Enter Quantity"))
        console.log("Bill=",10*num10)
        break;

    default:
        console.log("Invalid input")
        break;
}




