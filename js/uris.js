uris = [];
musiccue = [];
var numOfInvisibleMessages = 0;
uris.push("blah");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A2CJtimCSGAn8x6RE3irZFV");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");

function song(trackname, url) {
    this.trackname = trackname;
    this.url = url;
}

function createSong(trackname, list) {
        list.push(trackname);
        console.log(list);
        return list;
    }
    // createSong("wake me up", musiccue );
    // createSong("shake you down", musiccue );
    // createSong("sugar", musiccue );
    // createSong("moves like jagger", musiccue );

function getMessages() {
    var messages = $("#textMessages li");
    var j = 0;
    if (numOfInvisibleMessages == 0) {
        for (var i = messages.length - 1; i >= numOfInvisibleMessages; i--) {

            var n = messages[i].innerHTML.search(" ");

            musiccue[j] = messages[i - numOfInvisibleMessages].innerHTML.substring(n + 1, messages[i - numOfInvisibleMessages].length);
            console.log("j " + j + " " + musiccue[j]);

            j++;
        }
    } else {
        j = 0
        for (var i = 0; i < numOfInvisibleMessages - rem; i++) {
            var n = messages[i].innerHTML.search(" ");
            musiccue[j] = messages[i].innerHTML.substring(n + 1, messages[i].length);
            j++
        }
    }
    console.log(musiccue);
    populate();
    numOfInvisibleMessages = messages.length;

    console.log(musiccue[musiccue.length - 1]);

}
var currentListLength = 0;
var didUpdate = false;

function populate() {
    var myList = document.getElementById("myList");
    if (musiccue.length > currentListLength - rem) {
        // currentListLength = 0
        myList.innerHTML = '';
        for (var i = 0; i < musiccue.length; i++) {
            currentListLength++;

            var li = document.createElement("li");
            if (!didUpdate) {
                li.appendChild(document.createTextNode(musiccue[i]));
            } else {
                li.appendChild(document.createTextNode(musiccue[musiccue.length - i - 1]));
            }
            myList.appendChild(li);
        }
        didUpdate = true
    }
}
