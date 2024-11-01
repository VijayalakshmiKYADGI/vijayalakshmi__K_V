var username="GMIT";
var password="1234";

function fnValidate()
{
    console.log("called");
    let input_uname = document.getElementById("username").value; //it will take entered uname
    let input_pass = document.getElementById("password").value;
    //let doc=document; it contain all dom elements in html page
    console.log(input_uname);
    console.log(input_pass);

    if(input_uname === username && input_pass === password ) // ' == ' it only check value not type , ' === ' by default it checks type and value of the variable
    {
        console.log("Sucessfully loged in")
    }
    else
    {
        console.log("failed: Invalid Uname or Password")
    }

}