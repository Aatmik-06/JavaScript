let x ;
x = Math.random()*10;

x = Math.floor(Math.random()*50);  // it will give random integer 

console.log(x);
document.getElementById("demo").innerHTML = x;

function fun(min,max){  // we have to pass arguments when we call function 
    return Math.floor(Math.random() * (max - min + 1) + min)  // formula is used to get range  
}

let result = fun(50,100);  // we have to pass one min value and one max value in arguments // so we have used an function here so that we can give range for printing random number 
                           // so this will give random numbers btw 50 to 100 
console.log(result);

const array = ["jkj","yurei","truyet"];
console.log(array)

const stringArray = array.toString();  // so .toString() is used to convert array into string  

console.log(stringArray)

const newArary = array.join("*")  // so we can change comma or we can change seperator using join and it will also convert array into string 
console.log(newArary)



