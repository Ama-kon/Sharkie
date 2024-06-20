window.addEventListener("resize", resizeCanvas);
document.addEventListener("DOMContentLoaded", toggleFullscreen);

let startScreen = document.getElementById("start_game");
startScreen.addEventListener("click", () => {
  if (isTouchDevice) {
    showFullScreen();
  }
});

let leftArrow = document.getElementById("left_arrow");
let rightArrow = document.getElementById("right_arrow");
let upArrow = document.getElementById("up_arrow");
let downArrow = document.getElementById("down_arrow");
let spaceButton = document.getElementById("space_button");
let dButton = document.getElementById("d_button");
let aButton = document.getElementById("a_button");

let mobile_keyboard = [
  leftArrow,
  rightArrow,
  upArrow,
  downArrow,
  spaceButton,
  dButton,
  aButton,
];

/**
 * Resizes the canvas element based on the current window size and orientation.
 * If the window is less than 600 pixels wide, the canvas width is set to 630 pixels.
 * If the window is less than 760 pixels wide, the canvas width is set to 720 pixels.
 * Otherwise, the canvas width is set to 1000 pixels.
 * If the window is taller than it is wide, the "turn_device_container" element is shown.
 * Otherwise, the "turn_device_container" element is hidden.
 * If the device is a touch device, the "styleForTouchDevice" function is called to update the UI for touch devices.
 */
function resizeCanvas() {
  let canvas = document.getElementById("canvas");
  let turn_container = document.getElementById("turn_device_container");

  if (window.innerWidth < 600) {
    canvas.width = 630;
  } else if (window.innerWidth < 760) {
    canvas.width = 720;
  } else {
    canvas.width = 1000;
  }

  if (innerWidth < innerHeight) {
    turn_container.classList.remove("d-none");
  } else {
    turn_container.classList.add("d-none");
  }

  if (isTouchDevice()) {
    styleForTouchDevice();
  }
}

/**
 * Determines if the current device is a touch device.
 * @returns {boolean} True if the device supports touch events, false otherwise.
 */
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

/**
 * Updates the UI for touch devices by:
 * - Showing the mobile keyboard container
 * - Hiding the instructions, sound screen container, and desktop instructions button
 * - Making the canvas full screen
 * - Hiding the page title
 */
function styleForTouchDevice() {
  let instructions = document.getElementById("instructions");
  let instructions_btn = document.getElementById("desktop_instructions_btn");
  let soundScreen = document.querySelector(".sound_screen_container");
  let canvas = document.getElementById("canvas");
  let h1 = document.querySelector("h1");
  let container = document.getElementById("mobile_keyboard_container");

  container.classList.remove("d-none");
  instructions.classList.add("d-none");
  soundScreen.classList.add("d-none");
  canvas.classList.add("full_screen");
  h1.classList.add("d-none");
  instructions_btn.classList.add("d-none");
}

/**
 * Requests the browser to display the current document in full-screen mode.
 * This function attempts to enable full-screen mode using various browser-specific APIs.
 */
function showFullScreen() {
  let element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    /* Chrome, Safari und Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE/Edge */
    element.msRequestFullscreen();
  }
}

/**
 * Handles touch events for the game controls, updating the `keyboard` object with the
 * corresponding key states.
 *
 * The `touchstart` event sets the corresponding key in the `keyboard` object to `true`,
 * and the `touchend` event sets the key to `false`. For the `space` key, the `false`
 * state is delayed by 1 second to allow for longer presses.
 */
leftArrow.addEventListener("touchstart", () => (keyboard.left = true));
rightArrow.addEventListener("touchstart", () => (keyboard.right = true));
upArrow.addEventListener("touchstart", () => (keyboard.up = true));
downArrow.addEventListener("touchstart", () => (keyboard.down = true));
spaceButton.addEventListener("touchstart", () => (keyboard.space = true));
dButton.addEventListener("touchstart", () => (keyboard.d = true));
aButton.addEventListener("touchstart", () => (keyboard.a = true));

leftArrow.addEventListener("touchend", () => (keyboard.left = false));
rightArrow.addEventListener("touchend", () => (keyboard.right = false));
upArrow.addEventListener("touchend", () => (keyboard.up = false));
downArrow.addEventListener("touchend", () => (keyboard.down = false));
spaceButton.addEventListener("touchend", () => {
  setTimeout(() => {
    keyboard.space = false;
  }, 1000);
});
dButton.addEventListener("touchend", () => (keyboard.d = false));
aButton.addEventListener("touchend", () => (keyboard.a = false));

/**
 * Prevents the default and propagation behavior of click events on the mobile keyboard elements.
 * This ensures that the click events on the mobile keyboard do not interfere with the game's
 * touch event handling.
 */
mobile_keyboard.forEach((key) => {
  key.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });
});
