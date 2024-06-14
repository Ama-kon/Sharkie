window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  let canvas = document.getElementById("canvas");

  if (window.innerWidth < 600) {
    canvas.width = 630;
  } else if (window.innerWidth < 760) {
    canvas.width = 720;
  } else {
    canvas.width = 1000;
  }
}

function startGame() {
  let startScreen = document.getElementById("start-game");
}
