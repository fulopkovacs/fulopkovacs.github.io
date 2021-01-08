// window.setInterval(function () { window.location.reload() }, 1000);

let shouldPlay = false;

let btn = document.querySelector("#control-button");
let btn_2 = document.querySelector("#control-button-stop");
let mp3 = document.querySelector("audio")
let interval = 5000*60;
// let interval = 5000;

// hide "stop" button first
btn_2.style.display = "none"

function start () {
  shouldPlay = true;
  // btn.innerText = "Stop"
  playSound();
  btn.style.display = "none"
  btn_2.style.display = "block"
}

function stop () {
  window.location.reload()
  // btn.style.display = "block"
  // btn_2.style.display = "none"
}

function playSound() {
  if (shouldPlay) {
    mp3.play()
    window.setTimeout(playSound, interval);
  }
};

btn.addEventListener("click", start);
btn_2.addEventListener("click", stop);
