var input = document.getElementById('f_name');
input.onblur = function mjo()
{   
    var mjo = document.getElementById("f_name").value;
    var output = document.getElementById("f_name");
    var pro = document.getElementById("warn");
    if(mjo == "")
    {
        output.style.border = "1px solid red";
        pro.style.display = "block";
         
    }
    
}

var show_check = document.getElementById("show");
show_check.onclick = function pass()
{
    var hello = document.getElementById("password");
    var spann = document.getElementById("span");
if(show_check.checked){
    hello.type = "text";
    spann.innerHTML = "Hide Password";
}
    else{
        hello.type = "password";
        spann.innerHTML = "Show Password";
    }
}


//sign up coding


var form = document.getElementById("frm");
form.onsubmit = function()
{
      var fname = document.getElementById("f_name");
      var sname = document.getElementById("s_name");
      var email = document.getElementById("pe_name");
      var dates = document.getElementById("date");
      var months = document.getElementById("month");
      var years = document.getElementById("year");
      var pass = document.getElementById("password");
     var mal = document.getElementById("male");
    var femal = document.getElementById("female");
  var cust =  document.getElementById("custom");
    if(fname.value == "" || sname.value == "" || email.value == "" || dates.value == "" || months.value == ""|| years.value == "" || pass.value == "")
    {
             fname.style.border = "1px solid red";
             sname.style.border = "1px solid red";
             email.style.border = "1px solid red";
             dates.style.border = "1px solid red";
             months.style.border = "1px solid red";
             years.style.border = "1px solid red";
             pass.style.border = "1px solid red";
             mal.style.border = "1px solid red";
             femal.style.border = "1px solid red";
             cust.style.border = "1px solid red";
             
        return false
    }
    else{
     var x =  confirm("Are you sure.");
        if(x == true)
        {
            window.alert("Your account successfully created.")
    }
        else{
            relaod();
        }
    }
    
} 
