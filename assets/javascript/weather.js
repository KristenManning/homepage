var city = "New York, NY"
var lat = 40.7128
var lon = 74.0059
var weather_url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&mode=json&APPID=7339d8215d69c41b505afbebf91a1097"

var design1 = function(){
  $.ajax({url: weather_url, method: 'GET'}).done(function(result) {
    console.log(result);
    var faren_temps = []
    for (var i = 0; i < 8; i++) {
      var kelvin = result.list[i].main.temp;
      var faren = Math.round(kelvin*9/5 - 459.67);
      faren_temps.push(faren)
    }

    $(".s1a").append(result.list[0].weather[0].description)
    $(".s1b").append(faren_temps[0] + "&deg; F")
    $(".s1c").append()
    
    }).fail(function(err) {
    throw err;
  });

  }
var design2 = function(){
  $.ajax({url: weather_url, method: 'GET'}).done(function(result) {
    console.log(result);
    var faren_temps = []
    for (var i = 0; i < 8; i++) {
      var kelvin = result.list[i].main.temp;
      var faren = Math.round(kelvin*9/5 - 459.67);
      faren_temps.push(faren)
    }

    $(".s1heading").html("Location: " + city)
    $(".s1a").html("<div class='forecast-int-d2'>Now</div><div class='conditions-d2'>" + result.list[0].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[0] + "&deg; F <br> <div class='forecast-int-d2'>In 3 Hours</div><div class='conditions-d2'>" + result.list[1].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[1] + "&deg; F <br> <div class='forecast-int-d2'>In 6 Hours</div><div class='conditions-d2'>" + result.list[2].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[2] + "&deg; F <br>");

    $(".s1b").html(" <div class='forecast-int-d2'>In 9 Hours</div><div class='conditions-d2'>" + result.list[3].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[3] + "&deg; F<br> <div class='forecast-int-d2'>In 12 Hours</div><div class='conditions-d2'>" + result.list[4].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[4] + "&deg; F <br><div class='forecast-int-d2'>In 15 Hours</div><div class='conditions-d2'>" + result.list[5].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[5] + "&deg; F")

    $(".s1c").html("<div class='forecast-int-d2'>In 18 Hours</div><div class='conditions-d2'>" + result.list[6].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[6] + "&deg; F<br> <div class='forecast-int-d2'>In 21 Hours</div><div class='conditions-d2'>" + result.list[7].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[7] + "&deg; F<br> <div class='forecast-int-d2'>In 24 Hours</div><div class='conditions-d2'>" + result.list[8].weather[0].description + "</div><br><div class='temp-d2'>" + faren_temps[8] + "&deg; F "
    );
    
    }).fail(function(err) {
    throw err;
  });

  }

  design2()