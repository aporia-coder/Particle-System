gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
  },
});

tl.to(".intro", { opacity: 1, duration: 1.5 });
tl.to(".intro", { y: "0%", duration: 1.5 }, "-=1.5");
tl.to(
  "#btn",
  {
    opacity: 1,
    duration: 0.3,
  },
  "-=1",
);
