let canvas;
let world;
let keyboard = new Keyboard();
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  console.log("my character is", world.character);
}

window.addEventListener("keydown", (event) => {
  console.log(event);
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
  console.log(keyboard);
});

window.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.keyCode == 32) {
    keyboard.space = false;
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
  console.log(keyboard);
});
