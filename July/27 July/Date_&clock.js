// Date 
// constructor object is used 
let date = new Date() // new is an keyword 

console.log(date)
console.log(date.toLocaleTimeString()) // this will display only time 
console.log(date.toLocaleDateString()) // this will display only Date


// Making An Digital Clock

setInterval(()=>{
    let date = new Date()
    let time = date.toLocaleTimeString()
    let dg = document.getElementById('digitalclock')
    dg.innerHTML = time 
},1000)