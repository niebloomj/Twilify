function httpGet(theUrl) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}


function setCode(code){
  document.getElementById("code").innerHTML = code;
}


function getSong(song, artist, limit) {
    /*search through songs in spotify, store in array
    within the array search for artist*/
    //https://developer.spotify.com/web-api/get-track/
    //q = query's keywords 
    //type = track (default)
    //1st step - scan string, remove all special characters

    var songartist = "https://api.spotify.com/v1/search?q=" + song + "%20" + artist + "&type=track&limit=" + limit;
    var data = httpGet(songartist);
    var dict = $.parseJSON(data);
        // console.log(data);

    console.log(dict["tracks"]["items"][0]["uri"]);
        var duration_ms = dict["tracks"]["items"][0]["duration_ms"];

    var uri = dict["tracks"]["items"][0]["uri"];
     converturi(uri);
     return uri;
}




function converturi(uri){
  //spotify:track:3ZffCQKLFLUvYM59XKLbVm
  var str = String(uri);
  console.log(uri);
  var myRegExp = "k";
  var result = "https://embed.spotify.com/?uri=spotify%3Atrack%3A";
  var n = str.search(myRegExp);
  var concat = str.substring(n+2, str.length);
  result = result.concat(concat);
  console.log(result);
  musiccue.push(result);
  //setPlayer();
}

function nextSong(){
	document.getElementById("play").src=list[0].url;
  list.shift();
  var listItems = $("#myList li");
  listItems.each(function(li) {
     this.remove();
     break();
 }
}




setCode(23687);



getSong("Wake me", "Green Day", 3);
