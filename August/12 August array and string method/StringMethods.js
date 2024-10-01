let x = "Jhonny";
x = "10";
// to use single quote inside so we use double quotes in outside

x = "My name is john doe and he is john doe's friend";
// or 
x = 'My name is john doe and he is john doe\'s friend';
console.log(typeof x); // type of is used to get the datatype of any variable

document.getElementById("demo").innerHTML = x;



let y = "john";
let city = "Bhopal";

y = `Hello world I am ${y} from ${city}`;  // backticks is used here 

document.write(y , "<br>"); 



let name1 = " Aatmik ";
let city1 = " Chhindwara";
let age = "19 Years old ";
let course = "full Stack Development";
 
let a = `My Name is ${name1}I am from ${city1} I am ${age} I am currently doing  ${course} course `;

document.write(a)
