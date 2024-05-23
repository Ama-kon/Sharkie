class enemyJellyfishYellow extends movableObject {
  height = 100;
  width = 90;
  speed = 5;

  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];

  images_die = [
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  constructor() {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.damageType = "electric";
    this.x = 500 + Math.random() * 400;
    this.y = 50 + Math.random() * 300;
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.speed = 0.2 + Math.random() * 0.2;
    this.checkSwimDirectionJelly(120, 320);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_move);
      if (this.enemyDying) {
        this.playAnimation(this.images_die);
        this.x += 15;
        this.y -= 25;
      }
    }, 150);
  }
}
