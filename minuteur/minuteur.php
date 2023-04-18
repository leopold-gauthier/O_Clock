<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once("../inc/head-inc.php") ?>
    <title>Minuteur</title>
</head>

<body>
    <header>
        <?php include_once("../inc/nav-inc.php"); ?>
    </header>
    <div class="clock">
        <p>
            <label for="input-minutes">Minutes:</label>
            <input type="number" id="input-minutes" min="0" max="60" value="0">
            <label for="input-seconds">Secondes:</label>
            <input type="number" id="input-seconds" min="0" max="60" value="0">
            <button class="button" id="start-stop">Start</button>
        </p>
        <p id="timer">00:00</p>
    </div>
</body>
<script src="./js/script_minuteur.js"></script>

</html>