/**
 * Represents a background object that can be moved on the screen.
 *
 * @class BackgroundObjects
 * @extends movableObject
 * @param {string} path - The file path to the image for the background object.
 * @param {number} x - The initial x-coordinate of the background object.
 * @param {number} y - The initial y-coordinate of the background object.
 */
class BackgroundObjects extends movableObject {
  height = 480;
  width = 720;
  constructor(path, x, y) {
    super().loadIMG(path);
    this.x = x;
    this.y = y;
  }
}
