"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhyDivya.module.css";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    num: "01",
    title: "PERSONALISED ARTISTRY",
    desc: "Every look is uniquely tailored to your features, outfit, and personal style. No generic templates."
  },
  {
    num: "02",
    title: "PREMIUM PRODUCTS",
    desc: "Only using luxury international brands like Charlotte Tilbury, NARS, MAC, and Huda Beauty for flawless longevity."
  },
  {
    num: "03",
    title: "HYGIENE & CARE",
    desc: "Strict sanitization protocols. Brushes and tools are meticulously cleaned before every single application."
  },
  {
    num: "04",
    title: "EXPERIENCE",
    desc: "Years of experience handling high-pressure bridal environments, ensuring you remain relaxed and on-time."
  }
];

export default function WhyDivya() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
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

  return (
    <section className={`section ${styles.whyDivya}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="02" title="THE PHILOSOPHY" align="center" />
        
        <div className={styles.grid}>
          {principles.map((p, i) => (
            <div 
              className={styles.item} 
              key={p.num} 
              ref={el => itemsRef.current[i] = el}
            >
              <div className={styles.number}>{p.num}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
