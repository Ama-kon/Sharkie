let level1;

/**
 * Initializes the first level of the game.
 *
 * This function sets up the level by creating a new `Level` instance and populating it with various game objects, including enemies, background objects, coins, and poison ground/up elements.
 *
 * The level is defined by the following:
 * - 15 enemy objects of various types (green fish, red fish, lila fish, lila jellyfish, yellow jellyfish)
 * - 11 background object layers, each with 5 objects (water, light, foreground 1, foreground 2, floor)
 * - 11 coin objects
 * - 7 poison ground objects
 * - 5 poison up objects
 *
 * The level is designed to provide a challenging and visually appealing start to the game.
 */
function initLevel1() {
  level1 = new Level(
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
    [
      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D2.png",
        -720,
        0
      ),
      new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", -720, 0),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        -720,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        -720,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D2.png",
        -720,
        0
      ),

      new BackgroundObjects("img/3. Background/Layers/5. Water/D1.png", 0, 0),
      new BackgroundObjects("img/3. Background/Layers/1. Light/1.png", 0, 0),
      new BackgroundObjects("img/3. Background/Layers/4.Fondo 2/D1.png", 0, 0),
      new BackgroundObjects("img/3. Background/Layers/3.Fondo 1/D1.png", 0, 0),
      new BackgroundObjects("img/3. Background/Layers/2. Floor/D1.png", 0, 0),

      new BackgroundObjects("img/3. Background/Layers/5. Water/D2.png", 719, 0),
      new BackgroundObjects("img/3. Background/Layers/1. Light/2.png", 719, 0),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        719,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        719,
        0
      ),
      new BackgroundObjects("img/3. Background/Layers/2. Floor/D2.png", 719, 0),

      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D1.png",
        719 * 2,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/1. Light/1.png",
        719 * 2,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D1.png",
        719 * 2,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D1.png",
        719 * 2,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D1.png",
        719 * 2,
        0
      ),

      //////////////////////////////////////////////////////////////

      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D2.png",
        719 * 3,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/1. Light/2.png",
        719 * 3,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        719 * 3,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        719 * 3,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D2.png",
        719 * 3,
        0
      ),

      ////////////////////////////////////////////

      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D1.png",
        719 * 4,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/1. Light/1.png",
        719 * 4,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D1.png",
        719 * 4,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D1.png",
        719 * 4,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D1.png",
        719 * 4,
        0
      ),

      ////////////////////////////////////////////

      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D2.png",
        719 * 5,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/1. Light/2.png",
        719 * 5,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D2.png",
        719 * 5,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D2.png",
        719 * 5,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D2.png",
        719 * 5,
        0
      ),

      ////////////////////////////////////////////

      new BackgroundObjects(
        "img/3. Background/Layers/5. Water/D1.png",
        719 * 6,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/1. Light/1.png",
        719 * 6,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/4.Fondo 2/D1.png",
        719 * 6,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/3.Fondo 1/D1.png",
        719 * 6,
        0
      ),
      new BackgroundObjects(
        "img/3. Background/Layers/2. Floor/D1.png",
        719 * 6,
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
      new PoisonGround(735),
      new PoisonGround(1000),
      new PoisonGround(2000),
      new PoisonGround(2540),
      new PoisonGround(3000),
      new PoisonGround(3150),
    ],
    [
      new PoisonUp(300, 150),
      new PoisonUp(1100, 170),
      new PoisonUp(2200, 150),
      new PoisonUp(3200, 390),
      new PoisonUp(3300, 140),
    ]
  );
}
