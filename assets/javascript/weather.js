  var city;
  var weather_url;

  function design2(pos){
    weather_url = "http://api.openweathermap.org/data/2.5/forecast?lat=" + pos.lat + "&lon=" + pos.lng + "&mode=json&APPID=7339d8215d69c41b505afbebf91a1097";
    console.log(weather_url);
    $.ajax({url: weather_url, method: 'GET'}).done(function(result) {
      console.log(result);
      city = result.city.name;
      var faren_temps = []
      for (var i = 0; i < 9; i++) {
        var kelvin = result.list[i].main.temp;
        var faren = Math.round(kelvin*9/5 - 459.67);
        faren_temps.push(faren)
      }

      $(".s1heading").html("<h2>" + city + "</h2>");

      $("#conditions").html()
      $('#conditions').append("<td>" + result.list[0].weather[0].description + " </td> <td></td> " + "<td>" + result.list[1].weather[0].description + " </td> <td></td>" + "<td>" + result.list[2].weather[0].description + " </td> <td></td>" + "<td>" + result.list[3].weather[0].description + " </td> <td></td>" + "<td>" + result.list[4].weather[0].description + " </td> <td></td>" + "<td>" + result.list[5].weather[0].description + " </td> <td></td>" + "<td>" + result.list[6].weather[0].description + " </td> <td></td>" + "<td>" + result.list[7].weather[0].description + " </td> <td></td>" + "<td>" + result.list[8].weather[0].description + " </td> <td></td>")

      $("#temps").html()
      $('#temps').append("<td>" + faren_temps[0] + " </td> <td></td>" + "<td>" + faren_temps[1] + " </td> <td></td>" + "<td>" + faren_temps[2] + " </td> <td></td>" + "<td>" + faren_temps[3] + " </td> <td></td>" + "<td>" + faren_temps[4] + " </td> <td></td>" + "<td>" + faren_temps[5] + " </td> <td></td>" + "<td>" + faren_temps[6] + " </td> <td></td>" + "<td>" + faren_temps[7] + " </td> <td></td>" + "<td>" + faren_temps[8] + " </td> <td></td>")

      
      }).fail(function(err) {
      throw err;
    });

    }

    // design2()