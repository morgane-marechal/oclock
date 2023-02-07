<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="style.css" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Horloge</title>

</head>
<body>
    
    <?php include('header.php'); ?> 

    <main>

    
        <div id="allTime">
            <div id="title">
                <h1>Horloge</h1>  
            </div>    
            <div id="date">
            <div id="day" onload="day()"></div>
            <div id="dateNumber" onload="dateNumber()"></div>
            <div id="month" onload="month()"></div>
            </div>
            <div id="myClock" onload="showTime()"></div>  
        </div>
    

    </main>

    <footer>
        <script type="text/javascript" src="script.js"></script> 
    </footer>


</body>