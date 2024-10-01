let x = "Hello Everyone";

let y = x.concat(",","World");  // we donot have to use + to add elements we can use ,concat for adding element 

document.getElementById("demo").innerHTML = y;

// accessing the element of string 
console.log(x[1]);
console.log(x.charAt(3));
console.log(x.at(4));

console.log(x.charCodeAt(3)) // so this will return charactercode of the element so at 3 there is l so charcode of l is 108 

let newString = x.slice(4,12); // so it will give values btw the values and include 4 but not include 12 
// newString = x.slice(-10,-5);
console.log(newString)

let newString1 =x.substring(4,12);   // works same as slice but we cannot give negative value in substring
console.log(newString1); 

function fun(){

    let data =document.getElementById("demo2");

    data.innerHTML = `
    <table>
    <tr>
    <th>Name</th> 
    <th>city</th> 
    <th>Contact</th> 
    </tr>
    <tr>
    <th>Aadi</th> 
    <th>Bhopal</th> 
    <th>8878787878</th> 
    </tr>
    </table>`;
    data.style.backgroundColor="red";
}