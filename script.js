console.log("this is javascript") /* console is for printing purpose*/
var name="GMIT";     /*global variable accesable throught*/


/*Datatypes ---> integer,string ,float  ,null ,undefined ,boolean */

/* types of variables:--LOCAL ,GLOBAL ,BLOCK 
var  --> for global 
let  -->block type variable
const -> constants

*/

function fnf1()
{   
    console.log("function called");
    console.log("our clg name is " +name);
}
fnf1(); /* function calling*/

function fnadd(a,b) 
{
    console.log(a,b)
    var c = parseInt(a) + parseInt(b)
    console.log("a+b="+c)
}
fnadd(4,5); //calling function by passing parameter

var result = fnadd(8,"99") //here the concat will happens after using parseInt it will give add result
console.log(result)
fnadd(result,3);