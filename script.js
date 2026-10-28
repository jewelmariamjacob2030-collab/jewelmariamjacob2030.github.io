// Mobile navigation, current year, and gentle enchanted details.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Toggle navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Toggle navigation");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// A tiny shooting star appears occasionally, without requiring any libraries.
const starfield = document.querySelector(".starfield");
function createShootingStar() {
  const star = document.createElement("span");
  star.setAttribute("aria-hidden", "true");
  Object.assign(star.style, {
    position: "fixed",
    left: `${Math.random() * 75 + 10}%`,
    top: `${Math.random() * 35 + 5}%`,
    width: "3px",
    height: "3px",
    borderRadius: "50%",
    background: "#f5eedf",
    boxShadow: "0 0 10px 2px rgba(201,168,255,.8)",
    pointerEvents: "none",
    zIndex: "0",
    opacity: "0",
    transition: "transform 900ms ease-out, opacity 900ms ease-out"
  });
  starfield.appendChild(star);
  requestAnimationFrame(() => {
    star.style.opacity = "1";
    star.style.transform = "translate(90px, 65px) scale(.4)";
  });
  window.setTimeout(() => star.remove(), 1000);
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(createShootingStar, 5200);
}
