class PoisonUp extends movableObject {
  images_poison_up = [
    "img/4. Marcadores/Posión/Animada/1.png",
    "img/4. Marcadores/Posión/Animada/2.png",
    "img/4. Marcadores/Posión/Animada/3.png",
    "img/4. Marcadores/Posión/Animada/4.png",
    "img/4. Marcadores/Posión/Animada/5.png",
    "img/4. Marcadores/Posión/Animada/6.png",
    "img/4. Marcadores/Posión/Animada/7.png",
    "img/4. Marcadores/Posión/Animada/8.png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.images_poison_up);
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_poison_up);
    }, 100);
  }
}
