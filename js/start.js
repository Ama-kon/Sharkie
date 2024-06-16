window.addEventListener("resize", resizeCanvas);
document.addEventListener("DOMContentLoaded", toggleFullscreen);

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
  let startScreen = document.getElementById("start_game");
  startScreen.classList.add("d-none");
}

function toggleInstructions() {
  let instructions = document.getElementById("instructions_sheet");
  if (instructions.classList.contains("d-none")) {
    instructions.classList.remove("d-none");
    instructions.classList.remove("fade-out");
    instructions.classList.add("fade-in");
  } else {
    instructions.classList.remove("fade-in");
    instructions.classList.add("fade-out");
    setTimeout(() => {
      instructions.classList.add("d-none");
    }, 500);
  }
}

function toggleFullscreen() {
  const canvas = document.getElementById("canvas");
  const fullscreenToggle = document.getElementById("fullscreenToggle");

  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  function exitHandler() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      fullscreenToggle.checked = false;
    }
  }

  fullscreenToggle.addEventListener("change", function () {
    if (fullscreenToggle.checked) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.mozRequestFullScreen) {
        /* Firefox */
        canvas.mozRequestFullScreen();
      } else if (canvas.webkitRequestFullscreen) {
        /* Chrome, Safari und Opera */
        canvas.webkitRequestFullscreen();
      } else if (canvas.msRequestFullscreen) {
        /* IE/Edge */
        canvas.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari und Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  });
}
