
// Add Event Listner is an pre definrd function used to perform various event like click with the help of js and we donot have to use event on html
document.getElementById("btn").addEventListener("click" ,function(){
    document.getElementById("demo").innerHTML="hello"
})

document.getElementById("btn").addEventListener("click",display);
function display(){
    document.getElementById("demo1").innerHTML="World"
    
}
btn.addEventListener("mouseenter",data);
function data() {
    document.getElementById("demo2").innerHTML =parseInt( Math.random()*200);
}
// we can use multiple events on same button with addEventlistner 


// we can also remove event by removeEventlistner

btn.removeEventListener("click",display);