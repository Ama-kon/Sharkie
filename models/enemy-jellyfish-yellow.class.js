class enemyJellyfishYellow extends movableObject {
  height = 100;
  width = 90;
  images_yellow = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  constructor() {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.x = 200 + Math.random() * 400;
    this.loadImages(this.images_yellow);
    this.animate_red();
  }
  animate_red() {
    setInterval(() => {
      let i = this.currentIMG % this.images_yellow.length;
      let path = this.images_yellow[i];
      this.img = this.imageCache[path];
      this.currentIMG++;
    }, 190);
  }
}
