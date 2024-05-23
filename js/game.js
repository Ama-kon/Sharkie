let canvas;
let world;
let keyboard = new Keyboard();
let character;
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  character = world.character;
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

function toggleImage() {
  let img = document.getElementById("sound_toggle");

  if (img.src.includes("lautsprecher.png")) {
    img.src = "img/icons/lautsprecher_aus.png";
    img.alt = "sound off";
    audioOff();
  } else {
    img.src = "img/icons/lautsprecher.png";
    img.alt = "sound on";
    audioOn();
  }
}

function audioOff() {
  world.background_music.pause();
  // world.got_coin_music.pause();
  // world.got_poison_music.pause();
  // character.hit_by_jelly.pause();
  // character.hit_by_fish.pause();
}

function audioOn() {
  world.background_music.play();
  // world.got_coin_music.play();
  // world.got_poison_music.play();
  // character.hit_by_jelly.play();
  // character.hit_by_fish.play();
}
