class enemyGreenFish extends movableObject {
  height = 80;
  width = 80;

  images_move = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];
  constructor() {
    super().loadIMG(
      "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.x = 500 + Math.random() * 500;
    this.y = 80 + Math.random() * 240;
    this.loadImages(this.images_move);
    this.checkSwimDirectionFish(600, 700);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 190);
  }
}
