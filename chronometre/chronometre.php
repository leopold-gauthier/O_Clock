<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once("../inc/head-inc.php") ?>
    <title>Chronométre</title>
</head>

<body>
    <header>
        <?php include_once("../inc/nav-inc.php"); ?>
    </header>
    <div class="clock">
        <p id="timer">00:00:00</p>
        <button class="button" id="start-stop">Start</button>
        <button class="button" id="reset">Reset</button>
        <button class="button" id="record">Tour</button>
        <ul id="records"></ul>
    </div>
</body>
<script src="./js/script_chronometre.js"></script>

</html>