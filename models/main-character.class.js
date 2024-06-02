class mainCharacter extends movableObject {
  height = 350;
  width = 200;
  x = 0;
  y = 80;
  world;
  speed = 4;
  isHittedBy = "";
  strikedEnemy = "";
  newBubble = false;
  newPoisonBubble = false;

  images_move = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  images_sleeping = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  images_attack_fin_lap = [
    "img/1.Sharkie/4.Attack/Fin slap/1.png",
    "img/1.Sharkie/4.Attack/Fin slap/2.png",
    "img/1.Sharkie/4.Attack/Fin slap/3.png",
    "img/1.Sharkie/4.Attack/Fin slap/4.png",
    "img/1.Sharkie/4.Attack/Fin slap/5.png",
    "img/1.Sharkie/4.Attack/Fin slap/6.png",
    "img/1.Sharkie/4.Attack/Fin slap/7.png",
    "img/1.Sharkie/4.Attack/Fin slap/8.png",
  ];

  images_hurt_electric = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  images_hurt_poisoned = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];

  images_dead = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  images_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png",
  ];

  images_poison_bubble = [
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];

  constructor() {
    super();
    this.loadIMG("img/1.Sharkie/1.IDLE/1.png");

    this.loadImages(this.images_move);
    this.loadImages(this.images_attack_fin_lap);
    this.loadImages(this.images_bubble);
    this.loadImages(this.images_dead);
    this.loadImages(this.images_hurt_electric);
    this.loadImages(this.images_hurt_poisoned);
    this.loadImages(this.images_poison_bubble);
    this.loadImages(this.images_sleeping);
    this.animate();
  }

  animate() {
    setInterval(() => {
      // only keyboard //
      if (this.world.keyboard.right && this.x <= 3800) {
        this.x += this.speed;

        this.otherDirection = false;
      }
      if (this.world.keyboard.left && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      if (this.world.keyboard.up && this.y > -130) {
        this.y -= this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.down && this.y < 150) {
        this.y += this.speed;
        this.otherDirection = false;
      }
      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.down) {
        this.x -= this.speed / 5;
        this.y += this.speed / 5;
        this.otherDirection = true;
      }
      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.down) {
        if (this.y >= 150) {
          this.x -= this.speed / 5;
          this.y -= this.speed / 5;
          this.otherDirection = true;
        } else {
          this.x -= this.speed / 5;
          this.otherDirection = true;
        }
      }

      if (this.world.keyboard.left && this.x > 0 && this.world.keyboard.up) {
        if (this.y >= 150) {
          this.x -= this.speed / 5;
          this.y -= this.speed / 5;
          this.otherDirection = true;
        } else {
          this.x -= this.speed / 5;
          this.otherDirection = true;
        }
      }

      if (this.x <= 3500) {
        this.followCamera();
      }
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.images_move);

      if (this.world.keyboard.space) {
        this.playAnimation(this.images_attack_fin_lap);
      }

      if (this.world.keyboard.d) {
        this.playAnimation(this.images_bubble);
        this.newBubble = true;
      }

      if (this.world.keyboard.a) {
        this.playAnimation(this.images_poison_bubble);
        this.newPoisonBubble = true;
      }

      if (this.isDead()) {
        if (!isMuted) {
          background_music.pause();
          endboss_sound.pause();
          game_over.play();
        }

        this.playAnimation(this.images_dead);
      } else if (this.isHurt()) {
        if (this.isHittedBy == "electric") {
          if (!isMuted) {
            hit_by_jelly.play();
          }

          this.playAnimation(this.images_hurt_electric);
        } else if (this.isHittedBy == "poison") {
          if (!isMuted) {
            hit_by_fish.play();
          }

          this.playAnimation(this.images_hurt_poisoned);
        }

        if (this.strikesEnemy()) {
          this.strikedEnemy.enemyDying = true;
        }
      }
    }, 100);
  }

  followCamera() {
    this.world.camera_x = -this.x + 50;
  }
}
