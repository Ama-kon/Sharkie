/**
 * Represents a green fish enemy in the game.
 *
 * @class enemyGreenFish
 * @extends movableObject
 */
class enemyGreenFish extends movableObject {
  /**
   * Height of the green fish enemy.
   * @type {number}
   * @default 80
   */
  height = 80;

  /**
   * Width of the green fish enemy.
   * @type {number}
   * @default 80
   */
  width = 80;

  /**
   * Movement speed of the green fish enemy.
   * @type {number}
   * @default 0.75
   */
  speed = 0.75;

  /**
   * Array of image paths for the swimming animation of the green fish enemy.
   * @type {Array<string>}
   */
  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  /**
   * Array of image paths for the dying animation of the green fish enemy.
   * @type {Array<string>}
   */
  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png",
  ];

  /**
   * Type of damage inflicted by the green fish enemy.
   * @type {string}
   * @default "poison"
   */
  damageType = "poison";

  /**
   * Creates an instance of enemyGreenFish.
   * @constructor
   * @param {number} x - The initial x-coordinate of the green fish enemy.
   * @param {number} y - The initial y-coordinate of the green fish enemy.
   */
  constructor(x, y) {
    super();
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.x = x;
    this.y = y;
    this.checkSwimDirectionFish(this.x);
    this.animate();
  }

  /**
   * Initiates the animation loop for the green fish enemy.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
      if (this.enemyDying) {
        this.playAnimation(this.images_die);
        this.x -= 5;
        this.y -= 5;
      }
    }, 1000 / 60);
  }
}
