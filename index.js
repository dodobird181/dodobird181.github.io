document.getElementById("year").textContent = new Date().getFullYear();

// Glimmer the down arrow at random intervals (hover is handled in CSS)
const arrow = document.querySelector(".scroll-arrow");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scheduleGlimmer() {
  const delay = 500 + Math.random() * 6000; // 3–9 seconds
  setTimeout(() => {
    arrow.classList.add("glimmer");
    setTimeout(() => arrow.classList.remove("glimmer"), 1200);
    scheduleGlimmer();
  }, delay);
}

if (arrow && !reduceMotion) scheduleGlimmer();
