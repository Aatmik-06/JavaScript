let num = parseInt(prompt("choose 1 for addition 2 for substraction 3 for multliplication 4 for Division"))
let num1= parseInt(prompt("Enter First number"))
let num2= parseInt(prompt("Enter second number"))
switch (num) {
    case 1:
        alert(num1+num2)
        break;
        case 2:
        alert(num1-num2)
        break;
        case 3:
        alert(num1*num2)
        break;
        case 4:
        alert(num1/num2)
        break;
        default:
            alert("Wrong choice")
}