class BackgroundObjects extends movableObject {
  y = 0;
  x = 0;
  height = 480;
  width = 720;
  constructor(path) {
    super().loadIMG(path);
  }
}
