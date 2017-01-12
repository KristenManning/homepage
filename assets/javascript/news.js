$(document).ready(function() {
	var topic1 = "technology" // 
	var topic2 = "world"
	var topic3 = "opinion"
	// var topic4 = "arts"

	var display_news = function(){
		var nyt_url1 = "http://api.nytimes.com/svc/topstories/v1/"+topic1+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
		$.ajax({url: nyt_url1, method: 'GET'}).done(function(result) {

		  $(".s2a").html("")
		  $(".s2a").append("<div class='row'><div class='col-md-10'></div> <div class='col-md-12'><h2>" + topic1 + "</h2></div></div>")
		  for (var i = 0; i <2; i++) {
		    var current_result = result.results[i]
		    $(".s2a").append("<div class='row'><div class='col-md-1'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-10'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
		  }
		  
		  }).fail(function(err) {
		  throw err;
		});

		var nyt_url2 = "http://api.nytimes.com/svc/topstories/v1/"+topic2+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
		$.ajax({url: nyt_url2, method: 'GET'}).done(function(result) {

		  $(".s2b").html("")
		  $(".s2b").append("<div class='row'><div class='col-md-1'></div> <div class='col-md-12'><h2>" + topic2 + "</h2></div></div>")
		  for (var i = 0; i <2; i++) {
		    var current_result = result.results[i]
		    $(".s2b").append("<div class='row'></div> <div class='col-md'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-12'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
		  }
		  
		  }).fail(function(err) {
		  throw err;
		});

		var nyt_url3 = "http://api.nytimes.com/svc/topstories/v1/"+topic3+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
		$.ajax({url: nyt_url3, method: 'GET'}).done(function(result) {

		  $(".s2c").html("")
		  $(".s2c").append("<div class='row'><div class='col-md-1'></div> <div class='col-md-12'><h2>" + topic3 + "</h2></div></div>")
		  for (var i = 0; i <2; i++) {
		    var current_result = result.results[i]
		    $(".s2c").append("<div class='row'><div class='col-md-1'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-12'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
		  }
		  
		  }).fail(function(err) {
		  throw err;
		});

		// var nyt_url4 = "http://api.nytimes.com/svc/topstories/v1/"+topic4+".json?api-key=9576deafb6a7491fb2be036f97f0b645"
		// $.ajax({url: nyt_url4, method: 'GET'}).done(function(result) {

		//   $(".s2d").html("")
		//   $(".s2d").append("<div class='row'><div class='col-md-1'></div> <div class='col-md-10'><h2>" + topic4 + "</h2></div></div>")
		//   for (var i = 0; i <2; i++) {
		//     var current_result = result.results[i]
		//     $(".s2d").append("<div class='row'><div class='col-md-1'> <img src="+current_result.multimedia[0].url+"></div><div class='col-md-10'> <b> <a href="+ current_result.url + ">" + current_result.title + "</a></b><br>" + current_result.byline + "<br><i>" + current_result.abstract + "</i><br><br></div></div>")
		//   }
		  
		//   }).fail(function(err) {
		//   throw err;
		// });
	}; 


	$(".topic").on("click",function(){
		// topic4 = topic3
		topic3 = topic2
		topic2 = topic1
		topic1 = $(this).data("topic")
		$(".s2a").attr('id', topic1)

	
	
		display_news()
	});

	display_news()
});