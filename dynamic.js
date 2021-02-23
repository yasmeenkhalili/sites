confirm("Do you want to continue!");
var firstName=prompt("input your first name please");

if(firstName==null || firstName==""){
    alert ("please insert your first name");
}
var secondName=prompt("input your second name please");
console.log(firstName,secondName);
if(secondName==null || secondName==""){
    alert ("please insert your second name"); 
}
alert ("Welome"+" "+firstName+" "+secondName);  
