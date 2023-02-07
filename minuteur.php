<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="style.css" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Minuteur</title>

</head>
<body>
    
    <?php include('header.php'); ?> 

    <main id="backgroundMinuteur">
        <div id="minuteur">
            <div id="title">
                <h1>Minuteur</h1>  
            </div>   
            <div id="disButtons">
                <input type="number" id="chooseTime" name="nbMinutes" min=0 >Temps en minutes</input>
                <button type="submit" onclick="getTime()" value="Soumettre">Soumettre</button>
            </div>
                <button id="start" onclick="chronoTime()" type = "button">START</button>
            
                <div id="display">
                    <p id="minuteW">0</p>
                    <p id ="minW">MIN</p>
                    <p id="secondeW">0</p>
                    <p id ="secW">SEC</p>
                </div>
                <div id="endTime"></div>
            

        </div>

    </main>

    <footer>
        <script type="text/javascript" src="scriptminuteur.js"></script> 
    </footer>


</body>