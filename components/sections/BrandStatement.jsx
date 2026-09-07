"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BrandStatement.module.css";

export default function BrandStatement() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Split text logic could go here, but using simple stagger for now for stability
      gsap.fromTo(
        ".statement-line",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.brandStatement}`} ref={containerRef}>
      <div className="container">
        <div className={styles.content}>
          <div className="gold-line" style={{ marginBottom: '64px', maxWidth: '100px', margin: '0 auto 64px' }}></div>
          
          <h2 className={styles.heading} ref={textRef}>
            <div className="statement-line">Where artistry meets</div>
            <div className="statement-line">your most unforgettable</div>
            <div className="statement-line text-champagne">moments.</div>
          </h2>
          
          <p className={styles.paragraph} ref={paragraphRef}>
            From timeless bridal elegance to modern soft glam, every look is designed around you.
          </p>
        </div>
      </div>
      <div className={styles.textureBg}></div>
    </section>
  );
}
