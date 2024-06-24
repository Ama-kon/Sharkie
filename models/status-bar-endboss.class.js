/**
 * Represents the status bar for the end boss in the game, extending from DrawableObject.
 *
 * @class StatusBarEndboss
 * @extends DrawableObject
 * @property {boolean} otherDirection - Flag indicating if the status bar should face the opposite direction.
 * @property {object} endboss - Reference to the end boss object associated with this status bar.
 * @property {object} character - Reference to the main character object associated with this status bar.
 * @property {number} x - The x-coordinate position of the status bar.
 * @property {number} percent - The current percentage value of the status bar.
 * @property {string[]} images_lifes - Array of image paths representing different states of the status bar.
 */
class StatusBarEndboss extends DrawableObject {
  otherDirection = true;
  endboss;
  character;
  x;
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
   * Constructs an instance of a status bar for the end boss.
   *
   * @param {object} endboss - The end boss object associated with this status bar.
   * @param {object} character - The main character object associated with this status bar.
   */
  constructor(endboss, character) {
    super();
    this.endboss = endboss;
    this.character = character;
    this.loadImages(this.images_lifes);
    this.y = 0;
    this.width = 160;
    this.height = 80;
    this.setPercent(100);
    this.checkForX();
  }

  /**
   * Checks the position of the endboss and updates the x-coordinate of the status bar accordingly.
   * The status bar is positioned relative to the character's position, but it is capped at a maximum x-coordinate of 4000.
   * The status bar's x-coordinate is updated every 25 milliseconds (40 times per second).
   */
  checkForX() {
    setInterval(() => {
      if (this.endboss.x <= 3800) {
        this.x = this.character.x + canvas.width - this.width * 1.5;
        if (canvas.width >= 1000) {
          if (this.x > 4250) {
            this.x = 4250;
          }
        }
        if (canvas.width <= 720) {
          if (this.x > 4000) {
            this.x = 4000;
          }
        }
      }
    }, 1000 / 40);
  }
}
