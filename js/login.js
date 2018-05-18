function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "asdf" && password == "asdf"){
alert ("Login successfully");
window.location = "details.html"; // Redirecting to other page.
return false;
}else{


alert("Wrong credential. Please try again;");}

return false;
}
