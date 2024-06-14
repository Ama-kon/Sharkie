function endScreen(id) {
  let container = document.getElementById(id);
  let blur = document.getElementById("blur-container");
  container.classList.remove("d-none");
  blur.classList.remove("d-none");
  container.style.display = "flex";
  blur.style.display = "flex";
}
