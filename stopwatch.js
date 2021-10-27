
var seconds= 0;
var minutes= 0;
var hours = 0; 

//in order to user clear interval we need to pass an object as an arg. 
//object has to represent the start of the countdown

var startTimer;

function runTimer() {
startTimer = setInterval(stopwatchStart,1000)
}

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

    document.getElementById("secondsDOM").innerHTML = ":" + seconds;
    document.getElementById("minutesDOM").innerHTML = ":" + minutes;
    document.getElementById("hoursDOM").innerHTML = ":" + hours; 
}

function addSeconds() {
    if (seconds <= 59){
        if (seconds && minutes == 59 ){
            hours++;
            seconds = 0;
            minutes = 0;
        } else if (seconds >= 59 && minutes < 59){
            minutes++;
            seconds = 0;
        } else {
            seconds ++;
        }
        document.getElementById("secondsDOM").innerHTML = ":" + seconds;
        document.getElementById("minutesDOM").innerHTML = ":" + minutes;
        document.getElementById("hoursDOM").innerHTML = ":" + hours; 
    }
} 
