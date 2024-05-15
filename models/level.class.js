class Level {
  enemies;
  clouds;
  background;
  level_end_x = 720 * 2.9;

  constructor(enemies, clouds, background) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.background = background;
  }
}
