<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="style.css" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Chronomètre</title>

</head>
<body>
    
    <?php include('header.php'); ?> 

    <main id="background-chrono">
        <div id="minuteur">
            <div id="title">
                <h1 id="font-chrono">Chronomètre</h1>  
            </div>   

            <div id="blocSR">
                <button id="start" onclick="chronoTime()" type = "button">START</button>
                <button id="reset" onclick="reset()" type = "button">Reset</button>
            </div>
            
                <div id="display-chrono">
                    <p id="minuteW">0</p>
                    <p id ="minW">MIN</p>
                    <p id="secondeW">0</p>
                    <p id ="secW">SEC</p>
                </div>
                <div id="bloc-temps">
                    <div id="result1">Nombre de tours : </div>
                    <div id="result"></div>
                </div>

            

        </div>

    </main>

    <footer>
        <script type="text/javascript" src="scriptchronometre.js"></script> 
    </footer>


</body>