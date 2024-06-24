/**
 * Represents a purple fish enemy in the game.
 *
 * @class enemyLilaFish
 * @extends movableObject
 */
class enemyLilaFish extends movableObject {
  /**
   * Height of the purple fish enemy.
   * @type {number}
   * @default 50
   */
  height = 50;

  /**
   * Width of the purple fish enemy.
   * @type {number}
   * @default 50
   */
  width = 50;

  /**
   * Speed of movement for the purple fish enemy.
   * @type {number}
   * @default 1.6
   */
  speed = 1.6;

  /**
   * Array of image paths for the movement animation of the purple fish enemy.
   * @type {Array<string>}
   */
  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  /**
   * Array of image paths for the death animation of the purple fish enemy.
   * @type {Array<string>}
   */
  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
  ];

  /**
   * Type of damage inflicted by the purple fish enemy.
   * @type {string}
   * @default "poison"
   */
  damageType = "poison";

  /**
   * Creates an instance of enemyLilaFish.
   * @constructor
   * @param {number} x - The initial x-coordinate of the purple fish enemy.
   * @param {number} y - The initial y-coordinate of the purple fish enemy.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.x = x;
    this.y = y;
    this.checkSwimDirectionFish(x);
    this.animate();
  }

  /**
   * Initiates the animation loop for the purple fish enemy.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
      if (this.enemyDying) {
        this.playAnimation(this.images_die);
        this.swimOutDownRight();
      }
    }, 1000 / 60);
  }
}
