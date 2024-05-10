class enemyRedFish extends movableObject {
  height = 75;
  width = 75;
  y = 150;
  images_red = [
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
    this.x = 200 + Math.random() * 500;
    this.loadImages(this.images_red);
    this.animate();
    this.speed = 0.33 + Math.random() * 1;
    this.swimLeft();
  }
  animate() {
    setInterval(() => {
      let i = this.currentIMG % this.images_red.length;
      let path = this.images_red[i];
      this.img = this.imageCache[path];
      this.currentIMG++;
    }, 150);
  }
}
