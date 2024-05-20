class DrawableObject {
  img;
  imageCache = {};
  currentIMG = 0;
  x = 80;
  y = 250;
  height = 150;
  width = 100;

  constructor() {}
  loadIMG(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      this.img = new Image();
      this.img.src = path;
      this.imageCache[path] = this.img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawRectangle(ctx) {
    // zum berechnen des zusammenstoßens, kann danach raus
    if (this instanceof mainCharacter) {
      ctx.beginPath();
      ctx.lineWidth = "7";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x + 40, this.y + 160, this.width - 80, this.height - 240);
      ctx.stroke();
    }
    if (this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "7";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x + 30, this.y + 160, this.width - 80, this.height - 240);
      ctx.stroke();
    }
    if (
      this instanceof enemyGreenFish ||
      this instanceof enemyRedFish ||
      this instanceof enemyJellyfishLila ||
      this instanceof enemyJellyfishYellow
    ) {
      ctx.beginPath();
      ctx.lineWidth = "7";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
    if (this instanceof Coins) {
      ctx.beginPath();
      ctx.lineWidth = "7";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
    if (this instanceof PoisonGround || this instanceof PoisonUp) {
      ctx.beginPath();
      ctx.lineWidth = "7";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  flipImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  flipImageBack(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }
}
