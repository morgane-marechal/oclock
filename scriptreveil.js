// code js pour la partie horloge
let diffTime=[]; //tableau des alarmes à venir
let passedAlert=[]; // tableau des alarmes passées
let result=document.getElementById("result");
let displayPassedAlert=document.getElementById("passedAlert");
let chooseHour=0;
let text = "";
let allTime=chooseHour+":00";
let checkChooseTime=document.getElementById("checkChosenTime");
checkChooseTime.innerHTML="hello WoRlD";

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
    getTime();
    //comparer les valeur de time avec le tableau diffTime
    console.log("tableau diffTime "+diffTime);
    for (let i = 0; i < diffTime.length; i++) {
        if(diffTime[i] === time){
            //result.innerHTML="Les deux temps sont égaux";
            console.log("text :"+text);
            new Audio('twice.mp3').play();
            alert(text);
            passedAlert.push(diffTime[i]);
            diffTime.splice(i, 1);
            console.log("passedAlert "+passedAlert);
            displayPassedAlert.innerHTML="";
            displayPassedAlert.innerHTML+=passedAlert+" <br>";
        } 
    } 
    //return time;
}

    let showtime=setInterval(showTime, 1000);
    //let showtime = showTime();

function getTime() {  
    chooseHour = document.getElementById("chooseHour").value;
    text=document.getElementById("text").value;
    console.log("text :"+text);
    allTime=chooseHour+":00";
    checkChooseTime.innerHTML = allTime;
    result.innerHTML="";
    if(diffTime.includes(allTime)===false){
        diffTime.push(allTime);
    }
    let i = 1;
    while (i < diffTime.length) {
    result.innerHTML+="Prochaine sonnerie "+diffTime[i]+" <br>";
    i++;
    }
    return allTime;
}




   
 

 