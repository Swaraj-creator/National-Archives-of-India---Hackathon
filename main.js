
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin,SlowMo)
    // gsap code here!
   });

//main image
gsap.to("div.main", {
    duration: 1,
    opacity: 1,
    ease: "power2.inOut"
})
gsap.to("div.main", {
    duration: 3,
    backgroundSize: "100% 100%",
    ease: "power2.out",
});

//scrolling
ScrollTrigger.normalizeScroll(true);