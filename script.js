let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hrs.innerHTML = hours < 10 ? "0" + hours : hours;
  mins.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(digitalClock, 1000);
