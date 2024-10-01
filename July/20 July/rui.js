// you have range 
function range(){
    let i = parseInt(prompt("Enter any number"))
    if (i<=10) {
        for (let a=0; a<=i; a++) {
        
            console.log(a)
          } 
    }  
    else if (i>=20 && i>=11){
        for (let c=20; c>=1; c--) {
        
            console.log(c)
          } 
    }
    
}

range()



function add(){
    let s=0
    for (let j=0 ; j<=10 ; j++) {
        s=s+j
    
    }
return s
    
}

console.log(add())
