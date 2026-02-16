    $(function(){
        $('#menu').slicknav({
            label:"",
            brand:"MIRACLE AD"
        });
    });


    $(document).ready(function() {
  $(".skitter-large").skitter({
     navigation: true,
     dots: false,
     theme:"clean"
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     loop:true,
    margin:70,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
  });
});
$(document).ready(function(){
    $(".achived_html").animate({"width":"85%"},1000,function(){
       $(".achived_css").animate({"width":"75%"},1000,function(){
          $(".achived_js").animate({"width":"60%"},1000,function(){
             $(".achived_jq").animate({"width":"55%"},1000,function(){
                $(".achived_php").animate({"width":"10%"},1000)
             });
          });
       });
    });
});

//alert
  window.onload = function () {
    alert("Welcome to our website!");
  };

  // Disable copy, cut, paste
  ["copy", "cut", "paste"].forEach(function (event) {
    document.addEventListener(event, function (e) {
      e.preventDefault();
      alert("This action is not allowed!");
    });
  });

  // Disable key shortcuts
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
      (e.ctrlKey && ["U","S","C","A","P"].includes(e.key))
    ) {
      e.preventDefault();
      alert("Developer tools are disabled!");
    }
  });

  // Detect DevTools open (basic)
  setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200) {
      document.body.innerHTML = "<h2>DevTools detected. Access denied.</h2>";
    }
  }, 1000);
