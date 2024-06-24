/**
 * Represents a purple jellyfish enemy in the game.
 *
 * @class enemyJellyfishLila
 * @extends movableObject
 */
class enemyJellyfishLila extends movableObject {
  /**
   * Height of the purple jellyfish enemy.
   * @type {number}
   * @default 100
   */
  height = 100;

  /**
   * Width of the purple jellyfish enemy.
   * @type {number}
   * @default 90
   */
  width = 90;

  /**
   * Indicates if the purple jellyfish enemy can be hit.
   * @type {boolean}
   * @default true
   */
  isHittable = true;

  /**
   * Array of image paths for the movement animation of the purple jellyfish enemy.
   * @type {Array<string>}
   */
  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  /**
   * Array of image paths for the death animation of the purple jellyfish enemy.
   * @type {Array<string>}
   */
  images_die = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  /**
   * Type of damage inflicted by the purple jellyfish enemy.
   * @type {string}
   * @default "electric"
   */
  damageType = "electric";

  /**
   * Creates an instance of enemyJellyfishLila.
   * @constructor
   * @param {number} x - The initial x-coordinate of the purple jellyfish enemy.
   * @param {number} y - The initial y-coordinate of the purple jellyfish enemy.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.damageType = "electric";
    this.x = x;
    this.y = y;
    this.speed = 0.2 + Math.random() * 0.2;
    this.checkSwimDirectionJelly(120, 320);
    this.animate();
  }

  /**
   * Initiates the animation loop for the purple jellyfish enemy.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
      if (this.enemyDying) {
        this.playAnimation(this.images_die);
        this.swimOutUpRight();
      }
    }, 150);
  }
}
