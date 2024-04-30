const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");
const millisecondDisplay = document.querySelector(".millisecond");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let startTime;
let elapsedTime = 0;
let interval;
let running = false;

function start() {
    running = true;
    startTime = Date.now() - elapsedTime;
    interval = setInterval(updateTime, 10);
}

function stop() {
    running = false;
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
}

function reset() {
    running = false;
    clearInterval(interval);
    elapsedTime = 0;
    hourDisplay.textContent = "00";
    minuteDisplay.textContent = "00";
    secondDisplay.textContent = "00";
    millisecondDisplay.textContent = "00";
}

function updateTime() {
    let currentTime = Date.now();
    let elapsed = currentTime - startTime;
    let hour = Math.floor(elapsed / 3600000);
    let minute = Math.floor((elapsed % 3600000) / 60000);
    let second = Math.floor((elapsed % 60000) / 1000);
    let millisecond = Math.floor((elapsed % 1000) / 10);

    hourDisplay.innerHTML = displayTime(hour);
    minuteDisplay.innerHTML = displayTime(minute);
    secondDisplay.innerHTML = displayTime(second);
    millisecondDisplay.innerHTML = displayTime(millisecond);
}

function displayTime(time) {
    return time < 10 ? "0" + time : time;
}

startBtn.addEventListener("click", () => {
    if (!running) {
        start();
    }
});

stopBtn.addEventListener("click", () => {
    if (running) {
        stop();
    }
});

resetBtn.addEventListener("click", () => {
    reset();
});
