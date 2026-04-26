// Register ScrollTrigger to ensure GSAP knows to use it
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Animation
const tl = gsap.timeline();
tl.fromTo(".hero-logo", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" })
  .fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
  .fromTo(".hero-subtitle", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");

// 2. Horizontal Scroll Setup
let panels = gsap.utils.toArray(".panel");
let track = document.querySelector(".track");

// Only run the horizontal scroll if the elements exist on the page
if (panels.length > 0 && track) {
    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            scrub: 1,
            end: () => "+=" + track.offsetWidth
        }
    });
}

// 3. Fade Up Animations for Services & Contact Sections
gsap.utils.toArray('.fade-up').forEach(element => {
    gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// 4. Mouse Glow Effect on Service Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 5. Contact Function
function sendEmail() {
    window.location.href = "mailto:xylorislogic@gmail.com";
}
