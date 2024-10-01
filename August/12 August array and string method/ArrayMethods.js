
let array =["Zadi","Cool","Beir","Ayi"];

console.log(array);
array.sort();
// sort will arrange array in alphabetical order 
// capital letters will come first and small letters will come after capital 
console.log(array)


array.reverse();
// reverse will arrange the array in reverse order 
console.log(array);


let  numbers = [40,50,10,80,20];
console.log(numbers);
// compare function is used inside sort to arrange numbers in ASCENDING  a-b is used for ascending
numbers.sort(function(a,b){return a-b}); 
console.log(numbers);
// this will arrange in DESCENDING order b-a is used for descending
numbers.sort(function(a,b){return b-a});
console.log(numbers);

