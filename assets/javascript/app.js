$(document).ready(function() {
    $("#WeatherText").hide();
    $("#landingText").hide();
    $("#NewsText").hide();
    $("#ToDoText").hide();
  $("#test").on("click", function(){
    console.log("ouch");
  });
  $("#news-side-nav-bar").on("click", function(){
    $("body").removeClass();
    $("body").addClass("news");
    $("#WeatherText").hide();
    $("#landingText").hide();
    $("#NewsText").show();
    $("#ToDoText").hide();
  });
  $("#to-do-side-nav-bar").on("click", function(){
    $("body").removeClass();
    $("body").addClass("toDo");
    $("#WeatherText").hide();
    $("#landingText").hide();
    $("#NewsText").hide();
    $("#ToDoText").show();
  });
  $("#weather-side-nav-bar").on("click", function(){
    $("body").removeClass();
    $("body").addClass("weather");
    $("#WeatherText").show();
    $("#landingText").hide();
    $("#NewsText").hide();
    $("#ToDoText").hide();
  });
});    
