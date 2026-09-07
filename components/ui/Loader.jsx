"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Loader.module.css";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has visited before in this session to avoid showing it every time
    const hasVisited = sessionStorage.getItem("divya_visited");
    
    if (hasVisited) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem("divya_visited", "true");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }
      });

      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(textRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      }, "-=0.2")
      .to(progressRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(loaderRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 0.8,
        ease: "power3.inOut",
        delay: 0.2
      });

    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={styles.loader} ref={loaderRef}>
      <div className={styles.content}>
        <div className={styles.brandName} ref={logoRef}>
          <Image src="/logo.png" alt="Divya Makeup Artist" width={240} height={100} style={{ objectFit: 'contain' }} priority />
        </div>
        <div className={styles.text} ref={textRef}>
          MAKEUP ARTIST & HAIRSTYLES
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
}
