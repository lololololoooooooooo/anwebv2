/* ==========  Register GSAP Plugins  ========== */
gsap.registerPlugin(ScrollTrigger);

/* ---------- Hero Parallax (background moves slower) ---------- */
gsap.to("section", {
  backgroundPosition: "50% 100%",  // moves downward
  ease: "none",
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "+=100%",          // 100% of viewport height
    scrub: 1                // smooth link to scroll
  }
});

/* ---------- 3-D Stagger Cards ---------- */
gsap.from(".feature-card", {
  scale: 0.8,
  opacity: 0,
  rotationX: 45,
  transformPerspective: 1000,
  transformOrigin: "top center",
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".feature-card",
    start: "top 80%"
  }
});

/* ---------- Fade-up Footer ---------- */
gsap.from("footer", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%"
  }
});

/* ---------- Mobile Nav Toggle ---------- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});

/* Close menu after clicking a link (mobile) */
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.add('hidden'))
);
