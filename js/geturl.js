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


function getSong(song,limit) {
    /*search through songs in spotify, store in array
    within the array search for artist*/
    //https://developer.spotify.com/web-api/get-track/
    //q = query's keywords 
    //type = track (default)
    //1st step - scan string, remove all special characters

    var songartist = "https://api.spotify.com/v1/search?q=" + song +"&type=track&limit=" + limit;
    var data = httpGet(songartist);
    var dict = $.parseJSON(data);
        // console.log(data);

    console.log(dict["tracks"]["items"][0]["uri"]);
        var duration_ms = dict["tracks"]["items"][0]["duration_ms"];

    var uri = dict["tracks"]["items"][0]["uri"];
     converturi(uri);
     return uri;
}


function fixList(){
        var listItems = $("#myList li");
        console.log("hehe");
        console.log(listItems);
        for(var i = 0; i<listItems.length;i++){
        musiccue[i] = listItems[i].innerHTML;
        }
        ;
        for (var i = 0; i<musiccue.length; i++){
        console.log(musiccue[i]) ;   
        }
      }



    $("#myList").on( "sortupdate", function( event, ui ) {
    console.log("hey");
    fixList();
    } );



    function getMessages(){
        var messages = $("#textMessages li");
        for(var i = 0; i<messages.length;i++){
        var n = messages[i].innerHTML.search(" ");
        messages[i].innerHTML = messages[i].innerHTML.substring(n+1, messages[i].length);
        musiccue[i] = messages[i].innerHTML;
        console.log(musiccue[i]);
        }
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
  setPlayer(result);
}

function nextSong(){
	console.log("he");
  var listItems = $("#myList li");
  getSong(listItems[0].innerHTML,1);
  listItems.first().remove();
  musiccue.shift();
 }

function setPlayer(result){
  document.getElementById("play").src= result;
}


setCode(23687);



