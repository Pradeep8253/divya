"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Testimonials.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section ${styles.testimonialsSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="07" title="CLIENT LOVE" />
        
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div 
              className={styles.card} 
              key={t.id}
              ref={el => cardsRef.current[i] = el}
            >
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className={styles.image}
                    sizes="60px"
                  />
                </div>
                <div>
                  <h4 className={styles.name}>{t.name}</h4>
                  <span className={styles.event}>{t.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
