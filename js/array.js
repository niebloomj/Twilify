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
        
    }
}