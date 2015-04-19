function requestAuth(){
	var req = "https://accounts.spotify.com/api/token"
    var data = httpGet(songartist);
    var dict = $.parseJSON(data);
    var request = new XMLHttpRequest();

// client_id 
// Required. The client ID provided to you by Spotify when you register your application. 

// response_type 
// Required. Set it to code. 

// redirect_uri 
// Required. The URI to redirect to after the user grants/denies permission. 
// This URI needs to have been entered in the Redirect URI whitelist that you specified 
// when you registered your application. 
// The value of redirect_uri here must exactly match one of the values you entered 
// when you registered your application, including upper/lowercase, terminating slashes, etc.



GET "https://accounts.spotify.com/authorize/?client_id=2a49bf36822f450d8ad610dbcc0fa509&response_type=code&redirect_uri=http%3A%2F%2Ftwilify.co%2play.html&scope=user-read-private%20user-read-email&state=34fFs29kd09"

}