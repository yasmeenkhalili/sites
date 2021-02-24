confirm("Do you want to continue!");
var firstName=prompt("input your first name please");
var secondName=prompt("input your second name please");

while (firstName==null || firstName=="" || secondName==null || secondName==""){
    var firstName=prompt("input your first name please");
    var secondName=prompt("input your second name please");
    alert ("please insert your full name");
}

console.log(firstName,secondName);

//if(secondName==null || secondName==""){
  //  alert ("please insert your second name"); 
//}
alert ("Welome"+" "+firstName+" "+secondName);
  
var year;
function ageCalculator (year){
var year=prompt("insert your birth year");
var age=2021- parseInt(year);
alert ("Your age is "+ age);

}
ageCalculator (year);

var places=prompt("How many places do you want to see ?");
console.log(places);
places=parseInt(places);
for (var i=1;i<places && i < 4 ; i++){
    document.write('<img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/84cedeccf7ebfcd274c40a9b38f0195c63661f73/big-24a04e28072e0a82a804b398188bba06.jpg"/>');
    document.write(i);
}
