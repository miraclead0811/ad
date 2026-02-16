//start sign up coding
var a = document.getElementById("signup_frm");
a.onsubmit = function(){
     var user = btoa(document.getElementById("username").value);
     var phone = btoa(document.getElementById("sign_phone").value);
     var email = btoa(document.getElementById("sign_email").value);
    var pass = btoa(document.getElementById("sign_password").value);
    
    var user_object_data = {username:user,phone:phone,email:email,password:pass};
    var user_text_data = JSON.stringify(user_object_data);
    
    if( user != "" && phone != "" && email != "" && pass != "")
    {
        localStorage.setItem(email,user_text_data);
    var x = document.getElementById("sign_up_btn");
    x.innerHTML = "<i class='fas fa-circle-check'></i> Sign up successful !";
        x.style.background ="#14b129"
        setTimeout (function(){
            x.style.background = "linear-gradient(to right, #0083B0, #00B4DB)";
            x.innerHTML = "Sign Up ";
            a.reset();
        },3000);
     return false;
    }
}
//end sign up coding



//start validation coding
var email_input = document.getElementById("sign_email");
 email_input.onchange = function()
{
    var email = btoa(document.getElementById("sign_email").value);
    var warning = document.getElementById("notice");
    var sgn_dis = document.getElementById("sign_up_btn");
    if(localStorage.getItem(email) != null)
    {
        warning.style.display = "block";
        email_input.style.borderBottomColor = "red";
        sgn_dis.disabled = true;
        sgn_dis.style.background = "#ccc";
        
        email_input.onclick = function(){
            email_input.value = "";
            warning.style.display = "none";
        email_input.style.borderBottomColor = "#ccc";
        sgn_dis.disabled = false;
        sgn_dis.style.background = "linear-gradient(to right, #0083B0, #00B4DB)";
        
        }
    }
    
}

//end validation coding


// start login coding

var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function()
{
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var notice_email_ipt = document.getElementById("notice_email");
    var notice_pass_ipt = document.getElementById("notice_pass");
    if(localStorage.getItem(btoa(email.value))== null)
    {
        notice_email_ipt.style.display = "block";
        email.style.borderBottomColor = "red";
        
        email.onclick = function()
        {
            email.value = "";
            notice_email_ipt.style.display = "none";
            email.style.borderBottomColor = "#ccc";
            
            
        }
    }
    else{
        var text_data = localStorage.getItem(btoa(email.value));
        var object_data = JSON.parse(text_data);
        var cor_email = object_data.email;
        var cor_pass = object_data.password;
        
        if(btoa(email.value) == cor_email)
        {
            if( btoa(password.value) == cor_pass)
            {
                sessionStorage.setItem("user",btoa(email.value));
                window.location.replace("profile/profile.html");
                
            }
            else{
                    notice_pass_ipt.style.display = "block";
                password.style.borderBottomColor = "red";
                
                password.onclick = function()
                {
                    password.value = "";
                    notice_pass_ipt.style.display = "none";
                    password.style.borderBottomColor = "#ccc";
                }
            }
        }
    }
    return false;
}