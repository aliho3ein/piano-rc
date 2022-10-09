const note = document.querySelector(".note");
let keys = document.querySelectorAll(".key");
let span = document.querySelectorAll(".key-spn");
let sharps = document.querySelectorAll(".sharp");

/* Hover delay */
span.forEach(function (element, value) {
  element.style = `transition-delay: ${value * 50}ms`;
});

/* On keydown */
window.addEventListener("keydown", (e) => {
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  letsPlay(key.getAttribute("data-note"));
});

/* On click  */
keys.forEach(function (ele) {
  ele.addEventListener("click", function () {
    letsPlay(this.getAttribute("data-note"));
  });
});

/* Remove Key Effect */
keys.forEach((element) =>
  element.addEventListener("transitionend", function () {
    this.classList.remove("playing");
  })
);

/* Play sound */
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
