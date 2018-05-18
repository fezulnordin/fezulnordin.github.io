function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "asdf" && password == "asdf"){
alert ("Redirecting");
window.location = "done.html"; // Redirecting to other page.
return false;
}else{


alert("Wrong credential. Please try again;");}

return false;
}
