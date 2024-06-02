class Bubbles extends movableObject {
  height = 50;
  width = 50;
  offsetX = 30;
  offsetY = 5;
  speed = 1;

  image_bubble = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];

  constructor(x, y, direction) {
    super();
    this.loadImages(this.image_bubble);
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.direction == "swimRight") {
        this.playAnimation(this.image_bubble);
        this.x += this.offsetX + this.speed;
        this.y -= this.offsetY * this.speed;
        this.speed += 0.2;
      } else {
        this.playAnimation(this.image_bubble);
        this.x -= this.offsetX + this.speed;
        this.y -= this.offsetY * this.speed;
        this.speed += 0.2;
      }
    }, 100);
  }
}
