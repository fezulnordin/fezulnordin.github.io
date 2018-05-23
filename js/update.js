function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "asdf" && password == "asdf"){
window.location = "done.html"; // Redirecting to other page.
return false;
}else{


document.getElementById("login_failed").innerHTML = "Wrong credentials. Login Failed.";}

return false;
}
