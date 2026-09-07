"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Portfolio.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Show a selection for the homepage
  const featuredPortfolio = portfolio.slice(0, 5);

  return (
    <section className={`section ${styles.portfolioSection}`} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeading number="05" title="THE PORTFOLIO" />
          <Link href="/portfolio" className="button-secondary">
            EXPLORE FULL GALLERY
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredPortfolio.map((item, i) => (
            <div 
              className={`${styles.item} ${styles[item.span] || ''}`} 
              key={item.id}
              ref={el => itemsRef.current[i] = el}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.category}>{item.category}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <button className={styles.actionBtn}>VIEW LOOK</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
