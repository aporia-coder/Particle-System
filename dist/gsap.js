const tl = gsap.timeline();

// tl.to(".intro", { y: "0%", duration: 1 });
tl.to(".intro", { opacity: 1, duration: 1 });
tl.to(".btn-welcome", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "elastic",
  force3D: true,
});
