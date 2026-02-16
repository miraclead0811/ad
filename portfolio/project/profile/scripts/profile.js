window.onload = function()
{
    if(sessionStorage.getItem("user") == null )
    {
    window.location.replace("../index.html");
     }
    else{
     
     //logout coding
     var log = document.getElementById("logout");
     logout.onclick = function(){
      sessionStorage.clear();
      var change_txt = document.getElementById("lg");
      change_txt.innerHTML = "Please wait...";
      setTimeout(function(){window.location = "../index.html";},1000);
     }
     //username preview coding
     var user_email = sessionStorage.getItem("user");
     var json_text = localStorage.getItem(user_email);
     var obj_data = JSON.parse(json_text);
     var profile_name = document.getElementById("name");
     profile_name.innerHTML = atob(obj_data.username);
     document.getElementById("user_naam").innerHTML = atob(obj_data.username);
     // profile pic preview coding
     var img_url = localStorage.getItem(user_email+"image");
     var pro_pic = document.getElementById("up_pic");
     pro_pic.style.backgroundImage = "url("+img_url+")";
     pro_pic.style.backgroundSize = "cover";
     pro_pic.style.backgroundPosition = "center";
     
     var profile_upload = document.getElementById("profile_upload");
     if(localStorage.getItem(user_email+"image") != null)
     {
      var profile_cover = document.getElementById("profile_cover");
              profile_cover.style.display = "none";
     }
             profile_upload.onchange = function()
        {
            var reader = new FileReader();
            reader.readAsDataURL(profile_upload.files[0]);
            reader.onload = function() 
           {
            var filename = reader.result;
            var profile_icon = document.getElementById("profile_icon");
            var profile_pic = document.getElementById("profile_pic");
            profile_pic.style.backgroundImage = "url("+filename+")";
            profile_pic.style.backgroundSize = "cover";
            profile_pic.style.backgroundPosition = "center";
            profile_icon.style.display = "none";
            var next_btn = document.getElementById("next");
            next_btn.style.display = "block";
               next_btn.onclick = function()
             {
             localStorage.setItem(user_email+"image",filename);
              var profile_cover = document.getElementById("profile_cover");
              profile_cover.style.display = "none";
              window.location = location.href;
             }
           }
        }
    }
 }
