"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Filter to show a few featured services
  const featuredServices = services.slice(0, 4);

  return (
    <section className={`section ${styles.servicesSection}`} ref={containerRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeading number="03" title="THE SERVICES" />
          <Link href="/services" className={styles.viewAll}>
            VIEW ALL SERVICES
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredServices.map((service, i) => (
            <Link 
              href={`/services#${service.id}`} 
              className={styles.card} 
              key={service.id}
              ref={el => cardsRef.current[i] = el}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.overlay}></div>
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.title}>{service.name}</h3>
                <div className={styles.explore}>
                  <div className={styles.line}></div>
                  <span>EXPLORE SERVICE</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
