class World {
  character = new mainCharacter();
  level = level1;

  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  background_music = new Audio("audio/background_music.mp3");

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.drawAll();
    this.setWorld();
    this.checkForCollision();
    // this.background_music.play(); // funktioniert - erst wieder öffnen wenn fertig
  }

  setWorld() {
    this.character.world = this;
  }
  drawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjects(this.level.background);
    this.addObjects(this.level.enemies);
    this.addToCanvas(this.character);
    this.addObjects(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.drawAll();
    });
  }

  addObjects(objects) {
    objects.forEach((o) => this.addToCanvas(o));
  }

  addToCanvas(object) {
    if (object.otherDirection) {
      object.flipImage(this.ctx);
    }
    object.draw(this.ctx);
    object.drawRectangle(this.ctx);

    if (object.otherDirection) {
      object.flipImageBack(this.ctx);
    }
    // this.drawRectangle(object.x, object.y, object.width, object.height); // zum berechnen des zusammenstoßens, kann danach raus
  }

  checkForCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          console.log(`Collision with ${enemy}!`);
        }
      });
    }, 1000);
  }
}
