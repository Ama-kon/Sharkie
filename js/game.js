let canvas;
let world;
let keyboard = new Keyboard();
let character;
background_music = new Audio("audio/background_music.mp3");
background_music.volume = 0.1;
let isMuted = false;
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
});

window.addEventListener("keyup", (event) => {
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
  if (event.keyCode == 68) {
    keyboard.d = false;
  }
});

function toggleSound() {
  let img = document.getElementById("sound_toggle");

  if (img.src.includes("lautsprecher.png")) {
    img.src = "img/icons/lautsprecher_aus.png";
    img.alt = "sound off";
    isMuted = true;
    world.isMuted = true;
    world.character.isMuted = true;
    checkSound();
  } else {
    img.src = "img/icons/lautsprecher.png";
    img.alt = "sound on";
    isMuted = false;
    world.isMuted = false;
    world.character.isMuted = false;
    checkSound();
  }
}

function checkSound() {
  if (isMuted) {
    audioOff();
  } else {
    audioOn();
  }
}

function audioOff() {
  background_music.pause();
}

function audioOn() {
  background_music.play();
}
