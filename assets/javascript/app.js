$(document).ready(function() {
    $('#wrapper').fullpage();
}); 

$("#test").on("click", function(){
    console.log("ouch");
});
// NavBar JS Starts
//hides the open button
$("#openClick").on("click",function(){
  document.getElementById("openClick").style.zIndex = "-1";
});
//pops the open button back up
$("#closebtn").on("click", function(){
  document.getElementById("openClick").style.zIndex = "0";
});

 // Bump Page Content Over 
function openNav() {

  document.getElementById("sidenav").style.width = "200px";
  document.getElementById("wrapper").style.marginLeft = "200px";
}

 // Bump Page 
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("wrapper").style.marginLeft = "0";
}
// NavBar JS Ends
//Music Bar JS
$("#openMusic").on("click",function(){
  document.getElementById("openMusic").style.zIndex = "-1";
});
//pops the open button back up
$("#closebtn").on("click", function(){
  document.getElementById("openMusic").style.zIndex = "0";
});

function openMusic(){
  document.getElementById("musicbox").style.width = "200px";
  document.getElementById("wrapper").style.marginLeft = "200px";
}
function closeMusic() {
  document.getElementById("musicbox").style.width = "0";
  document.getElementById("wrapper").style.marginLeft = "0";
}
//Music Bar JS Ends