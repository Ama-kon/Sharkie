class Coins extends movableObject {
  width = 35;
  height = 35;
  x = 100;
  y = 250;
  images_coins = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];

  constructor() {
    super();
    this.loadImages(this.images_coins);
    this.animate();
    this.x = this.x + Math.random() * 3000;
    this.y = this.y - Math.random() * 110;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coins);
    }, 150);
  }
}
