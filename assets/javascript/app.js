$(document).ready(function() {
    $('#wrapper').fullpage();
}); 
$("#test").on("click", function(){
    console.log("ouch");
  });
// NavBar CSS Starts
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
// NavBar CSS Ends