class movableObject extends DrawableObject {
  speed = 0.33;
  otherDirection = false;
  energy = 100;
  coins = 0;
  lastHit = 0;
  lastCoin = 0;

  checkSwimDirectionFish(smaller, larger) {
    setInterval(() => {
      if (this.x < smaller) {
        this.swimRight();
        setTimeout(() => {
          this.otherDirection = true;
        }, 1400);
      } else if (this.x >= larger) {
        this.swimLeft();
        setTimeout(() => {
          this.otherDirection = false;
        }, 1400);
      }
    }, 190);
  }

  checkSwimDirectionJelly(number) {
    setInterval(() => {
      if (this.y < number) {
        this.swimDown();
      } else {
        this.swimUp();
      }
    }, 250);
  }

  swimUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 1000 / 60);
  }

  swimDown() {
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);
  }
  swimLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  swimRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }

  isColliding(object) {
    return (
      this.x + 40 + (this.width - 80) >= object.x &&
      this.x + 40 < object.x + object.width &&
      this.y + 160 + (this.height - 240) > object.y &&
      this.y + 160 < object.y + object.height
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

  isDead() {
    return this.energy == 0;
  }

  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
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
