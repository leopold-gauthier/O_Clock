<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once("../inc/head-inc.php") ?>
    <title>Réveil</title>
</head>

<body>
    <main>
        <div class="clock">
            <ul id="alarmList"></ul>

            <label for="alarmTime">Alarme</label>
            <input type="time" id="alarmTime">



            <label for="alarmMessage">Nom</label>
            <input type="text" id="alarmMessage">
            <button class="button" onclick="setAlarm()">Ajouter une alarme</button>
        </div>
        <?php include_once("../inc/background-inc.php"); ?>
    </main>

</body>
<script src="./js/script_reveil.js"></script>

</html>