"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ number, title, align = "left" }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} style={{ textAlign: align }} ref={containerRef}>
      <div className={styles.top}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div 
        className={styles.line} 
        ref={lineRef}
        style={{ transformOrigin: align === 'right' ? 'right' : align === 'center' ? 'center' : 'left' }}
      ></div>
    </div>
  );
}
