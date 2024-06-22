/**
 * Represents the game world containing the main character, level, status bars, enemies, and interactions.
 *
 * @class World
 * @property {mainCharacter} character - The main character of the game.
 * @property {Level} level - The current level of the game.
 * @property {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
 * @property {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
 * @property {Keyboard} keyboard - The keyboard input handler for the game.
 * @property {number} camera_x - The x-coordinate of the camera view.
 * @property {StatusBar} status_bar - The status bar displaying the player's health.
 * @property {CoinsBar} coins_bar - The bar displaying the collected coins.
 * @property {PoisonBar} poison_bar - The bar displaying the poison level.
 * @property {Endboss} endboss - The end boss character in the game.
 * @property {StatusBarEndboss} status_bar_endboss - The status bar displaying the end boss's health.
 * @property {Array<Bubble>} bubbles - Array containing bubble objects in the game world.
 * @property {Array<PoisonBubbles>} poisonBubbles - Array containing poison bubble objects in the game world.
 */
class World {
  character = new mainCharacter();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  status_bar = new StatusBar();
  coins_bar = new CoinsBar();
  poison_bar = new PoisonBar();
  endboss = new Endboss(this.character);
  status_bar_endboss = new StatusBarEndboss(this.endboss, this.character);
  bubbles = [];
  poisonBubbles = [];

  /**
   * Constructs an instance of the game world.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element where the game is rendered.
   * @param {Keyboard} keyboard - The keyboard input handler for the game.
   */
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");

