class CoinsBar extends movableObject {
  images_coins = [
    "img/4. Marcadores/orange/100_ copia 2.png",
    "img/4. Marcadores/orange/80_  copia 2.png",
    "img/4. Marcadores/orange/60_  copia 2.png",
    "img/4. Marcadores/orange/40_  copia 2.png",
    "img/4. Marcadores/orange/20_  copia.png",
    "img/4. Marcadores/orange/0_  copia 2.png",
  ];

  constructor() {
    super();
    this.loadImages(this.images_coins);
    this.x = 10;
    this.y = 60;
    this.width = 160;
    this.height = 80;
    this.setCoinsBar(0);
  }

  setCoinsBar(percent) {
    this.percent = percent;
    let imagePath = this.images_coins[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }

  findIndexOfStatusImg() {
    if (this.percent >= 100) {
      return 0;
    } else if (this.percent >= 80) {
      return 1;
    } else if (this.percent >= 60) {
      return 2;
    } else if (this.percent >= 40) {
      return 3;
    } else if (this.percent >= 20) {
      return 4;
    } else {
      return 5;
    }
  }
}
