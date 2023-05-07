function shop(){
    open("https://www.myntra.com/watches")
}
function img(){
let c=document.getElementsByClassName("subpics")
c=open("https://www.myntra.com/watches")
}
function submit(){
    let g=confirm("are you sure you want to submit")
    if(g==true){
        alert("submitted")
    }
    
}
function valid(){
var name=document.forms['myform']["fname"].value;
var number=document.forms['myform']["num"].value
if(name==null || name==""){
alert("first name should be there")
    return false;
}
if(isNaN(number))
document.getElementById("numlok").innerHTML="enter numeric value onlyss"
if(number.length<10){
    alert("invalid! number")
    return false;
}
else{
    return true;
}


}