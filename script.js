let display = document.querySelector('.display');
let hourElem = document.querySelector('.hour');
let minutesElem = document.querySelector('.minutes');
let secondElem = document.querySelector('.second');

let timer;
let hour = 0;
let minutes = 0;
let second = 0;
let isRunning = false;

// Start timer
function startFunction() {
    if (!isRunning) {
        isRunning = true;
        runTimer();
    }
}

// Function timer
function runTimer() {
    timer = setTimeout(() => {
        second++;

        if (second === 60) {
            second = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hour++;
        }

        if (hour === 24) {
            second = 0;
            minutes = 0;
            hour = 0;
        }

        updateDisplay();
        runTimer();
    }, 1000);
}

// Pause timer
function pauseFunction() {
    clearTimeout(timer);
    isRunning = false;
}

// Replay timer
function replayFunction() {
    clearTimeout(timer);
    isRunning = false;
    second = 0;
    minutes = 0;
    hour = 0;
    updateDisplay();
}

// Update display
function updateDisplay() {
    secondElem.textContent = second < 10 ? '0' + second : second;
    minutesElem.textContent = minutes < 10 ? '0' + minutes + ':' : minutes + ':';
    hourElem.textContent = hour < 10 ? '0' + hour + ':' : hour + ':';
}
