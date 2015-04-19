uris = [];
uris.push("blah");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A2CJtimCSGAn8x6RE3irZFV");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
uris.push("https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt");
function populate(){
for ( var i=0, len=uris.length; i<len; ++i) { 

        //define the listItem, i.e. a new list element
        var listItem = document.createElement("li");
        //listItem.setAttribute('id', i);
        //create the inner HTML of the element
        listItem.innerHTML = uris[i];
        //locate where the item is to be added in the DOM and add it so that it displays in the browser
        $('#myList').append(listItem);
        //$('#myorder').listview('refresh');
        console.log("Well, it ran at least");
}
}
populate();