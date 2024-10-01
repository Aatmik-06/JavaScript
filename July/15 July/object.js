// object 
// in easy language object is an variable in javascript 
// in js object will run without any class
// object is user defined datatypes 
// we can stores multiple types of data in a object like an array
// in object data will be in keyvalue pair so we can access data using key value
//  object is denoted by curly braces {} in js
// syntax = let ob = {key:value,key:value}
// we can store multiple data types 
// let ob = {id:101,name:"Aadi",age:20}

let ob = {id:101,name:"Aadi",age:20}
console.log(ob.name)


let employee ={Employee_Name:"Aadi",Employee_Designation:"Manager",Employee_id:542,Employee_Age:25}
console.log(employee)



// if we have to only print keys 
// for in loop is used because it will print index or it will print key of the object 
for (let k in ob) {
    console.log(k)
}

// if we have to print values of keys so 
// we will use for of loop

// for (let r of ob) {
//     console.log(ob[r])
// }


// if we have to print some keys only
// so we will call an function
// Object O is in capital
let i = Object.keys(ob)
console.log(i)
console.log(i[1])

// values function
let p = Object.values(ob)
console.log(p)
console.log(p[2])