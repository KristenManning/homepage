var topic = "home" // topic choices include: home, opinion, world, national, politics, business, technology, science, health, sports, arts, books, movies, theater, fashion, food, travel... and more
var nyt_url = "http://api.nytimes.com/svc/topstories/v1/"+topic+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
$.ajax({url: nyt_url, method: 'GET'}).done(function(result) {
  console.log(result);
  for (var i = 0; i <3; i++) {
    var current_result = result.results[i]
    $(".s2").append("<div class='row'> <div class='col-md-1'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-4'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
  }
  
  }).fail(function(err) {
  throw err;
});