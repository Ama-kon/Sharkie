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
}
