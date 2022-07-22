function getAssign( value)
{
    console.log(value);
    var path=String(value);
    document.getElementById("home").style.display="none";
   document.getElementById("iFrame").style.display="inline";
    document.getElementById("iFrame").setAttribute("src",path);
    console.log(path);
}
function home()
{
    document.getElementById("iFrame").style.display="none";
    document.getElementById("home").style.display="inline ";
}