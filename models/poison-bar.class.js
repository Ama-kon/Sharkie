class PoisonBar extends DrawableObject {
  images_poison = [
    "img/4. Marcadores/orange/100_ copia.png",
    "img/4. Marcadores/orange/80_ copia.png",
    "img/4. Marcadores/orange/60_ copia.png",
    "img/4. Marcadores/orange/40_ copia.png",
    "img/4. Marcadores/orange/20_ copia.png",
    "img/4. Marcadores/orange/0_ copia.png",
  ];

  constructor() {
    super();
    this.loadImages(this.images_poison);
    this.x = 10;
    this.y = 125;
    this.width = 200;
    this.height = 80;
  }
}
