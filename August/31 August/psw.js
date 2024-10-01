function generatePassword() {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  
    for (let i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
  
      pass += str.charAt(char);
    }
  
    return pass;
  }
  
  function display() {
    document.getElementById("demo").innerHTML = generatePassword();
  }
  
  function mySum(...numbers) {
    var sum = 0;
    numbers.map((key) => {
      sum += key;
    });
    return sum;
  }
  
  console.log(mySum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  
  function adddition(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(adddition(1, 2));
  console.log(adddition(1, 2, 3, 4));
  console.log(adddition(1, 2, 5, 6, 7, 4));