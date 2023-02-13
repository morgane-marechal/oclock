// code js pour l'horloge
function showTime(){
    var date = new Date();
     var h = date.getHours(); 
     var m = date.getMinutes(); 
     var s = date.getSeconds();
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
     var time = h + ":" + m + ":" + s ;
    document.getElementById("myClock").innerHTML = time;    
    }
    setInterval(showTime, 1000);
    
    function dateNumber() {
        var dateNumb = new Date();
        var dateNumber = dateNumb.getDate();
        document.getElementById("dateNumber").innerHTML = dateNumber;  
    }
    
    function month() {
        var dateMonth = new Date();
        var month = dateMonth.getMonth();
        document.getElementById("month").innerHTML = month;  
        switch (month) {
         case 0:
        document.getElementById("month").innerHTML = "Janvier";
        break;
         case 1:
        document.getElementById("month").innerHTML = "Février";
        break;
        case 2:
        document.getElementById("month").innerHTML = "Mars";
        break;
         case 3:
        document.getElementById("month").innerHTML = "Avril";
        break;
        case 4:
        document.getElementById("month").innerHTML = "Mai";
        break;
         case 5:
        document.getElementById("month").innerHTML = "Juin";
        break;
        case 6:
        document.getElementById("month").innerHTML = "Juillet";
        break;
         case 7:
        document.getElementById("month").innerHTML = "Août";
        break;
         case 8:
        document.getElementById("month").innerHTML = "Septembre";
        break;
         case 9:
        document.getElementById("month").innerHTML = "Octobre";
        break;
         case 10:
        document.getElementById("month").innerHTML = "Novembre";
        break;
        default:
        document.getElementById("month").innerHTML = "Décembre";
    }
    }
    
    function day(){
        var dateDay = new Date();
        var day = dateDay.getDay();
        document.getElementById("day").innerHTML = day;
        switch (day) {
         case 1:
        document.getElementById("day").innerHTML = "Lundi";
        break;
         case 2:
        document.getElementById("day").innerHTML = "Mardi";
        break;
        case 3:
        document.getElementById("day").innerHTML = "Mercredi";
        break;
         case 4:
        document.getElementById("day").innerHTML = "Jeudi";
        break;
        case 5:
        document.getElementById("day").innerHTML = "Vendredi";
        break;
         case 6:
        document.getElementById("day").innerHTML = "Samedi";
        break;
        case 0:
        document.getElementById("day").innerHTML = "Dimanche";
        break;
    
        default:
        document.getElementById("day").innerHTML = "Je ne sais pas";
    }       
    }
    
    showTime();
    day();
    dateNumber();
    month();

 