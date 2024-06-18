window.addEventListener("resize", resizeCanvas);
document.addEventListener("DOMContentLoaded", toggleFullscreen);

/**
 * Resizes the canvas element to fit the current window width.
 * The canvas width is set to 630 pixels if the window width is less than 600 pixels,
 * 720 pixels if the window width is less than 760 pixels, and 1000 pixels otherwise.
 */
function resizeCanvas() {
  let canvas = document.getElementById("canvas");

  if (window.innerWidth < 600) {
    canvas.width = 630;
  } else if (window.innerWidth < 760) {
    canvas.width = 720;
  } else {
    canvas.width = 1000;
  }
}

/**
 * Initializes the game world and canvas.
 * This function is called to set up the initial state of the game.
 * It retrieves the canvas element from the DOM and creates a new World instance,
 * passing the canvas and keyboard objects as parameters.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * Initializes the game world, starts the first level, and hides the start screen.
 * This function is called to begin the game after the user has clicked the start button.
 * It calls the `initLevel1()` function to set up the initial game state, the `init()` function
 * to initialize the canvas and game world, and the `checkSound()` function to ensure sound
 * is enabled. Finally, it hides the start screen element.
 */
function startGame() {
  initLevel1();
  init();
  checkSound();
  let startScreen = document.getElementById("start_game");
  startScreen.classList.add("d-none");
}

/**
 * Toggles the visibility of the instructions sheet element on the page.
 * If the instructions sheet is currently hidden, it will be shown with a fade-in animation.
 * If the instructions sheet is currently visible, it will be hidden with a fade-out animation.
 */
function toggleInstructions() {
  let instructions = document.getElementById("instructions_sheet");
  if (instructions.classList.contains("d-none")) {
    instructions.classList.remove("d-none");
    instructions.classList.remove("fade-out");
    instructions.classList.add("fade-in");
  } else {
    instructions.classList.remove("fade-in");
    instructions.classList.add("fade-out");
    setTimeout(() => {
      instructions.classList.add("d-none");
    }, 500);
  }
}

/**
 * Toggles the fullscreen mode of the canvas element.
 * This function adds event listeners to the document to detect when the fullscreen mode is exited,
 * and updates the state of the fullscreen toggle button accordingly. It also handles the logic
 * to request and exit fullscreen mode for the canvas element.
 */
function toggleFullscreen() {
  const canvas = document.getElementById("canvas");
  const fullscreenToggle = document.getElementById("fullscreenToggle");

  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  function exitHandler() {
    if (!document.fullscreenElement) {
      fullscreenToggle.checked = false;
    }
  }

  fullscreenToggle.addEventListener("change", function () {
    if (fullscreenToggle.checked) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.mozRequestFullScreen) {
        /* Firefox */
        canvas.mozRequestFullScreen();
      } else if (canvas.webkitRequestFullscreen) {
        /* Chrome, Safari und Opera */
        canvas.webkitRequestFullscreen();
      } else if (canvas.msRequestFullscreen) {
        /* IE/Edge */
        canvas.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari und Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  });
}
