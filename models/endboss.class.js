class Endboss extends movableObject {
  height = 430;
  width = 400;
  y = -300; // outside of canvas
  x = 5000; // outside of canvas
  i;
  character;
  sawEndboss = false;
  isHittedBy;
  speed = 2.5;
  sharkieIsNear = false;
  attack = false;

  images_intro = [
    "img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];
  images_move = [
    "img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  images_attack = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  images_hurt = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  images_dead = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png",
  ];
  constructor(character) {
    super();
    this.loadIMG("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.character = character;
    this.loadImages(this.images_move);
    this.loadImages(this.images_intro);
    this.loadImages(this.images_attack);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_dead);
    this.animate();
  }

  animate() {
    this.i = 0;
    setInterval(() => {
      if (this.character.x >= 3100 && !isMuted && this.character.energy > 0) {
        endboss_sound.play();
        background_music.pause();
      }
      if (this.character.x >= 3400) {
        if (!this.sawEndboss) {
          this.sawEndboss = true;
          this.x = 3800;
          this.y = 0;
        }
        if (this.i < this.images_intro.length) {
          this.playAnimation(this.images_intro);
          this.i++;
        } else {
          this.sharkieIsNear = true;
        }
      }
      if (this.isDead()) {
        if (!isMuted) {
          endboss_sound.pause();
          you_win.play();
        } else {
          endboss_sound.pause();
          you_win.pause();
        }
        this.playAnimation(this.images_dead);
        setTimeout(() => {
          endScreen("you_win");

          playWinningSpeech();
        }, 1000);
      } else if (this.sharkieIsNear && !this.isDead()) {
        this.playAnimation(this.images_move);
      }
      if (this.attack && this.character.energy > 0) {
        this.playAnimation(this.images_attack);
        setTimeout(() => {
          this.character.killedByEndboss = true;
          this.character.energy = 0;
        }, 100);
      }
    }, 170);

    setInterval(() => {
      if (
        this.sawEndboss &&
        !isMuted &&
        this.character.energy > 0 &&
        this.energy > 0
      ) {
        endboss_sound.play();
        background_music.pause();
      } else if (this.sawEndboss && isMuted && this.character.energy > 0) {
        background_music.pause();
        endboss_sound.pause();
      }
      if (this.sharkieIsNear) {
        this.huntSharkie();
      }
      if (this.endbossIsHurt()) {
        if (!isMuted) {
          endboss_hurt_sound.play();
        }
        this.playAnimation(this.images_hurt);
      }
    }, 1000 / 60);
  }

  huntSharkie() {
    if (this.energy > 0 && !this.attack) {
      let distanceX = this.character.x - this.x;
      let distanceY = this.character.y - this.y;
      let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      this.speed = this.setEndbossSpeed(distance);
      if (distance > 1) {
        let normDeltaX = distanceX / distance;
        let normDeltaY = distanceY / distance;
        this.x += normDeltaX * this.speed;
        this.y += normDeltaY * this.speed;
      }
      if (!this.attack) {
        this.checkDirectionEndboss(this.character);
      }
      this.checkDistanceAndAttack(distance, distanceY);
    }
  }
  checkDistanceAndAttack(distance, distanceY) {
    if (
      distance < 127 &&
      !this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x -= 50;
    } else if (
      distance < 315 &&
      this.otherDirection &&
      distanceY >= 0 &&
      distanceY <= 100 &&
      this.character.energy > 0
    ) {
      this.attack = true;
      this.x += 50;
    }
  }
}
