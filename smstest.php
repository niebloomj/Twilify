<?php
require('twilio/Services/Twilio.php');

$sid = "AC57903eef4f1064c36f05f84b2dcff21d";
$token = "c799f3bda46a6ab81188f3200f3d9827";

$client = new Services_Twilio($sid, $token);

function sendMsgToAdmin() {
	$message = $client->account->messages->sendMessage(
	'5852095561',
	'9733095897',
	"Hello!");
	echo $message->sid;
}

$messages = $client->account->messages->getIterator(0, 50, array( 
	'To' => "+15852095561",
)); 
 
foreach ($messages as $message) { 
	echo $message->body, PHP_EOL, "from", $message->from; 
}

?>