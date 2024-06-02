background_music = new Audio("audio/background_music.mp3");
background_music.volume = 0.1;
background_music.loop = true;

endboss_sound = new Audio("audio/endboss_sound.mp3");
endboss_sound.loop = true;

endboss_hurt_sound = new Audio("audio/endboss_hurt.wav");
endboss_hurt_sound.playbackRate = 2.3;

hit_by_fish = new Audio("audio/hit_by_fish.wav");
hit_by_fish.playbackRate = 2;

hit_by_jelly = new Audio("audio/electric_shock.mp3");
hit_by_jelly.playbackRate = 2.3;

striked_fish = new Audio("audio/striked_fish.mp3");
striked_fish.playbackRate = 1.5;

striked_jelly = new Audio("audio/striked_jelly.mp3");
striked_jelly.playbackRate = 2;

got_coin_music = new Audio("audio/got_coin.wav");
got_coin_music.volume = 0.5;

got_poison_music = new Audio("audio/got_poison.wav");
got_poison_music.volume = 0.1;

you_win = new Audio("audio/you_win.mp3");
you_win.volume = 0.2;
you_win.loop = true;

game_over = new Audio("audio/game_over.wav");

let isMuted = false;

function toggleSound() {
  let img = document.getElementById("sound_toggle");

  if (img.src.includes("lautsprecher.png")) {
    img.src = "img/icons/lautsprecher_aus.png";
    img.alt = "sound off";
    isMuted = true;
    world.isMuted = true;
    world.character.isMuted = true;
    world.endboss.isMuted = true;

    checkSound();
  } else {
    img.src = "img/icons/lautsprecher.png";
    img.alt = "sound on";
    isMuted = false;
    world.isMuted = false;
    world.character.isMuted = false;
    world.endboss.isMuted = false;
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
