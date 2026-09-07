"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BeforeAfter.module.css";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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

  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className={`section ${styles.beforeAfterSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="06" title="THE TRANSFORMATION" align="center" />
        
        <div 
          className={styles.sliderContainer} 
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* AFTER Image (Background) */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/classic_red_bridal.jpg"
              alt="Bridal Look After"
              fill
              className={styles.image}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className={styles.labelAfter}>AFTER</div>
          </div>

          {/* BEFORE Image (Foreground clipped) */}
          <div 
            className={styles.imageWrapperBefore}
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/images/classic_red_bridal.jpg"
              alt="Bridal Look Before"
              fill
              className={styles.image}
              style={{ filter: 'grayscale(100%) sepia(20%) contrast(85%)' }}
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className={styles.labelBefore}>BEFORE</div>
          </div>

          {/* Slider Handle */}
          <div 
            className={styles.handle}
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className={styles.handleLine}></div>
            <div className={styles.handleCircle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: 'translateX(6px)'}}/>
              </svg>
            </div>
          </div>
        </div>
        
        <p className={styles.caption}>Drag to reveal</p>
      </div>
    </section>
  );
}
