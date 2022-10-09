const note = document.querySelector(".note");
let keys = document.querySelectorAll(".key");
let span = document.querySelectorAll(".key-spn");
let sharps = document.querySelectorAll(".sharp");

function playing(e) {
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  let cl = key.getAttribute("data-note");
  letsPlay(key.getAttribute("data-note"));
}

window.addEventListener("keydown", playing);

function rmKey() {
  this.classList.remove("playing");
}
keys.forEach((element) => element.addEventListener("transitionend", rmKey));

/* Hover delay */
span.forEach(function (element, value) {
  element.style = `transition-delay: ${value * 50}ms`;
});

keys.forEach(function (ele) {
  ele.addEventListener("click", function () {
    letsPlay(this.getAttribute("data-note"));
  });
});

function letsPlay(item) {
  note.textContent = item;
  let id = document.querySelector(`.key[data-note="${item}"]`);
  let sound = document.querySelector(`.sound[data-note="${item}"]`);
  sound.currentTime = 0;
  sound.play();
  id.classList.add("playing");
  // setInterval(removeKey, 200, key);
}

// function removeKey(key) {
//   key.style.transform = "scale(100%)";
// }
