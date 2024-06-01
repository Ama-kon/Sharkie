class enemyRedFish extends movableObject {
  height = 75;
  width = 75;
  speed = 1;

  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];

  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png",
  ];
  constructor(x, y) {
    super().loadIMG(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );
    this.damageType = "poison";
    this.x = x;
    this.y = y;
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.checkSwimDirectionFish(this.x);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
      if (this.enemyDying) {
        this.playAnimation(this.images_die);
        this.x += 5;
        this.y += 5;
      }
    }, 1000 / 60);
  }
}
