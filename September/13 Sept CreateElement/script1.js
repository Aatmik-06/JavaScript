const student = [
    {"rollno":101,
      "name":"Aadi",
      "City":"Bhopal"
    },
    {"rollno":101,
        "name":"Aadi",
        "City":"Bhopal"
      },
      {"rollno":101,
        "name":"Aadi",
        "City":"Bhopal"
      },
]

console.log(student)

async function datashow() {
    let mytable = `
    <table border="1px" align= "centre"> 
    <tr bgcolor="red">
        <th>roll no </th>
        <th>name</th>
        <th>City</th>
    </tr>
    `;
    let myobj = await fetch(student);
student.map((key) =>{
    mytable +=`
    <tr>
    <td>${key.rollno}</td>
    <td>${key.name}</td>
    <td>${key.City}</td>
    </tr>
    `;
   });
   
   mytable +=`</table>`;
   document.getElementById("demo").innerHTML = mytable;
   
}
datashow()

console.log(student[2].rollno);

