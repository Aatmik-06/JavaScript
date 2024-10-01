function savedata(){
    let name = document.getElementById('name').value;
    if(name==""){
        alert("Please fill the name")
        document.getElementById('name').focus();
        return false; 
    }
    let contact = document.getElementById('contact').value;
    if(contact==""){
        alert("Please fill the contact")
        document.getElementById('contact').focus();
        return false; 
    }
    let age = document.getElementById('age').value;
    if(age==""){
        alert("Please fill the age")
        document.getElementById('age').focus()
        return false; 
    }
    let email = document.getElementById('email').value;
    if(email==""){
        alert("Please fill the email")
        document.getElementById('email').focus()
        return false; 
    }
    let password = document.getElementById('password').value;
    if(password==""){
        alert("Please fill the password")
        document.getElementById('password').focus()
        return false; 
    }
    let confirmpassword = document.getElementById('confirmpassword').value;
    if(confirmpassword==""){
        alert("Please fill the confirm Password")
        document.getElementById('confirmpassword').focus()
        return false; 
    }
}