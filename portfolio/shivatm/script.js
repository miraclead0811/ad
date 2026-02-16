function enroll()
{
    window.alert("Enrollment successfull");
     
}
    document.onkeydown = function(a)
{
    if(a.ctrlKey && a.keyCode == 85)
    {
        alert("View page soure not allowed.");
        return false;
    }
    else if(a.ctrlKey && a.shiftKey && a.keyCode == 73)
    {
        alert("Inspect not allowed.");
        return false;
    }
}
