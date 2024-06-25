/**
 * Represents a red fish enemy in the game.
 *
 * @class enemyRedFish
 * @extends movableObject
 */
class enemyRedFish extends movableObject {
  /**
   * Height of the red fish enemy.
   * @type {number}
   * @default 75
   */
  height = 75;

  /**
   * Width of the red fish enemy.
   * @type {number}
   * @default 75
   */
  width = 75;

  /**
   * Speed of movement for the red fish enemy.
   * @type {number}
   * @default 1
   */
  speed = 1;

  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
  ];

  /**
   * Type of damage inflicted by the red fish enemy.
   * @type {string}
   * @default "poison"
   */
  damageType = "poison";

  /**
   * Creates an instance of enemyRedFish.
   * @constructor
   * @param {number} x - The initial x-coordinate of the red fish enemy.
   * @param {number} y - The initial y-coordinate of the red fish enemy.
   */
  constructor(x, y) {
    super();
    this.loadIMG(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );
    this.damageType = "poison";
    this.x = x;
    this.y = y;
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.checkSwimDirectionFish(x);
    this.animate();
  }

  /**
   * Initiates the animation loop for the red fish enemy.
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
