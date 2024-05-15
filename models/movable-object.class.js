class movableObject {
  x = 80;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentIMG = 0;
  speed = 0.33;
  otherDirection = false;
  energy = 100;

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

    if (
      this instanceof mainCharacter ||
      this instanceof enemyGreenFish ||
      this instanceof enemyRedFish ||
      this instanceof enemyJellyfishLila ||
      this instanceof enemyJellyfishYellow ||
      this instanceof Endboss
    ) {
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
  swimUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 1000 / 60);
  }

  // swimDown() {}
  swimLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  // swimRight() {}

  isColliding(object) {
    return (
      this.x + this.width >= object.x &&
      this.y + this.height > object.y &&
      this.x < object.x &&
      this.y < object.y + object.height
    );
  }

  playAnimation(image) {
    let i = this.currentIMG % this.images_move.length;
    let path = image[i];
    this.img = this.imageCache[path];
    this.currentIMG++;
  }

  playAnimationAttack(image) {
    let i = this.currentIMG % this.images_attack_fin_lap.length;
    let path = image[i];
    this.img = this.imageCache[path];
    this.currentIMG++;
  }
}
