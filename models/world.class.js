class World {
  character = new mainCharacter();
  enemies = [
    new enemyGreenFish(),
    new enemyRedFish(),
    new enemyJellyfishLila(),
    new enemyJellyfishYellow(),
  ];

  clouds = [new clouds()];
  background = [
    new BackgroundObjects("img/3. Background/Layers/5. Water/D1.png"),
    new BackgroundObjects("img/3. Background/Layers/1. Light/1.png"),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D1.png"),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D1.png"),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D1.png"),
  ];

  ctx;
  canvas;
  keyboard;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjects(this.background);
    this.addObjects(this.enemies);

    this.addToCanvas(this.character);
    this.addObjects(this.clouds);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjects(objects) {
    objects.forEach((o) => this.addToCanvas(o));
  }

  addToCanvas(object) {
    this.ctx.drawImage(
      object.img,
      object.x,
      object.y,
      object.width,
      object.height
    );
  }
}