    this.drawAll();
    this.setWorld();
    this.checkForCollision();
    this.checkForCoins();
    this.checkForPoison();
    this.drawBubble();
    this.eraseBubbles();
    this.drawPoisonBubble();
    this.erasePoisonBubbles();
    this.bubbleCheckForJelly();
    this.poisonCheckForEndboss();
    this.correctCoins();
    this.correctPoison();
    this.checkDeadByEndboss();
  }

  /**
   * Sets the world reference for the character.
   * This allows the character to access and interact with the game world.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Draws all the objects in the game world, including the background, coins, poison, enemies, character, endboss, bubbles, and status bars. It also handles the camera movement and triggers the next frame to be drawn.
   */
  drawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjects(this.level.background);
    this.addObjects(this.level.coins);
    this.addObjects(this.level.poison_ground);
    this.addObjects(this.level.poison_up);
    this.addObjects(this.level.enemies);
    this.addToCanvas(this.status_bar_endboss);
    this.addToCanvas(this.character);
    this.addToCanvas(this.endboss);
    this.addObjects(this.bubbles);
    this.addObjects(this.poisonBubbles);
    this.ctx.translate(-this.camera_x, 0);
    /// everything under here follows camera on screen //
    this.addToCanvas(this.status_bar);
    this.addToCanvas(this.coins_bar);
    this.addToCanvas(this.poison_bar);

    this.ctx.translate(this.camera_x, 0);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.drawAll();
    });
  }

  /**
   * Adds an array of objects to the canvas.
   * @param {object[]} objects - An array of objects to be added to the canvas.
   */
  addObjects(objects) {
    objects.forEach((o) => this.addToCanvas(o));
  }

  /**
   * Adds an object to the canvas, handling any necessary image flipping and drawing the object's rectangle.
   * @param {object} object - The object to be added to the canvas.
   */
  addToCanvas(object) {
    if (object.otherDirection) {
      object.flipImage(this.ctx);
    }
    object.draw(this.ctx);

    if (object.otherDirection) {
      object.flipImageBack(this.ctx);
    }
  }

  /**
   * Checks for collisions between the character and enemies in the game level.
   * If the character collides with an enemy, the character will either attack the enemy or get hit, depending on whether the space key is pressed.
   * If the character attacks an enemy, the appropriate sound effect will play.
   * The character's energy level is updated based on whether they were hit by an enemy.
   */
  checkForCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          if (this.keyboard.space == true) {
            this.character.lastAttack();
            if (
              enemy instanceof enemyGreenFish ||
              enemy instanceof enemyRedFish ||
              enemy instanceof enemyLilaFish
            ) {
              if (!isMuted) {
                striked_fish.play();
              }

              this.character.strikedEnemy = enemy;
              enemy.enemyDying = true;
            }
          } else {
            this.character.hit();
            this.status_bar.setPercent(this.character.energy);
            this.character.isHittedBy = enemy.damageType;
          }
        }
      });
    }, 1000);
  }

  /**
   * Checks for collisions between the character and coins in the game level.
   * If the character collides with a coin, the character will collect the coin, the coin will be removed from the level, and a sound effect will play.
   * The character's coin count is updated based on the coins collected.
   */
  checkForCoins() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.character.gotCoin();

          if (this.character.coins <= 100) {
            this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            this.ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
            if (!isMuted) {
              got_coin_music.play();
            }
          }
          this.coins_bar.setCoinsBar(this.character.coins);
        }
      });
    }, 1000 / 60);
  }

  /**
   * Ensures the character's coin count does not exceed 100.
   * This method is called repeatedly at 60 frames per second to keep the character's coin count within the valid range.
   */
  correctCoins() {
    setInterval(() => {
      if (this.character.coins > 100) {
        this.character.coins = 100;
      }
    }, 1000 / 60);
  }

  /**
   * Checks for collisions between the character and poison objects in the game level.
   * If the character collides with a poison object, the character will be poisoned, the poison object will be removed from the level, and a sound effect will play.
   * The character's poison level is updated based on the poison collected.
   */
  checkForPoison() {
    setInterval(() => {
      const checkPoison = (array) => {
        array.forEach((poison) => {
          if (this.character.isColliding(poison)) {
            this.character.gotPoison();
            if (this.character.poison <= 100) {
              array.splice(array.indexOf(poison), 1);
              this.ctx.clearRect(
                poison.x,
                poison.y,
                poison.width,
                poison.height
              );
              if (!isMuted) {
                got_poison_music.play();
              }
            }
            this.poison_bar.setPoisonBar(this.character.poison);
          }
        });
      };
      checkPoison(this.level.poison_ground);
      checkPoison(this.level.poison_up);
    }, 1000 / 60);
  }

  /**
   * Ensures the character's poison count does not exceed 100.
   * This method is called repeatedly at 60 frames per second to keep the character's poison count within the valid range.
   */
  correctPoison() {
    setInterval(() => {
      if (this.character.poison > 100) {
        this.character.poison = 100;
      }
    }, 1000 / 60);
  }

  /**
   * Draws a bubble animation for the character in the game.
   * The bubble is created and added to the `bubbles` array when the character's `newBubble` flag is set to true.
   * The bubble is positioned relative to the character's current position and direction.
   * The character's coin count is decremented when a new bubble is created.
   * The coins bar is updated to reflect the new coin count.
   */
  drawBubble() {
    setInterval(() => {
      if (this.character.newBubble && this.character.coins > 0) {
        this.character.lostCoin();

        this.character.newBubble = false;
        if (!this.character.otherDirection) {
          this.bubbles.push(
            new Bubbles(
              this.character.x + 150,
              this.character.y + 210,
              "swimRight"
            )
          );
        } else {
          this.bubbles.push(
            new Bubbles(this.character.x, this.character.y + 210, "swimLeft")
          );
        }

        this.coins_bar.setCoinsBar(this.character.coins);
      }
    }, 500);
  }

  /**
   * Removes any bubbles that have moved off-screen from the `bubbles` array.
   * This method is called repeatedly at 60 frames per second to keep the bubble array up-to-date.
   */
  eraseBubbles() {
    setInterval(() => {
      this.bubbles.forEach((bubble) => {
        if (bubble.x <= -100 || bubble.y <= -100) {
          this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
        }
      });
    }, 1000 / 60);
  }

  /**
   * Draws a poison bubble animation for the character in the game.
   * The poison bubble is created and added to the `poisonBubbles` array when the character's `newPoisonBubble` flag is set to true.
   * The poison bubble is positioned relative to the character's current position and direction.
   * The character's poison count is decremented when a new poison bubble is created.
   * The poison bar is updated to reflect the new poison count.
   */
  drawPoisonBubble() {
    setInterval(() => {
      if (this.character.newPoisonBubble && this.character.poison > 0) {
        this.character.lostPoison();

        this.character.newPoisonBubble = false;
        if (!this.character.otherDirection) {
          this.poisonBubbles.push(
            new PoisonBubbles(
              this.character.x + 150,
              this.character.y + 210,
              "swimRight"
            )
          );
        } else {
          this.poisonBubbles.push(
            new PoisonBubbles(
              this.character.x,
              this.character.y + 210,
              "swimLeft"
            )
          );
        }
        this.poison_bar.setPoisonBar(this.character.poison);
      }
    }, 300);
  }

  /**
   * Removes poison bubbles from the game world that have moved off-screen.
   * This method is called repeatedly at 60 frames per second to keep the poison bubble array up-to-date.
   */
  erasePoisonBubbles() {
    setInterval(() => {
      this.poisonBubbles.forEach((bubble) => {
        if (bubble.x <= -100 || bubble.y <= -100) {
          this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
        }
      });
    }, 1000 / 60);
  }

  /**
   * Checks for collisions between the bubbles and the jellies in the game world. If a bubble collides with a jelly and the jelly is hittable, the bubble is removed from the `bubbles` array and the jelly is marked as dying.
   * This method is called repeatedly at 60 frames per second to keep the bubble and enemy collision detection up-to-date.
   */
  bubbleCheckForJelly() {
    setInterval(() => {
      this.bubbles.forEach((bubble) => {
        this.level.enemies.forEach((enemy) => {
          if (bubble.hitsJelly(enemy) && enemy.isHittable) {
            if (!isMuted) {
              striked_jelly.play();
            }
            this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
            enemy.enemyDying = true;
          }
        });
      });
    }, 1000 / 60);
  }

  /**
   * Checks for collisions between the poison bubbles and the endboss in the game world. If a bubble collides with the endboss, the endboss is hit and the bubble is removed from the `poisonBubbles` array.
   * This method is called repeatedly at 60 frames per second to keep the poison bubble and endboss collision detection up-to-date.
   */
  poisonCheckForEndboss() {
    setInterval(() => {
      this.poisonBubbles.forEach((bubble) => {
        if (bubble.isCollidingEndboss(this.endboss)) {
          this.endboss.hitEndboss();
          this.status_bar_endboss.setPercent(this.endboss.energy);
          this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
        }
      }),
        1000 / 60;
    });
  }

  /**
   * Checks if the character has been killed by the endboss and resets the character's position and status bar if so.
   * This method is called repeatedly at 60 frames per second to keep the character's state up-to-date.
   */
  checkDeadByEndboss() {
    setInterval(() => {
      if (this.character.killedByEndboss) {
        this.character.x = -200;
        this.character.y = -200;
        this.status_bar.setPercent(0);
        setTimeout(() => {
          this.character.killedByEndboss = false;
        }, 1000);
      }
    }, 1000 / 60);
  }
}
