<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <title>Twilify by niebloomj</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <script src="https://code.jquery.com/jquery-1.11.2.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="js/array.js"></script>
    <script src="js/geturl.js"></script>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/blah.css">
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
    <section class="blah">
        <table width="100%" height="100%">
            <tr>
                <td width="33%"> <div class="list">

            <ul class="list-group" id="myList">
                <li class="list-group-item">blah</li>
            </ul>


        </div></td>
                <td width="33%" align="center">
                 <h1 class="colors">Twilify</h1>
        <h3 class="colors">Text: (585)-209-5561</h3>    
                <h2 class="colors" id="code">Party Code</h2>
        <script>
             document.getElementById("code").innerHTML = Math.floor(Math.random()*90000) + 10000;
        </script>
        <!-- <div> -->
            <!-- <form> -->
                <!-- <span> -->
                    <!-- <input class="search" type="text"> -->
                    <!-- <a href="#" class="btn btn-lg btn-success">Search</a> -->
                <!-- </span> -->
            <!-- </form> -->
        <!-- </div> -->
        <br/>
        <script>
        var auto_refresh = setInterval(
        (function () {
            $("#textMessages").load("content.php");
        }), 1000);
        </script>
        <ul style="display: none" id="textMessages"></ul>

        <script>
        
        </script>

        <iframe id="play" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt" width="300" height="380" frameborder="0" allowtransparency="true"></iframe><br>
        <script  src="js/uris.js"></script>

        <script src="js/geturl.js"></script>


        <script>
        $(function() {
            $("#myList").sortable();
            $("#myList").disableSelection();
                  var optionTexts = [];
             
        });

        
    </script>

        <a href="#" onclick="nextSong()" class="btn btn-lg btn-success">Click for Next Song</a>
       
    </section></td>
                <td width="33%"></td>
            </tr>
        </table>
       <br />
        <br />
        <br />
        <br />
        <br />
</body>

</html>
