class enemyJellyfishYellow extends movableObject {
  height = 100;
  width = 90;
  speed = 5;
  isHittable = true;

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

  constructor(x, y) {
    super().loadIMG("img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
    this.damageType = "electric";
    this.x = x;
    this.y = y;
    this.loadImages(this.images_move);
    this.loadImages(this.images_die);
    this.speed = 0.3 + Math.random() * 0.5;
    this.checkSwimDirectionJelly(this.y);
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
