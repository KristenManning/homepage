var city = "New York, NY"
var lat = 40.7128
var lon = 74.0059
var weather_url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&APPID=7339d8215d69c41b505afbebf91a1097"

$.ajax({url: weather_url, method: 'GET'}).done(function(result) {
  console.log(result);
  var faren_temps = []
  for (var i = 0; i < 8; i++) {
    var kelvin = result.list[i].main.temp;
    var faren = Math.round(kelvin*9/5 - 459.67);
    faren_temps.push(faren)
  }

  $(".s1").append("<div class='row'><div class='col-md-1'></div><div class='col-md-6'><b><h2>Location: " + city + "<br><br></div></div><div class='row'> <div class='col-md-1'></div><div class='col-md-2'> </h2><h3>Now</h3></b>" + result.list[0].weather[0].description + "<br>" + faren_temps[0] + "&deg; F <br><br> <b><h3>In 3 Hours</h3></b>" + result.list[1].weather[0].description + "<br>" + faren_temps[1] + "&deg; F <br><br> <b><h3>In 6 Hours</h3></b>" + result.list[2].weather[0].description + "<br>" + faren_temps[2] + "&deg; F <br> </div> <div class='col-md-2'> <b><h3>In 9 Hours</h3></b>" + result.list[3].weather[0].description + "<br>" + faren_temps[3] + "&deg; F <br><br> <b><h3>In 12 Hours</h3></b>" + result.list[4].weather[0].description + "<br>" + faren_temps[4] + "&deg; F <br> <br><b><h3>In 15 Hours</h3></b>" + result.list[5].weather[0].description + "<br>" + faren_temps[5] + "&deg; F <br> </div> <div class='col-md-2'> <b><h3>In 18 Hours</h3></b>" + result.list[6].weather[0].description + "<br>" + faren_temps[6] + "&deg; F <br><br> <b><h3>In 21 Hours</h3></b>" + result.list[7].weather[0].description + "<br>" + faren_temps[7] + "&deg; F <br><br> <b><h3>In 24 Hours</h3></b>" + result.list[8].weather[0].description + "<br>" + faren_temps[8] + "&deg; F <br> </row>"
  );
  
  }).fail(function(err) {
  throw err;
});
