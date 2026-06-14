let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// DOM Elements

const ms = document.getElementById("milliseconds");
const sec = document.getElementById("seconds");
const min = document.getElementById("minutes");
const hr = document.getElementById("hours");

const laps = document.getElementById("laps");

// Update Stopwatch Display

function updateDisplay(){

    ms.innerText =
        milliseconds < 10 ? "0" + milliseconds : milliseconds;

    sec.innerText =
        seconds < 10 ? "0" + seconds : seconds;

    min.innerText =
        minutes < 10 ? "0" + minutes : minutes;

    hr.innerText =
        hours < 10 ? "0" + hours : hours;
}

// Start Stopwatch

function startWatch(){

    if(timer !== null){
        return;
    }

    timer = setInterval(() => {

        milliseconds++;

        if(milliseconds == 100){

            milliseconds = 0;
            seconds++;
        }

        if(seconds == 60){

            seconds = 0;
            minutes++;
        }

        if(minutes == 60){

            minutes = 0;
            hours++;
        }

        updateDisplay();

    },10);
}

// Pause Stopwatch

function pauseWatch(){

    clearInterval(timer);

    timer = null;
}

// Reset Stopwatch

function resetWatch(){

    clearInterval(timer);

    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    laps.innerHTML = "";
}

// Add Lap

function addLap(){

    if(
        milliseconds === 0 &&
        seconds === 0 &&
        minutes === 0 &&
        hours === 0
    ){
        return;
    }

    const lap = document.createElement("li");

    lap.innerHTML = `
        Lap ${laps.children.length + 1}
        -
        ${hr.innerText}:${min.innerText}:${sec.innerText}:${ms.innerText}
    `;

    laps.prepend(lap);
}

// Button Events

document
.getElementById("startBtn")
.addEventListener("click",startWatch);

document
.getElementById("pauseBtn")
.addEventListener("click",pauseWatch);

document
.getElementById("resetBtn")
.addEventListener("click",resetWatch);

document
.getElementById("lapBtn")
.addEventListener("click",addLap);

// Initialize

updateDisplay();