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
?>

<Response>
    <!-- <Message>Welcome <?php echo $name ?>.</Message> -->
    <Message>Please text your party code followed by your song request.</Message>
</Response>