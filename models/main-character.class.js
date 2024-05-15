class mainCharacter extends movableObject {
  height = 350;
  width = 200;
  x = 0;
  y = 80;
  world;
  speed = 7;
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

  constructor() {
    super().loadIMG("img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.images_move);
    this.loadImages(this.images_attack_fin_lap);
    this.animate();
  }

  animate() {
    setInterval(() => {
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
      if (this.world.keyboard.space) {
        console.log("space");
        this.playAnimationAttack(this.images_attack_fin_lap);
      }
      this.world.camera_x = -this.x;
    }, 1000 / 20);

    setInterval(() => {
      this.playAnimation(this.images_move);
    }, 150);
  }
}
