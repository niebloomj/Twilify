<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>Twilify by niebloomj</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="stylesheets/normalize.css" media="screen">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">
    <link rel="stylesheet" type="text/css" href="stylesheets/github-light.css" media="screen">
    <script src="https://code.jquery.com/jquery-1.11.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="js/array.js"></script>
    <link rel="stylesheet" href="/resources/demos/style.css">
    <style>
    #sortable {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 60%;
    }
    
    #sortable li {
        margin: 0 3px 3px 3px;
        padding: 0.4em;
        padding-left: 1.5em;
        font-size: 1.4em;
        height: 18px;
    }
    
    #sortable li span {
        position: absolute;
        margin-left: -1.3em;
    }
    </style>
</head>

<body>
    <section class="page-header">
        <div class="list">
            <ul id="myList">
                
            </ul>
        </div>
        <h2 id="code">Party Code: 234346</h2>
        <div>
            <form>
                <span>
                    <input class="search" type="text">
                    <input class="search" type="button" value="Search">
                </span>
            </form>
        </div>
        <br/>
        <ul>
        <?php 
        require('twilio/Services/Twilio.php');
        $sid = "AC57903eef4f1064c36f05f84b2dcff21d";
        $token = "c799f3bda46a6ab81188f3200f3d9827";
        $client = new Services_Twilio($sid, $token);
        foreach ($client->account->messages->getIterator(0, 50, 
            array('From' => '+19733095897',)) as $message) 
        {$firstWord = explode(" ", $message->body)[0];
        if ($firstWord == "23687"){echo "<li>". $message->body . "</li>";}}?></ul>
        <iframe id="play" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
        <script src="js/uris.js"></script>
        <script src="js/geturl.js"></script>
        <script>
        $(function() {


            $("#myList").sortable();
            $("#myList").disableSelection();
        });
        </script>
        <h1 class="project-name">Twilify</h1>
        <h2 class="project-tagline">Ask and you shall receive</h2>
        <h3 class="project-tagline">Text: (585)-209-5561</h3>
    </section>
</body>

</html>
