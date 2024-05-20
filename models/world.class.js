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
    this.checkForPoison();
    // this.background_music.play(); // funktioniert - erst wieder öffnen wenn fertig
  }

  setWorld() {
    this.character.world = this;
  }
  drawAll() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjects(this.level.background);
    this.addObjects(this.level.coins);
    this.addObjects(this.level.clouds);
    this.addObjects(this.level.poison_ground);
    this.addObjects(this.level.poison_up);
    this.addObjects(this.level.enemies);
    this.addToCanvas(this.character);
    this.ctx.translate(-this.camera_x, 0);
    /// everything under here follows camera on screen //
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
          this.status_bar.setPercent(this.character.energy);
          this.character.hit();
          this.character.isHittedBy = enemy.damageType;
          console.log("1. hit by", this.character.isHittedBy);
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

  checkForPoison() {
    setInterval(() => {
      this.level.poison_ground.forEach((poison) => {
        if (this.character.isColliding(poison)) {
          this.character.gotPoison();
          if (this.character.poison < 100) {
            this.level.poison_ground.splice(
              this.level.poison_ground.indexOf(poison),
              1
            );
            this.ctx.clearRect(poison.x, poison.y, poison.width, poison.height);
          }
          this.poison_bar.setPoisonBar(this.character.poison);
        }
      });
    }, 1000);
  }
}
