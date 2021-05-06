function Validation(){
    var username=document.getElementById("username").value;
    //var regx=/E00/;
   // var regx=/[a-d]efg[y-z]/;//[] it indicate the range of letter between start and end between them....where [a-d] letter betwwen a to d..
   //var regx=/[a]E00/i;//here i refers for case insensitive... it is a one type of flags...
   var regx=/^[7-9][0-9]{9}$/; //moblie number validation "^" -->  for starting and "&"--> for ending the expression {}--> for repeating the loops
  
   if(regx.test(username)){
       alert("Valid user name");
       document.getElementById("userlb").style.visibility="visible";
       document.getElementById("userlb").innerHTML="Valid";

       document.getElementById("userlb").style.color="green";
   }else
   {
       alert("Invalid user name");
       document.getElementById("userlb").style.visibility="visible";
       document.getElementById("userlb").style.color="red";
       


   } 
}