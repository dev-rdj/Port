gsap.registerPlugin(ScrollTrigger);

/* HERO TEXT REVEAL */
gsap.from(".hero h1", {
  opacity:0,
  y:50,
  duration:1
});

/* PANEL SCROLL ANIMATION */
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.from(panel, {
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
      trigger:panel,
      start:"top 80%",
    }
  });
});

/* SERVICES ANIMATION */
gsap.from(".card", {
  scrollTrigger:{
    trigger:".services",
    start:"top 80%"
  },
  opacity:0,
  y:50,
  stagger:0.2
});

/* PARALLAX HERO */
gsap.to(".hero", {
  scale:1.1,
  scrollTrigger:{
    trigger:".hero",
    scrub:true
  }
});
