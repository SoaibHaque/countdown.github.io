var Selector = r => document.querySelector(r);
var showtime = Selector("p#showtime");
var stop = Selector("button#stop");
var sound = Selector("audio#sound");
//LOGIC

function startcountdowm(minutes, seconds) {
    stop.addEventListener("click", () => {
        clearInterval(intervals);
        startcountdowm(0, 0);
    })
    var intervals = setInterval(function countdown() {
        showtime.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        if (seconds == 0 && minutes !== 0) {
            clearInterval(intervals);
            startcountdowm(minutes - 1, 59);
        } else if (seconds !== 0) {
            seconds = seconds - 1;
        } else if (minutes == 0 && seconds == 0) {
            clearInterval(intervals);
            sound.play();
        }
    }, 1000);
}