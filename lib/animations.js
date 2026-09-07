import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export const revealText = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
      },
    }
  );
};

export const revealImage = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { clipPath: "inset(12% 12% 12% 12%)", scale: 1.05 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      duration: 1.5,
      ease: "power2.inOut",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    }
  );
};

export const parallaxImage = (container, image, speed = 0.5) => {
  return gsap.to(image, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
