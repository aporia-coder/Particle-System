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

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".divtest",
    start: "bottom top",
    scrub: 0.1,
  },
});

tl2.from(".nav", {
  y: "-110%",
  duration: 0.3,
  ease: "slow",
});
