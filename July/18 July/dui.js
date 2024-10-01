let ob = {
    Name:"Aadi",
    Age:20,
    course:"AIML"
    
}
let ob1 = {
    City:"Bhopal",
    course:"Full stack"
}
// assign function is used to assign an object in another object 
Object.assign(ob,ob1)
console.log(ob)
delete ob.Age
console.log(ob)




