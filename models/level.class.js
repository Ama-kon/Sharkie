class Level {
  enemies;
  clouds;
  background;
  coins;
  poison_ground;
  poison_up;
  level_end_x = 720 * 4.9;

  constructor(enemies, clouds, background, coins, poison_ground, poison_up) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.background = background;
    this.coins = coins;
    this.poison_ground = poison_ground;
    this.poison_up = poison_up;
  }
}
