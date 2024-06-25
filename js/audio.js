background_music = new Audio("audio/background_music.mp3");
background_music.volume = 0.1;
background_music.loop = true;

snoring = new Audio("audio/Cartoon-snoring.mp3");
snoring.loop = true;
snoring.playbackRate = 1.1;
snoring.volume = 0.5;

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

endOfGame = false;

let audios = [
  background_music,
  snoring,
  endboss_sound,
  endboss_hurt_sound,
  hit_by_fish,
  hit_by_jelly,
  striked_fish,
  striked_jelly,
  got_coin_music,
  got_poison_music,
  you_win,
  game_over,
  congratulations_speech,
  lost_game_speech,
];

/**
 * Toggles the sound on or off in the game.
 *
 * When the sound is toggled off, all audio playback is paused. When the sound is
 * toggled on, the `checkSound()` function is called to resume audio playback.
 *
 * The sound toggle is represented by an image element with the ID "sound_toggle".
 * The image source and alt text are updated to reflect the current sound state.
 *
 * The `isMuted` flag is also updated to reflect the current sound state.
 */
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

/**
 * Saves the current mute state of the game to the browser's local storage.
 * This allows the mute state to persist across page refreshes or browser sessions.
 */
function settingToLocalStorage() {
  localStorage.setItem("isMuted", isMuted);
}

/**
 * Retrieves the mute state of the game from the browser's local storage and updates the UI accordingly.
 *
 * This function is called to initialize the mute state of the game when the page is loaded. It checks if a mute state has been saved in the local storage, and if so, it updates the "sound_toggle" image element to reflect the saved mute state.
 */
function getSettingFromLocalStorage() {
  const isMutedFromStorage = localStorage.getItem("isMuted");
  if (isMutedFromStorage !== null) {
    isMuted = isMutedFromStorage === "true";
    const img = document.getElementById("sound_toggle");
    if (isMuted) {
      img.src = "img/icons/lautsprecher_aus.png";
      img.alt = "sound off";
    } else {
      img.src = "img/icons/lautsprecher.png";
      img.alt = "sound on";
    }
  }
}

/**
 * Checks the sound state and pauses or resumes audio playback accordingly.
 *
 * If the game is muted (`isMuted` is true), this function will pause all audio
 * playback. Otherwise, it will resume playback of the background music.
 *
 * This function is called repeatedly using `setInterval` to ensure the audio
 * state is kept up-to-date with the mute state.
 */
function checkSound() {
  background_music.play();
  setInterval(() => {
    if (isMuted) {
      pauseAllAudios();
    }
  }, 1000 / 60);
  settingToLocalStorage();
}

/**
 * Pauses all audio playback.
 * This function is used to stop all audio when the game is reset or restarted.
 */
function pauseAllAudios() {
  audios.forEach((audio) => {
    audio.pause();
  });
}

/**
 * Plays the congratulations speech audio if the game is not muted and the speech has not been played yet.
 * The `congratulations_speech_told` flag is set to true after the speech has finished playing to prevent it from being played again.
 */
function playWinningSpeech() {
  if (!isMuted && !congratulations_speech_told) {
    congratulations_speech.play();
    setTimeout(() => {
      congratulations_speech_told = true;
    }, 23350);
  }
}

/**
 * Plays the lost game speech audio if the game is not muted and the speech has not been played yet.
 * The `lost_game_speech_told` flag is set to true after the speech has finished playing to prevent it from being played again.
 */
function playLostGameSpeech() {
  if (!isMuted && !lost_game_speech_told) {
    lost_game_speech.play();
    setTimeout(() => {
      lost_game_speech_told = true;
    }, 23350);
  }
}

/**
 * Stops all audio playback and resets the state of the `lost_game_speech_told` and `congratulations_speech_told` flags.
 * This function is used to ensure a clean state when the game is reset or restarted.
 */
function stopAudios() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  lost_game_speech_told = false;
  congratulations_speech_told = false;
}
