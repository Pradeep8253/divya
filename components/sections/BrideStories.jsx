"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BrideStories.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { stories } from "@/data/testimonials";

export default function BrideStories() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax effect on the image
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // Text reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const story = stories[0]; // Just showing one featured story for the homepage

  if (!story) return null;

  return (
    <section className={`section ${styles.storiesSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="11" title="REAL BRIDES" />
        
        <div className={styles.content}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={story.image}
                alt={story.bride}
                fill
                className={styles.image}
                ref={imageRef}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className={styles.textColumn} ref={textRef}>
            <span className={styles.eyebrow}>THE BRIDE STORY</span>
            <h3 className={styles.brideName}>{story.bride}</h3>
            
            <div className={styles.details}>
              <div className={styles.detailGroup}>
                <span className={styles.label}>EVENT</span>
                <span className={styles.value}>{story.event}</span>
              </div>
              <div className={styles.detailGroup}>
                <span className={styles.label}>LOOK</span>
                <span className={styles.value}>{story.look}</span>
              </div>
            </div>
            
            <p className={styles.storyText}>"{story.story}"</p>
            
            <div className={styles.services}>
              {story.services.map((service, index) => (
                <span key={index} className={styles.tag}>{service}</span>
              ))}
            </div>
            
            <div style={{ marginTop: '48px' }}>
              <Link href="/portfolio" className="button-secondary">
                SEE MORE STORIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
