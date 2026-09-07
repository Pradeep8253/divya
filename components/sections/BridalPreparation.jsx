"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BridalPreparation.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const checklistItems = [
  "Book your makeup artist 6-8 months in advance",
  "Schedule a bridal trial 2-3 months before the wedding",
  "Start a consistent skincare routine",
  "Finalize your wedding outfit and jewelry",
  "Book your pre-wedding salon services (facials, waxing)",
  "Prepare a touch-up kit for the wedding day"
];

export default function BridalPreparation() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: 0.5 + (i * 0.1),
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
    <section className={`section ${styles.preparationSection}`} ref={containerRef}>
      <div className="container">
        <SectionHeading number="08" title="BRIDAL PREPARATION" align="center" />
        
        <div className={styles.card} ref={cardRef}>
          <div className={styles.content}>
            <h3 className={styles.title}>Your Wedding Beauty Checklist</h3>
            <p className={styles.description}>
              Flawless makeup starts long before the wedding day. Here are the essential steps to ensure you are glowing from within.
            </p>
            
            <ul className={styles.checklist}>
              {checklistItems.map((item, i) => (
                <li 
                  key={i} 
                  className={styles.checklistItem}
                  ref={el => itemsRef.current[i] = el}
                >
                  <CheckCircle2 size={20} className={styles.icon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/bridal" className={styles.link}>
              VIEW FULL PREPARATION GUIDE →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
