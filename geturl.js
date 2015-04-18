function httpGet(theUrl) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


var getSong = function(song, artist, limit) {
    /*search through songs in spotify, store in array
    within the array search for artist*/
    //https://developer.spotify.com/web-api/get-track/
    //q = query's keywords 
    //type = track (default)
    //1st step - scan string, remove all special characters

    var songartist = "https://api.spotify.com/v1/search?q=" + song + "%20" + artist + "&type=track&limit=" + limit;
    var data = httpGet(songartist);
    var dict = $.parseJSON(data);
    console.log(dict["tracks"]["items"][0]["uri"]);
}


var converturi= function(uri){
  //spotify:track:3ZffCQKLFLUvYM59XKLbVm
  var result = "spotify%3Atrack%3A";
  var n = uri.search("k");
  var concat = uri.substring(k+2, uri.length);
  result = result.concat(concat);
  console.log(result);


}



converturi(getSong("Wake me", "Green Day", 3));
