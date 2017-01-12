$("#sSButton").on("click", function(){
  let  q = $("#songSearch").val();
    console.log(q)
  var qA = "q=" + q + "&type=track&market=US"
  var queryURL = "https://api.spotify.com/v1/search?"+ qA + "";
  var music = "";
  var audio = "";
 $.ajax({
        url: queryURL,
        method: "GET"
      })
 .done(function(response){
  console.log(response.tracks.items[0]);
$("#artist").text(response.artists);
  let music = response.tracks.items[0].artists[0].uri;
  console.log(music);
$("#music").html ("<iframe src='https://embed.spotify.com/?uri="+ music+"' width='250' height='330' frameborder='0' allowtransparency='true'></iframe>");
 });
  });
