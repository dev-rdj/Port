gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".hero-img", {
  scale:0.8,
  opacity:0,
  duration:1
});

/* HORIZONTAL SCROLL */
const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    pin: true,
    scrub: 1,
    snap: 1 / (panels.length - 1),
    end: () => "+=" + document.querySelector(".horizontal").offsetWidth
  }
});

/* PANEL TEXT FADE */
panels.forEach(panel => {
  gsap.from(panel.querySelector("h2"), {
    opacity:0,
    y:50,
    scrollTrigger:{
      trigger:panel,
      start:"left center"
    }
  });
});
