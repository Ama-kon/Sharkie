class enemyGreenFish extends movableObject {
  height = 100;
  width = 100;
  y = 80;
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
    this.x = 200 + Math.random() * 500;
    this.loadImages(this.images_move);
    this.animate();
    this.speed = 0.55 + Math.random() * 1.5;
    this.swimLeft();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 150);
  }
}
