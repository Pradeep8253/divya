"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textContentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(15% 15% 15% 15%)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Text reveal
      gsap.fromTo(
        textContentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textContentRef.current,
            start: "top 80%",
          }
        }
      );

      // Stats reveal and counter
      const stats = gsap.utils.toArray(".stat-item");
      gsap.fromTo(
        stats,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.about}`} ref={containerRef}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper} ref={imageRef}>
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
              alt="Divya - Premium Bridal Makeup Artist"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className={styles.textColumn}>
          <SectionHeading number="01" title="ABOUT DIVYA" />
          
          <div ref={textContentRef}>
            <h3 className={styles.heading}>Beauty is never one-size-fits-all.</h3>
            
            <p className={styles.paragraph}>
              With a profound passion for artistry and a discerning eye for detail, I specialize in crafting luxurious, personalized bridal looks that enhance your natural beauty rather than mask it. 
            </p>
            <p className={styles.paragraph}>
              My philosophy is rooted in the belief that every bride has her own unique essence. By combining premium international products with advanced techniques, I ensure your look is not only flawlessly photographed but feels weightless and endures through every emotional moment of your special day.
            </p>
          </div>

          <div className={styles.stats} ref={statsRef}>
            <div className={`stat-item ${styles.stat}`}>
              <div className={styles.statNumber}>05+</div>
              <div className={styles.statLabel}>YEARS OF<br />EXPERIENCE</div>
            </div>
            <div className={`stat-item ${styles.stat}`}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>BRIDES<br />STYLED</div>
            </div>
            <div className={`stat-item ${styles.stat}`}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>DESTINATION<br />WEDDINGS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
