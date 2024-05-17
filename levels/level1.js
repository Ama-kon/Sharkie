const level1 = new Level(
  [
    new enemyGreenFish(),
    new enemyGreenFish(),
    new enemyRedFish(),
    new enemyRedFish(),
    new enemyJellyfishLila(),
    new enemyJellyfishYellow(),
    new Endboss(),
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
  ],
  [
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
  ]
);
