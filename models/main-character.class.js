class mainCharacter extends movableObject {
  height = 350;
  width = 200;
  x = 0;
  y = 80;
  world;
  speed = 10;
  isHittedBy = "";
  strikedEnemy = "";
  hit_by_fish = new Audio("audio/hit_by_fish.wav");
  hit_by_jelly = new Audio("audio/electric_shock.mp3");
  striked_fish = new Audio("audio/striked_fish.mp3");
  striked_jelly = new Audio("audio/electric_shock.mp3");
  game_over = new Audio("audio/game_over.wav");
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

  constructor() {
    super().loadIMG("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.images_move);
    this.loadImages(this.images_attack_fin_lap);
    this.loadImages(this.images_bubble);
    this.loadImages(this.images_dead);
    this.loadImages(this.images_hurt_electric);
    this.loadImages(this.images_hurt_poisoned);
    this.animate();
  }

  animate() {
    setInterval(() => {
      // only keyboard //
      if (this.world.keyboard.right && this.x <= this.world.level.level_end_x) {
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

      this.followCamera();
    }, 1000 / 20);

    setInterval(() => {
      this.playAnimation(this.images_move);

      if (this.world.keyboard.space) {
        this.playAnimation(this.images_attack_fin_lap);
      }

      if (this.world.keyboard.d) {
        this.playAnimation(this.images_bubble);
      }

      if (this.isDead()) {
        this.game_over.play();
        this.playAnimation(this.images_dead);
      } else if (this.isHurt()) {
        if (this.isHittedBy == "electric") {
          this.hit_by_jelly.play();
          this.playAnimation(this.images_hurt_electric);
        } else if (this.isHittedBy == "poison") {
          this.hit_by_fish.play();
          this.playAnimation(this.images_hurt_poisoned);
        }

        if (this.strikesEnemy()) {
          this.strikedEnemy.enemyDying = true;
        }
      }
    }, 150);
  }

  followCamera() {
    this.world.camera_x = -this.x + 50;
  }
}
