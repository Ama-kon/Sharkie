class enemyJellyfishLila extends movableObject {
  height = 90;
  width = 80;
  images_lila = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  constructor() {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = 200 + Math.random() * 400;
    this.loadImages(this.images_lila);
    this.animate_red();
  }
  animate_red() {
    setInterval(() => {
      let i = this.currentIMG % this.images_lila.length;
      let path = this.images_lila[i];
      this.img = this.imageCache[path];
      this.currentIMG++;
    }, 240);
  }
}
