class World {
  character = new mainCharacter();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  status_bar = new StatusBar();
  coins_bar = new CoinsBar();

  poison_bar = new PoisonBar();
  endboss = new Endboss(this.character);
  status_bar_endboss = new StatusBarEndboss(this.endboss);
  bubbles = [];
  poisonBubbles = [];

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ctx = canvas.getContext("2d");
    this.drawAll();
    this.setWorld();
    this.checkForCollision();
    this.checkForCoins();
    this.checkForPoison();
    this.drawBubble();
    this.eraseBubbles();
    this.drawPoisonBubble();
    this.erasePoisonBubbles();
    this.bubbleCheckForJelly();
    this.poisonCheckForEndboss();
    this.correctCoins();
    this.correctPoison();
    this.checkDeadByEndboss();
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

    this.addToCanvas(this.status_bar_endboss);
    this.addToCanvas(this.character);
    this.addToCanvas(this.endboss);
    this.addObjects(this.bubbles);
    this.addObjects(this.poisonBubbles);
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
          if (this.keyboard.space == true) {
            this.character.lastAttack();
            if (
              enemy instanceof enemyGreenFish ||
              enemy instanceof enemyRedFish ||
              enemy instanceof enemyLilaFish
            ) {
              if (!isMuted) {
                striked_fish.play();
              }

              this.character.strikedEnemy = enemy;
              enemy.enemyDying = true;
            }
          } else {
            this.character.hit();
            this.status_bar.setPercent(this.character.energy);
            this.character.isHittedBy = enemy.damageType;
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

          if (this.character.coins <= 100) {
            this.level.coins.splice(this.level.coins.indexOf(coin), 1);
            this.ctx.clearRect(coin.x, coin.y, coin.width, coin.height);
            if (!isMuted) {
              got_coin_music.play();
            }
          }
          this.coins_bar.setCoinsBar(this.character.coins);
        }
      });
    }, 1000 / 60);
  }

  correctCoins() {
    setInterval(() => {
      if (this.character.coins > 100) {
        this.character.coins = 100;
      }
    }, 1000 / 60);
  }

  checkForPoison() {
    setInterval(() => {
      const checkPoison = (array) => {
        array.forEach((poison) => {
          if (this.character.isColliding(poison)) {
            this.character.gotPoison();
            if (this.character.poison <= 100) {
              array.splice(array.indexOf(poison), 1);
              this.ctx.clearRect(
                poison.x,
                poison.y,
                poison.width,
                poison.height
              );
              if (!isMuted) {
                got_poison_music.play();
              }
            }
            this.poison_bar.setPoisonBar(this.character.poison);
          }
        });
      };
      checkPoison(this.level.poison_ground);
      checkPoison(this.level.poison_up);
    }, 1000 / 60);
  }

  correctPoison() {
    setInterval(() => {
      if (this.character.poison > 100) {
        this.character.poison = 100;
      }
    }, 1000 / 60);
  }

  drawBubble() {
    setInterval(() => {
      if (
        this.character.newBubble
        // && this.character.coins > 0        // zu testzwecken auskommentiert . muss wieder rein
      ) {
        this.character.lostCoin();

        this.character.newBubble = false;
        if (!this.character.otherDirection) {
          this.bubbles.push(
            new Bubbles(
              this.character.x + 150,
              this.character.y + 210,
              "swimRight"
            )
          );
        } else {
          this.bubbles.push(
            new Bubbles(this.character.x, this.character.y + 210, "swimLeft")
          );
        }

        this.coins_bar.setCoinsBar(this.character.coins);
      }
    }, 500);
  }

  eraseBubbles() {
    setInterval(() => {
      this.bubbles.forEach((bubble) => {
        if (bubble.x <= -100 || bubble.y <= -100) {
          this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
        }
      });
    }, 1000 / 60);
  }

  drawPoisonBubble() {
    setInterval(() => {
      if (
        this.character.newPoisonBubble
        // && this.character.poison > 0                // zu testzwecken auskommentiert, muss dann wieder rein
      ) {
        this.character.lostPoison();

        this.character.newPoisonBubble = false;
        if (!this.character.otherDirection) {
          this.poisonBubbles.push(
            new PoisonBubbles(
              this.character.x + 150,
              this.character.y + 210,
              "swimRight"
            )
          );
        } else {
          this.poisonBubbles.push(
            new PoisonBubbles(
              this.character.x,
              this.character.y + 210,
              "swimLeft"
            )
          );
        }
        this.poison_bar.setPoisonBar(this.character.poison);
      }
    }, 300);
  }

  erasePoisonBubbles() {
    setInterval(() => {
      this.poisonBubbles.forEach((bubble) => {
        if (bubble.x <= -100 || bubble.y <= -100) {
          this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
        }
      });
    }, 1000 / 60);
  }

  bubbleCheckForJelly() {
    setInterval(() => {
      this.bubbles.forEach((bubble) => {
        this.level.enemies.forEach((enemy) => {
          if (bubble.hitsJelly(enemy) && enemy.isHittable) {
            if (!isMuted) {
              striked_jelly.play();
            }
            this.bubbles.splice(this.bubbles.indexOf(bubble), 1);
            enemy.enemyDying = true;
          }
        });
      });
    }, 1000 / 60);
  }

  poisonCheckForEndboss() {
    setInterval(() => {
      this.poisonBubbles.forEach((bubble) => {
        if (bubble.isCollidingEndboss(this.endboss)) {
          this.endboss.hitEndboss();
          this.status_bar_endboss.setPercent(this.endboss.energy);
          this.poisonBubbles.splice(this.poisonBubbles.indexOf(bubble), 1);
        }
      }),
        1000 / 60;
    });
  }

  checkDeadByEndboss() {
    setInterval(() => {
      if (this.character.killedByEndboss) {
        this.character.x = -200;
        this.character.y = -200;
      }
    }, 1000 / 60);
  }
} //ende constructor
