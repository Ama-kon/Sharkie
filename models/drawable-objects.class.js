/**
 * Represents an object that can be drawn on a canvas.
 *
 * @class DrawableObject
 */
class DrawableObject {
  /**
   * The Image object representing the drawable object.
   * @type {Image}
   */
  img;

  /**
   * An object that caches Image objects with their file paths as keys.
   * @type {Object}
   */
  imageCache = {};

  /**
   * The current index of the image being displayed for animation purposes.
   * @type {number}
   */
  currentIMG = 0;

  /**
   * The height of the drawable object.
   * @type {number}
   */
  height = 150;

  /**
   * The width of the drawable object.
   * @type {number}
   */
  width = 100;

  /**
   * The canvas element on which the drawable object will be drawn.
   * @type {HTMLCanvasElement}
   */
  canvas = document.getElementById("canvas");

  /**
   * Creates a new instance of the DrawableObject class.
   */
  constructor() {}

  /**
   * Loads an image from the specified path and assigns it to the 'img' property.
   * @param {string} path - The file path of the image to be loaded.
   */
  loadIMG(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads an array of image paths and caches the corresponding Image objects.
   * @param {string[]} array - An array of image file paths to load.
   */
  loadImages(array) {
    array.forEach((path) => {
      this.img = new Image();
      this.img.src = path;
      this.imageCache[path] = this.img;
    });
  }

  /**
   * Draws the image of the drawable object on the canvas at the specified position and size.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to use for drawing the image.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Flips the image horizontally, translating it to the right side of the canvas.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to use for the image flip.
   */
  flipImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  /**
   * Flips the image back to its original orientation after a previous flip.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to use for the image flip.
   */
  flipImageBack(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }
}
