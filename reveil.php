<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="style.css" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Réveil</title>

</head>
<body>
    
    <?php include ('header.php'); ?> 

    <main>

    
        <div id="allTime">
            <div id="title">
                <h1>Réveil</h1>  
            </div>  
            
                <div id="chooseReveil">
                    <label for="appt-time">Veuillez choisir une heure de réveil :</label>
                    <input type="time" id="chooseHour" name="cHour" min=0 ></input><br>
                    <label for="text">Entrez un text pour vous accueillir au réveil:</label>
                    <input type="text" id="text" name="text" ><br>
                    <button type="submit" onclick="getTime()" value="Soumettre">Soumettre</button>
                </div>
            

            <div id="myClock" onload="showTime()"></div>  
            

        </div>

        <div id="bloc-reveil">
            <h2>Dernière alarme choisie</h2>
            <div id="checkChosenTime">Hello</div>
            <h2>Alarmes à venir</h2>
            <div id="result">result</div>
            <h2>Alarmes passées</h2>
            <div id="passedAlert">
            <p>Alertes passées</p>
            </div>
        </div>


    
        

    </main>

    <footer>
        <script type="text/javascript" src="scriptreveil.js"></script> 
    </footer>


</body>