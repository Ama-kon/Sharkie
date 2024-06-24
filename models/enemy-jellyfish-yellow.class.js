/**
 * Represents a yellow jellyfish enemy in the game.
 *
 * @class enemyJellyfishYellow
 * @extends movableObject
 */
class enemyJellyfishYellow extends movableObject {
  /**
   * Height of the yellow jellyfish enemy.
   * @type {number}
   * @default 100
   */
  height = 100;

  /**
   * Width of the yellow jellyfish enemy.
   * @type {number}
   * @default 90
   */
  width = 90;

  /**
   * Speed of movement for the yellow jellyfish enemy.
   * @type {number}
   * @default 5
   */
  speed = 5;

  /**
   * Indicates if the yellow jellyfish enemy can be hit.
   * @type {boolean}
   * @default true
   */
  isHittable = true;

  /**
   * Array of image paths for the movement animation of the yellow jellyfish enemy.
   * @type {Array<string>}
   */
  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  /**
   * Array of image paths for the death animation of the yellow jellyfish enemy.
   * @type {Array<string>}
   */
  images_die = [
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  /**
   * Type of damage inflicted by the yellow jellyfish enemy.
   * @type {string}
   * @default "electric"
   */
  damageType = "electric";

  /**
   * Creates an instance of enemyJellyfishYellow.
   * @constructor
   * @param {number} x - The initial x-coordinate of the yellow jellyfish enemy.
   * @param {number} y - The initial y-coordinate of the yellow jellyfish enemy.
   */
  constructor(x, y) {
    super();
    this.loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.damageType = "electric";
    this.x = x;
    this.y = y;
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.speed = 0.3 + Math.random() * 0.5;
    this.checkSwimDirectionJelly(this.y);
    this.animate();
  }

  /**
   * Initiates the animation loop for the yellow jellyfish enemy.
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
