

<body>
<ul>
    <?php 
    require('twilio/Services/Twilio.php');
    $sid = "AC57903eef4f1064c36f05f84b2dcff21d";
	$token = "c799f3bda46a6ab81188f3200f3d9827";
	$client = new Services_Twilio($sid, $token);
	foreach ($client->account->messages->getIterator(0, 50, array(
    	'From' => '+19733095897',
	)) as $message) {
    	// echo "From: {$message->from}\nBody: " . $message->body;
    	$firstWord = explode(" ", $message->body)[0];
    	if ($firstWord == "23687"){
    		echo "<li>". $message->body . "</li>";
    	}
	}
    ?>
   </ul>
</body>