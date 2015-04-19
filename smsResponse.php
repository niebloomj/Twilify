<?php
    header("content-type: text/xml");
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";

    $people = array(
        "+19733095897"=>"Jacob",
        "+13154068688"=>"Josh",
        "+19545440963"=>"Manan"
    );

    if(!$name = $people[$_REQUEST['From']])
        $name = "Stranger";

    $firstWord = explode(" ", $_REQUEST['Body'])[0];
    if (is_numeric($firstWord)) {
        $responseString = $firstWord . " request has been sent";
    } else {
        $responseString = "Please text your party code followed by your song request";
    }
?>

<Response>
    <Message><?php echo $responseString ?>.</Message>
    <!-- <Message>Please text your party code followed by your song request.</Message> -->
</Response>