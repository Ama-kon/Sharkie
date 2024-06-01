class Coins extends movableObject {
  width = 35;
  height = 35;

  images_coins = [
    "img/4. Marcadores/1. Coins/1.png",
    "img/4. Marcadores/1. Coins/2.png",
    "img/4. Marcadores/1. Coins/3.png",
    "img/4. Marcadores/1. Coins/4.png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.images_coins);
    this.animate();
    this.x = x;
    this.y = y;
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coins);
    }, 150);
  }
}
