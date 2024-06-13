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
striked_fish.playbackRate = 2;

striked_jelly = new Audio("audio/striked_jelly.mp3");
striked_jelly.playbackRate = 2;

got_coin_music = new Audio("audio/got_coin.wav");
got_coin_music.volume = 0.5;

got_poison_music = new Audio("audio/got_poison.wav");
got_poison_music.volume = 0.1;

you_win = new Audio("audio/you_win.mp3");
you_win.volume = 0.05;
you_win.loop = true;

game_over = new Audio("audio/game_over.wav");
game_over.volume = 0.03;
game_over.loop = true;

congratulations_speech = new Audio("audio/Congratulations You .mp3");
congratulations_speech.playbackRate = 1.5;

lost_game_speech = new Audio("audio/Too Bad You gave it .mp3");
lost_game_speech.playbackRate = 1.4;

isMuted = false;
congratulations_speech_told = false;
lost_game_speech_told = false;

function toggleSound() {
  let img = document.getElementById("sound_toggle");

  if (img.src.includes("lautsprecher.png")) {
    img.src = "img/icons/lautsprecher_aus.png";
    img.alt = "sound off";
    isMuted = true;
    checkSound();
  } else {
    img.src = "img/icons/lautsprecher.png";
    img.alt = "sound on";
    isMuted = false;
    checkSound();
  }
}

function checkSound() {
  background_music.play();
  setInterval(() => {
    if (isMuted) {
      background_music.pause();
      endboss_sound.pause();
      striked_fish.pause();
      endboss_hurt_sound.pause();
      hit_by_fish.pause();
      hit_by_jelly.pause();
      striked_fish.pause();
      striked_jelly.pause();
      got_coin_music.pause();
      got_poison_music.pause();
      you_win.pause();
      game_over.pause();
      congratulations_speech.pause();
      lost_game_speech.pause();
    }
  }, 1000 / 60);
}

function playWinningSpeech() {
  if (!isMuted && !congratulations_speech_told) {
    congratulations_speech.play();

    setTimeout(() => {
      congratulations_speech_told = true;
    }, 23350);
  }
}

function playLostGameSpeech() {
  if (!isMuted && !lost_game_speech_told) {
    lost_game_speech.play();

    setTimeout(() => {
      lost_game_speech_told = true;
    }, 23350);
  }
}
