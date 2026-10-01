// DIGITAL CLOCK

function clock() {

    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();


    // ANALOG CLOCK

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();


    // Calculate hand angles

    let hourAngle =
        (hours % 12) * 30 + minutes * 0.5;

    let minuteAngle =
        minutes * 6 + seconds * 0.1;

    let secondAngle =
        seconds * 6;


    // Move hands

    document.getElementById("hour").style.transform =
        "rotate(" + hourAngle + "deg)";

    document.getElementById("minute").style.transform =
        "rotate(" + minuteAngle + "deg)";

    document.getElementById("second").style.transform =
        "rotate(" + secondAngle + "deg)";
}


setInterval(clock, 1000);

clock();


// STOPWATCH

let seconds = 0;

let timer = null;


// Display stopwatch

function showTime() {

    let h = Math.floor(seconds / 3600);

    let m = Math.floor((seconds % 3600) / 60);

    let s = seconds % 60;


    document.getElementById("stopwatch").innerHTML =

        String(h).padStart(2, "0") + ":" +

        String(m).padStart(2, "0") + ":" +

        String(s).padStart(2, "0");
}


// START BUTTON

document.getElementById("startBtn").onclick = function() {

    if (timer === null) {

        timer = setInterval(function() {

            seconds++;

            showTime();

        }, 1000);

    }
};


// STOP BUTTON

document.getElementById("stopBtn").onclick = function() {

    clearInterval(timer);

    timer = null;
};


// RESET BUTTON

document.getElementById("resetBtn").onclick = function() {

    clearInterval(timer);

    timer = null;

    seconds = 0;

    showTime();
};


// Initial stopwatch display

showTime();

