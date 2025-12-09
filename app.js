// ======== ELEMENTOS ========
const video = document.querySelector(".viewer");
const playBtn = document.querySelector(".play-btn");
const progress = document.querySelector(".progress");
const volume = document.querySelector(".volume");
const speed = document.querySelector(".speed");

// ======== PLAY / PAUSE ========
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.textContent = "⏸";  // Cambiar icono
  } else {
    video.pause();
    playBtn.textContent = "⏵";
  }
}

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// ======== ACTUALIZAR PROGRESO ========
video.addEventListener("timeupdate", () => {
  const porcentaje = (video.currentTime / video.duration) * 100;
  progress.value = porcentaje;
});

// ======== CAMBIAR TIEMPO AL MOVER LA BARRA ========
progress.addEventListener("input", () => {
  const nuevoTiempo = (progress.value / 100) * video.duration;
  video.currentTime = nuevoTiempo;
});

// ======== CONTROL DE VOLUMEN ========
volume.addEventListener("input", () => {
  video.volume = volume.value;
});

// ======== CONTROL DE VELOCIDAD ========
speed.addEventListener("input", () => {
  video.playbackRate = speed.value;
});
