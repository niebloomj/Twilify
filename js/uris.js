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

function song(trackname, url) {
    this.trackname = trackname;
    this.url = url;
}

function createSong(trackname, list) {
        list.push(trackname);
        console.log(list);
        return list;
    }

// function getMessages(){
//         var messages = $("#textMessages li");
//         int j = 0;
//         var j = 0;
//         for(var i = rem; i<messages.length;i++){

//         var n = messages[i].innerHTML.search(" ");
// @@ -53,12 +53,12 @@ function getMessages(){
//         }

function getMessages() {
    var messages = $("#textMessages li");
    var j = 0;
    for (var i = messages.length; i > mlength; i--) {

        var n = messages[i - 1].innerHTML.search(" ");
        var x = messages[i - 1].innerHTML;
        // if(vsearch(musiccue, x)!=true){

        musiccue[j] = messages[i - 1].innerHTML.substring(n + 1, messages[i - 1].length);
        //musiccue[i] = messages[i].innerHTML;
        //}
        j++;
    }
    mlength = messages.length;

    populate();

}

function vsearch(array, value) {
    var bool = false;
    for (var a = 0; a < array.length; a++) {
        if (array[a] === value) {
            bool = true;
        }
    }
    return bool;
}



// function populate(){
//          var ul = document.getElementById('myList');
//                if (ul) {
//               while (ul.firstChild) {
//                 ul.removeChild(ul.firstChild);
//         }
//         }
//          var ul = document.getElementById('myList');
//                if (ul) {
//               while (ul.firstChild) {
//                 ul.removeChild(ul.firstChild);
//         }
//         }
// for ( var i=0,  len = musiccue.length; i<len; i++) { 
//         //define the listItem, i.e. a new list element
//         var l = $('#myList li');
// }
// }


function populate() {
    var l = $('#myList li');
    for (var i = musiccue.length - 1, len = l.length; i > len; i--) {
        //define the listItem, i.e. a new list element
        // var l = $('#myList li');
        var listItem = document.createElement("li");
        listItem.setAttribute('class',"list-group-item");
        listItem.innerHTML = musiccue[i];

        //locate where the item is to be added in the DOM and add it so that it displays in the browser
        $('#myList').append(listItem);
    }

   
}

