/**
 * Represents the main character in the game.
 *
 * @class mainCharacter
 * @extends movableObject
 * @property {number} height - The height of the main character.
 * @property {number} width - The width of the main character.
 * @property {number} x - The initial x-coordinate of the main character.
 * @property {number} y - The initial y-coordinate of the main character.
 * @property {object} world - The world instance the main character belongs to.
 * @property {number} speed - The speed at which the main character moves.
 * @property {string} isHittedBy - The type of attack the main character is hit by.
 * @property {string} strikedEnemy - The type of enemy the main character has struck.
 * @property {boolean} newBubble - Indicates if the main character has created a new bubble.
 * @property {boolean} newPoisonBubble - Indicates if the main character has created a new poison bubble.
 * @property {boolean} killed - Indicates if the main character is killed.
 * @property {boolean} killedByEndboss - Indicates if the main character is killed by the end boss.
 */
class mainCharacter extends movableObject {
  height = 350;
  width = 200;
  x = 3150;
  y = 80;
  world;
  speed = 4;
  isHittedBy = "";
  strikedEnemy = "";
  newBubble = false;
  newPoisonBubble = false;
  killed = false;
  killedByEndboss = false;

  /**
   * An array of image paths for the main character's idle animation frames.
   */
  images_move = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  /**
   * An array of image paths for the main character's sleeping animation frames.
   */
  images_sleeping = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  /**
   * An array of image paths for the main character's fin slap attack animation frames.
   */
  images_attack_fin_lap = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/1.Sharkie/4.Attack/Fin slap/2.png",
    "img/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  /**
   * An array of image paths for the main character's electric shock hurt animation frames.
   */
  images_hurt_electric = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  /**
   * An array of image paths for the main character's poisoned hurt animation frames.
   */

  images_hurt_poisoned = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];

  /**
   * An array of image paths for the main character's death animation frames.
   */
  images_dead = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  /**
   * An array of image paths for the main character's bubble attack animation frames.
   */
  images_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  /**
   * An array of image paths for the main character's poison bubble attack animation frames.
   */
  images_poison_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];

  /**
   * Initializes the main character in the game.
   * Loads all the necessary images for the character's animations, including idle, attack, bubble, death, and hurt states.
   * Starts the main animation loop for the character.
   */
  constructor() {
    super();
    this.loadIMG("img/1.Sharkie/1.IDLE/1.png");

    this.loadImages(this.images_move);
    this.loadImages(this.images_attack_fin_lap);
    this.loadImages(this.images_bubble);
    this.loadImages(this.images_dead);
    this.loadImages(this.images_hurt_electric);
    this.loadImages(this.images_hurt_poisoned);
    this.loadImages(this.images_poison_bubble);
    this.loadImages(this.images_sleeping);
    this.animate();
  }

  /**
   * Handles the animation and movement logic for the main character in the game.
   * This function is called repeatedly at a fixed interval to update the character's position and animation.
   * It responds to keyboard input to move the character left, right, up, and down, and also handles the character's attack and bubble abilities.
   * If the character is killed or hurt, the appropriate animation is played and the game state is updated accordingly.
   */
  animate() {
    setInterval(() => {
      // only keyboard //
      if (this.world.keyboard.right && this.x <= 3800) {
        this.x += this.speed;

        this.otherDirection = false;
      }
      if (this.world.keyboard.left && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.up && this.y > -130) {
        this.y -= this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.down && this.y < 150) {
        this.y += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.down) {
        this.x -= this.speed / 5;
        this.y += this.speed / 5;
        this.otherDirection = true;
      }
      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.down) {
        if (this.y >= 150) {
          this.x -= this.speed / 5;
          this.y -= this.speed / 5;
          this.otherDirection = true;
        } else {
          this.x -= this.speed / 5;
          this.otherDirection = true;
        }
      }

      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.up) {
        if (this.y >= 150) {
          this.x -= this.speed / 5;
          this.y -= this.speed / 5;
          this.otherDirection = true;
        } else {
          this.x -= this.speed / 5;
          this.otherDirection = true;
        }
      }

      if (this.x <= 3500 && this.x >= 0) {
        this.followCamera();
      }
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.images_move);

      if (this.world.keyboard.space) {
        this.playAnimation(this.images_attack_fin_lap);
      }

      if (this.world.keyboard.d) {
        this.playAnimation(this.images_bubble);
        this.newBubble = true;
      }

      if (this.world.keyboard.a) {
        this.playAnimation(this.images_poison_bubble);
        this.newPoisonBubble = true;
      }

      if (this.isDead()) {
        this.killed = true;
        if (!isMuted) {
          background_music.pause();
          endboss_sound.pause();
          game_over.play();
        }
        setTimeout(() => {
          endScreen("game_over");

          playLostGameSpeech();
          this.killed = false;
        }, 1000);
        this.playAnimation(this.images_dead);
      } else if (this.isHurt()) {
        if (this.isHittedBy == "electric") {
          if (!isMuted) {
            hit_by_jelly.play();
          }

          this.playAnimation(this.images_hurt_electric);
        } else if (this.isHittedBy == "poison") {
          if (!isMuted) {
            hit_by_fish.play();
          }

          this.playAnimation(this.images_hurt_poisoned);
        }

        if (this.strikesEnemy()) {
          this.strikedEnemy.enemyDying = true;
        }
      }
    }, 100);
  }

  /**
   * Follows the camera to the main character's position, setting the camera's x-coordinate to the character's x-coordinate minus 50.
   */
  followCamera() {
    this.world.camera_x = -this.x + 50;
  }
}
