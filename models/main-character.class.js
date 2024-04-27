class mainCharacter extends movableObject {
  height = 350;
  width = 200;
  x = 0;
  y = 80;
  images_standard = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  constructor() {
    super().loadIMG("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.images_standard);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentIMG % this.images_standard.length;
      let path = this.images_standard[i];
      this.img = this.imageCache[path];
      this.currentIMG++;
    }, 150);
  }
}
