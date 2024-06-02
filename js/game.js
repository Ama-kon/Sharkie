let canvas;
let world;
let keyboard = new Keyboard();
let character;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 32) {
    keyboard.space = true;
  }
  if (event.keyCode == 38) {
    keyboard.up = true;
  }
  if (event.keyCode == 40) {
    keyboard.down = true;
  }
  if (event.keyCode == 37) {
    keyboard.left = true;
  }
  if (event.keyCode == 39) {
    keyboard.right = true;
  }
  if (event.keyCode == 68) {
    keyboard.d = true;
  }
  if (event.keyCode == 65) {
    keyboard.a = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 32) {
    setTimeout(() => {
      keyboard.space = false;
    }, 1000);
  }
  if (event.keyCode == 38) {
    keyboard.up = false;
  }
  if (event.keyCode == 40) {
    keyboard.down = false;
  }
  if (event.keyCode == 37) {
    keyboard.left = false;
  }
  if (event.keyCode == 39) {
    keyboard.right = false;
  }
  if (event.keyCode == 68) {
    keyboard.d = false;
  }
  if (event.keyCode == 65) {
    keyboard.a = false;
  }
});
