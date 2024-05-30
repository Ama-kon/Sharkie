class Endboss extends movableObject {
  height = 430;
  width = 400;
  y = -300; // outside of canvas
  x = 5000; // outside of canvas
  i;
  character;
  sawEndboss = false;

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
  constructor(character) {
    super();
    this.loadIMG("img/2.Enemy/3 Final Enemy/1.Introduce/1.png");
    this.character = character;
    this.loadImages(this.images_move);
    this.loadImages(this.images_intro);
    this.animate();
  }

  animate() {
    this.i = 0;
    setInterval(() => {
      if (this.character.x >= 3500) {
        this.x = 3800;
        this.y = 0;

        if (!this.sawEndboss && this.i < this.images_intro.length) {
          this.sawEndboss = true;
        }

        this.playAnimation(this.images_intro);
        this.i++;

        if (this.sawEndboss && this.i > this.images_intro.length) {
          this.playAnimation(this.images_move);
        }
      }
    }, 170);
  }
}
