class enemyJellyfishLila extends movableObject {
  height = 90;
  width = 80;
  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  constructor() {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.x = 1000;
    this.loadImages(this.images_move);
    this.speed = 0.3 + Math.random() * 0.5;
    this.checkSwimDirectionJelly(190);

    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 150);
  }
}
