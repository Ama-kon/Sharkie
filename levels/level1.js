// let level1; zusammen mit function init level wieder normal, bei level1 = new level noch das let weg

// function initLevel1() { // beim klick auf start ausführen

let level1 = new Level(
  [
    new enemyGreenFish(1000, 180),
    new enemyGreenFish(1350, 300),
    new enemyGreenFish(1850, 310),
    new enemyGreenFish(3140, 140),
    new enemyRedFish(700, 290),
    new enemyRedFish(2000, 140),
    new enemyLilaFish(2800, 360),
    new enemyLilaFish(2700, 320),
    new enemyLilaFish(2600, 280),
    new enemyLilaFish(2700, 240),
    new enemyLilaFish(2800, 200),
    new enemyJellyfishLila(2400, 250),
    new enemyJellyfishYellow(2300, 250),
    new enemyJellyfishLila(2850, 300),
    new enemyJellyfishYellow(3070, 300),
  ],
  [new clouds()],
  [
    new BackgroundObjects("img/3. Background/Layers/5. Water/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D2.png", -720, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D2.png", -720, 0),

    new BackgroundObjects("img/3. Background/Layers/5. Water/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D1.png", 0, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D1.png", 0, 0),

    new BackgroundObjects("img/3. Background/Layers/5. Water/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D2.png", 720, 0),
    new BackgroundObjects("img/3. Background/Layers/2. Floor/D2.png", 720, 0),

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D1.png",
      720 * 2,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D1.png",
      720 * 2,
      0
    ),

    //////////////////////////////////////////////////////////////

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D2.png",
      720 * 3,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D2.png",
      720 * 3,
      0
    ),

    ////////////////////////////////////////////

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D1.png",
      720 * 4,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/1.png",
      720 * 4,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D1.png",
      720 * 4,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D1.png",
      720 * 4,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D1.png",
      720 * 4,
      0
    ),

    ////////////////////////////////////////////

    new BackgroundObjects(
      "img/3. Background/Layers/5. Water/D2.png",
      720 * 5,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/1. Light/2.png",
      720 * 5,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/4.Fondo 2/D2.png",
      720 * 5,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/3.Fondo 1/D2.png",
      720 * 5,
      0
    ),
    new BackgroundObjects(
      "img/3. Background/Layers/2. Floor/D2.png",
      720 * 5,
      0
    ),
  ],
  [
    new Coins(600, 250),
    new Coins(650, 210),
    new Coins(700, 170),
    new Coins(750, 210),
    new Coins(800, 250),
    new Coins(1300, 100),
    new Coins(1350, 60),
    new Coins(1400, 100),
    new Coins(2500, 390),
    new Coins(2550, 350),
    new Coins(2600, 310),
  ],
  [
    new PoisonGround(500),
    new PoisonGround(1000),
    new PoisonGround(2000),
    new PoisonGround(3000),
  ],
  [
    new PoisonUp(300, 150),
    new PoisonUp(1100, 170),
    new PoisonUp(2200, 150),
    new PoisonUp(3200, 390),
    new PoisonUp(3300, 140),
  ]
);

// }
