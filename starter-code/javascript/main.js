var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (event.currentTarget.className="btn start"){
        event.currentTarget.className="btn stop"
        event.currentTarget.innerText="STOP"
        event.currentTarget.onclick = stopClick

    } else if (event.currentTarget.className="btn stop"){
        event.currentTarget.className="btn start"
        event.currentTarget.innerText="START"
        event.currentTarget.onclick = startClick
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (event.currentTarget.className="btn reset"){
        btnRight.className="btn split"
        btnRight.innerText="SPLIT"
    } else if (event.currentTarget.className="btn reset"){
        btnRight.className="btn reset"
        btnRight.innerText="RESET"
    }
});
