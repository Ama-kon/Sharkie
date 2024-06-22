/**
 * Represents a movable object in the game, extending from DrawableObject.
 *
 * @class movableObject
 * @extends DrawableObject
 * @property {number} speed - The speed at which the object moves.
 * @property {boolean} otherDirection - Indicates if the object is moving in the opposite direction.
 * @property {boolean} onTop - Indicates if the object is on top.
 * @property {number} energy - The energy level of the object.
 * @property {number} coins - The number of coins collected by the object.
 * @property {number} poison - The amount of poison the object has.
 * @property {number} lastHit - The timestamp of the last hit received by the object.
 * @property {number} lastHitEndboss - The timestamp of the last hit received from the end boss by the object.
 * @property {number} lastCoin - The timestamp of the last coin collected by the object.
 * @property {number} lastPoison - The timestamp of the last poison collected by the object.
 * @property {string} damageType - The type of damage the object deals.
 * @property {number} lastStrike - The timestamp of the last strike made by the object.
 * @property {boolean} enemyDying - Indicates if the enemy object is dying.
 * @property {boolean} isHittable - Indicates if the object can be hit.
 */
class movableObject extends DrawableObject {
  speed = 0.33;
  otherDirection = false;
  onTop = false;
  energy = 100;
  coins = 0;
  poison = 0;
  lastHit = 0;
  lastHitEndboss = 0;
  lastCoin = 0;
  lastPoison = 0;
  damageType;
  lastStrike = 0;
  enemyDying = false;

  isHittable = false;

  /**
   * Checks the swim direction of a fish-like movable object and updates its movement accordingly.
   * This method is called repeatedly at 60 frames per second to control the object's swimming behavior.
   *
   * @param {number} x - The x-coordinate that the fish-like object should swim around.
   */
  checkSwimDirectionFish(x) {
    setInterval(() => {
      if (this.x <= x - 150) {
        this.otherDirection = true;
      } else if (this.x >= x + 150) {
        this.otherDirection = false;
      }

      if (this.otherDirection) {
        this.swimRight();
      } else {
        this.swimLeft();
      }
    }, 1000 / 60);
  }

  /**
   * Checks the swim direction of a jelly-like movable object and updates its movement accordingly.
   * This method is called repeatedly at 60 frames per second to control the object's swimming behavior.
   *
   * @param {number} y - The y-coordinate that the jelly-like object should swim around.
   */
  checkSwimDirectionJelly(y) {
    setInterval(() => {
      if (this.y <= y - 100) {
        this.onTop = true;
      }
      if (this.y >= y + 100) {
        this.onTop = false;
      }

      if (this.onTop) {
        this.swimDown();
      } else {
        this.swimUp();
      }
    }, 1000 / 60);
  }

  /**
   * Checks the direction of the endboss relative to the character and updates the `otherDirection` property accordingly.
   *
   * @param {object} character - The character object to check the direction against.
   */
  checkDirectionEndboss(character) {
    if (character.x > this.x) {
      this.otherDirection = true;
    } else {
      this.otherDirection = false;
    }
  }

  /**
   * Calculates the speed of the endboss based on the distance to the player.
   * The closer the endboss is to the player, the faster it will move.
   *
   * @param {number} distance - The distance between the endboss and the player.
   * @returns {number} The speed multiplier for the endboss based on the distance.
   */
  setEndbossSpeed(distance) {
    if (distance > 600) {
      return 2;
    } else if (distance > 400) {
      return 1.5;
    } else if (distance > 200) {
      return 0.7;
    } else {
      return 0.4;
    }
  }

  /**
   * Moves the object upward by the current speed value.
   */
  swimUp() {
    this.y -= this.speed;
  }

  /**
   * Moves the object downward by the current speed value.
   */
  swimDown() {
    this.y += this.speed;
  }

  /**
   * Moves the object leftward by the current speed value.
   */
  swimLeft() {
    this.x -= this.speed;
  }

  /**
   * Moves the object rightward by the current speed value.
   */
  swimRight() {
    this.x += this.speed;
  }

  /**
   * Moves the object diagonally by reducing the speed in both the x and y directions.
   */
  swimLeftDown() {
    this.x -= this.speed / 5;
    this.y += this.speed / 5;
  }

  /**
   * Moves the object diagonally upward and leftward by reducing the speed in both the x and y directions.
   */
  swimLeftUp() {
    this.x -= this.speed / 5;
    this.y -= this.speed / 5;
  }

  /**
   * Records the timestamp of the last attack performed by the object.
   */
  lastAttack() {
    this.lastStrike = new Date().getTime();
  }

