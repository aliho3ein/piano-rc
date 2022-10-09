const note = document.querySelector(".note");
let keys = document.querySelectorAll(".key");
let span = document.querySelectorAll(".key-spn");
let sharps = document.querySelectorAll(".sharp");

// function rmKey(key) {
//   key.style.transform = "scale(100%)";
// }

function playing(e) {
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  let cl = key.getAttribute("data-note");
  note.textContent = cl;
  let sound = document.querySelector(`.sound[data-note="${cl}"]`);

  sound.currentTime = 0;
  sound.play();

  key.classList.add("playing");
  // key.style.transform = "scale(97%)";
  // setInterval(rmKey, 200, key);
}

window.addEventListener("keydown", playing);

function rmKey() {
  // this.style.transform = "scale(100%)";
  this.classList.remove("playing");
}
keys.forEach((element) => element.addEventListener("transitionend", rmKey));

/* Hover delay */
span.forEach(function (element, value) {
  element.style = `transition-delay: ${value * 50}ms`;
});
