async function datashow() {
    let mytable = `
    <table border="1px" align= "centre"> 
    <tr bgcolor="yellow">
        <th>Employee ID</th>
        <th>Employee No</th>
        <th>Employee Name</th>
        <th>Salary</th>
        <th>City</th>
    </tr>
    `;

let url ="http://localhost:3000/employees";
let myobj = await fetch(url);   // fetch will return response object
console.log(myobj);

let mydata = await myobj.json(); // converts mydata from response object to json  
console.log(mydata);

mydata.map((key) =>{
 mytable +=`
 <tr>
 <td>${key.id}</td>
 <td>${key.employeeno}</td>
 <td>${key.name}</td>
 <td>${key.salary}</td>
 <td>${key.city}</td>
 </tr>
 `;
});

mytable +=`</table>`;
document.getElementById("demo").innerHTML = mytable;

}
datashow();


// key will target all element of array of object