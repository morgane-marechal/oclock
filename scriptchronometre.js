   // code js pour le minuteur
   let result = document.getElementById("result");
   let whiteSeconde = document.getElementById("secondeW");
   let tMinute = document.getElementById("minuteW");
   let chooseTime=0;
   let whiteS=0;
   whiteSeconde.innerHTML=whiteS;
   let callGetTime = false;
   let timeIsWorking=false;
   const btnStart=document.getElementById("start");
   let tour = [];
   
   
   
function getTime() {  
    chooseTime = document.getElementById("chooseTime").value;
    tMinute.innerHTML = chooseTime;
   }

function chronoTime(){
    if(timeIsWorking===false){
       intervalOclock = setInterval(function(){timePlus();
           }, 1000);
        timeIsWorking = true;
        console.log("time is working ? "+timeIsWorking);
        document.getElementById("start").style.background = "#af83ee";
        document.getElementById("start").innerHTML="STOP";
    }else if(timeIsWorking===true){
        clearInterval(intervalOclock);
        let newTime ="<p>"+ chooseTime + " min " + whiteS + " sec </p> ";
        tour.push(newTime);
        console.log(tour);
        document.getElementById("start").style.background = "#d83aff";
        document.getElementById("start").innerHTML="START";
        timeIsWorking = false;
    }
    result.innerHTML="";
    let i = 0;
    while (i < tour.length) {
        result.innerHTML+=tour[i];
        i++;
    }
}
   
function timePlus() {
 if (whiteS>=60){
        whiteS=00;
        chooseTime++;
        tMinute.innerHTML = chooseTime;
    }
    tMinute.innerHTML = (chooseTime<10) ? "0" + chooseTime : chooseTime;
    whiteS ++;
    whiteSeconde.innerHTML=(whiteS < 10) ? "0" + whiteS : whiteS;
}

function reset(){
    clearInterval(intervalOclock);
    tour=[];
    whiteS=0;
    chooseTime=0;
    tMinute.innerHTML = (chooseTime<10) ? "0" + chooseTime : chooseTime;
    whiteSeconde.innerHTML=(whiteS < 10) ? "0" + whiteS : whiteS;
    result.innerHTML="";

}