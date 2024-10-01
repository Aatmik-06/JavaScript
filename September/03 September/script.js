// JS is by default Synchronous 
// and it runs step by step so it is little slow 
// so we can make JS Asynchronous to make it fast


function fun(){
 console.log(1)
}
// Example of Asynchronous JS
console.log(2);
setTimeout(fun,2000);     // setTimeout is an Asynchronous function 
console.log(3)


// Promise is used in Asynchronous JS

// async function will always return an Promise

async function display() {
    return 34;
}
console.log(display());


// async and await are keywords

// fetch is an method in JS 
// used to perform all CRUD operation
// Promise will return response object 