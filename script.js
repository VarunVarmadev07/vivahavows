// Smooth scroll
document.querySelectorAll(".scroll-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// HERO AUTO SLIDER (FIXED)
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slider .slide");
  let index = 0;

  if (!slides.length) return;

  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000); // 4 seconds for smoother experience
});
    


