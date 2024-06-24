/**
 * Represents a bubble object that moves across the screen, changing direction and increasing in speed over time.
 *
 * @class Bubbles
 * @extends movableObject
 * @property {number} height - The height of the bubble.
 * @property {number} width - The width of the bubble.
 * @property {number} offsetX - The horizontal offset of the bubble.
 * @property {number} offsetY - The vertical offset of the bubble.
 * @property {number} speed - The initial speed of the bubble.
 * @property {string[]} image_bubble - The image paths for the bubble animation.
 * @param {number} x - The initial x-coordinate of the bubble.
 * @param {number} y - The initial y-coordinate of the bubble.
 * @param {string} direction - The initial direction of the bubble, either "swimRight" or something else.
 */
class Bubbles extends movableObject {
  height = 50;
  width = 50;
  offsetX = 30;
  offsetY = 5;
  speed = 1;
  image_bubble = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];

  /**
   * Constructs a new Bubbles object with the given starting position and direction.
   *
   * @param {number} x - The initial x-coordinate of the bubble.
   * @param {number} y - The initial y-coordinate of the bubble.
   * @param {string} direction - The initial direction of the bubble, either "swimRight" or something else.
   */
  constructor(x, y, direction) {
    super();
    this.loadImages(this.image_bubble);
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.animate();
  }

  /**
   * Animates the bubble object by updating its position and speed based on the direction.
   * The bubble will move across the screen, changing direction and increasing in speed over time.
   */
  animate() {
    setInterval(() => {
      if (this.isRightDirection()) {
        this.playAnimation(this.image_bubble);
        this.moveUpFastRight();
      } else {
        this.playAnimation(this.image_bubble);
        this.moveUpFastLeft();
      }
    }, 100);
  }

  /**
   * Checks if the bubble is moving in the "swimRight" direction.
   * @returns {boolean} - True if the bubble is moving in the "swimRight" direction, false otherwise.
   */
  isRightDirection() {
    return this.direction == "swimRight";
  }
}
