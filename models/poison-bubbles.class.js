class PoisonBubbles extends movableObject {
  height = 50;
  width = 50;
  offsetX = 30;
  offsetY = 5;
  speed = 1;

  image_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y) {
    super();
    this.loadImages(this.image_bubble);
    this.x = x;
    this.y = y;

    this.animate(x, y);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.image_bubble);
      this.x += this.offsetX + this.speed;
      this.y -= this.offsetY * this.speed;
      this.speed += 0.2;
    }, 100);
  }
}