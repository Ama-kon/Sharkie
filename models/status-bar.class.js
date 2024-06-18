/**
 * Represents a status bar in the game, extending from DrawableObject.
 *
 * @class StatusBar
 * @extends DrawableObject
 * @property {number} percent - The current percentage value displayed on the status bar.
 * @property {string[]} images_lifes - Array of image paths representing different states of the status bar.
 */
class StatusBar extends DrawableObject {
  percent = 100;
  images_lifes = [
    "img/4. Marcadores/orange/100_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/0_  copia.png",
  ];

  /**
   * Constructs an instance of a status bar.
   */
  constructor() {
    super();
    this.loadImages(this.images_lifes);
    this.x = 10;
    this.y = 0;
    this.width = 160;
    this.height = 80;
    this.setPercent(100);
  }

  /**
   * Sets the percentage value of the status bar and updates the displayed image accordingly.
   * @param {number} percent - The new percentage value to set for the status bar.
   */
  setPercent(percent) {
    this.percent = percent;
    let imagePath = this.images_lifes[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }

  /**
   * Determines the index of the appropriate status image based on the current percentage value.
   * @returns {number} The index of the status image to display.
   */
  findIndexOfStatusImg() {
    if (this.percent == 100) {
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
