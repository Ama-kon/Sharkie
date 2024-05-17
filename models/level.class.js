class Level {
  enemies;
  clouds;
  background;
  coins;
  level_end_x = 720 * 4;

  constructor(enemies, clouds, background, coins) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.background = background;
    this.coins = coins;
  }
}
