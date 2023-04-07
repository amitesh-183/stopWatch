let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

sec = 0;
millisec = 0;

const stopWatch = () => {
  millisec++;
  if (millisec < 9) {
    milliseconds.innerHTML = "0" + millisec;
  }
  if (millisec > 9) {
    milliseconds.innerHTML = millisec;
  }
  if (millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliseconds.innerHTML = "0" + 0;
  }
  if (millisec < 9) {
    milliseconds.innerHTML = 0 + millisec;
  }

  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

start.addEventListener("click", () => {
  timeInterval = setInterval(stopWatch, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  sec = "00";
  millisec = "00";
  seconds.innerHTML = sec;
  milliseconds.innerHTML = millisec;
});
