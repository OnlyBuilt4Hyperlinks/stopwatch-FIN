var milliseconds = 0;
var seconds= 0;
var minutes= 0;
var hours = 0; 


function stopwatchReset() {
    stopwatchStop();
    milliseconds = 0;
    seconds = 0; 
    minutes = 0;
    hours   = 0;
    return;
}

function stopwatchStop() {
    clearInterval(stopwatchStart);
}

function stopwatchStart() {
    addMilliSeconds();    
    return;
}


function addMilliSeconds() {
    if (milliseconds < 1) {
        milliseconds ++;
    } else {
        addSeconds();
        milliseconds = 0;
    }
    document.getElementById("millisecondsDOM").innerHTML = (":" +milliseconds);
}
    
function addSeconds() {
    if (seconds < 60) {
        seconds ++; 
    } else {
        addMinutes();
        seconds = 0; 
    }
    document.getElementById("secondsDOM").innerHTML = (":" +seconds);
}

function addMinutes() {
    if (minutes < 59) {
        minutes ++; 
    } else {
        
        addHours(); 
        minutes = 0;
        //dont forget to stop this if the bigger unit of time (seconds, minutes,etc) is full
    }
    document.getElementById("minutesDOM").innerHTML = (":" +minutes);
} 

function addHours() {
    if (hours < 99) {
        hours ++; 
    }
     {
        
    }
    document.getElementById("hoursDOM").innerHTML = hours; 
} 
