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
   * Plays the next frame of an animation by updating the current image being displayed.
   * @param {Array<string>} image - An array of file paths for the images in the animation.
   */
  playAnimation(image) {
    let i = this.currentIMG % image.length;
    let path = image[i];
    this.img = this.imageCache[path];
    this.currentIMG++;
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

  /**
   * Sets the percentage value of the status bar and updates the displayed image accordingly.
   *
   * @param {number} percent - The new percentage value to set.
   */
  setPercent(percent) {
    this.percent = percent;
    let imagePath = this.images_lifes[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }

  /**
   * Determines the index of the appropriate status image to display based on the current percentage value.
   *
   * @returns {number} The index of the status image to display.
   */
  findIndexOfStatusImg() {
    if (this.percent >= 100) {
      return 0;
    } else if (this.percent >= 80) {
      return 1;
    } else if (this.percent >= 60) {
      return 2;
    } else if (this.percent >= 40) {
      return 3;
    } else if (this.percent >= 20) {
      return 4;
    } else {
      return 5;
    }
  }
}
