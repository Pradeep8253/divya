"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Packages.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { packages } from "@/data/packages";

export default function Packages() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
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
    <section className={`section ${styles.packagesSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="04" title="BRIDAL PACKAGES" align="center" />
        
        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div 
              className={`${styles.card} ${pkg.highlighted ? styles.highlighted : ''}`} 
              key={pkg.id}
              ref={el => cardsRef.current[i] = el}
            >
              {pkg.highlighted && <div className={styles.badge}>MOST POPULAR</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{pkg.name}</h3>
                <p className={styles.description}>{pkg.description}</p>
              </div>
              
              <div className={styles.price}>{pkg.price}</div>
              
              <div className="gold-line" style={{ margin: '24px 0', opacity: 0.2 }}></div>
              
              <ul className={styles.features}>
                {pkg.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <span className={styles.bullet}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={`/booking?package=${pkg.id}`} className={pkg.highlighted ? 'button-primary' : 'button-secondary'} style={{ width: '100%', marginTop: '32px' }}>
                ENQUIRE NOW
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.builderCta}>
          <p className={styles.builderText}>Need something more specific?</p>
          <Link href="/booking#builder" className={styles.builderLink}>
            BUILD YOUR CUSTOM PACKAGE →
          </Link>
        </div>
      </div>
    </section>
  );
}
