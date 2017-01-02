// New York Times Top Stories 
// API Key = 9576deafb6a7491fb2be036f97f0b645


var topic = "opinion" // topic choices include: home, opinion, world, national, politics, business, technology, science, health, sports, arts, books, movies, theater, fashion, food, travel... and more
var nyt_url = "http://api.nytimes.com/svc/topstories/v1/"+topic+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
$.ajax({url: nyt_url, method: 'GET'}).done(function(result) {
  console.log(result);
  for (var i = 0; i <3; i++) {
  	var current_result = result.results[i]
  	$("#nyt").append("<b>" + current_result.title + "</b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br>" + current_result.url + "<br><br>")
  }
  
  }).fail(function(err) {
  throw err;
});


// Open Weather Map 
// API Key = 7339d8215d69c41b505afbebf91a1097
// We could look into doing this by city ID (see Open Weather Map documentation) for more accuracy
var city = "New York"
var country_code = "us"
var weather_url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+","+country_code+"&mode=json&APPID=7339d8215d69c41b505afbebf91a1097"

// This ajax call returns weather objects for each 3 hour block for 5 days (stored in the array of length 40)
// Currently it only displays informaton from the first element in that array (first 3-hour block)
$.ajax({url: weather_url, method: 'GET'}).done(function(result) {
  console.log(result);
  var kelvin = result.list[0].main.temp; 
  var faren = Math.round(kelvin*9/5 - 459.67);
  $("#weather").append(city + "<br>" + result.list[0].weather[0].description + "<br>" + faren + " Degrees Farenheit")
  
  }).fail(function(err) {
  throw err;
});