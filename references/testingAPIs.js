// New York Times Top Stories With Multiple Topics
// API Key = 9576deafb6a7491fb2be036f97f0b645



// BASIC NYT TOP STORIES: 
// API Key = 9576deafb6a7491fb2be036f97f0b645

var topic = "opinion" // topic choices include: home, opinion, world, national, politics, business, technology, science, health, sports, arts, books, movies, theater, fashion, food, travel... and more
var nyt_url = "http://api.nytimes.com/svc/topstories/v1/"+topic+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
$.ajax({url: nyt_url, method: 'GET'}).done(function(result) {
  console.log(result);
  for (var i = 0; i <3; i++) {
    var current_result = result.results[i]
    $("#nyt").append("<div class='row'> <div class='col-md-1'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-4'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
  }
  
  }).fail(function(err) {
  throw err;
});



// Open Weather Map 
// API Key = 7339d8215d69c41b505afbebf91a1097
// We could look into doing this by city ID (see Open Weather Map documentation) for more accuracy
// This example uses city (name) and country code (initials) in the url 
var city = "New York, NY"
var lat = 40.7128
var lon = 74.0059
var weather_url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&APPID=7339d8215d69c41b505afbebf91a1097"

// This ajax call returns weather objects for each 3 hour block for 5 days (stored in the array of length 40)
// Currently it only displays informaton from the first element in that array (first 3-hour block)

$.ajax({url: weather_url, method: 'GET'}).done(function(result) {
  console.log(result);
  var kelvin = result.list[0].main.temp; 
  var faren = Math.round(kelvin*9/5 - 459.67);

  $("#weather").append("<b><h3>Location: " + city + " </h3>Now</b><br>" + result.list[0].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 3 Hours</b><br>" + result.list[1].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 6 Hours</b><br>" + result.list[2].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 9 Hours</b><br>" + result.list[3].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 12 Hours</b><br>" + result.list[4].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 15 Hours</b><br>" + result.list[5].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 18 Hours</b><br>" + result.list[6].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 21 Hours</b><br>" + result.list[7].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  $("#weather").append("<b>In 24 Hours</b><br>" + result.list[8].weather[0].description + "<br>" + faren + "&deg; F <br><br>")
  
  }).fail(function(err) {
  throw err;
});

 // NPR

 var queryURL = "http://api.npr.org/list?id=3002&apiKey= MDI5NTk3ODY4MDE0ODM2NjEyMjU0NjYwMQ000";
    $.ajax({
      url:queryURL,
      method: "GET"
    }).done(function(response){
      console.log(response);
      for (let variable in response){
        $("#npr").text(response);
      }
    });



// // Holiday API 
// // API Key = 052cd1a1-8dd6-4b92-b692-e4881a5e6710

// // This particular API only allows you to see historical data, so it's not super useful. To see upcoming holidays, you must pay for a premium account :P 
// var month = "01";
// var year =  "2016"
// var holiday_url = "https://holidayapi.com/v1/holidays?key=052cd1a1-8dd6-4b92-b692-e4881a5e6710&country=US&year="+year+"&month="+month;

// // The free version does not allow you to 
// $.ajax({url: holiday_url, method: 'GET'}).done(function(result) {
//   console.log(result);
//   }).fail(function(err) {
//   throw err;
// });



// // MTA Bus Times 
// // API Key = f71be851-38a7-4048-a073-a073954305dc
// var queryURL = "http://bustime.mta.info/api/siri/stop-monitoring.json?key=f71be851-38a7-4048-a073-a073954305dc&OperatorRef=MTA&MonitoringRef=308209&LineRef=MTA NYCT_B63";

// $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
//   console.log(response)
// });

  