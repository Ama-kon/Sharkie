class movableObject {
  x = 80;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentIMG = 0;
  speed = 0.33;

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

  swimUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 1000 / 60);
  }

  swimDown() {}
  swimLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  swimRight() {}
}
