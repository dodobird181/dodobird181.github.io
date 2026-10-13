// Reveal the page once the fonts it uses have loaded
Promise.all([
  document.fonts.load('1em "Avallon Alt"'),
  document.fonts.load('400 1em "Cormorant Garamond"'),
  document.fonts.load('500 1em "Cormorant Garamond"'),
])
  .catch(() => {})
  .then(() => window.revealPage());

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

// Send the contact form without leaving the page
const form = document.querySelector(".contact-form");
if (form) {
  const status = form.querySelector(".form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    button.disabled = true;
    status.textContent = "Sending…";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      form.reset();
      status.textContent = "Thank you! Your message has been sent.";
    } catch {
      status.textContent = "Sorry, something went wrong. Please try again.";
    } finally {
      button.disabled = false;
    }
  });
}
