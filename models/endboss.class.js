class Endboss extends movableObject {
  height = 430;
  width = 400;
  y = -300; // outside of canvas
  x = 5000; // outside of canvas
  i;
  character;
  sawEndboss = false;
  isHittedBy;
  isMuted = false;

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
      if (this.character.x >= 3100 && !this.isMuted) {
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
      }

      if (this.isDead()) {
        this.playAnimation(this.images_dead);
      }
    }, 170);

    setInterval(() => {
      if (this.sawEndboss && !this.isMuted) {
        endboss_sound.play();
        background_music.pause();
      } else if (this.sawEndboss && this.isMuted) {
        background_music.pause();
        endboss_sound.pause();
      }

      if (this.endbossIsHurt()) {
        if (!this.isMuted) {
          endboss_hurt_sound.play();
        }
        this.playAnimation(this.images_hurt);
      }
    }, 1000 / 60);
  }
}
