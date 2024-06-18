/**
 * Represents a game level containing enemies, background, coins, and poison areas.
 *
 * @class Level
 */
class Level {
  /**
   * Collection of enemies in the level.
   * @type {Array}
   */
  enemies;

  /**
   * Background image or object for the level.
   * @type {object}
   */
  background;

  /**
   * Collection of coins scattered throughout the level.
   * @type {Array}
   */
  coins;

  /**
   * Areas on the ground that inflict poison damage.
   * @type {object}
   */
  poison_ground;

  /**
   * Areas in the air that inflict poison damage.
   * @type {object}
   */
  poison_up;

  /**
   * X-coordinate where the level ends.
   * @type {number}
   * @default 720 * 5.9
   */
  level_end_x = 720 * 5.9;

  /**
   * Creates an instance of Level.
   * @constructor
   * @param {Array} enemies - Collection of enemies in the level.
   * @param {object} background - Background image or object for the level.
   * @param {Array} coins - Collection of coins scattered throughout the level.
   * @param {object} poison_ground - Areas on the ground that inflict poison damage.
   * @param {object} poison_up - Areas in the air that inflict poison damage.
   */
  constructor(enemies, background, coins, poison_ground, poison_up) {
    this.enemies = enemies;
    this.background = background;
    this.coins = coins;
    this.poison_ground = poison_ground;
    this.poison_up = poison_up;
  }
}
