var signup_link = document.getElementById("sgn");
var signin_link = document.getElementById("lgn");
var signup_box = document.getElementById("signup");
var signin_box = document.getElementById("login");

signup_link.onclick = function(){
    signup_box.style.display = "block";
    signin_box.style.display = "none";
    
    
}

signin_link.onclick = function(){
    signin_box.style.display = "block";
    signup_box.style.display = "none";
    }