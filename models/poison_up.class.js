/**
 * Represents a poison up object in the game, extending from movableObject.
 *
 * @class PoisonUp
 * @extends movableObject
 * @property {string[]} images_poison_up - The array of image paths for the poison up object.
 */
class PoisonUp extends movableObject {
  images_poison_up = [
    "img/4. Marcadores/Posión/Animada/1.png",
    "img/4. Marcadores/Posión/Animada/2.png",
    "img/4. Marcadores/Posión/Animada/3.png",
    "img/4. Marcadores/Posión/Animada/4.png",
    "img/4. Marcadores/Posión/Animada/5.png",
    "img/4. Marcadores/Posión/Animada/6.png",
    "img/4. Marcadores/Posión/Animada/7.png",
    "img/4. Marcadores/Posión/Animada/8.png",
  ];

  /**
   * Constructs an instance of a poison up object.
   *
   * @param {number} x - The initial x-coordinate of the poison up object.
   * @param {number} y - The initial y-coordinate of the poison up object.
   */
  constructor(x, y) {
    super(); // Call the constructor of the parent class (movableObject)
    this.loadImages(this.images_poison_up);
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.animate();
  }

  /**
   * Animates the poison up object by playing an animation of images at a rate of 10 frames per second.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_poison_up);
    }, 100);
  }
}
