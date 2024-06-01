class PoisonGround extends movableObject {
  images_poison_ground = [
    "img/4. Marcadores/Posión/Dark - Left.png",
    "img/4. Marcadores/Posión/Dark - Right.png",
  ];

  constructor(x) {
    super();
    this.loadImages(this.images_poison_ground);
    this.x = x;
    this.y = 350;
    this.width = 50;
    this.height = 50;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images_poison_ground);
    }, 800);
  }
}
