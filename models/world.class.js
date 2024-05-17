class World {
  character = new mainCharacter();
  level = level1;

  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  background_music = new Audio("audio/background_music.mp3");
  status_bar = new StatusBar();
  coins_bar = new CoinsBar();
  poison_bar = new PoisonBar();

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.drawAll();
    this.setWorld();
    this.checkForCollision();
    this.checkForCoins();
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
    this.addObjects(this.level.coins);
    this.addToCanvas(this.character);
    this.addObjects(this.level.clouds);
    this.ctx.translate(-this.camera_x, 0);
    this.addToCanvas(this.status_bar);
    this.addToCanvas(this.coins_bar);
    this.addToCanvas(this.poison_bar);
    this.ctx.translate(this.camera_x, 0);
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
  }

  checkForCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.status_bar.setPercent(this.character.energy);
          if (this.character.energy <= 0) {
            /////hier tot .... weitermachen ////
          }
        }
      });
    }, 1000);
  }

  checkForCoins() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.character.gotCoin();
          if (this.character.coins < 100) {
            this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            this.ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
          }
          this.coins_bar.setCoinsBar(this.character.coins);
        }
      });
    }, 1000);
  }
}
