   if(sessionStorage.getItem("user") == null)
 {
    window.location.replace("../../../index.html");
 }
   else{
   // onclick plus coding
    var carrunt_user = sessionStorage.getItem("user");
    var hay = document.getElementById("plus_icon");
    hay.onclick = function(){
    var plus = document.getElementById("over_page");
    plus.style.display = "block";
   }
    // onclick close coding
    
    var close = document.getElementById("close");
    close.onclick = function(){
        bg = document.getElementById("over_page");
        bg.style.display = "none";
    }
    // new contact add coding

     var add = document.getElementById("save");
     add.onclick = function()
      {
    var name = document.getElementById("c_name");
    var number = document.getElementById("n_name");
    if( name.value != "" && number.value!= "")
    {
        
        var obj = {name:name.value,number:number.value};
        var json_txt = JSON.stringify(obj);
        localStorage.setItem(carrunt_user+"_contact"+name.value,json_txt);
    }
         else{
             window.alert("Please enter name & number.");
             return false ;
         }
    }
      function all_contact()
      {
         var i;
         for(i=0;i<localStorage.length;i++)
         {
         var all_keys = localStorage.key(i);
            if(all_keys.match(sessionStorage.getItem("user")+"_contact"))
            {
               var json_txt = localStorage.getItem(all_keys);
               var obj = JSON.parse(json_txt);
               
               var contact_box = document.createElement("Div");
               contact_box.setAttribute("id","save_contact");
               var naam = document.createElement("P");
               naam.setAttribute("class","contact_name");
               naam.setAttribute("id","contact_n");
               var i_nam = document.createElement("I");
               i_nam.setAttribute("class","fa-solid fa-user");
               var tool = document.createElement("Div");
               var i_edit = document.createElement("I");
               i_edit.setAttribute("id","edit");
               i_edit.setAttribute("class","fa-regular fa-pen-to-square");
               var i_del = document.createElement("I");
               i_del.setAttribute("id","del");
               i_del.setAttribute("class","fa-solid fa-trash dell");
               var line = document.createElement("HR");
               line.setAttribute("id","break");
               var number_new = document.createElement("P");
               number_new.setAttribute("id","contact_p");
               var i_num = document.createElement("I");
               i_num.setAttribute("class","fa-solid fa-mobile-screen");
               
               naam.appendChild(i_nam);
               naam.innerHTML += obj.name;
               
               tool.appendChild(i_edit);
               tool.appendChild(i_del);
               
               number_new.appendChild(i_num);
               number_new.innerHTML += obj.number;
               
               contact_box.appendChild(naam);
               contact_box.appendChild(tool);
               contact_box.appendChild(line);
               contact_box.appendChild(number_new);
               
               var section_contact = document.getElementById("section_contact");
               section_contact.appendChild(contact_box);
               
            }
         }
      }
      all_contact();
         var search = document.getElementById("search");
         search.oninput = function()
      {
         var con_name = document.getElementsByClassName("contact_name");
            var i;
            for(i=0;i<con_name.length;i++)
         {
               if(con_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase()))
               {
                  con_name[i].parentElement.style.display = "block";
               }
               else
              {
                  con_name[i].parentElement.style.display = "none";
               }
         }
      }
      var dell = document.getElementsByClassName("dell");
      var i;
      for(i=0;i<dell.length;i++)
      {
         dell[i].onclick = function()
         {
            var parent = this.parentElement.parentElement;
            var p_element = parent.getElementsByClassName("contact_name")[0];
            var username = p_element.innerHTML.replace('<i class="fa-solid fa-user"></i>','');
            localStorage.removeItem(carrunt_user+"_contact"+username.trim());
            parent.className= "animate__animated animate__bounceOut";
           setTimeout(function(){
              parent.remove();
           },1000);
         }
      }
   }