class enemyGreenFish extends movableObject {
  height = 80;
  width = 80;
  speed = 0.75;

  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png",
  ];
  constructor() {
    super();
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.damageType = "poison";
    this.x = 500 + Math.random() * 500;
    this.y = 80 + Math.random() * 240;
    this.checkSwimDirectionFish(600, 700);
    this.animate();
  }
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

  // checkForDyingEnemy() {
  //   let dyingEnemies = this.level.enemies.filter((enemy) => enemy.enemyDying);
  //   this.level.enemies = this.level.enemies.filter(
  //     (enemy) => !enemy.enemyDying
  //   );

  //   dyingEnemies.forEach((enemy) => {
  //     this.ctx.clearRect(enemy.x, enemy.y, enemy.width, enemy.height);
  //   });
  // }
}
