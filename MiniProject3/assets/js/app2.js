let timeNow = new Date().getTime();
let days;
let hours;
let minutes;
let seconds;
let timer;
let timerState = true;
let myVar;
function setTimer() {
    days = Number(document.getElementById("dayInput").value);
    hours = Number(document.getElementById("hrInput").value);
    minutes = Number(document.getElementById("minInput").value);
    seconds = Number(document.getElementById("secInput").value);
    if (isNaN(days) || isNaN(hours) || isNaN(days) || isNaN(minutes)) {
        document.getElementById('text-msg').innerHTML = "<p> Please enter the numbers in the input boxes...</p>";
        return;
    }
    else {
        document.getElementById('text-msg').innerHTML = "";
    }
    document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
    document.getElementById("mins").innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("secs").innerHTML = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("dayInput").value = '0';
    document.getElementById("hrInput").value = '0';
    document.getElementById("minInput").value = '0';
    document.getElementById("secInput").value = '0';
    timer = days * 86400000 + hours * 3600000 + minutes * 60000 + seconds * 1000;
}
function start() {
    if ((!myVar || timerState) && timer > 0) {
        timerState = false;
        myVar = setInterval(startTimer, 1000);
    }
}

function startTimer() {
    if (timer < 0) {
        document.getElementById('text-msg').innerHTML = "<p> Timer is finished</p>";
        clearInterval();
        return;
    }
    document.getElementById('text-msg').innerHTML = "";
    var daysValue = Math.floor(timer / (1000 * 60 * 60 * 24));
    var hoursValue = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesValue = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    var secondsValue = Math.floor((timer % (1000 * 60)) / 1000);
    timer -= 1000;
    if (isNaN(daysValue) || isNaN(hoursValue) || isNaN(minutesValue) || isNaN(secondsValue)) {
        document.getElementById('text-msg').innerHTML = "<p> Don't start the timer before time Set.</p>";
        return;
    }
    document.getElementById('text-msg').innerHTML = "";
    document.getElementById("days").innerHTML = daysValue < 10 ? '0' + daysValue : daysValue;
    document.getElementById("hours").innerHTML = hoursValue < 10 ? '0' + hoursValue : hoursValue;
    document.getElementById("mins").innerHTML = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    document.getElementById("secs").innerHTML = secondsValue < 10 ? '0' + secondsValue : secondsValue;
}


function setDefaultValue(id) {
    let value = document.getElementById(id).value;
    if (value == '') {
        document.getElementById(id).value = 0;
    }
}

function pause() {
    if (myVar) {
        timerState = true;
        clearInterval(myVar);
    }
}

function reset() {
    if (myVar) {
        timerState = true;
        clearInterval(myVar);
    }
    document.getElementById('text-msg').innerHTML = "";
    document.getElementById("days").innerHTML = '00';
    document.getElementById("hours").innerHTML = '00';
    document.getElementById("mins").innerHTML = '00';
    document.getElementById("secs").innerHTML = '00';
    document.getElementById("dayInput").value = '0';
    document.getElementById("hrInput").value = '0';
    document.getElementById("minInput").value = '0';
    document.getElementById("secInput").value = '0';
    timer = 0;
}