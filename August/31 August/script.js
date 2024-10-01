let person = {
    name:"Aadi",
    Age:20
};
let jsonperson = JSON.stringify(person);

localStorage.setItem("person" , jsonperson);

let data = localStorage.getItem("person");

let newdata = JSON.parse(data);
alert(newdata.name+" " +newdata.Age);


//  Data is stored in string type in local storage 
//  JSON.Stringify will convert object to string  