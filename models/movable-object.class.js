class movableObject extends DrawableObject {
  speed = 0.33;
  otherDirection = false;
  onTop = false;
  energy = 100;
  coins = 0;
  poison = 0;
  lastHit = 0;
  lastHitEndboss = 0;
  lastCoin = 0;
  lastPoison = 0;
  damageType;
  lastStrike = 0;
  enemyDying = false;

  isHittable = false;

  checkSwimDirectionFish(x) {
    setInterval(() => {
      if (this.x <= x - 150) {
        this.otherDirection = true;
      } else if (this.x >= x + 150) {
        this.otherDirection = false;
      }

      if (this.otherDirection) {
        this.swimRight();
      } else {
        this.swimLeft();
      }
    }, 1000 / 60);
  }

  checkSwimDirectionJelly(y) {
    setInterval(() => {
      if (this.y <= y - 100) {
        this.onTop = true;
      }
      if (this.y >= y + 100) {
        this.onTop = false;
      }

      if (this.onTop) {
        this.swimDown();
      } else {
        this.swimUp();
      }
    }, 1000 / 60);
  }

  swimUp() {
    this.y -= this.speed;
  }

  swimDown() {
    this.y += this.speed;
  }
  swimLeft() {
    this.x -= this.speed;
  }

  swimRight() {
    this.x += this.speed;
  }

  lastAttack() {
    this.lastStrike = new Date().getTime();
  }

  strikesEnemy() {
    let timePassed = new Date().getTime() - this.lastStrike;
    timePassed = timePassed / 100;
    return timePassed < 1;
  }

  isColliding(object) {
    return (
      this.x + 40 + (this.width - 80) >= object.x &&
      this.x + 40 < object.x + object.width - 10 &&
      this.y + 160 + (this.height - 240) > object.y &&
      this.y + 160 < object.y + object.height - 20
    );
  }

  isCollidingEndboss(object) {
    return (
      this.x + this.width >= object.x &&
      this.x >= object.x &&
      this.y + this.height > object.y + 220 &&
      this.y < object.y + object.height
    );
  }

  hitsJelly(object) {
    return (
      this.x + 40 + this.width >= object.x &&
      this.x + 40 < object.x + object.width &&
      this.y + 160 + this.height > object.y &&
      this.y < object.y + object.height
    );
  }

  hit() {
    this.energy -= 20;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  hitEndboss() {
    this.energy -= 20;
    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHitEndboss = new Date().getTime();
    }
  }

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  endbossIsHurt() {
    let timePassed = new Date().getTime() - this.lastHitEndboss;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  gotCoin() {
    this.coins += 20;
    if (this.coins <= 0) {
      this.coins = 0;
    } else if (this.coins >= 100) {
      this.coins = 100;
    } else {
      this.lastCoin = new Date().getTime();
    }
  }

  lostCoin() {
    this.coins -= 20;
    if (this.coins <= 0) {
      this.coins = 0;
    } else if (this.coins >= 100) {
      this.coins = 100;
    } else {
      this.lastCoin = new Date().getTime();
    }
  }

  lostPoison() {
    this.poison -= 20;
    if (this.poison <= 0) {
      this.poison = 0;
    } else if (this.poison >= 100) {
      this.poison = 100;
    } else {
      this.lastPoison = new Date().getTime();
    }
  }

  gotPoison() {
    this.poison += 20;
    if (this.poison <= 0) {
      this.poison = 0;
    } else if (this.poison >= 100) {
      this.poison = 100;
    } else {
      this.lastPoison = new Date().getTime();
    }
  }

  lastCoinTime() {
    let timePassed = new Date().getTime() - this.lastCoin;
    timePassed = timePassed / 1000;
    return timePassed < 5;
  }

  playAnimation(image) {
    let i = this.currentIMG % image.length;
    let path = image[i];
    this.img = this.imageCache[path];
    this.currentIMG++;
  }
}
