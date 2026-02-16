
          function add_no()
          {
           var a = Number(document.getElementById("first").value);
            var b = Number(document.getElementById("second").value);
            var c = a+b;
            var d = document.getElementById("result");
                d.innerHTML = "Answer :- "+c;
            return false;
          }
            function sub_no()
        {
            var a = document.getElementById("first").value;
            var b = document.getElementById("second").value;
            var c = a-b;
            var d = document.getElementById("result");
                d.innerHTML = "Answer :- "+c;
            return false;
        }
           function mul_no()
          {
            var a = document.getElementById("first").value;
            var b = document.getElementById("second").value;
            var c = a*b;
            var d = document.getElementById("result");
            d.innerHTML = "Answer :- " +c;
            return false;
          }
          function div_no()
          {
            var a = document.getElementById("first").value;
            var b = document.getElementById("second").value;
            var c = a/b;
            var d = document.getElementById("result");
            d.innerHTML = "Answer :- " +c;
            return false;
          }
         function per_no()
          {
            var a = document.getElementById("first").value;
            var b = document.getElementById("second").value;
            var c = a%b;
            var d = document.getElementById("result");
            d.innerHTML = "Answer :- " +c;
            return false;
          }
