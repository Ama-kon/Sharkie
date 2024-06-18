let canvas;
let world;
let keyboard = new Keyboard();
let character;

/**
 * Listens for keydown events on the window and updates the `keyboard` object
 * with the state of the corresponding keys.
 *
 * The `keyboard` object is expected to have properties for the following keys:
 * - `space`: boolean indicating if the space key is pressed
 * - `up`: boolean indicating if the up arrow key is pressed
 * - `down`: boolean indicating if the down arrow key is pressed
 * - `left`: boolean indicating if the left arrow key is pressed
 * - `right`: boolean indicating if the right arrow key is pressed
 * - `d`: boolean indicating if the 'd' key is pressed
 * - `a`: boolean indicating if the 'a' key is pressed
 *
 * This event listener is used to track the state of the keyboard for use in
 * game or other interactive applications.
 */
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

/**
 * Listens for keyup events on the window and updates the `keyboard` object
 * with the state of the corresponding keys.
 *
 * When a key is released, the corresponding property in the `keyboard` object
 * is set to `false`, except for the `space` key, which is set to `false` after
 * a 1-second delay.
 *
 * This event listener is used to track the state of the keyboard for use in
 * game or other interactive applications.
 */
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
