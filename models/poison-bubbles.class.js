/**
 * Represents poison bubbles in the game, extending from movableObject.
 *
 * @class PoisonBubbles
 * @extends movableObject
 * @property {number} height - The height of the poison bubble.
 * @property {number} width - The width of the poison bubble.
 * @property {number} offsetX - The horizontal offset of the poison bubble.
 * @property {number} offsetY - The vertical offset of the poison bubble.
 * @property {number} speed - The speed of the poison bubble.
 * @property {string[]} image_bubble - The array of image paths for the poison bubble object.
 */
class PoisonBubbles extends movableObject {
  height = 50;
  width = 50;
  offsetX = 30;
  offsetY = 5;
  speed = 1;
  image_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  /**
   * Constructs an instance of a poison bubble object.
   *
   * @param {number} x - The initial x-coordinate of the poison bubble.
   * @param {number} y - The initial y-coordinate of the poison bubble.
   * @param {string} direction - The direction of the poison bubble.
   */
  constructor(x, y, direction) {
    super();
    this.loadImages(this.image_bubble);
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.animate(x, y);
  }

  /**
   * Animates the poison bubble by updating its position and playing the animation.
   * The bubble's speed increases over time, and its direction is determined by the `direction` property.
   * If the direction is "swimRight", the bubble moves to the right and up. Otherwise, it moves to the left and up.
   * The animation is played using the `playAnimation` method, which cycles through the `image_bubble` array.
   */
  animate() {
    setInterval(() => {
      this.speed += 0.2;
      if (this.direction == "swimRight") {
        this.playAnimation(this.image_bubble);
        this.x += this.offsetX + this.speed;
        this.y -= this.offsetY * this.speed;
      } else {
        this.playAnimation(this.image_bubble);
        this.x -= this.offsetX + this.speed;
        this.y -= this.offsetY * this.speed;
      }
    }, 100);
  }
}
