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
        this.x = 3800;
        this.y = 0;

        if (!this.sawEndboss && this.i < this.images_intro.length) {
          this.sawEndboss = true;
        }

        this.playAnimation(this.images_intro);
        this.i++;
      }

      if (this.sawEndboss && this.i > this.images_intro.length) {
        this.playAnimation(this.images_move);
        this.sharkieIsNear = true;
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
    let distanceX = this.character.x - this.x;
    let distanceY = this.character.y - this.y;

    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance > 600) {
      this.speed = 2;
    } else if (distance > 400) {
      this.speed = 1.5;
    } else if (distance > 200) {
      this.speed = 0.7;
    } else {
      this.speed = 0.4;
    }
    console.log("the distance is:", distance, "and the speed is:", this.speed);

    if (distance > 1) {
      let normDeltaX = distanceX / distance;
      let normDeltaY = distanceY / distance;

      this.x += normDeltaX * this.speed;
      this.y += normDeltaY * this.speed;

      if (this.character.otherDirection) {
        this.x += normDeltaX * this.speed * 0.5; // oder eine andere Anpassung
        this.y += normDeltaY * this.speed * 0.5; // oder eine andere Anpassung
      }
    }

    if (this.character.x - this.character.width / 2 > this.x) {
      this.otherDirection = true; // Endboss schaut nach rechts
    } else if (this.character.x <= this.x) {
      this.otherDirection = false; // Endboss schaut nach links
    }
  }
}
