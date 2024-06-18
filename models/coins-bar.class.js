/**
 * Represents the coins bar that displays the current number of coins collected by the player.
 *
 * @class CoinsBar
 * @extends movableObject
 * @property {string[]} images_coins - An array of image paths for the different coin bar states.
 */
class CoinsBar extends movableObject {
  images_coins = [
    "img/4. Marcadores/orange/100_ copia 2.png",
    "img/4. Marcadores/orange/80_  copia 2.png",
    "img/4. Marcadores/orange/60_  copia 2.png",
    "img/4. Marcadores/orange/40_  copia 2.png",
    "img/4. Marcadores/orange/20_  copia.png",
    "img/4. Marcadores/orange/0_  copia 2.png",
  ];

  /**
   * Initializes the CoinsBar object, loading the necessary images and setting the initial position and size.
   */
  constructor() {
    super();
    this.loadImages(this.images_coins);
    this.x = 10;
    this.y = 60;
    this.width = 160;
    this.height = 80;
    this.setCoinsBar(0);
  }

  /**
   * Sets the coins bar display based on the provided percentage.
   *
   * @param {number} percent - The percentage to display on the coins bar.
   */
  setCoinsBar(percent) {
    this.percent = percent;
    let imagePath = this.images_coins[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }

  /**
   * Determines the index of the appropriate image to display in the coins bar based on the current percentage.
   *
   * @returns {number} The index of the image to display.
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
