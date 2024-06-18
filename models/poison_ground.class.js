/**
 * Represents a poison ground object in the game, extending from movableObject.
 *
 * @class PoisonGround
 * @extends movableObject
 * @property {string[]} images_poison_ground - The array of image paths for the poison ground.
 */
class PoisonGround extends movableObject {
  images_poison_ground = [
    "img/4. Marcadores/Posión/Dark - Left.png",
    "img/4. Marcadores/Posión/Dark - Right.png",
  ];

  /**
   * Constructs an instance of a poison ground object.
   *
   * @param {number} x - The initial x-coordinate of the poison ground.
   */
  constructor(x) {
    super(); // Call the constructor of the parent class (movableObject)
    this.loadImages(this.images_poison_ground);
    this.x = x;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.animate();
  }

  /**
   * Animates the poison ground object by playing a repeating animation of the poison ground images.
   * The animation is played at a rate of 800 milliseconds per frame.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_poison_ground);
    }, 800);
  }
}
