class PoisonUp extends movableObject {
  x = 100;
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

  constructor() {
    super();
    this.loadImages(this.images_poison_up);
    this.x = this.x + Math.random() * 2500;
    this.y = 50 + Math.random() * 200;
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
