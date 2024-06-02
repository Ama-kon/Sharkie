class StatusBar extends DrawableObject {
  images_lifes = [
    "img/4. Marcadores/orange/100_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/0_  copia.png",
  ];

  percent = 100;
  constructor() {
    super();
    this.loadImages(this.images_lifes);
    this.x = 10;
    this.y = 0;
    this.width = 160;
    this.height = 80;
    this.setPercent(100);
  }

  setPercent(percent) {
    this.percent = percent;
    let imagePath = this.images_lifes[this.findIndexOfStatusImg()];
    this.img = this.imageCache[imagePath];
  }

  findIndexOfStatusImg() {
    if (this.percent == 100) {
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
