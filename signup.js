
function fnValidateSignup()
{
    console.log("called");

    //let input_uname = document.getElementByClassName("username")[0].value; it will take element by classname in the from of array
    let input_uname = document.getElementById("username").value; //it will take entered uname
    let input_pass = document.getElementById("password").value;
    let input_cpass = document.getElementById("cpassword").value;
    let input_mail = document.getElementById("mail").value;

    //let doc=document; it contain all dom elements in html page
    console.log(input_uname);
    console.log(input_pass);
    console.log(input_cpass);
    console.log(input_mail);
    // let validatename=input_uname.length >=5 ? "valid name" :"invalid name" ;
    // let validatepass=input_pass.length >=8 ? "valid pass" :"invalid pass" ;
    // let validatecpass=input_cpass.length >=8 ? "valid cpass" :"invalid cpass" ;
    // console.log(validatename)
    // console.log(validatepass)
    // console.log(validatecpass)

    if (input_uname.length < 5) {
        alert("Invalid username. Username should be at least 5 characters long.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(input_mail)) {
        alert("Invalid email format.");
        return false;
    }
    if (input_pass !== input_cpass) {
        alert("Passwords do not match.");
        return false;
    }
    

    alert("Signup successful!");
    console.log("signup successfull")
    return true;
    
}
    // function Validatefields(inputValue)
    // {
    //     // if (inputValue.length >=5)
    //     // {
    //     //     console.log("valid usernname")
    //     // }
    //     // else{
    //     //     console.log("invalid username")
    //     // }
    //     return inputValue.length >=5 ? "valid" :"invalid" ;

    // }