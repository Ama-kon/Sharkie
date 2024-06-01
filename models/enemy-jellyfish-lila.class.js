class enemyJellyfishLila extends movableObject {
  height = 100;
  width = 90;
  isHittable = true;

  images_move = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  images_die = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.images_move);
    this.damageType = "electric";
    this.x = x;
    this.y = y;
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
