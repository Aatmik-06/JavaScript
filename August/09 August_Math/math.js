
let x = Math.sqrt(9);
console.log(x);
// alert(x);
document.getElementById("demo").innerHTML = x;

let y = Math.sign(-56); // so it will return 0  when we pass zero , -1 when we pass negative number , 1 when number is positive
console.log(y);

z = Math.pow(4,3);  // so it will return power of the number 
console.log(z);

a = Math.abs(-45); // so it will give always positive answer or it will convert negative to positive 
console.log(a);
 
c = Math.round(6.1); // returns roundoff value
console.log(c);

b = Math.ceil(6.1); // return the above or higher value
console.log(b)

q = Math.floor(6.1); // return lower value
console.log(q)

l = Math.min(2,40,55,64,75,87,17,98,72,24,50); // return minimum value
console.log(l)

m = Math.max(2,40,55,64,75,87,17,98,72,24,50); // returns maximum value
console.log(m)

k = Math.trunc(4.5127); // removes the decimal number and returns integer value
console.log(k)

o = Math.random() *20; // so it will return random values under 20 and 20 is not includes so this will returns in decimal so we can use floor
o = Math.floor(Math.random()*20)  // so now this will return integer 
console.log(o)