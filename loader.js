const loading = gsap
  .timeline({ paused: true, repeat: -1 })
  .to(".transition-content span", {
    duration: 0.7,
    y: 20,
    stagger: 0.1,
    ease: "elastic.out(1, 0.5)",
  })
  .to(".transition-content span", {
    duration: 1,
    y: 0,
    stagger: 0.1,
    ease: "expo.out",
  });
loading.play();

window.addEventListener("load", () => {
  gsap
    .timeline()
    .to(".transition-content", {
      duration: 0.3,
      opacity: 0,
      onComplete: () => {
        loading.pause();
      },
    })
    .to(".transition-slide", {
      duration: 0.8,
      x: "100vw",
      ease: "power4.out",
      stagger: 0.1,
    })
    .set(".transition", {
      zIndex: -1,
    });
});
