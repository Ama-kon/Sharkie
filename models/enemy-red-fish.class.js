class enemyRedFish extends movableObject {
  height = 75;
  width = 75;

  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
  ];
  constructor() {
    super().loadIMG(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );
    this.x = 1000 + Math.random() * 1000;
    this.y = 50 + Math.random() * 300;
    this.loadImages(this.images_move);
    this.checkSwimDirectionFish(1500, 1800);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 190);
  }
}
