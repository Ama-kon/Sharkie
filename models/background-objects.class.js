class BackgroundObjects extends movableObject {
  height = 480;
  width = 720;
  constructor(path, x, y) {
    super().loadIMG(path);
    this.x = x;
    this.y = y;
  }
}
