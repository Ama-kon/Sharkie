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
    this.width = 200;
    this.height = 80;
  }

  setCoinsBar(number) {
    if (number <= 0) {
      this.selectImg(5);
    } else if (number <= 20) {
      this.selectImg(4);
    } else if (number <= 40) {
      this.selectImg(3);
    } else if (number <= 60) {
      this.selectImg(2);
    } else if (number <= 80) {
      this.selectImg(1);
    } else if (number <= 100) {
      this.selectImg(0);
    }
  }

  selectImg(nr) {
    let imagePath = this.images_coins[nr];
    this.img = this.imageCache[imagePath];
  }
}
