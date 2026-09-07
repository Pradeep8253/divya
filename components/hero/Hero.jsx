"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import styles from "./Hero.module.css";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(imageRef.current, {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      })
      .fromTo(
        ".hero-reveal", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.8"
      );

      // Mouse Parallax Effect
      const handleMouseMove = (e) => {
        if (!imageRef.current) return;
        
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
          gsap.to(imageRef.current, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper} ref={imageRef}>
          <Image 
            src="/hero.jpg"
            alt="Divya Bridal Beauty"
            fill
            priority
            className={styles.image}
            sizes="100vw"
          />
        </div>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content} ref={textRef}>
        <span className={`${styles.eyebrow} hero-reveal`}>BRIDAL BEAUTY • MAKEUP • HAIRSTYLES</span>
        <h1 className={`${styles.title} hero-reveal`}>
          Beauty,<br />beautifully<br />remembered.
        </h1>
        <p className={`${styles.description} hero-reveal`}>
          Luxury makeup and hairstyling crafted to make every moment feel unforgettable.
        </p>
        <div className={`${styles.actions} hero-reveal`}>
          <Link href="/booking" className="button-primary">
            BOOK YOUR DATE
          </Link>
          <Link href="/portfolio" className="button-secondary">
            SEE PORTFOLIO
          </Link>
        </div>
      </div>
      
      <div className={`${styles.scrollIndicator} hero-reveal`}>
        <div className={styles.scrollLine}></div>
        <span>SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
}
