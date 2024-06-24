/**
 * Represents a poison bar object in the game, extending from DrawableObject.
 *
 * @class PoisonBar
 * @extends DrawableObject
 * @property {string[]} images_poison - The array of image paths for the poison bar object.
 */
class PoisonBar extends DrawableObject {
  images_poison = [
    "img/4. Marcadores/orange/100_ copia.png",
    "img/4. Marcadores/orange/80_ copia.png",
    "img/4. Marcadores/orange/60_ copia.png",
    "img/4. Marcadores/orange/40_ copia.png",
    "img/4. Marcadores/orange/20_ copia.png",
    "img/4. Marcadores/orange/0_ copia.png",
  ];

  /**
   * Constructs an instance of a poison bar object.
   */
  constructor() {
    super();
    this.loadImages(this.images_poison);
    this.x = 10;
    this.y = 125;
    this.width = 160;
    this.height = 80;
    this.setPoisonBar(0);
  }

  /**
   * Sets the poison bar to the specified percentage.
   *
   * @param {number} percent - The poison percentage to set, between 0 and 100.
   */
  setPoisonBar(percent) {
    this.percent = percent;
    let imagePath = this.images_poison[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }
}
