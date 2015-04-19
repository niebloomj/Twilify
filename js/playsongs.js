
function getDuration(song, artist, limit){
  var songartist = "https://api.spotify.com/v1/search?q=" + song + "%20" + artist + "&type=track&limit=" + limit;
    var data = httpGet(songartist);
    var dict = $.parseJSON(data);
        // console.log(data);

        var duration_ms = dict["tracks"]["items"][0]["duration_ms"];

   return duration_ms;
}