class enemyLilaFish extends movableObject {
  height = 50;
  width = 50;
  speed = 1.6;
  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
  ];

  images_die = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png",
  ];
  constructor() {
    super();
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.damageType = "poison";
    this.x = 2000 + Math.random() * 300;
    this.y = 30 + Math.random() * 200;
    console.log(this.x);

    this.checkSwimDirectionFish(2000, 2300);
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
