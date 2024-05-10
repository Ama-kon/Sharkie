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
    new BackgroundObjects("img/3. Background/Layers/5. Water/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D2.png", -720, 0),

    new BackgroundObjects("img/3. Background/Layers/5. Water/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D1.png", 0, 0),

    new BackgroundObjects("img/3. Background/Layers/5. Water/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D2.png", 720, 0),

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D1.png",
      720 * 2,
      0
    ),

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D2.png",
      720 * 3,
      0
    ),
  ];

  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjects(this.background);
    this.addObjects(this.enemies);

    this.addToCanvas(this.character);
    this.addObjects(this.clouds);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjects(objects) {
    objects.forEach((o) => this.addToCanvas(o));
  }

  addToCanvas(object) {
    if (object.otherDirection) {
      this.ctx.save();
      this.ctx.translate(object.width, 0);
      this.ctx.scale(-1, 1);
      object.x = object.x * -1;
    }
    this.ctx.drawImage(
      object.img,
      object.x,
      object.y,
      object.width,
      object.height
    );
    if (object.otherDirection) {
      object.x = object.x * -1;
      this.ctx.restore();
    }
  }
}
