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

    console.log(dict["tracks"]["items"][0]["uri"]);
var uri = dict["tracks"]["items"][0]["uri"];
     var str = String(uri);
  console.log(uri);
  var myRegExp = "k";
  var result = "spotify%3Atrack%3A";
  var n = str.search(myRegExp);
  var concat = str.substring(n+2, str.length);
  result = result.concat(concat);
  console.log(result);
}


var converturi= function(uri){
  //spotify:track:3ZffCQKLFLUvYM59XKLbVm
  var str = String(uri);
  console.log(uri);
  var myRegExp = "k";
  var result = "spotify%3Atrack%3A";
  var n = str.search(myRegExp);
  var concat = str.substring(n+2, str.length-1);
  result = result.concat(concat);
  console.log(result);


}



getSong("Wake me", "Green Day", 3);
