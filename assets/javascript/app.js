$(document).ready(function() {
    $('#wrapper').fullpage();
}); 

$("#test").on("click", function(){
    console.log("ouch");
});
$("#open").on("click",function(){
  document.getElementById("open").style.zIndex = "-1";
});
$("#closebtn").on("click", function(){
  document.getElementById("openClick").style.zIndex = "0";
});
// NavBar JS Starts
 // Bump Page Content Over 
function openNav() {

  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("wrapper").style.marginLeft = "250px";
}

 // Bump Page 
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("wrapper").style.marginLeft = "0";
}
// NavBar JS Ends