  /**
   * Checks if enough time has passed since the last attack performed by the object.
   * @returns {boolean} True if less than 1 second has passed since the last attack, false otherwise.
   */
  strikesEnemy() {
    let timePassed = new Date().getTime() - this.lastStrike;
    timePassed = timePassed / 100;
    return timePassed < 1;
  }

  /**
   * Checks if the current object is colliding with the provided object.
   * @param {object} object - The object to check for collision against.
   * @returns {boolean} True if the objects are colliding, false otherwise.
   */
  isColliding(object) {
    return (
      this.x + 40 + (this.width - 80) >= object.x &&
      this.x + 40 < object.x + object.width - 10 &&
      this.y + 160 + (this.height - 240) > object.y &&
      this.y + 160 < object.y + object.height - 20
    );
  }

  /**
   * Checks if the current object is colliding with the provided endboss object.
   * @param {object} object - The endboss object to check for collision against.
   * @returns {boolean} True if the objects are colliding, false otherwise.
   */
  isCollidingEndboss(object) {
    return (
      this.x + this.width >= object.x &&
      this.x >= object.x &&
      this.y + this.height > object.y + 220 &&
      this.y < object.y + object.height
    );
  }

  /**
   * Checks if the current object is colliding with the provided jelly object.
   * @param {object} object - The jelly object to check for collision against.
   * @returns {boolean} True if the objects are colliding, false otherwise.
   */
  hitsJelly(object) {
    return (
      this.x + this.width >= object.x &&
      this.x < object.x + object.width &&
      this.y + this.height > object.y &&
      this.y < object.y + object.height
    );
  }

  /**
   * Reduces the energy of the current object by 20. If the energy becomes 0 or less, it is set to 0. Otherwise, the time of the last hit is recorded.
   */
  hit() {
    this.energy -= 20;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Reduces the energy of the current object by 10. If the energy becomes 0 or less, it is set to 0. Otherwise, the time of the last hit on the endboss is recorded.
   */
  hitEndboss() {
    this.energy -= 10;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHitEndboss = new Date().getTime();
    }
  }

  /**
   * Checks if the current object is dead, i.e. its energy is 0.
   * @returns {boolean} True if the object is dead, false otherwise.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Checks if the current object has been hurt within the last 1 second.
   * @returns {boolean} True if the object has been hurt within the last 1 second, false otherwise.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  /**
   * Checks if the current object has been hit by the endboss within the last 1 second.
   * @returns {boolean} True if the object has been hit by the endboss within the last 1 second, false otherwise.
   */
  endbossIsHurt() {
    let timePassed = new Date().getTime() - this.lastHitEndboss;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  /**
   * Increases the coins of the current object by 20. If the coins become less than or equal to 0, they are set to 0. Otherwise, the time of the last coin collection is recorded.
   */
  gotCoin() {
    this.coins += 20;
    if (this.coins <= 0) {
      this.coins = 0;
    } else {
      this.lastCoin = new Date().getTime();
    }
  }

  /**
   * Decreases the coins of the current object by 20. If the coins become less than or equal to 0, they are set to 0. Otherwise, the time of the last coin collection is recorded.
   */
  lostCoin() {
    this.coins -= 20;
    if (this.coins <= 0) {
      this.coins = 0;
    } else {
      this.lastCoin = new Date().getTime();
    }
  }

  /**
   * Decreases the poison of the current object by 20. If the poison becomes less than or equal to 0, it is set to 0. Otherwise, the time of the last poison collection is recorded.
   */
  lostPoison() {
    this.poison -= 20;
    if (this.poison <= 0) {
      this.poison = 0;
    } else {
      this.lastPoison = new Date().getTime();
    }
  }

  /**
   * Increases the poison of the current object by 20. If the poison becomes less than or equal to 0, it is set to 0. Otherwise, the time of the last poison collection is recorded.
   */
  gotPoison() {
    this.poison += 20;
    if (this.poison <= 0) {
      this.poison = 0;
    } else {
      this.lastPoison = new Date().getTime();
    }
  }

  /**
   * Checks if the time since the last coin collection is less than 5 seconds.
   * @returns {boolean} True if the time since the last coin collection is less than 5 seconds, false otherwise.
   */
  lastCoinTime() {
    let timePassed = new Date().getTime() - this.lastCoin;
    timePassed = timePassed / 1000;
    return timePassed < 5;
  }

  /**
   * Plays the next frame of an animation by updating the current image being displayed.
   * @param {Array<string>} image - An array of file paths for the images in the animation.
   */
  playAnimation(image) {
    let i = this.currentIMG % image.length;
    let path = image[i];
    this.img = this.imageCache[path];
    this.currentIMG++;
  }
}
