class CoinsBar extends DrawableObject {
  images_coins = [
    "img/4. Marcadores/orange/100_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/40_  copia.png",
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
}
