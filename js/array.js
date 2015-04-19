function populate(){
for ( var i=0, len=list.length; i<len; ++i) { 
    
        //define the listItem, i.e. a new list element
        var listItem = document.createElement("li");
        //listItem.setAttribute('id', i);
        //create the inner HTML of the element
        listItem.innerHTML = list[i];
        //locate where the item is to be added in the DOM and add it so that it displays in the browser
        $('#myList').append(listItem);
        //$('#myorder').listview('refresh');
        
    }
}
function fixList(){
var listItems = $("#myList li");
var i = 0;
listItems.each(function(li) {
	musiccue[i]=($(this).text);
}
);
	for (i = 0; i<musiccue.length; i++){
		console.log(musiccue[i]);	
	}
}
$("#myList").on( "sortover", function( event, ui ) {
	console.log("hey");
	fixList();
} );