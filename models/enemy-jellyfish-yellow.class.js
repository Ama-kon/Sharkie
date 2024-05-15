class enemyJellyfishYellow extends movableObject {
  height = 100;
  width = 90;
  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  constructor() {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.x = 200 + Math.random() * 400;
    this.loadImages(this.images_move);
    this.speed = 0.3 + Math.random() * 0.4;
    this.swimUp();
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 190);
  }
}
