/**
 * Represents a coin object that can be collected by the player.
 *
 * @class Coins
 * @extends movableObject
 * @property {number} width - The width of the coin.
 * @property {number} height - The height of the coin.
 * @property {string[]} images_coins - An array of image paths for the coin animation.
 */
class Coins extends movableObject {
  width = 35;
  height = 35;

  images_coins = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];

  /**
   * Constructs a new Coins object with the given x and y coordinates.
   *
   * @param {number} x - The x-coordinate of the coin.
   * @param {number} y - The y-coordinate of the coin.
   * @constructor
   */
  constructor(x, y) {
    super();
    this.loadImages(this.images_coins);
    this.animate();
    this.x = x;
    this.y = y;
  }

  /**
   * Animates the coin by playing the coin animation images at a rate of 150 milliseconds per frame.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coins);
    }, 150);
  }
}
