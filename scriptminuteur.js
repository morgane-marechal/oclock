   // code js pour le minuteur
   let endTime = document.getElementById("endTime");
   let whiteSeconde = document.getElementById("secondeW");
   let tMinute = document.getElementById("minuteW");
   let chooseTime=0;
   let whiteS=0;
   whiteSeconde.innerHTML=whiteS;
   let callGetTime = false;
   //test fonction exemple et setInterval
  // const testChrono= document.getElementById("testchrono");
   console.log('testChrono');
   console.log(testChrono);
   console.log('testChrono2');
   let chrono = 20
   let timeIsWorking=false;
   const btnStart=document.getElementById("start");
   
   
   
function getTime() {  
    chooseTime = document.getElementById("chooseTime").value;
    tMinute.innerHTML = chooseTime;
   }

function chronoTime(){
    if(timeIsWorking===false){
       intervalOclock = setInterval(function(){timeMinus();
           }, 1000);
        timeIsWorking = true;
        console.log("time is working ? "+timeIsWorking);
        document.getElementById("start").style.background = "#af83ee";
        document.getElementById("start").innerHTML="STOP";
    }else if(timeIsWorking===true){
        clearInterval(intervalOclock);

        document.getElementById("start").style.background = "#d83aff";
        document.getElementById("start").innerHTML="START";
        timeIsWorking = false;
    }
}
   
function timeMinus() {

    if(whiteS<=0 && chooseTime<=0){
        whiteS =1;
        chooseTime=0;
        tMinute.innerHTML = chooseTime;
        endTime.innerHTML = "Fin du temps";
        
    }else if (whiteS<=0){
        whiteS=60;
        chooseTime--;
        tMinute.innerHTML = chooseTime;
    }
    tMinute.innerHTML = (chooseTime<10) ? "0" + chooseTime : chooseTime;
    whiteS --;
    whiteSeconde.innerHTML=(whiteS < 10) ? "0" + whiteS : whiteS;
    
}

    
    



   
   
   
   
   
   