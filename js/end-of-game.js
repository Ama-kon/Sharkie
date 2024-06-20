const text = document.getElementById("scrolling-text");
const winning = document.getElementById("you_win");
const losing = document.getElementById("game_over");
const blur_container = document.getElementById("blur_container");

/**
 * Restarts the game by clearing all intervals, stopping any playing audios, closing the end animation, and starting a new game.
 */
function restartGame() {
  clearAllIntervals();
  stopAudios();
  closeEndAnimation();
  startGame();
}

/**
 * Displays the end screen for the game, including the winning or losing message, and adds a scrolling animation to the text.
 * @param {string} id - The ID of the container element to display the end screen in.
 */
function endScreen(id) {
  let container = document.getElementById(id);
  container.classList.remove("d-none");
  container.classList.remove("fade-out");
  blur_container.classList.remove("d-none");
  container.classList.add("fade-in");
  text.classList.add("scroll-up");
}

/**
 * Clears all active intervals that have been set using the `setInterval()` function.
 * This is useful for cleaning up any running intervals when the game is restarted or the application is closed.
 */
function clearAllIntervals() {
  for (let i = 0; i < 1000; i++) {
    clearInterval(i);
  }
}

/**
 * Closes the end animation of the game by:
 * - Replacing the "fade-in" class with "fade-out" on the winning and losing elements
 * - Removing the "scroll-up" class from the text element
 * - After a 500ms delay, adding the "d-none" class to the winning and losing elements
 * - Adding the "d-none" class to the blur_container element
 */
function closeEndAnimation() {
  winning.classList.replace("fade-in", "fade-out");
  losing.classList.replace("fade-in", "fade-out");
  text.classList.remove("scroll-up");
  setTimeout(() => {
    winning.classList.add("d-none");
    losing.classList.add("d-none");
  }, 500);
  blur_container.classList.add("d-none");
}
