let employee = {
    id:1,
    name:"Aadi",
    age:20,
    array:[1,5,8,6,4,5,7], // making an array inside object 
    fun:function(){
        alert("Hello")
    },
    account:{
        bank_name:"union Bank",
        account_no:456123456,
        balance:20000000,
    }
}
console.log(employee.account.bank_name)
console.log(employee.array[3]) // printing value of array 
employee.fun()

// taking input from user
let employee2 = {
    id:parseInt(prompt("Enter id ")),
    name:(prompt("Enter Name ")),
    age:parseInt(prompt("Enter Age ")),
}
console.log(employee2)