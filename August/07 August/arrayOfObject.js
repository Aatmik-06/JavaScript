// Array Of Object
// Array of Object is used to store multiple object in single array stores multiple data of different persons in one array

let employee = [
    {employeeId:2021,employeeName:"Adi",Age:20},
    {employeeId:2023,employeeName:"Jio",Age:21},
    {employeeId:2024,employeeName:"hui",Age:22},
    {employeeId:2022,employeeName:"Dai",Age:23},
    {employeeId:2025,employeeName:"guo",Age:24}
]

console.log(employee)

// using map function 
let namee = employee.map((p)=>{return p.employeeName})
console.log(namee)

let full = employee.map((p)=>{return p})
console.log(full)

let e = employee.filter((g)=>{return g.Age>21})
console.log(e)

let ob = {employeeId:2026,employeeName:"tyu",Age:25}
employee.push(ob)
console.log(employee)
