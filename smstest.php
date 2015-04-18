<?php
// Install the library via PEAR or download the .zip file to your project folder.
// This line loads the library
require('twilio/Services/Twilio.php');

$sid = "AC57903eef4f1064c36f05f84b2dcff21d"; // Your Account SID from www.twilio.com/user/account
$token = "c799f3bda46a6ab81188f3200f3d9827"; // Your Auth Token from www.twilio.com/user/account

$client = new Services_Twilio($sid, $token);
$message = $client->account->messages->sendMessage(
  '5852095561', // From a valid Twilio number
  '9733095897', // Text this number
  "Hello!"
);

print $message->sid;
