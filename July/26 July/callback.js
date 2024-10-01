// Call Back Function

// function demo()  if we will call any function in the place of arguments so it is called call back function

// demo()


// setInterval(function,timer) it is an function used to work non stop in this function we will pass one function and timer 

// setInterval(()=>{document.write(1)},2000) // so this will display 1 infinite times in the gap of 2 seconds 




// WAP to print 1 2 3 ..........
// let i =1
// setInterval(()=>{document.write(i++)},1000)

// but this function will not stop if we have to stop this function so we will use clearInterval() function 

let j = 1
let fun = setInterval(()=>{if(j == 10){
                                 clearInterval(fun)
                                      } document.write(j++)},500)

                                      