/**
 * Represents an end boss character in the game.
 *
 * @class Endboss
 * @extends movableObject
 */
class Endboss extends movableObject {
  /**
   * Height of the end boss.
   * @type {number}
   * @default 430
   */
  height = 430;

  /**
   * Width of the end boss.
   * @type {number}
   * @default 400
   */
  width = 400;

  /**
   * Initial y-coordinate of the end boss (outside of canvas).
   * @type {number}
   * @default -300
   */
  y = -300;

  /**
   * Initial x-coordinate of the end boss (outside of canvas).
   * @type {number}
   * @default 5000
   */
  x = 5000;

  /**
   * Index variable.
   * @type {number}
   */
  i;

  /**
   * Reference to the main character object.
   * @type {movableObject} - The character object controlled by the player.
   */
  character;

  /**
   * Flag indicating whether the end boss has been defeated.
   * @type {boolean}
   * @default false
   */
  sawEndboss = false;

  /**
   * Placeholder for the entity that hit the end boss.
   * @type {any}
   */
  isHittedBy;

  /**
   * Speed of movement for the end boss.
   * @type {number}
   * @default 2.5
   */
  speed = 2.5;

  /**
   * Array of image paths for the introduction animation of the end boss.
   * @type {Array<string>}
   */
  images_intro = [
    "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  /**
   * Array of image paths for the moving animation of the end boss.
   * @type {Array<string>}
   */
  images_move = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  /**
   * Array of image paths for the attack animation of the end boss.
   * @type {Array<string>}
   */
  images_attack = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  /**
   * Array of image paths for the hurt animation of the end boss.
   * @type {Array<string>}
   */
  images_hurt = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  /**
   * Array of image paths for the dead animation of the end boss.
   * @type {Array<string>}
   */
  images_dead = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
  ];

  /**
   * Creates an instance of Endboss.
   * @constructor
   * @param {movableObject} character - The main character object.
   */
  constructor(character) {
    super();
    this.loadIMG("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.character = character;
    this.loadImages(this.images_move);
    this.loadImages(this.images_intro);
    this.loadImages(this.images_attack);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_dead);
    this.animate();
  }

  /**
   * Handles the animation and behavior of the end boss in the game.
   * This method is responsible for:
   * - Playing the end boss introduction animation when the player reaches a certain position
   * - Checking if the end boss is dead and playing the death animation
   * - Checking if the player is within attack range and initiating the attack animation
   * - Controlling the end boss's movement and hunting behavior towards the player
   * - Playing sound effects for the end boss's actions
   */
  animate() {
    this.i = 0;
    setInterval(() => {
      if (this.character.x >= 3100 && !isMuted && this.character.energy > 0) {
        endboss_sound.play();
        background_music.pause();
      }
      if (this.character.x >= 3400) {
        if (!this.sawEndboss) {
          this.sawEndboss = true;
          this.x = 3800;
          this.y = 0;
        }
        if (this.i < this.images_intro.length) {
          this.playAnimation(this.images_intro);
          this.i++;
        } else {
          this.sharkieIsNear = true;
        }
      }
      if (this.isDead()) {
        if (!isMuted) {
          endboss_sound.pause();
          you_win.play();
        } else {
          endboss_sound.pause();
          you_win.pause();
        }
        this.playAnimation(this.images_dead);
        setTimeout(() => {
          endScreen("you_win");

          playWinningSpeech();
        }, 1000);
      } else if (this.sharkieIsNear && !this.isDead()) {
        this.playAnimation(this.images_move);
      }
      if (this.attack && this.character.energy > 0) {
        this.playAnimation(this.images_attack);
        setTimeout(() => {
          this.character.killedByEndboss = true;
          this.character.energy = 0;
        }, 100);
      }
    }, 170);

    setInterval(() => {
      if (
        this.sawEndboss &&
        !isMuted &&
        this.character.energy > 0 &&
        this.energy > 0
      ) {
        endboss_sound.play();
        background_music.pause();
      } else if (this.sawEndboss && isMuted && this.character.energy > 0) {
        background_music.pause();
        endboss_sound.pause();
      }
      if (this.sharkieIsNear) {
        this.huntSharkie();
      }
      if (this.endbossIsHurt()) {
        if (!isMuted) {
          endboss_hurt_sound.play();
        }
        this.playAnimation(this.images_hurt);
      }
    }, 1000 / 60);
  }

  /**
   * Handles the logic for the endboss character to hunt the player character.
   *
   * This method is responsible for the following:
   * - Calculating the distance and direction between the endboss and the player character
   * - Adjusting the endboss's speed and position to move towards the player character
   * - Checking if the endboss is within attack range and initiating an attack if so
   *
   * @returns {void}
   */

  huntSharkie() {
    if (this.energy > 0 && !this.attack) {
      let distanceX = this.character.x - this.x;
      let distanceY = this.character.y - this.y;
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      this.speed = this.setEndbossSpeed(distance);
      if (distance > 1) {
        let normDeltaX = distanceX / distance;
        let normDeltaY = distanceY / distance;
        this.x += normDeltaX * this.speed;
        this.y += normDeltaY * this.speed;
      }
      if (!this.attack) {
        this.checkDirectionEndboss(this.character);
      }
      this.checkDistanceAndAttack(distance, distanceY);
    }
  }

  /**
   * Checks the distance between the endboss and the player character, and initiates an attack if the conditions are met.
   *
   * This method is responsible for the following:
   * - Checking if the distance between the endboss and the player character is less than 127 pixels, and the player character is within a certain vertical range
   * - Checking if the distance between the endboss and the player character is less than 315 pixels, the endboss is facing the other direction, and the player character is within a certain vertical range
   * - Setting the `attack` property to `true` and adjusting the endboss's x-position accordingly if the attack conditions are met
   *
   * @param {number} distance - The distance between the endboss and the player character
   * @param {number} distanceY - The vertical distance between the endboss and the player character
   * @returns {void}
   */
  checkDistanceAndAttack(distance, distanceY) {
    if (
      distance < 127 &&
      !this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x -= 50;
    } else if (
      distance < 315 &&
      this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x += 50;
    }
  }

  /**
   * Checks the distance between the endboss and the player character, and initiates an attack if the conditions are met.
   *
   * This method is responsible for the following:
   * - Checking if the distance between the endboss and the player character is less than 127 pixels, and the player character is within a certain vertical range
   * - Checking if the distance between the endboss and the player character is less than 315 pixels, the endboss is facing the other direction, and the player character is within a certain vertical range
   * - Setting the `attack` property to `true` and adjusting the endboss's x-position accordingly if the attack conditions are met
   *
   * @param {number} distance - The distance between the endboss and the player character
   * @param {number} distanceY - The vertical distance between the endboss and the player character
   * @returns {void}
   */
  checkDistanceAndAttack(distance, distanceY) {
    if (
      distance < 127 &&
      !this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x -= 50;
    } else if (
      distance < 315 &&
      this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x += 50;
    }
  }
}
