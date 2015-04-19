uris = [];
musiccue = [];
var mlength = 0;
uris.push("blah");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A2CJtimCSGAn8x6RE3irZFV");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");

function song(trackname, url){
	this.trackname = trackname;
	this.url = url;
}

function createSong(trackname,list){
	list.push(trackname);
	console.log(list);
	return list;
}
// createSong("wake me up", musiccue );
// createSong("shake you down", musiccue );
// createSong("sugar", musiccue );
// createSong("moves like jagger", musiccue );

function getMessages(){
        var messages = $("#textMessages li");
        var j = 0;
        for(var i = messages.length-1; i>=mlength;i--){

        var n = messages[i].innerHTML.search(" ");
        var x = messages[i].innerHTML;

        musiccue[j] = messages[i].innerHTML.substring(n+1, messages[i].length);

        j++;
        }
        console.log(musiccue);
        mlength=messages.length;
                populate();
                console.log(musiccue[musiccue.length-1]);

        }

        function vsearch(array, value){
                var bool = false;
                for(var a = 0; a<array.length;a++){
                        if(array[a]===value){
                                bool = true;
                        }
                }
                return bool;
        }

function populate(){
        var l = $('#myList li');
for ( var i=l.length,  len = musiccue.length; i<len; i++) { 
        //define the listItem, i.e. a new list element

      
      
        var listItem = document.createElement("li");
        listItem.innerHTML = musiccue[i];
        
        //locate where the item is to be added in the DOM and add it so that it displays in the browser
        $('#myList').append(listItem);
}

        //$('#myorder').listview('refresh');
        console.log("Well, it ran at least");


}

// populate();
