
var seconds= 0;
var minutes= 0;
var hours = 0; 

//in order to user clear interval we need to pass an object as an arg. 
//object has to represent the start of the countdown
var startTimer = setInterval(stopwatchStart,1000)


//because i had trouble, i'm wondering if there is a reason i may need to creat an expression out of the function
//does me having return make a difference in function operation
function stopwatchStart(){
   addSeconds();
}

function stopwatchStop(){
clearInterval(startTimer);
}

function stopwatchReset(){
    stopwatchStop();
    seconds = 0;
    minutes = 0; 
    hours = 0; 

    document.getElementById("secondsDOM").innerHTML = seconds;
    document.getElementById("minutesDOM").innerHTML = minutes;
    document.getElementById("hoursDOM").innerHTML = hours; 
    }

}


function addSeconds() {
    if (seconds <= 59){
        if (seconds && minutes == 59 ){
            hours++;
            seconds = 0;
            minutes = 0;
        } elseif (seconds >= 59 && minutes < 59){
            minutes++;
            seconds = 0;
        }
        document.getElementById("secondsDOM").innerHTML = seconds;
        document.getElementById("minutesDOM").innerHTML = minutes;
        document.getElementById("hoursDOM").innerHTML = hours; 
    }
}
